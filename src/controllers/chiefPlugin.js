/**
 * @file chiefPlugin.js
 * @module chiefPlugin
 * @description Contains all of the functions to manage the loading, unloading, reloading,
 * registering, unregistering of plugins and plugin metaData.
 * @requires module:pluginBroker
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
import pluginBroker from '../brokers/pluginBroker.js';
import loggers from '../executrix/loggers.js'
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';

const {bas, msg, wrd} = hayConst;
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
    for (let pluginPath in pluginsPaths) {
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
    for (let pluginMetaData in pluginsMetaData) {
      // pluginMetaData is:
      await loggers.consoleLog(namespacePrefix + functionName, 'pluginMetaData is: ' + JSON.stringify(pluginMetaData));
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
    for (let pluginExecutionPath in pluginsExecutionPaths) {
      let pluginMetaData = pluginsMetaData[index];
      if (pluginExecutionPath && pluginMetaData) {
        await loggers.consoleLog(namespacePrefix + functionName, 'pluginExecutionPath is: ' + pluginExecutionPath);
        await loggers.consoleLog(namespacePrefix + functionName, 'pluginMetaData is: ' + JSON.stringify(pluginMetaData));
        returnData[pluginMetaData[wrd.cname]] = {}; // Initialize the data structure
        // Load the data and add it.
        returnData[pluginMetaData[wrd.cname]] = await pluginBroker.loadPlugin(pluginExecutionPath);
      } // End-if (pluginExecutionPath && pluginMetaData)
    } // End-for (let pluginExecutionPath in pluginsExecutionPaths)
  } else {
    console.log('ERROR: No plugin execution paths or plugins metaData was specified: ' + namespacePrefix + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  loadAllPluginsMetaData,
  loadAllPluginsExecutionPaths,
  loadAllPlugins
};