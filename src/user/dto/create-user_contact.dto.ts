import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserContactDto {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  contact: string;
}
