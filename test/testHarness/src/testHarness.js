#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * @file testHarness.js
 * @module testHarness
 * @description This is the main init for the testHarness application.
 * It contains just enough of the main program loop and/or basic argument parsing to
 * effectively test the framework.
 * @requires module:clientRules
 * @requires module:clientCommands
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:allApplicationConstantsValidationMetadata
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/07
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientRules from './businessRules/clientRulesLibrary.js';
import clientCommands from './commands/clientCommandsLibrary.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationMetadata.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, biz, cmd, msg, sys, wrd} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// testHarness.
let namespacePrefix = baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;
let exitConditionArrayIndex = 0;

/**
 * @function bootstrapApplication
 * @description Setup all the testHarness application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
async function bootstrapApplication() {
  // let functionName = bootstrapApplication.name;
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
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
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
  appConfig[sys.cclientBusinessRules] = await clientRules.initClientRulesLibrary();
  appConfig[sys.cclientCommands] = await clientCommands.initClientCommandsLibrary();
  await haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function application
 * @description This is the main program loop, the init for the testHarness application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
async function application() {
  let functionName = application.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let argumentDrivenInterface = false;
  let commandInput;
  let commandResult;

  argumentDrivenInterface = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cargumentDrivenInterface);
  if (argumentDrivenInterface === undefined) {
    argumentDrivenInterface = false;
  }
  // argumentDrivenInterface is:
  // haystacks.consoleLog(namespacePrefix, functionName, app_msg.cargumentDrivenInterfaceIs + argumentDrivenInterface);
  await haystacks.enqueueCommand(cmd.cStartupWorkflow);

  // NOTE: We are processing the argument driven interface first that way even if we are not in an argument driven interface,
  // arguments can still be passed in and they will be executed first, after the startup workflow is complete.
  //
  // We need to strip off any preceding "--" before we try to process it as an actual command.
  // Also need to make sure that the command to execute actually contains the "--" or "/" or "\" or "-".
  let commandToExecute = '';
  // Make sure we execute any and all commands so the command queue is empty before
  // we process the command args and add more commands to the command queue.
  // Really this is about getting out the application name, version and about message.
  while (await haystacks.isCommandQueueEmpty() === false) {
    commandResult = await haystacks.processCommandQueue();
  } // End-while (haystacks.isCommandQueueEmpty() === false)

  // NOW process the command args and add them to the command queue for execution.
  if (!process.argv && process.argv.length > 0) {
    if (process.argv[2].includes(bas.cDash) === true ||
    process.argv[2].includes(bas.cForwardSlash) === true ||
    process.argv[2].includes(bas.cBackSlash) === true) {
      commandToExecute = await warden.executeBusinessRule([process.argv, ''], [biz.caggregateCommandArguments]);
    }
    if (commandToExecute !== '') {
      await warden.enqueueCommand(commandToExecute);
    }
    while (await haystacks.isCommandQueueEmpty() === false) {
      commandResult = await haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)
  } // End-if (!process.argv && process.argv.length > 0)

  // NOW the application can continue with the interactive interface fi the flag was set to false.
  if (argumentDrivenInterface === false) {
    // BEGIN main program loop
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage01);

    // BEGIN command parser
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage02);
    while(programRunning === true) {
      if (await haystacks.isCommandQueueEmpty() === true) {
        // biz.cprompt is some how undefined here, although other biz.c<something-else> do still work.
        // We will use wrd.cprompt here because it is working. No idea what the issue is with biz.prompt.
        commandInput = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [wrd.cprompt]);
        await haystacks.enqueueCommand(commandInput);
      } // End-if (haystacks.isCommandQueueEmpty() === true)
      commandResult = await haystacks.processCommandQueue();
      if (commandResult[exitConditionArrayIndex] === false) {
        // END command parser
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage03);
        programRunning = false;
        // END main program loop
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage04);
        // Exiting TEST HARNESS APPLICATION
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage05);
        break;
      } // End-if (commandResult[exitConditionArrayIndex] === false)
    } // End-while (programRunning === true)
  } // End-if (argumentDrivenInterface === false)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}

// Launch the Test Harness application!!
let programRunning = false;
await bootstrapApplication();
programRunning = true;
await application();
