import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

@Injectable()
export class AzureKeyVaultConfigService extends ConfigService {

  private readonly logger = new Logger(AzureKeyVaultConfigService.name);

  private readonly secretClient: SecretClient;

  constructor(keyVaultURI: string) {
    super();
    const credential = new DefaultAzureCredential();
    this.secretClient = new SecretClient(keyVaultURI, credential);
  }

  async get(key: string): Promise<string | undefined> {
    const secretName = key;
    try {
      const secret = await this.secretClient.getSecret(secretName);
      return secret.value;
    } catch (error) {
      this.logger.error(`Error fetching secret value for ${secretName}: ${error}`);
      return undefined;
    }
  }
}
