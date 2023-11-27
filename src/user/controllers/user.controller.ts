import { User } from '@/user/entities';
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
import { UserService } from '@/user/services';
import { CreateUserDto, UpdateUserDto } from '@/user/dto';
import { FilterDto } from '@/common/dto/filter.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterDto): Promise<[User[], number]> {
    return this.userService.findAll(filterDto);
  }

  @Get(':term')
  findOne(@Param('term') id: string, @Query() filterDto: FilterDto) {
    return this.userService.findOne(id, filterDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.remove(id);
  }
}
