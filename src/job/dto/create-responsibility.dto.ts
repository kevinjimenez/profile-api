import { IsNotEmpty, IsString } from 'class-validator';

export class CreateResponsibilityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  job: string;
}
