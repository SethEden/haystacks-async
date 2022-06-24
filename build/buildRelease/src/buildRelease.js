#!/usr/bin/env node

/**
 * @file buildRelease.js
 * @module buildRelease
 * @description This is the main init for the buildRelease application.
 * It contains everything to build and deploy the entire npm package.
 * @requires module:clientRules
 * @requires module:clientCommands
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:allApplicationConstantsValidationMetadata
 * @requires {@link https://www.npmjs.com/package/@haystacks/sync|@haystacks/sync}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientRules from './businessRules/clientRulesLibrary.js';
import clientCommands from './commands/clientCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationMetadata.js';
// External imports
import haystacks from '@haystacks/sync';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, cmd, cfg, gen, msg, sys, wrd} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.
let namespacePrefix = baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;

/**
 * @function bootStrapApplication
 * @description Setup all the buildRelease application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
function bootStrapApplication() {
  // let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  let appConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkProdName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataProdPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientConstantsPath: rootPath + apc.cFullProdConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullProdWorkflowsPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: NO .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  appConfig[sys.cclientBusinessRules] = clientRules.initClientRulesLibrary();
  appConfig[sys.cclientCommands] = clientCommands.initClientCommandsLibrary();
  haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/application/<myAppName>/resources/ folder to the
 * bin/<myAppName>/resources/ folder.
 * Finally all the transpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
function deployApplication() {
  let functionName = deployApplication.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  try {
    // fse.copySync('/src/*', '/bin/*');
    haystacks.setConfigurationSetting(wrd.csystem, cfg.creleaseCompleted, false);
    haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
    haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, false);
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.csourcePath, apc.cAppDevPath);
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdestinationPath, apc.cAppProdPath);
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.csourceResourcesPath, apc.cFullDevResourcesPath);
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdestinationResourcesPath, apc.cAppProdPath);
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.creleasePath, apc.cReleasePath);
    // NOTE: We could use a similar process to deploy an application that is based on the haystacks framework.
    // However, in this case we are only concerned with building & releasing the framework.
    // The test harness is not a concern for the release process, neither is the buildRelease application.
    haystacks.enqueueCommand(cmd.cStartupWorkflow);
    while (haystacks.isCommandQueueEmpty() === false) {
      haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // 2nd stage deploy-release process:
    console.log(app_msg.cReleasingFramework);
    haystacks.enqueueCommand(cmd.cFrameworkDetailsWorkflow);
    while (haystacks.isCommandQueueEmpty() === false) {
      haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // 3rd stage deploy-release process:
    haystacks.enqueueCommand(app_cmd.cdeployMetaData);
    while (haystacks.isCommandQueueEmpty() === false) {
      haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // 4th stage deploy-release process:
    haystacks.enqueueCommand(app_cmd.cBuildWorkflow);
    while (haystacks.isCommandQueueEmpty() === false) {
      haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // Deployment verification
    let deploymentResult = haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted);
    if (deploymentResult) {
      // Deployment was completed:
      console.log(app_msg.cBuildMessage1 + deploymentResult);
    } else {
      console.log(app_msg.cBuildMessage1 + gen.cFalse);
      haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted, false);
    }
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted, false);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}

bootStrapApplication();
deployApplication();
