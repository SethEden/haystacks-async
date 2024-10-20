/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as loading, setup, parsing & processing.
 * @requires module:ruleBroker
 * @requires module:chiefData
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import chiefData from './chiefData.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.chiefConfiguration.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName +bas.cDot;

/**
 * @function setupConfiguration
 * @description Sets up all of the application and framework configuration data.
 * @param {string} appConfigPath The path of the configuration files for the application layer.
 * @param {string} frameworkConfigPath The path of the configuration files for the framework layer.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/13
 */
async function setupConfiguration(appConfigPath, frameworkConfigPath) {
  let functionName = setupConfiguration.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigPath is: ${appConfigPath}`);
  // console.log(`frameworkConfigPath is: ${frameworkConfigPath}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + appConfigPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + frameworkConfigPath);
  let rules = [biz.cswapBackSlashToForwardSlash];
  appConfigPath = await ruleBroker.processRules([appConfigPath, ''], rules);
  // console.log(`appConfigPath after rule processing is: ${appConfigPath}`);
  frameworkConfigPath = await ruleBroker.processRules([frameworkConfigPath, ''], rules);
  // console.log(`frameworkConfigPath after rule processing is: ${frameworkConfigPath}`);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cappConfigPath, appConfigPath);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cframeworkConfigPath, frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  await chiefData.searchForUniversalDebugConfigSetting(
    sys.cappConfigPath, sys.cframeworkConfigPath
  );
  allFrameworkConfigData = await chiefData.setupAllJsonConfigData(sys.cframeworkConfigPath, wrd.cconfiguration);
  allAppConfigData = await chiefData.setupAllJsonConfigData(sys.cappConfigPath, wrd.cconfiguration);
  await parseLoadedConfigurationData(allFrameworkConfigData);
  await parseLoadedConfigurationData(allAppConfigData);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter, ' ');
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cconfigurationInitialized, true);
  // console.log('ALL DATA IS: ' + JSON.stringify(D));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cALL_DATA_IS + JSON.stringify(D));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function setupPluginConfiguration
 * @description Sets up all of the plugin configuration data.
 * @param {string} pluginConfigPath The path of the configuration files for the plugin layer.
 * @return {object} All of the loaded and parsed plugin configuration data.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function setupPluginConfiguration(pluginConfigPath) {
  let functionName = setupPluginConfiguration.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginConfigPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigPathIs + pluginConfigPath);
  let rules = [biz.cswapBackSlashToForwardSlash];
  pluginConfigPath = await ruleBroker.processRules([pluginConfigPath, ''], rules);
  // pluginConfigPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigPathIs + pluginConfigPath);
  // await configurator.setConfigurationSetting(wrd.csystem, sys.cpluginConfigPath, pluginConfigPath);
  let allPluginConfigData = {};

  allPluginConfigData = await chiefData.setupAllJsonConfigPluginData(pluginConfigPath, wrd.cconfiguration);
  let allParsedPluginConfigData = await parsePluginConfigurationData(allPluginConfigData);
  // allParsedPluginConfigData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callParsedPluginConfigDataIs + JSON.stringify(allParsedPluginConfigData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allParsedPluginConfigData;
}

/**
 * @function parsePluginConfigurationData
 * @description Loads and parses the plugin configuration data.
 * @param {string} allPluginConfigData The plugin configuration data loaded from the path, that needs parsing.
 * @return {object} The JSON object after all the parsing and processing operations are completed.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function parsePluginConfigurationData(allPluginConfigData) {
  let functionName = parsePluginConfigurationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.callPluginConfigDataIs + JSON.stringify(allPluginConfigData));
  let highLevelPluginSystemConfigurationContainer = {};
  let highLevelPluginDebugConfigurationContainer = {};
  let rules = [biz.cstringToDataType];
  let fullyQualifiedName;
  let namespace;
  let name;
  let value;
  let returnData = false;

  highLevelPluginSystemConfigurationContainer = allPluginConfigData[wrd.csystem];
  // highLevelPluginSystemConfigurationContainer is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.chighLevelPluginSystemConfigurationContainerIs + JSON.stringify(highLevelPluginSystemConfigurationContainer));
  highLevelPluginDebugConfigurationContainer = allPluginConfigData[cfg.cdebugSettings];
  // highLevelPluginDebugConfigurationContainer is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.chighLevelPluginDebugConfigurationContainerIs + JSON.stringify(highLevelPluginDebugConfigurationContainer));

  if (highLevelPluginSystemConfigurationContainer) {
    // begin processing highLevelPluginSystemConfigurationContainer
    await loggers.consoleLog(namespacePrefix + functionName, msg.cbeginProcessingHighLevelPluginSystemConfigurationContainer);
    for (let key in highLevelPluginSystemConfigurationContainer) {
      // key is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
      fullyQualifiedName = '';
      namespace = '';
      name = '';
      value = highLevelPluginSystemConfigurationContainer[key];
      // value is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + value);
      if (!!value || value === false) {
        fullyQualifiedName = key;
        // fullyQualifiedName is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cfullyQualifiedNameIs + fullyQualifiedName);

        name = await configurator.processConfigurationNameRules(fullyQualifiedName);
        // name is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cnameIs + name);
        namespace = await configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // namespace is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceIs + namespace);
        value = await configurator.processConfigurationValueRules(name, value);
        // value BEFORE rule processing is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cValueBeforeRuleProcessingIs + value);
        value = await ruleBroker.processRules([value, ''], rules);
        // value AFTER rule processing is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cValueAfterRuleProcessingIs + value);
        // NOTE: It doesn't matter if we capture the debug setting and avoid setting it here,
        // because at the plugin level we are not setting values with the D-data structure,
        // but instead we are setting values for the returnData data structure.
        // We want all the data values loaded from the configuration files to be preserved as they were loaded from those files.
        // So just add the value directly using the re-tooled configurator function built specifically for setting plugin configuration values.
        if (returnData === false) {
          returnData = {};
          returnData[wrd.csystem] = {};
        }
        let tempReturnData1 = await configurator.setPluginConfigurationSetting(returnData, namespace, name, value);
        // tempReturnData1 is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData1Is + JSON.stringify(tempReturnData1));
        // returnData[wrd.csystem] = Object.assign(returnData[wrd.csystem], tempReturnData1);
        // returnData after object.assign is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterObjectAssignIs + JSON.stringify(returnData));
      } // End-if (!!value || value === false)
    } // End-for (let key in highLevelPluginSystemConfigurationContainer)
    // end processing highLevelPluginSystemConfigurationContainer
    await loggers.consoleLog(namespacePrefix + functionName, msg.cendProcessingHighLevelPluginSystemConfigurationContainer);
  } // End-if (highLevelPluginSystemConfigurationContainer)

  if (highLevelPluginDebugConfigurationContainer) {
    // begin processing highLevelPluginDebugConfigurationContainer
    await loggers.consoleLog(namespacePrefix + functionName, msg.cbeginProcessingHighLevelPluginDebugConfigurationContainer);
    returnData[cfg.cdebugSettings] = {};
    for (let key in highLevelPluginDebugConfigurationContainer) {
      // key is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
      fullyQualifiedName = '';
      namespace = '';
      name = '';
      value = highLevelPluginDebugConfigurationContainer[key];
      // value is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + value);
      if (!!value || value === false) {
        fullyQualifiedName = key;
        // fullyQualifiedName is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cfullyQualifiedNameIs + fullyQualifiedName);

        name = await configurator.processConfigurationNameRules(fullyQualifiedName);
        // name is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cnameIs + name);
        namespace = await configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // namespace is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceIs + namespace);
        value = await configurator.processConfigurationValueRules(name, value);
        // value BEFORE rule processing is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cValueBeforeRuleProcessingIs + value);
        value = await ruleBroker.processRules([value, ''], rules);
        // value AFTER rule processing is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cValueAfterRuleProcessingIs + value);
        if (returnData === false) {
          returnData = {};
          returnData[cfg.cdebugSettings] = {};
        }
        let tempReturnData2 = await configurator.setPluginConfigurationSetting(returnData, namespace, name, value);
        // tempReturnData2 is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData2Is + JSON.stringify(tempReturnData2));
        // returnData[cfg.cdebugSettings] = Object.assign(returnData[cfg.cdebugSettings], tempReturnData2);
        // returnData after object.assign is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterObjectAssignIs + JSON.stringify(returnData));
      }
    } // End-for (let key in highLevelPluginDebugConfigurationContaine)
    // end processing highLevelPluginDebugConfigurationContainer
    await loggers.consoleLog(namespacePrefix + functionName, msg.cendProcessingHighLevelPluginDebugConfigurationContainer);
  } // End-if (highLevelPluginDebugConfigurationContainer)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function parseLoadedConfigurationData
 * @description Parses through all of the configuration data that we just loaded from the XML files and
 * adds that data to the correct data-structures in the D.[configuration] data hive.
 * @param {object} allConfigurationData A JSON data structure object that contains all configuration meta-data.
 * @return {boolean} True or False to indicate if the configuration data was applied successfully or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
async function parseLoadedConfigurationData(allConfigurationData) {
  // let functionName = parseLoadedConfigurationData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`allConfigurationData is: ${JSON.stringify(allConfigurationData)}`);
  let highLevelSystemConfigurationContainer = {};
  let highLevelDebugConfigurationContainer = {};
  let rules = [biz.cstringToDataType];
  let fullyQualifiedName;
  let namespace;
  let name;
  let value;
  let returnData = false;

  highLevelSystemConfigurationContainer = allConfigurationData[wrd.csystem];
  // console.log('highLevelSystemConfigurationContainer is: ' + JSON.stringify(highLevelSystemConfigurationContainer));
  highLevelDebugConfigurationContainer = allConfigurationData[cfg.cdebugSettings];
  // console.log('highLevelDebugConfigurationContainer is: ' + JSON.stringify(highLevelDebugConfigurationContainer));

  if (highLevelSystemConfigurationContainer) {
    for (let key in highLevelSystemConfigurationContainer) {
      fullyQualifiedName = '';
      namespace = '';
      name = '';
      value = highLevelSystemConfigurationContainer[key];
      // console.log('value is: ' + value);
      if (!!value || value === false) {
        fullyQualifiedName = key;
        // console.log('fullyQualifiedName is: ' + fullyQualifiedName);

        name = await configurator.processConfigurationNameRules(fullyQualifiedName);
        // console.log('name is: ' + name);
        namespace = await configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // console.log('namespace is: ' + namespace);
        value = await configurator.processConfigurationValueRules(name, value);
        // console.log('value BEFORE rule processing is: ' + value);
        value = await ruleBroker.processRules([value, ''], rules);
        // console.log('value AFTER rule processing is: ' + value);
        if ((namespace === wrd.csystem && name === cfg.cdebugSettings) &&
        await configurator.getConfigurationSetting(namespace, name) === true) {
          // console.log('CAUGHT THE CASE THAT WE ARE SETTING A FALSE VALUE FOR DEBUG-SETTINGS');
          // NOTE: DO NOT over write the value because the base value is already saved as true.
          // Over writing it with true, doesn't do anything, and over writing it with false
          // destroys whatever setting the user may have set from the client application.
        } else {
          await configurator.setConfigurationSetting(namespace, name, value);
        }
      } // End-if (!!value || value === false)
    } // End-for (let key in highLevelSystemConfigurationContainer)
  } // End-if (highLevelSystemConfigurationContainer)

  if (highLevelDebugConfigurationContainer) {
    for (let key in highLevelDebugConfigurationContainer) {
      fullyQualifiedName = '';
      namespace = '';
      name = '';
      value = highLevelDebugConfigurationContainer[key];
      // console.log('value is: ' + value);
      if (!!value || value === false) {
        fullyQualifiedName = key;
        // console.log('fullyQualifiedName is: ' + fullyQualifiedName);

        name = await configurator.processConfigurationNameRules(fullyQualifiedName);
        // console.log('name is: ' + name);
        namespace = await configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // console.log('namespace is: ' + namespace);
        value = await configurator.processConfigurationValueRules(name, value);
        // console.log('value BEFORE rule processing is: ' + value);
        value = await ruleBroker.processRules([value, ''], rules);
        // console.log('value AFTER rule processing is: ' + value);

        await configurator.setConfigurationSetting(namespace, name, value);
        returnData = true;
      } // End-if (!!value || value === false)
    } // End-for (let key in highLevelDebugConfigurationContainer)
  } // End-if (highLevelDebugConfigurationContainer)
  // console.log('returnData is: ' + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  setupConfiguration,
  setupPluginConfiguration,
  parsePluginConfigurationData,
  parseLoadedConfigurationData
};
