import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateProjectSkillDto, UpdateProjectSkillDto } from '@/project/dto';
import { ProjectSkill } from '@/project/entities';

@Injectable()
export class ProjectSkillService {
  private readonly logger = new Logger(ProjectSkillService.name);

  constructor(
    @InjectRepository(ProjectSkill)
    private readonly projectSkillRepository: Repository<ProjectSkill>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createProjectSkillDto: CreateProjectSkillDto) {
    try {
      const userSkill = this.projectSkillRepository.create({
        ...createProjectSkillDto,
      });
      await this.projectSkillRepository.save(userSkill);
      return { ...createProjectSkillDto } as ProjectSkill;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  findAll() {
    return `This action returns all projectSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectSkill`;
  }

  update(id: number, updateProjectSkillDto: UpdateProjectSkillDto) {
    return `This action updates a #${id} projectSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectSkill`;
  }

  async deleteAllUserSkills() {
    const query =
      this.projectSkillRepository.createQueryBuilder('projects_skills');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
