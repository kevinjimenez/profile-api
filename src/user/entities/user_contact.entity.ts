import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '@/user/entities/contact.entity';
import { User } from '@/user/entities/user.entity';

@Entity('users_contacts')
export class UserContact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userContacts)
  user: User | string;

  @ManyToOne(() => Contact, (contact) => contact.contactUsers)
  contact: Contact | string;
}
