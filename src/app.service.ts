import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationResponse } from './configuration-response.class';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) { }

  private readonly logger = new Logger(AppService.name);

  async getConfiguration(secretName: string): Promise<ConfigurationResponse> {
    this.logger.log(`Fetching secret value for ${secretName} - Initiated`);
    const secretValue = await this.configService.get(secretName);
    if (!secretValue) {
      throw new NotFoundException(`Fetching secret value for ${secretName} - ErrFailed`);
    }
    this.logger.log(`Fetching secret value for ${secretName} - Completed`);
    let response = new ConfigurationResponse(secretValue);
    return response;
  }
}
