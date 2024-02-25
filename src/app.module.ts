import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AzureKeyVaultConfigService } from './keyvault/azure-key-vault-config.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useFactory: (configService: ConfigService) => {
        const azureKeyVaultURI: string = process.env.AZURE_KEYVAULT_URI;
        return new AzureKeyVaultConfigService(azureKeyVaultURI);
      },
    },
  ],
})
export class AppModule { }
