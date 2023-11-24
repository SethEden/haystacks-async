/**
 * @file chiefTheme.js
 * @module chiefTheme
 * @description Contains all of the functions for high level management of the theme system,
 * such as theme data loading, setup, parsing, processing and data integration from the framework, application and plugins.
 * @requires module:dataBroker
 * @requires module:themeBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/10/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import themeBroker from '../brokers/themeBroker.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.chiefTheme.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName +bas.cDot;

/**
 * @function initThemes
 * @description Initializes the themes data on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/10/23
 */
 async function initThemes() {
  let functionName = initThemes.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await themeBroker.initThemeData();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function addThemeData
 * @description Adds theme data, theme names and theme paths for resource paths external to the framework.
 * Ex: Application, Plugins
 * @param {object} themeData A JSON object that contains the externally defined theme data names and data paths.
 * @param {string} contextName A context name that indicates where the data is coming from.
 * Ex: Application, Plugins
 * @return {boolean} True or False to indicate if the merge was successful or not.
 * @author Seth Hollingsead
 * @date 2022/10/27
 */
async function addThemeData(themeData, contextName) {
  let functionName = addThemeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let returnData = false;
  returnData = await themeBroker.addThemeData(themeData, contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateThemeDataFromThemeRootPath
 * @description Scans the specified root path for folders and determines a list of theme names and theme paths,
 * returns this data as a JSON data object.
 * @param {string} themesRootPath The root path where the themes folders are located. This is the path that should be scanned.
 * @return {object} A JSON object that contains the theme names and theme paths from the specified root path.
 * @author Seth Hollingsead
 * @date 2022/10/25
 */
async function generateThemeDataFromThemeRootPath(themesRootPath) {
  let functionName = generateThemeDataFromThemeRootPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themesRootPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesRootPathIs + themesRootPath);
  let returnData = false;
  returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineThemeDebugConfigFilesToLoad
 * @description If the debugSettings flag is already set,
 * then look up the specified path name and scan the path to determine all
 * of the theme debug config files that should be loaded.
 * @param {string} themeConfigPathName The configuration name of the path that should be looked up for scanningg purposes.
 * @return {array<string>} An array of file names and paths that should be used when loading the theme debug configuration files.
 * @author Seth Hollingsead
 * @date 2022/06/13
 */
async function determineThemeDebugConfigFilesToLoad(themeConfigPathName) {
  let functionName = determineThemeDebugConfigFilesToLoad.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeConfigPathName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeConfigPathNameIs + themeConfigPathName);
  let themeConfigFilesToLoad = false;
  if (themeConfigPathName) {
    let themeConfigDataPath = await configurator.getConfigurationSetting(wrd.csystem, themeConfigPathName);
    themeConfigDataPath = path.resolve(themeConfigDataPath);
    themeConfigFilesToLoad = await dataBroker.scanDataPath(themeConfigDataPath);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cthemeConfigFiles, themeConfigFilesToLoad);
  } // End-if (themeConfigPathName)
  // themeConfigFilesToLoad is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeConfigFilesToLoadIs + JSON.stringify(themeConfigFilesToLoad));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themeConfigFilesToLoad;
}

export default {
  initThemes,
  addThemeData,
  generateThemeDataFromThemeRootPath,
  determineThemeDebugConfigFilesToLoad
}