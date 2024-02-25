# **NestJS Azure Keyvault Configuration Service using Custom Providers**

![Compile and build](https://github.com/SwagataChaudhuri/NestJS-Keyvault/actions/workflows/build.yml/badge.svg)
![Prettier](https://img.shields.io/badge/Code%20style-prettier-informational?logo=prettier&logoColor=white)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Sample implementation to demonstrate how to extend the default NestJS Configuartion Service to fetch configuration from Azure KeyVault.

---

## **Description**

This repository contains a sample implementation of `ConfigService` in `NestJS` extended using custom provider to fetch values from Azure KeyVault.

---

## **Installation**

```bash
$ pnpm install
```
---

## **Configuration**

This application has a .env.example file. Please create a .env file and update the value as with the respective details. The below table describes the environment variables used in the application:

| Environment Variable | Description                     |
| -------------------- | ------------------------------- |
| `AZURE_KEYVAULT_URI` | Azure KeyVault URI              |


---

## **Running the application**

The application can be run in two modes, `development` and `production`. The `development` mode supports hot reloading which is beneficial during development. The `production` mode is optimized for performance.

### **Development Mode**

Execute the below command to run the application in development mode:

```bash
$ pnpm run start:dev
```

### **Production Mode**

Execute the below command to run the application in production mode:

```
$ pnpm run start:prod
```

## **Testing**

The application has tests configured using `Jest`. The tests are located in the `test` directory. The tests are also configured to generate coverage reports. The coverage reports are generated in the `coverage` directory.

### **Unit Tests**

Execute the below command to run the unit tests:

```bash
$ pnpm run test
```
### **Coverage Reports**

Execute the below command to run the tests and generate the coverage reports:

```bash
$ pnpm run test:cov
```
---

## **License**

The application and all associated source code are distributed under the [MIT License](LICENSE).

---

## **Author**

[Swagata Chaudhuri]()

---

## **Support**

In case you find the project helpful, please consider supporting by ⭐ the project.

---

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request in case you find any issues with the code.

---

## **Acknowledgements**

- [NestJS](https://nestjs.com/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Azure KeyVault](https://learn.microsoft.com/en-us/azure/key-vault/)
- [Custom Providers](https://docs.nestjs.com/fundamentals/custom-providers)