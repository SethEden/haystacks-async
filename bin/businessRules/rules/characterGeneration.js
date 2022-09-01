/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/01/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from './ruleParsing.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.characterGeneration.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from A-Z, a-z or
 * a random special character from the input list of special characters.
 * @param {string} inputData the list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseLetterOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from A-Z or
 * a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the english alphabet,
 * or a random special character from the ist of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseLetterOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from a-z or
 * a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used  to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseLetterOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cLowerCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or
 * a random special character from the input ist of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random mixed case letter of the english alphabet,
 * or a random special character from the ist of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from A-Z or a number 0-9 or
 * a random special character from the input ist of special characters.
 * @param {string} inputData The list orf allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from a-z or a number 0-9 or
 * a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string}Randomly returns a random number, a random lower case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(inputData + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param  {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateMixedCaseAlphaNumericCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseAlphaNumericCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateUpperCaseAlphaNumericCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseAlphaNumericCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateLowerCaseAlphaNumericCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseAlphaNumericCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateNumericCharacter
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateNumericCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumericCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cAllNumbers);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateSpecialCharacter
 * @description Randomly select a special character from a list of allowable special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A character randomly selected from the input list of allowable characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateSpecialCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateSpecialCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE Cannot have a "." as part of a variable name in a {set}
  if (inputData) {
    let inputDataLength = inputData.length.toString();
    let number = await randomlyGenerateNumberInRange(num.c1, [inputDataLength, gen.cTrue, gen.cTrue]);
    // NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.
    returnData = inputData.substring(number - 1, number);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateNumberInRange
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData An array with multiple input parameters:
 * inputMetaData[0] = maximumValue - A string or integer that contains the number with the maximum value.
 * inputMetaData[1] = includeMaximum - A True or False value that indicates if the maximum should be included or
 * excluded from the range of allowable range of values to return from.
 * inputMetaData[2] = addMinimum - A True or False value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateNumberInRange(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumberInRange.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    let minimum = parseInt(inputData);
    let maximum = parseInt(inputMetaData[0]);
    let addOne = await ruleParsing.processRulesInternal([inputMetaData[1], ''], [biz.cstringToBoolean]);
    let addMinimum = await ruleParsing.processRulesInternal([inputMetaData[2], ''], [biz.cstringToBoolean]);
    if (addOne === true) {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1));
      }
    } else {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum));
      }
    }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData.toString();
}

/**
 * @function randomlyGenerateBooleanValue
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value that is
 * either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateBooleanValue(inputData, inputMetaData) {
  let functionName = randomlyGenerateBooleanValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = Math.random() >= 0.5;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter
 * @description Randomly generates either an upper case or
 * lower case random english alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated english alphabetic letter from a-z or A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseAlphabeticCharacter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateLowerCaseLetter
 * @description Randomly generates a lower case english alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated english alphabetic letter from a-z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateLowerCaseLetter(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseLetter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cLowerCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function randomlyGenerateUpperCaseLetter
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function randomlyGenerateUpperCaseLetter(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseLetter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertNumberToUpperCaseLetter
 * @description Converts a number from 1-26 into an upper case letter of the english alphabet A-Z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that
 * should be converted to an upper case letter of the english alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted in a letter A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function convertNumberToUpperCaseLetter(inputData, inputMetaData) {
  let functionName = convertNumberToUpperCaseLetter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let number = parseInt(inputData);
    number--;
    // number is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cnumberIs + number);
    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
    } else {
      returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertNumberToLowerCaseLetter
 * @description Converts a number from 1-26 into a lower case letter of the english alphabet a-z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that
 * should be converted in a lower case letter of the english alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter a-z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function convertNumberToLowerCaseLetter(inputData, inputMetaData) {
  let functionName = convertNumberToLowerCaseLetter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let number = parseInt(inputData);
    number--;
    // number is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberIs + number);
    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
    } else {
      returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  randomlyGenerateMixedCaseLetterOrSpecialCharacter,
  randomlyGenerateUpperCaseLetterOrSpecialCharacter,
  randomlyGenerateLowerCaseLetterOrSpecialCharacter,
  randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateMixedCaseAlphaNumericCharacter,
  randomlyGenerateUpperCaseAlphaNumericCharacter,
  randomlyGenerateLowerCaseAlphaNumericCharacter,
  randomlyGenerateNumericCharacter,
  randomlyGenerateSpecialCharacter,
  randomlyGenerateNumberInRange,
  randomlyGenerateBooleanValue,
  randomlyGenerateMixedCaseAlphabeticCharacter,
  randomlyGenerateLowerCaseLetter,
  randomlyGenerateUpperCaseLetter,
  convertNumberToUpperCaseLetter,
  convertNumberToLowerCaseLetter
};
