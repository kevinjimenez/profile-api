import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatalogueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  icon: string;
}
