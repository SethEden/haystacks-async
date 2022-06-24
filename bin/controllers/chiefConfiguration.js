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
function setupConfiguration(appConfigPath, frameworkConfigPath) {
  let functionName = setupConfiguration.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigPath is: ${appConfigPath}`);
  // console.log(`frameworkConfigPath is: ${frameworkConfigPath}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + appConfigPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + frameworkConfigPath);
  let rules = [biz.cswapBackSlashToForwardSlash];
  appConfigPath = ruleBroker.processRules([appConfigPath, ''], rules);
  // console.log(`appConfigPath after rule processing is: ${appConfigPath}`);
  frameworkConfigPath = ruleBroker.processRules([frameworkConfigPath, ''], rules);
  // console.log(`frameworkConfigPath after rule processing is: ${frameworkConfigPath}`);
  configurator.setConfigurationSetting(wrd.csystem, sys.cappConfigPath, appConfigPath);
  configurator.setConfigurationSetting(wrd.csystem, sys.cframeworkConfigPath, frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  chiefData.searchForUniversalDebugConfigSetting(
    sys.cappConfigPath, sys.cframeworkConfigPath
  );
  allFrameworkConfigData = chiefData.setupAllJsonConfigData(sys.cframeworkConfigPath, wrd.cconfiguration);
  allAppConfigData = chiefData.setupAllJsonConfigData(sys.cappConfigPath, wrd.cconfiguration);
  parseLoadedConfigurationData(allFrameworkConfigData);
  parseLoadedConfigurationData(allAppConfigData);
  configurator.setConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter, ' ');
  configurator.setConfigurationSetting(wrd.csystem, cfg.cconfigurationInitialized, true);
  // console.log('ALL DATA IS: ' + JSON.stringify(D));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cALL_DATA_IS + JSON.stringify(D));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
function parseLoadedConfigurationData(allConfigurationData) {
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

        name = configurator.processConfigurationNameRules(fullyQualifiedName);
        // console.log('name is: ' + name);
        namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // console.log('namespace is: ' + namespace);
        value = configurator.processConfigurationValueRules(name, value);
        // console.log('value BEFORE rule processing is: ' + value);
        value = ruleBroker.processRules([value, ''], rules);
        // console.log('value AFTER rule processing is: ' + value);
        if ((namespace === wrd.csystem && name === cfg.cdebugSettings) &&
        configurator.getConfigurationSetting(namespace, name) === true) {
          // console.log('CAUGHT THE CASE THAT WE ARE SETTING A FALSE VALUE FOR DEBUG-SETTINGS');
          // NOTE: DO NOT over write the value because the base value is already saved as true.
          // Over writing it with true, doesn't do anything, and over writing it with false
          // destroys whatever setting the user may have set from the client application.
        } else {
          configurator.setConfigurationSetting(namespace, name, value);
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

        name = configurator.processConfigurationNameRules(fullyQualifiedName);
        // console.log('name is: ' + name);
        namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
        // console.log('namespace is: ' + namespace);
        value = configurator.processConfigurationValueRules(name, value);
        // console.log('value BEFORE rule processing is: ' + value);
        value = ruleBroker.processRules([value, ''], rules);
        // console.log('value AFTER rule processing is: ' + value);

        configurator.setConfigurationSetting(namespace, name, value);
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
