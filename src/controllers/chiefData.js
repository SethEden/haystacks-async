/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files, CSV files or JSON files. Additional file type processing should be added in this module.
 * @requires module:dataBroker
 * @requires module:themeBroker
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
// framework.controllers.chiefData.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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
  dataPath = path.normalize(dataPath);
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
 * @function setupAllXmlPluginData
 * @description Sets up all of the specified XML data for the plugin.
 * @param {string} dataPathConfigurationName The fully qualified path to the data files that should be loaded and parsed or
 * the name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should describe the kind of data that is being loaded and parsed.
 * @return {object} A JSON object that contains all of the data that was loaded from all the XML files and merged together.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
async function setupAllXmlPluginData(dataPathConfigurationName, contextName) {
  let functionName = setupAllXmlPluginData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = path.normalize(dataPathConfigurationName);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  dataPath = path.resolve(dataPath);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = await dataBroker.scanDataPath(dataPath);
  if (filesToLoad && Array.isArray(filesToLoad) && filesToLoad.length > 0) {
    // filesToLoad is valid
    await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIsValid);
  } else {
    dataPath = await configurator.getConfigurationSetting(wrd.csystem, dataPathConfigurationName);
    dataPath = path.normalize(dataPath);
    dataPath = path.resolve(dataPath);
    // dataPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
    filesToLoad = await dataBroker.scanDataPath(dataPath);
  }
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
  switch (dataPathConfigurationName) {
    case sys.cappConfigPath:
      filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cappConfigFiles);
      break;
    case sys.cframeworkConfigPath:
      filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkConfigFiles);
      break;
    case sys.cthemeConfigPath:
      filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cthemeConfigFiles);
      break;
    // NOTE: We cannot put the plugin here, because there is no way to get or set configuration settings,
    // when calling haystacks from the plugin.
    // case sys.cpluginConfigPath:
    //   filesToLoad = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginConfigFiles);
    //   break;
    default:
      console.log(msg.cWarningDataPathConfigurationNameNotSupported + dataPathConfigurationName);
      break;
  }
  // console.log(`filesToLoad is: ${filesToLoad}`);
  loadedAndMergedDataAllFiles = await dataBroker.loadAllJsonData(filesToLoad, contextName);
  // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergedDataAllFiles)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return loadedAndMergedDataAllFiles;
}

/**
 * @function setupAllJsonConfigPluginData
 * @description Sets up all of the JSON data at the specified configuration path with regard to plugin configuration data.
 * @param {string} configFilesPath The path to the configuration files that should be loaded.
 * @param {string} contextName The type of configuration data that should be loaded.
 * @return A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2022/10/18
 * @NOTE We need this function here because we cannot store paths in the configuration system
 * the same way the setupAllJsonConfigData does it. The path must be passed directly.
 */
async function setupAllJsonConfigPluginData(configFilesPath, contextName) {
  let functionName = setupAllJsonConfigPluginData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configFilesPath is: ${configFilesPath}`);
  // console.log(`contextName is: ${contextName}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configFilesPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigFilesPathIs + configFilesPath);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergeDataAllFiles = {};
  let filesToLoad = [];
  filesToLoad = await dataBroker.scanDataPath(configFilesPath);
  // console.log(`filesToLoad is ${filesToLoad}`);
  loadedAndMergeDataAllFiles = await dataBroker.loadAllJsonData(filesToLoad, contextName);
  // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergeDataAllFiles)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergeDataAllFiles));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergeDataAllFiles;
}

/**
 * @function loadAllJsonData
 * @description Loads all of the JSON data at the specified path.
 * Can be used to load account data, transaction history logs, activity logs, or any other kind of JSON data.
 * @param {string} dataPath The path to the JSON files that should be loaded.
 * @param {string} contextName The type of data that should be loaded.
 * @return A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function loadAllJsonData(dataPath, contextName) {
  let functionName = loadAllJsonData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergeDataAllFiles = {};
  let filesToLoad = [];
  filesToLoad = await dataBroker.scanDataPath(dataPath);
  // filesToLoad is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  if (contextName.toLowerCase() === wrd.cschemas) {
    loadedAndMergeDataAllFiles = await dataBroker.loadAllJsonDataBruteForce(filesToLoad, contextName);
  } else {
    loadedAndMergeDataAllFiles = await dataBroker.loadAllJsonData(filesToLoad, contextName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergeDataAllFiles));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergeDataAllFiles;
}

/**
 * @function storeAllSchemaData
 * @description Stores all of the schema data on the D-data structure by calling the data broker to get the work done.
 * @param {array<object>} schemaDataObjects An array of JSON objects that contain sets of schema data, loaded from JSON files.
 * These schema objects control the behavior of the system for certain logical operations in the code base.
 * @return {boolean} True or False to indicate if the data was stored successfully or not.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function storeAllSchemaData(schemaDataObjects) {
  let functionName = storeAllSchemaData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // schemaDataObjects is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cschemaDataObjectsIs + JSON.stringify(schemaDataObjects));
  let returnData = false;
  let allSchemasStoredSuccess = true; // Assume success unless proven otherwise
  for (const schemaDataObject of schemaDataObjects) {
    // schemaDataObject is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cschemaDataObjectIs + JSON.stringify(schemaDataObject));
    if (schemaDataObject) {
      let storeSuccess = await dataBroker.storeSchemaData(schemaDataObject);
      // If any store operation fails, set allSchemaStoredSuccess to false
      if (!storeSuccess) {
        allSchemasStoredSuccess = false;
      }
    } else {
      // Invalid schemaDataObject, mark overall success as false
      allSchemasStoredSuccess = false;
    }
  }
  returnData = allSchemasStoredSuccess;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storeData
 * @description Persist some data to the data storage in the D-data structure.
 * @param {string} dataName The name of the data, unique name used to store the data in the data structure.
 * @param {object|string|boolean|number|array} data The data that should be stored.
 * @return {boolean} True or False to indicate if the data was stored successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function storeData(dataName, data) {
  let functionName = storeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  // data is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataIs + JSON.stringify(data));
  let returnData = false;
  returnData = await dataBroker.storeData(dataName, data);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getData
 * @description Gets data from the D-Data structure data storage data hive.
 * @param {string} dataName The unique name the data should be stored under.
 * @return {object|string|boolean|number|array} The data element or object that was stored if any was found.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function getData(dataName) {
  let functionName = getData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await dataBroker.getData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearData
 * @description Wipes out the data using the unique specified data name,
 * if any is found in the D-0data structure data storage data hive.
 * @param {string} dataName The unique name of the data that should be cleared.
 * @return {boolean} True or False to indicate if the data was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function clearData(dataName) {
  let functionName = clearData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await dataBroker.clearData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  searchForUniversalDebugConfigSetting,
  getAndProcessCsvData,
  getAndProcessXmlData,
  setupAllCsvData,
  setupAllXmlData,
  setupAllXmlPluginData,
  setupAllJsonConfigData,
  setupAllJsonConfigPluginData,
  loadAllJsonData,
  storeAllSchemaData,
  storeData,
  getData,
  clearData
}
