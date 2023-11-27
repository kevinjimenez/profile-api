import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateProjectDto, UpdateProjectDto } from '@/project/dto';
import { Project, ProjectSkill, Skill } from '@/project/entities';
import { ProjectSkillService } from '@/project/services/project_skill.service';
import { SkillService } from '@/project/services/skill.service';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name);

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly skillService: SkillService,
    private readonly projectSkillService: ProjectSkillService,
    private readonly dataSource: DataSource,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const { skills = [], ...createProject } = createProjectDto;
      const project = this.projectRepository.create(createProject);
      const { id } = await this.projectRepository.save(project);
      if (skills.length > 0) {
        await this.addSkillToProject(id, skills);
      }
      return { ...createProjectDto } as Project;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Project[], number]> {
    const { limit = 10, offset = 0, relations } = filterDto;
    const projects = await this.projectRepository.findAndCount({
      take: limit,
      skip: offset,
      relations: [...relations],
    });
    return projects;
  }

  async findByUserId(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException(`userId: [${userId}] invalid`);
    }

    return await this.projectRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        projectSkills: {
          skill: true,
        },
      },
    });
  }

  async findOne(id: string) {
    let project: Project;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    project = await this.projectRepository.findOneBy({ id });

    if (!project) {
      throw new NotFoundException(`Project with ${id} not found`);
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectRepository.preload({
      id,
      ...updateProjectDto,
    });

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(project);
      await queryRunner.commitTransaction();
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner

      return this.findOne(id);
    } catch (e) {
      await queryRunner.rollbackTransaction(); // si sale algo mal hacer el roll back en base
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner o limpiar
      HandleExceptions.DB(e);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.projectRepository.remove(product);
  }

  private async addSkillToProject(projectId: string, skillIds: string[]) {
    const findsPromises: Promise<Skill>[] = [];
    skillIds.forEach((skillId) => {
      findsPromises.push(this.skillService.findOne(skillId));
    });

    const foundPromises = await Promise.all(findsPromises);
    const insertPromises: Promise<ProjectSkill>[] = [];
    foundPromises.forEach(({ id }) => {
      insertPromises.push(
        this.projectSkillService.create({
          project: projectId,
          skill: id,
        }),
      );
    });

    await Promise.all(insertPromises);
  }

  async deleteAllProjects() {
    const query = this.projectRepository.createQueryBuilder('projects');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
