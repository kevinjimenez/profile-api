import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { HandleExceptions } from '@/common/DBExcetions/handle-exceptions';
import { CreateMenuDto } from '@/menu/dto/create-menu.dto';
import { UpdateMenuDto } from '@/menu/dto/update-menu.dto';
import { Menu } from '@/menu/entities/menu.entity';

@Injectable()
export class MenuService {
  private readonly logger = new Logger(MenuService.name);

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    try {
      const { items = [], ...createMenu } = createMenuDto;
      const menu = this.menuRepository.create(createMenu);
      const menuCreated = await this.menuRepository.save(menu);
      if (items.length > 0) {
        await this.addSubMenu(menuCreated, items);
      }
      return { ...createMenuDto };
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }

  async findAll() {
    const menus = await this.dataSource.manager
      .getTreeRepository(Menu)
      .findTrees();
    return menus;
  }

  async findOne(id: string) {
    let menu: Menu;

    if (!isUUID(id)) {
      throw new BadRequestException(`id: [${id}] invalid`);
    }
    menu = await this.menuRepository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException(`Menu with ${id} not found`);
    }

    return menu;
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    const { items = [], ...updateMenu } = updateMenuDto;
    const menu = await this.menuRepository.preload({
      id,
      ...updateMenu,
    });

    if (!menu) {
      throw new NotFoundException(`Menu with id ${id} not found`);
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(menu);
      await queryRunner.commitTransaction();
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner

      return this.findOne(id);
    } catch (e) {
      await queryRunner.rollbackTransaction(); // si sale algo mal hacer el roll back en base
      await queryRunner.release(); // con esta línea ya deja de funcionar el query runner o limpiar
      HandleExceptions.DB(e);
    }
  }

  async remove(id: string) {
    const menu = await this.findOne(id);
    await this.menuRepository.remove(menu);
  }

  private async addSubMenu(parent: Menu, items: Menu[]) {
    const itemsCreated = [];
    items.forEach((menu) => {
      const subMenu = this.menuRepository.create({ ...menu, parent: parent });
      itemsCreated.push(this.menuRepository.save(subMenu));
    });

    await Promise.all(itemsCreated);
  }

  async deleteAllMenus() {
    const query = this.menuRepository.createQueryBuilder('projects');
    try {
      return await query.delete().where({}).execute();
    } catch (e) {
      HandleExceptions.DB(e);
    }
  }
}
