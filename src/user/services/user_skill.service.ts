import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateUserSkillDto } from '@/user/dto';
import { UserSkill } from '@/user/entities';

@Injectable()
export class UserSkillService {
  private readonly logger = new Logger(UserSkillService.name);

  constructor(
    @InjectRepository(UserSkill)
    private readonly userSkillRepository: Repository<UserSkill>,
  ) {}

  async create(createUserSkillDto: CreateUserSkillDto) {
    try {
      const userSkill = this.userSkillRepository.create({
        ...createUserSkillDto,
      });
      await this.userSkillRepository.save(userSkill);
      return { ...createUserSkillDto } as UserSkill;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async deleteAllUserSkills() {
    const query = this.userSkillRepository.createQueryBuilder('users_skills');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
