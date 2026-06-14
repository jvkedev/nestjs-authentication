import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(readonly configService: ConfigService) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Normal log');

    this.logger.warn('Warninig log');

    this.logger.error('Error log');

    this.logger.debug('Debug log');

    this.logger.verbose('Verbose log');

    return 'Hello World';
  }
}
