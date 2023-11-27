import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '@/project/entities/project.entity';
import { Skill } from '@/project/entities/skill.entity';

@Entity('projects_skills')
export class ProjectSkill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Project, (project) => project.projectSkills)
  project: Project | string;

  @ManyToOne(() => Skill, (skill) => skill.skillProjects)
  skill: Skill | string;
}
