import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from '@/project/dto/create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
