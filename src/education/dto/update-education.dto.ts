import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from '@/education/dto/create-education.dto';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {}
