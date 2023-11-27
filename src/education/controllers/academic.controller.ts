import { Academic } from "@/education/entities";
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
import { CreateAcademicDto, UpdateAcademicDto } from '@/education/dto';
import { AcademicService } from '@/education/services';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) {}

  @Post()
  create(@Body() createAcademicDto: CreateAcademicDto) {
    return this.academicService.create(createAcademicDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Academic[], number]> {
    return this.academicService.findAll(filterDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.academicService.findByUserId(userId);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.academicService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAcademicDto: UpdateAcademicDto,
  ) {
    return this.academicService.update(id, updateAcademicDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.academicService.remove(id);
  }
}
