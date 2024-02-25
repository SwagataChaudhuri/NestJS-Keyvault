import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';

describe('AppController', () => {
  let controller: AppController;
  let spyservice: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [
        AppController
      ],
      providers: [
        AppService,
        ConfigService
      ],
    }).compile();

    controller = app.get<AppController>(AppController);
    spyservice = app.get<AppService>(AppService);
    spyservice.getConfiguration = jest.fn().mockResolvedValue(
      {
        "secretValue": "VALUE"
      }
    );
  });

  describe('AppController', () => {
    it('AppController - should be defined', () => {
      expect(controller.getConfiguration).toBeDefined()
    });

    it('AppController - getConfiguration() should be defined', () => {
      expect(controller.getConfiguration).toBeDefined();
    });

    it('AppController - getConfiguration() should be defined and fetch configuration', () => {
      expect(controller.getConfiguration('KEY')).resolves.toEqual({ "secretValue": "VALUE" }); });
  });
});
