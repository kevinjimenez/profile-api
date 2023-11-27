import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '@/common/common.module';
import { EnvConfiguration } from '@/common/config/env.config';
import { JoiValidationSchema } from '@/common/config/joi.validation';
import { EducationModule } from '@/education/education.module';
import { HealthModule } from '@/health/health.module';
import { DatabaseModule } from '@/database/database.module';
import { UserModule } from '@/user/user.module';
import { JobModule } from '@/job/job.module';
import { ProjectModule } from '@/project/project.module';
import { VisitedModule } from '@/visited/visited.module';
import { CatalogueModule } from '@/catalogue/catalogue.module';
import { MenuModule } from '@/menu/menu.module';
import { SeedModule } from '@/seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    HealthModule,
    DatabaseModule,
    CommonModule,
    UserModule,
    JobModule,
    EducationModule,
    ProjectModule,
    VisitedModule,
    CatalogueModule,
    MenuModule,
    SeedModule,
  ],
})
export class AppModule {}
