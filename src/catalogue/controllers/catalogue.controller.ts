import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatalogueDto, UpdateCatalogueDto } from '@/catalogue/dto';
import { CatalogueTypeService } from '@/catalogue/services/catalogue-type.service';
import { CatalogueService } from '@/catalogue/services/catalogue.service';

@Controller('catalogue')
export class CatalogueController {
  constructor(
    private readonly catalogueService: CatalogueService,
    private readonly catalogueTypeService: CatalogueTypeService,
  ) {}

  @Post()
  create(@Body() createCatalogueDto: CreateCatalogueDto) {
    return this.catalogueService.create(createCatalogueDto);
  }

  @Get()
  findAll() {
    return this.catalogueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatalogueDto: UpdateCatalogueDto,
  ) {
    return this.catalogueService.update(+id, updateCatalogueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogueService.remove(+id);
  }

  // @Post()
  // create(@Body() createCatalogueTypeDto: CreateCatalogueTypeDto) {
  //   return this.catalogueTypeService.create(createCatalogueTypeDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.catalogueTypeService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.catalogueTypeService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatalogueTypeDto: UpdateCatalogueTypeDto) {
  //   return this.catalogueTypeService.update(+id, updateCatalogueTypeDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catalogueTypeService.remove(+id);
  // }
}
