/**
 * @file commandStringParsing.js
 * @module commandStringParsing
 * @description Contains all system defined business rules for parsing strings
 * with specific focus on command string parsing.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.commandStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function cleanCommandInput
 * @description Removes any "--" from the command to make it a valid command.
 * @param {string} inputData The string that should have the "--" removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input, but with the "--" removed.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function cleanCommandInput(inputData, inputMetaData) {
  let functionName = cleanCommandInput.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = await ruleParsing.processRulesInternal([inputData, [/--/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = await ruleParsing.processRulesInternal([returnData, [/\[/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = await ruleParsing.processRulesInternal([returnData, [/\]/g, '']], [biz.creplaceCharacterWithCharacter]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isValidCommandNameString
 * @description Determines if the command name is a valid command name or not.
 * @NOTE Not in the sense that it is checking if the command name exists in the system or not,
 * but is it formatted properly enough to be considered as a command name.
 * @param {string} inputData The string that should be evaluated if it is sufficiently formatted
 * such that it could qualify as a command name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is sufficiently formatted to be considered as a command name in the system.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function isValidCommandNameString(inputData, inputMetaData) {
  let functionName = isValidCommandNameString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // NOTE: The below call to convert the string to a camel-case array doesn't guarantee that the string is actually camel-case.
    // It could actually be a single word, but of course we want to make sure it's more than 3 characters long.
    // Less than that, shouldn't really be considered a valid word, but could be appropriate as a command alias/abbreviation.
    if (inputData.length > 3) {
      let camelCaseArray = await ruleParsing.processRulesInternal([inputData, ''], [biz.cconvertCamelCaseStringToArray]);
      if (camelCaseArray.length === 1) {
        if (await ruleParsing.processRulesInternal([inputData, ''], [biz.cisFirstCharacterLowerCase]) === true) { returnData = true; }
      } else if (camelCaseArray.length > 1) {
        if (await ruleParsing.processRulesInternal([inputData, ''], [biz.cisStringCamelCase]) === true) { returnData = true; }
      }
    } // End-if (inputData.length > 3)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  cleanCommandInput,
  isValidCommandNameString
};
