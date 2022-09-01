/**
 * @file pathArrayParsing.js
 * @module pathArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to paths.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.pathArrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doesArrayContainFilename
 * @description Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The array of file names that should be checked for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input array.
 * @return {boolean} A True or False value to indicate if the file name was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
async function doesArrayContainFilename(inputData, inputMetaData) {
  let functionName = doesArrayContainFilename.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  // NOTE: This call doesn't actually work, it may have worked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to ust call that same function in a loop to figure out the result.
  // Can solve this when we build unit tests.
  returnData = await ruleParsing.processRulesInternal([[inputData, inputMetaData], await ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]);

  // NOTE: The below code also works, I am going to attempt to re-enable the above code and see if it also works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.Length; i++) {
  //   if (ruleParsing.processRulesInternal([inputData[i], inputMetaData], [biz.cascertainMatchingFilenames]) {
  //     returnData = true;
  //     break;
  //   }
  // } // End-for (let i = 0; i < inputData.Length; i++)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getFileAndPathListForPath
 * @description Scans all files and folders recursively given an input path and
 * returns a list of all files and their full paths found under the specified input path.
 * @param {string} inputData The path that should be scanned for files and their full paths.
 * @param {integer} inputMetaData Optional file limit, ignored if the configuration flag is not set to true,
 * if nothing is passed the configuration setting will be used.
 * @return {array<string>} The array that contains the full path and file name for every file found under the specified path.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function getFileAndPathListForPath(inputData, inputMetaData) {
  let functionName = getFileAndPathListForPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let enableFilesListLimit, filesListLimit;
  if (inputData) {
    if (inputMetaData) {
      enableFilesListLimit = await configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableFilesListLimit);
      filesListLimit = inputMetaData;
    } else {
      enableFilesListLimit = await configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableFilesListLimit);
      filesListLimit = await configurator.getConfigurationSetting(wrd.csystem, cfg.cFilesListLimit);
    }
    // filesListLimit is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesListLimitIs + filesListLimit);
    returnData = await ruleParsing.processRulesInternal([inputData, [enableFilesListLimit, filesListLimit]], [biz.cscanDirectoryContents]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  doesArrayContainFilename,
  getFileAndPathListForPath
};
