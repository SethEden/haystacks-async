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
// businessRules.rules.arrayParsing.wordArrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */
function convertCamelCaseStringToArray(inputData, inputMetaData) {
  let functionName = convertCamelCaseStringToArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  let caps = [];
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
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getWordsArrayFromString
 * @description Gets an array of words from a string,
 * automatically determining how the words are delimited based on common word delimiters: camel case, space, period, dash & underscore.
 * @param {string} inputData The string that should be broken down into words and returned as an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
function getWordsArrayFromString(inputData, inputMetaData) {
  let functionName = getWordsArrayFromString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    let wordCount = ruleParsing.processRulesInternal([inputData, ''], [biz.cgetWordCountInString]);
    // wordCount is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
    if (wordCount > 0) {
      let wordDelimiter = ruleParsing.processRulesInternal([inputData, inputMetaData], [biz.cdetermineWordDelimiter]);
      // wordDelimiter is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cwordDelimiterIs + wordDelimiter);
      let stringContainsAcronym = ruleParsing.processRulesInternal([inputData, ''], [biz.cdoesStringContainAcronym]);
      // stringContainsAcronym is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cstringContainsAcronymIs + stringContainsAcronym);
      if (wordDelimiter === sys.cCamelCase && stringContainsAcronym === false) {
        returnData = convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != sys.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordsArrayFromStringMessage1 + msg.cGetWordsArrayFromStringMessage2 + msg.cGetWordsArrayFromStringMessage3);
      }
    } // end-if (wordCount > 0)
  } // end-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function recombineStringArrayWithSpaces
 * @description Takes an array of strings and recombines them sequentially ith spaces between each array element.
 * This function is needed, because commands parse inputs by spaces ino an array,
 * and some commands need a single continuous string that might be delimited by coma's.
 * So this function lets us recombine and teh re-parse the string with another delimiter.
 * @param {array<string>} inputData The array of strings that should be recombined.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string array with spaces between array elements.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
function recombineStringArrayWithSpaces(inputData, inputMetaData) {
  let functionName = recombineStringArrayWithSpaces.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    // returnData = inputData[1];
    // for (let i = 2; i < inputData.length; i++) {
    //   returnData = returnData + bas.cSpace + inputData[i];
    // }
    returnData = inputData.join(bas.cSpace);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {array<string>} inputData The array of words that should be strung together into a single long string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains all of the words from the input array put together in sequential order.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
function convertArrayToCamelCaseString(inputData, inputMetaData) {
  let functionName = convertArrayToCamelCaseString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    returnData = inputData.map((key, index) => ruleParsing.processRulesInternal([key, index], [biz.cmapWordToCamelCaseWord]));
    returnData = returnData.join('');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidatedString().
 * @param {array<string>} inputData The array of strings that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
function doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData) {
  let functionName = doesArrayContainLowerCaseConsolidatedString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData && inputMetaData) {
    // I'm not sure if value1 & value2 below should be referenced to inputData & inputMetaData?
    // I get the arrow function is pass in these values to the wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings function.
    // But I'm not sure how or what values are being passed for value1 & value2.
    let stringDelta = (value1, value2) => ruleParsing.processRulesInternal([value1, value2], [biz.caggregateNumericalDifferenceBetweenTwoStrings]) < 2;
    // stringDelta value is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cstringDeltaValueIs + stringDelta);
    returnData = ruleParsing.processRulesInternal([[inputData, inputMetaData], stringDelta], [biz.cdoesArrayContainValue]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function ascertainMatchingElements
 * @description Determines if to values are identical. Needed for completeness of comparison for nested arrays.
 * @param {array<string|boolean|integer|float|object>} inputData An array that should be compared for equality.
 * @param {array<string|boolean|integer|float|object>} inputMetaData Second array that should be compared for equality.
 * @return {boolean} True or False to indicate array equality or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
function ascertainMatchingElements(inputData, inputMetaData) {
  let functionName = ascertainMatchingElements.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) {
      // Array elements match
      loggers.consoleLog(namespacePrefix + functionName, msg.cArrayElementsMatch);
      returnData = true;
    } else {
      // Array elements do not match
      loggers.consoleLog(namespacePrefix + functionName, msg.cArrayElementsDoNotMatch);
      returnData = false;
    }
  } // end-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
