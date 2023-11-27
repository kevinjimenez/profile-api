import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visited } from '@/visited/entities/visited.entity';
import { VisitedService } from '@/visited/visited.service';
import { VisitedController } from '@/visited/visited.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Visited])],
  controllers: [VisitedController],
  providers: [VisitedService],
})
export class VisitedModule {}
