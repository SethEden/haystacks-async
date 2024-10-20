/**
 * @file chiefConstant.js
 * @module chiefConstant
 * @description Contains all of the functions for high level management of the constants data system,
 * such as initialization, loading, setup, parsing, processing and data integration.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/10/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import constantBroker from '../brokers/constantBroker.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.chiefConstant.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName +bas.cDot;

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
  await constantBroker.initializeConstantsValidationData();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function generateFrameworkConstantsValidationData
 * @description Generates all of the framework constants validation data and returns all that data as a single JSON object.
 * @return {object} A JSON object that contains all of the framework constants validation data.
 * @author Seth Hollingsead
 * @date 2022/03/28
 */
async function generateFrameworkConstantsValidationData() {
  let functionName = generateFrameworkConstantsValidationData.name
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await constantBroker.generateFrameworkConstantsValidationData();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function addConstantsValidationData
 * @description Calls the dataBroker to add constants validation data to the constants validation data structure.
 * @param {array<array<string,object>>} arrayValidationData An array of arrays that contains all of the constants library validation names and data objects.
 * @param {string} contextName The name of the type of data that is being added.
 * Ex: Framework, Application, Plugin:PluginOne, Plugin:D-CAF
 * @return {boolean} True or False to indicate if the data was added successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/24
 */
async function addConstantsValidationData(arrayValidationData, contextName) {
  let functionName = addConstantsValidationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  // arrayValidationData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.carrayValidationDataIs + JSON.stringify(arrayValidationData));
  let returnData = false;
  returnData = await constantBroker.addConstantsValidationData(arrayValidationData, contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  initializeConstantsValidationData,
  generateFrameworkConstantsValidationData,
  addConstantsValidationData
}