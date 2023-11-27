import { PartialType } from '@nestjs/mapped-types';
import { CreateUserContactDto } from '@/user/dto/create-user_contact.dto';

export class UpdateUserContactDto extends PartialType(CreateUserContactDto) {}
