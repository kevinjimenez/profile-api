import { Skill } from '@/project/entities';
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
import { SkillService } from '@/project/services';
import { CreateSkillDto, UpdateSkillDto } from '@/project/dto';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Skill[], number]> {
    return this.skillService.findAll(filterDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.skillService.findByUserId(userId);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.skillService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return this.skillService.update(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.skillService.remove(id);
  }
}
