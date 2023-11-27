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
import { CreateTesisDto, UpdateTesisDto } from '@/education/dto';
import { Academic, Tesis } from "@/education/entities";
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class TesisService {
  private readonly logger = new Logger(TesisService.name);

  constructor(
    @InjectRepository(Tesis)
    private readonly tesisRepository: Repository<Tesis>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createTesisDto: CreateTesisDto) {
    try {
      const tesis = this.tesisRepository.create({ ...createTesisDto });
      await this.tesisRepository.save(tesis);
      return { ...createTesisDto } as Tesis;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Tesis[], number]> {
    const { limit = 10, offset = 0 } = filterDto;
    const tesis = await this.tesisRepository.findAndCount({
      take: limit,
      skip: offset,
    });
    return tesis;
  }

  async findOne(id: string) {
    let tesis: Tesis;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    tesis = await this.tesisRepository.findOneBy({ id });

    if (!tesis) {
      throw new NotFoundException(`Tesis with ${id} not found`);
    }

    return tesis;
  }

  async update(id: string, updateTesisDto: UpdateTesisDto) {
    const tesis = await this.tesisRepository.preload({
      id,
      ...updateTesisDto,
    });

    if (!tesis) {
      throw new NotFoundException(`Tesis with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(tesis);
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
    const tesis = await this.findOne(id);
    await this.tesisRepository.remove(tesis);
  }

  async deleteAllTesis() {
    const query = this.tesisRepository.createQueryBuilder('tesis');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
