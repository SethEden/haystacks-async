#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:warden
 * @requires module:loggers
 * @requires module:prompt
 * @requires module:stack
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
import stack from './structures/stack.js';
import D from './structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.main.
const namespacePrefix = wrd.cframework + bas.cDot + baseFileName + bas.cDot;
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;

/**
 * @function initFramework
 * @description Initializes the framework systems.
 * @param {object} clientConfiguration A configuration data object that contains
 * all the data needed to bootstrap the framework for a client application.
 * @return {object} The clientConfiguration data object that is used to initialize the haystacks-async framework.
 * @author Seth Hollingsead
 * @date 2021/10/07
 */
async function initFramework(clientConfiguration) {
  let functionName = initFramework.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cclientConfigurationIs + clientConfiguration);

  // let frameworkRootPath = path.normalize(process.cwd());
  // let frameworkRootPath = path.normalize(path.dirname(import.meta.url));
  let frameworkCodeRootPath = url.fileURLToPath(path.dirname(import.meta.url));
  if (clientConfiguration && typeof clientConfiguration === wrd.cobject) {
    try {
      let pluginCodeRootPath = clientConfiguration[cfg.cclientRootPath];
      let pluginRootPath = '';
      // pluginCodeRootPath is:
      // console.log(msg.cpluginCodeRootPathIs + pluginCodeRootPath);
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCodeRootPathIs + pluginCodeRootPath);
      let frameworkCommandAliasesPath = '';
      let pluginCommandAliasesPath = '';
      let frameworkWorkflowsPath = '';
      let pluginWorkflowsPath = '';
      frameworkCodeRootPath = await warden.processRootPath(frameworkCodeRootPath, clientConfiguration[sys.cFrameworkName]) + bas.cDoubleForwardSlash;
      if (clientConfiguration[sys.cPluginName]) {
        let srcPath = '';
        if (clientConfiguration[cfg.cappConfigReferencePath].includes(wrd.csrc)) {
          srcPath = wrd.csrc;
        } else if (clientConfiguration[cfg.cappConfigReferencePath].includes(wrd.cbin)) {
          srcPath = wrd.cbin;
        }
        pluginRootPath = await warden.processRootPath(pluginCodeRootPath, clientConfiguration[sys.cPluginName]);
        pluginCodeRootPath = pluginRootPath + srcPath +  bas.cDoubleForwardSlash;
        // pluginRootPath is:
        // console.log(msg.cpluginRootPathIs + pluginRootPath);
        // pluginCodeRootPath is:
        // console.log(msg.cpluginCodeRootPathIs + pluginCodeRootPath);
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCodeRootPathIs + pluginCodeRootPath);
      }
      // eslint-disable-next-line no-undef
      if (process.platform != gen.cwin32) {
        frameworkCodeRootPath = await warden.executeBusinessRules([frameworkCodeRootPath, ''], [biz.cswapBackSlashToForwardSlash]);
        pluginCodeRootPath = await warden.executeBusinessRules([pluginCodeRootPath, ''], [biz.cswapBackSlashToForwardSlash]);
      }
      let frameworkRootPath = frameworkCodeRootPath;
      if (NODE_ENV === wrd.cdevelopment) {
        frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
      } else if (NODE_ENV === wrd.cproduction) {
        frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkProductionRootPath;
      } else {
        // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
        // console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
        frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
      }
      // pluginCodeRootPath is:
      // console.log(msg.cpluginCodeRootPathIs + pluginCodeRootPath);
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCodeRootPathIs + pluginCodeRootPath);
  
      frameworkCommandAliasesPath = frameworkCodeRootPath + sys.cframeworkResourcesCommandAliasesPath;
      pluginCommandAliasesPath = pluginCodeRootPath + bas.cDoubleForwardSlash + sys.cframeworkResourcesCommandAliasesPath;
      frameworkWorkflowsPath = frameworkCodeRootPath + sys.cframeworkResourcesWorkflowsPath;
      pluginWorkflowsPath = pluginCodeRootPath + bas.cDoubleForwardSlash + sys.cframeworkResourcesWorkflowsPath;
  
      clientConfiguration[cfg.cframeworkRootPath] = path.normalize(frameworkRootPath);
      clientConfiguration[cfg.cpluginRootPath] = path.normalize(pluginRootPath);
      clientConfiguration[cfg.cpluginReleaseResourcesPath] = path.normalize(pluginRootPath + sys.cFrameworkProductionRootPath + sys.cframeworkResourcesPath);
      clientConfiguration[cfg.cframeworkConstantsPath] = hayConst.constantsPath; // frameworkCodeRootPath + sys.cframeworkConstantsPath;
      clientConfiguration[cfg.cappConfigPath] = clientConfiguration[cfg.cappConfigReferencePath];
      clientConfiguration[cfg.cframeworkResourcesPath] = path.join(frameworkCodeRootPath, sys.cframeworkResourcesPath);
      clientConfiguration[cfg.cpluginResourcesPath] = path.join(pluginCodeRootPath, sys.cframeworkResourcesPath);
      clientConfiguration[cfg.cclientMetaDataPath] = path.join(clientConfiguration[cfg.cclientRootPath], clientConfiguration[cfg.cclientMetaDataPath]);
      clientConfiguration[cfg.cframeworkFullMetaDataPath] = path.join(clientConfiguration[cfg.cframeworkResourcesPath], sys.cmetaDatadotJson);
      clientConfiguration[cfg.cpluginFullMetaDataPath] = path.join(clientConfiguration[cfg.cpluginResourcesPath], sys.cmetaDatadotJson);
      clientConfiguration[cfg.cframeworkConfigPath] = frameworkCodeRootPath + sys.cframeworkResourcesConfigurationPath;
      clientConfiguration[cfg.cframeworkThemesPath] = frameworkCodeRootPath + sys.cframeworkThemesPath;
      clientConfiguration[cfg.cframeworkCommandAliasesPath] = frameworkCommandAliasesPath;
      clientConfiguration[cfg.cpluginCommandAliasesPath] = pluginCommandAliasesPath;
      clientConfiguration[cfg.cframeworkWorkflowsPath] = frameworkWorkflowsPath;
      clientConfiguration[cfg.cpluginWorkflowsPath] = pluginWorkflowsPath;
      try {
        await warden.initFrameworkSchema(clientConfiguration);
      } catch(err1) {
        // ERROR: There was a fatal error in warden.initFrameworkSchema function.
        console.log(msg.cErrorInitFrameworkMessage01);
        console.log(err1.message);
      }
    } catch(err2) {
      // ERROR: There was a fatal error in main.initFramework function.
      console.log(msg.cErrorInitFrameworkMessage02);
      // ERROR: clientConfiguration was not properly defined.
      console.log(msg.cErrorInitFrameworkMessage03);
      console.log(err2.message);
      clientConfiguration = false;
    }
  } else {
    // ERROR: clientConfiguration was not properly defined.
    console.log(msg.cErrorInitFrameworkMessage03);
    clientConfiguration = false;
  }
  
  await loggers.consoleLog(namespacePrefix + functionName, msg.cAllLoadedDataIs + JSON.stringify(D));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log('All loaded data is: ' + JSON.stringify(D));
  // clientConfiguration is:
  // console.log(msg.cclientConfigurationIs + JSON.stringify(clientConfiguration));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return clientConfiguration;
}

/**
 * @function accouterFramework
 * @description Equip and outfit this instance of the haystacks framework with an existing data structure.
 * This function essentially allows plugins to inject a clone of the D-data structure from another instance of
 * Haystacks into this instance of Haystacks, essentially creating a clone of the original instance of Haystacks.
 * The purpose being to be able to call back to Haystacks and have it perform loading and parsing operations on files.
 * @param {object} data A JSON data structure, that is a clone of the D-data structure from another instance of Haystacks.
 * @return {boolean} A True or False value to indicate if the operation was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/01/09
 * @NOTE It's not going to do any good to add framework console logs here, because the primary use case of this function is
 * for dumping Haystacks context data into a new instance of Haystacks to make it behave and work like the main Haystacks instance.
 */
async function accouterFramework(data) {
  // let functionName = accouterFramework.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`data is: ${JSON.stringify(data)}`);
  let returnData = false;
  if (data && typeof data === wrd.cobject) {
    // console.log('setting the data structure!');
    returnData = await D.setData(data);

    // Haystacks-Plugin linking issue #40
    // Possible fix: Apparently the business rules and commands from the data that are cloned from the original instance of Haystacks,
    // can only execute from the code located at the path of the original location.
    // When we are using the plugin to call the accouterFramework function we are actually bootstrapping a Haystacks instance
    // from within the plugins own node_modules path, not the original path. This is why the plugins instance of Haystacks needed to be linked.
    // We can get around that by re-initializing the business rules and the commands for this instance of Haystacks and over-write the same
    // business rules and commands in the above data structure. That should in theory solve the linking issue.
    await warden.resetRulesAndCommands();
  } else {
    // ERROR: Input data was not properly defined.
    console.log(msg.cErrorAccouterFrameworkMessage01);
  }
  // console.log('returnData is: ' + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function getFrameworkData
 * @description Returns all the contents of the framework data. Can be used to pull the data contents of a Haystacks
 * instance to swap it out with mock data, then swap back afterward.
 * @return {object} A JSON object that contains the entire contents of the Haystacks D-data structure.
 * @author Seth Hollingsead
 * @date 2023/01/09
 */
async function getFrameworkData() {
  let functionName = getFrameworkData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = D.getData();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function mergeClientBusinessRules
 * @description A wrapper function to expose the warden.mergeClientBusinessRules functionality.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
  // console.log(`data is: ${JSON.stringify(data)}`);
 * @return {boolean} True or false value to indicate if the client rules were processed correctly.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData;
  if (clientBusinessRules && typeof clientBusinessRules === wrd.cobject) {
    await warden.mergeClientBusinessRules(clientBusinessRules);
    returnData = true;
  } else {
    // ERROR: clientBusinessRules was not properly defined.
    await console.log(msg.cErrorMergeClientBusinessRulesMessage01);
    returnData = false;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function mergeClientCommands
 * @description A wrapper function to expose the warden.mergeClientCommands functionality.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {boolean} True or false value to indicate if the client commands were processed correctly.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData;
  if (clientCommands && typeof clientCommands === wrd.cobject) {
    await warden.mergeClientCommands(clientCommands);
    returnData = true;
  } else {
    // ERROR: clientCommands was not properly defined.
    await console.log(msg.cErrorMergeClientCommandsMessage01);
    returnData = false;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadCommandAliases
 * @description Loads and merges a set of client command aliases with the framework command aliases.
 * This function acts as a wrapper for calling the warden.loadCommandAliases function.
 * @param {string} commandAliasesPath The path to where the commands aliases XML file is stored, that should be loaded.
 * @param {string} contextName A name for the set of command aliases that should be
 * used to store the path in the configuration system so it can be loaded by the framework.
 * @return {boolean} True or false to indicate if the input was correct.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function loadCommandAliases(commandAliasesPath, contextName) {
  let functionName = loadCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData;
  if ((commandAliasesPath && typeof commandAliasesPath === wrd.cstring) && (contextName && typeof contextName === wrd.cstring)) {
    // commandAliasesPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathIs + commandAliasesPath);
    // contextName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
    await warden.setConfigurationSetting(wrd.csystem, contextName, commandAliasesPath);
    await warden.loadCommandAliases(contextName);
    returnData = true;
  } else {
    if (!commandAliasesPath && typeof commandAliasesPath === wrd.cstring) {
      // ERROR: commandAliasesPath was not properly defined.
      await console.log(msg.cErrorLoadCommandAliasesMessage01);
      returnData = false;
    }
    if (!contextName && typeof contextName === wrd.cstring) {
      // ERROR: contextName was not properly defined.
      await console.log(msg.cErrorLoadCommandAliasesMessage02);
      returnData = false;
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
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
 * @function listLoadedPlugins
 * @description This is a wrapper function for warden.listLoadedPlugins.
 * Which is in-turn a wrapper function for chiefPlugin.listLoadedPlugins.
 * Which is in-turn a wrapper function for pluginBroker.listAllLoadedPlugins.
 * @return {array<string>} A list array of the names of the plugins that are currently loaded.
 * @author Seth Hollingsead
 * @date 2023/02/06
 */
async function listLoadedPlugins() {
  let functionName = listLoadedPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await warden.listLoadedPlugins();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistry
 * @description This is a wrapper function for warden.listAllPluginsInRegistry.
 * Which is in-turn a wrapper function for chiefPlugin.getAllPluginsInRegistry.
 * Which is in-turn a wrapper function for pluginBroker.listPluginsInRegistry.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function listAllPluginsInRegistry() {
  let functionName = listAllPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await warden.listAllPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistryPath
 * @description This is a wrapper function for warden.listAllPluginsInRegistryPath.
 * Which is in-turn a wrapper function for chiefPlugin.getAllPluginsInRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.listPluginsInRegistryPath.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function listAllPluginsInRegistryPath() {
  let functionName = listAllPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await warden.listAllPluginsInRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function numberOfPluginsInRegistry
 * @description This is a wrapper function for warden.numberOfPluginsInRegistry.
 * Which is in-turn a wrapper function for chiefPlugin.countAllPluginsInRegistry.
 * Which is in-turn a wrapper function for pluginBroker.countPluginsInRegistry.
 * @return {integer} The count of the number of plugins listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function numberOfPluginsInRegistry() {
  let functionName = numberOfPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await warden.numberOfPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function numberOfPluginsInRegistryPath
 * @description This is a wrapper function for warden.numberOfPluginsInRegistryPath.
 * Which is in-turn a wrapper function for chiefPlugin.countAllPluginsInRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.countPluginsInRegistryPath.
 * @return {integer} Teh count of the number of plugin sub-folders in the plugins path listed in the plugn registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function numberOfPluginsInRegistryPath() {
  let functionName = numberOfPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await warden.numberOfPluginsInRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerPluginByNameAndPath
 * @description This is a wrapper function for warden.registerPluginByNameAndPath.
 * Which is in-turn a wrapper function for chiefPlugin.registerNamedPlugin.
 * Which is in-turn a wrapper function for pluginBroker.registerPlugin.
 * @param {string} pluginName The name of the plugin that should be registered.
 * @param {string} pluginPath The path to the plugin, to be added to the plugin registry.
 * This should be the path to the plugin/package.json file, but not including the package.json as part of the path URI.
 * @return {boolean} True or False to indicate if the plugin was added to the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function registerPluginByNameAndPath(pluginName, pluginPath) {
  let functionName = registerPluginByNameAndPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  returnData = await warden.registerPluginByNameAndPath(pluginName, pluginPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPluginByName
 * @description This is a wrapper function for warden.unregisterPluginByName.
 * Which is in-turn a wrapper function for chiefPlugin.unregisterNamedPlugin.
 * Which is in-turn a wrapper function for pluginBroker.unregisterPlugin.
 * @param {string} pluginName The name of the plugin that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if the plugin was removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unregisterPluginByName(pluginName) {
  let functionName = unregisterPluginByName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await warden.unregisterPluginByName(pluginName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugins
 * @description This is a wrapper function for warden.unregisterPlugins.
 * Which is in-turn a wrapper function for chiefPlugin.unregisterPlugins.
 * Which is in-turn a wrapper function for pluginBroker.unregisterPlugins.
 * @param {string|array<string>} pluginsListArray A string or list array of plugin names that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if all the plugins were successfully removed from the plugin registry or not.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function unregisterPlugins(inputData) {
  let functionName = unregisterPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginListArrayIs + JSON.stringify(inputData));
  let returnData = false;
  let pluginsListArray = [];
  if (inputData && (typeof inputData === wrd.cstring || Array.isArray(inputData))) {
    if (Array.isArray(inputData) === true && inputData.length >= 1) {
      pluginsListArray = inputData;
    } else if (inputData.includes(bas.cComa) === true) {
      pluginsListArray = inputData.split(bas.cComa);
    } else if (inputData.includes(bas.cSpace) === true) {
      pluginsListArray = inputData.split(bas.cSpace);
    } else {
      pluginsListArray = inputData;
    }
    // pluginsListArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsListArrayIs + JSON.stringify(pluginsListArray));
    returnData = await warden.unregisterPlugins(pluginsListArray);
  } else {
    // ERROR: Plugin List Array is an invalid value: 
    console.log(msg.cErrorUnregisterPluginsMessage02 + inputData);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function syncPluginRegistryWithPath
 * @description This is a wrapper function for warden.syncPluginRegistryWithPath.
 * Which is in-turn a wrapper function for chiefPlugin.synchronizePluginRegistryWithPath.
 * Which is in-turn a wrapper function for pluginBroker.syncPluginRegistryWithPluginRegistryPath.
 * @return {boolean} True or False to indicate if the synchronization was performed successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 * @NOTE It is expected that the number of plugins loaded at any one time will not be crazy high.
 * The function that is called in plugnBroker.synchPluginRegistryWithPluginRegistryPath will
 * do a O(n^2) brute force search,
 * if the number of plugins needed at any one time ever grows much over 100, then this solution will need to be re-evaluated!
 */
async function syncPluginRegistryWithPath() {
  let functionName = syncPluginRegistryWithPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.syncPluginRegistryWithPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearAllPluginRegistry
 * @description This is a wrapper function for warden.clearAllPluginRegistry.
 * Which is in-turn a wrapper function for chiefPlugin.clearPluginRegistry.
 * Which is in-turn a wrapper function for pluginBroker.unregisterAllPlugins.
 * @return {boolean} True or False to indicate if the plugin registry data hive was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function clearAllPluginRegistry() {
  let functionName = clearAllPluginRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.clearAllPluginRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function writePluginRegistryToDisk
 * @description This is a wrapper function for warden.writePluginRegistryToDisk.
 * Which is in-turn a wrapper function for chiefPlugin.savePluginRegistryDisk.
 * Which is in-turn a wrapper function for pluginBroker.savePluginRegistry.
 * @return {boolean} True or False to indicate if the plugin registry was successfully saved to the disk or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function writePluginRegistryToDisk() {
  let functionName = writePluginRegistryToDisk.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.writePluginRegistryToDisk();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugin
 * @description A wrapper call to the warden.loadPlugin function.
 * Calls various functions in the chiefPlugn and pluginBroker to load plugin metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies ist(dependant plugins), etc...
 * @param {string} pluginPath The fully qualified path where to load the plugin from.
 * @return {boolean} True or False to indicate if the plugin was loaded or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
 async function loadPlugin(pluginPath) {
  let functionName = loadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  returnData = await warden.loadPlugin(pluginPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugins
 * @description A wrapper call to the warden.loadPlugins function.
 * Calls various functions in the chiefPlugin and pluginBroker to load plugin metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {array<string>} pluginsPaths The fully qualified paths where to load the plugins from.
 * @return {boolean} True or False to indicate if all the plugins were loaded or not.
 * @author Seth Hollingsead
 * @date 2022/09/01
 */
async function loadPlugins(pluginsPaths) {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPaths are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsPathsAre + JSON.stringify(pluginsPaths));
  let returnData = false;
  returnData = await warden.loadPlugins(pluginsPaths);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginsFromRegistry
 * @description A wrapper call to warden.loadPluginsFromRegistry function.
 * Calls various functions in the chief Plugin and pluginBroker to load plugin metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugns), etc...
 * @return {boolean} True or False to indicate if all the plugins were loaded or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function loadPluginsFromRegistry() {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = warden.loadPluginsFromRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugin
 * @description A wrapper call to the warden.unloadPlugin function.
 * Calls various functions in the chiefPlugin and pluginBroker to unload and remove metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {string} pluginName The name of the plugin that should be unloaded.
 * @return {boolean} True or False to indicate if the plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadPlugin(pluginName) {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await warden.unloadPlugin(pluginName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugins
 * @description A wrapper call to the warden.unloadPlugins function.
 * Calls various functions in the chiefPlugin and pluginBroker to unload and remove all the metaData and data for a list of plugins:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {array<string>} pluginNames An array list of names of plugins that should be unloaded.
 * @return {boolean} True or False to indicate if all the plugins were unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadPlugins(pluginNames) {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNamesIs + JSON.stringify(pluginNames));
  let returnData = false;
  returnData = await warden.unloadPlugins(pluginNames);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadAllPlugins
 * @description A wrapper call to the warden.unloadAllPlugins function.
 * Calls various functions in the chiefPlugin and pluginBroker to unload and remove all plugin metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @return {boolean} True or False to indicate if all the plugins were unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadAllPlugins() {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await warden.unloadAllPlugins();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getPluginsRegistryPath
 * @description A wrapper call to the warden.getPluginsRegistryPath function.
 * Which is in-turn a wrapper function for the chiefPlugin.getPluginsRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.getPluginsRegistryPath.
 * @return {string} The path to the plugins listed in the plugin registry as meta-data.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function getPluginsRegistryPath() {
  let functionName = getPluginsRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = '';
  returnData = await warden.getPluginsRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginResourceData
 * @description A wrapper call to the warden.loadPluginResourceData function.
 * @param {string} contextName The type of resource that is being loaded, eg: configuration, commandAliases, workflows, etc...
 * @param {string} pluginConfigPath The fully qualified path to where the plugin data is located and should be loaded from.
 * @return {object} The JSON data that is loaded and parsed from the plugin path.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadPluginResourceData(contextName, pluginResourcePath) {
  let functionName = loadPluginResourceData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  // pluginResourcePath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginResourcePathIs + pluginResourcePath);
  let returnData = {};
  returnData = await warden.loadPluginResourceData(contextName, pluginResourcePath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadAllJsonData
 * @description Loads all of the JSON data at the specified path.
 * Can be used to load account data, transaction history logs, activity logs, or any other kind of JSON data.
 * @param {string} dataPath The path to the JSON files that should be loaded.
 * @param {string} contextName The type of data that should be loaded.
 * @return A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function loadAllJsonData(dataPath, contextName) {
  let functionName = loadAllJsonData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let returnData = false;
  returnData = await warden.loadAllJsonData(dataPath, contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storeData
 * @description Persist some data to the data storage in the D-data structure.
 * @param {string} dataName The name of the data, unique name used to store the data in the data structure.
 * @param {object|string|boolean|number|array} data The data that should be stored.
 * @return {boolean} True or False to indicate if the data was stored successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function storeData(dataName, data) {
  let functionName = storeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  // data is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataIs + JSON.stringify(data));
  let returnData = false;
  returnData = await warden.storeData(dataName, data);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getData
 * @description Gets data from the D-Data structure data storage data hive.
 * @param {string} dataName The unique name the data should be stored under.
 * @return {object|string|boolean|number|array} The data element or object that was stored if any was found.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function getData(dataName) {
  let functionName = getData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await warden.getData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearData
 * @description Wipes out the data using the unique specified data name,
 * if any is found in the D-data structure data storage data hive.
 * @param {string} dataName The unique name of the data that should be cleared.
 * @return {boolean} True or False to indicate if the data was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function clearData(dataName) {
  let functionName = clearData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await warden.clearData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
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
 * @return {boolean} True or False to indicate if command was enqueued succsesfully.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
async function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  // command is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  if (await warden.getConfigurationSetting(wrd.csystem, cfg.clogUserEnteredCommands) === true) {
    await stack.push(sys.cUserEnteredCommandLog, command);
  }
  returnData = await warden.enqueueCommand(command);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
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
 * @return {boolean} True or False to indicate if the configuration was stored succesfully.
 * @author Seth Hollingsead
 * @date 222/02/18
 */
async function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  // configurationNamespace is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  // D[sys.cConfiguration][configurationName] = configurationValue;
  returnData = await warden.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
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

/**
 * @function consoleTableLog
 * @description This is just a wrapper for the loggers.consoleTableLog function,
 * It prints out a table with the data provided in the input tableDataArray.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {array<object>} tableData An array of objects that should be printed to the console as if it was data.
 * @param {array<string>} columnNames An array of column names that should be used when outputting the table.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/11/07
 */
async function consoleTableLog(classPath, tableData, columnNames) {
  // let functionName = consoleTableLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`tableData is: ${JSON.stringify(tableData)}`);
  // console.log(`columnNames is: ${JSON.stringify(columnNames)}`);
  await loggers.consoleTableLog(classPath, tableData, columnNames);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initFramework,
  accouterFramework,
  getFrameworkData,
  mergeClientBusinessRules,
  mergeClientCommands,
  loadCommandAliases,
  loadCommandWorkflows,
  listLoadedPlugins,
  listAllPluginsInRegistry,
  listAllPluginsInRegistryPath,
  numberOfPluginsInRegistry,
  numberOfPluginsInRegistryPath,
  registerPluginByNameAndPath,
  unregisterPluginByName,
  unregisterPlugins,
  syncPluginRegistryWithPath,
  clearAllPluginRegistry,
  writePluginRegistryToDisk,
  loadPlugin,
  loadPlugins,
  loadPluginsFromRegistry,
  unloadPlugin,
  unloadPlugins,
  unloadAllPlugins,
  getPluginsRegistryPath,
  loadPluginResourceData,
  loadAllJsonData,
  storeData,
  getData,
  clearData,
  executeBusinessRules,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue,
  setConfigurationSetting,
  getConfigurationSetting,
  consoleLog,
  consoleTableLog
};
