import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Project } from '@/project/entities';
import { User } from '@/user/entities';
import { Responsibility } from '@/job/entities/responsibility.entity';

@Entity('jobs')
export class Job extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  company: string;

  @Column('text', {})
  position: string;

  @Column('date', {})
  start: string;

  @Column('date', {
    nullable: true,
  })
  end?: string;

  @Column('text', {})
  status: string;

  @OneToMany(() => Project, (project) => project.job)
  projects?: Project[];

  @OneToMany(() => Responsibility, (responsibility) => responsibility.job)
  responsibilities?: Responsibility[];

  @ManyToOne(() => User, (user) => user.jobs)
  user: User | string;
}
