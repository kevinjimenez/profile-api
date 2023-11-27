import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Job } from '@/job/entities/job.entity';

@Entity('responsibilities')
export class Responsibility extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @ManyToOne(() => Job, (job) => job.responsibilities)
  job: Job | string;
}
