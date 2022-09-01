/**
 * @file dataArrayParsing.js
 * @module dataArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to data.
 * @requires module:dataBroker
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../../../brokers/dataBroker.js';
import ruleParsing from '../ruleParsing.js';
import loggers from '../../../executrix/loggers.js';
import D from '../../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.dataArrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function arraysAreEqual
 * @description Determines if a set of arrays are equal or not.
 * @param {array<string|integer|boolean|float|object>} inputData The first array that should be checked for equality.
 * @param {array<string|integer|boolean|float|object>} inputMetaData The second array that should be checked for equality.
 * @return {boolean} True or False to indicate if the arrays are equal or not equal.
 * @author Seth Hollingsead
 * @date 2022/01/20
 * @NOTE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
 */
async function arraysAreEqual(inputData, inputMetaData) {
  let functionName = arraysAreEqual.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) { returnData = true; }
    if (inputData === null || inputMetaData === null) { returnData = false; }
    if (inputData.length != inputMetaData.length) { returnData = false; }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storeData
 * @description Stores some data using the DataStorage data hie on the D data store.
 * @param {string} inputData The context name that the data should be stored with.
 * @param {string|integer|boolean|object|array} inputMetaData The data that should be stored.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
async function storeData(inputData, inputMetaData) {
  let functionName = arraysAreEqual.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    await dataBroker.storeData(inputData, inputMetaData);
    returnData = true;
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getStoredData
 * @description Gets the named data stored in the D data structure in the DataStorage data hive.
 * @param {string} inputData The name of the sub-data hive that should contain the stored data we are looking for.
 * @param {string} inputMetaData Not used for tis business rule.
 * @return {object} The data that was stored in the sub-data hie under the DataStorage data hive of the D data structure.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
async function getStoredData(inputData, inputMetaData) {
  let functionName = getStoredData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    returnData = await dataBroker.getData(inputData);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isObjectEmpty
 * @description Determines if a JSON object is empty or not.
 * @param {object} inputData The object that should be checked for emptiness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the object is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isObjectEmpty(inputData, inputMetaData) {
  let functionName = isObjectEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData) {
    for (let key in inputData) {
      if (Object.prototype.hasOwnProperty.call(inputData, key)) {
        returnData = false;
        // It may have a value, but is that value === null, if it is, reset back to true.
        if (inputData[key] === null) {
          returnData = true;
        }
      } // End-if (inputData.hasOwnProperty(key))
    } // End-for (let key in inputData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isArrayEmpty
 * @description Determines if a JSON array is empty or not.
 * @param {array<string|integer|boolean|float|object>} inputData The array that should be checked for emptiness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the array is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isArrayEmpty(inputData, inputMetaData) {
  let functionName = isArrayEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    returnData = !Object.keys(inputData).length;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isObject
 * @description Determines if an object is a JSON object or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object that should be tested to see if it is a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isObject(inputData, inputMetaData) {
  let functionName = isObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === wrd.cobject) {
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isArray
 * @description Determines if an object is an array or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object that
 * should be tested to see if it is an array or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isArray(inputData, inputMetaData) {
  let functionName = isArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = Array.isArray(inputData);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isArrayOrObject
 * @description Determines if an input object is either an array or a JSON object.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object that
 * should be tested to see if it is either an array or a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is either an array or a JSON object.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isArrayOrObject(inputData, inputMetaData) {
  let functionName = isArrayOrObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (await isObject(inputData, '') === true || await isArray(inputData, '') === true) {
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isNonZeroLengthArray
 * @description Determines if an object is an array of length greater than or equal to one or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object/array that
 * should be tested to see if it is an array of length greater than or equal to 1 or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array of length greater than equal to zero or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function isNonZeroLengthArray(inputData, inputMetaData) {
  let functionName = isNonZeroLengthArray.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (await isArray(inputData, '') === true && inputData.length >= 1) {
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function arrayDeepClone
 * @description Clones an array by using JSON.stringify & JSON.parse.
 * Almost all other methods of cloning an array will actually clone by reference which essentially just clones the pointer to the array.
 * @NOTE: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
 * @param {array<string|integer|boolean|float|object>} inputData The array that should be deeply cloned.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string|integer|boolean|float|object>} The new array object after being cloned deeply.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function arrayDeepClone(inputData, inputMetaData) {
  let functionName = arrayDeepClone.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && await isArray(inputData, '') === true && await isArrayEmpty(inputData, '') === false) {
    returnData = JSON.parse(JSON.stringify(inputData));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function objectDeepMerge
 * @description Recursively deeply merges two objects that may or may not contains nested arrays.
 * @param {object} inputData The target data to be merged with.
 * @param {object} inputMetaData The data that should be merged.
 * @return {object} The merged data after the merge is complete.
 * @author Pery Mimon
 * @date 2020/04/23
 * @reference: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
 */
async function objectDeepMerge(inputData, inputMetaData) {
  let functionName = objectDeepMerge.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (typeof inputData !== wrd.cobject || typeof inputMetaData !== wrd.cobject) {
    // inputData or inputMetaData or both ain't objets, merging doesn't make sense.
    returnData = false;
  } else {
    for (let property in inputMetaData) {
      if (!Object.prototype.hasOwnProperty.call(inputMetaData, property)) {
        continue; // Take into consideration only object's own properties.
      }
      // property is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpropertyIs + JSON.stringify(property));
      if (property in inputData) {
        // property is in inputData
        await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage01);
        // inputData[property] is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataPropertyIs + JSON.stringify(inputData[property]));
        // Handling merging of two properties with equal names.
        if (typeof inputData[property] !== wrd.cobject) {
          // inputData[property] is not an object!
          // Assign it directly.
          await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage02 + bas.cSpace + msg.cobjectDeepMergeMessage03);
          inputData[property] = inputMetaData[property];
        } else {
          // inputData[property] is an object!
          await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage04);
          // inputMetaData[property] is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataPropertyIs + JSON.stringify(inputMetaData[property]));
          if (typeof inputMetaData[property] !== wrd.cobject) {
            // inputMetaData[property] is not an object,
            // Assign it directly.
            await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage05 + msg.cobjectDeepMergeMessage03);
            inputData[property] = inputMetaData[property];
          } else {
            // inputMetaData[property] is an object.
            await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage06);
            if (inputData[property].concat && inputMetaData[property].concat) {
              // Are the arrays length 1 or greater?
              if (inputData[property].length === 1 && inputMetaData[property].length === 1) {
                // Array lengths are the same at this level.
                await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage07);
                // We should deeply merge the contents of the arrays.
                inputData[property] = await objectDeepMerge(inputData[property], inputMetaData[property]);
              } else {
                // Two arrays get concatenated.
                await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage08);
                inputData[property] = inputData[property].concat(inputMetaData[property]);
                // AFTER concatenating two arrays: inputData[property] is:
                await loggers.consoleLog(namespacePrefix + functionName, msg.cAfterConcatenating2ArraysInputDataPropertyIs + JSON.stringify(inputData[property]));
              }
            } else {
              // Two objects get merged recursively.
              await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage09);
              inputData[property] = await objectDeepMerge(inputData[property], inputMetaData[property]);
              // AFTER recursive merge: inputData[property] is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cAfterRecursiveMergeInputDataPropertyIs + JSON.stringify(inputData[property]));
            }
          }
        }
      } else {
        // property is not in inputData,
        // so add it directly.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cobjectDeepMergeMessage10 + msg.cobjectDeepMergeMessage11);
        inputData[property] = inputMetaData[property];
      }
    } // End-for (let property in inputMetaData)
    returnData = inputData;
  }

  // NOTE: This implementation from Vincent on the reference: Dated: 2019/11/19
  // https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
  // Did not work:
  // inputData was: {"CommandWorkflows":{"businessRules":[{"arrayParsing":[{"characterArrayParsing":[{"Workflow":[{"$":{"Name":"doesArrayContainCharacter","Value":"cmdgen bizRul,doesArrayContainCharacter,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4"}},{"$":{"Name":"removeCharacterFromArray","Value":"cmdgen bizRul,removeCharacterFromArray,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4"}},{"$":{"Name":"replaceCharacterAtIndex","Value":"cmdgen bizRul,replaceCharacterAtIndex,aggregateNumericalDifferenceBetweenTwoStrings,[10|$] 4"}},{"$":{"Name":"characterArrayParsing","Value":"cmdSeq wrkflo,doesArrayContainCharacter wrkflo,removeCharacterFromArray wrkflo,replaceCharacterAtIndex"}}]}]}]}]}}
  //
  // inputMetaData was: {"CommandWorkflows":{"businessRules":[{"arrayParsing":[{"pathArrayParsing":[{"Workflow":[{"$":{"Name":"doesArrayContainFilename","Value":"cmdgen bizRul,doesArrayContainFilename,[20200603-142834-763_0.3.2_haystacks.zip|20200603-144529-749_0.3.3_haystacks.zip|20200604-133509-704_0.4.0_haystacks.zip|20200604-133546-749_0.4.1_haystacks.zip|20200604-160655-262_0.4.2_haystacks.zip|20200604-161819-191_0.4.3_haystacks.zip|20200604-173727-348_0.4.4_haystacks.zip|20200604-193551-258_0.5.0_haystacks.zip|20200604-193629-853_0.5.1_haystacks.zip|20200605-083055-193_0.5.2_haystacks.zip|20200610-170634-141_0.5.3_haystacks.zip|20200615-162658-576_0.5.4_haystacks.zip|20200617-150430-416_0.5.5_haystacks.zip|20200618-134424-575_0.5.6_haystacks.zip],20200604-193551-258_0.5.0_haystacks.zip 4"}},{"$":{"Name":"pathArrayParsing","Value":"cmdSeq wrkflo,doesArrayContainFilename"}}]}]}]}]}}
  //
  // returnData was: {"CommandWorkflows":{"businessRules":[{"arrayParsing":[{"characterArrayParsing":[{"Workflow":[{"$":{"Name":"doesArrayContainCharacter","Value":"cmdgen bizRul,doesArrayContainCharacter,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4"}},{"$":{"Name":"removeCharacterFromArray","Value":"cmdgen bizRul,removeCharacterFromArray,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4"}},{"$":{"Name":"replaceCharacterAtIndex","Value":"cmdgen bizRul,replaceCharacterAtIndex,aggregateNumericalDifferenceBetweenTwoStrings,[10|$] 4"}},{"$":{"Name":"characterArrayParsing","Value":"cmdSeq wrkflo,doesArrayContainCharacter wrkflo,removeCharacterFromArray wrkflo,replaceCharacterAtIndex"}}]}]}]}]}}
  //
  // Clearly it didn't do it's job!!
  // **************************************************
  // if (inputData && inputMetaData) {
  //   for (let key of Object.entries(inputMetaData)) {
  //     if (!inputData.hasOwnProperty(key) || typeof inputMetaData[key] !== wrd.cobject) { inputData[key] = inputMetaData[key]; }
  //     else if (inputData[key] instanceof Array && inputMetaData[key] instanceof Array) {inputData[key] = inputData[key].concat(inputMetaData[key]); }
  //     else { objectDeepMerge(inputData[key], inputMetaData[key]); }
  //   } // End-for (key of Object.keys(inputMetaData))
  //   returnData = inputData;
  // } // End-if (inputData && inputMetaData)
  // ***************************************************

  // NOTE: This implementation from Pery Mimon on the reference: Dated 2020/04/23
  // https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
  // Did not work:
  // Throws an error: inputMetaData is not iterable
  // **************************************************
  // if (inputData && inputMetaData) {
  //   for (source of inputMetaData) {
  //     for (let k in source) {
  //       let vs = source[k], vt = inputData[k];
  //       if (Object(vs) === vs && Object(vt) === vt) {
  //         inputData[k] = objectDeepMerge(vt, vs);
  //         continue;
  //       }
  //       inputData[k] = source[k];
  //     } // End-for (let k in source)
  //   } // End-for (source of inputMetaData)
  //   returnData = inputData;
  // } // End-if (inputData && inputMetaData)
  // **************************************************

  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getNamespacedDataObject
 * @description Navigates the D data structure JSON data object tree to find the namespace of data settings.
 * @param {array<string>} inputData The path in the data JSON object where the
 * setting should be returned.
 * @param {boolean} inputMetaData True or False value to indicate if
 * the path elements should be created or not it they are not found.
 * @return {object|boolean} The object found at the specified namespace address in the data object,
 * or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2022/05/10
 * @NOTE This function contains duplicate code from the configurator.js,
 * however, we cannot call this business rule from the configurator because
 * the configurator gets called before the business rules are bootstrapped.
 * And there are protections in place, but rules cannot be called if they are not yet bootstrapped.
 * So therefore this code will need to remain duplicated.
 * And by the time this gets called everything should be effectively bootstrapped.
 * Therefore we can use the loggers here.
 */
async function getNamespacedDataObject(inputData, inputMetaData) {
  let functionName = getNamespacedDataObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let processingValidData = false;
  let namespaceDataObject = D;
  if (inputData && inputData.length > 0) {
    for (const element of inputData) {
      processingValidData = true;
      if (!namespaceDataObject[element] && inputMetaData === true) {
        // It doesn't exist yet, so lets make it.
        namespaceDataObject[element] = {};
      } else if (!namespaceDataObject[element]) {
        console.log(msg.cnamespaceDataObjectPathNotFound + JSON.stringify(element));
        processingValidData = false;
        break;
      }
      namespaceDataObject = namespaceDataObject[element];
    } // End-for (const element of inputData)
    if (processingValidData === true) {
      returnData = namespaceDataObject;
    }
  } // End-if (inputData && inputData.length > 0)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setNamespacedDataObject
 * @description Persists a change to the data structure.
 * @param {array<string>} inputData The path in the data JSON object where the
 * setting should be persisted.
 * @param {object} inputMetaData The data to be persisted on the D-data structure.
 * @return {boolean} True or False to indicate if the data was persisted correctly or not.
 * @author Seth Hollingsead
 * @date 2022/05/11
 */
async function setNamespacedDataObject(inputData, inputMetaData) {
  let functionName = setNamespacedDataObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  let namespaceDataObject = D;
  if (inputData && inputData.length > 0) {
    for (let i = 0; i < inputData.length - 1; i++) {
      namespaceDataObject = namespaceDataObject[inputData[i]];
      if (i === inputData.length - 2) {
        // namespaceDataObject is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceDataObjectIs + JSON.stringify(namespaceDataObject));
        let fullyQualifiedKey = namespaceDataObject.join(bas.cDot);
        if (await ruleParsing.processRulesInternal([[namespaceDataObject, cfg.cdebugSetting], await ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]) === true) {
          namespaceDataObject[fullyQualifiedKey] = inputMetaData;
        } else {
          namespaceDataObject[inputData[i + 1]] = inputMetaData;
        }
        returnData = true;
      } // End-if (i === inputData.length - 2)
    } // End-for (let i = 0; i < inputData.length - 1; i++)
  } // End-if (inputData && inputData.length > 0)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  arraysAreEqual,
  storeData,
  getStoredData,
  isObjectEmpty,
  isArrayEmpty,
  isObject,
  isArray,
  isArrayOrObject,
  isNonZeroLengthArray,
  arrayDeepClone,
  objectDeepMerge,
  getNamespacedDataObject,
  setNamespacedDataObject
};
