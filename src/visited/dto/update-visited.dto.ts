import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitedDto } from '@/visited/dto/create-visited.dto';

export class UpdateVisitedDto extends PartialType(CreateVisitedDto) {}
