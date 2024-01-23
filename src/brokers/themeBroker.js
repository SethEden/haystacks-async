/**
 * @file themeBroker.js
 * @module themeBroker
 * @description Contains all the functions necessary to load and unload debugging themes.
 * @requires module:ruleBroker
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefTheme
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/06/10
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from './ruleBroker.js';
import chiefConfiguration from '../controllers/chiefConfiguration.js';
import chiefData from '../controllers/chiefData.js';
import chiefTheme from '../controllers/chiefTheme.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.brokers.themeBroker.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initThemeData
 * @description Initializes the theme data object on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/10/28
 */
async function initThemeData() {
  let functionName = initThemeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[wrd.cThemes] = {};
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function generateThemeDataFromPath
 * @description Takes a theme root path and scans the sub-folders that it contains and converts those to theme names,
 * then builds a JSON data object with those names and also generates paths for each one based on the input themes root path.
 * @param {string} themesRootPath The root path that should be used when building the JSON object with the themes meta-data.
 * @return {object} A JSON object that contains all of the theme names and theme paths from the input theme root path.
 * @author Seth Hollingsead
 * @date 2022/10/26
 */
 async function generateThemeDataFromPath(themesRootPath) {
  let functionName = generateThemeDataFromPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themesRootPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesRootPathIs + themesRootPath);
  let themesNames = await getNamedThemesFromRootPath(themesRootPath);
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  let themesData = [];
  for (const key in themesNames) {
    // key is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
    let themeName = themesNames[key];
    // themeName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeNameIs + themeName);
    let themePath = await getNamedThemePathFromRootPath(themeName, themesRootPath);
    // themePath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
    if (themePath) {
      themesData.push({Name: themeName, Path: themePath});
    }
    // themesData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesDataIs + JSON.stringify(themesData))
  }
  // themesData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesDataIs + JSON.stringify(themesData))
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themesData;
}

/**
 * @function addThemeData
 * @description Merges application and plugin defined theme data paths with the system defined theme paths.
 * @param {object} themeData A JSON object that contains the theme data for either the application or the current plugin.
 * @param {string} contextName The context name where the theme data is coming from.
 * Ex: Application, Plugin:<PluginName>
 * @return {boolean} True or False to indicate if the merge was successful or not.
 * @author Seth Hollingsead
 * @date 2022/10/25
 */
async function addThemeData(themeData, contextName) {
  let functionName = addThemeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let returnData = false;
  let pluginName = '';
  try {
    if (contextName.toUpperCase().includes(wrd.cPLUGIN) === true && contextName.includes(bas.cColon) === true) {
      let contextNameArray = contextName.split(bas.cColon);
      pluginName = contextNameArray[1];
      if (D[wrd.cThemes][wrd.cPlugins] === undefined) {
        D[wrd.cThemes][wrd.cPlugins] = {};
      }
      D[wrd.cThemes][wrd.cPlugins][pluginName] = {};
      D[wrd.cThemes][wrd.cPlugins][pluginName] = themeData;
    } else if (contextName.toUpperCase().includes(wrd.cAPPLICATION) === true) {
      if (D[wrd.cThemes][wrd.cApplication] === undefined) {
        D[wrd.cThemes][wrd.cApplication] = {};
      }
      D[wrd.cThemes][wrd.cApplication] = themeData;
    } else if (contextName.toUpperCase().includes(wrd.cFRAMEWORK) === true) {
      if (D[wrd.cThemes][wrd.cFramework] === undefined) {
        D[wrd.cThemes][wrd.cFramework] = {};
      }
      D[wrd.cThemes][wrd.cFramework] = themeData;
    }
    returnData = true;
  } catch (err) {
    // ERROR: Failure to merge the theme data for:
    console.log(msg.cErrorAddThemeDataMessage01 + contextName);
    console.log(msg.cERROR_Colon + err);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getNamedThemesFromRootPath
 * @description Gets the names of the themes installed in the specified themes root path folder.
 * @param {string} themesRootPath The root path that should be used when searching for a list of themes folders.
 * @return {array<string>} The list of names for the themes that are currently installed.
 * @author Seth Hollingsead
 * @date 2022/10/26
 */
async function getNamedThemesFromRootPath(themesRootPath) {
  let functionName = getNamedThemesFromRootPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themesRootPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesRootPathIs + themesRootPath);
  let themesNames = [];
  let frameorkThemesPath = path.resolve(themesRootPath);
  themesNames = await ruleBroker.processRules([frameorkThemesPath, ''], [biz.cgetDirectoryList]);
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themesNames;
}

/**
 * @function getNamedThemePathFromRootPath
 * @descriptino Takes a named theme and theme root path and validates that the theme name exists,
 * then returns the fully qualified path to that theme.
 * @param {string} themeName The name of the theme that a path should be returned for.
 * @param {string} themesRootPath The root path that should be used when searching for the named theme.
 * @return {string|boolean} The path of the theme relative to the input root path it if exists, or false if it does not.
 * @author Seth Hollingsead
 * @date 2022/10/26
 */
async function getNamedThemePathFromRootPath(themeName, themesRootPath) {
  let functionName = getNamedThemePathFromRootPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeNameIs + themeName);
  // themesRootPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesRootPathIs + themesRootPath);
  let themePath = false;
  let themesNames = [];
  themesNames = await getNamedThemesFromRootPath(themesRootPath);
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  let frameworkThemesPath = path.resolve(themesRootPath);
  for (const element of themesNames) {
    if (element.toUpperCase() === themeName.toUpperCase()) {
      themePath = frameworkThemesPath + bas.cDoubleForwardSlash + element + bas.cDoubleForwardSlash;
      themePath = path.resolve(themePath);
      break;
    }
  }
  // themePath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themePath;
}

/**
 * @function loadTheme
 * @description Takes a theme path and loads all the theme data debug configuration settings for that theme.
 * @param {string} themePath The fully qualified path to the theme debug configuration settings.
 * @return {object} All of the debug configuration data for a specified theme path.
 * @author Seth Hollingsead
 * @date 2022/06/13
 */
async function loadTheme(themePath) {
  let functionName = loadTheme.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themePath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
  let themeData = {};
  await chiefTheme.determineThemeDebugConfigFilesToLoad(sys.cthemeConfigPath);
  themeData = await chiefData.setupAllJsonConfigData(sys.cthemeConfigPath, wrd.cconfiguration);
  // themeData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themeData;
}

/**
 * @function applyTheme
 * @description Takes theme data and applies it to the currently loaded
 * debug configuration data set in the D-Data Structure configuration.debugSettings data hive.
 * @param {object} themeData All the theme debug configuration settings data that control the debug log theme colors.
 * @return {boolean} True or False to indicate if the theme data was applied successfully or not.
 * @author Seth Hollingsead
 * @date 2022/06/14
 */
async function applyTheme(themeData) {
  let functionName = applyTheme.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  let returnData = false;
  returnData = await chiefConfiguration.parseLoadedConfigurationData(themeData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function removePluginThemeData
 * @description Parses through the theme data and finds the theme data associated with the named plugin.
 * Then removes that data shredding it from existence at the edge of a black hole.
 * @param {string} pluginName The name of the plugin that should have its theme data removed from the D-data structure.
 * @return {boolean} True or False to indicate if the removal of the data was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/01
 */
async function removePluginThemeData(pluginName) {
  let functionName = removePluginThemeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  let allPluginsThemesData = D[wrd.cThemes][wrd.cPlugins];
  if (allPluginsThemesData) {
    try {
      delete allPluginsThemesData[pluginName];
      returnData = true;
    } catch (err) {
      // ERROR: Unable to remove the plugin themes for the specified plugin:
      console.log(msg.cremovePluginThemesMessage01 + pluginName);
      // ERROR:
      console.log(msg.cerrorMessage + err.message);
    }
  } else {
    // ERROR: Unable to locate the plugins themes data. Plugin:
    console.log(msg.cremovePluginThemesMessage02 + pluginName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  initThemeData,
  generateThemeDataFromPath,
  addThemeData,
  getNamedThemesFromRootPath,
  getNamedThemePathFromRootPath,
  loadTheme,
  applyTheme,
  removePluginThemeData
};
