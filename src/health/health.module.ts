import { Module } from '@nestjs/common';
import { HealthService } from '@/health/health.service';
import { HealthController } from '@/health/health.controller';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
