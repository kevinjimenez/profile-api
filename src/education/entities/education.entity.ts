import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { User } from '@/user/entities';

@Entity('educations')
export class Education extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  company: string;

  @Column('text', {})
  type: string;

  @Column('text', {})
  description: string;

  @Column('text', {})
  year: string;

  @Column('text', {})
  status: string;

  @Column('float', { default: 0 })
  percentage: number;

  @ManyToOne(() => User, (user) => user.educations)
  user: User | string;
}
