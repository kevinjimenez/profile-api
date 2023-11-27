import { Responsibility } from '@/job/entities/responsibility.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { CreateResponsibilityDto, UpdateResponsibilityDto } from '@/job/dto';
import { ResponsibilityService } from '@/job/services/responsibility.service';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('responsibility')
export class ResponsibilityController {
  constructor(private readonly responsibilityService: ResponsibilityService) {}

  @Post()
  create(@Body() createResponsibilityDto: CreateResponsibilityDto) {
    return this.responsibilityService.create(createResponsibilityDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Responsibility[], number]> {
    return this.responsibilityService.findAll(filterDto);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.responsibilityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateResponsibilityDto: UpdateResponsibilityDto,
  ) {
    return this.responsibilityService.update(id, updateResponsibilityDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.responsibilityService.remove(id);
  }
}
