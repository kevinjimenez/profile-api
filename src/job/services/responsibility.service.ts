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
import { CreateResponsibilityDto, UpdateResponsibilityDto } from '@/job/dto';
import { Responsibility } from '@/job/entities/responsibility.entity';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class ResponsibilityService {
  private readonly logger = new Logger(ResponsibilityService.name);

  constructor(
    @InjectRepository(Responsibility)
    private readonly responsibilityRepository: Repository<Responsibility>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createResponsibilityDto: CreateResponsibilityDto) {
    try {
      const responsibility = this.responsibilityRepository.create({
        ...createResponsibilityDto,
      });
      await this.responsibilityRepository.save(responsibility);
      return { ...createResponsibilityDto } as Responsibility;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Responsibility[], number]> {
    const { limit = 10, offset = 0 } = filterDto;
    const responsibilities = await this.responsibilityRepository.findAndCount({
      take: limit,
      skip: offset,
    });
    return responsibilities;
  }

  async findOne(id: string) {
    let responsibility: Responsibility;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    responsibility = await this.responsibilityRepository.findOneBy({ id });

    if (!responsibility) {
      throw new NotFoundException(`Responsibility with ${id} not found`);
    }

    return responsibility;
  }

  async update(id: string, updateResponsibilityDto: UpdateResponsibilityDto) {
    const responsibility = await this.responsibilityRepository.preload({
      id,
      ...updateResponsibilityDto,
    });

    if (!responsibility) {
      throw new NotFoundException(`Responsibility with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(responsibility);
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
    const responsibility = await this.findOne(id);
    await this.responsibilityRepository.remove(responsibility);
  }

  async deleteAllResponsibilities() {
    const query = this.responsibilityRepository.createQueryBuilder('projects');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
