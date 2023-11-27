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
import { CreateSkillDto, UpdateSkillDto } from '@/project/dto';
import { Skill } from '@/project/entities';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class SkillService {
  private readonly logger = new Logger(SkillService.name);

  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createSkillDto: CreateSkillDto) {
    try {
      await this.skillRepository.save({ ...createSkillDto });
      return { ...createSkillDto };
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Skill[], number]> {
    const { limit = 10, offset = 0 } = filterDto;
    const skills = await this.skillRepository.findAndCount({
      take: limit,
      skip: offset,
    });
    return skills;
  }

  async findOne(id: string) {
    let skill: Skill;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    skill = await this.skillRepository.findOneBy({ id });

    if (!skill) {
      throw new NotFoundException(`Skill with ${id} not found`);
    }

    return skill;
  }

  async findByUserId(userId: string): Promise<Skill[]> {
    if (!isUUID(userId)) {
      throw new BadRequestException(`userId: [${userId}] invalid`);
    }

    return await this.skillRepository.find({
      where: {
        skillUsers: {
          user: {
            id: userId,
          },
        },
      },
    });
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) {
    const skill = await this.skillRepository.preload({
      id,
      ...updateSkillDto,
    });

    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(skill);
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
    const product = await this.findOne(id);
    await this.skillRepository.remove(product);
  }

  async deleteAllSkills() {
    const query = this.skillRepository.createQueryBuilder('skills');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
