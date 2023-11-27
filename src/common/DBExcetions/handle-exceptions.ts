import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

export class HandleExceptions {
  static DB(error: any): never {
    const logger = new Logger(HandleExceptions.name);
    logger.error(error);
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException(
      'Unexpected error check server logs',
    );
  }
}
