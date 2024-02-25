import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('AppService', () => {
  let appservice: AppService;
  let spyConfigService: ConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        ConfigService
      ],
    }).compile();

    appservice = app.get<AppService>(AppService);
    spyConfigService = app.get<ConfigService>(ConfigService);
    spyConfigService.get = jest.fn().mockResolvedValue('VALUE');
  });

  describe('AppService', () => {
    it('AppService - should be defined', () => {
      expect(appservice.getConfiguration).toBeDefined()
    });

    it('AppService - getConfiguration() should be defined', () => {
      expect(appservice.getConfiguration).toBeDefined();
    });

    it('AppService - getConfiguration() should be defined and fetch configuration', () => {
      expect(appservice.getConfiguration('KEY')).resolves.toEqual({ "secretValue": "VALUE" });
    });

    it('AppService - getConfiguration() should be defined and throw error in case secret does not exist', () => {
      spyConfigService.get = jest.fn().mockResolvedValue(undefined);
      expect(() => appservice.getConfiguration('KEY')).rejects.toThrow();
    });
  });
});
