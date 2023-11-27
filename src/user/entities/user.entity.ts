import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Academic, Education } from '@/education/entities';
import { Job } from '@/job/entities/job.entity';
import { Project } from '@/project/entities';
import { UserContact } from '@/user/entities/user_contact.entity';
import { UserSkill } from '@/user/entities/user_skill.entity';

@Entity('users')
export class User extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  name: string;

  @Column('text', {})
  lastName: string;

  @Column('text', {})
  middleName: string;

  @Column('text', {})
  title: string;

  @Column('text', {})
  description: string;

  @Column('text', {})
  place: string;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.user)
  userSkills?: UserSkill[];

  @OneToMany(() => UserContact, (userContact) => userContact.user)
  userContacts?: UserContact[];

  @OneToMany(() => Project, (project) => project.user)
  projects?: Project[];

  @OneToMany(() => Job, (job) => job.user)
  jobs?: Job[];

  @OneToMany(() => Academic, (academic) => academic.user)
  academics?: Academic[];

  @OneToMany(() => Education, (education) => education.user)
  educations?: Education[];
}
