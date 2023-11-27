import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from '@/project/controllers/project.controller';
import { SkillController } from '@/project/controllers/skill.controller';
import { Project, ProjectSkill, Skill } from '@/project/entities';
import {
  ProjectService,
  ProjectSkillService,
  SkillService,
} from '@/project/services';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Skill, ProjectSkill])],
  controllers: [ProjectController, SkillController],
  providers: [ProjectService, SkillService, ProjectSkillService],
  exports: [ProjectService, SkillService, ProjectSkillService],
})
export class ProjectModule {}
