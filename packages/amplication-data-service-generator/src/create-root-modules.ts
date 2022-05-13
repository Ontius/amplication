import winston from "winston";
import { Module, AppGenerationConfig, AppInfo } from "./types";
import { version } from "./version";
import { formatJson } from "./util/module";
import { createDotEnvModule } from "./create-dotenv";
import { CUSTOM_BASE_DIRECTORY } from "./base";

const AMP_CONFIG_FILE_NAME = "ampconfig.json";

export async function createRootModules(
  appInfo: AppInfo,
  logger: winston.Logger
): Promise<Module[]> {
  return [
    await createAmplicationConfigurationFile(appInfo, logger),
    await createDotEnvModule(appInfo),
  ];
}

async function createAmplicationConfigurationFile(
  appInfo: AppInfo,
  logger: winston.Logger
): Promise<Module> {
  logger.info(`Creating Amplication configuration file ${version}...`);

  const config: AppGenerationConfig = {
    dataServiceGeneratorVersion: version,
    appInfo,
  };

  return {
    path: `${CUSTOM_BASE_DIRECTORY}/${AMP_CONFIG_FILE_NAME}`,
    code: formatJson(JSON.stringify(config)),
  };
}
