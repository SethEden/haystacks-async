/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:ruleParsing
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../businessRules/rules/ruleParsing.js';
import rules from '../businessRules/rulesLibrary.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.ruleBroker.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rule string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now because we are going to allow the client to define their own
 * business rules separate from the system defined business rules.
 * So we need a way to merge all client defined and system defined business rules into one location.
 * Then the rule broker will execute business rules from the D-data structure and not the rules library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
async function bootStrapBusinessRules() {
  // let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await rules.initRulesLibrary();
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function addClientRules
 * @description Merges client defined business rules with the system defined business rules.
 * @param {array<object>} clientRules The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function addClientRules(clientRules) {
  // let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  Object.assign(D[sys.cbusinessRules], clientRules);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules array.
 * @param {array<string|integer|boolean|object|function,string|integer|boolean|object|function>} inputs
 * An array of inputs, inputData & inputMetaData.
 * inputs[0] = inputData - The primary input data that should be processed by the business rule.
 * inputs[1] = inputMetaData - Additional meta-data that should be used when processing the business rule.
 * @param {array<string>} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|boolean|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function processRules(inputs, rulesToExecute) {
  // let functionName = processRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputs is: ${JSON.stringify(inputs)}`);
  // console.log(`rulesToExecute is: ${JSON.stringify(rulesToExecute)}`);
  let returnData;
  let inputMetaData;
  if (rulesToExecute && await ruleParsing.doAllRulesExist(rulesToExecute)) {
    if (inputs) {
      returnData = inputs[0];
      inputMetaData = inputs[1];
    }
    for (let rule in rulesToExecute) {
      // Make sure we don't call the internal rule processor, directly from the public interface.
      if (Object.prototype.hasOwnProperty.call(rulesToExecute, rule) && rule != biz.cprocessRulesInternal) {
        let key = rule;
        // console.log(`key is: ${key}`);
        let value = rulesToExecute[key];
        // console.log(`value is: ${value}`);
        returnData = await D[sys.cbusinessRules][value](returnData, inputMetaData);
      } // End-if (rulesToExecute.hasOwnProperty(rule))
    } // End-for (let rule in rulesToExecute)
  } else {
    // WARNING: Some rules do not exist:
    console.log(msg.cProcessRulesWarningSomeRulesDoNotExist + JSON.stringify(rulesToExecute));
  } // End-if (rulesToExecute && doAllRulesExist(rulesToExecute))
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  bootStrapBusinessRules,
  addClientRules,
  processRules
};
