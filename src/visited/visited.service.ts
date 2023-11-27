import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateVisitedDto } from '@/visited/dto/create-visited.dto';
import { Visited } from '@/visited/entities/visited.entity';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class VisitedService {
  private readonly logger = new Logger(VisitedService.name);

  constructor(
    @InjectRepository(Visited)
    private readonly visitedRepository: Repository<Visited>,
  ) {}

  async create(createVisitedDto: CreateVisitedDto) {
    try {
      const visited = this.visitedRepository.create(createVisitedDto);
      await this.visitedRepository.save(visited);
      return { ...createVisitedDto };
    } catch (e) {
      return HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto) {
    const { limit = 10, offset = 0 } = filterDto;
    const visiteds = await this.visitedRepository.find({
      take: limit,
      skip: offset,
    });
    return visiteds;
  }

  async findOne(id: string) {
    let visited: Visited;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    visited = await this.visitedRepository.findOneBy({ id });

    if (!visited) {
      throw new NotFoundException(`Visited with ${id} not found`);
    }

    return visited;
  }
}
