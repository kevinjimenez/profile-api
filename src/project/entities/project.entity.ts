import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Job } from '@/job/entities/job.entity';
import { User } from '@/user/entities';
import { ProjectSkill } from '@/project/entities/project_skill.entity';

@Entity('projects')
export class Project extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  type: string;

  @Column('text', { nullable: true })
  description?: string;

  @Column('text', {})
  status: string;

  @OneToMany(() => ProjectSkill, (projectSkill) => projectSkill.project)
  projectSkills?: ProjectSkill[];

  @ManyToOne(() => User, (user) => user.projects, { nullable: true })
  user?: User | string;

  @ManyToOne(() => Job, (job) => job.projects, { nullable: true })
  job?: Job | string;
}
