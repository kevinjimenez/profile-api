import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Menu } from '@/menu/entities/menu.entity';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  order: number;

  @IsNotEmpty()
  @IsString()
  routerLink: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Menu)
  items: Menu[];
}
