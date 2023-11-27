import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsibility } from '@/job/entities/responsibility.entity';
import { ResponsibilityController } from '@/job/controllers/responsibility.controller';
import { Job } from '@/job/entities/job.entity';
import { JobService } from '@/job/services/job.service';
import { JobController } from '@/job/controllers/job.controller';
import { ResponsibilityService } from '@/job/services/responsibility.service';

@Module({
  imports: [TypeOrmModule.forFeature([Job, Responsibility])],
  controllers: [JobController, ResponsibilityController],
  providers: [JobService, ResponsibilityService],
  exports: [JobService, ResponsibilityService],
})
export class JobModule {}
