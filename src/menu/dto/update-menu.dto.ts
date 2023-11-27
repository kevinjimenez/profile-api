import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from '@/menu/dto/create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
