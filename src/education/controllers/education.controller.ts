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
import { CreateEducationDto, UpdateEducationDto } from '@/education/dto';
import { EducationService } from '@/education/services';
import { Education } from '../entities';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Education[], number]> {
    return this.educationService.findAll(filterDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.educationService.findByUserId(userId);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.educationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.educationService.remove(id);
  }
}
