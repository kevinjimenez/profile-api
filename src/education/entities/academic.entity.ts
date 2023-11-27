import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { User } from '@/user/entities';
import { Tesis } from '@/education/entities/tesis.entity';

@Entity({ name: 'academics' })
export class Academic extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  title: string;

  @Column('text', {})
  place: string;

  @Column('date', {})
  start: string;

  @Column('date', {
    nullable: true,
  })
  end?: string;

  @Column('text', {
    nullable: true,
  })
  logo?: string;

  @Column('text', {})
  status: string;

  @OneToMany(() => Tesis, (tesis) => tesis.academic)
  tesis?: Tesis[];

  @ManyToOne(() => User, (user) => user.academics)
  user: User | string;
}
