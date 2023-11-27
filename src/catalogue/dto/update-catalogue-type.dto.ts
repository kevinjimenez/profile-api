import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogueTypeDto } from '@/catalogue/dto/create-catalogue-type.dto';

export class UpdateCatalogueTypeDto extends PartialType(
  CreateCatalogueTypeDto,
) {}
