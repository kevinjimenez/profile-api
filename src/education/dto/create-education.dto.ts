import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsIn(['course', 'contest'])
  type: string;

  @IsNotEmpty()
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsIn(['progress', 'finished'])
  status: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  percentage?: number;

  @IsNotEmpty()
  @IsString()
  user: string;
}
