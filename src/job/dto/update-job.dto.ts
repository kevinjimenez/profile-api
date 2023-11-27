import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from '@/job/dto/create-job.dto';

export class UpdateJobDto extends PartialType(CreateJobDto) {}
