/**
 * @file auxiliaryArrayParsing.js
 * @module auxiliaryArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to auxiliary capabilities.
 * @requires module:colorizer
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import colorizer from '../../../executrix/colorizer.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import * as math from 'mathjs';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.arrayParsing.auxiliaryArrayParsing.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

 /**
  * @function parseColorRangeInputs
  * @description Parses minimum and maximum range integer values to ensure they are in the range of 0 - 255.
  * @param {string|integer} inputData The number in either numeric or string format that
  * represents the minimum range that should be used to generate the random color.
  * @param {string|integer} inputMetaData The number in either numeric or string format that
  * represents the maximum range that should be used to generate the random color.
  * @return {array<integer>|boolean} The minimum and maximum values returned in an array or false indicating an error.
  * returnData[0] = minimum value.
  * returnData[1] = maximum value.
  * @author Seth Hollingsead
  * @date 2022/01/21
  */
async function parseColorRangeInputs(inputData, inputMetaData) {
   let functionName = parseColorRangeInputs.name;
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = false;
   let minimumColorRange = 0;
   let tempMinimumColorRange = 0;
   let maximumColorRange = 0;
   let tempMaximumColorRange = 0;
   if (inputData && ((typeof inputData === wrd.cstring && (/^\d+$/.test(inputData))) || typeof inputData === wrd.cnumber)) { // Checking if inputData is a valid string or number and does only contain numbers.
    if (inputMetaData && ((typeof inputMetaData === wrd.cstring && (/^\d+$/.test(inputMetaData))) || typeof inputMetaData === wrd.cnumber)) { // Checking if inputMetaData is a valid string or number and does only contain numbers.
      // Try to parse them as numbers for the range.
      if (typeof(inputData) === wrd.cstring) {
        tempMinimumColorRange = parseInt(inputData);
      } else if (typeof(inputData) === wrd.cnumber) {
        tempMinimumColorRange = inputData;
      }
      if (typeof(inputMetaData) === wrd.cstring) {
        tempMaximumColorRange = parseInt(inputMetaData);
      } else if (typeof(inputMetaData) === wrd.cnumber) {
        tempMaximumColorRange = inputMetaData;
      }
      if (tempMinimumColorRange < tempMaximumColorRange) {
        minimumColorRange = tempMinimumColorRange;
        maximumColorRange = tempMaximumColorRange;
      } else if (tempMinimumColorRange > tempMaximumColorRange) {
        minimumColorRange = tempMaximumColorRange;
        maximumColorRange = tempMinimumColorRange;
      }
      if (minimumColorRange < 0) {
        minimumColorRange = math.abs(minimumColorRange);
      } else if (minimumColorRange > 255) {
        minimumColorRange = 255;
      }
      if (maximumColorRange < 0) {
        maximumColorRange = math.abs(maximumColorRange);
      } else if (maximumColorRange > 255) {
        maximumColorRange = 255;
      }
      returnData = [minimumColorRange, maximumColorRange];
    } else {
      // ERROR: Invalid input, inputMetaData is:
      console.log(msg.cErrorInvalidInputMetaDataMessage + inputMetaData);
    }
   } else {
    // ERROR: Invalid input, inputData is:
    console.log(msg.cErrorInvalidInputDataMessage + inputData);
   }
   loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
}

/**
 * @function getNamedColorDataArray
 * @description This is a business rule wrapper function for calling the colorizer to get named color array data.
 * Looks up the named color data as loaded in the Haystacks engine.
 * @param {string} inputData The name of the color that should be looked up.
 * @param {array<integer>} inputMetaData A default array, if the color isn't found.
 * @return {array<integer>|boolean} An array of integers that represent RGB values or false indicating an error.
 * @author Seth Hollingsead
 * @date 2023/03/02
 */
async function getNamedColorDataArray(inputData, inputMetaData) {
  let functionName = getNamedColorDataArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [0,0,0];
  returnData = await colorizer.getNamedColorData(inputData, inputMetaData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesArrayContainValue
 * @description Checks if an array contains a value, checking equality by function(val, arr[i]).
 * @NOTE Do not call this function from the rulesLibrary as it doesn't follow the business rule pattern.
 * This function is strictly a supporting function to aid the business rules, for use internal to the business rules only.
 * @param {array<array<string|integer|boolean|float|object>,string|integer|boolean|float|object>} inputData
 * An array that contains the array that should be searched and the value that should be searched for in the array.
 * inputData[0] = Array to be searched.
 * inputData[1] = Value to be searched for in the array.
 * the input array that should be searched for the given input value.
 * @param {function} inputMetaData Not used for this business rule.
 * @return {boolean} A True or False to indicate if the value was found in the array or not found.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function doesArrayContainValue(inputData, inputMetaData) {
  let functionName = doesArrayContainValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // Not sure how this will output, would be good to also put some type checing on this input variable.
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && (Array.isArray(inputData))) {
    let array = inputData[0];
    let value = inputData[1];
    await loggers.consoleLog(namespacePrefix + functionName, msg.carrayIs + array.toString());
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + value.toString());
    if (Array.isArray(array) === false) {
      // array input object is not an array.
      console.log(msg.cERROR_Colon + msg.carrayInputObjectIsNotAnArray);
      // await loggers.consoleLog(namespacePrefix + functionName, msg.carrayInputObjectIsNotAnArray);
    } else {
      // eslint-disable-next-line no-extra-boolean-cast25
      // NOTE: This has been commented out because now the .find function is hard coded in the line below.
      // if (!!array.find(await (async (i) => {return (await inputMetaData(i, value));}))) {
      if (await array.find(x => x === value)) {
        // The value was found in the array.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cTheValueWasFoundInTheArray);
        returnData = true;
      } else {
        // The value was NOT found in the array.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cTheValueWasNotFoundInTheArray);
      }
    }
  } else {
    // ERROR: Invalid input, inputData is:
    console.log(msg.cErrorInvalidInputDataMessage + inputData);
  } 
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

 export default {
   parseColorRangeInputs,
   getNamedColorDataArray,
   doesArrayContainValue
 };
