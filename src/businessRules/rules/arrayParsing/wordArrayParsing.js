/**
 * @file wordArrayParsing.js
 * @module wordArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to words.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.arrayParsing.wordArrayParsing.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>|boolean} The array of words that were composed in the original string or false if there was an invalid input.
 * @author Seth Hollingsead
 * @date 2022/01/18
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */
async function convertCamelCaseStringToArray(inputData, inputMetaData) {
  let functionName = convertCamelCaseStringToArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  let caps = [];
  if (inputData && (typeof inputData === wrd.cstring && inputData.length > 0)) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    } // End-for (let i = 1; i < inputData.length; i++)
    if (caps.length > 0) {
      let last = 0;
      let decomposedString = [];
      for (const element of caps) {
        decomposedString.push(inputData.slice(last, element));
        last = element;
      } // End-for (const element of caps)
      decomposedString.push(inputData.slice(last));
      returnData = decomposedString;
    } else {
      returnData = [inputData];
    }
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getWordsArrayFromString
 * @description Gets an array of words from a string,
 * automatically determining how the words are delimited based on common word delimiters: camel case, space, period, dash & underscore.
 * @param {string} inputData The string that should be broken down into words and returned as an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>|boolean} The array of words found in the string or false if the inputData is invalid.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
async function getWordsArrayFromString(inputData, inputMetaData) {
  let functionName = getWordsArrayFromString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData && typeof inputData === wrd.cstring && /^[A-Za-z .\-_+%]+$/.test(inputData)) {
    let wordCount = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetWordCountInString]);
    // wordCount is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
    if (wordCount > 0) {
      let wordDelimiter = await ruleParsing.processRulesInternal([inputData, inputMetaData], [biz.cdetermineWordDelimiter]);
      // wordDelimiter is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cwordDelimiterIs + wordDelimiter);
      let stringContainsAcronym = await ruleParsing.processRulesInternal([inputData, ''], [biz.cdoesStringContainAcronym]);
      // stringContainsAcronym is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cstringContainsAcronymIs + stringContainsAcronym);
      if (wordDelimiter === sys.cCamelCase && stringContainsAcronym === false) {
        returnData = await convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != sys.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordsArrayFromStringMessage1 + msg.cGetWordsArrayFromStringMessage2 + msg.cGetWordsArrayFromStringMessage3);
      }
    } // end-if (wordCount > 0)
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function recombineStringArrayWithSpaces
 * @description Takes an array of strings and recombines them sequentially with spaces between each array element.
 * This function is needed, because commands parse inputs by spaces into an array,
 * and some commands need a single continuous string that might be delimited by coma's.
 * So this function lets us recombine and re-parse the string with another delimiter.
 * @param {array<string>} inputData The array of strings that should be recombined.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string|boolean} The string array with spaces between array elements or false if the inputData is invalid.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function recombineStringArrayWithSpaces(inputData, inputMetaData) {
  let functionName = recombineStringArrayWithSpaces.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (Array.isArray(inputData) && inputData.every(item => typeof item === wrd.cstring)) {
    returnData = inputData.join(bas.cSpace);
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {array<string>} inputData The array of words that should be strung together into a single long string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string|boolean} A string that contains all of the words from the input array put together in sequential order or false if the inputData is invalid.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function convertArrayToCamelCaseString(inputData, inputMetaData) {
  let functionName = convertArrayToCamelCaseString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (Array.isArray(inputData) && inputData.every(item => typeof item === wrd.cstring)) {
    returnData = await Promise.all(inputData.map((key, index) => ruleParsing.processRulesInternal([key, index], [biz.cmapWordToCamelCaseWord])));
    returnData = returnData.join('');
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidatedString().
 * @param {array<string>} inputData The array of strings that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not or false if there is an invalid input.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData) {
  let functionName = doesArrayContainLowerCaseConsolidatedString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (Array.isArray(inputData) && inputData.every(item => typeof item === wrd.cstring)) {
    if (inputMetaData && (typeof inputMetaData === wrd.cstring && inputMetaData.length > 0)) {
      // I'm not sure if value1 & value2 below should be referenced to inputData & inputMetaData?
      // I get that arrow function is pass in these values to the wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings function.
      // But I'm not sure how or what values are being passed for value1 & value2.
    
      // This the impementation where order does not matter. (see below for the impementation where order does matter)
      let stringDelta = await (async (value1, value2) => ruleParsing.processRulesInternal([value1, value2], [biz.caggregateNumericalDifferenceBetweenTwoStrings]) < 2);
    
      // If execution order mattered on the above line of code, then we would want to do something like this:
      // async function mapAsync(arr, cb) {
      //   return arr.reduce((acc, value, index) => acc.then(async (res) => [...res, await cb(value, index)]), []);
      // }
    
      // returnData = await mapAsync(inputData, (key, index) =>
      //   ruleParsing.processRulesInternal([key, index], [biz.cmapWordToCamelCaseWord]),
      // );
    
      // stringDelta value is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cstringDeltaValueIs + stringDelta);
      returnData = await ruleParsing.processRulesInternal([[inputData, inputMetaData], stringDelta], [biz.cdoesArrayContainValue]);
    } else { // End-if (inputMetaData)
      // ERROR: Invalid input, inputMetaData is:  --- at 
      console.log(msg.cErrorInvalidInputMetaDataMessage + inputMetaData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
      returnData = false; // Invalid inputMetaData, return false.
    }
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function ascertainMatchingElements
 * @description Determines if two values are identical. Needed for completeness of comparison for nested arrays.
 * @param {array<string|boolean|integer|float|object>} inputData An array that should be compared for equality.
 * @param {array<string|boolean|integer|float|object>} inputMetaData Second array that should be compared for equality.
 * @return {boolean} True or False to indicate array equality or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function ascertainMatchingElements(inputData, inputMetaData) {
  let functionName = ascertainMatchingElements.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (Array.isArray(inputData) && inputData.every(item =>
    typeof item === wrd.cstring ||
    typeof item === wrd.cboolean ||
    (typeof item === wrd.cnumber && Number.isFinite(item)) ||
    (typeof item === wrd.cobject && item !== null))) {
    if (Array.isArray(inputMetaData) && inputMetaData.every(item =>
      typeof item === wrd.cstring ||
      typeof item === wrd.cboolean ||
      (typeof item === wrd.cnumber && Number.isFinite(item)) ||
      (typeof item === wrd.cobject && item !== null))) {
      // if (inputData == inputMetaData) {
      //   // Array elements match
      //   await loggers.consoleLog(namespacePrefix + functionName, msg.cArrayElementsMatch);
      //   returnData = true;
      // } else {
      //   // Array elements do not match
      //   await loggers.consoleLog(namespacePrefix + functionName, msg.cArrayElementsDoNotMatch);
      //   returnData = false;
      // }
        
      returnData = await ruleParsing.processRulesInternal([inputData, inputMetaData], [biz.carraysAreEqual]);
    } else { // End-if (inputMetaData)
      // ERROR: Invalid input, inputMetaData is:  --- at 
      console.log(msg.cErrorInvalidInputMetaDataMessage + inputMetaData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
      returnData = false; // Invalid inputMetaData, return false.
    }
  } else { // End-if (inputData)
    // ERROR: Invalid input, inputData is:  --- at 
    console.log(msg.cErrorInvalidInputDataMessage + inputData + msg.cSpaceDashDashDashSpaceAtSpace + baseFileName + bas.cDot + functionName);
    returnData = false; // Invalid inputData, return false.
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  convertCamelCaseStringToArray,
  getWordsArrayFromString,
  recombineStringArrayWithSpaces,
  convertArrayToCamelCaseString,
  doesArrayContainLowerCaseConsolidatedString,
  ascertainMatchingElements
};
