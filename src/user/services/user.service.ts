import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { DataSource, FindManyOptions, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { Skill } from '@/project/entities';
import { SkillService } from '@/project/services';
import { CreateUserDto, UpdateUserDto } from '@/user/dto';
import { Contact, User, UserContact, UserSkill } from '@/user/entities';
import { ContactService } from '@/user/services/contact.service';
import { UserContactService } from '@/user/services/user_contact.service';
import { UserSkillService } from '@/user/services/user_skill.service';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly skillService: SkillService,
    private readonly contactService: ContactService,
    private readonly userSkillService: UserSkillService,
    private readonly userContactService: UserContactService,
    private readonly dataSource: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { skills = [], contacts = [], ...restUser } = createUserDto;
      const user = this.userRepository.create({
        ...restUser,
      });

      const { id } = await this.userRepository.save(user);

      if (skills.length > 0) {
        await this.addSkillToUser(id, skills);
      }

      if (contacts.length > 0) {
        await this.addContactToUser(id, contacts);
      }

      return { ...user } as User;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[User[], number]> {
    const { limit = 10, offset = 0, relations = [] } = filterDto;
    const findOptions: FindManyOptions<User> = {
      take: limit,
      skip: offset,
      relations: [...relations],
    };

    const users = await this.userRepository.findAndCount(findOptions);
    return users;
  }

  async findOne(id: string, filterDto?: FilterDto) {
    const { relations = [] } = filterDto;
    const findOptions: FindManyOptions<User> = {
      relations: [...relations],
    };
    let user: User;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    findOptions.where = { id };
    user = await this.userRepository.findOne(findOptions);

    if (!user) {
      throw new NotFoundException(`User with ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { skills = [], contacts = [], ...restUser } = updateUserDto;
    const user = await this.userRepository.preload({
      id,
      ...restUser,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(user);
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
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  private async addSkillToUser(userId: string, skillIds: string[]) {
    const findsPromises: Promise<Skill>[] = [];
    skillIds.forEach((skillId) => {
      findsPromises.push(this.skillService.findOne(skillId));
    });

    const foundPromises = await Promise.all(findsPromises);
    const insertPromises: Promise<UserSkill>[] = [];
    foundPromises.forEach(({ id }) => {
      insertPromises.push(
        this.userSkillService.create({
          user: userId,
          skill: id,
        }),
      );
    });

    await Promise.all(insertPromises);
  }

  private async addContactToUser(userId: string, contactsIds: string[]) {
    const findsPromises: Promise<Contact>[] = [];
    contactsIds.forEach((contactId) => {
      findsPromises.push(this.contactService.findOne(contactId));
    });

    const foundPromises = await Promise.all(findsPromises);
    const insertPromises: Promise<UserContact>[] = [];
    foundPromises.forEach(({ id }) => {
      insertPromises.push(
        this.userContactService.create({
          user: userId,
          contact: id,
        }),
      );
    });

    await Promise.all(insertPromises);
  }

  async deleteAllUsers() {
    const query = this.userRepository.createQueryBuilder('projects');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
