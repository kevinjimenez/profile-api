import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { VisitedService } from '@/visited/visited.service';
import { CreateVisitedDto } from '@/visited/dto/create-visited.dto';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('visited')
export class VisitedController {
  constructor(private readonly visitedService: VisitedService) {}

  @Post()
  create(@Body() createVisitedDto: CreateVisitedDto) {
    return this.visitedService.create(createVisitedDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto) {
    return this.visitedService.findAll(filterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitedService.findOne(id);
  }
}
