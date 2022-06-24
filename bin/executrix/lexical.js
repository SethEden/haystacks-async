/**
 * @file lexical.js
 * @module lexical
 * @descriptionContains all functions used for parsing command arguments and/or business rule arguments.
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/03
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import configurator from './configurator.js';
import loggers from './loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.lexical.
const namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseBusinessRuleArgument
 * @description Parses a single business rule argument and returns it after cleaning it up or
 * doing required operations on it to convert it to valid input for a command as necessary.
 * @param {string|array<string|integer|boolean|object>} argumentValue The value of the argument, could be an array or a string.
 * @param {integer} index The index of the argument (1, 2, 3, 4).
 * @return {string|array<string|integer|boolean|object>} The value of the argument as it shold be passed into the business rule call.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function parseBusinessRuleArgument(argumentValue, index) {
  let functionName = parseBusinessRuleArgument.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  // index is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
  let returnData;

  if (index === 1) {
    // Pushing the argumentValue to the returnData as an array element
    loggers.consoleLog(namespacePrefix + functionName, msg.cPushingArgumentValueToReturnDataAsArrayElement);
    returnData = [];
    returnData.push(argumentValue);
  } else {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
    loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndexIs + index);
    returnData = analyzeArgument(argumentValue);
  // } else if (index === 2 && consolidatedArgumentMode === true) {
  //   // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
  //   loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue);
  //   if (argumentValue.length > 0) {
  //     returnData = [];
  //     // argumentValue.length > 0
  //     loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueLengthGreaterThanZero);
  //     for (let i = 1; i < argumentValue.length; i++) {
  //       // Combine all arguments into a single array on the returnData
  //       returnData.push(argumentValue[i]);
  //     } // End-for (let i = 1; i < argumentValue.length; i++)
  //   } else {
  //     // Return the argumentValue the same as it was passed in.
  //     loggers.consoleLog(namespacePrefix + functionName, msg.cReturnArgumentValueSameAsItWasPassedIn);
  //     returnData = argumentValue;
  //   }
  // } else if (index === 3 && consolidatedArgumentMode === false) {
  //   // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
  //   loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse);
  //   returnData = analyzeArgument(argumentValue);
  // } else {
  //   // WARNING: lexical.parseBusinessRuleArgument: invalid combination of inputs to the lexical.parseBusinessRuleArgument function! Pleae adjust inputs and try again.
  //   console.log(msg.cparseBusinessRuleArgumentMessage1 + msg.cparseBusinessRuleArgumentMessage2);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function analyzeArgument
 * @description Does additional parsing of an individual argument.
 * Identifies the case that the argument needs to be treated as an array,
 * then the function will clean the array string tags and split the sring into an array and return it.
 * This function can also identify the case that an argument contains a regular expression that must be formally created,
 * using the RegExp constructor, then the RegExp object will be returned as part of the return object.
 * @param {string} argumentValue The argument string that needs additional parsing.
 * @return {sring|array<string|integer|boolean|object>} The argument that should be returned and used
 * by the system after all necessary parsing.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function analyzeArgument(argumentValue) {
  let functionName = analyzeArgument.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData;
  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;

  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let tertiaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
  if (argumentValue.includes(secondaryCommandArgsDelimiter) === true ||
  argumentValue.includes(tertiaryCommandArgsDelimiter) === true) {
    // Check if there are brackets or no brackets.
    loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereAreBracketsOrNoBrackets);
    let argsArrayContainsOpenBracket = ruleBroker.processRules(bas.cOpenBracket, argumentValue, argsArrayContainsCharacterRule);
    let argsArrayContainsCloseBracket = ruleBroker.processRules(bas.cCloseBracket, argumentValue, argsArrayContainsCharacterRule);
    if (argsArrayContainsOpenBracket === false || argsArrayContainsCloseBracket === false) {
      // Brackets were found
      loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsWereFound);
      // Check if there is a Regular Expression or not.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
      if (analyzeForRegularExpression(argumentValue) === true) {
        // A regular expression was found!
        loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
        returnData = parseArgumentAsRegularExpression(argumentValue);
      } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
        // NO RegExp found!
        loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
        returnData = argumentValue;
      }
    } else {
      // There are Brackets, so treat the argument as an array.
      // Brackets ARE found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsAreFound);
      returnData = parseArgumentAsArray(argumentValue);
    }
  } else { // The argumentValue does not contain a secondaryCommandArgsDelimiter
    // NO secondary command argument delimiters.
    loggers.consoleLog(namespacePrefix + functionName, msg.cNoSecondaryCommandArgumentDelimiters);
    // Check if there is any regular expression or no regular expression.
    // Check if there is a Regular Expression or not.
    loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
    if (analyzeForRegularExpression(argumentValue) === true) {
      // A regular expression was found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
      returnData = parseArgumentAsRegularExpression(argumentValue);
    } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
      // NO RegExp found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
      returnData = argumentValue;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function analyzeForRegularExpression
 * @description Analyzes the argument value to determine if it includes a regular expression or no regular expression.
 * @param {string} argumentValue The business rule argument that should be analyzed to determine if it includes a regular expression or no regular expression.
 * @return {boolean} True or False to indicate if the argument contains a regular expression or no regular expression.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function analyzeForRegularExpression(argumentValue) {
  let functionName = analyzeForRegularExpression.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData = false;
  let argsArrayContainsCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  let argsArrayContainsRegEx1 = ruleBroker.processRules(wrd.cregEx, [argumentValue], argsArrayContainsCharacterRule);
  loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsRegEx1Is + argsArrayContainsRegEx1);
  let argsArrayContainsRegEx2 = ruleBroker.processRules(wrd.cRegEx, [argumentValue], argsArrayContainsCharacterRule);
  loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsRegEx2Is + argsArrayContainsRegEx2);
  let argsArrayContainsColon = ruleBroker.processRules(bas.cColon, [argumentValue], argsArrayContainsCharacterRule);
  loggers.consoleLog(namespacePrefix + functionName, msg.cargsArrayContainsColonIs + argsArrayContainsColon);
  if ((argsArrayContainsRegEx1 === true || argsArrayContainsRegEx2 === true) && argsArrayContainsColon === true) {
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function parseArgumentAsRegularExpression
 * @description Parses the argument as a regular expression and returns a new RegExp object.
 * @param {string} argumentValue The argument strign that should be parsed as a RegExp.
 * @return {object} A RegExp object.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function parseArgumentAsRegularExpression(argumentValue) {
  let functionName = parseArgumentAsRegularExpression.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData = [];
  let regExValue, regExFlags;
  let regExArray = argumentValue.split(bas.cColon);
  for (let k = 0; k < regExArray.length; k++) {
    if (regExArray[k] === wrd.cregEx || regExArray[k] === wrd.cRegEx) {
      k++;
      // regular expression is;
      loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionIs + regExArray[k]);
      regExValue = regExArray[k];
      // regExValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregExValueIs + regExValue);
    } else if (regExArray[k] === wrd.cflags || regExArray[k] === wrd.cFlags) {
      k++;
      // regular expression flags are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionFlagsAre + regExArray[k]);
      regExFlags = regExArray[k];
      // regExFlags is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregExFlagsIs + regExFlags);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function parseArgumentAsArray
 * @description Parses the argument as an array and return the array.
 * @param {string} argumentValue A string that contains an array, we will use the secondary command delimiter to split the array.
 * @return {array<string>} An array of strings.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
function parseArgumentAsArray(argumentValue) {
  let functionName = parseArgumentAsArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData;
  let isArray = false;
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;
  let argsArrayContainsOpenBracket = false;
  let argsArrayContainsCloseBracket = false;
  if (Array.isArray(argumentValue) === true) {
    argsArrayContainsOpenBracket = ruleBroker.processRules(bas.cOpenBracket, argumentValue, argsArrayContainsCharacterRule);
    argsArrayContainsCloseBracket = ruleBroker.processRules(bas.cCloseBracket, argumentValue, argsArrayContainsCharacterRule);
    isArray = true;
  } else {
    argsArrayContainsOpenBracket = argumentValue.includes(bas.cOpenBracket);
    argsArrayContainsCloseBracket = argumentValue.includes(bas.cCloseBracket);
    isArray = false;
  }

  if (isArray === false) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      argumentValue = argumentValue.split(secondaryCommandArgsDelimiter);
    } // End-if (argumentValue.includes(secondaryCommandArgsDelimiter) === true)
  } // End-if (isArray === false)
  if (argsArrayContainsOpenBracket === true) {
    argumentValue = ruleBroker.processRules(bas.cOpenBracket, argumentValue, removeBracketsFromArgsArrayRule);
    // argumentValue after attempting to remove a open bracket from all array elements is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs + JSON.stringify(argumentValue));
  } // End-if (argsArrayContainsOpenBracket === true)
  if (argsArrayContainsCloseBracket === true) {
    argumentValue = ruleBroker.processRules(bas.cCloseBracket, argumentValue, removeBracketsFromArgsArrayRule);
    // argumentValue after attempting to remove a close bracket from all array elements is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArayElementsIs + JSON.stringify(argumentValue));
  } // End-if (argsArrayContainsCloseBracket === true)
  // secondaryCommandArgsDelimiter is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandArgsDelimiterIs + secondaryCommandArgsDelimiter);
  if (isArray === true) {
    if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
      // argumentValue contains the delimiter, lets split it!
      loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueContainsTheDelimiterLetsSplitIt);
      returnData = argumentValue.split(secondaryCommandArgsDelimiter);
    } // End-if (argumentValue.includes(secondaryCommandArgsDelimiter) === true)
  } else {
    returnData = argumentValue;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeStringLiteralTagsFromArray
 * @description Removes all string literal tags from all the argument array elements passed as input to the function.
 * @param {array<string>} argumentArray The argument array that should have the string iteral tags removed.
 * The string iteral tag is the tilde character.
 * @return {array<string>} The same as the input, but just with the string literal tags removed from all array elements.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
function removeStringLiteralTagsFromArray(argumentArray) {
  let functionName = removeStringLiteralTagsFromArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentArray is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentArrayIs + JSON.stringify(argumentArray));
  let returnData;
  let removeCharacterRule = [];
  removeCharacterRule[0] = biz.cremoveCharacterFromArray;
  returnData = ruleBroker.processRules(bas.cTilde, argumentArray, removeCharacterRule);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  [fnc.cparseBusinessRuleArgument]: (argumentValue, index, consolidatedArgumentMode) => parseBusinessRuleArgument(argumentValue, index, consolidatedArgumentMode),
  [fnc.canalyzeArgument]: (argumentValue) => analyzeArgument(argumentValue),
  [fnc.canalyzeForRegularExpression]: (argumentValue) => analyzeForRegularExpression(argumentValue),
  [fnc.cparseArgumentAsRegularExpression]: (argumentValue) => parseArgumentAsRegularExpression(argumentValue),
  [fnc.cparseArgumentAsArray]: (argumentValue) => parseArgumentAsArray(argumentValue),
  [fnc.cremoveStringLiteralTagsFromArray]: (argumentArray) => removeStringLiteralTagsFromArray(argumentArray)
};
