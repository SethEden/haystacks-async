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

const {bas, biz, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.pluginBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
  await loggers.consoleLog(namespacePrefix + functionName, 'resolvedPluginPath is: ' + resolvedPluginPath);
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
  await loggers.consoleLog(namespacePrefix + functionName, 'pluginMetaData is: ' + JSON.stringify(pluginMetaData));
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = '';
  if (pluginMetaData && pluginPath) {
    let pluginMainPath = pluginMetaData[wrd.cmain];
    await loggers.consoleLog(namespacePrefix + functionName, 'pluginMainPath before join is: ' + pluginMainPath);
    pluginMainPath = path.join(pluginPath, pluginMainPath);
    await loggers.consoleLog(namespacePrefix + functionName, 'pluginMainPath after join is: ' + pluginMainPath);
    pluginMainPath = url.pathToFileURL(pluginMainPath);
    await loggers.consoleLog(namespacePrefix + functionName, 'pluginMainPath URI is: ' + pluginMainPath);
    returnData = pluginMainPath;
  } else {
    console.log('ERROR: No plugin meta data or plugin path are specified. ' + namespacePrefix + functionName);
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
  await loggers.consoleLog(namespacePrefix + functionName, 'pluginExecutionPath is: ' + pluginExecutionPath);
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
      resolve(returnData = await value['default'].initializePlugin());
      console.log('dataLoaded is: ' + JSON.stringify(returnData));
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
  loadPluginMetaData,
  extractAndProcessPluginEntryPointURI,
  loadPlugin
};