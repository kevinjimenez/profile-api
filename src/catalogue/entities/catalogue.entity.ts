import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';

@Entity('catalogue')
export class Catalogue extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  icon: string;
}
