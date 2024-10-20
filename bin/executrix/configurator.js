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

// eslint-disable-next-line no-unused-vars
const {bas, biz, cfg, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.executrix.configurator.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

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
  let returnData = false;
  let namespaceConfigObject = await getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  if (namespaceConfigObject) {
    namespaceConfigObject[`${configurationNamespace}.${configurationName}`] = configurationValue;
    returnData = true;
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function setPluginConfigurationSetting
 * @description Sets a configuration setting on the configuration data structure stored on the input data structure and returned as an object.
 * @param {object} dataStructure The input data structure upon which the configuration setting should be set and then returned. 
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords 
 * @param {string} configurationName The key of the configuration setting. 
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @return {object} The modified input object with the new configuration value added in the appropriate location.
 * @author Seth Hollingsead
 * @date 2022/10/20
 * @NOTE Technically we could have the logger get used here, but it would cause the appearance of a circular dependency.
 * So we should avoid usage here anyway.
 */
async function setPluginConfigurationSetting(dataStructure, configurationNamespace, configurationName, configurationValue) {
  // let functionName = setPluginConfigurationSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataStructure is ${JSON.stringify(dataStructure)}`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // console.log(`configurationName is: ${configurationName}`);
  // console.log(`configurationVaue is: ${configurationValue}`);
  let returnData = false;
  if (!dataStructure) {
    // console.log('dataStructure resolves as false');
    returnData = {};
  } else {
    // console.log('dataStructure resolved as not false!');
    returnData = await ruleBroker.processRules([dataStructure, ''], [biz.carrayDeepClone]);
  }
  // console.log('returnData after initialization and-or deep cloning: ' + JSON.stringify(returnData));
  let namespaceConfigObject = await getPluginConfigurationNamespaceObject(dataStructure, configurationNamespace.split(bas.cDot));
  // console.log('namespaceConfigObject after calling getPluginConfigurationNamespaceObject: ' + JSON.stringify(namespaceConfigObject));
  if (namespaceConfigObject) {
    // console.log('namespaceConfigObject resolved as true');
    namespaceConfigObject[`${configurationNamespace}.${configurationName}`] = configurationValue;
    // console.log('namespaceConfigObject after adding the configurationValue: ' + JSON.stringify(namespaceConfigObject));
  }
  // console.log('namespaceConfigObject after parsing the namespaceConfigObject, configurationNamespace and configuration Name: ' + JSON.stringify(namespaceConfigObject));
  // console.log('attempting to merge the namespaceConfigObject with the returnData');
  // returnData = ruleBroker.processRules([returnData, namespaceConfigObject], [biz.cobjectDeepMerge]);
  returnData = namespaceConfigObject;
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
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
 * @NOTE NOT A PUBLIC FUNCTION!!
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

/**
 * @function getPluginConfigurationNamespaceObject
 * @description Navigates the input data structure configuration JSON data object tree to fnd the namespace of configuration settings.
 * @param {object} dataStructure The input data structure upon which the configuration setting should be set and then returned.
 * @param {object|boolean} configurationNamespace The object found at the specified namespace address in the input data structure configuration data object,
 * or False if nothing was found.
 * @return {object|boolean} The object found at the specified plugin namespace address in the configuration data object,
 * or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2022/10/20
 * @NOTE Technically we could have the logger get used here, but it would cause the appearance of a circular dependency.
 * So we should avoid usage here anyway.
 * @NOTE NOT A PUBLIC FUNCTION!!
 */
async function getPluginConfigurationNamespaceObject(dataStructure, configurationNamespace) {
  // let functionName = getConfigurationNamespaceObject.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataStructure is ${JSON.stringify(dataStructure)}`);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  let returnValue = true; // No boot-strap protection needed here, but see logic below, still necessary!
  let configurationDataRoot = dataStructure;
  let configurationPathObject = configurationDataRoot;
  if (!configurationPathObject) { // Need to handle the case that the configuration data object doesn't even exist at all!
    dataStructure = {};
    configurationDataRoot = dataStructure;
    configurationPathObject = configurationDataRoot;
  } // End-if (!configurationPathObject)
  for (let element of configurationNamespace) {
    if (!configurationPathObject[element]) {
      // It doesn't exist yet, so lets make it.
      configurationPathObject[element] = {};
    } // End-if (!configurationPathObject[element])
    configurationPathObject = configurationPathObject[element];
  } // End-for (const element of configurationNamespace)
  returnValue = configurationPathObject;
  // console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnValue;
}

/**
 * @function addPluginConfigurationData
 * @description Merges plugin defined configuration data with the system defined configuration data.
 * @param {string} pluginName The name of the current plugin these configuration settings belong to.
 * @param {object} pluginConfigData A JSON object that contains all of the configuration settings for the current plugin.
 * @return {boolean} True or False to indicate if the merge was successful or not.
 * @author Seth Hollingsead
 * @date 2022/10/24
 */
async function addPluginConfigurationData(pluginName, pluginConfigData) {
  // let functionName = addPluginConfigurationData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // pluginName is:
  // console.log(msg.cpluginNameIs + pluginName);
  // pluginConfigData is:
  // console.log(msg.cpluginConfigDataIs + JSON.stringify(pluginConfigData));
  let returnData = false;
  try {
    if (D[wrd.cconfiguration][wrd.cplugins] === undefined) {
      D[wrd.cconfiguration][wrd.cplugins] = {};
    }
    // Capture the system settings here, so we don't over-write the framework or application system settings.
    // There could be an argument made to merge all of these plugin system settings with the rest of the framework & application system settings.
    // So long as we make sure to check for duplicates and throw errors when a duplicate is found.
    // This is because it could be dangerous if we allow for plugins to over-write framework and application system settings.
    D[wrd.cconfiguration][wrd.cplugins][pluginName] = {};
    D[wrd.cconfiguration][wrd.cplugins][pluginName][wrd.csystem] = {};
    D[wrd.cconfiguration][wrd.cplugins][pluginName][wrd.csystem] = pluginConfigData[wrd.csystem];

    // Now we still need to merge over the debugSetting data structure.
    // Rather than just blanket merge, there is a sub-structure that we can navigate that will allow us to do this with an assignment operation.
    if (D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cplugins] === undefined) {
      // ONLY initialize it if it does not yet exist, otherwise we might end up destroying previously loaded plugin configuration debug settings.
      D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cplugins] = {};
    }
    D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cplugins][pluginName] = {};
    D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cplugins][pluginName] = pluginConfigData[cfg.cdebugSetting][wrd.cplugins][pluginName];
    returnData = true;
  } catch (err) {
    // ERROR: Failure unable to persist the plugin configuration data for plugin:
    console.log(msg.cErrorAddPluginConfigurationDataMessage01 + pluginName);
    console.log(msg.cERROR_Colon + err);
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function getAmbiguousDataElement
 * @description Looks for data in a JSON data object, given an array of possible names the data could be saved under.
 * This function helps to ensure that we will get the data, even if the data element is stored under a data name,
 * that could be all lower case, camel case, or all upper case.
 * @param {object} dataSource The source data where the data element should be captured from.
 * @param {array<string>} possibleDataNamesArray An array of possible names the could be stored under.
 * Ex: ["name","Name","NAME"]
 * @return {string|integer|boolean|float|object} Whatever data element that was found that matches one of the input keys.
 * @author Seth Hollingsead
 * @date 2023/04/27
 * @NOTE This function assumes the input data source is a flat data structure with no hierarchy.
 */
async function getAmbiguousDataElement(dataSource, possibleDataNamesArray) {
  // let functionName = getAmbiguousDataElement.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // dataSource is:
  // console.log(msg.cdataSourceIs + JSON.stringify(dataSource));
  // possibleDataNamesArray is:
  // console.log(msg.cpossibleDataNamesArrayIs + JSON.stringify(possibleDataNamesArray));
  let returnData = false;
  // pluginMetaData[wrd.cName]
  for (let key in possibleDataNamesArray) {
    let dataElement = dataSource[possibleDataNamesArray[key]];
    // dataElement is:
    // console.log(msg.cdataElementIs + dataElement);
    if (dataElement) {
      returnData = dataElement;
      // We found the data element we are looking for, can exit the loop.
      break;
    }
  } // End-for (let key in possibleDataNamesArray)
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  setConfigurationSetting,
  setPluginConfigurationSetting,
  getConfigurationSetting,
  processConfigurationNameRules,
  processConfigurationNamespaceRules,
  processConfigurationValueRules,
  addPluginConfigurationData,
  getAmbiguousDataElement
};
