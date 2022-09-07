/**
 * @file chiefPlugin.js
 * @module chiefPlugin
 * @description Contains all of the functions to manage the loading, unloading, reloading,
 * registering, unregistering of plugins and plugin metaData.
 * @requires module:pluginBroker
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
import loggers from '../executrix/loggers.js'
import stack from '../structures/stack.js'
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefPlugin.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function loadAllPluginsMetaData
 * @description Loads the plugin meta data for all of the plugins in the input plugins path array.
 * @param {array<string>} pluginsPaths
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
      await loggers.consoleLog(namespacePrefix + functionName, 'pluginKey is: ' + pluginKey);
      let pluginPath = pluginsPaths[pluginKey];
      // pluginPath is:
      await loggers.consoleLog(namespacePrefix + functionName, 'pluginPath is: ' + pluginPath);
      returnData[index] = {};
      if (pluginPath != '') {
        returnData[index] = await pluginBroker.loadPluginMetaData(pluginPath);
      } // End-if (pluginPath != '')
      await loggers.consoleLog(namespacePrefix + functionName, 'loadedPluginMetaData at index: ' +
        index + ' data: ' + JSON.stringify(returnData[index]));
      index = index + 1;
    } // End-for (let pluginPath in pluginsPaths)
  } else {
    let errorMessage = 'ERROR: No plugin paths provided, please provide paths and try again.';
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
  await loggers.consoleLog(namespacePrefix + functionName, 'pluginsMetaData is: ' + JSON.stringify(pluginsMetaData));
  // pluginPaths are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsPathsAre + JSON.stringify(pluginsPaths));
  let returnData = [];
  let index = 0;
  if (pluginsMetaData && pluginsMetaData.length > 0) {
    for (let pluginMetaDataKey in pluginsMetaData) {
      // pluginMetaDataKey is:
      await loggers.consoleLog(namespacePrefix + functionName, 'pluginMetaDataKey is: ' + pluginMetaDataKey);
      let pluginMetaData = pluginsMetaData[pluginMetaDataKey];
      // pluginMetaData is:
      await loggers.consoleLog(namespacePrefix + functionName, 'puginMetaData is: ' + JSON.stringify(pluginMetaData));
      returnData[index] = '';
      if (pluginMetaData) {
        returnData[index] = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginsPaths[index]);
        await loggers.consoleLog(namespacePrefix + functionName, 'pluginPathURI at index: ' + index + ' data: ' + returnData[index]);
      }
      index = index + 1;
    } // End-for (let pluginMetaData in pluginsMetaData)
  } else {
    let errorMessage = 'ERROR: No plugin meta data was found. Please ensure the correct path is provided and try again.';
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
 * constants, constants validation, command aliases, configuration settings, debug settings and workfows.
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
  await loggers.consoleLog(namespacePrefix + functionName, 'pluginsExecutionPaths is: ' + JSON.stringify(pluginsExecutionPaths));
  // pluginsMetaData is:
  await loggers.consoleLog(namespacePrefix + functionName, 'pluginsMetaData is: ' + JSON.stringify(pluginsMetaData));
  let returnData = {};
  let index = 0;
  if (pluginsExecutionPaths && pluginsMetaData && pluginsExecutionPaths.length > 0 && pluginsMetaData.length > 0) {
    stack.initStack(sys.cpluginsLoaded);
    for (let pluginExecutionPathKey in pluginsExecutionPaths) {
      let pluginExecutionPath = pluginsExecutionPaths[pluginExecutionPathKey];
      let pluginMetaData = pluginsMetaData[index];
      if (pluginExecutionPath && pluginMetaData) {
        await loggers.consoleLog(namespacePrefix + functionName, 'pluginExecutionPath is: ' + pluginExecutionPath);
        await loggers.consoleLog(namespacePrefix + functionName, 'pluginMetaData is: ' + JSON.stringify(pluginMetaData));
        returnData[pluginMetaData[wrd.cname]] = {}; // Initialize the data structure
        // Load the data and add it.
        try {
          returnData[pluginMetaData[wrd.cname]] = await pluginBroker.loadPlugin(pluginExecutionPath);
        } catch (err) {
          console.log(msg.cERROR_Colon + namespacePrefix + functionName + ' Failed to load the plugin: ' + pluginMetaData[wrd.cname]);
          console.log('plugin entry point path: ' + pluginExecutionPath);
          console.log(msg.cERROR_Colon + err);
          stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], false]);
        }
        // Push to a stack that we have successfully loaded the currently named plugin,
        // so that all the plugins loaded can be verified.
        stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], true]);
      } else {
        console.log(msg.cERROR_Colon + namespacePrefix + functionName + ' Failed to load the plugin: ' + pluginMetaData[wrd.cname]);
        console.log('plugin entry point path: ' + pluginExecutionPath);
        stack.push(sys.cpluginsLoaded, [pluginMetaData[wrd.cname], false]);
      }
    } // End-for (let pluginExecutionPath in pluginsExecutionPaths)
  } else {
    console.log('ERROR: No plugin execution paths or plugins metaData was specified: ' + namespacePrefix + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function verifyAllPluginsLoaded
 * @description Examins the pluginsLoaded stack to confirm that none of the plugins which
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

export default {
  loadAllPluginsMetaData,
  loadAllPluginsExecutionPaths,
  loadAllPlugins,
  verifyAllPluginsLoaded
};