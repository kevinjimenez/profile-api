import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsDateString()
  start: string;

  @IsOptional()
  @IsDateString()
  end?: string;

  @IsNotEmpty()
  @IsIn(['progress', 'end'])
  status: string;

  @IsNotEmpty()
  @IsString()
  user: string;
}
