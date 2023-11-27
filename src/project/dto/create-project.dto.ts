import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsIn(['web', 'mobile', 'other', 'api'])
  type: string;

  @IsNotEmpty()
  @IsIn(['progress', 'stand_by', 'finished'])
  status: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsString()
  @IsOptional()
  user?: string;

  @IsString()
  @IsOptional()
  job?: string;
}
