import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '@/common/entities/audit.entity';
import { Skill } from '@/project/entities';
import { User } from '@/user/entities/user.entity';

@Entity('users_skills')
export class UserSkill extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userSkills)
  user: User | string;

  @ManyToOne(() => Skill, (skill) => skill.skillUsers)
  skill: Skill | string;
}
