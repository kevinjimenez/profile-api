import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from '@/project/dto/create-skill.dto';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
