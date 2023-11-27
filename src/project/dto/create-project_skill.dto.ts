import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectSkillDto {
  @IsNotEmpty()
  @IsString()
  project: string;

  @IsNotEmpty()
  @IsString()
  skill: string;
}
