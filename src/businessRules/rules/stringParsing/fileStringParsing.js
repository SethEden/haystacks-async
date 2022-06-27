/**
 * @file fileStringParsing.js
 * @module fileStringParsing
 * @description Contains all system defined business rules for parsing strings, specific to file names.
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

const {bas, biz, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.fileStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param {string} inputData The string that should have all the folders and path removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function getFileNameFromPath(inputData, inputMetaData) {
  let functionName = getFileNameFromPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // Clean the path string for any double slashes.
    if (inputData.includes(bas.cDoubleForwardSlash)) {
      inputData = await ruleParsing.processRulesInternal([inputData, ''], [biz.cswapDoubleForwardSlashToSingleForwardSlash]);
    }
    if (inputData.includes(bas.cForwardSlash)) {
      inputData = await ruleParsing.processRulesInternal([inputData, ''], [biz.cswapForwardSlashToBackSlash]);
    }
    // inputData right before processing is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataRightBeforeProcessingIs + inputData);
    returnData = inputData.split(bas.cBackSlash).pop().trim();
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getFileExtension
 * @description Parses the file name and it may or may not also include the full path,
 * but regardless it gets the file extension of the file.
 * @param {string} inputData The string that should contain the file name to which we want to get the file extension from.
 * @param {string} inputMetaData Not sued for this business rule.
 * @return {string} The file extension such as txt, xml, csv, etc...
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function getFileExtension(inputData, inputMetaData) {
  let functionName = getFileExtension.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = path.extname(inputData);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function removeDotFromFileExtension
 * @description Removes the Dot from the file extension.
 * example: If the input is ".txt", the return value will just be "txt".
 * @param {string} inputData The string that should contain the file extension that is being modified.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension without the dot prefix.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function removeDotFromFileExtension(inputData, inputMetaData) {
  let functionName = removeDotFromFileExtension.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.substring(1);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param {string} inputData The string that should have all the characters after the last period in the file name removed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same input string but without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function removeFileExtensionFromFileName(inputData, inputMetaData) {
  let functionName = removeFileExtensionFromFileName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in making the file name comparison.
 * @return {boolean} A True or False value to indicate if the file names are equivalent.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function ascertainMatchingFilenames(inputData, inputMetaData) {
  let functionName = ascertainMatchingFilenames.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      await loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesMatch);
      returnData = true;
    } else {
      // Filenames do not match
      await loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesDoNotMatch);
    }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function supportedFileFormatsAre
 * @description Returns a list of supported file formats.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma separated ist of supported file formats. IE a list of file extensions.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function supportedFileFormatsAre(inputData, inputMetaData) {
  let functionName = supportedFileFormatsAre.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param {string} inputData The path that should have the number of folders removed.
 * @param {integer} inputMetaData The number of paths that should be removed from the input path.
 * @return {string} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData) {
  let functionName = removeXnumberOfFoldersFromEndOfPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = inputData; // assign it to something so it shouldn't resolve as false, unless it gets set to false.
  if (inputData && await ruleParsing.processRulesInternal([inputMetaData, ''], [biz.cisInteger]) === true) {
    let pathArray;
    let pathAsForwardSlash;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
      pathAsForwardSlash = true;
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
      pathAsForwardSlash = false;
    } else {
      pathAsForwardSlash = false;
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        // current path element is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentPathElementIs + pathArray[i]);
        if (i === 0) {
          returnData = pathArray[i];
        } else {
          if (pathAsForwardSlash === true) {
            returnData = returnData + bas.cForwardSlash + pathArray[i];
          } else if (pathAsForwardSlash === false) {
            returnData = returnData + bas.cBackSlash + pathArray[i];
          } else {
            returnData = false;
            break;
          }
        } // End-else-clause if (i === 0)
      } // End-for(let i = 0; i <= pathArray.length - inputMetaData - 1; i++)
      // We still need a trailing slash
      if (pathAsForwardSlash === true) {
        returnData = returnData + bas.cForwardSlash;
      } else if (pathAsForwardSlash === false) {
        returnData = returnData + bas.cBackSlash;
      } else {
        returnData = false;
      }
    } // End-if (returnData !== false)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getFirstTopLevelFolderFromPath
 * @description Takes a path and returns the folder at the farthest right of that path.
 * @param {string} inputData The path that should be evaluated.
 * @param {string} inputMetaData Not used fore this business rule.
 * @return {string} The folder at the far-right of the input path.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
async function getFirstTopLevelFolderFromPath(inputData, inputMetaData) {
  let functionName = getFirstTopLevelFolderFromPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let pathArray;
    if (inputData.includes(bas.cForwardSlash) === true) {
      pathArray = inputData.split(bas.cForwardSlash);
    } else if (inputData.includes(bas.cBackSlash) === true) {
      pathArray = inputData.split(bas.cBackSlash);
    } else {
      returnData = false;
    }
    if (returnData !== false) {
      // pathArray is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpathArrayIs + JSON.stringify(pathArray));
      returnData = pathArray[pathArray.length - 2];
    } // End-if (returnData !== false)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getFileNameFromPath,
  getFileExtension,
  removeDotFromFileExtension,
  removeFileExtensionFromFileName,
  ascertainMatchingFilenames,
  supportedFileFormatsAre,
  removeXnumberOfFoldersFromEndOfPath,
  getFirstTopLevelFolderFromPath
};
