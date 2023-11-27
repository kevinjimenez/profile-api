import { PartialType } from '@nestjs/mapped-types';
import { CreateTesisDto } from '@/education/dto/create-tesis.dto';

export class UpdateTesisDto extends PartialType(CreateTesisDto) {}
