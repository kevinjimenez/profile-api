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
import { CreateAcademicDto, UpdateAcademicDto } from '@/education/dto';
import { Academic } from '@/education/entities';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class AcademicService {
  private readonly logger = new Logger(AcademicService.name);

  constructor(
    @InjectRepository(Academic)
    private readonly academicRepository: Repository<Academic>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createAcademicDto: CreateAcademicDto) {
    try {
      const academic = this.academicRepository.create({ ...createAcademicDto });
      await this.academicRepository.save(academic);
      return { ...createAcademicDto } as Academic;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Academic[], number]> {
    const { relations = [], limit = 10, offset = 0 } = filterDto;
    const academics = await this.academicRepository.findAndCount({
      take: limit,
      skip: offset,
      relations,
    });
    return academics;
  }

  async findByUserId(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException(`userId: [${userId}] invalid`);
    }
    return await this.academicRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

  async findOne(id: string) {
    let academic: Academic;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    academic = await this.academicRepository.findOneBy({ id });

    if (!academic) {
      throw new NotFoundException(`Academic with ${id} not found`);
    }

    return academic;
  }

  async update(id: string, updateAcademicDto: UpdateAcademicDto) {
    const academic = await this.academicRepository.preload({
      id,
      ...updateAcademicDto,
    });

    if (!academic) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(academic);
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
    const academic = await this.findOne(id);
    await this.academicRepository.remove(academic);
  }

  async deleteAllAcademics() {
    const query = this.academicRepository.createQueryBuilder('academics');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
