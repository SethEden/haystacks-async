/**
 * @file chiefPlugin.js
 * @module chiefPlugin
 * @description Contains all of the functions to manage the loading, unloading, reloading,
 * registering, unregistering of plugins and plugin metaData.
 * @requires module:pluginBroker
 * @requires module:chiefConstant
 * @requires module:chiefTheme
 * @requires module:loggers
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/02
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import pluginBroker from '../brokers/pluginBroker.js';
import chiefConstant from './chiefConstant.js';
import chiefTheme from './chiefTheme.js';
import loggers from '../executrix/loggers.js'
import stack from '../structures/stack.js'
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.chiefPlugin.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function loadPluginRegistryData
 * @description Loads the plugin registry meta data which includes paths to plugins.
 * @param {string} pluginRegistryPath This is the path to host application plugin registry file.
 * @return {object} A JSON object loaded from the specified path with the plugin paths and plugin metaData.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function loadPluginRegistryData(pluginRegistryPath) {
  let functionName = loadPluginRegistryData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryPath
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
  let returnData = {};
  returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function persistPluginRegistryToDataStructure
 * @description Saves the plugin registry data to the D-data structure.
 * @param {object} pluginRegistryData This is the data from host application plugin registry file.
 * @return {boolean} True or False to indicate if the persistense was successful or not.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function persistPluginRegistryToDataStructure(pluginRegistryData) {
  let functionName = persistPluginRegistryToDataStructure.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryDataIs + JSON.stringify(pluginRegistryData));
  let returnData = false;
  returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listLoadedPlugins
 * @description This is a wrapper function for pluginBroker.listAllLoadedPlugins.
 * @return {array<string>} A list array of the names of the plugins that are currently loaded.
 * @author Seth Hollingsead
 * @date 2023/02/06
 */
async function listLoadedPlugins() {
  let functionName = listLoadedPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await pluginBroker.listAllLoadedPlugins();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getAllPluginsInRegistry
 * @description This is a wrapper function for pluginBroker.listPluginsInRegistry.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function getAllPluginsInRegistry() {
  let functionName = getAllPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await pluginBroker.listPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getAllPluginsPathsInRegistry
 * @description This is a wrapper function for pluginBroker.listPluginsPathsInRegistry
 * The purpose is to get the array of paths for all of the plugins that must be loaded.
 * @return {array<string>} A list array of all the paths of all the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/20
 */
async function getAllPluginsPathsInRegistry() {
  let functionName = getAllPluginsPathsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await pluginBroker.listPluginsPathsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getAllPluginsInRegistryPath
 * @description This is a wrapper function for pluginBroker.listPluginsInRegistryPath.
 * @return {array<string>} A list array of the names of the plugins located at the specified path on
 * the local system from the plugins registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function getAllPluginsInRegistryPath() {
  let functionName = getAllPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await pluginBroker.listPluginsInRegistryPath()
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countAllPluginsInRegistry
 * @description This is a wrapper function for pluginBroker.countPluginsInRegistry.
 * @return {integer} The count of the number of plugins listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function countAllPluginsInRegistry() {
  let functionName = countAllPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await pluginBroker.countPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countAllPluginsInRegistryPath
 * @description This is a wrapper function for pluginBroker.countPluginsInRegistryPath.
 * @return {integer} The count of the number of plugin sub-folders in the plugins path listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function countAllPluginsInRegistryPath() {
  let functionName = countAllPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await pluginBroker.countPluginsInRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerNamedPlugin
 * @description This is a wrapper function for pluginBroker.registerPlugin.
 * @param {string} pluginName The name of the plugin that should be registered.
 * @param {string} pluginPath The path to the plugin, to be added to the plugin registry.
 * This should be the path to the plugin/package.json file, but not including the package.json as part of the path URI.
 * @return {boolean} True or False to indicate if the plugin was added to the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function registerNamedPlugin(pluginName, pluginPath) {
  let functionName = registerNamedPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterNamedPlugin
 * @description This is a wrapper function for pluginBroker.unregisterPlugin.
 * @param {string} pluginName The name of the plugin that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if the plugin was removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unregisterNamedPlugin(pluginName) {
  let functionName = unregisterNamedPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await pluginBroker.unregisterPlugin(pluginName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugins
 * @description This is a wrapper function for pluginBroker.unregisterPlugins.
 * @param {array<string>} pluginListArray A list array of plugin names that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if all the plugins were removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function unregisterPlugins(pluginListArray) {
  let functionName = unregisterPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginListArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginListArrayIs + JSON.stringify(pluginListArray));
  let returnData = false;
  returnData = await pluginBroker.unregisterPlugins(pluginListArray);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function synchronizePluginRegistryWithPath
 * @description This is a wrapper function for pluginBroker.syncPluginRegistryWithPluginRegistryPath.
 * @return {boolean} True or False to indicate if the synchronization was performed successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 * @NOTE It is expected that the number of plugins loaded at any one time will not be crazy high.
 * The function that is called in the pluginBroker.syncPluginRegistryWithPluginRegistryPath will
 * do a O(n^2) brute force search,
 * if the number of plugins needed at any one time ever grows much over 100, then this solution will need to be re-evaluated!
 */
async function synchronizePluginRegistryWithPath() {
  let functionName = synchronizePluginRegistryWithPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await pluginBroker.syncPluginRegistryWithPluginRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearPluginRegistry
 * @description This is a wrapper function for pluginBroker.unregisterAllPlugins.
 * @return {boolean} True or False to indicate if the plugin registry data hive was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function clearPluginRegistry() {
  let functionName = clearPluginRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await pluginBroker.unregisterAllPlugins();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function savePluginRegistryDisk
 * @description This is a wrapper function for pluginBroker.savePluginRegistry.
 * @return {boolean} True or False to indicate if the plugin registry was successfully saved to the disk or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function savePluginRegistryDisk() {
  let functionName = savePluginRegistryDisk.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await pluginBroker.savePluginRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadAllPluginsMetaData
 * @description Loads the plugin meta data for all of the plugins in the input plugins path array.
 * @param {array<string>} pluginsPaths Should be the entry-point to the plugin,
 * but it could also be the name of the folder in the plugin registry path that is the entry-point to the plugin.
 * If its the later than we will need to compose the fully qualified path.
 * @return {array<object>} An array that contains all of the meta-data,
 * for each of the plugins in the input pluginsPaths array.
 * @author Seth Hollingsead
 * @date 2022/09/02
 */
async function loadAllPluginsMetaData(pluginsPaths) {
  let functionName = loadAllPluginsMetaData.name
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPaths are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsPathsAre + JSON.stringify(pluginsPaths));
  let returnData = [];
  let index = 0;
  if (pluginsPaths && pluginsPaths.length > 0) {
    for (let pluginKey in pluginsPaths) {
      // pluginKey is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginKeyIs + pluginKey);
      let pluginPath = pluginsPaths[pluginKey];
      // pluginPath is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
      returnData[index] = {};
      if (pluginPath != '') {
        returnData[index] = await pluginBroker.loadPluginMetaData(pluginPath);
      } // End-if (pluginPath != '')
      // loadedPluginMetaData at index:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedPluginMetaDataAtIndex +
        // data:
        index + msg.cSpaceDataColonSpace + JSON.stringify(returnData[index]));
      index = index + 1;
    } // End-for (let pluginPath in pluginsPaths)
  } else {
    // ERROR: No plugin paths provided, please provide paths and try again.
    let errorMessage = msg.cErrorLoadAllPluginsMetaDataMessage01;
    console.log(errorMessage); // Make sure to output the error!
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadAllPluginsExecutionPaths
 * @description Extracts the path to the main entry point for each plugin and does a path join to form a
 * fully qualified path, then converts the fully qualified path to a file URI so it can be imported.
 * @param {array<object>} pluginsMetaData An array of JSON objects that contain all of the package.json data
 * loaded for each plugin that should be imported.
 * @param {array<string>} pluginsPaths An array of fully qualified paths where each plugin was loaded from,
 * used to path.join with the execution path entry point file for each plugin.
 * @return {array<string>} An array of fully qualified path URI's for each of the main entry points for
 * all of the plugins that should be loaded.
 * @author Seth Hollingsead
 * @date 2022/09/02
 */
async function loadAllPluginsExecutionPaths(pluginsMetaData, pluginsPaths) {
  let functionName = loadAllPluginsExecutionPaths.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginsMetaData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsMetaDataIs + JSON.stringify(pluginsMetaData));
  // pluginPaths are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsPathsAre + JSON.stringify(pluginsPaths));
  let returnData = [];
  let index = 0;
  if (pluginsMetaData && pluginsMetaData.length > 0) {
    for (let pluginMetaDataKey in pluginsMetaData) {
      // pluginMetaDataKey is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataKeyIs + pluginMetaDataKey);
      let pluginMetaData = pluginsMetaData[pluginMetaDataKey];
      // pluginMetaData is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataIs + JSON.stringify(pluginMetaData));
      returnData[index] = '';
      if (pluginMetaData) {
        returnData[index] = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginsPaths[index]);
        // pluginPathURI at index:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathUriAtIndex + index + bas.cSpace + wrd.cData + bas.cColon + bas.cSpace + returnData[index]);
      }
      index = index + 1;
    } // End-for (let pluginMetaData in pluginsMetaData)
  } else {
    // ERROR: No plugin meta data was found. Please ensure the correct path is provided and try again.
    let errorMessage = msg.cErrorLoadAllPluginsExecutionPathsMessage01;
    console.log(errorMessage); // Make sure to output the error!
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadAllPlugins
 * @description This is a wrapper function that iterates over the list of plugin URI paths to import and calls the
 * loadPlugin function on the pluginBroker to actually load the plugin data, metaData, business rules, commands,
 * constants, constants validation, command aliases, configuration settings, debug settings and workflows.
 * @param {array<string>} pluginsExecutionPaths An array of fully qualified path URI's to be imported and executed for each plugin.
 * @param {array<object>} pluginsMetaData An array of JSON objects that contain all of the package.json data
 * loaded for each plugin that should be imported, we are passing this along here,
 * to have access to the name of each plugin as it is loaded.
 * @return {object} An object containing objects that contain all of the data and functions from each plugin,
 * these will need to be decomposed and merged with the D-data structure as appropriate.
 * @author Seth Hollingsead
 * @date 2022/09/01
 */
async function loadAllPlugins(pluginsExecutionPaths, pluginsMetaData) {
  let functionName = loadAllPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginsExecutionPaths is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsExecutionPathsIs + JSON.stringify(pluginsExecutionPaths));
  // pluginsMetaData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsMetaDataIs + JSON.stringify(pluginsMetaData));
  let returnData = {};
  let index = 0;
  if (pluginsExecutionPaths && pluginsMetaData && pluginsExecutionPaths.length > 0 && pluginsMetaData.length > 0) {
    await stack.initStack(sys.cpluginsLoaded);
    for (let pluginExecutionPathKey in pluginsExecutionPaths) {
      let pluginExecutionPath = pluginsExecutionPaths[pluginExecutionPathKey];
      let pluginMetaData = pluginsMetaData[index];
      if (pluginExecutionPath && pluginMetaData) {
        // pluginExecutionPath is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginExecutionPathIs + pluginExecutionPath);
        // pluginMetaData is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataIs + JSON.stringify(pluginMetaData));
        returnData[pluginMetaData[wrd.cname]] = {}; // Initialize the data structure
        // Load the data and add it.
        try {
          let pluginReturnedData = await pluginBroker.loadPlugin(pluginExecutionPath);
          if (pluginReturnedData) {
            returnData[pluginMetaData[wrd.cname]] = pluginReturnedData
            // loaded plugin:
            console.log(msg.cloadedPlugin + pluginMetaData[wrd.cname]);
          } else {
            // There was an error attempting to load the plugin:
            console.log(msg.cErrorLoadingPlugin + pluginExecutionPath);
          }
        } catch (err) {
          // Failed to load the plugin:
          console.log(msg.cERROR_Colon + namespacePrefix + functionName + msg.cloadAllPluginsMessage01 + pluginMetaData[wrd.cname]);
          // plugin entry point path:
          console.log(msg.cloadAllPluginsMessage02 + pluginExecutionPath);
          console.log(msg.cERROR_Colon + err);
          stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], false]);
        }
        // Push to a stack that we have successfully loaded the currently named plugin,
        // so that all the plugins loaded can be verified.
        stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], true]);
      } else {
        // Failed to load the plugin:
        console.log(msg.cERROR_Colon + namespacePrefix + functionName + msg.cloadAllPluginsMessage01 + pluginMetaData[wrd.cname]);
        // plugin entry point path:
        console.log(msg.cloadAllPluginsMessage02 + pluginExecutionPath);
        stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], false]);
      }
      index = index + 1;
    } // End-for (let pluginExecutionPath in pluginsExecutionPaths)
  } else {
    // ERROR: No plugin execution paths or plugins metaData was specified:
    console.log(msg.cloadAllPluginsMessage03 + namespacePrefix + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integrateAllPluginsData
 * @description Integrates all plugin data for each plugin with the haystacks data structures,
 * this is the final step if the loading of the plugins and basically ensures that all runtime operations of all of the loaded plugins
 * are fully integrated and activated within the haystacks execution environment.
 * @param {object} allPluginsData All of the plugins data for each plugin all combined together into a single JSON data object.
 * @return {boolean} True or False to indicate if all of the data integration was successful or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integrateAllPluginsData(allPluginsData) {
  let functionName = integrateAllPluginsData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // allPluginsData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callPluginsDataIs + JSON.stringify(allPluginsData));
  let returnData = true;
  if (allPluginsData) {
    for (const key in allPluginsData) {
      let pluginName = key;
      // pluginName is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
      let dataIntegrationSuccess = await integratePluginData(pluginName, allPluginsData[pluginName]);
      if (dataIntegrationSuccess === false) {
        returnData = dataIntegrationSuccess;
      }
    } // End-for (const key in allPluginsData)
  } else {
    // ERROR: Invalid data input, unable to integrate all plugin data.
    console.log(msg.cErrorIntegrateAllPluginsDataMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginData
 * @description Integrates a single plugin data set with the haystacks data structures.
 * @param {string} pluginName The name of the plugin that should have its data integrated with the haystacks data structure.
 * @param {object} pluginData The data for the named plugin that should be integrated wtih the haystacks data structure.
 * @return {boolean} True or False to indicate if all the plugin data was integrated successfully with the haystacks data structures.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginData(pluginName, pluginData) {
  let functionName = integratePluginData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginDataIs + JSON.stringify(pluginData));
  let returnData = false;
  let businessRulesIntegrationResult = false;
  let commandsIntegrationResult = false;
  let configurationDataIntegrationResult = false;
  let commandAliasesIntegrationResult = false;
  let workflowsIntegrationResult = false;
  let constantsValidationDataIntegrationResult = false;
  let themeDataIntegrationResult = false;
  if (pluginData && pluginName) {
    if (pluginData[wrd.cdata] !== undefined) {
      if (pluginData[wrd.cdata][sys.cpluginBusinessRules] !== undefined) {
        businessRulesIntegrationResult = await pluginBroker.integratePluginBusinessRules(pluginName, pluginData[wrd.cdata][sys.cpluginBusinessRules]);
      } else {
        // ERROR: No plugin business rules data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage02 + pluginName);
      }
      if (pluginData[wrd.cdata][sys.cpluginCommands] !== undefined) {
        commandsIntegrationResult = await pluginBroker.integratePluginCommands(pluginName, pluginData[wrd.cdata][sys.cpluginCommands]);
      } else {
        // ERROR: No plugin commands data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage03 + pluginName);
      }
      if (pluginData[wrd.cdata][wrd.cconfiguration] !== undefined) {
        configurationDataIntegrationResult = await pluginBroker.integratePluginConfigurationData(pluginName, pluginData[wrd.cdata][wrd.cconfiguration]);
      } else {
        // ERROR: No plugin configuration data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage04 + pluginName);
      }
      if (pluginData[wrd.cdata][sys.cCommandsAliases] !== undefined) {
        commandAliasesIntegrationResult = await pluginBroker.integratePluginCommandAliases(pluginName, pluginData[wrd.cdata][sys.cCommandsAliases]);
      } else {
        // ERROR: No plugin command aliases data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage05 + pluginName);
      }
      if (pluginData[wrd.cdata][sys.cCommandWorkflows] !== undefined) {
        workflowsIntegrationResult = await pluginBroker.integratePluginWorkflows(pluginName, pluginData[wrd.cdata][sys.cCommandWorkflows]);
      } else {
        // ERROR: No plugin workflows data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage06 + pluginName);
      }
      if (pluginData[wrd.cdata][sys.cpluginConstantsValidationData] !== undefined) {
        constantsValidationDataIntegrationResult = await chiefConstant.addConstantsValidationData(pluginData[wrd.cdata][sys.cpluginConstantsValidationData],
          wrd.cPlugin + bas.cColon + pluginName);
      } else {
        // ERROR: No plugin constants validation data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage07 + pluginName);
      }
      if (pluginData[wrd.cdata][wrd.cThemes] !== undefined) {
        themeDataIntegrationResult = await chiefTheme.addThemeData(pluginData[wrd.cdata][wrd.cThemes], wrd.cPlugin + bas.cColon + pluginName);
      } else {
        // ERROR: No plugin themes data was loaded for the plugin:
        console.log(msg.cErrorIntegratePluginDataMessage08 + pluginName);
      }
    } else {
      // ERROR: No plugin data was loaded at all for the plugin:
      console.log(msg.cErrorIntegratePluginDataMessage09 + pluginName);
    }
  } else {
    // ERROR: Invalid input, either the plugin name or plugin data was undefined. Please provide valid data and try again.
    console.log(msg.cErrorIntegratePluginDataMessage01);
    // pluginName is:
    console.log(msg.cpluginNameIs + pluginName);
    // pluginData is:
    console.log(msg.cpluginDataIs + JSON.stringify(pluginData));
  }
  if (businessRulesIntegrationResult === true &&
    commandsIntegrationResult === true &&
    configurationDataIntegrationResult === true &&
    commandAliasesIntegrationResult === true &&
    workflowsIntegrationResult === true &&
    constantsValidationDataIntegrationResult === true &&
    themeDataIntegrationResult === true) {
      returnData = true;
    }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function verifyAllPluginsLoaded
 * @description Examines the pluginsLoaded stack to confirm that none of the plugins which
 * were supposed to have been loaded failed to load.
 * @return {boolean} True or False to indicate if all of the plugins were loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
 async function verifyAllPluginsLoaded() {
  let functionName = verifyAllPluginsLoaded.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let foundFailedPlugin = false;
  let stackLength = stack.length(sys.cpluginsLoaded);
  for (let i = 0; i <= stackLength; i++) {
    let pluginLoadedObject = stack.pop(sys.cpluginsLoaded);
    if (Array.isArray(pluginLoadedObject)) {
      if (pluginLoadedObject[1] === false) {
        foundFailedPlugin = true;
      }
    } // End-if (Array.isArray(pluginLoadedObject))
  } // End-for (let i = 0; i <= stackLength; i++)
  returnData = !foundFailedPlugin; // Invert the logic
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugin
 * @description Unloads a plugin by removing all of the plugin data and meta-data from all of the
 * appropriate data structures in the D-data structure.
 * This is a wrapper function for calling the pluginBroker to get the work done.
 * @param {string} pluginName The name of the plugin that should have all its data unloaded from the D-data structure.
 * @return {boolean} True or False to indicate if the plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/01
 */
async function unloadPlugin(pluginName) {
  let functionName = unloadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await pluginBroker.unloadPlugin(pluginName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getPluginsRegistryPath
 * @description This is a wrapper function for the pluginBroker.getPluginsRegistryPath.
 * @return {string} The path to the plugins listed in the plugin registry as meta-data.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function getPluginsRegistryPath() {
  let functionName = getPluginsRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = '';
  returnData = await pluginBroker.getPluginsRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  loadPluginRegistryData,
  persistPluginRegistryToDataStructure,
  listLoadedPlugins,
  getAllPluginsInRegistry,
  getAllPluginsPathsInRegistry,
  getAllPluginsInRegistryPath,
  countAllPluginsInRegistry,
  countAllPluginsInRegistryPath,
  registerNamedPlugin,
  unregisterNamedPlugin,
  unregisterPlugins,
  synchronizePluginRegistryWithPath,
  clearPluginRegistry,
  savePluginRegistryDisk,
  loadAllPluginsMetaData,
  loadAllPluginsExecutionPaths,
  loadAllPlugins,
  integrateAllPluginsData,
  integratePluginData,
  verifyAllPluginsLoaded,
  unloadPlugin,
  getPluginsRegistryPath
};