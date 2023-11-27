import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Academic } from '@/education/entities/academic.entity';

@Entity('tesis')
export class Tesis extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  authors: string;

  @Column('text', {})
  summary: string;

  @Column('text', {})
  appointment: string;

  @Column('text', {})
  link: string;

  @Column('text', {
    nullable: true,
  })
  publisher?: string;

  @Column('text', {
    nullable: true,
  })
  published?: string;

  @ManyToOne(() => Academic, (academic) => academic.tesis)
  academic: Academic | string;
}
