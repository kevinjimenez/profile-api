import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth() {
    return {
      environment: process.env.STAGE,
      message: 'api-profile is up and running',
      port: process.env.PORT || '3000',
    };
  }
}
