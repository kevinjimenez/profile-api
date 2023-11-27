import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';

@Entity('visited')
export class Visited extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    default: 'ip',
  })
  ip: string;

  @Column('text', {
    default: 'country',
  })
  country: string;

  @Column('text', {
    default: 'city',
  })
  city: string;

  @Column('text', {
    default: 'region',
  })
  region: string;
}
