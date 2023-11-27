import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';

@Entity('catalogue_type')
export class CatalogueType extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  code: string;

  @Column('text', {})
  description: string;
}
