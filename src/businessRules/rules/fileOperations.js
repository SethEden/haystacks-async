/**
 * @file fileOperations.js
 * @module fileOperations
 * @description Contains all of the functions required to do file operations
 * on a physical/virtual hard drive and/or mounted volume.
 * Including loading files, saving files, reloading files, resaving files,
 * copying files, moving files, copying folders including copying folders recursively,
 * zipping files and saving sip-packages as part of a deployment/release process.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/adm-zip|adm-zip}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/papaparse|papaparse}
 * @requires {@link https://www.npmjs.com/package/xml2js|xml2js}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/28
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from './ruleParsing.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import admZip from 'adm-zip';
import fs from 'fs';
import papa from 'papaparse';
import xml2js from 'xml2js';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.fileOperations.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;
const directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation', 'Recycle', 'Trash', 'config.json'];
let filesCollection = [];
let enableFilesListLimit = false;
let filesListLimit = -1;
let hitFileLimit = false;
xml2js.Parser({
  parseNumbers: true,
  parseBooleans: true,
  explicitArray: false,
  mergeAttrs: true
});

/**
 * @function getXmlData
 * @description Loads the specified file and parses it into JSON objects, all strings.
 * @param {string} inputData The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} A parsed JSON object containing all of the data, meta-data, objects,
 * values and attributes that were stored  in the specified XML file.
 * @author Seth Hollingsead
 * @date 2022/04/28
 */
async function getXmlData(inputData, inputMetaData) {
  let functionName = getXmlData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let pathAndFilename = path.resolve(inputData);
  let data = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let xml;
  await xml2js.parseString(data,
  async function(err, result) {
    if (err) {
      // ERROR:
      returnData = console.log(sys.cERROR_Colon + err);
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
      return returnData;
    } // End-if (err)
    xml = result;
  });
  returnData = xml;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getCsvData
 * @description Loads the specified file and parses it into JSON objects.
 * @NOTE This function only does the loading and preliminary parsing.
 * Some clients might need their own parsing business rules so this might need to be refactored according to business needs.
 * We want to keep everything as modular as possible to allow for this future proofing flexibility.
 * @param {string} inputData The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processin.
 * @author Seth Hollingsead
 * @date 2022/04/28
 */
async function getCsvData(inputData, inputMetaData) {
  let functionName = getCsvData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let pathAndFilename = path.resolve(inputData);
  let data = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  returnData = await papa.parse(data, {
    delimiter: ',',
    newline: '/n',
    header: true,
    skipEmptyLines: true,
    encoding: gen.cUTF8
  });
  // DONE loading data from:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneLoadingDataFrom + pathAndFilename);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getJsonData
 * @description Loads the specified file and parses it into a JSON object(s).
 * @param {string} inputData The path and file name of the JSON file that
 * should be loaded and parsed into JSON objects.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2022/04/28
 * @NOTE Cannot use the loggers her, because of a circular dependency.
 */
// eslint-disable-next-line no-unused-vars
async function getJsonData(inputData, inputMetaData) {
  // let functionName = getJsonData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  // Make sure to resolve the path on the local system,
  // just in case there are issues with the OS that the code is running on.
  let pathAndFilename = path.resolve(inputData);
  let rawData = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let returnData = JSON.parse(rawData);
  // console.log(`DONE loading data from: ${inputData}`);
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function writeJsonData
 * @description Writes out JSON data to the specified file and path location, it will automatically over-write any existing file.
 * @param {string} inputData The path and file name for the file that should have data written to it.
 * @param {object} inputMetaData The data that should be written to the specified file.
 * @return {boolean} True of False to indicate if the file was written out successfully or not.
 * @author Seth Hollingsead
 * @date 2022/04/28
 */
async function writeJsonData(inputData, inputMetaData) {
  let functionName = writeJsonData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  try {
    fs.writeFileSync(inputData, JSON.stringify(inputMetaData, null, 2));
    returnData = true;
  } catch (err) {
    // ERROR:
    console.error(sys.cERROR_Colon + err);
  }
  // Data was written to the file;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cDataWasWrittenToTheFile + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function readDirectoryContents
 * @description This function acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * Also that function doesn't technically return anything, it works with a global variable that
 * needs to be reset after the work is done with it. So these are the things that this wrapper function can do.
 * @param {string} inputData The path that needs to be scanned.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} An object containing any array of all the files in the folder and all sub-folders.
 * @author Seth Hollingsead
 * @date 2022/04/28
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
// eslint-disable-next-line no-unused-vars
async function readDirectoryContents(inputData, inputMetaData) {
  // let functionName = readDirectoryContents.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = [];
  // Make sure to resolve the path on the local system,
  // just in case there are issues with the OS that the code is running on.
  let directory = path.resolve(inputData);
  await readDirectorySynchronously(directory);
  returnData = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  // console.log(`DONE loading data from: ${inputData}`);
  // console.log(msg.creturnDataIs + JSON.stringify(returnData));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function scanDirectoryContents
 * @description This function also acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * The difference between this function and the readDirectoryContents is that this function has an optional limit on the number of files to return.
 * Really this is used for scanning large volumes of data such as the entire C-Drive.
 * This way the user can control the number of files that are returned by the system.
 * The user might only want 10,000 files or just the first million files found. etc...
 * @param {string} inputData The path that should be scanned for files including all sub-folders and all sub-files.
 * @param {array<boolean,integer>} inputMetaData An array that contains a boolean flag for enable the limit and an integer for what the limit should be:
 * inputMetaData[0] = enableLimit - True or False to indicate if the boolean imit should be enabled or not.
 * inputMetaData[1] = filesLimit - The number of files that should be limited when scanning, if the enableLimit is set to True.
 * @return {array<string>} An array of all the files in the folder up to the limit if specified.
 * @author Seth Hollingsead
 * @date 2022/05/02
 */
async function scanDirectoryContents(inputData, inputMetaData) {
  let functionName = scanDirectoryContents.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // Path that should be scanned is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cPathThatShouldBeScannedIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let enableLimit = inputMetaData[0];
  let filesLimit = inputMetaData[1];
  // enableLimit is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cenableLimitIs + enableLimit);
  // filesLimit is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesLimitIs + filesLimit);
  let filesFound = [];
  let directory = path.resolve(inputData);
  enableFilesListLimit = enableLimit;
  filesListLimit = filesLimit;
  await readDirectorySynchronously(directory, '');
  filesFound = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  enableFilesListLimit = false;
  filesListLimit = -1;
  hitFileLimit = false;
  // files found are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cfilesFoundAre + JSON.stringify(filesFound));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return filesFound;
}

/**
 * @function getDirectoryList
 * @description Scans the specified path and returns the list of folders at that level. Does not scan recursively.
 * @param {string} inputData The path that should be scanned for getting a folder list at that folder level.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The list of folders found at the specified path.
 * @author Seth Hollingsead
 * @date 2022/06/10
 */
async function getDirectoryList(inputData, inputMetaData) {
  let functionName = getDirectoryList.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    returnData = fs.readdirSync(inputData, { withFileTypes: true })
      .filter((item) => item.isDirectory())
      .map((item) => item.name);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and loads all of the files contained in each sub-folder into a map.
 * @param {string} inputData The system path that should be scanned recursively for files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} A map of all the files contained in all levels of the specified path in all the folders and sub-folders.
 * @NOTE The function doesn't actually return anything, all the file data is stored in an external data collection.
 * @author wn050
 * @reference https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directores-nodejs
 * @date 2020/05/22
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
// eslint-disable-next-line no-unused-vars
async function readDirectorySynchronously(inputData, inputMetaData) {
  // let functionName = readDirectorySynchronously.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  if (hitFileLimit === false) {
    let directory = path.resolve(inputData); // Make sure to resolve the path on the local system.
    let currentDirectoryPath = directory;
    let currentDirectory = '';
    try {
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    } catch (err) {
      console.log(msg.cERROR + err.message);
      fs.mkdirSync(currentDirectoryPath);
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    }
    // console.log('currentDirectoryContents are: ' + JSON.stringify(currentDirectory));
    await currentDirectory.forEach(async file => {
      // console.log('checking for file: ' + file);
      let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
      let pathOfCurrentItem = directory + bas.cForwardSlash + file;
      try {
        // console.log('BEGIN TRY');
        if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
          // console.log('Its a file, and not to be skipped!');
          if (enableFilesListLimit === true && filesListLimit > 0) {
            // console.log('list limit is enabled, not sure if we hit it yet or not.');
            if (filesCollection.length <= filesListLimit) {
              // console.log('Did not hit the file limit yet!');
              filesCollection.push(pathOfCurrentItem);
              // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
            } else {
              // console.log('Hit the file limit!!');
              hitFileLimit = true;
              return;
            }
          } else {
            // console.log('adding the file the old fashioned way.');
            filesCollection.push(pathOfCurrentItem);
          }
        } else if (!filesShouldBeSkipped) {
          // console.log('its not a file, but it should not be skipped!');
          // NOTE: There is a difference in how paths are handled in Windows VS Mac/Linux.
          // So far now I'm putting this code here like this to handle both situations.
          // The ideal solution would be to detect which OS the code is being run on.
          // Then handle each case appropriately.
          let directoryPath = '';
          directoryPath = path.resolve(directory + bas.cForwardSlash + file);
          // console.log(`directoryPath is ${directoryPath}`);
          await readDirectorySynchronously(directoryPath, '');
          // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
        } // End-else-if (!filesShouldBeSkipped)
        // console.log('END TRY');
        // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
      } catch (err) { // Catch the error in the hopes that we can continue scanning the file system.
        console.log(msg.cErrorInvalidAccessTo + pathOfCurrentItem);
      }
    }); // End-currentDirectory.forEach(file => {
    // console.log(`END ${namespacePrefix}${functionName} function`);
  } // End-if (hitFileLimit === false)
}

/**
 * @function copyAllFilesAndFoldersFromFolderToFolder
 * @description Copies all of the files and folders recursively from the source folder to the destination folder.
 * @param {array<string>} inputData An array containing the source and destination paths.
 * Example:
 * inputData[0] = source path
 * inputData[1] = destination path
 * @param {array<array<string>>} inputMetaData Two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * filterArray[0] = exclusion array
 * filterArray[1] = inclusion array
 * @return {boolean} A True or False value to indicate if the full copy process is successful or not.
 * @author Seth Hollingsead
 * @date 2022/05/02
 * @NOTE This is mainly used by the build system to execute a copy process for the
 * non-code files from the source folder to the bin folder.
 * But it could also be used by a self-installing system to copy files from an execution path to an installation path.
 * @NOTE This is a wrapper fro the copyFolderRecursiveSync business rule, because that one is recursive.
 */
async function copyAllFilesAndFoldersFromFolderToFolder(inputData, inputMetaData) {
  let functionName = copyAllFilesAndFoldersFromFolderToFolder.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  returnData = await copyFolderRecursiveSync(inputData, inputMetaData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function buildReleasePackage
 * @description Add all the files from the source folder into a zip file and
 * give a name to the file for the current date-time and release version, saving to the destination folder.
 * @param {string} inputData The folder that should be packaged up for the release zip file.
 * @param {string} inputMetaData The folder where the zip file release package should be saved.
 * @return {boolean} A True or False value to indicate if the release package process is successful or not.
 * @author Seth Hollingsead
 * @date 2022/05/02
 */
async function buildReleasePackage(inputData, inputMetaData) {
  let functionName = buildReleasePackage.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  let sourceFolder = '';
  let destinationFolder = '';
  let releaseFiles = [];
  let releasedArchiveFiles = [];
  let rootPath = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationCleanedRootPath);
  let currentVersion = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
  let applicationName = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
  let currentVersionReleased = false;
  let releaseDateTimeStamp;
  let originalSource;
  let zip = new admZip();
  // current version is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentVersionIs + currentVersion);
  originalSource = bas.cDot + inputData;
  sourceFolder = path.resolve(rootPath + inputData);
  destinationFolder = path.resolve(rootPath + inputMetaData);
  releaseFiles = await readDirectoryContents(sourceFolder);
  releasedArchiveFiles = await readDirectoryContents(destinationFolder);
  // released archive files list is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.creleasedArchiveFilesListIs + JSON.stringify(releasedArchiveFiles));
  // Check if the current version number has already been released as a zip file in the release folder.
  // If it has not been released, then we can build the zip file with the current release number and date-time stamp.
  for (let i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    // file is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cfileIs + releasedArchiveFiles[i]);
    let pathAndFileName = releasedArchiveFiles[i];
    let fileName = await ruleParsing.processRulesInternal([pathAndFileName, ''], [biz.cgetFileNameFromPath]);
    fileName = await ruleParsing.processRulesInternal([fileName, ''], [biz.cremoveFileExtensionFromFileName]);
    // fileName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cfileNameIs + fileName);
    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  } // End-for (let i = 0; i <= releasedArchiveFiles.length - 1; i++)
  if (currentVersionReleased === false) {
    // release files list is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.creleaseFilesListIs + JSON.stringify(releaseFiles));
    releaseDateTimeStamp = await ruleParsing.processRulesInternal([await configurator.getConfigurationSetting(wrd.csystem, cfg.cdateTimeStamp), ''], [biz.cgetNowMoment]);
    // release date-time stamp is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.creleaseDateTimeStampIs + releaseDateTimeStamp);
    let releaseFileName = releaseDateTimeStamp + bas.cUnderscore + currentVersion + bas.cUnderscore + applicationName;
    // release fileName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.creleaseFileNameIs + releaseFileName);
    let fullReleasePath = path.resolve(destinationFolder + bas.cForwardSlash + releaseFileName + gen.cDotzip);
    try {
      await zip.addLocalFolder(sourceFolder, originalSource);
      await zip.writeZip(fullReleasePath);
      // Done writing the zip file:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneWritingTheZipFile + fullReleasePath);
      // Set the return packageSuccess flag to True
      await loggers.consoleLog(namespacePrefix + functionName, msg.cSetTheReturnPackageSuccessFlagToTrue);
      returnData = true;
    } catch (err) {
      // ERROR: Zip package release failed:
      console.log(msg.cErrorZipPackageReleaseFailed);
      console.error(err.stack);
      // eslint-disable-next-line no-undef
      process.exit(1);
    }
  } else {
    // current version already released
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentVersionAlreadyReleased);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function createZipArchive
 * @description Creates a new zip archive of the files listed in the input array,
 * and saves the file to the specified file path and name.
 * @param {array<string>} inputData All the folders and paths to include in the zip archive.
 * @param {string} inputMetaData The full path and file name to the
 * destination where the zip file should be saved.
 * @return {boolean} A True or False value to indicate if the zip file was created successfully or not.
 * @author Seth Hollingsead
 * @date 2022/05/02
 */
async function createZipArchive(inputData, inputMetaData) {
  let functionName = createZipArchive.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  let zip = new admZip();
  try {
    await zip.addLocalFolder(inputData);
    await zip.writeZip(inputMetaData);
    // Done writing the zip file:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneWritingTheZipFile + inputMetaData);
    returnData = true;
  } catch (err) {
    // ERROR: Zip package release failed
    console.log(msg.cErrorZipPackageReleaseFailed);
    console.error(err.stack);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function cleanRootPath
 * @description Takes the application  root path and cleans it to give a real root path.
 * or top-level folder path for the application.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The real rot path or top-level path for the application.
 * @NOTE
 */
async function cleanRootPath(inputData, inputMetaData) {
  let functionName = cleanRootPath.name
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationRootPath);
  // RootPath before processing is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cRootPathBeforeProcessingIs + returnData);
  returnData = await ruleParsing.processRulesInternal([returnData, 3], [biz.cremoveXnumberOfFoldersFromEndOfPath]);
  // console.log(msg.creturnDataIs + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function copyFileSync
 * @description Reads the files from the source and copies them to the target,
 * ignoring any files that match with any of the contents of the exclusionArray.
 * @param {array<string>} inputData An array containing the source and destination paths.
 * Example:
 * inputData[0] = source path
 * inputData[1] = destination path
 * @param {array<array<string>>} inputMetaData Two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusions array over-rides the exclusion array.
 * Example:
 * inputMetaData[0] = exclusionArray
 * inputMetaData[1] = inclusionArray
 * @return {boolean} A True or False to indicate if the copy operation was successful or not.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */
async function copyFileSync(inputData, inputMetaData) {
  let functionName = copyFileSync.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let source = inputData[0];
  let target = inputData[1];
  let exclusionArray = inputMetaData[0];
  let inclusionArray = inputMetaData[1];
  let targetFile = target;
  let successfulCopy = false;

  // If target is a directory a new file with the same name will be created.
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  } // End-if (fs.existsSync(target))
  try {
    let foundExclusion = false;
    let foundInclusion = false;
    if (inclusionArray) {
      for (const element of inclusionArray) {
        if (source.includes(element)) {
          foundInclusion = true;
          break;
        }
      } // End-for (const element of inclusionArray)
    } // End-if (inclusionArray)
    if (exclusionArray) {
      for (const element of exclusionArray) {
        if (source.includes(element)) {
          foundExclusion = true;
          break;
        }
      } // End-for (const element of exclusionArray)
    } // End-if (exclusionArray)
    // We need a logical converse operation:
    // https://en.wikipedia.org/wiki/Converse_(logic)
    if (foundInclusion || !(foundInclusion || foundExclusion)) {
      fs.writeFileSync(targetFile, fs.readFileSync(source));
      successfulCopy = true;
    } else {
      // console.log('Detected an exclusion condition.');
    }
  } catch (err) {
    // ERROR: Could not copy file:
    console.log(msg.cErrorCouldNotCopyFile + source);
    console.log(err);
    successfulCopy = false;
  }
  returnData = successfulCopy;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function copyFolderRecursiveSync
 * @description Copies a folder and all of its files and sub-folders and sub-files recursively.
 * @param {array<string>} inputData An array containing the source and destination paths.
 * Example:
 * inputData[0] = source path
 * inputData[1] = destination path
 * @param {array<array<string>>} inputMetaData Two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * inputMetaData[0] = exclusionArray
 * inputMetaData[1] = inclusionArray
 * @return {boolean} A True or False value to indicate fi the copy operation was a success or not.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */
async function copyFolderRecursiveSync(inputData, inputMetaData) {
  let functionName = copyFolderRecursiveSync.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let files = [];
  let source = inputData[0];
  let target = inputData[1];
  let targetFolder = '';
  let successfulCopy = false;

  // check if folder needs to be created or integrated,
  // but first check if the source is the /src/ folder, because we don't want to duplicate that.
  // otherwise we would be copying /src/ to /bin/src/ and that we do not want!!
  let pathLeafNode = path.basename(source);
  if (pathLeafNode.includes(wrd.csrc)) {
    targetFolder = target;
  } else {
    targetFolder = path.join(target, pathLeafNode);
  }
  targetFolder = path.resolve(targetFolder);
  if (fs.existsSync(targetFolder) !== true) {
    try {
      // console.log('making the path');
      fs.mkdirSync(targetFolder);
      // NOTE: Just because we complete the above code doesn't mean the entire copy process was a success.
      // But at least we haven't errored out, so it wasn't a failure YET.
    } catch (err) {
      // ERROR: Could not create folder:
      console.log(msg.cErrorCouldNotCreateFolder + targetFolder);
      // ERROR:
      console.log(msg.cERROR_Colon + err);
    }
  } else {
    // console.log('Supposedly the path exists!');
  } // End-if (!fs.existsSync(targetFolder))

  // try {
  //   console.log('attempt to access the path/file: ' + targetFolder);
  //   fs.accessSync(targetFolder);
  // } catch (err) {
  //   console.log('access did not work out, so create the folder.');
  //   fs.mkdirSync(targetFolder);
  //   console.log('targetFolder created');
  // }

  // try {
  //   console.log('attempt to access the path/file: ' + targetFolder);
  //   fs.statSync(targetFolder);
  // } catch (err) {
  //   console.log('access did not work out, so create the folder.');
  //   fs.mkdirSync(targetFolder);
  //   console.log('targetFolder created');
  // }

  // Copy
  try {
    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source);
      await files.forEach(async function(file) {
        let currentSource = path.join(source, file);
        if (fs.lstatSync(currentSource).isDirectory()) {
          successfulCopy = await copyFolderRecursiveSync([currentSource, targetFolder], inputMetaData);
        } else {
          successfulCopy = await copyFileSync([currentSource, targetFolder], inputMetaData);
        }
      });
    } // End-if (fs.lstatSync(source).isDirectory())
  } catch (err) {
    // ERROR: Could not copy folder contents:
    console.log(msg.cErrorCouldNotCopyFolderContents + targetFolder);
    // ERROR:
    console.log(msg.cERROR_Colon + err);
    successfulCopy = false;
  }
  returnData = successfulCopy;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function appendMessageToFile
 * @description Opens a file and appends a message to the file, then closes the file.
 * @param {string} inputData The fully qualified path and file name for the file that should be opened, appended and saved.
 * @param {string} inputMetaData The message that should be appended to the specified file.
 * @return {boolean} A True or False to indicate if the append happened successfully or not.
 * @author Seth Hollingsead
 * @date 2022/05/02
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function appendMessageToFile(inputData, inputMetaData) {
  // let functionName = appendMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(msg.cinputDataIs + inputData);
  // console.log(msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let fd;
  if (inputData && inputMetaData) {
    try {
      // console.log('open the file sync');
      fd = fs.openSync(inputData, bas.ca);
      // console.log('append to the file sync');
      fs.appendFileSync(fd, inputMetaData + bas.cCarriageReturn + bas.cNewLine, gen.cUTF8);
      // console.log('DONE appending to the file');
    } catch (err) {
      return console.log(err);
    } finally {
      if (fd !== undefined) {
        fs.closeSync(fd);
      }
    } // End-finally
  } // End-if (inputData && inputMetaData)
  // console.log(msg.creturnDataIs + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  getXmlData,
  getCsvData,
  getJsonData,
  writeJsonData,
  readDirectoryContents,
  scanDirectoryContents,
  getDirectoryList,
  readDirectorySynchronously,
  copyAllFilesAndFoldersFromFolderToFolder,
  buildReleasePackage,
  createZipArchive,
  cleanRootPath,
  copyFileSync,
  copyFolderRecursiveSync,
  appendMessageToFile
}
