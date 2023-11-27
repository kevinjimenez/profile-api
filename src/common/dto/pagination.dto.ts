import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number) // similar a enableImplicitConversion
  limit?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number) // similar a enableImplicitConversion
  offset?: number;
}
