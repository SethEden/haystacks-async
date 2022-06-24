// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * Excluding functions that cannot use the loggers.
 * @requires module:arrayParsing
 * @requires module:stringParsingUtilities
 * @requires module:colorizer
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires module:timers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/n-readlines|n-readlines}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import arrayParsing from './arrayParsing.js';
import stringParsingUtilities from './stringParsingUtilities.js';
import colorizer from '../../executrix/colorizer.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import loggers from '../../executrix/loggers.js';
import timers from '../../executrix/timers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import lineByLine from 'n-readlines';
import * as math from 'mathjs';
import path from 'path';

const {bas, clr, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
* @function singleQuoteSwapAfterEquals
* @description Swaps single quote characters in the middle of the string wih double quote characters n the middle of the string.
* input: 'inut[name='emailAddress'][class='username']'
* output: 'input[name="emailAddress"][class="username"]'
* @param {string} inputData A string that contains text with single quotes that should be swapped for double quotes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} A string that contains text where single quotes have been exchanged for double quotes.
* @author Seth Hollingsead
* @date 2021/10/28
*/
const singleQuoteSwapAfterEquals = function(inputData, inputMetaData) {
  let functionName = singleQuoteSwapAfterEquals.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData.includes(bas.cSingleQuote) === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, bas.cDoubleQuote);
      // Next replace the first and last double quote with single quote.
      if (returnData.indexOf(bas.cDoubleQuote) === 0) {
        returnData = inputData.replace(bas.cDoubleQuote, bas.cSingleQuote);
      }
      if (returnData.charAt(returnData.length - 1) === bas.cDoubleQuote) {
        returnData = returnData.slice(0, -1) + bas.cSingleQuote;
      }
    } else {
      returnData = inputData;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapForwardSlashToBackSlash
* @description Swaps all forward slash characters in a string for back slash characters.
* @param {string} inputData String that might contain some forward slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all forward slash characters
* swapped for back slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
const swapForwardSlashToBackSlash = function(inputData, inputMetaData) {
  let functionName = swapForwardSlashToBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\//g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapBackSlashToForwardSlash
* @description Swaps all back slash characters in a string for forward slash characters.
* @param {string} inputData String that might contains some back slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all back slash characters
* swapped for forward slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
const swapBackSlashToForwardSlash = function(inputData, inputMetaData) {
  let functionName = swapBackSlashToForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapDoubleForwardSlashToSingleForwardSlash
* @description Swaps all double forward slash characters for sinle forward slash characters.
* @param {string} inputData String that might contain some double forward slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all double forward slash characters
* swapped for single forward slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
const swapDoubleForwardSlashToSingleForwardSlash = function(inputData, inputMetaData) {
  let functionName = swapDoubleForwardSlashToSingleForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapDoubleBackSlashToSingleBackSlash
* @description Swaps all double back slash characters for single back slash characters.
* @param {string} inputData String that might contain some double back slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all duble back slash characters
* swapped for single back slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
const swapDoubleBackSlashToSingleBackSlash = function(inputData, inputMetaData) {
  let functionName = swapDoubleBackSlashToSingleBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\\\/g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const getUserNameFromEmail = function(inputData, inputMetaData) {
  let functionName = getUserNameFromEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cIndexOfTheSpace + bas.cAt +
      sys.cSpaceIsColonSpace + inputData.indexOf(bas.cAt));
    returnData = inputData.substr(0, inputData.indexOf(bas.cAt));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param {string} inputData A string that contains spaces that should be converted to plus symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const replaceSpacesWithPlus = function(inputData, inputMetaData) {
  let functionName = replaceSpacesWithPlus.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/ /g, bas.cPlus);
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/ /g, bas.cPlus]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols.
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input String but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const replaceColonWithUnderscore = function(inputData, inputMetaData) {
  let functionName = replaceColonWithUnderscore.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/:/g, bas.cUnderscore);
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/:/g, bas.cUnderscore]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function cleanCarriageReturnFromString
 * @desription Cleans carriage return characters from the input data and trims off any leading or training spaces.
 * @param {string} inputData The string that should be scrubbed for carriage returns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const cleanCarriageReturnFromString = function(inputData, inputMetaData) {
  let functionName = cleanCarriageReturnFromString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/\s+/g, bas.cSpace);
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\s+/g, bas.cSpace]).trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToLowerCase
 * @description Converts the input String to the same string but with no upper case letters.
 * @param {string} inputData The string that should have all upper case letters changed to lower case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const convertStringToLowerCase = function(inputData, inputMetaData) {
  let functionName = convertStringToLowerCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toLowerCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param {string} inputData The string that should have all lower case letters changed to upper case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const convertStringToUpperCase = function(inputData, inputMetaData) {
  let functionName = convertStringToUpperCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toUpperCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param {string} inputData The string that should have all the folders and path removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const getFileNameFromPath = function(inputData, inputMetaData) {
  let functionName = getFileNameFromPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // Clean the path string for any double slashes.
    if (inputData.includes(bas.cDoubleForwardSlash)) {
      inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
    }
    if (inputData.includes(bas.cForwardSlash)) {
      inputData = swapForwardSlashToBackSlash(inputData, '');
    }
    // inputData right before processing is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataRightBeforeProcessingIs + inputData);
    returnData = inputData.split(bas.cBackSlash).pop().trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFileExtension
 * @description Parses the file name and it may or may not also include the full path,
 * but regardless it gets the file extension of the file.
 * @param {string} inputData The string that should contain the file name to which we want to get the file extension from.
 * @param {string} inputMetaData Not sued for this business rule.
 * @return {string} The file extension such as txt, xml, csv, etc...
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const getFileExtension = function(inputData, inputMetaData) {
  let functionName = getFileExtension.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = path.extname(inputData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeDotFromFileExtension
 * @description Removes the Dot from the file extension.
 * example: If the input is ".txt", the return value will just be "txt".
 * @param {string} inputData The string that should contain the file extension that is being modified.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension without the dot prefix.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const removeDotFromFileExtension = function(inputData, inputMetaData) {
  let functionName = removeDotFromFileExtension.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.substring(1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param {string} inputData The string that should have all the characters after the last period in the file name removed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same input string but without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const removeFileExtensionFromFileName = function(inputData, inputMetaData) {
  let functionName = removeFileExtensionFromFileName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignmet operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assinment operator.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const getValueFromAssignmentOperationString = function(inputData, inputMetaData) {
  let functionName = getValueFromAssignmentOperationString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let parsedString = inputData.split(bas.cEqual);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c1 + msg.cSpaceIsColonSpace + parsedString[0]);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c2 + msg.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param {string} inputData String 1 to compare.
 * @param {string} inputMetaData String 2 to compare.
 * @return {integer} The delta difference between the two strings, expressed as a number.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const aggregateNumericalDifferenceBetweenTwoStrings = function(inputData, inputMetaData) {
  let functionName = aggregateNumericalDifferenceBetweenTwoStrings.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = -1;
  if (inputData && inputMetaData) {
    // Convert the input strings to lower case and clean them up for parsing.
    let string1 = inputData.toLowerCase().replace(/\W/g, '');
    let string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.cstring1Is + string1);
    loggers.consoleLog(namespacePrefix + functionName, msg.cstring2Is + string2);

    // Build some arrays of variations on string 2, we will use these for doing the comparisons.
    let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
    let variation1 = Array(string2.length + 1).fill(0);
    loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
    loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);

    for (let i = 0; i < string1.length; i++) {
      loggers.consoleLog(namespacePrefix + functionName, msg.ciValueIs + i);
      variation1[0] = i + 1;
      loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
      for (let j = 0; j < string2.length; j++) {
        loggers.consoleLog(namespacePrefix + functionName, msg.cjValueIs + j);
        let deletionCost = variation0[j + 1] + 1;
        let insertionCost = variation1[j] + 1;
        let substitutionCost;
        if (string1[i] === string2[j]) {
          substitutionCost = variation0[j];
        } else {
          substitutionCost = variation0[j] + 1;
        }
        loggers.consoleLog(namespacePrefix + functionName, msg.cdeletionCostIs + deletionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.cinsertionCostIs + insertionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.csubstitutionCostIs + substitutionCost);
        variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);
      } // End-for (let j = 0; j < string2.length; j++)
      let temp = variation1;
      variation1 = variation0;
      variation0 = temp;
    } // End-for (let i = 0; i < string1.length; i++)
    returnData = variation0[string2.length];
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function countCamelCaseWords
 * @description Takes a string in camelCase and returns the number of words that it contains based on camel case rules.
 * @param {string} inputData String to count words from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of camel case wrods found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 * @NOTE Based on the implementation for the business rule/function arrayParsing.convertCamelCaseStringToArray.
 */
const countCamelCaseWords = function(inputData, inputMetaData) {
  let functionName = countCamelCaseWords.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let caps = [];
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    }
    returnData = caps.length;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainAcronym
 * @description Scans a string and determiens if there are 2 or more immediately adjacent upper-case characters in the string.
 * Example: nodeJS where JS is an acronym for JavaScript.
 * @param {string} inputData The string that should be scanned to determine if it contains an acronym or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string contains an acronym.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const doesStringContainAcronym = function(inputData, inputMetaData) {
  let functionName = doesStringContainAcronym.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let lastCharacterWasUpperCase = false;
  let caps = [];
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      // if the last character was upper case and the current character is upper case,
      // then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function countDelimiterInString
 * @description Takes a string and returns the number of specified delimiters it contains.
 * @param {string} inputData String to count delimiters from.
 * @param {string} inputMetaData The delimiter that should be used when counting from the input string.
 * @return {integer} The number of delimiters found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE: https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
 */
const countDelimiterInString = function(inputData, inputMetaData) {
  let functionName = countDelimiterInString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    returnData = (inputData.split(inputMetaData).length - 1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineWordDelimiter
 * @description Determines what delimiter should e used to break a string up into words if possible.
 * @param {string} inputData The string that should be examined to determine what delimiter should be used to break it up into words.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The delimiter that should be used, or if camelCase then the function will return the string "CamelCase".
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const determineWordDelimiter = function(inputData, inputMetaData) {
  let functionName = determineWordDelimiter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let camelCaseWordCount = countCamelCaseWords(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseWordCountIs + camelCaseWordCount);
    let containsAcronym = doesStringContainAcronym(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccontainsAcronymIs + containsAcronym);
    let spacesCount = countDelimiterInString(inputData, bas.cSpace);
    loggers.consoleLog(namespacePrefix + functionName, msg.cspacesCountIs + spacesCount);
    let periodCount = countDelimiterInString(inputData, bas.cDot);
    loggers.consoleLog(namespacePrefix + functionName, msg.cperiodCountIs + periodCount);
    let dashCount = countDelimiterInString(inputData, bas.cDash);
    loggers.consoleLog(namespacePrefix + functionName, msg.cdashCountIs + dashCount);
    let comaCount = countDelimiterInString(inputData, bas.cComa);
    loggers.consoleLog(namespacePrefix + functionName, msg.ccomaCountIs + comaCount);
    let underscoreCount = countDelimiterInString(inputData, bas.cUnderscore);
    loggers.consoleLog(namespacePrefix + functionName, msg.cunderscoreCountIs + underscoreCount);
    let plusCount = countDelimiterInString(inputData, bas.cPlus);
    loggers.consoleLog(namespacePrefix + functionName, msg.cplusCountIs + plusCount);
    let percentCount = countDelimiterInString(inputData, bas.cPercent);
    loggers.consoleLog(namespacePrefix + functionName, msg.cpercentCountIs + percentCount);
    if (
      camelCaseWordCount > 0 &&
      containsAcronym === false &&
      spacesCount === 0 &&
      periodCount === 0 &&
      dashCount === 0 &&
      comaCount === 0 &&
      underscoreCount === 0 &&
      plusCount === 0 &&
      percentCount === 0) {
        returnData = sys.cCamelCase;
        // We haven't hit the case eyt where we need to differenciate between all these extra caes, and there are several of them.
        // We could have multiple acronyms in a word, or in multiple words that are camelCase.
        // Each of these could be really complex special cases.
        // If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
        // } else if (camelCaseWordCount > 1 && containsAcronym === false)
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount > 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cComa;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount > 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cUnderscore;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount > 0 && percentCount === 0) {
      returnData = bas.cPlus;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount > 0) {
      returnData = bas.cPercent;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cDetermineWordDelimiterMessage1 + msg.cDetermineWordDelimiterMessage2 +
      msg.cDetermineWordDelimiterMessage3 + msg.cDetermineWordDelimiterMessage4);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getWordCountInString
 * @description Gets the number of words in a string, it expects words to be
 * delimited by either camel-case, spaces, period, dash, underscore, plus or percent symbols.
 * @param {string} inputData The string that words should be counted from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of words that were found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const getWordCountInString = function(inputData, inputMetaData) {
  let functionName = getWordCountInString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let wordDelimiter = determineWordDelimiter(inputData, inputMetaData);
    if (wordDelimiter === sys.cCamelCase) {
      returnData = countCamelCaseWords(inputData, '');
    } else if (wordDelimiter !== '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordCountInStringMessage1 + msg.cGetWordCountInStringMessage2 + msg.cGetWordCountInStringMessage3);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainUpperCaseCharacter
 * @description Determines if the input string contains at least one upper case character or not.
 * @param {string} inputData The string that should be checked for upper case characters.
 * @param {string} inputMetaData Not used fro this business rule.
 * @return {boolean} True or False to indicate if the string contains
 * at least one upper case character or more, or not any upper case characters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const doesStringContainUpperCaseCharacter = function(inputData, inputMetaData) {
  let functionName = doesStringContainUpperCaseCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainLowerCaseCharacter
 * @description Determines if the input string contains at least one lower case character or not.
 * @param {string} inputData The string that should be checked for lower case characters.
 * @param {string} inputMetaData Not used fro this business rule.
 * @return {boolean} True or False to indicate if the string contains
 * at least one lower case character or more, or not any lower case characters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const doesStringContainLowerCaseCharacter = function(inputData, inputMetaData) {
  let functionName = doesStringContainLowerCaseCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterLowerCase
 * @description Determines if the first character of the string is a lower case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is lower case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is a lower case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const isFirstCharacterLowerCase = function(inputData, inputMetaData) {
  let functionName = isFirstCharacterLowerCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterUpperCase
 * @description Determines if the first character of the string is an upper case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is upper case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is an upper case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const isFirstCharacterUpperCase = function(inputData, inputMetaData) {
  let functionName = isFirstCharacterUpperCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isStringList
 * @description Determines if the input string is a list or not.
 * @param {string} inputData The string that should be checked if it is a list or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a list or not a list.
 * Using the list of system defned primary, secondary or tertiary command delimiters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const isStringList = function(inputData, inputMetaData) {
  let functionName = isStringList.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cTertiaryCommandDelimiter);
    if (inputData.ncludes(primaryCommandDelimiter) === true ||
    inputData.includes(secondaryCommandDelimiter) === true ||
    inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isStringCamelCase
 * @description Determines if an input string is a camel case string or not.
 * @param {string} inputData The string that should be checked for the camel case qualifications.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is camel case or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Even if we have an all upper case acronym at the end fo the camel case string,
 * the string itself is still considered camel case.
 * Valid Examples:
 * myParsedXML
 * fireflyWonder1996
 * wonderWomand1984
 * covidMedicalCase
 * aBc
 */
const isStringCamelCase = function(inputData, inputMetaData) {
  let functionName = isStringCamelCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let foundFirstCapitalLetter = false;
    // First make sure the string meets the basic qualifiecations of a camel case string.
    // 1. Does not contain underscore or dash word seperators.
    // 2. Contains at least 1 lower case letter or more.
    // 3. Contains at least 1 upper case letter or more.
    // 4. Has a lower case or upper case first letter of the first word.
    if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&
    doesStringContainLowerCaseCharacter(inputData, '') &&
    (isFirstCharacterLowerCase(inputData, '') || isFirstCharacterUpperCase(inputData, ''))) {
      for (let i = 1; i < inputData.length; i++) {
        // Now chck or the fnal qualification:
        // 3. Ensure that upper case letters are seperated by lower case letters
        // (numbers also allowed, but there should be at least some lower case letters)
        // NOTE: This for-loop is how we iterate over the characters of the string.

        // First we need to ok for the first upper case letter.
        if (foundFirstCapitalLetter === false) {
          if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficent evidence to prove this is a camel case string.
          }
        }
      } // End-for (let i = 1; i < inputData.length; i++)
    } // End-if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&...)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function mapWordToCamelCaseWord
 * @description Takes a string key and an indexed string value and maps the word to an upper case first letter word.
 * @param {string} inputData The string key/value that should be converted to a camel case word.
 * @param {string} inputMetaData The string index for the map to the value that should be used.
 * @return {string} A string where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const mapWordToCamelCaseWord = function(inputData, inputMetaData) {
  let functionName = mapWordToCamelCaseWord.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lower case,
 * with all digits and symbols and whitespace removed.
 * @param {string} inputData The string that should be simplified and consolidated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that has been simplified and consolidated by converting to lower case, removign all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE I think this function is not completely working as expected, probably something to do with that regular expression.
 * Input was: 11UpberDriver321CodeClearance0x#0000FF-akaBlue
 * Output was: upberdrivercodeclearanceffakablue
 */
const simplifyAndConsolidateString = function(inputData, inputMetaData) {
  let functionName = simplifyAndConsolidateString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    // returnData = inputData.toLowerCase().replace(/[\W]/g, '');
    returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData.toLowerCase().trim(), [/[^\w\s]/g, '']);
    returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(returnData, [/[\0-9]/g, '']);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A True or False value to indicate if the strings are virtually identical or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const compareSimplifiedAndConsolidatedStrings = function(inputData, inputMetaData) {
  let functionName = compareSimplifiedAndConsolidatedStrings.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    returnData = simplifyAndConsolidateString(inputData, '') === simplifyAndConsolidateString(inputMetaData, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in makign the file name comparison.
 * @return {boolean} A True or False value to indicate if the file names are equivalent.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const ascertainMatchingFilenames = function(inputData, inputMetaData) {
  let functionName = ascertainMatchingFilenames.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesMatch);
      returnData = true;
    } else {
      // Filenames do not match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesDoNotMatch);
      returnData = false;
    }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData the path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const validateConstantsDataValidation = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidation.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);

    while (line = liner.next()) {
      // constants line is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsLineIs + line.toString(gen.cascii));
      let lineInCode = line.toString(gen.cascii);
      let foundConstant = false;
      // TODO: This logic will need to change!!
      if (lineInCode.includes(sys.cexportconst) === true) {
        let lineArray = lineInCode.split(bas.cSpace);
        // lineArray[2] is
        loggers.consoleLog(namespacePrefix + functionName, msg.clineArray2Is + lineArray[2]);
        foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
        let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
        if (foundConstant === true) {
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            let passMessage = wrd.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage)
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true)
        } else { // Else-clause if (foundConstant === true)
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            let failMessage = wrd.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              failMessage = chalk.rgb(0,0,0)(failMessage);
              failMessage = chalk.bgRgb(255,0,0)(failMessage);
            }
            let qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + failMessage);
            // loggers.consoleLog(namespacePrefix + functionName, wrd.cFAIL + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL);
            let suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
            if (suggestedLineOfCode !== '') {
              if (colorizeLogsEnabled === true) {
                suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
              }
              // Suggested line of code is:
              console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
            } // End-if (suggestedLineOfCode !== '')
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualCosntantsValidationFailMessages) === true)
          foundAFailure = true;
        }
      } // End-if (lineInCode.includes(sys.cexportconst) === true)
    } // End-while (line = liner.next())
  } // End-if (inputData && inputMetaData)
  if (foundAFailure === false) {
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * The standard prefix that should be used in the code to referance that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string code that represents the method to referance a constants file in the code.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const determineConstantsContextQualifiedPrefix = function(inputData, inputMetaData) {
  let functionName = determineConstantsContextQualifiedPrefix.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let inputDataAsArray = inputData.split(bas.cDot);
    let constantsFileNames = D[sys.cConstantsValidationData][sys.cConstantsFileNames];
    let constantsShortNames = D[sys.cConstantsValidationData][sys.cConstantsShortNames];
    for (let key in constantsFileNames) {
      if (inputData === constantsFileNames[key]) {
        returnData = constantsShortNames[key];
      }
    } // End-for (let key in constantsFileNames)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested lin of code to ad to the appropriate constants vaidation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant file that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to referance the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const determineSuggestedConstantsValidationLineOfCode = function(inputData, inputMetaData) {
  let functionName = determineSuggestedConstantsValidationLineOfCode.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    returnData = inputData;
    // Input: cZZTopInternationalSuccess
    // Output: {Name: 'cZZTopInternationalSuccess', Actual: wrd.cZZTopInternationalSuccess, Expected: 'ZZTopInternationalSuccess'}
    if (inputData.charAt(0) === bas.cc) {
      let literalValue = inputData.substr(1);
      // `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + inputData +
        bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + inputMetaData +
        bas.cDot + inputData + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace +
        bas.cSingleQuote + literalValue + bas.cSingleQuote + bas.cCloseCurlyBrace;
    } else { // Else-clause if (inputData.charAt(0) === bas.cc)
      // 'ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.'
      console.log(msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constan definition can be found, or not found.
 * @param {string} inputData the constant definition that should be searched for.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const validateConstantsDataValidationLineItemName = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidationLineItemName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < D[sys.cConstantsValidationData][inputMetaData].length; i++) {
      let validationLineItem = D[sys.cConstantsValidationData][inputMetaData][i];
      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        }
      } // End-if (validationLineItem)
    } // End-for (let i = 0; i < D[sys.cConstantsValidationData][inputMetaData].length; i++)
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const doesConstantExist = function(inputData, inputMetaData) {
  let functionName = doesConstantExist.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = true;
          break loop1;
        }
      } // End-for (let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * @NOTE Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantType = function(inputData, inputMetaData) {
  let functionName = getConstantType.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey;
            // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?
            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + bas.cComa + constantTypeKey;
          }
        } // End-if (inputData === constantActualValue.Actual)
      } // End-for (let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantActualValue = function(inputData, inputMetaData) {
  let functionName = getConstantActualValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (isConstantTypeValid(inputMetaData, '') === true) {
      let constantTypeValues1 = D[sys.cConstantsValidationData][inputMetaData];
      // 1 constantsTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));
      let constantsKeys1 = Object.keys(constantTypeValues1);
      // 1 constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys1));
loop1:
      for (let i = 0; i < constantsKeys1.length; i++) {
        let constantKey1 = constantsKeys1[i];
        // 1 constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey1));
        let constantActualValue1 = constantTypeValues1[constantKey1];
        // 1 constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // End-for (let i = 0; i < constantsKeys1.length; i++)
    } else { // Else-clause if (isConstantTypeValid(inputMetaData, '') === true)
      let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
      // constantsTypesKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop2:
      for (let j = 0; j < constantsTypesKeys.length; j++) {
        let constantTypeKey = constantsTypesKeys[j];
        // constantTypeKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
        let constantTypeValues2 = D[sys.cConstantsValidationData][constantTypeKey];
        // 2 constantTypeValues is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));
        let constantsKeys2 = Object.keys(constantTypeValues2);
        // 2 constantsKeys is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys2));
loop3:
        for (let k = 0; k < constantsKeys2.length; k++) {
          let constantKey2 = constantsKeys2[k];
          // 2 constantKey is:
          loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey2));
          let constantActualValue1 = constantTypeValues2[constantKey2];
          // 1 constantActualValue is:
          loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
          if (inputData === constantActualValue1.Name) {
            returnData = constantActualValue1.Actual;
          }
        } // End-for (let k = 0; k < constantsKeys2.length; k++)
      } // End-for (let j = 0; j < constantsTypesKeys.length; j++)
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as.
 * Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantName = function(inputData, inputMetaData) {
  let functionName = getConstantName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // End-for ((let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const findConstantName = function(inputData, inputMetaData) {
  let functionName = findConstantName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(bas.cDot)) {
      returnData = inputData.substr(inputData.lastIndexOf(bas.cDot) + 1, inputData.length);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isConstantTypeValid
 * @description Determiens if a sring is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a
 * valid constant type/library that exists within the system or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const isConstantTypeValid = function(inputData, inputMetaData) {
  let functionName = isConstantTypeValid.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsShortNames = D[sys.cConstantsValidatinoData][sys.cConstantsShortNames];
    for (let key in constantsShortNames) {
      if (inputData === key || inputData === constantsShortNames[key]) {
        returnData = true;
        break;
      }
    } // End-for (let key in constantsShortNames)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const convertConstantTypeToConstantPrefix = function(inputData, inputMetaData) {
  let functionName = convertConstantTypeToConstantPrefix.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsPrefixData = D[sys.cConstantsValidationData][sys.cConstantsPrefix];
    for (let key in constantsPrefixData) {
      if (inputData === key) {
        returnData = constantsPrefixData[key];
      }
    } // End-for (let key in constantsPrefixData)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData the string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const constantsOptimizedFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = constantsOptimizedFulfillmentSystem.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantType = '';
  let constantName = '';
  if (inputData) {
    if (doesConstantExist(inputData, '') === false) {
      returnData = constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = getConstantType(inputData, true);
      constantName = getConstantName(inputData, '');
      let constantPrefix = convertConstantTypeToConstantPrefix(constantType, '');
      returnData = constantPrefix + constantName;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const constantsFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = constantsFulfillmentSystem.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  let constantType = '';
  if (inputData) {
    returnData = constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determien how many characters are being returned so we can
    // determine what portion of the string we need to continue processing with.
    constantName = findConstantName(returnData, '');
    // constantName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
    let constantValue = getConstantActualValue(constantName, '');
    // constantValue is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      loggers.consoleLog(namespacePrefix + functionName, msg.crecursivesu + recursiveSubString);
      returnData = returnData + bas.cSpace + bas.cPlus + bas.cSpace + constantsFulfillmentSystem(recursiveSubString, inputData);
    } // End-if (deltaLength != 0)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data
 * specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of
 * the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the validation passed for the
 * entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const validateConstantsDataValues = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValues.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    for (let i = 0; i < D[sys.cConstantsValidationData][inputData].length; i++) {
      passMessage = '';
      let validationLineItem = D[sys.cConstantsValidationData][inputData][i];
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          // PASS
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = wrd.cPASS + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(passMessage);
          }
        } else {
          // FAIL
          returnData = false;
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(255,0,0)(passMessage);
            }
            console.log(passMessage);
          }
        }
      } else { // Else-clause if (validationLineItem)
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        }
        console.log(passMessage);
      } // End else-clause if (validationLineItem)
    } // End-for (let i = 0; i < D[sys.cConstantsValidationData][inputData].length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isValidCommandNameString
 * @description Determines if the command name is a valid command name or not.
 * @NOTE Not in the sense that it is checking if the command name exists in the system or not,
 * but is it formatted properly enough to be considered as a command name.
 * @param {string} inputData The string that should be evaluated if it is sufficently formatted
 * such that it could qualify as a command name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is sufficently formatted to be considered as a command name in the system.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const isValidCommandNameString = function(inputData, inputMetaData) {
  let functionName = isValidCommandNameString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // NOTE: Teh beow call to convert the string to a camel-case array doesn't garantee that the string is actually camel-case.
    // It could actually be a single word, but of course we want to make sure it's more than 3 characters long.
    // Less than that, shouldn't really be considered a valid word, but could be appropriate as a command alias/abreviation.
    if (inputData.length > 3) {
      let camelCaseArray = arrayParsing.convertCamelCaseStringToArray(inputData, '');
      if (camelCaseArray.length === 1) {
        if (isFirstCharacterLowerCase(inputData, '') === true) { returnData = true; }
      } else if (camelCaseArray.length > 1) {
        if (isStringCamelCase(inputData, '') === true) { returnData = true; }
      }
    } // End-if (inputData.length > 3)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for thsi business rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const isConstantValid = function(inputData, inputMetaData) {
  let functionName = isConstantValid.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function countDuplicateCommandAliases
 * @description Counts the number of command aliases that match the input command alias.
 * @param {string} inputData Teh command alias that should have duplicates counted for.
 * @param {object} inputMetaData The data that contains all of the commans and command aliases,
 * we should use this to search for duplicate command aliases.
 * @return {integer} The count of command aliases that match the input command alias.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const countDuplicateCommandAliases = function(inputData, inputMetaData) {
  let functionName = countDuplicateCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = 0;
  let blackColorArray = colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let redColorArray = colorizer.getNamedColorData(clr.cRed, [255,0,0]);
  if (inputData && inputMetaData) {
loop1:
    for (let key1 in inputMetaData) {
      // key1 is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ckey1Is + key1);
      let currentCommand = inputMetaData[key1];
      // currentCommand is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
      let aliasList = currentCommand[wrd.cAliases];
      // aliasList is:
      loggers.consoleLog(namespacePrefix + functionName, msg.caliasListIs + aliasList);
      let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
      for (let j = 0; j < arrayOfAliases.length; j++) {
        // BEGIN j-th loop:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_jthLoop + j);
        let currentAlias = arrayOfAliases[j];
        // currentAlias is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
        if (currentAlias === inputData) {
          returnData = returnData + 1;
        }
        // duplicateAliasCount is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cduplicateAliasCountIs + returnData);
        // END j-th loop:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_jthLoop + j);
      } // End-for (let j = 0; j < arrayOfAliases.length; j++)
    } // End-for (let i = 0; i < inputMetaData.length; i++)
  } // End-if (inputData)
  if (returnData > 1) {
    // duplicateAliasCount is:
    let duplicateAliasCountMessage = msg.cduplicateAliasCountIs + returnData;
    duplicateAliasCountMessage = colorizer.colorizeMessageSimple(duplicateAliasCountMessage, blackColorArray, true);
    duplicateAliasCountMessage = colorizer.colorizeMessageSimple(duplicateAliasCountMessage, redColorArray, false);
    console.log(duplicateAliasCountMessage);
    // duplicate command alias is:
    let duplicateAliasCommandMessage = msg.cduplicateCommandAliasIs + inputData;
    duplicateAliasCommandMessage = colorizer.colorizeMessageSimple(duplicateAliasCommandMessage, blackColorArray, true);
    duplicateAliasCommandMessage = colorizer.colorizeMessageSimple(duplicateAliasCommandMessage, redColorArray, false);
    console.log(duplicateAliasCommandMessage);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

// ******************************************************
// The following functions are more domain specific
// ******************************************************

/**
 * @function getDataCatagoryFromDataContextName
 * @description Gets the data catagory from the context name, E.g. Input: Page_ProjectList, data catagory is 'Page'.
 * @param {string} inputData The data context name, which should also contain the data catagory seperated by underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getDataCatagoryFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getDataCatagoryFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagory = inputData.split(bas.cUnderscore);
    returnData = dataCatagory[0];
    // Data Catagory should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryShouldBe + dataCatagory[0]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getDataCatagoryDetailNameFromDataContextName
 * @description Gets the data catagory detail name from the context name, E.G. Input: Page_ProjectList, data catagory is 'ProjectList'.
 * @param {string} inputData The data context name, which should also contain the
 * data catagory and data catagory detail name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getDataCatagoryDetailNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getDataCatagoryDetailNameFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryDetailName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryDetailName[1];
    // Data Catagory Detail Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryDetailNameShouldBe + dataCatagoryDetailName[1]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param {string} inputData The data context name, which should also contain the
 * data catagory and data catagory detail name and keyword name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getKeywordNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getKeywordNameFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryKeywordName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryKeywordName[2];
    // Keyword Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cKeywordNameShouldBe + dataCatagoryKeywordName[2]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param {string} inputData The path that should have the number of folders removed.
 * @param {integer} inputMetaData The number of paths that should be removed from the input path.
 * @return {string} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const removeXnumberOfFoldersFromEndOfPath = function(inputData, inputMetaData) {
  let functionName = removeXnumberOfFoldersFromEndOfPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = inputData; // assign it to something so it shouldn't resolve as false, unless it gets set to false.
  if (inputData && stringParsingUtilities.isInteger(inputMetaData) === true) {
    let pathArray;
    let pathAsForwardSlash;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
      pathAsForwardSlash = true;
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
      pathAsForwardSlash = false;
    } else {
      pathAsForwardSlash = false;
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        // current path element is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentPathElementIs + pathArray[i]);
        if (i === 0) {
          returnData = pathArray[i];
        } else {
          if (pathAsForwardSlash === true) {
            returnData = returnData + bas.cForwardSlash + pathArray[i];
          } else if (pathAsForwardSlash === false) {
            returnData = returnData + bas.cBackSlash + pathArray[i];
          } else {
            returnData = false;
            break;
          }
        } // End-else-clause if (i === 0)
      } // End-for(let i = 0; i <= pathArray.length - inputMetaData - 1; i++)
      // We still need a trailing slash
      if (pathAsForwardSlash === true) {
        returnData = returnData + bas.cForwardSlash;
      } else if (pathAsForwardSlash === false) {
        returnData = returnData + bas.cBackSlash;
      } else {
        returnData = false;
      }
    } // End-if (returnData !== false)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFirstTopLevelFolderFromPath
 * @description Takes a path and returns the folder at the farthest right of that path.
 * @param {string} inputData The path that should be evaluated.
 * @param {string} inputMetaData Not used fore this business rule.
 * @return {string} The folder at the far-right of the input path.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const getFirstTopLevelFolderFromPath = function(inputData, inputMetaData) {
  let functionName = getFirstTopLevelFolderFromPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let pathArray;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
    } else {
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      returnData = pathArray[pathArray.length - 2];
    } // End-if (returnData !== false)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores it in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} The data that was loaded, because sometimes a client command might need to use this to load data.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const loadDataFile = function(inputData, inputMetaData) {
  let functionName = loadDataFile.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadDataFileMessage1 + msg.cloadDataFileMessage2);
    returnData = false;
  } else { // Else-clause if (!inputData)
    let loadedData = {};
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // Attempting to load XML data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadXmlData);
      loadedData = fileOperations.getXmlData(inputData);
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // Attempting to load CSV data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadCsvData);
      loadedData = fileOperations.getCsvData(inputData);
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      // Attempting to load JSON data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadJsonData);
      loadedData = fileOperations.getJsonData(inputData);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    }
    // Loaded data is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadedDataIs + JSON.stringify(loadedData));
    returnData = loadedData;
    if (loadedData !== null && loadedData && inputMetaData) {
      dataBroker.storeData(inputMetaData, loadedData);
    }
  } // End-else-clause if (!inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function saveDataFile
 * @description Saves data from a specified data to a specified path and file name.
 * @param {string} inputData The full path and file name were the data should be saved.
 * @param {object} inputMetaData The data that should be saved out to the specified file.
 * @return {boolean} True or False value to indicate if the file was saved successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/17
 */
const saveDataFile = function(inputData, inputMetaData) {
  let functionName = saveDataFile.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to save, please specify a valid path & filename!
    loggers.consoleLog(namespacePrefix + functionName, msg.csaveDataFileMessage1 + msg.cloadDataFileMessage2);
    returnData = false;
  } else {
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      fileOperations.writeJsonData(inputData, inputMetaData);
      returnData = true;
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function supportedFileFormatsAre
 * @description Returns a list of supported file formats.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma seperated ist of supported file formats. IE a list of file extensions.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const supportedFileFormatsAre = function(inputData, inputMetaData) {
  let functionName = supportedFileFormatsAre.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function copyAllFilesAndFoldersFromFolderToFolder
 * @description This is the wrapper for the fileOperations function of the same name.
 * Copies all of the files and folders recursively from the source folder to the destination folder.
 * Takes a second array of file filters that should be avoided.
 * Example: [source, destination], [metaData.json, .js]
 * @param {array<string>} inputData An array containing the source and destination paths.
 * Example:
 * inputData[0] = source path
 * inputData[1] = destination path
 * @param {array<array<string>>} inputMetaData two array's of strings that are exclusions and inclusions file filters,
 * that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * inputMetaData[0] = exclusionArray
 * inputMetaData[1] = inclusionArray
 * @return {boolean} A True or False to indicate if the full copy process is successful or not.
 * @author Seth Hollingsead
 * @date 2022/04/06
 * @NOTE This is mainly used by the build system to execute a copy process for the
 * non-code fils from the source folder to the bin folder.
 * It could also be used by a self-installer system, to copy code from an execution path to an installed path.
 */
const copyAllFilesAndFoldersFromFolderToFolder = function(inputData, inputMetaData) {
  let functionName = copyAllFilesAndFoldersFromFolderToFolder.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  returnData = fileOperations.copyAllFilesAndFoldersFromFolderToFolder(inputData, inputMetaData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getAttributeName
 * @description Takes a string representation of a JSON attribute and gets the name (left hand assignment key).
 * @param {string} inputData Teh string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const getAttributeName = function(inputData, inputMetaData) {
  let functionName = getAttributeName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + JSON.stringify(attributeArray));
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray0Is + attributeArray[0]);
    returnData = arrayParsing.replaceCharacterWithCharacter(attributeArray[0], [/"/g, '']);
    returnData = returnData.trim();
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getAttributeValue
 * @description Takes a string representation of a JSON attribute and gets the value (Right hand assignment value).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The value of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/10
 */
const getAttributeValue = function(inputData, inputMetaData) {
  let functionName = getAttributeValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray1Is + attributeArray[1]);
    returnData = arrayParsing.replaceCharacterWithCharacter(attributeArray[1], [/"/g, '']);
    returnData = returnData.trim();
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function cleanCommandInput
 * @description Removes any "--" from the command to make it a valid command.
 * @param {string} inputData The string that should have the "--" removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input, but with the "--" removed.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const cleanCommandInput = function(inputData, inputMetaData) {
  let functionName = cleanCommandInput.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/--/g, '']);
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\[/g, '']);
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\]/g, '']);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getNowMoment
 * @description This function is a wrapper for the timers.getNowMoment function.
 * It returns a time stamp for the current instant that the function is called.
 * @param {string} inputData The format for the time stamp should be followed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The current time stamp, formatted according to the inpu string.
 * @author Seth Hollingsead
 * @date 2022/04/08
 */
const getNowMoment = function(inputData, inputMetaData) {
  let functionName = getNowMoment.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = timers.getNowMoment(inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function createZipArchive
 * @description Creates a zip archive of all the files from an input specified path,
 * and saves the zip file to the specified destination location.
 * @param {array<string>} inputData An array of paths to pass to be used to create the zip archive package.
 * @param {string} inputMetaData The full path and file name where the zip archive should be saved.
 * @return {boolean} A True or False value to indicate if the zip archive process completed successfully or not.
 * @author Seth Hollingsead
 * @date 2022/04/08
 */
const createZipArchive = function(inputData, inputMetaData) {
  let functionName = createZipArchive.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  returnData = fileOperations.createZipArchive(inputData, inputMetaData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

// ******************************************************
// Internal functions
// ******************************************************

/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @param {string} originalString The string where the replacement should be made.
 * @param {integer} index The index of the character where the replacement should be made.
 * @param {string} replacement The character or string that should be inserted at the specified index.
 * @return {string} The string after the replacement has been made.
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @NOTE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
const replaceCharacterAtIndexOfString = function(originalString, index, replacement) {
  let functionName = replaceCharacterAtIndexOfString.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`originalString is: ${originalString}`);
  // console.log(`index is: ${index}`);
  // console.log(`replacement is: ${replacement}`);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

export default {
  singleQuoteSwapAfterEquals,
  swapForwardSlashToBackSlash,
  swapBackSlashToForwardSlash,
  swapDoubleForwardSlashToSingleForwardSlash,
  swapDoubleBackSlashToSingleBackSlash,
  getUserNameFromEmail,
  replaceSpacesWithPlus,
  replaceColonWithUnderscore,
  cleanCarriageReturnFromString,
  convertStringToLowerCase,
  convertStringToUpperCase,
  getFileNameFromPath,
  getFileExtension,
  removeDotFromFileExtension,
  removeFileExtensionFromFileName,
  getValueFromAssignmentOperationString,
  aggregateNumericalDifferenceBetweenTwoStrings,
  countCamelCaseWords,
  doesStringContainAcronym,
  countDelimiterInString,
  determineWordDelimiter,
  getWordCountInString,
  doesStringContainUpperCaseCharacter,
  doesStringContainLowerCaseCharacter,
  isFirstCharacterLowerCase,
  isFirstCharacterUpperCase,
  isStringList,
  isStringCamelCase,
  mapWordToCamelCaseWord,
  simplifyAndConsolidateString,
  compareSimplifiedAndConsolidatedStrings,
  ascertainMatchingFilenames,
  validateConstantsDataValidation,
  determineConstantsContextQualifiedPrefix,
  determineSuggestedConstantsValidationLineOfCode,
  validateConstantsDataValidationLineItemName,
  doesConstantExist,
  getConstantType,
  getConstantActualValue,
  getConstantName,
  findConstantName,
  isConstantTypeValid,
  convertConstantTypeToConstantPrefix,
  constantsOptimizedFulfillmentSystem,
  constantsFulfillmentSystem,
  validateConstantsDataValues,
  isValidCommandNameString,
  isConstantValid,
  countDuplicateCommandAliases,
  getDataCatagoryFromDataContextName,
  getDataCatagoryDetailNameFromDataContextName,
  getKeywordNameFromDataContextName,
  removeXnumberOfFoldersFromEndOfPath,
  getFirstTopLevelFolderFromPath,
  loadDataFile,
  saveDataFile,
  supportedFileFormatsAre,
  copyAllFilesAndFoldersFromFolderToFolder,
  getAttributeName,
  getAttributeValue,
  cleanCommandInput,
  getNowMoment,
  createZipArchive,
  replaceCharacterAtIndexOfString
};
