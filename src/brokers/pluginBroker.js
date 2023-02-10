/**
 * @file pluginBroker.js
 * @module pluginBroker
 * @description Contains all of the lower level plugin processing functions,
 * and also acts as an interface for loading, unloading, reloading, registering,
 * unregistering plugins and plugin metaData.
 * @requires module:constantBroker
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/02
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import constantBroker from './constantBroker.js';
import dataBroker from './dataBroker.js';
import ruleBroker from './ruleBroker.js';
import workflowBroker from './workflowBroker.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';
import configurator from '../executrix/configurator.js'
import commandBroker from './commandBroker.js'
import themeBroker from './themeBroker.js'

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.brokers.pluginBroker.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function loadPluginRegistry
 * @description Loads the plugin registry file, which specified the data with the paths were plugins should be loaded from.
 * @param {string} pluginRegistryPath Teh path to the plugin registry for the app that loaded the haystacks framework.
 * @return {object} The JSON data object loaded from the specified plugin registry path by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function loadPluginRegistry(pluginRegistryPath) {
  let functionName = loadPluginRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
  let returnData = {};
  let resolvedPluginRegistryPath = path.resolve(pluginRegistryPath);
  // resolvedPluginRegistryPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedPluginRegistryPathIs + resolvedPluginRegistryPath);
  returnData = await ruleBroker.processRules([resolvedPluginRegistryPath, ''], [biz.cgetJsonData]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storePluginRegistryInDataStructure
 * @description Pushes the input plugin registry data to the D-data structure so it can be used by the rest of the framework.
 * @param {object} pluginRegistryData The plugin registry data that should be stored in the D-data structure.
 * @return {boolean} A True or False value to indicate if the data was successfully stored in the D-data structure or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function storePluginRegistryInDataStructure(pluginRegistryData) {
  let functionName = storePluginRegistryInDataStructure.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryDataIs + JSON.stringify(pluginRegistryData));
  let returnData = false;
  try {
    if (D[cfg.cpluginRegistry] === 'undefined') {
      D[cfg.cpluginRegistry] = {};
    }
    D[cfg.cpluginRegistry] = pluginRegistryData;
    returnData = true;
  } catch (err) {
    // ERROR: There was a problem saving the registry data to the plugin registry in the d-data structure: 
    console.log(msg.cstorePluginRegistryInDataStoreMessage01 + err);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllLoadedPlugins
 * @description Builds a list array of the names of the plugins that are currently loaded.
 * @return {array<string>} A list array of the names of the plugins that are currently loaded in the Haystacks platform.
 * @author Seth Hollingsead
 * @date 2023/02/06
 */
async function listAllLoadedPlugins() {
  let functionName = listAllLoadedPlugins.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  let pluginsLoadedList = D[sys.cpluginsLoaded];
  // pluginsLoadedList is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsLoadedListIs + JSON.stringify(pluginsLoadedList));
  if (Array.isArray(pluginsLoadedList) === true && pluginsLoadedList.length >= 1) {
    // pluginsLoadedList is an array and length greater than or equal to 1
    loggers.consoleLog(namespacePrefix + functionName, msg.cunloadPluginMessage01);
    for (let pluginLoadedKey in pluginsLoadedList) {
      // pluginLoadedKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedKeyIs + pluginLoadedKey);
      let pluginLoadedEntry = pluginsLoadedList[pluginLoadedKey];
      // pluginLoadedEntry is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedEntryIs + JSON.stringify(pluginLoadedEntry));
      // pluginLoadedEntry name is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedEntryNameIs + pluginLoadedEntry[0]);
      returnData.push(pluginLoadedEntry[0]);
    }// End-for (let pluginLoadedKey in pluginsLoadedList)
  } // End-if (Array.isArray(pluginsLoadedList) === true && pluginsLoadedList >= 1)
  // List of loaded plugins is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listPluginsInRegistry
 * @description Builds a list array of the names of the plugins in the plugin registry.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function listPluginsInRegistry() {
  let functionName = listPluginsInRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await listPluginsAttributeInRegistry(wrd.cName);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listPluginsPathsInRegistry
 * @description Builds a list array of the paths of the plugins in the plugin registry.
 * @return {array<string>} A list array of the paths of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/20
 */
async function listPluginsPathsInRegistry() {
  let functionName = listPluginsPathsInRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await listPluginsAttributeInRegistry(wrd.cPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listPluginsAttributeInRegistry
 * @description Builds a list array of the specified attribute out of the plugin objects in the plugin registry.
 * @param {string} attributeName The name of the attribute that should be looked up in the plugin object,
 * for each of the plugin objects in the plugin registry.
 * @return {array<string>} A list array of the attributes from the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2023/01/31
 */
async function listPluginsAttributeInRegistry(attributeName) {
  let functionName = listPluginsAttributeInRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // attributeName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cattributeNameIs + attributeName);
  let returnData = [];
  let pluginRegistryList = D[cfg.cpluginRegistry][wrd.cplugins];
  // pluginRegistryList is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryListIs + JSON.stringify(pluginRegistryList));
  for (let pluginKey in pluginRegistryList) {
    // pluginKey is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cpluginKeyIs + pluginKey);
    let pluginParentObject = pluginRegistryList[pluginKey];
    // pluginParentObject is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cpluginParentObjectIs + JSON.stringify(pluginParentObject));
    let keys = Object.keys(pluginParentObject);
    let pluginObject = pluginParentObject[keys[0]];
    // pluginObject is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cpluginObjectIs + JSON.stringify(pluginObject));
    returnData.push(pluginObject[attributeName]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listPluginsInRegistryPath
 * @description In the plugin registry there should be an entry for the path of the plugins on the local system.
 * This function will load that path and return a list of the sub-folders located at that path.
 * @return {array<string>} A list array of the names of the plugins located at the specified path on
 * the local system from the plugins registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function listPluginsInRegistryPath() {
  let functionName = listPluginsInRegistryPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = ruleBroker.processRules([D[cfg.cpluginRegistry][wrd.cpath], ''], [biz.cgetDirectoryList]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countPluginsInRegistry
 * @description Scans the plugin registry data hive and determines how many plugins are registered there.
 * @return {integer} The count of the number of plugins listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function countPluginsInRegistry() {
  let functionName = countPluginsInRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  let pluginRegistryList = await listPluginsInRegistry();
  returnData = pluginRegistryList.length;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countPluginsInRegistryPath
 * @description Counts the number of sub-folders located at the path specified in the plugin registry data hive.
 * @return {integer} The count of the number of plugin sub-folders in the plugins path listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function countPluginsInRegistryPath() {
  let functionName = countPluginsInRegistryPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  let pluginFolderList = await listPluginsInRegistryPath();
  returnData = pluginFolderList.length;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerPlugin
 * @description Manually registers a plugin with the plugin registry data hive.
 * Allows for special case where plugins can be registered from a different path, then the path specified by the plugin registry.
 * Caution should be emphasized when loading plugins from a custom path location, this should be used primarily for debugging and triage use cases.
 * @param {string} pluginName The name of the plugin that should be registered. 
 * @param {string} pluginPath The path to the plugin, to be added to the plugin registry.
 * This should be the path to the plugin/package.json file, but not including the package.json as part of the path URI.
 * @return {boolean} True or False to indicate if the plugin was added to the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function registerPlugin(pluginName, pluginPath) {
  let functionName = registerPlugin.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  let pluginRegistrationEntry = {};
  try {
    if (pluginName && pluginPath) {
      pluginRegistrationEntry = {Name: pluginName, Path: pluginPath};
      // NOTE: We need to check and see if the plugin is already registered, and throw an error message if it is.
      // To prevent the user from being able to register the same plugin multiple times.
      let registeredPluginsArray = await listPluginsInRegistry();
      let pluginIsRegistered = false;
      for (let registeredPluginNameKey in registeredPluginsArray) {
        let registeredPluginName = registeredPluginsArray[registeredPluginNameKey]
        if (registeredPluginName === pluginName) {
          pluginIsRegistered = true;
          break;
        }
      }
      if (pluginIsRegistered === false) {
        D[cfg.cpluginRegistry][wrd.cplugins].push({[pluginName]: pluginRegistrationEntry});
        returnData = true;
      } else {
        // ERROR: The specified plugin is already registered. Plugin name:
        console.log(msg.cErrorRegisterPluginMessage02 + pluginName);
      }    
    } else {
      if (!pluginName) {
        // ERROR: Plugin Name is an invalid value:
        console.log(msg.cErrorRegisterPluginMessage03 + pluginName);
      }
      if (!pluginPath) {
        // ERROR: Plugin Path is an invalid value:
        console.log(msg.cErrorRegisterPluginMessage04 + pluginPath);
      }
    }
  } catch (err) {
    // ERROR: Failure to register plugin:
    // pluginPath is:
    // error message:
    console.log(msg.cErrorRegisterPluginMessage01 + pluginName);
    console.log(msg.cpluginPathIs + pluginPath);
    console.log(msg.cerrorMessage + err);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugin
 * @description Manually removes a plugin from the plugin registry data hive.
 * @param {string} pluginName The name of the plugin that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if the plugin was removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function unregisterPlugin(pluginName) {
  let functionName = unregisterPlugin.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  // We need to find the index of the plugin we are looking for, then we can use the array.splice method to remove it.
  let pluginRegistryNames = await listPluginsInRegistry();
  let index = 0;
  try {
    for (let currentPluginNameKey in pluginRegistryNames) {
      let currentPluginName = pluginRegistryNames[currentPluginNameKey];
      // currentPluginName is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentPluginNameIs + currentPluginName);
      if (currentPluginName === pluginName) {
        break;
      }
      index = index + 1;
    }
    let pluginObjects = D[cfg.cpluginRegistry][wrd.cplugins];
    pluginObjects.splice(index, 1);
    let newPluginObjects = pluginObjects;
    D[cfg.cpluginRegistry][wrd.cplugins] = newPluginObjects;
    returnData = true;
  } catch (err) {
    // ERROR: Failure to unregister plugin:
    // error message:
    console.log(msg.cErrorUnRegisterPluginMessage01 + pluginName);
    console.log(msg.cerrorMessage + err);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugins
 * @description Removes a list of plugins from the plugin registry data hive, by calling unregisterPlugin for each one.
 * @param {array<string>} pluginListArray A list array of plugin names that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if all the plugins were removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function unregisterPlugins(pluginListArray) {
  let functionName = unregisterPlugins.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginListArray is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginListArrayIs + JSON.stringify(pluginListArray));
  let returnData = true;
  let noErrorFound = true;
  if (Array.isArray(pluginListArray) === true && pluginListArray.length >= 1) {
    for (let pluginNameKey in pluginListArray) {
      let pluginName = pluginListArray[pluginNameKey];
      // pluginName is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
      if (pluginName) {
        noErrorFound = unregisterPlugin(pluginName);
      } else {
        // ERROR: The plugin name was not a valid name: 
        console.log(msg.cErrorUnregisterPluginsMessage01 + pluginName);
      }
      if (noErrorFound === false) {
        returnData = false;
      }
    } // End-for (let pluginNameKey in pluginListArray)
  } // End-if (Array.isArray(pluginListArray) === true && pluginListArray.length >= 1)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function syncPluginRegistryWithPluginRegistryPath
 * @description performs a synchronization procedure on the plugin registry to ensure that the contents and
 * plugins registered in the plugin registry match with the list of plugin folders located at the path specified in
 * the plugin registry as the default plugin path. The updates are made to the plugin registry data hive.
 * @return {boolean} True or False to indicate if the synchronization was performed successfully.
 * @author Seth Hollingsead
 * @date 2022/09/14
 * @NOTE It is expected that the number of plugins loaded at any one time will not be crazy high.
 * This function will do a O(n^2) brute force search,
 * if the number of plugins needed at any one time ever grows much over 100, then this solution will need to be re-evaluated!
 */
async function syncPluginRegistryWithPluginRegistryPath() {
  let functionName = syncPluginRegistryWithPluginRegistryPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let pluginRegistryList = await listPluginsInRegistry();
  let pluginRegistryFolderList = await listPluginsInRegistryPath();
  let accumulatorPluginRegistry = [];
  let synchronizedPluginRegistryList = [];
  let pluginsRootPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginsRootPath);
  // pluginRegistryList is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryListIs + pluginRegistryList);
  // pluginRegistryFolderList is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryFolderListIs + pluginRegistryFolderList);
  // pluginsRootPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsRootPathIs + pluginsRootPath);
  try {
    if (pluginRegistryFolderList && Array.isArray(pluginRegistryFolderList) === false) {
      if (pluginRegistryFolderList.includes(bas.cComa) === true) {
        pluginRegistryFolderList = pluginRegistryFolderList.split(bas.cComa);
      }
    }
    if (pluginRegistryList.length === 0 && pluginRegistryFolderList && pluginRegistryFolderList.length === 1) {
      // pluginRegistryList.length === 0
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryListLengthEqualZero);
      synchronizedPluginRegistryList[pluginRegistryFolderList[0]] = {Name: pluginRegistryFolderList[0], Path: path.join(pluginsRootPath + bas.cForwardSlash + pluginRegistryFolderList[0] + bas.cForwardSlash)};
    } else if (pluginRegistryFolderList.length !== 0) {
      // pluginRegistryList.length !== 0
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryListLengthNotEqualZero);
      for (let folderPluginKey in pluginRegistryFolderList) {
        let folderPlugin = pluginRegistryFolderList[folderPluginKey];
        // folderPlugin is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cfolderPluginIs + JSON.stringify(folderPlugin));
        let folderPluginName = folderPlugin[wrd.cName];
        if (folderPluginName === undefined) {
          folderPluginName = folderPlugin;
        }
        // folderPluginName is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cfolderPluginNameIs + folderPluginName);
        // Now search the pluginRegistryList to see if it contains this same name.
        let foundMatchingPluginName = false;
        for (let registryPluginKey in pluginRegistryList) {
          let registryPlugin = pluginRegistryList[registryPluginKey];
          // registryPlugin is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cregistryPluginIs + JSON.stringify(registryPlugin));
          let registryPluginName = registryPlugin[wrd.cName];
          // registryPluginName is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cregistryPluginNameIs + registryPluginName);
          if (folderPluginName === registryPluginName) {
            foundMatchingPluginName = true;
            break;
          }
        } // End-for (let registryPlugin in pluginRegistryList)
        if (foundMatchingPluginName === false) {
          // Then no match was found, and we should therefore add this plugin entry object.
          // First create the object, folderPlugin is mostly likely just a string.
          accumulatorPluginRegistry.push({[folderPluginName]: {Name: folderPluginName, Path: path.join(pluginsRootPath + bas.cForwardSlash + pluginRegistryFolderList[folderPluginKey] + bas.cForwardSlash)}});
        }
        // NOTE: pluginRegistryList is the accumulator here, when we are all done we need to assign that one to the output.
        // accumulatorPluginRegistry is:
        loggers.consoleLog(namespacePrefix + functionName, msg.caccumulatorPluginRegistryIs + JSON.stringify(accumulatorPluginRegistry));
      } // End-for (let folderPlugin in pluginRegistryFolderList)
      // Now assign the pluginRegistryList to the synchronizedPluginRgistryList,
      // then we will clear the plugin registry and re-assign it to the merged/synchronized/updated version of the plugin registry.
      synchronizedPluginRegistryList = accumulatorPluginRegistry;
    }
    // synchronizedPluginRegistryList is:
    loggers.consoleLog(namespacePrefix + functionName, msg.csynchronizedPluginRegistryListIs + JSON.stringify(synchronizedPluginRegistryList));
    // Now assign it back to the official plugin registry data hive on the D-data structure
    unregisterAllPlugins();
    D[cfg.cpluginRegistry][wrd.cplugins] = synchronizedPluginRegistryList;
    returnData = true;
  } catch (err) {
    // ERROR: Failure to synchronize the plugin registry with the list of plugins available from the plugins folder specified by the application in the plugins registry JSON file.
    // error message:
    loggers.consoleLog(namespacePrefix + functionName, msg.cErrorSyncPluginRegistryWithPluginRegistryPathMessage01);
    console.log(msg.cerrorMessage + err);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterAllPlugins
 * @description Removes all plugins from the list of registered plugins in the plugin registry.
 * This removes all plugins in the plugins registry data hive.
 * @return {boolean} True or False to indicate if the plugin registry data hive was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function unregisterAllPlugins() {
  let functionName = unregisterAllPlugins.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  try {
    // Assign it to an empty array, that should successfully wipe out all the contents.
    D[cfg.cpluginRegistry][wrd.cplugins] = [];
    returnData = true;
  } catch (err) {
    // ERROR: Could not unregister all of the plugins.
    // error message:
    console.log(msg.cErrorUnregisterAllPluginsMessage01);
    console.log(msg.cerrorMessage + err);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function savePluginRegistry
 * @description Exports the plugin registry data hive JSON object and saves it out to disk,
 * over-writing any existing plugin registry JSON file at the location specified by the application.
 * @return {boolean} True or False to indicate if the export to file was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function savePluginRegistry() {
  let functionName = savePluginRegistry.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let pluginRegistry = D[cfg.cpluginRegistry]
  // pluginRegistry is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryIs + JSON.stringify(pluginRegistry));
  try {
    let pluginRegistryPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath);
    // pluginRegistryPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
    returnData = ruleBroker.processRules([pluginRegistryPath, pluginRegistry], [biz.cwriteJsonData]);
  } catch (err) {
    // ERROR: Failure to write out the plugin registry to the plugin path specified by the application: 
    // error message:
    console.log(msg.cErrorSavePluginRegistryMessage01);
    console.log(msg.cerrorMessage + err);
  }  
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginMetaData
 * @description Loads the plugin meta data for the plugin at the specified path by looking
 * for a package.json at the specified path and loading that file, and returning it as a JSON object.
 * @param {string} pluginPath The path to a plugin where a package.json should be expected to be found for that plugin.
 * It could also be that the pluginPath just contains the name of the folder that is the plugin,
 * and the path should be acquired from the plugin registry path.
 * @return {object} The JSON data object loaded from the plugin package.json file, specified by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/09/02 
 */
async function loadPluginMetaData(pluginPath) {
  let functionName = loadPluginMetaData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = {};
  let fullyQualifiedPluginPath = '';
  if (pluginPath.includes(bas.cForwardSlash) !== true && pluginPath.includes(bas.cBackSlash) !== true) {
    // It's just a name, we need to get the first part of the path from the plugin registry path.
    let prefixPluginPath = getPluginsRegistryPath();
    // prefixPluginPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cprefixPluginPathIs + prefixPluginPath);
    fullyQualifiedPluginPath = prefixPluginPath + pluginPath;
  } else {
    fullyQualifiedPluginPath = pluginPath;
  }
  let resolvedPluginPath = path.resolve(fullyQualifiedPluginPath + bas.cForwardSlash + sys.cpackageDotJson);
  // resolvedPluginPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedPluginPathIs + resolvedPluginPath);
  returnData = await ruleBroker.processRules([resolvedPluginPath, ''], [biz.cgetJsonData]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function extractAndProcessPluginEntryPointURI
 * @description Extracts the entry point path and file name for a plugin from the package.json data object.
 * Processes the entry point path with a path.join to form a fully qualified path.
 * Converts the resulting fully qualified path into a path URI string for importing later.
 * @param {object} pluginMetaData The meta data for the given plugin loaded for the corresponding package.json.
 * @param {string} pluginPath The path to the plugin, used to form a fully-qualified path.
 * NOTE: It could also be that the pluginPath just contains the name of the folder that is the plugin,
 * and the path should be acquired from the plugin registry path.
 * @return {string} The path entry point to the plugin as a URI file path.
 * @author Seth Hollingsead
 * @date 2022/09/02
 */
async function extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath) {
  let functionName = extractAndProcessPluginEntryPointURI.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginMetaData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataIs + JSON.stringify(pluginMetaData));
  // pluginPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = '';
  let fullyQualifiedPluginPath = '';
  if (pluginMetaData && pluginPath) {
    if (pluginPath.includes(bas.cForwardSlash) !== true && pluginPath.includes(bas.cBackSlash) !== true) {
      // It's just a name, we need to get the first part of the path from the plugin registry path.
      let prefixPluginPath = getPluginsRegistryPath();
      // prefixPluginPath is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cprefixPluginPathIs + prefixPluginPath);
      fullyQualifiedPluginPath = prefixPluginPath + pluginPath;
    } else {
      fullyQualifiedPluginPath = pluginPath;
    }
    let pluginMainPath = pluginMetaData[wrd.cmain];
    // pluginMainPath before join is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage01 + pluginMainPath);
    pluginMainPath = path.join(fullyQualifiedPluginPath, pluginMainPath);
    // pluginMainPath after join is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage02 + pluginMainPath);
    pluginMainPath = url.pathToFileURL(pluginMainPath);
    // pluginMainPath URI is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage03 + pluginMainPath);
    returnData = pluginMainPath;
  } else {
    // ERROR: No plugin meta data or plugin path are specified:
    console.log(msg.cextractAndProcessPluginEntryPointUriMessage04 + namespacePrefix + functionName);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugin
 * @description Uses a combination of promises and a function call to
 * import the specified plugin file at the specified URI path.
 * @param {string} pluginExecutionPath The entry point for the plugin that should be loaded.
 * @return {object} The data that was returned and loaded from the plugin.
 * @author Seth Hollingsead
 * @date 2022/09/02 
 */
async function loadPlugin(pluginExecutionPath) {
  let functionName = loadPlugin.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginExecutionPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginExecutionPathIs + pluginExecutionPath);
  let returnData = {};
  const pluginResponseData = new Promise((resolve, reject) => {
    const loadAsyncImport = () => {
      const asyncImport = async () => {
        return await myDynamicImport(pluginExecutionPath);
      };

      return asyncImport().then((result) => {
        return result;
      });
    };

    const myDynamicImport = async (path) => {
      return await import(path);
    };
    return loadAsyncImport().then(async value => {
      resolve(returnData = await value[wrd.cdefault].initializePlugin(D));
      // dataLoaded is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cdataLoadedIs + JSON.stringify(returnData));
    }).catch (err => reject(err));
  });

  await Promise.all([pluginResponseData]).then((value) => {
    loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + JSON.stringify(value));
  });

  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginBusinessRules
 * @description Saves all of the plugin business rules to the D-data structure where business rules are stored and called from.
 * @param {string} pluginName The name of the plugin who's business rules should be integrated with the haystacks business rules.
 * @param {object} pluginBusinessRules The business rules specific to this current plugin.
 * @return {boolean} True or False to indicate if this plugins business rules are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginBusinessRules(pluginName, pluginBusinessRules) {
  let functionName = integratePluginBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginBusinessRules is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginBusinessRulesIs + JSON.stringify(pluginBusinessRules));
  let returnData = false;
  returnData = ruleBroker.addPluginRules(pluginName, pluginBusinessRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginCommands
 * @description Saves all of the plugin commands to the D-data structure where commands are stored and called from.
 * @param {string} pluginName The name of the plugin who's commands should be integrated with the haystacks commands.
 * @param {object} pluginCommands The commands specific to this current plugin.
 * @return {boolean} True or False to indicate if this plugins commands are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginCommands(pluginName, pluginCommands) {
  let functionName = integratePluginCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginCommands is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cplguinCommandsIs + JSON.stringify(pluginCommands));
  let returnData = false;
  returnData = commandBroker.addPluginCommands(pluginName, pluginCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginConfigurationData
 * @description Saves all of the plugin configuration data to the D-data structure where configuration data are stored.
 * @param {string} pluginName The name of the plugin who's configuration data should be integrated with the haystacks configuration data.
 * @param {object} pluginConfigurationData The JSON object that contains all of the configuration data specific to this current plugin.
 * @return {boolean} True or False to indicate if this plugins configuration data are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginConfigurationData(pluginName, pluginConfigurationData) {
  let functionName = integratePluginConfigurationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginConfigurationData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigurationDataIs + JSON.stringify(pluginConfigurationData));
  let returnData = false;
  returnData = dataBroker.addPluginConfigurationData(pluginName, pluginConfigurationData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginCommandAliases
 * @description Saves all of the plugin command aliases to the D-data structure where command aliases data are stored.
 * @param {string} pluginName The name of the plugin who's command aliases should be integrated with the haystacks command aliases data.
 * @param {object} pluginCommandAliases The JSON object that contains all of the command aliases specific to this current plugin.
 * @return {boolean} True or False to indicate if this plugins command aliases data are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginCommandAliases(pluginName, pluginCommandAliases) {
  let functionName = integratePluginCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginCommandAliases is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesIs + JSON.stringify(pluginCommandAliases));
  let returnData = false;
  returnData = commandBroker.addPluginCommandAliases(pluginName, pluginCommandAliases);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginWorkflows
 * @description Saves all of the plugin workflows to the D-data structure where workflow data are stored.
 * @param {string} pluginName The name of the plugin who's workflows should be integrated with the haystacks workflows data.
 * @param {object} pluginWorkflows The JSON object that contains all of the workflows specific to this current plugin.
 * @return {boolean} True or False to indicate if the plugins workflows data are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
async function integratePluginWorkflows(pluginName, pluginWorkflows) {
  let functionName = integratePluginWorkflows.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginWorkflows is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginWorkflowsIs + JSON.stringify(pluginWorkflows));
  let returnData = false;
  returnData = workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function integratePluginThemeData
 * @description Saves all of the plugin theme data to the D-data structure where theme data is stored.
 * @param {string} pluginName The name of the plugin who's theme data should be integrated with the haystacks theme data.
 * @param {object} pluginThemeData The JSON object that contains all of the theme data specific to this current plugin.
 * @return {boolean} True or False to indicate if the plugins theme data are successfully integrated or not.
 * @author Seth Hollingsead
 * @date 2022/10/25
 */
async function integratePluginThemeData(pluginName, pluginThemeData) {
  let functionName = integratePluginThemeData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginThemeData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginThemeDataIs + JSON.stringify(pluginThemeData));
  let returnData = false;
  returnData = themeBroker.addThemeData(pluginThemeData, wrd.cPlugins + bas.cColon + pluginName);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugin
 * @description Unloads a plugin by removing all of the plugin data and meta-data from all of the
 * appropriate data structures in the D-data structure.
 * @param {string} pluginName The name of the plugin that should have all its data unloaded from the D-data structure.
 * @return {boolean} True or False to indicate if the plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/01
 */
async function unloadPlugin(pluginName) {
  let functionName = unloadPlugin.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  let businessRulesRemovalSuccess = ruleBroker.removePluginBusinessRules(pluginName);
  let commandsRemovalSuccess = commandBroker.removePluginCommands(pluginName);
  let configurationDataRemovalSuccess = dataBroker.removePluginConfigurationData(pluginName);
  let commandAliasesRemovalSuccess = commandBroker.removePluginCommandAliases(pluginName);
  let workflowRemovalSuccess = workflowBroker.removePluginWorkflows(pluginName);
  let themeDataRemovalSuccess = themeBroker.removePluginThemeData(pluginName);
  let constantsValidationDataRemovalSuccess = constantBroker.removePluginConstantsValidationData(pluginName);

  // Still need to remove the plugin from the list of loaded plugins.
  let pluginsLoadedList = D[sys.cpluginsLoaded];
  // pluginsLoadedList is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsLoadedListIs + JSON.stringify(pluginsLoadedList));
  if (Array.isArray(pluginsLoadedList) === true && pluginsLoadedList.length >= 1) {
    // pluginsLoadedList is an array and length greater than or equal to 1
    loggers.consoleLog(namespacePrefix + functionName, msg.cunloadPluginMessage01);
    for (let pluginLoadedKey in pluginsLoadedList) {
      // pluginLoadedKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedKeyIs + pluginLoadedKey);
      let pluginLoadedEntry = pluginsLoadedList[pluginLoadedKey];
      // pluginLoadedEntry is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedEntryIs + JSON.stringify(pluginLoadedEntry));
      // pluginLoadedEntry name is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpluginLoadedEntryNameIs + pluginLoadedEntry[0]);
      if (pluginLoadedEntry[0] === pluginName) {
        pluginsLoadedList.splice(pluginLoadedKey, 1);
      } // End-if (pluginLoadedEntry[0] === pluginName)
    } // End-for (let pluginLoadedKey in pluginsLoadedList)
  } // End-if (Array.isArray(pluginsLoadedList) === true && pluginsLoadedList >= 1)

  if (businessRulesRemovalSuccess === true &&
    commandsRemovalSuccess === true &&
    configurationDataRemovalSuccess === true &&
    commandAliasesRemovalSuccess === true &&
    workflowRemovalSuccess === true &&
    themeDataRemovalSuccess === true &&
    constantsValidationDataRemovalSuccess === true) {
      returnData = true;
  }
  if (businessRulesRemovalSuccess === false) {
    // ERROR: Failure to remove business rules for the plugin:
    console.log(msg.cErrorUnloadPluginMessage02 + pluginName);
  }
  if (commandsRemovalSuccess === false) {
    // ERROR: Failure to remove commands for the plugin:
    console.log(msg.cErrorUnloadPluginMessage03 + pluginName);
  }
  if (configurationDataRemovalSuccess === false) {
    // ERROR: Failure to remove configuration data for the plugin:
    console.log(msg.cErrorUnloadPluginMessage04 + pluginName);
  }
  if (commandAliasesRemovalSuccess === false) {
    // ERROR: Failure to remove command aliases for the plugin:
    console.log(msg.cErrorUnloadPluginMessage05 + pluginName);
  }
  if (workflowRemovalSuccess === false) {
    // ERROR: Failure to remove workflows for the plugin:
    console.log(msg.cErrorUnloadPluginMessage06 + pluginName);
  }
  if (themeDataRemovalSuccess === false) {
    // ERROR: Failure to remove theme data for the plugin:
    console.log(msg.cErrorUnloadPluginMessage07 + pluginName);
  }
  if (constantsValidationDataRemovalSuccess === false) {
    // ERROR: Failure to remove constants validation data for the plugin:
    console.log(msg.cErrorUnloadPluginMessage08 + pluginName);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getPluginsRegistryPath
 * @description Looks up the plugin registry meta-data and finds the attribute that contains the plugins path.
 * @return {string} The path to the plugins listed in the plugin registry as meta-data.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function getPluginsRegistryPath() {
  let functionName = getPluginsRegistryPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = '';
  if (D[cfg.cpluginRegistry] !== 'undefined') {
    returnData = D[cfg.cpluginRegistry][wrd.cpath]
  } else {
    // ERROR: There is no defined plugin registry.
    console.log(msg.cErrorGetPluginsRegistryPathMessage01);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  loadPluginRegistry,
  storePluginRegistryInDataStructure,
  listAllLoadedPlugins,
  listPluginsInRegistry,
  listPluginsPathsInRegistry,
  listPluginsAttributeInRegistry,
  listPluginsInRegistryPath,
  countPluginsInRegistry,
  countPluginsInRegistryPath,
  registerPlugin,
  unregisterPlugin,
  unregisterPlugins,
  syncPluginRegistryWithPluginRegistryPath,
  unregisterAllPlugins,
  savePluginRegistry,
  loadPluginMetaData,
  extractAndProcessPluginEntryPointURI,
  loadPlugin,
  integratePluginBusinessRules,
  integratePluginCommands,
  integratePluginConfigurationData,
  integratePluginCommandAliases,
  integratePluginWorkflows,
  integratePluginThemeData,
  unloadPlugin,
  getPluginsRegistryPath
};