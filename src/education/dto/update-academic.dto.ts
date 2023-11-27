import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicDto } from '@/education/dto/create-academic.dto';

export class UpdateAcademicDto extends PartialType(CreateAcademicDto) {}
