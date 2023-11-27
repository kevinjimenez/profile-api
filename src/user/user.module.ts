import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from '@/project/project.module';
import { ContactController } from '@/user/controllers/contact.controller';
import { UserController } from '@/user/controllers/user.controller';
import { Contact, User, UserContact, UserSkill } from '@/user/entities';
import {
  ContactService,
  UserContactService,
  UserService,
  UserSkillService,
} from '@/user/services';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Contact, UserSkill, UserContact]),
    ProjectModule,
  ],
  controllers: [UserController, ContactController],
  providers: [
    UserService,
    ContactService,
    UserSkillService,
    UserContactService,
  ],
  exports: [UserService, ContactService, UserSkillService, UserContactService],
})
export class UserModule {}
