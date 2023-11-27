import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';

@Entity('menu')
@Tree('closure-table')
export class Menu extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer', {})
  order: number;

  @Column('text', {})
  routerLink: string;

  @Column('text', {})
  label: string;

  @Column('text', {
    nullable: true,
  })
  icon?: string;

  @TreeChildren()
  items: Menu[];

  @TreeParent()
  parent?: Menu | string;
}
