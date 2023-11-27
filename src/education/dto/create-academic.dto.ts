import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAcademicDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  place: string;

  @IsNotEmpty()
  @IsDateString()
  start: string;

  @IsOptional()
  @IsDateString()
  end?: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsNotEmpty()
  @IsIn(['continue', 'graduated'])
  status: string;

  @IsNotEmpty()
  @IsString()
  user: string;
}
