import { Module } from '@nestjs/common';
import { EducationModule } from '@/education/education.module';
import { JobModule } from '@/job/job.module';
import { MenuModule } from '@/menu/menu.module';
import { ProjectModule } from '@/project/project.module';
import { UserModule } from '@/user/user.module';
import { SeedService } from '@/seed/seed.service';
import { SeedController } from '@/seed/seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProjectModule, MenuModule, UserModule, EducationModule, JobModule],
})
export class SeedModule {}
