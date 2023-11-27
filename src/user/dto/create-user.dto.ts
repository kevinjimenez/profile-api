import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  middleName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  place: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  contacts?: string[];
}
