import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { DataSource, FindManyOptions, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateEducationDto, UpdateEducationDto } from '@/education/dto';
import { Education } from '@/education/entities';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class EducationService {
  private readonly logger = new Logger(EducationService.name);

  constructor(
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    try {
      const education = this.educationRepository.create({
        ...createEducationDto,
      });
      await this.educationRepository.save(education);
      return { ...education } as Education;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Education[], number]> {
    const { relations = [], limit = 10, offset = 0, term = '' } = filterDto;
    const query: FindManyOptions<Education> = {
      take: limit,
      skip: offset,
      relations,
    };
    if (term.length > 0) {
      query.where = {
        type: term,
      };
    }

    const educations = await this.educationRepository.findAndCount(query);
    return educations;
  }

  async findOne(id: string) {
    let education: Education;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    education = await this.educationRepository.findOneBy({ id });

    if (!education) {
      throw new NotFoundException(`Education with ${id} not found`);
    }

    return education;
  }

  async findByUserId(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException(`userId: [${userId}] invalid`);
    }
    return await this.educationRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    const education = await this.educationRepository.preload({
      id,
      ...updateEducationDto,
    });

    if (!education) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(education);
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
    const education = await this.findOne(id);
    await this.educationRepository.remove(education);
  }

  async deleteAllEducations() {
    const query = this.educationRepository.createQueryBuilder('educations');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
