import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AcademicController,
  EducationController,
  TesisController,
} from '@/education/controllers';
import { Academic, Education, Tesis } from '@/education/entities';
import {
  AcademicService,
  EducationService,
  TesisService,
} from '@/education/services';

@Module({
  imports: [TypeOrmModule.forFeature([Education, Academic, Tesis])],
  controllers: [EducationController, AcademicController, TesisController],
  providers: [EducationService, AcademicService, TesisService],
  exports: [EducationService, AcademicService, TesisService],
})
export class EducationModule {}
