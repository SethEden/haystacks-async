/**
 * @file fileOperations.js
 * @module fileOperations
 * @description Contains all of the functions required to do file operations
 * on a physical/virtual hard drive and/or mounted volume.
 * Including loading files, saving files, reloading files, resaving files,
 * copying files, moving files, copying folders including copying folders recursively,
 * zipping files and saving zip-packages as part of a deployment/release process.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/adm-zip|adm-zip}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/papaparse|papaparse}
 * @requires {@link https://www.npmjs.com/package/xml2js|xml2js}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import admZip from 'adm-zip';
import fs from 'fs';
import papa from 'papaparse';
import xml2js from 'xml2js';
import path from 'path';

const {bas, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.fileOperations.
const namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;
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
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {object} A parsed JSON object contianing all of the data, meta-data, objects,
 * values and attributes that were stored  in the specified XML file.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function getXmlData(pathAndFilename) {
  let functionName = getXmlData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  let returnData;
  pathAndFilename = path.resolve(pathAndFilename);
  let data = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let xml;
  xml2js.parseString(data,
  function(err, result) {
    if (err) {
      // ERROR:
      returnData = console.log(sys.cERROR_Colon + err);
      loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
      return returnData;
    }
    xml = result;
  });
  returnData = xml;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getCsvData
 * @description loads the specified file and parses it into JSON objects.
 * @NOTE This function only does the loading and preliminary parsing.
 * Some clients might need their own parsing business rules so this might need to be refactored according to business needs.
 * We want to keep everything as modular as possible to allow for this future proofing flexibility.
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function getCsvData(pathAndFilename) {
  let functionName = getCsvData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // file and path to load from is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfileAndPathToLoadFromIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename);
  let data = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let parsedData = papa.parse(data, {
    delimiter: ',',
    newline: '/n',
    header: true,
    skipEmptyLines: true,
    encoding: gen.cUTF8
  });
  // DONE loading data from:
  loggers.consoleLog(namespacePrefix + functionName, msg.cDoneLoadingDataFrom + pathAndFilename);
  // Loaded data is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataIs + JSON.stringify(parsedData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedData;
};

/**
 * @function getJsonData
 * @description Loads the specified file and parses it into a JSON object(s).
 * @param {string} pathAndFilename The path and file name of the JSON file that
 * should be loaded and parsed into JSON objects.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function getJsonData(pathAndFilename) {
  let functionName = getJsonData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`pathAndFilename is: ${pathAndFilename}`);
  // Make sure to resolve the path on the local system,
  // just in case tehre are issues with the OS that the code is running on.
  pathAndFilename = path.resolve(pathAndFilename);
  let rawData = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8 });
  let parsedData = JSON.parse(rawData);
  // console.log(`DONE loading data from: ${pathAndFilename}`);
  // console.log(`loaded data is: ${JSON.stringify(parsedData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return parsedData;
};

/**
 * @function writeJsonData
 * @description Writes out JSON data to the specified file and path location, it will automatically over-write any existing file.
 * @param {string} pathAndFilename The path and file name for the file that should have data written to it.
 * @param {object} dataToWrite The data that should be written to the specified file.
 * @return {boolean} True or False to indicate if the file was written out successfully or not.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function writeJsonData(pathAndFilename, dataToWrite) {
  let functionName = writeJsonData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // file and path to write data to is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfileAndPathToWriteDataToIs + pathAndFilename);
  // data to write is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataToWriteIs + JSON.stringify(dataToWrite));
  let outputSuccess = false;
  try {
    fs.writeFileSync(pathAndFilename, JSON.stringify(dataToWrite, null, 2));
    outputSuccess = true;
  } catch (err) {
    // ERROR:
    console.error(sys.cERROR_Colon + err);
  }
  // Data was written to the file;
  loggers.consoleLog(namespacePrefix + functionName, msg.cDataWasWrittenToTheFile + pathAndFilename);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function readDirectoryContents
 * @description This function acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * Also taht function doesn't technically return anything, it works with a global variable that
 * needs to be reset after the work is done with it. So these are the things that this wrapper function can do.
 * @param {string} directory The path that needs to be scanned.
 * @return {object} An object containing any array of all the files in the folder and all sub-folders.
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function readDirectoryContents(directory) {
  let functionName = readDirectoryContents.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`directory is: ${directory}`);
  let filesFound = [];
  // Make sure to resolve the path on the local system,
  // just in case there are issues with the OS that the code is running on.
  directory = path.resolve(directory);
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data ino a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return filesFound;
};

/**
 * @function scanDirectoryContents
 * @description This function also acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * The difference between this function and the readDirectoryContents is that this function has an optional limit on the number of files to return.
 * Really this is used for scanning large volumes of data such as the entire C-Drive.
 * This way the user can control the number of files that are returned by the system.
 * The user might only want 10,000 files or just the first million files found. etc...
 * @param {sring} directory The path that should be scanned for files including all sub-folders and all sub-files.
 * @param {boolean} enableLimit True or False to indicate if the boolean limit should be enabled or not.
 * @param {integer} filesLimit The number of files that should be limited when scanning, if the enableLimit is set to True.
 * @return {array<string>} An array of all the files in the folder up to the limit if specified.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
function scanDirectoryContents(directory, enableLimit, filesLimit) {
  let functionName = scanDirectoryContents.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // Path that should be scanned is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cPathThatShouldBeScannedIs + directory);
  // enableLimit is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cenableLimitIs + enableLimit);
  // filesLimit is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesLimitIs + filesLimit);
  let filesFound = [];
  directory = path.resolve(directory);
  enableFilesListLimit = enableLimit;
  filesListLimit = filesLimit;
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data into a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  enableFilesListLimit = false;
  filesListLimit = -1;
  hitFileLimit = false;
  // files found are:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesFoundAre + JSON.stringify(filesFound));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return filesFound;
};

/**
 * @function readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and loads all of the files contained in each sub-folder into a map.
 * @param {string} directory The system path that should be scanned recursively for files.
 * @return {object} A map of all the files contained in all levels of the specified path in all the folders and sub-folders.
 * @NOTE The function doesn't actually return anything, all the file data is stored in an external data collection.
 * @author wn050
 * @reference https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directores-nodejs
 * @date 2020/05/22
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function readDirectorySynchronously(directory) {
  let functionName = readDirectorySynchronously.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`directory is: ${directory}`);
  if (hitFileLimit === false) {
    directory = path.resolve(directory); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
    let currentDirectoryPath = directory;
    let currentDirectory = '';
    try {
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    } catch (e) {
      console.log(msg.cERROR + e.message);
      fs.mkdirSync(currentDirectoryPath);
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    }
    currentDirectory.forEach(file => {
      let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
      let pathOfCurrentItem = directory + bas.cForwardSlash + file;
      try {
        if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
          if (enableFilesListLimit === true && filesListLimit > 0) {
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
            // console.log('Adding the file the old fashioned way.');
            filesCollection.push(pathOfCurrentItem);
          }
        } else if (!filesShouldBeSkipped) {
          // NOTE: There is a difference in how paths are handled in Windows VS Mac/Linux,
          // So for now I'm putting this code here like this to handle both situations.
          // The ideal solution would be to detect which OS the code is being run on.
          // Then handle each case appropriately.
          let directoryPath = '';
          directoryPath = path.resolve(directory + bas.cForwardSlash + file);
          // console.log(`directoryPath is: ${directoryPath}`);
          readDirectorySynchronously(directoryPath);
        }
      } catch (e) { // Catch the error in the hopes that we can continue scanning the file system.
        console.log(msg.cErrorInvalidAccessTo + pathOfCurrentItem);
      }
    });
    // console.log(`END ${namespacePrefix}${functionName} function`);
  }
};

/**
 * @function copyAllFilesAndFoldersFromFolderToFolder
 * @description Copies all of the files and folders recursively from the source folder to the destination folder.
 * @param {array<string>} sourceDestinationArray An array containing the source and destination paths.
 * Example:
 * sourceDestinationArray[0] = source path
 * sourceDestinationArray[1] = destination path
 * @param  {array<array<string>>} filterArray two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * filterArray[0] = exclusionArray
 * filterArray[1] = inclusionArray
 * @return {boolean} A True or False value to indicate if the fully copy process is successful or not.
 * @author Seth Hollingsead
 * @date 2022/04/06
 * @NOTE This is mainly used by the build system to execute a copy process for the
 * non-code files from the surce folder to the bin folder.
 * But it could also be used by a self-installing system to copy files from an execution path to an installation path.
 */
function copyAllFilesAndFoldersFromFolderToFolder(sourceDestinationArray, filterArray) {
  let functionName = copyAllFilesAndFoldersFromFolderToFolder.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // sourceDestinationArray is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csourceDestinationArrayIs + JSON.stringify(sourceDestinationArray));
  // exclusionArray is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilterArrayIs + JSON.stringify(filterArray));
  let copySuccess = false;
  copySuccess = copyFolderRecursiveSync(sourceDestinationArray, filterArray);
  // copySuccess is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccopySuccessIs + copySuccess);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return copySuccess;
};

/**
 * @function buildReleasePackage
 * @description Add all the files from the sourceFolder into a zip file and
 * give a name to the file for the current date-time and release version, savng to the destination folder.
 * @param {string} sourceFolder The folder that should be packaged up for the release zip file.
 * @param {string} destinationFolder The folder where teh zip file release package should be saved.
 * @return {boolean} A True or False value to indicate if the release package process is successful or not.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function buildReleasePackage(sourceFolder, destinationFolder) {
  let functionName = buildReleasePackage.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // sourceFolder is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csourceFolderIs + sourceFolder);
  // destinationFolder is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdestinationFolderIs + destinationFolder);
  let packageSuccess = false;
  let releaseFiles = [];
  let releasedArchiveFiles = [];
  let fileNameBusinessRules = [];
  let cleanFilePathsBusinessRules = [];
  fileNameBusinessRules[0] = biz.cgetFileNameFromPath;
  fileNameBusinessRules[1] = biz.cremoveFileExtensionFromFileName;
  cleanFilePathsBusienssRules[0] = biz.cswapDoubleForwardSlashToSingleForwardSlash;
  cleanFilePathsBusinessRules[1] = biz.cswapDoubleBackSlashToSingleBackSlash;
  cleanFilePathsBusienssRules[2] = biz.cswapForwardSlashToBackSlash;
  let rootPath = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationCleanedRootPath);
  let currentVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
  let applicationName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
  let currentVersionReleased = false;
  let releaseDateTimeStamp;
  let originalSource, originalDestination;
  let zip = new admZip();
  // current version is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentVersionIs + currentVersion);
  originalSource = bas.cDot + sourceFolder;
  originalDestination = destinationFolder;
  sourceFolder = rootPath + sourceFolder;
  sourceFolder = path.resolve(sourceFolder);
  destinationFolder = rootPath + destinationFolder;
  destinationFolder = path.resolve(destinationFolder);
  releaseFiles = readDirectoryContents(sourceFolder);
  releasedArchiveFiles = readDirectoryContents(destinationFolder);
  // released archive files list is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creleasedArchiveFilesListIs + JSON.stringify(releasedArchiveFiles));
  // Check if the current version number has  already been released as a zip file in the Release Folder.
  // If it has not been released, then we can build the zip file with the current release number and date-time stamp.
  for (let i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    // file is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cfileIs + releasedArchiveFiles[i]);
    let pathAndFileName = releasedArchiveFiles[i];
    let fileName = ruleBroker.processRules(pathAndFileName, '', fileNameBusinessRules);
    // fileName is:
    loggers.consoleLog(namespacePrefix + functionNam, msg.cfileNameIs + fileName);
    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  } // End-for (let i = 0; i <= releasedArchiveFiles.length - 1; i++)
  if (currentVersionReleased === false) {
    // release files list is:
    loggers.consoleLog(namespacePrefix + functionName, msg.creleaseFilesListIs + JSON.stringify(releaseFiles));
    releaseDateTimeStamp = timers.getNowMoment(configurator.getConfigurationSetting(wrd.csystem, cfg.cdateTimeStamp));
    // release date-time stamp is:
    loggers.consoleLog(namespacePrefix + functionName, msg.creleaseDateTimeStampIs + releaseDateTimeStamp);
    let releaseFileName = releaseDateTimeStamp + bas.cUnderscore + currentVersion + bas.cUnderscore + applicationName;
    // release fileName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.creleaseFileNameIs + releaseFileName);
    let fullReleasePath = path.resolve(destinationFolder + bas.cForwardSlash + releaseFileName + gen.cDotzip);
    try {
      zip.addLocalFolder(sourceFolder, originalSource);
      zip.writeZip(fulReleasePath);
      // Done writing the zip file:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoneWritingTheZipFile + fullReleasePath);
      // Set the return packageSuccess flag to True
      loggers.consoleLog(namespacePrefix + functionName, msg.cSetTheReturnPackageSucessFlagToTrue);
      packageSuccess = true;
    } catch (err) {
      // ERROR: Zip package release failed:
      console.log(msg.cErrorZipPackageReleaseFailed);
      console.error(err.stack);
      process.exit(1);
    }
  } else {
    // current version already released
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentVersionAlreadyReleased);
  }
  // packageSuccess is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpackageSuccessIs + packageSuccess);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return packageSuccess;
};

/**
 * @function createZipArchive
 * @description Creates a new zip archive of the files listed in the input array,
 * and saves the file to the specified file path and name.
 * @param {array<string>} folderPaths All the folders and paths to include in the zip archive.
 * @param {string} destinationPathFileName The full path and file name to the
 * destination where the zip file should be saved.
 * @return {boolean} A True or False value to indicate if the zip file was created successfully or not.
 * @author Seth Hollingsead
 * @date 2022/04/08
 */
function createZipArchive(folderPaths, destinationPathFileName) {
  let functionName = createZipArchive.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfolderPathsIs + JSON.stringify(folderPaths));
  loggers.consoleLog(namespacePrefix + functionName, msg.cdestinationPathFileNameIs + destinationPathFileName);
  let packageSuccess = false;
  let zip = new admZip();
  try {
    zip.addLocalFolder(folderPaths);
    zip.writeZip(destinationPathFileName);
    // Done writing the zip file:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDoneWritingTheZipFile + destinationPathFileName);
    packageSuccess = true;
  } catch (err) {
    // ERROR: Zip package release failed
    console.log(msg.cErrorZipPackageReleaseFailed);
    console.error(err.stack);
    process.exit(1);
  }
  // packageSuccess is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpackageSuccessIs + packageSuccess);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return packageSuccess;
};

/**
 * @function cleanRootPath
 * @description Takes the application root path and cleans it to give a real root path,
 * or top-level folder path for the application.
 * @return {string} The real root path or top-level path for the application.
 * @NOTE This has been problematic because often many of the init functions are contained in lower level folders,
 * not at the top-level. This gives much greater level of organization to the over all project and
 * helps wih scalability & reusability.
 * @author Seth Hollingsead
 * @date 2021/10/26
 */
function cleanRootPath() {
  let functionName = cleanRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let rootPath;
  rootPath = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationRootPath);
  cleanRootPathRules = [];
  cleanRootPathRules[0] = biz.cremoveXnumberOfFoldersFromEndOfpath;
  // RootPath before processing is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cRootPathBeforeProcessingIs + rootPath);
  rootPath = ruleBroker.processRules(rootPath, 3, cleanRootPathRules);
  // RotPath after processing is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cRootPathAfterProcessingIs + rootPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`rootPath is: ${rootPath}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return rootPath;
};

/**
 * @function copyFileSync
 * @description Reads the files from the source and copies them to the target,
 * ignoring any files that match with any of the contents of the exclusionArray.
 * @param {array<string>} sourceDestinationArray An array containing the source and destination paths.
 * Example:
 * sourceDestinationArray[0] = source path
 * sourceDestinationArray[1] = destination path
 * @param  {array<array<string>>} filterArray two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * filterArray[0] = exclusionArray
 * filterArray[1] = inclusionArray
 * @return {boolean} A True or False to indicate if the copy operation was successful or not.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */
function copyFileSync(sourceDestinationArray, filterArray) {
  let functionName = copyFileSync.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // source is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csourceDestinationArrayIs + JSON.stringify(sourceDestinationArray));
  // target is:
  loggers.consoleLog(namespacePrefix + functionName , msg.cfilterArrayIs + JSON.stringify(filterArray));
  let successfulCopy = false;
  let source = sourceDestinationArray[0];
  let target = sourceDestinationArray[1];
  let exclusionArray = filterArray[0];
  let inclusionArray = filterArray[1];
  let targetFile = target;

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
      for (let i = 0; i < inclusionArray.length; i++) {
        if (source.includes(inclusionArray[i])) {
          foundInclusion = true;
          break;
        }
      } // End-for (let i = 0; i < inclusinoArray.length; i++)
    } // End-if (inclusionArray)
    if (exclusionArray) {
      for (let j = 0; j < exclusionArray.length; j++) {
        if (source.includes(exclusionArray[j])) {
          foundExclusion = true;
          break;
        }
      } // End-for (let j = 0; j < exclusionArray.length; j++)
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
  // successfullCopy is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csuccessfulCopyIs + successfulCopy);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return successfulCopy;
};

/**
 * @function copyFolderRecursiveSync
 * @description Copies a folder and all of its files and sub-folders and sub-files recursively.
 * @param {array<string>} sourceDestinationArray An array containing the source and destination paths.
 * Example:
 * sourceDestinationArray[0] = source path
 * sourceDestinationArray[1] = destination path
 * @param  {array<array<string>>} filterArray two array's of strings that are exclusions and inclusions,
 * file filters that should be avoided during the copy process, the inclusion array over-rides the exclusion array.
 * Example:
 * filterArray[0] = exclusionArray
 * filterArray[1] = inclusionArray
 * @return {boolean} A True or False value to indicate fi the copy operation was a success or not.
 * @author Simon Zyx
 * @date 2014/09/25
 * {@link https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js}
 * @NOTE: This code is not actually coping the files, it is reading them and re-writing them to the target.
 * However, it should suffice for our needs. Meta-data in this case is not all that critical
 * since the original file is more important, and this is really just about the deployment of a build-release.
 */
function copyFolderRecursiveSync(sourceDestinationArray, filterArray) {
  let functionName = copyFolderRecursiveSync.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // source is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csourceDestinationArrayIs + JSON.stringify(sourceDestinationArray));
  // target is:
  loggers.consoleLog(namespacePrefix + functionName , msg.cfilterArrayIs + JSON.stringify(filterArray));
  let successfulCopy = false;
  let files = [];
  let source = sourceDestinationArray[0];
  let target = sourceDestinationArray[1];
  let targetFolder = '';

  // Check if folder needs to be created or integrated,
  // but first check if the source is the /src/ folder, because we don't want to duplicate that.
  // Otherwise we would be copying /src/ to /bin/src/ and that we do not want!!
  let pathLeafNode = path.basename(source);
  if (pathLeafNode.includes(wrd.csrc)) {
    targetFolder = target;
  } else {
    targetFolder = path.join(target, pathLeafNode);
  }
  targetFolder = path.resolve(targetFolder);
  if (fs.existsSync(targetFolder) != true) {
    try {
      // console.log('making the path');
      fs.mkdirSync(targetFolder);
      // NOTE: Just because we complete the above code doesn't mean the entie copy process was a success.
      // But atleast we haven't errored out, so it wasn't a failure YET.
    } catch (err) {
      // ERROR: Could not create folder:
      console.log(msg.cErrorCouldNotCreateFolder + targetFolder);
      // ERROR:
      console.log(msg.cERROR_Colon + err);
      successfulCopy = false;
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
      files.forEach(function(file) {
        let currentSource = path.join(source, file);
        if (fs.lstatSync(currentSource).isDirectory()) {
          successfulCopy = copyFolderRecursiveSync([currentSource, targetFolder], filterArray);
        } else {
          successfulCopy = copyFileSync([currentSource, targetFolder], filterArray);
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
  // successfullCopy Is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csuccessfulCopyIs + successfulCopy);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return successfulCopy;
};

/**
 * @function appendMessageToFile
 * @description Opens a file and appends a message to the file, then closes the file.
 * @param {string} file The fully qualified path and file name for the file that
 * should be opened, appended and saved.
 * @param {string} message The message that should be appended to the specified file.
 * @return {boolean} A TRUE or FALSE to indicate if the append happened successfully or not.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function appendMessageToFile(file, message) {
  let functionName = appendMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`file is: ${file}`);
  // console.log(`message is: ${message}`);
  let appendSuccess = false;
  let fd;
  if (file && message) {
    try {
      // console.log('open the file sync');
      fd = fs.openSync(file, bas.ca);
      // console.log('append to the file sync');
      fs.appendFileSync(fd, message + bas.cCarriageReturn + bas.cNewLine, gen.cUTF8);
      // console.log('DONE appending to the file');
    } catch (err) {
      return console.log(err);
    } finally {
      if (fd !== undefined) {
        fs.closeSync(fd);
      }
    }
  }
  // console.log(`appendSuccess is: ${appendSuccess}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return appendSuccess;
};

export default {
  [fnc.cgetXmlData]: (pathAndFilename) => getXmlData(pathAndFilename),
  [fnc.cgetCsvData]: (pathAndFilename) => getCsvData(pathAndFilename),
  [fnc.cgetJsonData]: (pathAndFilename) => getJsonData(pathAndFilename),
  [fnc.cwriteJsonData]: (pathAndFilename, dataToWrite) => writeJsonData(pathAndFilename, dataToWrite),
  [fnc.creadDirectoryContents]: (directory) => readDirectoryContents(directory),
  [fnc.cscanDirectoryContents]: (directory, enableLimit, filesLimit) => scanDirectoryContents(directory, enableLimit, filesLimit),
  [fnc.creadDirectorySynchronously]: (directory) => readDirectorySynchronously(directory),
  [fnc.ccopyAllFilesAndFoldersFromFolderToFolder]: (sourceDestinationArray, filterArray) => copyAllFilesAndFoldersFromFolderToFolder(sourceDestinationArray, filterArray),
  [fnc.cbuildReleasePackage]: (sourceFolder, destinatinoFolder) => buildReleasePackage(sourceFolder, destinationFolder),
  [fnc.ccreateZipArchive]: (folderPaths, destinationPathFileName) => createZipArchive(folderPaths, destinationPathFileName),
  [fnc.ccopyFileSync]: (sourceDestinationArray, filterArray) => copyFileSync(sourceDestinationArray, filterArray),
  [fnc.ccopyFolderRecursiveSync]: (sourceDestinationArray, filterArray) => copyFolderRecursiveSync(sourceDestinationArray, filterArray),
  [fnc.cappendMessageToFile]: (file, message) => appendMessageToFile(file, message)
};
