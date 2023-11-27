import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateJobDto, UpdateJobDto } from '@/job/dto';
import { Job } from '@/job/entities/job.entity';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);

  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createJobDto: CreateJobDto) {
    try {
      const job = this.jobRepository.create({ ...createJobDto });
      await this.jobRepository.save(job);
      return { ...createJobDto } as Job;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Job[], number]> {
    const { limit = 10, offset = 0 } = filterDto;
    const jobs = await this.jobRepository.findAndCount({
      take: limit,
      skip: offset,
    });
    return jobs;
  }

  async findOne(id: string) {
    let job: Job;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    job = await this.jobRepository.findOneBy({ id });

    if (!job) {
      throw new NotFoundException(`Job with ${id} not found`);
    }

    return job;
  }

  async findByUserId(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException(`userId: [${userId}] invalid`);
    }
    return await this.jobRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        responsibilities: true,
        projects: true,
      },
    });
  }

  async update(id: string, updateJobDto: UpdateJobDto) {
    const job = await this.jobRepository.preload({
      id,
      ...updateJobDto,
    });

    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(job);
      await queryRunner.commitTransaction();
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner

      return this.findOne(id);
    } catch (e) {
      await queryRunner.rollbackTransaction(); // si sale algo mal hacer el roll back en base
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner o limpiar
      HandleExceptions.DB(e);
    }
  }

  async remove(id: string) {
    const job = await this.findOne(id);
    await this.jobRepository.remove(job);
  }

  async deleteAllJobsProjects() {
    const query = this.jobRepository.createQueryBuilder('jobs');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
