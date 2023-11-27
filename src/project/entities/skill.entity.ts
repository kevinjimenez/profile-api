import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { UserSkill } from '@/user/entities';
import { ProjectSkill } from '@/project/entities/project_skill.entity';

@Entity('skills')
export class Skill extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('float', {
    default: 0,
  })
  percentage: number;

  @Column('text', {
    nullable: true,
  })
  icon?: string;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.skill)
  skillUsers?: UserSkill[];

  @OneToMany(() => ProjectSkill, (projectSkill) => projectSkill.skill)
  skillProjects?: ProjectSkill[];
}
