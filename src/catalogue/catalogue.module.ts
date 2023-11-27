import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueTypeController } from '@/catalogue/controllers/catalogue-type.controller';
import { CatalogueTypeService } from '@/catalogue/services/catalogue-type.service';
import { CatalogueService } from '@/catalogue/services/catalogue.service';
import { CatalogueController } from '@/catalogue/controllers/catalogue.controller';
import { CatalogueType } from '@/catalogue/entities/catalogue-type.entity';
import { Catalogue } from '@/catalogue/entities/catalogue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogueType, Catalogue])],
  controllers: [CatalogueTypeController, CatalogueController],
  providers: [CatalogueTypeService, CatalogueService],
})
export class CatalogueModule {}
