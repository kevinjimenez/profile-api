import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogueDto } from '@/catalogue/dto/create-catalogue.dto';

export class UpdateCatalogueDto extends PartialType(CreateCatalogueDto) {}
