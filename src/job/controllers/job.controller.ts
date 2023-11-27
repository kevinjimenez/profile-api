import { Job } from '@/job/entities/job.entity';
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
import { CreateJobDto, UpdateJobDto } from '@/job/dto';
import { JobService } from '@/job/services/job.service';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Job[], number]> {
    return this.jobService.findAll(filterDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.jobService.findByUserId(userId);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.jobService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.jobService.remove(id);
  }
}
