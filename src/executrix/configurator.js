/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:ruleBroker
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 * @NOTE This file is needed to keep these lower level functions separate from the chiefConfiguration.
 * Because having these functions in the chiefConfiguration can cause a circular dependency.
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.configurator.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration data structure stored on the D-data structure.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  // let functionName = setConfigurationSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // console.log(`configurationName is: ${configurationName}`);
  // console.log(`configurationValue is: ${configurationValue}`);
  let namespaceConfigObject = await getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  if (namespaceConfigObject) {
    namespaceConfigObject[`${configurationNamespace}.${configurationName}`] = configurationValue;
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double} The value of whatever was stored in the D[configuration].
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function getConfigurationSetting(configurationNamespace, configurationName) {
  // let functionName = getConfigurationSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // console.log(`configurationName is: ${configurationName}`);
  let returnConfigurationValue;
  let namespaceConfigObject = undefined;
  namespaceConfigObject = await getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  if (namespaceConfigObject) {
    if (configurationName) {
      if (configurationName.includes(bas.cAt) && configurationName.indexOf(bas.cAt) === 0) {
        returnConfigurationValue = await getParentConfigurationNamespaceObject(configurationNamespace, configurationName);
      } else {
        returnConfigurationValue = namespaceConfigObject[configurationNamespace + bas.cDot + configurationName];
      }
    } else {
      returnConfigurationValue = await getParentConfigurationNamespaceObject(configurationNamespace, '');
    }
  } // End-if (namespaceConfigObject)
  // console.log(`returnConfigurationValue is: ${returnConfigurationValue}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnConfigurationValue;
}

/**
 * @function processConfigurationNameRules
 * @description Processes a fully qualified name and extracts the configuration name without the namespace.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The name of the configuration setting without the namespace.
 * @author Seth Hollingsead
 * @date 2021/10/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function processConfigurationNameRules(fullyQualifiedName) {
  // let functionName = processConfigurationNameRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`fullyQualifiedName is: ${fullyQualifiedName}`);
  let returnValue;
  let fullyQualifiedNameArray = fullyQualifiedName.split(bas.cDot);
  returnValue = fullyQualifiedNameArray[fullyQualifiedNameArray.length - 1];
  // console.log(`returnValue is: ${returnValue}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

/**
 * @function processConfigurationNamespaceRules
 * @description Processes a fully qualified name and extracts the namespace.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The namespace of the configuration setting, without the configuration name.
 * @author Seth Hollingsead
 * @date 2021/10/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function processConfigurationNamespaceRules(fullyQualifiedName) {
  // let functionName = processConfigurationNamespaceRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`fullyQualifiedName is: ${fullyQualifiedName}`);
  let returnValue;
  returnValue = fullyQualifiedName.substr(0, fullyQualifiedName.lastIndexOf(bas.cDot));
  // console.log('returnValue is: ' + returnValue);
  if (returnValue.includes(cfg.cdebugFunctions) || returnValue.includes(cfg.cdebugFiles)) {
    // console.log('contains debugFunctions or debugFiles');
    // We need to strip off the "debugFunctions" & "debugFiles" prefixes along with the pipe that delimits them.
    // At some point we might need these separate designations, like for the colorizer logic, but for now,
    // until there is a business need I will keep them unified.
    // Everything to the right all falls under the designation of "debugSettings"
    // so that as the base for the namespace tree should work perfectly.
    let parsedDebugSettingsNamespace = returnValue.split(bas.cPipe);
    // console.log('parsedDebugSettingsNamespace is: ' + parsedDebugSettingsNamespace);
    returnValue = parsedDebugSettingsNamespace[1];
  } // End-if (returnValue.includes(cfg.cdebugFunctions) || returnValue.includes(cfg.cdebugFiles))
  // console.log(`returnValue is: ${returnValue}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

/**
 * @function processConfigurationValueRules
 * @description Processes a name and value to execute required code and convert string values
 * to actual data objects needed by the configuration system.
 * @param {string} name The name of the configuration variable, without the namespace.
 * @param {string} value The value of the configuration variable.
 * @return {string|boolean|integer|float|object} A value that is appropriately processed.
 * @author Seth Hollingsead
 * @date 2021/10/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function processConfigurationValueRules(name, value) {
  // let functionName = processConfigurationValueRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`name is: ${name}`);
  // console.log(`value is: ${value}`);
  let returnValue;
  switch (name) {
    case cfg.cdateTimeStamp: case cfg.cdateStamp: case cfg.ctimeStamp:
      // NOTE: All of these three configurations are processed exactly the same way.
      // As long as what is stored in the configuration file is correct, then they should be processed correctly here.
      returnValue = await ruleBroker.processRules([value, ''], [biz.cgetNowMoment]);
      break;
    default: // We don't know what the value is.
      // We have to just return the value as it was passed in, no processing.
      // We don't want to corrupt the other data that may be passed into this function.
      returnValue = value;
      break;
  } // End-switch (name)
  // console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

/**
 * @function getParentConfigurationNamespaceObject
 * @description Navigates the configuration JSON data object tree to find the namespace of the configuration setting,
 * and then determines the parent and returns the entire tree of the configuration data
 * including that parent and all its top level contents.
 * @param {string} configurationNamespace The fully qualified path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} optionalFunctionNameAppendix An optional function name appendix that could
 * potentially be added to the end of the function name.
 * Ex: @ModuleFontBackgroundColor
 * @return {object|boolean} The parent of the object found at the specified namespace address in the configuration data object,
 * or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2021/10/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function getParentConfigurationNamespaceObject(configurationNamespace, optionalFunctionNameAppendix) {
  // let functionName = getParentConfigurationNamespaceObject.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // console.log(`optionalFunctionNameAppendix is: ${optionalFunctionNameAppendix}`);
  let returnValue = true;
  let parentConfigurationNamespaceArray = configurationNamespace.split(bas.cDot);
  let newParentConfigurationName = parentConfigurationNamespaceArray.pop();
  let newParentConfigurationNamespace = parentConfigurationNamespaceArray.join(bas.cDot);
  let parentNamespaceConfigObject = await getConfigurationNamespaceObject(parentConfigurationNamespaceArray);
  if (optionalFunctionNameAppendix !== '') {
    returnValue = parentNamespaceConfigObject[newParentConfigurationNamespace + bas.cDot + newParentConfigurationName + optionalFunctionNameAppendix];
  } else {
    returnValue = parentNamespaceConfigObject[newParentConfigurationNamespace + bas.cDot + newParentConfigurationName];
  }
  // console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

/**
 * @function getConfigurationNamespaceObject
 * @description Navigates the configuration JSON data object tree to find the namespace of configuration settings.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the
 * configuration setting should be set, or returned.
 * @return {object|boolean} The object found at the specified namespace address in the configuration data object,
 * or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2021/10/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 * @NOTE See note below about the business rule: biz.cgetNamespacedDataObject!
 */
async function getConfigurationNamespaceObject(configurationNamespace) {
  // let functionName = getConfigurationNamespaceObject.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  let returnValue = true; // DO NOT CHANGE! It will break the boot-strap protection mechanisms.
  let configurationDataRoot = D[wrd.cconfiguration];
  let configurationPathObject = configurationDataRoot;
  if (!configurationPathObject) { // Need to handle the case that the configuration data object doesn't even exist at all!
    D[wrd.cconfiguration] = {};
    configurationDataRoot = D[wrd.cconfiguration];
    configurationPathObject = configurationDataRoot;
  } // End-if (!configurationPathObject)
  for (const element of configurationNamespace) {
    if (!configurationPathObject[element]) {
      // It doesn't exist yet, so lets make it.
      configurationPathObject[element] = {};
    } // End-if (!configurationPathObject[element])
    configurationPathObject = configurationPathObject[element];
  } // End for-loop (const element of configurationNamespace)
  if (returnValue) {
    returnValue = configurationPathObject;
  }
  // NOTE: The getConfigurationNamespaceObject is called before the configuration bootstrap process is complete.
  // So therefore trying to call the above functionality from a business rule will not work EVER!
  // The above code will need to remain in place even though,
  // it is duplicate code to the new functionality in the business rule: biz.cgetNamespacedDataObject
  // returnValue = ruleBroker.processRules([configurationNamespace.unshift(wrd.cconfiguration), ''], [biz.cgetNamespacedDataObject]);
  // console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

export default {
  setConfigurationSetting,
  getConfigurationSetting,
  processConfigurationNameRules,
  processConfigurationNamespaceRules,
  processConfigurationValueRules
};
