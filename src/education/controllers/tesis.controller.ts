import { Academic, Tesis } from "@/education/entities";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateTesisDto, UpdateTesisDto } from '@/education/dto';
import { TesisService } from '@/education/services';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('tesis')
export class TesisController {
  constructor(private readonly tesisService: TesisService) {}

  @Post()
  create(@Body() createTesisDto: CreateTesisDto) {
    return this.tesisService.create(createTesisDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Tesis[], number]> {
    return this.tesisService.findAll(filterDto);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.tesisService.findOne(id);
  }

  @Patch(':term')
  update(
    @Param('term', ParseUUIDPipe) id: string,
    @Body() updateTesisDto: UpdateTesisDto,
  ) {
    return this.tesisService.update(id, updateTesisDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tesisService.remove(id);
  }
}
