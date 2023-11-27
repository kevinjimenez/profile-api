import { Contact } from '@/user/entities';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ContactService } from '@/user/services';
import { CreateContactDto, UpdateContactDto } from '@/user/dto';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[Contact[], number]> {
    return this.contactService.findAll(filterDto);
  }

  @Get(':term')
  findOne(@Param('term') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.contactService.remove(id);
  }
}
