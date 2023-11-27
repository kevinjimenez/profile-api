import { Injectable } from '@nestjs/common';
import {
  AcademicService,
  EducationService,
  TesisService,
} from '@/education/services';
import { JobService } from '@/job/services/job.service';
import { ResponsibilityService } from '@/job/services/responsibility.service';
import { MenuService } from '@/menu/menu.service';
import {
  ProjectService,
  ProjectSkillService,
  SkillService,
} from '@/project/services';
import {
  ContactService,
  UserContactService,
  UserService,
  UserSkillService,
} from '@/user/services';
import {
  academics,
  contacts,
  educations,
  jobs,
  menuItems,
  projects,
  responsibilities,
  skills,
  tesis,
  users,
} from '@/seed/data/data';

@Injectable()
export class SeedService {
  constructor(
    private readonly skillService: SkillService,
    private readonly userSkillService: UserSkillService,
    private readonly projectSkillService: ProjectSkillService,
    private readonly menuService: MenuService,
    private readonly userService: UserService,
    private readonly contactService: ContactService,
    private readonly userContactService: UserContactService,
    private readonly academicService: AcademicService,
    private readonly educationService: EducationService,
    private readonly tesisService: TesisService,
    private readonly projectService: ProjectService,
    private readonly jobService: JobService,
    private readonly responsibilityService: ResponsibilityService,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertNewMenus();
    await this.insertNewSkills();
    await this.insertNewContacts();
    await this.insertNewUsers();
    await this.insertNewJobs();
    await this.insertNewEducations();
    await this.insertNewAcademics();
    await this.insertNewTesis();
    await this.insertNewProjects();
    await this.insertNewResponsibilities();
    return `seed execute`;
  }

  private async deleteTables() {
    await this.menuService.deleteAllMenus();
    await this.projectSkillService.deleteAllUserSkills();
    await this.projectService.deleteAllProjects();
    await this.userSkillService.deleteAllUserSkills();
    await this.userContactService.deleteAllUserContacts();
    await this.skillService.deleteAllSkills();
    await this.contactService.deleteAllContacts();
    await this.tesisService.deleteAllTesis();
    await this.academicService.deleteAllAcademics();
    await this.educationService.deleteAllEducations();

    await this.responsibilityService.deleteAllResponsibilities();
    await this.jobService.deleteAllJobsProjects();
    await this.userService.deleteAllUsers();
  }

  private async insertNewSkills() {
    await this.skillService.deleteAllSkills();
    const items = skills;

    const insertPromises = [];
    items.forEach((skill) => {
      insertPromises.push(this.skillService.create(skill));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewMenus() {
    await this.menuService.deleteAllMenus();
    const items = menuItems;

    const insertPromises = [];
    items.forEach((menuItem) => {
      insertPromises.push(this.menuService.create(menuItem));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewUsers() {
    await this.userService.deleteAllUsers();
    const items = users;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.userService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewContacts() {
    await this.contactService.deleteAllContacts();
    const items = contacts;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.contactService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewAcademics() {
    await this.academicService.deleteAllAcademics();
    const items = academics;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.academicService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewEducations() {
    await this.educationService.deleteAllEducations();
    const items = educations;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.educationService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewTesis() {
    await this.tesisService.deleteAllTesis();
    const items = tesis;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.tesisService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewProjects() {
    await this.projectService.deleteAllProjects();
    const items = projects;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.projectService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewJobs() {
    await this.jobService.deleteAllJobsProjects();
    const items = jobs;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.jobService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }

  private async insertNewResponsibilities() {
    await this.responsibilityService.deleteAllResponsibilities();
    const items = responsibilities;

    const insertPromises = [];
    items.forEach((item) => {
      insertPromises.push(this.responsibilityService.create(item));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
