/**
 * @file ruleParsing.js
 * @module ruleParsing
 * @description Contains a function that can be used by the business rules to
 * call business rules internal to business rules.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/05/03
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.ruleParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doAllRulesExist
 * @description Determines if al the rules in an array of rule names all
 * exist in the runtime rules data structure or not.
 * @param {array<string>} inputData The array of rule names that should be
 * validated for existence in the runtime rules data structure.
 * @param {string} inputMetaData Not used by this business rule.
 * @return {boolean} A True or False value to indicate if all the rules in the
 * input array exist or do not all exist.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
// eslint-disable-next-line no-unused-vars
async function doAllRulesExist(inputData, inputMetaData) {
  // let functionName = doAllRulesExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  let returnData = false;
  let tempValidationResult = true;
  if (inputData && inputData.length > 0) {
    for (const element of inputData) {
      if (await doesRuleExist(element) === false) {
        tempValidationResult = false;
      }
    } // End-for (const element of inputData)
    if (tempValidationResult === true) {
      returnData = true;
    }
  } // End-if (inputData && inputData.length > 0)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function doesRuleExist
 * @description Determines if a specified named rule exists in the rules system or not.
 * @param {string} inputData The rule name that should be validated as existing in the runtime rules data structure.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A True or False value to indicate if the rule exists or does not exist.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
// eslint-disable-next-line no-unused-vars
async function doesRuleExist(inputData, inputMetaData) {
  // let functionName = doesRuleExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = false;
  if (inputData) {
    if (D[sys.cbusinessRules][inputData]) {
      returnData = true;
    }
  } // End-if (ruleName)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function getRule
 * @description If the rule is a real rule, then return the function object,
 * so it can be used as a call-back function.
 * @param {string} inputData The name of the rule that should be returned if it exists as a valid rule name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {function} The function that was found if it exists or False if no rule is found.
 * @author Seth Hollingsead
 * @date 2022/05/09
 */
async function getRule(inputData, inputMetaData) {
  let functionName = getRule.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputData != '') {
    if (await doesRuleExist(inputData, '') === true) {
      returnData = D[sys.cbusinessRules][inputData];
    }
  } // End-if (inputData && inputData != '')
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function processRulesInternal
 * @descriptionParse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules array.
 * @param {array<string|integer|boolean|object|function,string|integer|boolean|object|function>} inputData
 * An array of inputs, inputData & inputMetaData.
 * inputData[0] = inputData - The primary input data that should be processed by the business rule.
 * inputData[1] = inputMetaData - Additional meta-data that should be used when processing the business rule.
 * @param {array<string>} inputMetaData The name(s) of the rule(s) that should be executed for modifying the input data.
 * @return {string|integer|boolean|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function processRulesInternal(inputData, inputMetaData) {
  let functionName = processRulesInternal.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = inputData[0];
  if (inputMetaData && await doAllRulesExist(inputMetaData)) {
    for (let rule in inputMetaData) {
      let inputLocalMetaData = inputData[1];
      if (Object.prototype.hasOwnProperty.call(inputMetaData, rule)) {
        let key = rule;
        // console.log(`key is ${key}`);
        let value = inputMetaData[key];
        // console.log(`value is: ${value}`);
        returnData = await D[sys.cbusinessRules][value](returnData, inputLocalMetaData);
      } // End-if (rulesToExecute.hasOwnProperty(rule))
    } // End-for (let rule in inputMetaData)
  } else {
    // WARNING: Some rules do not exist:
    console.log(msg.cProcessRulesWarnngSomeRulesDoNotExist + JSON.stringify(inputMetaData));
  } // End-if (rulesToExecute && doAllRulesExist(rulesToExecute))
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  doAllRulesExist,
  doesRuleExist,
  getRule,
  processRulesInternal
};
