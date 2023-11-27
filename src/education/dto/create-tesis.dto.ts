import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTesisDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  authors: string;

  @IsNotEmpty()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @IsString()
  appointment: string;

  @IsNotEmpty()
  @IsString()
  link: string;

  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @IsString()
  published?: string;

  @IsNotEmpty()
  @IsString()
  academic: string;
}
