/**
 * @file dataStringParsing.js
 * @module dataStringParsing
 * @description Contains all system defined business rules for parsing strings as related to data.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.dataStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getAttributeName
 * @description Takes a string representation of a JSON attribute and gets the name (left hand assignment key).
 * @param {string} inputData Teh string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function getAttributeName(inputData, inputMetaData) {
  let functionName = getAttributeName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + JSON.stringify(attributeArray));
    // attributeArray[0] is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray0Is + attributeArray[0]);
    returnData = await ruleParsing.processRulesInternal([attributeArray[0], [/"/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = returnData.trim();
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getAttributeValue
 * @description Takes a string representation of a JSON attribute and gets the value (Right hand assignment value).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The value of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/10
 */
async function getAttributeValue(inputData, inputMetaData) {
  let functionName = getAttributeValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray1Is + attributeArray[1]);
    returnData = await ruleParsing.processRulesInternal([attributeArray[1], [/"/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = returnData.trim();
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignment operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assignment operator.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function getValueFromAssignmentOperationString(inputData, inputMetaData) {
  let functionName = getValueFromAssignmentOperationString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let parsedString = inputData.split(bas.cEqual);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c1 + msg.cSpaceIsColonSpace + parsedString[0]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c2 + msg.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getDataCategoryFromDataContextName
 * @description Gets the data category from the context name, E.g. Input: Page_ProjectList, data category is 'Page'.
 * @param {string} inputData The data context name, which should also contain the data category separated by underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data category, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getDataCategoryFromDataContextName(inputData, inputMetaData) {
  let functionName = getDataCategoryFromDataContextName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCategory = inputData.split(bas.cUnderscore);
    returnData = dataCategory[0];
    // Data Category should be:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cDataCategoryShouldBe + dataCategory[0]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getDataCategoryDetailNameFromDataContextName
 * @description Gets the data category detail name from the context name, E.G. Input: Page_ProjectList, data category is 'ProjectList'.
 * @param {string} inputData The data context name, which should also contain the
 * data category and data category detail name separated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data category detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getDataCategoryDetailNameFromDataContextName(inputData, inputMetaData) {
  let functionName = getDataCategoryDetailNameFromDataContextName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCategoryDetailName = inputData.split(bas.cUnderscore);
    returnData = dataCategoryDetailName[1];
    // Data Category Detail Name should be:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cDataCategoryDetailNameShouldBe + dataCategoryDetailName[1]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param {string} inputData The data context name, which should also contain the
 * data category and data category detail name and keyword name separated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getKeywordNameFromDataContextName(inputData, inputMetaData) {
  let functionName = getKeywordNameFromDataContextName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCategoryKeywordName = inputData.split(bas.cUnderscore);
    returnData = dataCategoryKeywordName[2];
    // Keyword Name should be:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cKeywordNameShouldBe + dataCategoryKeywordName[2]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores it in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} The data that was loaded, because sometimes a client command might need to use this to load data.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function loadDataFile(inputData, inputMetaData) {
  let functionName = loadDataFile.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    await loggers.consoleLog(namespacePrefix + functionName, msg.cLoadDataFileMessage1 + msg.cloadDataFileMessage2);
  } else { // Else-clause if (!inputData)
    let loadedData = {};
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // Attempting to load XML data!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadXmlData);
      loadedData = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetXmlData]);
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // Attempting to load CSV data!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadCsvData);
      loadedData = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetCsvData]);
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      // Attempting to load JSON data!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadJsonData);
      loadedData = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetJsonData]);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + await ruleParsing.processRulesInternal(['', ''], [biz.csupportedFileFormatsAre]));
    }
    // Loaded data is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cLoadedDataIs + JSON.stringify(loadedData));
    returnData = loadedData;
    if (loadedData !== null && loadedData && inputMetaData) {
      await ruleParsing.processRulesInternal([inputMetaData, loadedData], [biz.cstoreData]);
    }
  } // End-else-clause if (!inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function saveDataFile
 * @description Saves data from a specified data to a specified path and file name.
 * @param {string} inputData The full path and file name were the data should be saved.
 * @param {object} inputMetaData The data that should be saved out to the specified file.
 * @return {boolean} True or False value to indicate if the file was saved successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/17
 */
async function saveDataFile(inputData, inputMetaData) {
  let functionName = saveDataFile.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (!inputData) {
    // WARNING: No data to save, please specify a valid path & filename!
    await loggers.consoleLog(namespacePrefix + functionName, msg.csaveDataFileMessage1 + msg.cloadDataFileMessage2);
  } else {
    let supportedFileFormats = await ruleParsing.processRulesInternal(['', ''], [biz.csupportedFileFormatsAre]);
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // WARNING: Invalid file format, file formats supported are:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormats);
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // WARNING: Invalid file format, file formats supported are:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormats);
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      returnData = await ruleParsing.processRulesInternal([inputData, inputMetaData], [biz.cwriteJsonData]); // Should return true if the write is successful.
    } else {
      // WARNING: Invalid file format, file formats supported are:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormats);
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function getUserNameFromEmail(inputData, inputMetaData) {
  let functionName = getUserNameFromEmail.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    await loggers.consoleLog(namespacePrefix + functionName, msg.cIndexOfTheSpace + bas.cAt +
      sys.cSpaceIsColonSpace + inputData.indexOf(bas.cAt));
    returnData = inputData.substring(0, inputData.indexOf(bas.cAt));
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getAttributeName,
  getAttributeValue,
  getValueFromAssignmentOperationString,
  getDataCategoryFromDataContextName,
  getDataCategoryDetailNameFromDataContextName,
  getKeywordNameFromDataContextName,
  loadDataFile,
  saveDataFile,
  getUserNameFromEmail
};
