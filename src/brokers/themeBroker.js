/**
 * @file themeBroker.js
 * @module themeBroker
 * @description Contains all the functions necessary to load and unload debugging themes.
 * @requires module:ruleBroker
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:configurator
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
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.themeBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initThemePathData
 * @description Scans the themes folder and determines all of the available themes,
 * their paths and saves that data to the D-data structure.
 * @return {object} The JSON object that contains all of the theme names and theme paths.
 * @author Seth Hollingsead
 * @date 2022/10/25
 */
async function initThemePathData() {
  let functionName = initThemePathData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let themesNames = await getNamedThemes();
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  let themesData = [];
  D[wrd.cThemes] = {};
  D[wrd.cThemes][wrd.cFramework] = [];
  let applicationThemes = D[wrd.cThemes][wrd.cFramework];
  for (const key in themesNames) {
    let themeName = themesNames[key];
    // themeName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeNameIs + themeName);
    let themePath = await getNamedThemePath(themeName);
    // themePath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
    applicationThemes.push({Name: themeName, Path: themePath});
    // applicationThemes is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationThemesIs + JSON.stringify(applicationThemes));
  }
  themesData = D[wrd.cThemes];
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
      if (D[sys.cThemes][wrd.cPlugins] === undefined) {
        D[sys.cThemes][wrd.cPlugins] = {};
      }
      D[sys.cThemes][wrd.cPlugins][pluginName] = {};
      D[sys.cThemes][wrd.cPlugins][pluginName] = themeData;
    } else {
      D[sys.cThemes][wrd.cApplication] = themeData;
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
 * @function getNamedThemes
 * @description Gets the names of the themes installed in the resources/themes folder.
 * @return {array<string>} The list of names for the themes that are currently installed.
 * @author Seth Hollingsead
 * @date 2022/06/10
 */
async function getNamedThemes() {
  let functionName = getNamedThemes.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let themesNames = [];
  let frameworkThemesPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath);
  frameworkThemesPath = path.resolve(frameworkThemesPath);
  themesNames = await ruleBroker.processRules([frameworkThemesPath, ''], [biz.cgetDirectoryList]);
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themesNames;
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
 * @function getNamedThemePath
 * @description Takes a named theme and validates that the theme name exists, then returns the path to that theme.
 * @param {string} themeName The name of the theme that a path should be returned for.
 * @return {string|boolean} The path of the theme, if it exists, or false if it does not.
 * @author Seth Hollingsead
 * @date 2022/06/13
 */
async function getNamedThemePath(themeName) {
  let functionName = getNamedThemePath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemeNameIs + themeName);
  let themesNames = [];
  themesNames = await getNamedThemes();
  // themesNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames))
  let themePath = false;
  let frameworkThemesPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath);
  frameworkThemesPath = path.resolve(frameworkThemesPath);
  for (const element of themesNames) {
    if (element.toUpperCase() === themeName.toUpperCase()) {
      themePath = frameworkThemesPath + bas.cDoubleForwardSlash + element + bas.cDoubleForwardSlash;
      themePath = path.resolve(themePath);
      break;
    }
  } // End-for (const element of themesNames)
  // themePath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themePath;
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
  let frameworkThemesPath = path.resolve(frameworkThemesPath);
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
  await chiefData.determineThemeDebugConfigFilesToLoad(sys.cthemeConfigPath);
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

export default {
  initThemePathData,
  addThemeData,
  generateThemeDataFromPath,
  getNamedThemes,
  getNamedThemesFromRootPath,
  getNamedThemePath,
  getNamedThemePathFromRootPath,
  loadTheme,
  applyTheme
};
