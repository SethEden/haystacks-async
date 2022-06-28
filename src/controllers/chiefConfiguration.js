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
// controllers.chiefConfiguration.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName +bas.cDot;

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
  parseLoadedConfigurationData
};
