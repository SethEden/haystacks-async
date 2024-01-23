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
// framework.brokers.ruleBroker.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
 * @function resetBusinessRules
 * @description Clears out and reinitializes the business rules.
 * @return {void}
 * @date 2023/02/12
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function resetBusinessRules() {
  // let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // await rules.clearRulesLibrary();
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
  await Object.assign(D[sys.cbusinessRules], clientRules);
  // D-businessRules stack is:
  // console.log(namespacePrefix + functionName + bas.cSpace + msg.cdBusinessRulesStackIs, D[sys.cbusinessRules]);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function addPluginRules
 * @description Merges plugin defined business rules with the system defined business rules.
 * @param {string} pluginName The name of the current plugin these rules belong to.
 * @param {array<object>} pluginRules The plugin rules that should be merged with the system rules.
 * @return {boolean} True or False to indicate if the merge was successful or not.
 * @author Seth Hollingsead
 * @date 2022/10/24
 */
async function addPluginRules(pluginName, pluginRules) {
  // let functionName = addPluginRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // pluginName is:
  // console.log(msg.cpluginNameIs + pluginName);
  // pluginRules is:
  // console.log(msg.cpluginRulesIs + JSON.stringify(pluginRules));
  let returnData = false;
  try {
    // if (D[sys.cbusinessRules][wrd.cplugins] === undefined) {
    //   D[sys.cbusinessRules][wrd.cplugins] = {};
    // }
    // D[sys.cbusinessRules][wrd.cplugins][pluginName] = {};
    // Object.assign(D[sys.cbusinessRules][wrd.cplugins][pluginName], pluginRules);
    // returnData = true;

    // NOTE: The business rules was never design to have a heirarchy storage, so when calling business rules,
    // its basically calling a flat list. So rather than adding the plugin rules according to the above structure.
    // We will need to just add them to the flat list. If a plugin is unloaded,
    // then each of its business rules will need to be individually searched out and removed from the flat list.
    // D-businessRules stack before merge is:
    // console.log(namespacePrefix + functionName + bas.cSpace + msg.cdBusinessRulesStackBeforeMergeIs, D[sys.cbusinessRules]);
    await Object.assign(D[sys.cbusinessRules], pluginRules[sys.cbusinessRules]);
    // D-businessRules stack after merge is:
    // console.log(namespacePrefix + functionName + bas.cSpace + msg.cdBusinessRulesStackAfterMergeIs, D[sys.cbusinessRules]);
    returnData = true;
  } catch (err) {
    // ERROR: Failure to merge the plugin rules for plugin:
    console.log(msg.cErrorAddPluginRulesMessage01 + pluginName);
    console.log(msg.cERROR_Colon + err);
  }
  // console.log(msg.creturnDataIs + returnData);
  // console.log(`END ${namespacePrefix}${functionName}`);
  return returnData;
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
      if (await Object.prototype.hasOwnProperty.call(rulesToExecute, rule) && rule != biz.cprocessRulesInternal) {
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

/**
 * @function removePluginBusinessRules
 * @description Parses through the business rules and finds the business rules associated with the named plugin.
 * Then removes that data shredding it from existence at the edge of a black hole.
 * @param {string} pluginName The name of the plugin that should have its business rules removed from the D-data structure.
 * @return {boolean} True or False to indicate if the removal of the data was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/01
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function removePluginBusinessRules(pluginName) {
  // let functionName = removePluginBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // pluginName is:
  // console.log(msg.cpluginNameIs + pluginName);
  let returnData = false;
  let allBusinessRules = D[sys.cbusinessRules];
  // NOTE: We are going to have to get the names of the individual business rules for the plugin,
  // from the plugin constants validation for business rules,
  // then iterate over them to remove all of the plugin business rules one by one.
  let pluginConstantsValidation = D[sys.cConstantsValidationData][wrd.cPlugins][pluginName];
  let pluginConstantsValidationBusinessRules = {};
  if (pluginConstantsValidation) {
    pluginConstantsValidationBusinessRules = pluginConstantsValidation[sys.cpluginBusinessConstantsValidation];
  } else {
    // ERROR: Constants validation data for the specified plugin was not found. Plugin:
    console.log(msg.cremovePluginBusinessRulesMessage01 + pluginName);
  }
  if (pluginConstantsValidationBusinessRules) {
    try {
      for (const pluginBusinessRuleKey in pluginConstantsValidationBusinessRules) {
        let pluginBusinessRuleConstValidationObject = pluginConstantsValidationBusinessRules[pluginBusinessRuleKey];
        // pluginBusinessRuleConstValidationObject is:
        // console.log(msg.cpluginBusinessRuleConstValidationObjectIs + JSON.stringify(pluginBusinessRuleConstValidationObject));
        // Removing plugin business rule:
        // console.log(msg.cremovePluginBusinessRulesMessage02 + pluginBusinessRuleConstValidationObject[wrd.cActual]);
        delete allBusinessRules[pluginBusinessRuleConstValidationObject[wrd.cActual]];
      }
      returnData = true;
    } catch (err) {
      // ERROR: Failure attempting to delete the plugin business rules for plugin:
      console.log(msg.cremovePluginBusinessRulesMessage03 + pluginName);
      console.log(msg.cerrorMessage + err.message);
    }
  } else {
    // ERROR: Plugin business rule constants validation data for the specified plugin was not found. Plugin:
    console.log(msg.cremovePluginBusinessRulesMessage04 + pluginName);
  }
  // console.log(msg.creturnDataIs + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  bootStrapBusinessRules,
  resetBusinessRules,
  addClientRules,
  addPluginRules,
  processRules,
  removePluginBusinessRules
};