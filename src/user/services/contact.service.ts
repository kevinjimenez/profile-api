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
import { CreateContactDto, UpdateContactDto } from '@/user/dto';
import { Contact } from '@/user/entities';
import { FilterDto } from '@/common/dto/filter.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const contact = this.contactRepository.create({ ...createContactDto });
      await this.contactRepository.save(contact);
      return { ...createContactDto };
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll(filterDto: FilterDto): Promise<[Contact[], number]> {
    const { limit = 10, offset = 0 } = filterDto;
    const contacts = await this.contactRepository.findAndCount({
      take: limit,
      skip: offset,
    });
    return contacts;
  }

  async findOne(id: string) {
    let contact: Contact;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    contact = await this.contactRepository.findOneBy({ id });

    if (!contact) {
      throw new NotFoundException(`Contact with ${id} not found`);
    }

    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.preload({
      id,
      ...updateContactDto,
    });

    if (!contact) {
      throw new NotFoundException(`Contact with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(contact);
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
    const contact = await this.findOne(id);
    await this.contactRepository.remove(contact);
  }

  async deleteAllContacts() {
    const query = this.contactRepository.createQueryBuilder('projects');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
