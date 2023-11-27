import { Transform } from 'class-transformer';
import { IsArray, IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from './pagination.dto';

export class FilterDto extends PaginationDto {
  @IsOptional()
  @IsString()
  term?: string;

  // only entity user relations
  @IsOptional()
  @Transform(({ value }) => {
    return Array.isArray(value) ? value : [value];
  })
  @IsArray()
  @IsString({ each: true })
  @IsIn(
    [
      'academics',
      'academics.tesis',
      'educations',
      'jobs',
      'jobs.projects',
      'jobs.projects.projectSkills',
      'jobs.projects.projectSkills.skill',
      'projects',
      'projects.projectSkills',
      'projects.projectSkills.skill',
      'projectSkills',
      'projectSkills.skill',
      'userSkills',
      'userSkills.skill',
      'userContacts',
      'userContacts.contact',
      'tesis',
    ],
    { each: true },
  )
  relations?: string[];
}
