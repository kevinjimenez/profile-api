import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectSkillDto } from '@/project/dto/create-project_skill.dto';

export class UpdateProjectSkillDto extends PartialType(CreateProjectSkillDto) {}
