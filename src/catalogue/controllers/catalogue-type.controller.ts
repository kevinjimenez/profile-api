import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatalogueTypeService } from '@/catalogue/services/catalogue-type.service';
import {
  CreateCatalogueTypeDto,
  UpdateCatalogueTypeDto,
} from '@/catalogue/dto';

@Controller('catalogue-type')
export class CatalogueTypeController {
  constructor(private readonly catalogueTypeService: CatalogueTypeService) {}

  @Post()
  create(@Body() createCatalogueTypeDto: CreateCatalogueTypeDto) {
    return this.catalogueTypeService.create(createCatalogueTypeDto);
  }

  @Get()
  findAll() {
    return this.catalogueTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogueTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatalogueTypeDto: UpdateCatalogueTypeDto,
  ) {
    return this.catalogueTypeService.update(+id, updateCatalogueTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogueTypeService.remove(+id);
  }
}
