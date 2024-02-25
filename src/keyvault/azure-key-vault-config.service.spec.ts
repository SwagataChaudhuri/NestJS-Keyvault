import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AzureKeyVaultConfigService } from './azure-key-vault-config.service';

const secretClientMock = {
  getSecret: async (secretName: string) => {
    if (secretName === 'KEY') {
      return { value: 'VALUE' };
    } else {
      throw new Error('Secret not found.');
    }
  },
};

jest.mock('@azure/keyvault-secrets', () => {
  return {
    SecretClient: jest.fn().mockImplementation(() => secretClientMock),
  };
});

describe('AzureKeyVaultConfigService', () => {
  let azureKeyVaultConfigService: AzureKeyVaultConfigService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AzureKeyVaultConfigService, 
        ConfigService
    ],
    }).compile();

    azureKeyVaultConfigService = moduleRef.get<AzureKeyVaultConfigService>(AzureKeyVaultConfigService);
  });

  it('AzureKeyVaultConfigService - should retrieve a secret value from Azure Key Vault', async () => {
    const secretName = 'KEY';
    const testSecretValue = 'VALUE';
    const result = await azureKeyVaultConfigService.get(secretName);
    expect(result).toEqual(testSecretValue);
  });

  it('AzureKeyVaultConfigService - should return undefined for non-existent secret', async () => {
    const nonExistentSecretName = 'KEY-INVALID';
    const result = await azureKeyVaultConfigService.get(nonExistentSecretName);
    expect(result).toBeUndefined();
  });

});
