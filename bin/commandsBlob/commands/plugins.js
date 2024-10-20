/**
 * @file plugins.js
 * @module plugins
 * @description Contains all of the plugin and plugin registry commands.
 * @requires module:chiefPlugin
 * @requires module:warden
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/16
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import chiefPlugin from '../../controllers/chiefPlugin.js';
import warden from '../../controllers/warden.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.commandsBlob.commands.plugins.
const namespacePrefix = wrd.cframework + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function listAllLoadedPlugins
 * @description This is a command function that calls the warden.listLoadedPlugins function
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,array<string>>} An array with a boolean True or False value to indicate if
 * the application should exit or not, followed by the list of plugins that have been loaded.
 * @author Seth Hollingsead
 * @date 2023/02/06
 */
async function listAllLoadedPlugins(inputData, inputMetaData) {
  let functionName = listAllLoadedPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  returnData[1] = await warden.listLoadedPlugins();
  // List of loaded plugins is:
  console.log(msg.clistAllLoadedPluginsMessage01 + returnData[1].join(bas.cComa));
  if (returnData[1] === false) {
    // ERROR: There was an error getting the list of loaded plugins.
    console.log(namespacePrefix + functionName + msg.cErrorListAllLoadedPluginsMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistry
 * @description This is a command function that calls the chiefPlugin.getAllPluginsInRegistry function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,array<string>>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by the list of plugins in the registry.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function listAllPluginsInRegistry(inputData, inputMetaData) {
  let functionName = listAllPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  returnData[1] = await chiefPlugin.getAllPluginsInRegistry();
  // List of plugins in registry is:
  console.log(msg.clistOfPluginsInRegistryIs + returnData[1].join(bas.cComa));
  if (returnData[1] === false) {
    // ERROR: There was an error getting the list of plugins from the registry.
    console.log(namespacePrefix + functionName, + msg.cErrorListAllPluginsInRegistryCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistryPath
 * @description This is a command function that calls the chiefPlugin.getAllPluginsInRegistryPath function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,array<string>>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by the list of plugins in the plugins registry path.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function listAllPluginsInRegistryPath(inputData, inputMetaData) {
  let functionName = listAllPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  returnData[1] = await chiefPlugin.getAllPluginsInRegistryPath();
  if (returnData[1] === false) {
    // ERROR: There was an error getting the list of plugins from the path listed in the plugin registry.
    console.log(namespacePrefix + functionName + msg.cErrorListAllPluginsInRegistryPathCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countPluginsInRegistry
 * @description This is a command function that calls the chiefPlugin.countAllPluginsInRegistry function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,integer>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by the number of plugins found in the plugins registry.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function countPluginsInRegistry(inputData, inputMetaData) {
  let functionName = countPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  returnData[1] = await chiefPlugin.countAllPluginsInRegistry();
  if (returnData[1] === false) {
    // ERROR: There was an error getting the number of plugins in the plugin registry.
    console.log(namespacePrefix + functionName + msg.cErrorCountPluginsInRegistryCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countPluginsInRegistryPath
 * @description This is a command function that calls the chiefPlugin.countAllPluginsInRegistryPath.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,integer>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by the number of plugins found in the plugins registry.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function countPluginsInRegistryPath(inputData, inputMetaData) {
  let functionName = countPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  returnData[1] = await chiefPlugin.countAllPluginsInRegistryPath();
  if (returnData[1] === false) {
    // ERROR: There was an error getting the number of plugins in the path listed in the plugin registry.
    console.log(namespacePrefix + functionName + msg.cErrorCountPluginsInRegistryPathCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerPlugin
 * @description This is a command function that calls the chiefPlugin.registerNamedPlugin function.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'registerPlugin'
 * inputData[1] = pluginName
 * inputData[2] = pluginPath
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if the plugin was registered successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function registerPlugin(inputData, inputMetaData) {
  let functionName = registerPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let pluginName = '';
  let pluginPath = '';
  let foundValidData = false;
  if (inputData.length === 3 && typeof(inputData[1]) === wrd.cstring && typeof(inputData[2]) === wrd.cstring) {
    pluginName = inputData[1];
    pluginPath = inputData[2];
    foundValidData = true;
  } else if (inputData.length === 2 && typeof(inputData[1]) === wrd.cstring) {
    if (inputData[1].includes(bas.cComa) === true) {
      let pluginParametersArray = inputData[1].split(bas.cComa);
      pluginName = pluginParametersArray[0];
      pluginPath = pluginParametersArray[1];
      foundValidData = true;
    } else {
      // The user must have only entered the name of the plugin they want to register.
      // We should look up the plugin root path in the plugin registry and scan that folder to
      // determine if a matching folder name that matches the user entered plugin name.
      // If we find a match there, then we can just use that path.
      pluginName = inputData[1];
      // Check to see if this plugin name is found among the folders that are contained in the plugins registry path.
      let pluginNameFolderMatchFound = false;
      let pluginsInRegistryPathArray = await chiefPlugin.getAllPluginsInRegistryPath();
      for (let pluginNameKey in pluginsInRegistryPathArray) {
        let pluginNameFromPath = pluginsInRegistryPathArray[pluginNameKey];
        if (pluginName === pluginNameFromPath) {
          pluginNameFolderMatchFound = true;
          break;
        }
      } // End-for (let pluginNameKey in pluginsInRegistryPathArray)
      if (pluginNameFolderMatchFound === true) {
        foundValidData = true;
        pluginPath = await chiefPlugin.getPluginsRegistryPath();
      } else {
        // ERROR: Failure to find a matching plugin for the specified plugin name:
        console.log(msg.cErrorRegisterPluginCommandMessage02 + JSON.stringify(pluginName));
      }
    }
  } else {
    // ERROR: Failure to register the specified plugin, invalid input:
    console.log(msg.cErrorRegisterPluginCommandMessage01 + JSON.stringify(inputData));
  }
  if (foundValidData === true) {
    returnData[1] = await chiefPlugin.registerNamedPlugin(pluginName, pluginPath);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugin
 * @description This is a command function that calls the chiefPlugin.unregisterNamedPlugin function.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'unregisterPlugin'
 * inputData[1] = pluginName
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the plugin was unregistered successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function unregisterPlugin(inputData, inputMetaData) {
  let functionName = unregisterPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  if (Array.isArray(inputData) === true && inputData.length === 2 && typeof(inputData[1]) === wrd.cstring) {
    returnData[1] = await chiefPlugin.unregisterNamedPlugin(inputData[1]);
  } else {
    // ERROR: Failure to unregister the specified plugin, invalid input:
    console.log(msg.cErrorUnregisterPluginCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugins
 * @description This is a command function that calls chiefPlugin.unregisterPlugins function.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'unregisterPlugins'
 * inputData[1] = pluginName1,pluginName2,pluginNameX...
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the plugins were unregistered successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function unregisterPlugins(inputData, inputMetaData) {
  let functionName = unregisterPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let pluginListArray = [];
  if (Array.isArray(inputData) === true && inputData.length >= 2 && typeof(inputData[1]) === wrd.cstring) {
    if (inputData[1].includes(bas.cComa) === true) {
      pluginListArray = inputData[1].split(bas.cComa);
    } else if (inputData.length >= 3) {
      inputData.shift();
      pluginListArray = inputData;
    }
    returnData[1] = await chiefPlugin.unregisterPlugins(pluginListArray);
  } else {
    // ERROR: Failure to unregister any of the specified plugins, invalid input:
    console.log(msg.cErrorUnregisterPluginsCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function syncPluginRegistryWithPath
 * @description This is a command function that calls the chiefPlugin.synchronizePluginRegistryWithPath function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the plugin registry synchronization was successful or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function syncPluginRegistryWithPath(inputData, inputMetaData) {
  let functionName = syncPluginRegistryWithPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await chiefPlugin.synchronizePluginRegistryWithPath();
  if (returnData[1] === false) {
    // ERROR: Failure to synchronize the plugin registry with the plugin path listed in the plugin registry.
    console.log(namespacePrefix + functionName + msg.cErrorSyncPluginRegistryWithPathCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listPluginsRegistryPath
 * @description Prints out the plugins path that is listed in the plugin registry meta-data.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by a string that is the plugins path.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function listPluginsRegistryPath(inputData, inputMetaData) {
  let functionName = listPluginsRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await chiefPlugin.getPluginsRegistryPath();
  // plugins registry path is:
  console.log(msg.cpluginsRegistryPathMessageIs + returnData[1]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterAllPlugins
 * @description This is a command function that calls the chiefPlugin.clearPluginRegistry function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * all the plugins were unregistered successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function unregisterAllPlugins(inputData, inputMetaData) {
  let functionName = unregisterAllPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await chiefPlugin.clearPluginRegistry();
  if (returnData[1] === false) {
    // ERROR: Failure to unregister all plugins.
    console.log(namespacePrefix + functionName + msg.cErrorUnregisterAllPluginsCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function savePluginRegistryToDisk
 * @description This is a command function that calls the chiefPlugin.savePluginRegistryDisk function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the plugin registry was saved successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function savePluginRegistryToDisk(inputData, inputMetaData) {
  let functionName = savePluginRegistryToDisk.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await chiefPlugin.savePluginRegistryDisk();
  if (returnData[1] === false) {
    // ERROR: Failure to save the plugin registry to the hard drive.
    console.log(namespacePrefix + functionName + msg.cErrorSavePluginRegistryToDiskCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugin
 * @description This is a command function that calls the the warden.loadPlugin function.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'loadPlugin'
 * inputData[1] = pluginPath - The fully qualified path where to load the plugin from, or
 * the name of the plugin folder in the plugins registry path where the plugin can be found.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the plugin was loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function loadPlugin(inputData, inputMetaData) {
  let functionName = loadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  if (inputData.length === 2 && typeof(inputData[1]) === wrd.cstring) {
    returnData[1] = await warden.loadPlugin(inputData[1]);
  } else {
    // ERROR: Failure to load the specified plugin, invalid input:
    console.log(msg.cErrorLoadPluginCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugins
 * @description This is a command function that calls the warden.loadPlugins function.
 * @param {array<string,array<string>>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'loadPlugins'
 * inputData[1] = Array of fully qualified plugin paths were to load all the plugins from.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * all the plugins were loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function loadPlugins(inputData, inputMetaData) {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let pluginsArray = [];
  if (Array.isArray(inputData) === true && inputData.length >= 2) {
    if (inputData[1].includes(bas.cComa) === true) {
      pluginsArray = inputData[1].split(bas.cComa);
    } else {
      inputData.shift(); // Remove the first entry, and just pass the rest of the array.
      pluginsArray = inputData;
    }
    returnData[1] = await warden.loadPlugins(pluginsArray);
  } else {
    // ERROR: Failure to load the specified plugins, invalid input:
    console.log(msg.cErrorLoadPluginsCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginsFromRegistry
 * @description This is a command function that calls the warden.loadPluginsFromRegistry function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * all the plugins from the plugin registry were loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function loadPluginsFromRegistry(inputData, inputMetaData) {
  let functionName = loadPluginsFromRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await warden.loadPluginsFromRegistry();
  if (returnData[1] === false) {
    // ERROR: Failure to load the plugins from the plugin registry.
    console.log(namespacePrefix + functionName + msg.cErrorLoadPluginsFromRegistryCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugin
 * @description This is a command function that calls the warden.unloadPlugin function.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'unloadPlugin'
 * inputData[1] = pluginName - The name of the plugin that should be unloaded.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the specified plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function unloadPlugin(inputData, inputMetaData) {
  let functionName = unloadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  if (inputData.length === 2 && typeof(inputData[1]) === wrd.cstring) {
    returnData[1] = await warden.unloadPlugin(inputData[1]);
  } else {
    // ERROR: Failure to unload the specified plugin, invalid input:
    console.log(msg.cErrorUnloadPluginCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugins
 * @description This is a command function that calls the warden.unloadPlugins function.
 * @param {array<string,array<string>>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered the correct input as follows:
 * inputData[0] = 'unloadPlugins'
 * inputData[1] = Array of plugin names that should be unloaded.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * the specified plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function unloadPlugins(inputData, inputMetaData) {
  let functionName = unloadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let pluginNameArray = [];
  if (Array.isArray(inputData) === true && inputData.length >= 2) {
    if (inputData.length === 2 && inputData[1].includes(bas.cComa) === true) {
      pluginNameArray = inputData[1].split(bas.cComa);
    } else {
      inputData.shift();
      pluginNameArray = inputData;
    }
    returnData[1] = await warden.unloadPlugins(pluginNameArray);
  } else {
    // ERROR: Failure to unload the specified plugins, invalid input:
    console.log(msg.cErrorUnloadPluginsCommandMessage01 + JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadAllPlugins
 * @description This is a command function that calls the warden.unloadAllPlugins function.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to indicate if
 * the application should exit or not exit, followed by another boolean value to indicate if
 * all the plugins were unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function unloadAllPlugins(inputData, inputMetaData) {
  let functionName = unloadAllPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = await warden.unloadAllPlugins();
  if (returnData[1] === false) {
    // ERROR: Failure to unload all the plugins.
    console.log(namespacePrefix + functionName + msg.cErrorUnloadAllPluginsCommandMessage01);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  listAllLoadedPlugins,
  listAllPluginsInRegistry,
  listAllPluginsInRegistryPath,
  countPluginsInRegistry,
  countPluginsInRegistryPath,
  registerPlugin,
  unregisterPlugin,
  unregisterPlugins,
  syncPluginRegistryWithPath,
  listPluginsRegistryPath,
  unregisterAllPlugins,
  savePluginRegistryToDisk,
  loadPlugin,
  loadPlugins,
  loadPluginsFromRegistry,
  unloadPlugin,
  unloadPlugins,
  unloadAllPlugins
}