import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateUserContactDto, UpdateUserContactDto } from '@/user/dto';
import { UserContact } from '@/user/entities';

@Injectable()
export class UserContactService {
  private readonly logger = new Logger(UserContactService.name);

  constructor(
    @InjectRepository(UserContact)
    private readonly userContactRepository: Repository<UserContact>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createUserContactDto: CreateUserContactDto) {
    try {
      const userContact = this.userContactRepository.create({
        ...createUserContactDto,
      });
      await this.userContactRepository.save(userContact);
      return { ...createUserContactDto } as UserContact;
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  findAll() {
    return `This action returns all userContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userContact`;
  }

  update(id: number, updateUserContactDto: UpdateUserContactDto) {
    return `This action updates a #${id} userContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} userContact`;
  }

  async deleteAllUserContacts() {
    const query =
      this.userContactRepository.createQueryBuilder('users_contacts');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
