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
// import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.themeBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNamedThemes
 * @description Gets the names of the themes installed in the resources/themes folder.
 * @return {array<string>} The list of names for the themes that are currently installed.
 * @author Seth Hollingsead
 * @date 2022/06/10
 */
function getNamedThemes() {
  let functionName = getNamedThemes.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let themesNames = [];
  let frameworkThemesPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath);
  frameworkThemesPath = path.resolve(frameworkThemesPath);
  themesNames = ruleBroker.processRules([frameworkThemesPath, ''], [biz.cgetDirectoryList]);
  // themesNames is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
function getNamedThemePath(themeName) {
  let functionName = getNamedThemePath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemeNameIs + themeName);
  let themesNames = [];
  themesNames = getNamedThemes();
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemesNamesIs + JSON.stringify(themesNames))
  let themePath = false;
  let frameworkThemesPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath);
  frameworkThemesPath = path.resolve(frameworkThemesPath);
  for (const element of themesNames) {
    if (element.toUpperCase() === themeName.toUpperCase()) {
      themePath = frameworkThemesPath + bas.cDoubleForwardSlash + element + bas.cDoubleForwardSlash;
      themePath = path.resolve(themePath);
      break;
    }
  } // End-for (const element of themesNames)
  // themePath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
function loadTheme(themePath) {
  let functionName = loadTheme.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themePath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemePathIs + themePath);
  let themeData = {};
  chiefData.determineThemeDebugConfigFilesToLoad(sys.cthemeConfigPath);
  themeData = chiefData.setupAllJsonConfigData(sys.cthemeConfigPath, wrd.cconfiguration);
  // themeData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
function applyTheme(themeData) {
  let functionName = applyTheme.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themeData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cthemeDataIs + JSON.stringify(themeData));
  let returnData = false;
  returnData = chiefConfiguration.parseLoadedConfigurationData(themeData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getNamedThemes,
  getNamedThemePath,
  loadTheme,
  applyTheme
};
