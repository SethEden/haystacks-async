/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files, CSV files or JSON files. Additional file type processing should be added in this module.
 * @requires module:dataBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefData.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function searchForUniversalDebugConfigSetting
 * @description Searches all of the config data files for a general solution to the
 * debugSettings configuration setting.
 * @param {string} appConfigPathName The name of the configuration setting
 * that has the path for the appConfigPath.
 * @param {string} frameworkConfigPathName The name of the configuration setting
 * that has the path for the frameworkConfigPath.
 * @return {boolean} A True or False to indicate if the debugSettings was found to be
 * true in either of the configuration settings (appConfig Or frameworkConfig).
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
async function searchForUniversalDebugConfigSetting(appConfigPathName, frameworkConfigPathName) {
  // let functionName = searchForUniversalDebugConfigSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigPathName is: ${appConfigPathName}`);
  // console.log(`frameworkConfigPathName is: ${frameworkConfigPathName}`);
  let universalDebugConfigSetting = false;
  let appConfigDataPath = await configurator.getConfigurationSetting(wrd.csystem, appConfigPathName);
  let frameworkConfigDataPath = await configurator.getConfigurationSetting(wrd.csystem, frameworkConfigPathName);
  appConfigDataPath = path.resolve(appConfigDataPath);
  frameworkConfigDataPath = path.resolve(frameworkConfigDataPath);
  let appConfigFilesToLoad = await dataBroker.scanDataPath(appConfigDataPath);
  let frameworkConfigFilesToLoad = await dataBroker.scanDataPath(frameworkConfigDataPath);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigFiles, appConfigFilesToLoad);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkConfigFiles, frameworkConfigFilesToLoad);
  universalDebugConfigSetting = await dataBroker.findUniversalDebugConfigSetting(
    appConfigFilesToLoad, frameworkConfigFilesToLoad
  );
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, universalDebugConfigSetting);
  // console.log(`universalDebugConfigSetting is: ${universalDebugConfigSetting}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return universalDebugConfigSetting;
}

/**
 * @function determineThemeDebugConfigFilesToLoad
 * @description If the debugSettings flag is already set,
 * then look up the specified path name and scan the path to determine all
 * of the theme debug config files that should be loaded.
 * @param {string} themeConfigPathName The configuration name of the path that should be looked up for scaning purposes.
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

/**
 * @function getAndProcessCsvData
 * @description Loads the specified file, parses it and converts all the data to the appropriate format.
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @param {string} contextName The name that should be used when adding the objects to the D data structure for data-sharing.
 * @return {object} A parsed CSV JSON object where all the values have been converted from their string representation into actual values of appropriate type.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
async function getAndProcessCsvData(pathAndFilename, contextName) {
  let functionName = getAndProcessCsvData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  pathAndFilename = path.resolve(pathAndFilename);
  let loadedData = await dataBroker.getCsvData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allLoadedData = await dataBroker.getAndProcessCsvData(loadedData, contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allLoadedData;
}

/**
 * @function getAndProcessXmlData
 * @description Loads the specified file, parses it and converts all values into their appropriate data types.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {object} A parsed XML JSON object where all the values have been converted from their string representation into actual values of appropriate type.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
async function getAndProcessXmlData(pathAndFilename) {
  let functionName = getAndProcessXmlData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename);
  let allLoadedXmlData = await dataBroker.getXmlData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allXmlData = await dataBroker.processXmlData(allLoadedXmlData);
  // allXmlData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callXmlDataIs + JSON.stringify(allXmlData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allXmlData;
}

/**
 * @function setupAllCsvData
 * @description Sets up all of the specified CSV data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded from all the CSV files and merged together.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
async function setupAllCsvData(dataPathConfigurationName, contextName) {
  let functionName = setupAllCsvData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = await configurator.getConfigurationSetting(wrd.csystem, dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = await dataBroker.scanDataPath(dataPath);
  // filesToLoad is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = await dataBroker.loadAllCsvData(filesToLoad, contextName);
  // loadedAndMergedDataAllFiles is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergedDataAllFiles;
}

/**
 * @function setupAllXmlData
 * @description Sets up all of the specified XML data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded from all the XML files and merged together.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
async function setupAllXmlData(dataPathConfigurationName, contextName) {
  let functionName = setupAllXmlData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = await configurator.getConfigurationSetting(wrd.csystem, dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = await dataBroker.scanDataPath(dataPath);
  // filesToLoad is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = await dataBroker.loadAllXmlData(filesToLoad, contextName);
  // loadedAndMergedDataAllFiles is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergedDataAllFiles;
}

/**
 * @function setupAllJsonConfigData
 * @description Sets up all of the JSON data at the specified configuration path.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2021/03/31
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
async function setupAllJsonConfigData(dataPathConfigurationName, contextName) {
  // let functionName = setupAllJsonConfigData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataPathConfigurationName is: ${dataPathConfigurationName}`);
  // console.log(`contextName is: ${contextName}`);
  let loadedAndMergedDataAllFiles = {};
  let filesToLoad = [];
  if (dataPathConfigurationName === sys.cappConfigPath) {
    filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cappConfigFiles);
  } else if (dataPathConfigurationName === sys.cframeworkConfigPath) {
    filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkConfigFiles);
  } else {
    filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cthemeConfigFiles);
  }
  loadedAndMergedDataAllFiles = await dataBroker.loadAllJsonData(filesToLoad, contextName);
  // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergedDataAllFiles)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return loadedAndMergedDataAllFiles;
}

/**
 * @function initializeConstantsValidationData
 * @description Calls the dataBroker to initialize the constants verification data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
async function initializeConstantsValidationData() {
  let functionName = initializeConstantsValidationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await dataBroker.initializeConstantsValidationData();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function addConstantsValidationData
 * @description Calls the dataBroker to ad constants validation data to the constants validation data structure.
 * @param {array<array<string,object>>} arrayValidationData An array of arrays that contains all of the constants library validation names and data objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/24
 */
async function addConstantsValidationData(arrayValidationData) {
  let functionName = addConstantsValidationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // arrayValidationData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.carrayValidationDataIs + JSON.stringify(arrayValidationData));
  await dataBroker.addConstantsValidationData(arrayValidationData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  searchForUniversalDebugConfigSetting,
  determineThemeDebugConfigFilesToLoad,
  getAndProcessCsvData,
  getAndProcessXmlData,
  setupAllCsvData,
  setupAllXmlData,
  setupAllJsonConfigData,
  initializeConstantsValidationData,
  addConstantsValidationData
}
