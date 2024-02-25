import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiConsumes, ApiNotFoundResponse, ApiOperation, ApiProduces, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigurationResponse } from './configuration-response.class';

@ApiTags('Configuration')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('config')
  @ApiOperation({ summary: 'Fetch configuration by secret name' })
  @ApiQuery({ name: 'secretName', required: true, type: String })
  @ApiProduces('application/json')
  @ApiConsumes('application/json')
  @ApiResponse({ status: 200, type: ConfigurationResponse })
  @ApiNotFoundResponse({ status: 404, type: NotFoundException })
  async getConfiguration(@Query('secretName') secretName: string): Promise<ConfigurationResponse> {
    return this.appService.getConfiguration(secretName);
  }
}
