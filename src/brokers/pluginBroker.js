/**
 * @file pluginBroker.js
 * @module pluginBroker
 * @description Contains all of the lower level plugin processing functions,
 * and also acts as an interface for loading, unloading, reloading, registering,
 * unregistering plugins and plugin metaData.
 * @requires module:ruleBroker
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
import ruleBroker from './ruleBroker.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';
import configurator from '../executrix/configurator.js'

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.pluginBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
  let returnData = {};
  let resolvedPluginRegistryPath = path.resolve(pluginRegistryPath + bas.cForwardSlash + sys.cpluginsDotJson);
  // resolvedPluginRegistryPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedPluginRegistryPathIs + resolvedPluginRegistryPath);
  returnData = await ruleBroker.processRules([resolvedPluginRegistryPath, ''], [biz.cgetJsonData]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  let functionName = loadPluginRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginRegistryData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryDataIs + JSON.stringify(pluginRegistryData));
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  let pluginRegistryList = D[cfg.cpluginRegistry][wrd.cplugins];
  for (let plugin of pluginRegistryList) {
    returnData.push(plugin[wrd.cName]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = ruleBroker.processRules([D[cfg.cpluginRegistry][wrd.cpath], ''], [biz.cgetDirectoryList]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  let pluginRegistryList = await listPluginsInRegistry();
  returnData = pluginRegistryList.length;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  let pluginFolderList = await listPluginsInRegistryPath();
  returnData = pluginFolderList.length;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerPlugin
 * @description Manually registers a plugin with the plugin registry data hive.
 * Allows for special case where plugins can be registered from a different path, then the path specified by the plugin registry.
 * Caution should be emphasised when loading plugins from a custom path location, this should be used primarily for debugging and triage use cases.
 * @param {string} pluginName The name of the plugin that should be registered. 
 * @param {string} pluginPath The path to the plugin, to be added to the plugin registry.
 * This should be the path to the plugin/package.json file, but not including the package.json as part of the path URI.
 * @return {boolean} True or False to indicate if the plugin was added to the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/14
 */
async function registerPlugin(pluginName, pluginPath) {
  let functionName = registerPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  let pluginRegistrationEntry = {};
  try {
    pluginRegistrationEntry = {Name: pluginName, Path: pluginPath};
    D[cfg.cpluginRegistry][wrd.cplugins].push(pluginRegistrationEntry);
    returnData = true;
  } catch (err) {
    // ERROR: Failure to register plugin:
    // pluginPath is:
    // error message:
    console.log(msg.cErrorRegisterPluginMessage01 + pluginName);
    console.log(msg.cpluginPathIs + pluginPath);
    console.log(msg.cerrorMessage + err);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  // We need to find the index of the plugin we are looking for, then we can use the array.splice method to remove it.
  let pluginRegistryNames = await listPluginsInRegistry();
  let index = 0;
  try {
    for (let currentPluginName in pluginRegistryNames) {
      // currentPluginName is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentPluginNameIs + currentPluginName);
      if (currentPluginName === pluginName) {
        break;
      }
      index = index + 1;
    }
    let pluginObjects = D[cfg.cpluginRegistry][wrd.cplugins];
    let newPluginObjects = pluginObjects.splice(index, 1);
    D[cfg.cpluginRegistry][wrd.cplugins] = newPluginObjects;
    returnData = true;
  } catch (err) {
    // ERROR: Failure to unregister plugin:
    // error message:
    console.log(msg.cErrorUnRegisterPluginMessage01 + pluginName);
    console.log(msg.cerrorMessage + err);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let pluginRegistryList = await listPluginsInRegistry();
  let pluginRegistryFolderList = await listPluginsInRegistryPath();
  let synchronizedPluginRegistryList = [];
  // pluginRegistryList is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryListIs + pluginRegistryList);
  // pluginRegistryFolderList is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryFolderListIs + pluginRegistryFolderList);
  try {
    if (pluginRegistryList.length === 0) {
      synchronizedPluginRegistryList = pluginRegistryFolderList;
    } else if (pluginRegistryFolderList.length !== 0) {
      for (let folderPlugin in pluginRegistryFolderList) {
        // folderPlugin is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cfolderPluginIs + JSON.stringify(folderPlugin));
        let folderPluginName = folderPlugin[wrd.cName];
        // folderPluginName is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cfolderPluginNameIs + folderPluginName);
        // Now search the pluginRegistryList to see if it contains this same name.
        let foundMatchingPluginName = false;
        for (let registryPlugin in pluginRegistryList) {
          // registryPlugin is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cregistryPluginIs + JSON.stringify(registryPlugin));
          let registryPluginName = registryPlugin[wrd.cName];
          // registryPluginName is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cregistryPluginNameIs + registryPluginName);
          if (folderPluginName === registryPluginName) {
            foundMatchingPluginName = true;
            break;
          }
        } // End-for (let registryPlugin in pluginRegistryList)
        if (foundMatchingPluginName === false) {
          // Then no match was found, and we should therefore add this plugin entry object.
          pluginRegistryList.push(folderPlugin);
        }
        // NOTE: pluginRegistryList is the accumulator here, when we are all done we need to assign that one to the output.
      } // End-for (let folderPlugin in pluginRegistryFolderList)
      // Now assign the pluginRegistryList to the synchronizedPluginRgistryList,
      // then we will clear the plugin registry and re-assign it to the merged/synchronized/updated version of the plugin registry.
      synchronizedPluginRegistryList = pluginRegistryList;
    }
    // synchronizedPluginRegistryList is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.csynchronizedPluginRegistryListIs + JSON.stringify(synchronizedPluginRegistryList));
    // Now assign it back to the official plugin registry data hive on the D-data structure
    await unregisterAllPlugins();
    D[cfg.cpluginRegistry][wrd.cplugins] = synchronizedPluginRegistryList;
    returnData = true;
  } catch (err) {
    // ERROR: Failure to synchronize the plugin registry with the list of plugins available from the plugins folder specified by the application in the plugins registry JSON file.
    // error message:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cErrorSyncPluginRegistryWithPluginRegistryPathMessage01);
    console.log(msg.cerrorMessage + err);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let pluginRegistry = D[cfg.cpluginRegistry]
  // pluginRegistry is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryIs + JSON.stringify(pluginRegistry));
  try {
    // await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pluginRegistryPath);
    let pluginRegistryPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath);
    // pluginRegistryPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
    returnData = ruleBroker.processRules([pluginRegistryPath, pluginRegistry], [biz.cwriteJsonData]);
  } catch (err) {
    // ERROR: Failure to write out the plugin registry to the plugin path specified by the application: 
    // error message:
    console.log(msg.cErrorSavePluginRegistryMessage01);
    console.log(msg.cerrorMessage + err);
  }  
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginMetaData
 * @description Loads the plugin meta data for the plugin at the specified path by looking
 * for a package.json at the specified path and loading that file, and returning it as a JSON object.
 * @param {string} pluginPath The path to a plugin where a package.json should be expected to be found for that plugin.
 * @return {object} The JSON data object loaded from the plugin package.json file, specified by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/09/02 
 */
async function loadPluginMetaData(pluginPath) {
  let functionName = loadPluginMetaData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = {};
  let resolvedPluginPath = path.resolve(pluginPath + bas.cForwardSlash + sys.cpackageDotJson);
  // resolvedPluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedPluginPathIs + resolvedPluginPath);
  returnData = await ruleBroker.processRules([resolvedPluginPath, ''], [biz.cgetJsonData]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function extractAndProcessPluginEntryPointURI
 * @description Extracts the entry point path and file name for a plugin from the package.json data object.
 * Processes the entry point path with a path.join to form a fully qualified path.
 * Converts the resulting fully qualified path into a path URI string for importing later.
 * @param {object} pluginMetaData The meta data for the given plugin loaded for the corrosponding package.json.
 * @param {string} pluginPath The path to the plugin, used to form a fully-qualified path.
 * @return {string} The path entry point to the plugin as a URI file path.
 * @author Seth Hollingsead
 * @date 2022/09/02
 */
async function extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath) {
  let functionName = extractAndProcessPluginEntryPointURI.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginMetaData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataIs + JSON.stringify(pluginMetaData));
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = '';
  if (pluginMetaData && pluginPath) {
    let pluginMainPath = pluginMetaData[wrd.cmain];
    // pluginMainPath before join is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage01 + pluginMainPath);
    pluginMainPath = path.join(pluginPath, pluginMainPath);
    // pluginMainPath after join is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage02 + pluginMainPath);
    pluginMainPath = url.pathToFileURL(pluginMainPath);
    // pluginMainPath URI is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cextractAndProcessPluginEntryPointUriMessage03 + pluginMainPath);
    returnData = pluginMainPath;
  } else {
    // ERROR: No plugin meta data or plugin path are specified:
    console.log(msg.cextractAndProcessPluginEntryPointUriMessage04 + namespacePrefix + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginExecutionPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginExecutionPathIs + pluginExecutionPath);
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
      resolve(returnData = await value[wrd.cdefault].initializePlugin());
      // dataLoaded is:
      console.log(msg.cdataLoadedIs + JSON.stringify(returnData));
    }).catch (err => reject(err));
  });

  await Promise.all([pluginResponseData]).then((value) => {
    console.log('value is: ' + JSON.stringify(value));
  });

  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

// TODO: Don't forget to add all the JSON debug settings for the new files: chiefPlugin & pluginBroker.

export default {
  loadPluginRegistry,
  storePluginRegistryInDataStructure,
  listPluginsInRegistry,
  listPluginsInRegistryPath,
  countPluginsInRegistry,
  countPluginsInRegistryPath,
  registerPlugin,
  unregisterPlugin,
  syncPluginRegistryWithPluginRegistryPath,
  unregisterAllPlugins,
  savePluginRegistry,
  loadPluginMetaData,
  extractAndProcessPluginEntryPointURI,
  loadPlugin
};