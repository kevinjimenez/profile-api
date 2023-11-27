import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserSkillDto {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  skill: string;
}
