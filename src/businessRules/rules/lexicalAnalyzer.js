/**
 * @file lexicalAnalyzer.js
 * @module lexicalAnalyzer
 * @description Contains all functions used for parsing command arguments and/or business rule argumetns.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/03
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from './ruleParsing.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.lexicalAnalyzer.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseBusinessRuleArgument
 * @description Parses a single business rule argument and returns it after cleaning it up or
 * doing required operations on it to convert it to valid input for a command as necessary.
 * @param {string|array<string|integer|boolean|object>} inputData The value of the argument, could be an array or a string.
 * @param {integer} inputMetaData The index of the argument (1, 2, 3, 4).
 * @return {string|array<string|integer|boolean|object>} The value of the argument as it should be passed into the business rule call.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function parseBusinessRuleArgument(inputData, inputMetaData) {
  let functionName = parseBusinessRuleArgument.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // console.log(msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  // console.log(msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;

  if (inputMetaData === 1) {
    // Pushing the inputData to the returnData as an array element
    await loggers.consoleLog(namespacePrefix + functionName, msg.cPushingArgumentValueToReturnDataAsArrayElement);
    // console.log(msg.cPushingArgumentValueToReturnDataAsArrayElement);
    returnData = [];
    returnData.push(inputData);
  } else {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndexIs + inputMetaData);
    // console.log(msg.cCallingAnalyzeArgumentIndexIs + inputMetaData);
    returnData = await analyzeArgument(inputData, '');
    // } else if (inputMetaData === 2 && consolidatedArgumentMode === true) {
    //   // Calling analyzeArgument for inputMetaData = 2, consolidatedArgumentMode = true
    //   loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue);
    //   if (inputData.length > 0) {
    //     returnData = [];
    //     // inputData.length > 0
    //     loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueLengthGreaterThanZero);
    //     for (let i = 1; i < inputData.length; i++) {
    //       // Combine all arguments into a single array on the returnData
    //       returnData.push(inputData[i]);
    //     } // End-for (let i = 1; i < inputData.length; i++)
    //   } else {
    //     // Return the inputData the same as it was passed in.
    //     loggers.consoleLog(namespacePrefix + functionName, msg.cReturnArgumentValueSameAsItWasPassedIn);
    //     returnData = inputData;
    //   }
    // } else if (inputMetaData === 3 && consolidatedArgumentMode === false) {
    //   // Calling analyzeArgument for inputMetaData = 3, consolidatedArgumentMode = false
    //   loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse);
    //   returnData = analyzeArgument(inputData);
    // } else {
    //   // WARNING: lexical.parseBusinessRuleArgument: invalid combination of inputs to the lexical.parseBusinessRuleArgument function! Pleae adjust inputs and try again.
    //   console.log(msg.cparseBusinessRuleArgumentMessage1 + msg.cparseBusinessRuleArgumentMessage2);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function analyzeArgument
 * @description Does additional parsing of an individual argument.
 * Identifies the case that the argument needs to be treated as an array,
 * then the function will clean the array string tags and split the string into an array and return it.
 * This function can also identify the case that an argument contains a regular expression that must be formally created,
 * using the RegExp constructor, then the RegExp object will be returned as part of the return object.
 * @param {string} inputData The argument string that needs additional parsing.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string|array<string|integer|boolean|object>} The argument that should be returned and sued by the system after all necessary parsing.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function analyzeArgument(inputData, inputMetaData) {
  let functionName = analyzeArgument.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // console.log(msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  // console.log(msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let argsArrayContainsCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;

  let secondaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let tertiaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
  let argsArrayContainsOpenBracket = await ruleParsing.processRulesInternal([bas.cOpenBracket, inputData], argsArrayContainsCharacterRule);
  let argsArrayContainsCloseBracket = await ruleParsing.processRulesInternal([bas.cCloseBracket, inputData], argsArrayContainsCharacterRule);
  if (inputData.includes(secondaryCommandArgsDelimiter) === true ||
  inputData.includes(tertiaryCommandArgsDelimiter) === true) {
    // Check if there are brackets or no brackets.
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereAreBracketsOrNoBrackets);
    // console.log(msg.cCheckIfThereAreBracketsOrNoBrackets);
    if (argsArrayContainsOpenBracket === false || argsArrayContainsCloseBracket === false) {
      // Brackets were not found
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsWereNotFound);
      // console.log(msg.cBracketsWereNotFound);
      // Check if there is a regular expression or not.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
      // console.log(msg.cCheckIfThereIsRegularExpressionOrNot);
      if (analyzeForRegularExpression(inputData, '') === true) {
        // A regular expression was found!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
        // console.log(msg.cRegularExpressionWasFound);
        returnData = await parseArgumentAsRegularExpression(inputData, '');
      } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
        // No RegExp found!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
        // console.log(msg.cNoRegExpFound);
        returnData = inputData;
      }
    } else {
      // There are Brackets, so treat the argument as an array.
      // Brackets ARE found!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsAreFound);
      // console.log(msg.cBracketsAreFound);
      returnData = await parseArgumentAsArray(inputData, '');
    }
  } else { // The inputData does not contain a secondaryCommandArgsDelimiter
    // NO secondary command argument delimiters.
    await loggers.consoleLog(namespacePrefix + functionName, msg.cNoSecondaryCommandArgumentDelimiters);
    // console.log(msg.cNoSecondaryCommandArgumentDelimiters);
    if (argsArrayContainsOpenBracket === false || argsArrayContainsCloseBracket === false) {
      // Brackets were not found
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsWereNotFound);
      // console.log(msg.cBracketsWereNotFound);
      // Check if there is a Regular Expression or not.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
      // console.log(msg.cCheckIfThereIsRegularExpressionOrNot);
      if (analyzeForRegularExpression(inputData, '') === true) {
        // A regular expression was found!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
        // console.log(msg.cRegularExpressionWasFound);
        returnData = await parseArgumentAsRegularExpression(inputData, '');
      } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
        // NO RegExp found!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
        // console.log(msg.cNoRegExpFound);
        returnData = inputData;
      }
    } else {
      // There are Brackets, so treat the argument as an array.
      // Brackets ARE found!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsAreFound);
      // console.log(msg.cBracketsAreFound);
      returnData = await parseArgumentAsArray(inputData, '');
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`BEGIN ${namespacePrefix}{functionName} function`);
  return returnData;
}

/**
 * @function analyzeForRegularExpression
 * @description Analyzes the argument value to determine if it incudes a regular expression or no regular expression.
 * @param {string} inputData The business rule argument that should be analyzed to determine if it includes a regular expression or not regular expression.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the argument contains a regular expression or no regular expression.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function analyzeForRegularExpression(inputData, inputMetaData) {
  let functionName = analyzeForRegularExpression.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  let argsArrayContainsCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  let argsArrayContainsRegEx1 = await ruleParsing.processRulesInternal([wrd.cregEx, [inputData]], argsArrayContainsCharacterRule);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsRegEx1Is + argsArrayContainsRegEx1);
  let argsArrayContainsRegEx2 = await ruleParsing.processRulesInternal([wrd.cRegEx, [inputData]], argsArrayContainsCharacterRule);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsRegEx2Is + argsArrayContainsRegEx2);
  let argsArrayContainsColon = await ruleParsing.processRulesInternal([bas.cColon, [inputData]], argsArrayContainsCharacterRule);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsColonIs + argsArrayContainsColon);
  if ((argsArrayContainsRegEx1 === true || argsArrayContainsRegEx2 === true) && argsArrayContainsColon === true) {
    returnData = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function parseArgumentAsRegularExpression
 * @description Parses the argument as a regular expression and returns a new RegExp object.
 * @param {string} inputData The argument string that should be parsed as a RegExp.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} A RegExp object.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function parseArgumentAsRegularExpression(inputData, inputMetaData) {
  let functionName = parseArgumentAsRegularExpression.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [];
  let regExValue, regExFlags;
  let regExArray = inputData.split(bas.cColon);
  for (let k = 0; k < regExArray.length; k++) {
    if (regExArray[k] === wrd.cregEx || regExArray[k] === wrd.cRegEx) {
      k++;
      // regular expression is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionIs + regExArray[k]);
      regExValue = regExArray[k];
      // regExValue is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cregExValueIs + regExValue);
    } else if (regExArray[k] === wrd.cflags || regExArray[k] === wrd.cFlags) {
      k++;
      // regular expression flags are:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionFlagsAre + regExArray[k]);
      regExFlags = regExArray[k];
      // regExFlags is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cregExFlagsIs + regExFlags);
    }
  } // End-for (let k = 0; k < regExArray.length; k++)
  let regularExpression;
  if (regExValue !== undefined && regExFlags === undefined) {
    regularExpression = new RegExp(regExValue);
  } else if (regExValue !== undefined && regExFlags !== undefined) {
    regularExpression = new RegExp(regExValue, regExFlags);
  } else {
    regularExpression = new RegExp(regExValue);
  }
  returnData = regularExpression;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function parseArgumentAsArray
 * @description Parses teh argument as an array and return the array.
 * @param {string} inputData A string that contains an array, we will use the
 * secondary command delimiter to split the string into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} An array of strings.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function parseArgumentAsArray(inputData, inputMetaData) {
  let functionName = parseArgumentAsArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // console.log(msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  // console.log(msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let argumentValue = inputData;
  let isArray = false;
  let secondaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  let utilitiesReplaceCharacterWithCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;
  utilitiesReplaceCharacterWithCharacterRule[0] = biz.cutilitiesReplaceCharacterWithCharacter;
  let argsArrayContainsOpenBracket = false;
  let argsArrayContainsCloseBracket = false;
  if (Array.isArray(argumentValue) === true) {
    argsArrayContainsOpenBracket = await ruleParsing.processRulesInternal([bas.cOpenBracket, argumentValue], argsArrayContainsCharacterRule);
    argsArrayContainsCloseBracket = await ruleParsing.processRulesInternal([bas.cCloseBracket, argumentValue], argsArrayContainsCharacterRule);
    isArray = true;
  } else {
    argsArrayContainsOpenBracket = argumentValue.includes(bas.cOpenBracket);
    argsArrayContainsCloseBracket = argumentValue.includes(bas.cCloseBracket);
    isArray = false;
  }

  if (isArray === false) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      // console.log(msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      argumentValue = argumentValue.split(secondaryCommandArgsDelimiter);
      // Re-evaluate to determine if additional actions are necessary or not.
      argsArrayContainsOpenBracket = await ruleParsing.processRulesInternal([bas.cOpenBracket, argumentValue], argsArrayContainsCharacterRule);
      argsArrayContainsCloseBracket = await ruleParsing.processRulesInternal([bas.cCloseBracket, argumentValue], argsArrayContainsCharacterRule);
      isArray = true;
    } // End-if (argumentValue.includes(secondaryCommandArgsDelimiter) === true)
  } // End-if (isArray === false)
  if (argsArrayContainsOpenBracket === true) {
    if (isArray === true) {
      argumentValue = await ruleParsing.processRulesInternal([bas.cOpenBracket, argumentValue], removeBracketsFromArgsArrayRule);
    } else {
      argumentValue = await ruleParsing.processRulesInternal([argumentValue, [bas.cOpenBracket, '']], utilitiesReplaceCharacterWithCharacterRule);
    }
    // argumentValue after attempting to remove a open bracket from all array elements is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
    // console.log(msg.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
  } // End-if (argsArrayContainsOpenBracket === true)
  if (argsArrayContainsCloseBracket === true) {
    if (isArray === true) {
      argumentValue = await ruleParsing.processRulesInternal([bas.cCloseBracket, argumentValue], removeBracketsFromArgsArrayRule);
    } else {
      argumentValue = await ruleParsing.processRulesInternal([argumentValue, [bas.cCloseBracket, '']], utilitiesReplaceCharacterWithCharacterRule);
    }
    // argumentValue after attempting to remove a close bracket from all array elements is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
    // console.log(msg.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
  } // End-if (argsArrayContainsCloseBracket === true)
  // secondaryCommandArgsDelimiter is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandArgsDelimiterIs + secondaryCommandArgsDelimiter);
  // console.log(msg.csecondaryCommandArgsDelimiterIs + secondaryCommandArgsDelimiter);
  if (isArray === true) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      // console.log(msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      argumentValue = argumentValue.split(secondaryCommandArgsDelimiter);
    } // End-if (argumentValue.includes(secondaryCommandArgsDelimiter) === true)
    returnData = argumentValue;
  } else {
    returnData = [argumentValue];
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function removeStringLiteralTagsFromArray
 * @description Removes all string literal tags from all the argument array elements passed as input to the function.
 * @param {array<string>} inputData The argument array that should have the string literal tags removed.
 * The string literal tag is the tilde character: "~"
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} Teh same as the input, but just with the string literal tags removed from all array elements.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
async function removeStringLiteralTagsFromArray(inputData, inputMetaData) {
  let functionName = removeStringLiteralTagsFromArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  returnData = await ruleParsing.processRulesInternal([bas.cTilde, inputData], [biz.cremoveCharacterFromArray]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  parseBusinessRuleArgument,
  analyzeArgument,
  analyzeForRegularExpression,
  parseArgumentAsRegularExpression,
  parseArgumentAsArray,
  removeStringLiteralTagsFromArray
};
