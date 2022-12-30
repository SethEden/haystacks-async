/**
 * @file constantArrayParsing.js
 * @module constantArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to constants.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import * as math from 'mathjs';
import chalk from 'chalk';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.arrayParsing.constantArrayParsing.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getLengthOfLongestStringInArray
 * @description Determines what the longest string is in an array of strings.
 * @param {array<string>} inputData The array for which we should find the longest length string in.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The length of the longest string in the array.
 * @author Seth Hollingsead
 * @date 2022/01/19
 * @NOTE https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
 */
async function getLengthOfLongestStringInArray(inputData, inputMetaData) {
  let functionName = getLengthOfLongestStringInArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    returnData = math.max(...(inputData.map(el => el.length)));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function searchForPatternsInStringArray
 * @description Walks through sub-strings of each string in the input array of strings searching or common patterns using a brute-force sequential array search.
 * Maximum string length to search is the maximum string length - 1 (basically the longest string in the array minus 1 character).
 * Minimum string length to search is 3 characters.
 * @param {array<string>} inputData The array of strings that should be searched for matching patterns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} A string array of common string values found in more than 1 element of the array and 3 or more characters long.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function searchForPatternsInStringArray(inputData, inputMetaData) {
  let functionName = searchForPatternsInStringArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputData.length > 0) {
    returnData = []; // Reset it to an empty array, the input data has something n it so we should be able to process it.
    let maxStringLength = await getLengthOfLongestStringInArray(inputData, '') - 1;
    // maxStringLength is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cmaxStringLengthIs + maxStringLength);
    let minStringLength = 3;
    // minStringLength is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cminStringLengthIs + minStringLength);
    for (let a = 0; a < inputData.length; a++) { // Initial high-level loop over each of the array elements. (This is the source string for the comparison)
      let currentMasterStringArrayElement = inputData[a];
      // currentMasterStringArrayElement is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentMasterStringArrayElementIs + currentMasterStringArrayElement);
      if (currentMasterStringArrayElement.includes(bas.cSpace) === false) {
        // currentMasterStringArrayElement does not contain a space character
        await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInStringArrayMessage1);
        // Loop over the length of the string we need to compare.
        for (let b = minStringLength; b <= maxStringLength; b++) { // b will now hold the length of the string we are using to compare.
          // length of string to compare is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInStringArrayMessage2 + b);
          // length of currentMasterStrngArrayElement is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInStringArrayMessage3 + currentMasterStringArrayElement.length);
          // Loop again for the length of the current string - 3 (minStringLength)
          // Each loop will determine our currentComparisonString (which will be used when we actually iterate over the array in our search)
          for (let c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++) { // Loop through each set of strings in the master comparison string.
            // c value is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.ccValueIs + c);
            // Now here we should be able to finally compute the beginning and ending of the indexes for the string we want to use for comparison.
            let beginningIndex = c;
            // beginningIndex is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cbeginningIndexIs + beginningIndex);
            let endingIndex = c + b;
            // endingIndex is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cendingIndexIs + endingIndex);
            let stringToCompare = currentMasterStringArrayElement.substring(beginningIndex, endingIndex);
            // stringToCompare is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cstringToCompareIs + stringToCompare);
            // Now we need another loop to go over all of the array elements, make sure we always ignore the current array element.
            for (let d = 0; d < inputData.length; d++) {
              // d value is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cdValueIs + d);
              if (d != a) {
                // d != a
                await loggers.consoleLog(namespacePrefix + functionName, msg.cdNotEqualA);
                let otherStringToCompare = inputData[d];
                // otherStringToCompare is:
                await loggers.consoleLog(namespacePrefix + functionName, msg.cotherStringToCompareIs + otherStringToCompare);
                if (otherStringToCompare.includes(stringToCompare)) {
                  // FOUND A MATCH!!!!
                  await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundAMatch + stringToCompare);
                  // Here we have found a match among brothers. We need to see if this stringToCompare has already been added to the returnData array.
                  if (await ruleParsing.processRulesInternal([[returnData, stringToCompare], ''], [biz.cdoesArrayContainValue]) === false) {
                    // PUSHING a new constant pattern to the output array:
                    await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInStringArrayMessage4 + stringToCompare);
                    returnData.push(stringToCompare);
                  } // End-if (await ruleParsing.processRulesInternal([[returnData, stringToCompare], ''], [biz.cdoesArrayContainValue]) === false)
                } // End-if (otherStringToCompare.includes(stringToCompare))
              } // End-if (d != a)
            } // End-for (let d = 0; d < inputData.length; d++)
          } // End-for (let c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++)
        } // End-for (let b = minStringLength; b <= maxStringLength; b++)
      } else { // Else-clause if (currentMaserStringArrayElement.includes(bas.cSpace) === false)
        // WARNING: The current string being searched contains a space character, we are going to skip comparison.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInSringArrayMessage5 + msg.cSearchForPatternsInStringArrayMessage6);
      }
    } // End-for (let a = 0; a < inputData.length; a++)
  } else { // Else-clause if (inputData && inputData.length > 0)
    // WARNING: InputData was not an array or had an empty array.
    await loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInSringArrayMessage7);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validatePatternsThatNeedImplementation
 * @description Scans through an array of strings and determines which ones are not yet implemented in the constants system.
 * @param {array<string>} inputData The array of strings that should be checked if they are already implemented in the constants system or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma separated list of constants that are not yet implemented.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
async function validatePatternsThatNeedImplementation(inputData, inputMetaData) {
  let functionName = validatePatternsThatNeedImplementation.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let passMessage = '';
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    let j = 0; // We will use this as an iterator to count the number of times we add a string to the returnData coma-seperated list.
    for (const element of inputData) {
      let currentString = element;
      if (await ruleParsing.processRulesInternal([currentString, ''], [biz.cdoesConstantExist]) === false) {
        // Constant does NOT exist:
        passMessage = msg.cConstantDoesNotExist + currentString;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(0,255,0)(passMessage);
        } // End-if (colorizeLogsEnabled === true)
        console.log(passMessage);
        // constant does NOT exist:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cConstantDoesNotExist + currentString);
        // Make sure we add all the strings that do not exist to a coma-separated list,
        // so we can enqueue it to the constantsGeneratorList command and generate actual new constants lines of code.
        if (j === 0) {
          returnData = currentString;
        } else {
          returnData = returnData + bas.cComa + currentString;
        }
        j++;
      } else { // Else-clause for if (ruleParsing.processRulesInternal([currentString, ''], [biz.cdoesConstantExist]) === false)
        // Constant does exist:
        passMessage = msg.cConstantDoesExist + currentString;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        } // End-if colorizeLogsEnabled === true
        console.log(passMessage);
        // constant does exist:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cConstantDoesExist + currentString);
      }
    } // End-for (const element of inputData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getLengthOfLongestStringInArray,
  searchForPatternsInStringArray,
  validatePatternsThatNeedImplementation,
};
