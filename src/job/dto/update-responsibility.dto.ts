import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsibilityDto } from '@/job/dto/create-responsibility.dto';

export class UpdateResponsibilityDto extends PartialType(
  CreateResponsibilityDto,
) {}
