import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { UserContact } from '@/user/entities/user_contact.entity';

@Entity('contacts')
export class Contact extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {
    nullable: true,
  })
  customClass?: string;

  @Column('text', {
    nullable: true,
  })
  url?: string;

  @Column('text', {
    nullable: true,
  })
  value?: string;

  @Column('text', {
    nullable: true,
  })
  icon?: string;

  @OneToMany(() => UserContact, (contactUser) => contactUser.contact)
  contactUsers?: UserContact[];
}
