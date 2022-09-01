/**
 * @file dataDirectorate.js
 * @module dataDirectorate
 * @description Contains all of the data directorate commands.
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../../brokers/dataBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.dataDirectorate.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function printDataHive
 * @description Prints out all the data contents of a particular data hive in the D-data structure.
 * If no hive is specified then the entire D-data structure will be printed.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a dat hive name at the top level of the D-data structure.
 * Examples: Configuration, Workflows, Colors, cCommandAliases, etc...
 * inputData[0] === 'printDataHive'
 * inputData[1] === dataHiveName
 * @NOTE This function is now going to support printing specific child data-hives.
 * Example: ConstantsValidationData.ColorConstantsValidation
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
async function printDataHive(inputData, inputMetaData) {
  let functionName = printDataHive.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let printDataHiveToLogFileConfigSetting = await configurator.getConfigurationSetting(wrd.csystem, cfg.cprintDataHiveToLogFile);
  let logFilePathAndName = '';
  logFilePathAndName = await loggers.getLogFileNameAndPath();
  // logFilePathAndName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.clogFilePathAndNameIs + logFilePathAndName);
  if (inputData && inputData[1].includes(bas.cDot) === true) {
    let dataHivePathArray = inputData[1].split(bas.cDot);
    let leafDataHiveElement = D;
    // dataHivePathArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
    // This for-loop should let us drill down in the D-Data structure following the path that was provided.
    // This assumes the namespace style path provided is a valid hierarchy in the D-Data Structure.
    for (let i = 0; i < dataHivePathArray.length; i++) {
      // BEGIN i-th iteration:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
      leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
      // contents of leafDataHiveElement is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
      // END i-th iteration:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
    } // End-for (let i = 0; i < dataHivePathArray.length; i++)
    console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    if (printDataHiveToLogFileConfigSetting === true) {
      await loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    }
    returnData[1] = leafDataHiveElement;
  } else {
    if (D[inputData[1]] !== undefined) {
      // contents are:
      console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      if (printDataHiveToLogFileConfigSetting === true) {
        await loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      }
      returnData[1] = D[inputData[1]];
    } else {
      // contents of D are:
      console.log(msg.ccontentsOfDare + JSON.stringify(D));
      if (printDataHiveToLogFileConfigSetting === true) {
        await loggers.printMessageToFile(logFilePathAndName, msg.ccontentsOfDare + JSON.stringify(D));
      }
      returnData[1] = D;
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function printDataHiveAttributes
 * @description Prints out all of the attributes for a given specified data-set from the D-data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive or leaf data structure in the hierarchy and
 * a name of an attribute where all values should be printed.
 * Examples ConstantsValidationData.ColorConstantsValidation.Actual
 * inputData[0] === 'printDataHiveAttributes'
 * inputData[1] === ConstantsValidationData.ColorConstantsValidation.Actual
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
async function printDataHiveAttributes(inputData, inputMetaData) {
  let functionName = printDataHiveAttributes.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  let errorMessage = '';
  if (inputData && inputData.length > 1) {
    if (inputData[1].includes(bas.cDot) === true) {
      let dataHivePathArray = inputData[1].split(bas.cDot);
      let leafDataHiveElement = D;
      // dataHivePathArray is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
      // This for-loop should let us drill down in the D-Data structure following the path that was provided.
      // This assumes the namespace style path provided is a valid hierarchy in the D-Data Structure.
      // Make sure we don't try to grab the very last term of the namespace. See note below.
      for (let i = 0; i < dataHivePathArray.length - 1; i++) {
        // BEGIN i-th iteration:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
        // contents of leafDataHiveElement is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
        // END i-th iteration:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      } // End-for (let i = 0; i < dataHivePathArray.length - 1; i++)
      await loggers.consoleLog(namespacePrefix + functionName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
      let attributeName = dataHivePathArray[dataHivePathArray.length - 1];
      if (leafDataHiveElement && leafDataHiveElement.length > 0) {
        for (const element of leafDataHiveElement) {
          let dataEntry = element;
          if (dataEntry) {
            if (attributeName.toLowerCase() === wrd.centity) {
              // entity is:
              console.log(msg.centryIs + JSON.stringify(dataEntry));
            } else {
              if (dataEntry[attributeName]) {
                // attributeValue is:
                console.log(msg.cattributeValueIs + dataEntry[attributeName]);
                returnData[1].push(dataEntry[attributeName]);
              } // End-if (dataEntry[attributeName])
            }
          } // End-if (dataEntry)
        } // End-for (const element of leafDataHiveElement)
      } else {
        let leafDataHiveElementKeys2 = Object.keys(leafDataHiveElement);
        leafDataHiveElementKeys2.forEach((key2) => {
          if (attributeName.toLowerCase() === wrd.ckey) {
            // key2 is:
            console.log(msg.ckey2Is + key2);
          } else if (attributeName.toLowerCase() === wrd.centity) {
            // entity is:
            console.log(msg.centityIs + JSON.stringify(leafDataHiveElement[key2]));
          } else {
            let dataEntry2 = leafDataHiveElement[key2];
            if (dataEntry2) {
              // attributeValue is:
              console.log(msg.cattributeValueIs + dataEntry2[attributeName]);
              returnData[1].push(dataEntry2[attributeName]);
            } // End-if (dataEntry2)
          }
        });
      }
    } else { // End-if (inputData[1].includes(bas.cDot) === true)
      // This is the case that the user has probably just specified a single data hive
      // that might not have specific attribute names such as the configuration data.
      errorMessage = msg.cprintDataHiveAttributesMessage1 + msg.cprintDataHiveAttributesMessage2;
      console.log(errorMessage);
      returnData[1] = errorMessage;
    }
  } else { // End-if (inputData && inputData.length > 1)
    // ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
    errorMessage = msg.cprintDataHiveAttributesMessage3;
    console.log(errorMessage);
    returnData[1] = errorMessage;
  } // End-else condition if (inputData && inputData.length > 1)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearDataStorage
 * @description Completely wipes out all the data stored in the DataStorage data hive of the D data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data storage name to clear.
 * If none is provided, the all data storage will be cleared!
 * inputData[0] === 'clearDataStorage'
 * inputData[1] === myDataStorage
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
async function clearDataStorage(inputData, inputMetaData) {
  let functionName = clearDataStorage.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  if (inputData[1] !== undefined) {
    dataBroker.clearData(inputData[1]);
    returnData[1] = true;
  } else {
    dataBroker.clearData('');
    returnData[1] = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function changeSetting
 * @description This command changes a setting in the D data structure, given a namespace, property name and value.
 * @param {array<string>} inputData An array that contains
 * the fully qualified path to the setting that should be changed and
 * the data that should be assigned to it.
 * inputData[0] = changeSetting
 * inputData[1] = fully.Qualified.Path
 * inputData[2] = value to assign to the data property
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/05/10
 * @NOTE Test String: changeSetting colors.ColorData.Red.ColorName removeRed
 */
async function changeSetting(inputData, inputMetaData) {
  let functionName = changeSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let errorMessage = '';
  if (inputData && inputData.length === 3) {
    let dataPath = inputData[1];
    dataPath = await ruleBroker.processRules([dataPath, ''], [biz.cgetWordsArrayFromString]);
    // dataPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + JSON.stringify(dataPath));
    let newValue = inputData[2];
    // newValue is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cnewValueIs + JSON.stringify(newValue));
    // Call dataArrayParsing.getNamespacedDataObject business rule to get the data that should be mutated.
    let parentDataObject = await ruleBroker.processRules([dataPath, ''], [biz.cgetNamespacedDataObject]);
    // parentDataObject BEFORE mutation is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cparentDataObjectBeforeMutationIs + JSON.stringify(parentDataObject))
    // Now mutate the object.
    parentDataObject = newValue;
    // parentDataObject AFTER mutation is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cparentDataObjectAfterMutationIs + JSON.stringify(parentDataObject))
    // Persist the change back to the D-data structure.
    await ruleBroker.processRules([dataPath, parentDataObject], [biz.csetNamespacedDataObject]);
    returnData[1] = true;
  } else {
    // ERROR: changeSetting command, invalid entry:
    errorMessage = msg.cchangeSettingError01 + JSON.stringify(inputData);
    console.log(errorMessage);
    returnData[1] = errorMessage;
    // Please enter a fully qualified path to a data property in the system,
    console.log(msg.cchangeSettingError02);
    // and a value that you would like to assign to that data property.
    console.log(msg.cchangeSettingError03);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  printDataHive,
  printDataHiveAttributes,
  clearDataStorage,
  changeSetting
};
