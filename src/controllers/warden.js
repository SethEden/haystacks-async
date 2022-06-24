/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:chiefCommander
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import ruleBroker from '../brokers/ruleBroker.js';
import chiefCommander from './chiefCommander.js';
import chiefConfiguration from './chiefConfiguration.js';
import chiefData from './chiefData.js';
import chiefWorkflow from './chiefWorkflow.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
// import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.warden.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

 /**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {string} inputPath The path for the entry point to the framework, ie: main.js
 * @param {string} actualFrameworkName The name of the framework that the application is expecting to use.
 * @return {string} the true root path of the application.
 * @author Seth Hollingsead
 * @date 2021/10/12
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function processRootPath(inputPath, actualFrameworkName) {
  // let functionName = processRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputPath is: ${inputPath}`);
  ruleBroker.bootStrapBusinessRules();
  chiefCommander.bootStrapCommands();
  let resolvedPath = ruleBroker.processRules([inputPath, actualFrameworkName], [biz.cparseSystemRootPath]);
  dataBroker.setupDataStorage();
  let rootPath = path.resolve(resolvedPath);
  // console.log(`rootPath is: ${rootPath}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return rootPath;
}

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configData is: ${JSON.stringify(configData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));
  const appConfigPath = configData[cfg.cappConfigPath];
  const frameworkConfigPath = configData[cfg.cframeworkConfigPath];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);
  // re-declare the input now that the configuration is setup.
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));

  let getJsonRule = [biz.cgetJsonData];
  let applicationMetaDataPathAndFilename = configData[cfg.cclientMetaDataPath];
  let frameworkMetaDataPathAndFilename = configData[cfg.cframeworkFullMetaDataPath];
  loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataPathAndFilenameIs + applicationMetaDataPathAndFilename);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataPathAndFilenameIs + frameworkMetaDataPathAndFilename);
  let applicationMetaData = ruleBroker.processRules([applicationMetaDataPathAndFilename, ''], getJsonRule);
  let frameworkMetaData = ruleBroker.processRules([frameworkMetaDataPathAndFilename, ''], getJsonRule);
  loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataIs + JSON.stringify(applicationMetaData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataIs + JSON.stringify(frameworkMetaData));

  configurator.setConfigurationSetting(wrd.csystem, cfg.cclientRootPath, configData[cfg.cclientRootPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigResourcesPath, configData[cfg.cappConfigResourcesPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigReferencePath, configData[cfg.cappConfigReferencePath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cclientMetaDataPath, configData[cfg.cclientMetaDataPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cclientCommandAliasesPath, configData[cfg.cclientCommandAliasesPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cclientWorkflowsPath, configData[cfg.cclientWorkflowsPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkRootPath, configData[cfg.cframeworkRootPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, configData[cfg.cappConfigPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkResourcesPath, configData[cfg.cframeworkResourcesPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkFullMetaDataPath, configData[cfg.cframeworkFullMetaDataPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkConfigPath, configData[cfg.cframeworkConfigPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, configData[cfg.cframeworkThemesPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkCommandAliasesPath, configData[cfg.cframeworkCommandAliasesPath]);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, configData[cfg.cframeworkWorkflowsPath]);

  loggers.consoleLog(namespacePrefix + functionName, msg.cclientRootPathIs + configData[cfg.cclientRootPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigResourcesPathIs + configData[cfg.cappConfigResourcesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigReferencePathIs + configData[cfg.cappConfigReferencePath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientMetaDataPathIs + configData[cfg.cclientMetaDataPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientCommandAliasesPathIs + configData[cfg.cclientCommandAliasesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientWorkflowsPathIs + configData[cfg.cclientWorkflowsPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkRootPathIs + configData[cfg.cframeworkRootPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + configData[cfg.cappConfigPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkResourcesPathIs + configData[cfg.cframeworkResourcesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkFullMetaDataPathIs + configData[cfg.cframeworkFullMetaDataPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + configData[cfg.cframeworkConfigPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkThemesPathIs + configData[cfg.cframeworkThemesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkCommandAliasesPathIs + configData[cfg.cframeworkCommandAliasesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkWorkflowsPathIs + configData[cfg.cframeworkWorkflowsPath]);

  // Make sure the color data gets loaded as well! File: colors.csv (This is used by the colorizer to colorize the fonts for the console output)
  chiefData.setupAllCsvData(cfg.cframeworkConfigPath, wrd.ccolors);

  configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationName, applicationMetaData[wrd.cName]);
  configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber, applicationMetaData[wrd.cVersion]);
  configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationDescription, applicationMetaData[wrd.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationNameIs + applicationMetaData[wrd.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationVersionNumberIs + applicationMetaData[wrd.cVersion]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationDescriptionIs + applicationMetaData[wrd.cDescription]);

  configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkName, frameworkMetaData[wrd.cName]);
  configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber, frameworkMetaData[wrd.cVersion]);
  configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkDescription, frameworkMetaData[wrd.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkNameIs + frameworkMetaData[wrd.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkVersionNumberIs + frameworkMetaData[wrd.cVersion]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkDescriptionIs + frameworkMetaData[wrd.cDescription]);

  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let resolvedFrameworkConstantsPathActual = path.resolve(configData[cfg.cframeworkConstantsPath]);
    let resolvedClientConstantsPathActual = path.resolve(configData[cfg.cclientConstantsPath])
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedFrameworkConstantsPathActualIs + resolvedFrameworkConstantsPathActual);
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientConstantsPathActualIs + resolvedClientConstantsPathActual);
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkConstantsPath, resolvedFrameworkConstantsPathActual);
    configurator.setConfigurationSetting(wrd.csystem, cfg.capplicationConstantsPath, resolvedClientConstantsPathActual);

    chiefData.initializeConstantsValidationData(); // This just makes sure that the data structure is created on the D-Data structure.
    let frameworkConstantsValidationData = configData[cfg.cframeworkConstantsValidationData].call();
    let applicationConstantsValidationData = configData[cfg.capplicationConstantsValidationData].call();
    loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConstantsValidationDataIs + JSON.stringify(frameworkConstantsValidationData));
    loggers.consoleLog(namespacePrefix + functionName, msg.capplicationConstantsValidationDataIs + JSON.stringify(applicationConstantsValidationData));
    chiefData.addConstantsValidationData(frameworkConstantsValidationData);
    chiefData.addConstantsValidationData(applicationConstantsValidationData);
  } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true)

  let enableLogFileOutputSetting = configurator.getConfigurationSetting(wrd.csystem, cfg.clogFileEnabled);
  if (enableLogFileOutputSetting === true) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cCaptureSessionDateTimeStampLogFileName);
    let sessionDateTimeStamp = ruleBroker.processRules([configurator.getConfigurationSetting(wrd.csystem, cfg.cdateTimeStamp), ''], [biz.cgetNowMoment]);
    loggers.consoleLog(namespacePrefix + functionName, msg.csessionDateTimeStampIs + sessionDateTimeStamp);
    let logFileName = sessionDateTimeStamp + bas.cUnderscore + applicationMetaData[wrd.cVersion] + bas.cUnderscore + applicationMetaData[wrd.cName] + gen.cDotLog;
    loggers.consoleLog(namespacePrefix + functionName, msg.clogFileNameIs + logFileName);
    configurator.setConfigurationSetting(wrd.csystem, cfg.clogFileName, logFileName);
  } // End-if (enableLogFileOutputSetting === true)

  mergeClientBusinessRules(configData[sys.cclientBusinessRules]);
  mergeClientCommands(configData[sys.cclientCommands]);
  loadCommandAliases(''); // This function will now pick up the defaults already saved in the configuration system.
  loadCommandWorkflows(''); // Same as above.
  // We can pass in a name of a configuration setting that has a path to load plugin data this way.

  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function mergeClientBusinessRules
 * @description Merges the map of client defined business rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rule.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientBusinessRules is: ${JSON.stringify(clientBusinessRules)}`);
  ruleBroker.addClientRules(clientBusinessRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function mergeClientCommands
 * @description Merges the map of client defined command names and client defined command function calls
 * with the existing D-data structure that should already have all of the system defined commands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientCommands is: ${JSON.stringify(clientCommands)}`);
  chiefCommander.addClientCommands(clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file and
 * the client defined command aliases XML file, or an optional user defined command aliases path.
 * @param {string} commandAliasesPath The configuration name of the configuration setting where
 * the path to the commands aliases XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function loadCommandAliases(commandAliasesPathConfigName) {
  let functionName = loadCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesPathConfigName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathConfigNameIs + commandAliasesPathConfigName);
  let resolvedSystemCommandsAliasesPath;
  let resolvedClientCommandsAliasesPath;
  let resolvedCustomCommandsAliasesPath;
  if (commandAliasesPathConfigName) {
    resolvedCustomCommandsAliasesPath = path.resolve(configurator.getConfigurationSetting(wrd.csystem, commandAliasesPathConfigName));
    // resolvedCustomCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomCommandsAliasesPathIs + resolvedCustomCommandsAliasesPath);
    chiefCommander.loadCommandAliasesFromPath(commandAliasesPathConfigName, wrd.cPlugin);
  } else {
    resolvedSystemCommandsAliasesPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkCommandAliasesPath);
    resolvedClientCommandsAliasesPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cclientCommandAliasesPath);
    // resolvedSystemCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemCommandsAliasesPathIs + resolvedSystemCommandsAliasesPath);
    // resolvedClientCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientCommandsAliasesPathIs + resolvedClientCommandsAliasesPath);
    chiefCommander.loadCommandAliasesFromPath(cfg.cframeworkCommandAliasesPath, sys.cFramework);
    chiefCommander.loadCommandAliasesFromPath(cfg.cclientCommandAliasesPath, wrd.cApplication);
  }
  // console.log('ALL Loaded command aliases is: ' + JSON.stringify(D[sys.cCommandsAliases]));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandWorkflows
 * @description Loads and merges both the system defined command workflows XML file and
 * client defined command workflows XML file, or an optional user defined workflow path.
 * @param {string} workflowPathConfigName The configuration name of the configuration setting where
 * the path to the workflows XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function loadCommandWorkflows(workflowPathConfigName) {
  let functionName = loadCommandWorkflows.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowPathConfigName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowPathConfigurationNameIs + workflowPathConfigName);
  let resolvedSystemWorkflowsPath;
  let resolvedClientWorkflowsPath;
  let resolvedCustomWorkflowsPath;
  if (workflowPathConfigName) {
    resolvedCustomWorkflowsPath = path.resolve(configurator.getConfigurationSetting(wrd.csystem, workflowPathConfigName));
    // resolvedCustomWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomWorkflowsPathIs + resolvedCustomWorkflowsPath);
    chiefWorkflow.loadCommandWorkflowsFromPath(workflowPathConfigName, wrd.cPlugin);
  } else {
    resolvedSystemWorkflowsPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath);
    resolvedClientWorkflowsPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cclientWorkflowsPath);
    // resolvedSystemWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemWorkflowsPathIs + resolvedSystemWorkflowsPath);
    // resolvedClientWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientWorkflowsPathIs + resolvedClientWorkflowsPath);
    chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, sys.cFramework);
    chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cclientWorkflowsPath, wrd.cApplication);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function executeBusinessRules
 * @description A wrapper to call a business rule from the application level code.
 * @param {array<string|integer|boolean|object|function,string|integer|boolean|object|function>} inputs The array of inputs:
 * inputs[0] = inputData - The input to the rule that is being called.
 * inputs[1] = inputMetaData - Additional data the input to the rule.
 * @param {array<string>} businessRules The array that contains the name(s) of the business rule that should be executed.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function executeBusinessRules(inputs, businessRules) {
  let functionName = executeBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // inputs is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputsIs + JSON.stringify(inputs));
  // businessRules is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulesIs + JSON.stringify(businessRules));
  let returnData;
  returnData = ruleBroker.processRules(inputs, businessRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the chiefCommander.enqueueCommand function.
 * @param {string} command The command to add to the command queue for executing.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  chiefCommander.enqueueCommand(command);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function isCommandQueueEmpty
 * @description This is a wrapper for the chiefCommander.isCommandQueueEmpty function.
 * Determines if the command queue is empty or not,
 * which also determines if the application should continue executing commands from the command queue
 * in sequential order or prompt for another command or exit.
 * @return {boolean} True or False to indicate if command execution should continue or not.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.isCommandQueueEmpty();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function processCommandQueue
 * @description This is just a wrapper for the chiefCommander.processCommandQueue function,
 * which will ultimately call chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function processCommandQueue() {
  let functionName = processCommandQueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.processCommandQueue();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  // D[sys.cConfiguration][configurationName] = configurationValue;
  configurator.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double} The value of whatever was stored in the D[configuration].
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
  let functionName = getConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // let returnConfigurationValue = D[sys.cConfiguration][configurationName];
  let returnConfigurationValue = configurator.getConfigurationSetting(configurationNamespace, configurationName);
  // returnConfigurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnConfigurationValue;
}

/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path fro the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 * @NOTE We cannot instrument this code with calls to loggers.consoleLog as it would introduce yet another circular dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */
function consoleLog(classPath, message) {
  // let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  loggers.consoleLog(classPath, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  processRootPath,
  initFrameworkSchema,
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
