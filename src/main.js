#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:warden
 * @requires module:loggers
 * @requires module:prompt
 * @requires module:allConstantsValidationMetadata
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/haystacks|haystacks}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import warden from './controllers/warden.js';
import loggers from './executrix/loggers.js';
import allSysCV from './resources/constantsValidation/allConstantsValidationMetadata.js';
import D from './structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// main.
const namespacePrefix = baseFileName + bas.cDot;
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;

/**
 * @function initFramework
 * @description Initializes the framework systems.
 * @param {object} clientConfiguration A configuration data object that contains
 * all the data needed to bootstrap the framework for a client application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/07
 */
async function initFramework(clientConfiguration) {
 let functionName = initFramework.name;
 // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
 // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cclientConfigurationIs + clientConfiguration);

 // let frameworkRootPath = path.resolve(process.cwd());
 // let frameworkRootPath = path.resolve(path.dirname(import.meta.url));
 let frameworkCodeRootPath = url.fileURLToPath(path.dirname(import.meta.url));
 let frameworkCommandAliasesPath = '';
 let frameworkWorkflowsPath = '';
 frameworkCodeRootPath = await warden.processRootPath(frameworkCodeRootPath, clientConfiguration[sys.cFrameworkName]) + bas.cDoubleForwardSlash;
 let frameworkRootPath = frameworkCodeRootPath;
 if (NODE_ENV === wrd.cdevelopment) {
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
 } else if (NODE_ENV === wrd.cproduction) {
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkProductionRootPath;
 } else {
   // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
   console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
 }
 frameworkCommandAliasesPath = frameworkCodeRootPath + sys.cframeworkResourcesCommandAliasesPath;
 frameworkWorkflowsPath = frameworkCodeRootPath + sys.cframeworkResourcesWorkflowsPath;

 clientConfiguration[cfg.cframeworkRootPath] = path.resolve(frameworkRootPath);
 clientConfiguration[cfg.cframeworkConstantsPath] = hayConst.constantsPath; // frameworkCodeRootPath + sys.cframeworkConstantsPath;
 clientConfiguration[cfg.cappConfigPath] = clientConfiguration[cfg.cappConfigReferencePath];
 clientConfiguration[cfg.cframeworkResourcesPath] = frameworkCodeRootPath + sys.cframeworkResourcesPath;
 clientConfiguration[cfg.cclientMetaDataPath] = path.resolve(clientConfiguration[cfg.cclientRootPath] + clientConfiguration[cfg.cclientMetaDataPath]);
 clientConfiguration[cfg.cframeworkFullMetaDataPath] = path.resolve(clientConfiguration[cfg.cframeworkResourcesPath] + sys.cmetaDatadotJson);
 clientConfiguration[cfg.cframeworkConfigPath] = frameworkCodeRootPath + sys.cframeworkResourcesConfigurationPath;
 clientConfiguration[cfg.cframeworkThemesPath] = frameworkCodeRootPath + sys.cframeworkThemesPath;
 clientConfiguration[cfg.cframeworkCommandAliasesPath] = frameworkCommandAliasesPath;
 clientConfiguration[cfg.cframeworkWorkflowsPath] = frameworkWorkflowsPath;
 clientConfiguration[cfg.cframeworkConstantsValidationData] = await allSysCV.initializeAllSystemConstantsValidationData;
 await warden.initFrameworkSchema(clientConfiguration);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cAllLoadedDataIs + JSON.stringify(D));
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 // console.log('All loaded data is: ' + JSON.stringify(D));
 // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function mergeClientBusinessRules
 * @description A wrapper function to expose the warden.mergeClientBusinessRules functionality.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await warden.mergeClientBusinessRules(clientBusinessRules);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function mergeClientCommands
 * @description A wrapper function to expose the warden.mergeClientCommands functionality.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await warden.mergeClientCommands(clientCommands);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandAliases
 * @description Loads and merges a set of client command aliases with the framework command aliases.
 * This function acts as a wrapper for calling the warden.loadCommandAliases function.
 * @param {string} commandAliasesPath The path to where the commands aliases XML file is stored, that should be loaded.
 * @param {string} contextName A name for the set of command aliases that should be
 * used to store the path in the configuration system so it can be loaded by the framework.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function loadCommandAliases(commandAliasesPath, contextName) {
  let functionName = loadCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathIs + commandAliasesPath);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  await warden.setConfigurationSetting(wrd.csystem, contextName, commandAliasesPath);
  await warden.loadCommandAliases(contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandWorkflows
 * @description Loads and merges a set of client workflows with the framework workflows.
 * This function acts as a wrapper for calling the warden.loadCommandWorkflows function.
 * @param {string} workflowPath The path to where the workflows file is stored, that should be loaded.
 * @param {string} contextName A name for the workflows that should be used
 * to store the path in the configuration system so it can be loaded by the framework.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function loadCommandWorkflows(workflowPath, contextName) {
  let functionName = loadCommandWorkflows.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowPathIs + workflowPath);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  await warden.setConfigurationSetting(wrd.csystem, contextName, workflowPath);
  await warden.loadCommandWorkflows(contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function executeBusinessRules
 * @description A wrapper call to a business rule from the warden.executeBusinessRules.
 * @param {array<string|integer|boolean|object|function,string|integer|boolean|object|function>} inputs The array of inputs:
 * inputs[0] = inputData - The input to the rule that is being called.
 * inputs[1] = inputMetaData - Additional data the input to the rule.
 * @param {array<string>} businessRules The array of rule name(s) that should be executed.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function executeBusinessRules(inputs, businessRules) {
  let functionName = executeBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // inputs is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputsIs + JSON.stringify(inputs));
  // businessRules is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulesIs + JSON.stringify(businessRules));
  let returnData = await warden.executeBusinessRules(inputs, businessRules);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the warden.enqueueCommand function.
 * @param {string} command The command to add to the command queue for executing.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  await warden.enqueueCommand(command);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function isCommandQueueEmpty
 * @description Determines if the command queue is empty or not empty.
 * This is a wrapper function for the warden.isCommandQueueEmpty function.
 * @return {boolean} True or False to indicate if the command execution queue is empty or not.
 * Useful to determine if the command queue should continue executing or not.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.isCommandQueueEmpty();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function processCommandQueue
 * @description This is a wrapper function for the warden.processCommandQueue.
 * This leads to a call to the chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function processCommandQueue() {
  let functionName = processCommandQueue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.processCommandQueue();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the warden.setConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double|object} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 222/02/18
 */
async function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  // D[sys.cConfiguration][configurationName] = configurationValue;
  await warden.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the warden.getConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double|object} The value of whatever was stored in the D[configuration][configurationName].
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function getConfigurationSetting(configurationNamespace, configurationName) {
  let functionName = getConfigurationSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // let returnConfigurationValue = D[sys.cConfiguration][configurationName];
  let returnConfigurationValue = await warden.getConfigurationSetting(configurationNamespace, configurationName);
  // returnConfigurationValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnConfigurationValue;
}

/**
 * @function consoleLog
 * @description A wrapper function to expose the loggers.consoleLog function to the client application.
 * @param {string} theNamespacePrefix The namespace of the log that is being sent. Ex: folder.filename
 * @param {string} theFunctionName The name of the function that log is being called from.
 * @param {string|object} message The message that should be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/12/30
 */
async function consoleLog(theNamespacePrefix, theFunctionName, message) {
  // let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`theNamespacePrefix is: ${theNamespacePrefix}`);
  // console.log(`theFunctionName is: ${theFunctionName}`);
  // console.log(`message is: ${JSON.stringify(message)}`);
  await loggers.consoleLog(theNamespacePrefix + theFunctionName, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initFramework,
  mergeClientBusinessRules,
  mergeClientCommands,
  loadCommandAliases,
  loadCommandWorkflows,
  executeBusinessRules,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue,
  setConfigurationSetting,
  getConfigurationSetting,
  consoleLog
};
