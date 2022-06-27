/**
 * @file characterStringParsing.js
 * @module characterStringParsing
 * @description Contains all system defined business rules for parsing characters in strings.
 * @requires module:characterArrayParsing
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import characterArrayParsing from '../arrayParsing/characterArrayParsing.js';
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.characterStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function singleQuoteSwapAfterEquals
 * @description Swaps single quote characters in the middle of the string wih double quote characters n the middle of the string.
 * input: 'input[name='emailAddress'][class='username']'
 * output: 'input[name="emailAddress"][class="username"]'
 * @param {string} inputData A string that contains text with single quotes that should be swapped for double quotes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where single quotes have been exchanged for double quotes.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
async function singleQuoteSwapAfterEquals(inputData, inputMetaData) {
  let functionName = singleQuoteSwapAfterEquals.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
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
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

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
async function swapForwardSlashToBackSlash(inputData, inputMetaData) {
  let functionName = swapForwardSlashToBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = await ruleParsing.processRulesInternal([inputData, [/\//g, bas.cBackSlash]], [biz.creplaceCharacterWithCharacter]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

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
async function swapBackSlashToForwardSlash(inputData, inputMetaData) {
  let functionName = swapBackSlashToForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cconfigurationInitialized) === true) {
      returnData = await ruleParsing.processRulesInternal([inputData, [/\\/g, bas.cForwardSlash]], [biz.creplaceCharacterWithCharacter]);
    } else {
      returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, bas.cForwardSlash]);
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function swapDoubleForwardSlashToSingleForwardSlash
 * @description Swaps all double forward slash characters for single forward slash characters.
 * @param {string} inputData String that might contain some double forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double forward slash characters
 * swapped for single forward slash characters.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
async function swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData) {
  let functionName = swapDoubleForwardSlashToSingleForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cconfigurationInitialized) === true) {
      returnData = await ruleParsing.processRulesInternal([inputData, [/\/\//g, bas.cForwardSlash]], [biz.creplaceCharacterWithCharacter]);
    } else {
      returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, bas.cForwardSlash]);
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function swapDoubleBackSlashToSingleBackSlash
 * @description Swaps all double back slash characters for single back slash characters.
 * @param {string} inputData String that might contain some double back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double back slash characters
 * swapped for single back slash characters.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
async function swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData) {
  let functionName = swapDoubleBackSlashToSingleBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = await ruleParsing.processRulesInternal([inputData, [/\\\\/g, bas.cBackSlash]], [biz.creplaceCharacterWithCharacter]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param {string} inputData A string that contains spaces that should be converted to plus symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function replaceSpacesWithPlus(inputData, inputMetaData) {
  let functionName = replaceSpacesWithPlus.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/ /g, bas.cPlus);
    returnData = await ruleParsing.processRulesInternal([inputData, [/ /g, bas.cPlus]], [biz.creplaceCharacterWithCharacter]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols.
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input String but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function replaceColonWithUnderscore(inputData, inputMetaData) {
  let functionName = replaceColonWithUnderscore.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/:/g, bas.cUnderscore);
    returnData = await ruleParsing.processRulesInternal([inputData, [/:/g, bas.cUnderscore]], [biz.creplaceCharacterWithCharacter]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function cleanCarriageReturnFromString
 * @description Cleans carriage return characters from the input data and trims off any leading or training spaces.
 * @param {string} inputData The string that should be scrubbed for carriage returns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function cleanCarriageReturnFromString(inputData, inputMetaData) {
  let functionName = cleanCarriageReturnFromString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cconfigurationInitialized) === true) {
      // returnData = inputData.replace(/\s+/g, bas.cSpace);
      returnData = (await ruleParsing.processRulesInternal([inputData, [/\s+/g, bas.cSpace]], [biz.creplaceCharacterWithCharacter])).trim();
    } else {
      returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, [/\s+/g, bas.cSpace]);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertStringToLowerCase
 * @description Converts the input String to the same string but with no upper case letters.
 * @param {string} inputData The string that should have all upper case letters changed to lower case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function convertStringToLowerCase(inputData, inputMetaData) {
  let functionName = convertStringToLowerCase.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toLowerCase();
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param {string} inputData The string that should have all lower case letters changed to upper case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function convertStringToUpperCase(inputData, inputMetaData) {
  let functionName = convertStringToUpperCase.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toUpperCase();
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

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
async function doesStringContainUpperCaseCharacter(inputData, inputMetaData) {
  let functionName = doesStringContainUpperCaseCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

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
async function doesStringContainLowerCaseCharacter(inputData, inputMetaData) {
  let functionName = doesStringContainLowerCaseCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isFirstCharacterLowerCase
 * @description Determines if the first character of the string is a lower case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is lower case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is a lower case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function isFirstCharacterLowerCase(inputData, inputMetaData) {
  let functionName = isFirstCharacterLowerCase.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isFirstCharacterUpperCase
 * @description Determines if the first character of the string is an upper case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is upper case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is an upper case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function isFirstCharacterUpperCase(inputData, inputMetaData) {
  let functionName = isFirstCharacterUpperCase.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @NOTE Do not call this function from the rulesLibrary as it doesn't follow the business rule pattern.
 * This function is strictly a supporting function to aid the business rules, for use internal to the business rules only.
 * @param {array<string,integer>} inputData An array that contains the original string and the index of the character that should be replaced.
 * inputData[0] = originalString - The string where the replacement should be made.
 * inputData[1] = index - The index of the character where the replacement should be made.
 * @param {string} inputMetaData The character or string that should be used to make the replacement, inserted at the specified index.
 * @return {string} The string after the replacement has been made.
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @NOTE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function replaceCharacterAtIndexOfString(inputData, inputMetaData) {
  // let functionName = replaceCharacterAtIndexOfString.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`originalString is: ${originalString}`);
  // console.log(`index is: ${index}`);
  // console.log(`replacement is: ${replacement}`);
  let returnData;
  if (inputData && inputMetaData) {
    let originalString = inputData[0];
    let index = inputData[1];
    if (originalString != '' && index >= 0 && inputMetaData != '') {
      returnData = originalString.substr(0, index) + inputMetaData + originalString.substr(index + inputMetaData.length);
    }
  } // End-if (inputData && inputMetaData)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  singleQuoteSwapAfterEquals,
  swapForwardSlashToBackSlash,
  swapBackSlashToForwardSlash,
  swapDoubleForwardSlashToSingleForwardSlash,
  swapDoubleBackSlashToSingleBackSlash,
  replaceSpacesWithPlus,
  replaceColonWithUnderscore,
  cleanCarriageReturnFromString,
  convertStringToLowerCase,
  convertStringToUpperCase,
  doesStringContainUpperCaseCharacter,
  doesStringContainLowerCaseCharacter,
  isFirstCharacterLowerCase,
  isFirstCharacterUpperCase,
  replaceCharacterAtIndexOfString
};
