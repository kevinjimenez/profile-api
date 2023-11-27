import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSkillDto } from '@/user/dto/create-user_skill.dto';

export class UpdateUserSkillDto extends PartialType(CreateUserSkillDto) {}
