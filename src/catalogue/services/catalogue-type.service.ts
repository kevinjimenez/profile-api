import { Injectable } from '@nestjs/common';
import {
  CreateCatalogueTypeDto,
  UpdateCatalogueTypeDto,
} from '@/catalogue/dto';

@Injectable()
export class CatalogueTypeService {
  create(createCatalogueTypeDto: CreateCatalogueTypeDto) {
    return 'This action adds a new catalogueType';
  }

  findAll() {
    return `This action returns all catalogueType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogueType`;
  }

  update(id: number, updateCatalogueTypeDto: UpdateCatalogueTypeDto) {
    return `This action updates a #${id} catalogueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogueType`;
  }
}
