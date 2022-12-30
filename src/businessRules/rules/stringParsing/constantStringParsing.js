/**
 * @file constantStringParsing.js
 * @module constantStringParsing
 * @description Contains all system defined business rules for parsing strings related to constants.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://nodejs.dev/}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
import D from '../../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.stringParsing.constantStringParsing.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData the path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function validateConstantsDataValidation(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidation.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let foundAFailure = false;
  let processed = false;
  if (inputData && inputMetaData) {
    // Scanning constants phase 1 validation data for file:
    console.log(msg.cScanningConstantsValidationPhase1Message + inputData);
    let inputFilePath = path.resolve(inputData);
    const fileContents = await ruleParsing.processRulesInternal([inputFilePath, ''], [biz.cloadAsciiFileFromPath]);
    // fileContents are:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cfileContentsAre + JSON.stringify(fileContents));
    const fileContentsLineArray = fileContents.split(/\r?\n/);

    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    // BEGIN processing all lines from file: 
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginProcessingAllLinesFromFile + inputData);
    for (const lineKey in fileContentsLineArray) {
      // BEGIN processing a line
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginProcessingLine);
      // line is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.clineIs + JSON.stringify(lineKey));
      if (lineKey) {
        processed = true;
        // constants LineKey is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsLineKeyIs + lineKey.toString(gen.cascii));

        let lineInCode = fileContentsLineArray[lineKey];
        // constants Line is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsLineIs + lineInCode);
        let foundConstant = false;
        if (lineInCode.includes(sys.cexportconst) === true) {
          let lineArray = lineInCode.split(bas.cSpace);
          // lineArray[2] is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.clineArray2Is + lineArray[2]);
          foundConstant = await validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
          let qualifiedConstantsFilename = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetFileNameFromPath]);
          if (foundConstant === true) {
            if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
              let passMessage = wrd.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cPASS;
              if (colorizeLogsEnabled === true) {
                passMessage = chalk.rgb(0,0,0)(passMessage);
                passMessage = chalk.bgRgb(0,255,0)(passMessage);
              } // End-if (colorizeLogsEnabled === true)
              console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage);
            } // End-if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true)
          } else { // Else-clause if (foundConstant === true)
            if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
              let failMessage = wrd.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL;
              if (colorizeLogsEnabled === true) {
                failMessage = chalk.rgb(0,0,0)(failMessage);
                failMessage = chalk.bgRgb(255,0,0)(failMessage);
              } // End-if (colorizeLogsEnabled === true)
              let qualifiedConstantsPrefix = await determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, inputMetaData);
              let pluginName = '';
              if (inputMetaData.includes(bas.cColon) && inputMetaData.toUpperCase().includes(wrd.cPLUGIN)) {
                let pluginConstantNamespaceArray = inputMetaData.split(bas.cColon);
                pluginName = pluginConstantNamespaceArray[0] + bas.cColon;
              }              
              console.log(pluginName + qualifiedConstantsFilename + bas.cColon + bas.cSpace + failMessage);
              let suggestedLineOfCode = await determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
              if (suggestedLineOfCode !== '') {
                if (colorizeLogsEnabled === true) {
                  suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                  suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
                } // End-if (colorizeLogsEnabled === true)
                console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
              } // End-if (suggestedLineOfCode !== '')
            } // End-if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true)
            foundAFailure = true;
          }
        } // End-if (lineInCode.includes(sys.cexportconst) === true)
      } else {
        // ERROR: line is null or undefined:
        // file is:
        console.log(msg.cErrorLineIsNullOrUndefined + lineKey + msg.cSpaceFileIs + inputData);
      }
      // END processing a line
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEndProcessingLine);
    } // End-for (const line in fileContentsLineArray)
    // END processing all lines from file: 
    await loggers.consoleLog(namespacePrefix + functionName, msg.cEndProcessingAllLinesFromFile + inputData);
  } // End-if (inputData && inputMetaData)
  if (foundAFailure === false && processed === true) {
    // Make sure we didn't find a failure, and we also actually did some processing of the data file.
    // Otherwise this could just fall through and never read the file, but still return true.
    returnData = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * The standard prefix that should be used in the code to reference that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {string} A string code that represents the method to reference a constants file in the code.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function determineConstantsContextQualifiedPrefix(inputData, inputMetaData) {
  let functionName = determineConstantsContextQualifiedPrefix.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    returnData = inputData;
    let constantsNamespaceParentObject = await getConstantsValidationNamespaceParentObject(inputMetaData, '');
    // constantsNamespaceParentObject is:
    // await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsNamespaceParentObjectIs + JSON.stringify(constantsNamespaceParentObject));
    let constantsFileNames = constantsNamespaceParentObject[sys.cConstantsFileNames];
    let constantsShortNames = constantsNamespaceParentObject[sys.cConstantsShortNames];
    for (let key in constantsFileNames) {
      if (inputData === constantsFileNames[key]) {
          returnData = constantsShortNames[key];
          break;
      } // End-if (inputData === constantsFileNames[key])
    } // End-for (let key in constantsFileNames)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested lin of code to ad to the appropriate constants validation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant file that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to reference the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData) {
  let functionName = determineSuggestedConstantsValidationLineOfCode.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    // Input: cZZTopInternationalSuccess
    // Output: {Name: 'cZZTopInternationalSuccess', Actual: wrd.cZZTopInternationalSuccess, Expected: 'ZZTopInternationalSuccess'}
    if (inputData.charAt(0) === bas.cc) {
      let literalValue = inputData.substring(1);
      // `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + inputData +
        bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + inputMetaData +
        bas.cDot + inputData + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace +
        bas.cSingleQuote + literalValue + bas.cSingleQuote + bas.cCloseCurlyBrace;
    } else { // Else-clause if (inputData.charAt(0) === bas.cc)
      // 'ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.'
      console.log(msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constant definition can be found, or not found.
 * @param {string} inputData the constant definition that should be searched for.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function validateConstantsDataValidationLineItemName(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidationLineItemName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    let constantNamespaceObject = await getConstantsValidationNamespaceObject(inputMetaData, '');
    // constantNamespaceObject is:
    // await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNamespaceObjectIs + JSON.stringify(constantNamespaceObject));
    if (constantNamespaceObject) {
      for (const element in constantNamespaceObject) {
        // element is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.celementIs + element);
        let validationLineItem = constantNamespaceObject[element];
        // validationLineItem is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationLineItemIs + JSON.stringify(validationLineItem));
        if (validationLineItem) {
          if (inputData === validationLineItem.Name) {
            returnData = true;
            break;
          } // End-if (inputData === validationLineItem.Name)
        } // End-if (validationLineItem)
      } // End-for (const element of constantNamespaceObject)
    } else {
      // ERROR: Unable to find the constant namespace among all the constants validation data:
      console.log(msg.cvalidateConstantsDataValidationLineItemNameErrorMessage1 + inputData);
    }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantsValidationNamespaceParentObject
 * @description Searches the constants validation top-level data structure,
 * framework, applications, plugins for the specified namespace and returns the parent JSON object,
 * which contains all the meta-data necessary to generate failure messages and suggested line of code information.
 * @param {string} inputData The name of the constants data hive that we should search for and find as a namespace object.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} A JSON object that contains the constants short names, file names, prefixes and file paths,
 * validation messages and related constants validation data. In short the constants validation parent context object.
 * @author Seth Hollingsead
 * @date 2022/12/16
 */
async function getConstantsValidationNamespaceParentObject(inputData, inputMetaData) {
  let functionName = getConstantsValidationNamespaceParentObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (await doesConstantNamespaceExist(inputData, D[sys.cConstantsValidationData][wrd.cFramework]) === true) {
      returnData = D[sys.cConstantsValidationData][wrd.cFramework];
    } else if (await doesConstantNamespaceExist(inputData, D[sys.cConstantsValidationData][wrd.cApplication]) === true) {
      returnData = D[sys.cConstantsValidationData][wrd.cApplication];
    } else {
      // Here we need to search through the plugins constants validation data for each plugin
      // to try and find the constants namespace that we are looking for!
      if (D[sys.cConstantsValidationData][wrd.cPlugins] && inputData.includes(bas.cColon)) {
        let pluginNamespaceArray = inputData.split(bas.cColon);
        let pluginName = pluginNamespaceArray[0];
        let pluginConstantNamespace = pluginNamespaceArray[1];
        for (const pluginNamespace in D[sys.cConstantsValidationData][wrd.cPlugins]) {
          if (pluginNamespace === pluginName && 
          await doesConstantNamespaceExist(pluginConstantNamespace, D[sys.cConstantsValidationData][wrd.cPlugins][pluginNamespace]) === true) {
            returnData = D[sys.cConstantsValidationData][wrd.cPlugins][pluginName];
          }
        } // End-for (const pluginNamespace of D[sys.cConstantsValidationData][wrd.cPlugins])
      } // End-if (D[sys.cConstantsValidationData][wrd.cPlugins])
    }
  } // End-if (inputData)
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantsValidationNamespaceObject
 * @description Searches the constants validation top-level data structure,
 * framework, applications, plugins for the specified namespace and returns the JSON object.
 * @param {string} inputData The name of the constants data hive that we should search for and find as a namespace object.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} A JSON object that contains the constants validation data for the specified constants validation data-set,
 * False if nothing is found.
 * @author Seth Hollingsead
 * @date 2022/11/16
 */
async function getConstantsValidationNamespaceObject(inputData, inputMetaData) {
  let functionName = getConstantsValidationNamespaceObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (await doesConstantNamespaceExist(inputData, D[sys.cConstantsValidationData][wrd.cFramework]) === true) {
      returnData = D[sys.cConstantsValidationData][wrd.cFramework][inputData];
    } else if (await doesConstantNamespaceExist(inputData, D[sys.cConstantsValidationData][wrd.cApplication]) === true) {
      returnData = D[sys.cConstantsValidationData][wrd.cApplication][inputData];
    } else {
      // Here we need to search through the plugins constants validation data for each plugin
      // to try and find the constants namespace that we are looking for!
      if (D[sys.cConstantsValidationData][wrd.cPlugins] && inputData.includes(bas.cColon)) {
        let pluginNamespaceArray = inputData.split(bas.cColon);
        let pluginName = pluginNamespaceArray[0];
        let pluginConstantNamespace = pluginNamespaceArray[1];
        for (const pluginNamespace in D[sys.cConstantsValidationData][wrd.cPlugins]) {
          if (pluginNamespace === pluginName &&
          await doesConstantNamespaceExist(pluginConstantNamespace, D[sys.cConstantsValidationData][wrd.cPlugins][pluginNamespace]) === true) {
            returnData = D[sys.cConstantsValidationData][wrd.cPlugins][pluginName][pluginConstantNamespace];
          }
        } // End-for (const pluginNamespace of D[sys.cConstantsValidationData][wrd.cPlugins])
      } // End-if (D[sys.cConstantsValidationData][wrd.cPlugins])
    }
  } // End-if (inputData)
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesConstantNamespaceExist
 * @description Searches through the input data structure to determine if it contains the specified constant namespace or not.
 * @param {string} inputData The name of the data element that should be searched for.
 * @param {object} inputMetaData The data that should be searched for the specified named data parameter.
 * @return {boolean} True or False to indicate if a matching namespace was found in the specified data structure or not.
 * @author Seth Hollingsead
 * @date 2022/12/16
 */
async function doesConstantNamespaceExist(inputData, inputMetaData) {
  let functionName = doesConstantNamespaceExist.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const key in inputMetaData) {
      // key is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
      let element1 = inputMetaData[key];
      // element1 is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.celement1Is + JSON.stringify(element1));
      if (inputData === key) {
        returnData = true;
        // Found a matching namespace constant.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundMatchingNamespaceConstant);
        break;
      } // End-if (inputData === key)
    } // End-for (const key in inputMetaData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function doesConstantExist(inputData, inputMetaData) {
  let functionName = doesConstantExist.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let frameworkConstantsValidationData = D[sys.cConstantsValidationData][wrd.cFramework];
    let foundFrameworkConstantMatch = await doesConstantExistInConstantLibraryObject(inputData, frameworkConstantsValidationData);
    if (foundFrameworkConstantMatch === false) {
      let applicationConstantsValidationData = D[sys.cConstantsValidationData][wrd.cApplication];
      let foundApplicationConstantMatch = await doesConstantExistInConstantLibraryObject(inputData, applicationConstantsValidationData);
      if (foundApplicationConstantMatch === false) {
        let allPluginsConstantsValidationData = D[sys.cConstantsValidationData][wrd.cPlugins];
        // Now we have to go through each plugin and make a determination search for each one.
        if (allPluginsConstantsValidationData) {
          for (const pluginName in allPluginsConstantsValidationData) {
            // pluginName is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
            let pluginConstantsValidationData = allPluginsConstantsValidationData[pluginName];
            let foundPluginConstantMatch = await doesConstantExistInConstantLibraryObject(inputData, pluginConstantsValidationData);
            if (foundPluginConstantMatch === true) {
              returnData = true;
              break;
            }
          } // End-for (const pluginName in allPluginsConstantsValidationData)
        } // End-if (allPluginsConstantsValidationData)
      } else {
        // Found a match with the application constants.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage01);
        returnData = true;
      }
    } else {
      // Found a match with the framework constants.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage02);
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesConstantExistInConstantLibraryObject
 * @description This is a middle management of the search, walks through all of the constants validation parent collection objects,
 * filters out all the meta-data entries and ensures that searches are only performed on actual constants validation data values.
 * This function provides a re-usability function so we don't need to have repeated code in the doesConstantExist function.
 * @param {string} inputData The value that should be looked for in the constants validation data library, that is also provided as input.
 * @param {object} inputMetaData A JSON data object that contains all of the constants validation data namespace objects that should be searched.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function doesConstantExistInConstantLibraryObject(inputData, inputMetaData) {
  let functionName = doesConstantExistInConstantLibraryObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const key in inputMetaData) {
      if (key !== sys.cConstantsShortNames &&
      key !== sys.cConstantsFileNames &&
      key !== sys.cConstantsPrefix &&
      key !== sys.cConstantsFilePaths &&
      key !== sys.cConstantsPhase1ValidationMessages &&
      key !== sys.cConstantsPhase2ValidationMessages) {
        let constantValidationDataLibraryObject = inputMetaData[key];
        if (await doesConstantExistInConstantNamespaceObject(inputData, constantValidationDataLibraryObject) === true) {
          returnData = true;
          break;
        }
      } // End-if (key !== sys.cConstantsShortNames && ...)
    } // End-for (const key in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantTypeInConstantLibraryObject
 * @description This is a middle management function to get the type of constant that is found.
 * Walks through all of the constants validation parent collection objects,
 * filters out all of the meta-data entries and ensures that searches are only performed on actual constants validation data values.
 * This function provides a re-usability function so we don't need to have repeated code in the getConstantType function.
 * @param {array<string,boolean>} inputData An array that contains The value that should have it's matching type returned,
 * and a boolean to indicate if the function should or should not continue searching for additional matches after the first match is found.
 * inputData[0] = The value of the constant that should be searched for to find a match and return the type.
 * inputData[1] = True or False value to indicate if the search should continue after finding the first match or not.
 * @param {object} inputMetaData A JSON data object that contains all of the constants validation data namespace objects that should be search.
 * @return {boolean|string} A string that contains the name of the matching constant type or False if its matching constant definition is not found.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function getConstantTypeInConstantLibraryObject(inputData, inputMetaData) {
  let functionName = getConstantTypeInConstantLibraryObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const key in inputMetaData) {
      if (key !== sys.cConstantsShortNames &&
        key !== sys.cConstantsFileNames &&
        key !== sys.cConstantsPrefix &&
        key !== sys.cConstantsFilePaths &&
        key !== sys.cConstantsPhase1ValidationMessages &&
        key !== sys.cConstantsPhase2ValidationMessages) {
          let constantValidationDataLibraryObject = inputMetaData[key];
          if (await doesConstantExistInConstantNamespaceObject(inputData[0], constantValidationDataLibraryObject) === true) {
            if (returnData === false) {
              returnData = [];
              returnData[0] = key;
            } else {
              returnData.push(key);
            }
            if (inputData[1] === false) {
              break;
            }
          } // End-if (await doesConstantExistInConstantNamespaceObject(inputData[0], constantValidationDataLibraryObject) === true)
        } // End-if (key !== sys.cConstantsShortNames && ...)
    } // End-for (const key in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantNameInConstantLibraryObject
 * @description This is a middle management function to get the name of the constant that is found.
 * Walks through all of the constants validation parent collection objects,
 * filters out all of the meta-data entries and ensures that searches are only performed on actual constants validation data values.
 * This function provides a re-usability function so we don't need to have repeated code in the getConstantName function.
 * @param {string} inputData The value that should be looked for in the constants validation data library, that is also provided as input.
 * @param {object} inputMetaData A JSON data object that contains all of the constants validation data namespace objects that should be searched.
 * @return {string|boolean} The name of the constant if a match is found, False if no match is found.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function getConstantNameInConstantLibraryObject(inputData, inputMetaData) {
  let functionName = getConstantNameInConstantLibraryObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const key in inputMetaData) {
      if (key !== sys.cConstantsShortNames &&
      key !== sys.cConstantsFileNames &&
      key !== sys.cConstantsPrefix &&
      key !== sys.cConstantsFilePaths &&
      key !== sys.cConstantsPhase1ValidationMessages &&
      key !== sys.cConstantsPhase2ValidationMessages) {
        let constantValidationDataLibraryObject = inputMetaData[key];
        let constantName = await getConstantNameInConstantNamespaceObject(inputData, constantValidationDataLibraryObject);
        if (constantName) {
          returnData = constantName;
          break;
        }
      } // End-if (key !== sys.cConstantsShortNames && ...)
    } // End-for (const key in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantActualValueInConstantLibraryObject
 * @description This is a middle management function to get the actual value of the constant that is found.
 * Walks through all of the constants validation parent collection objects,
 * filters out all of the meta-data entries and ensures that searches are only performed on actual constants validation data values.
 * This function provides a re-usability function so we don't need to have repeated code in the getConstantName function.
 * @param {string} inputData The value that should be looked for in the constants validation data library that is also provided as input.
 * @param {object} inputMetaData A JSON data object that contains all of the constants validation data namespace objects that should be searched.
 * @return {string|boolean} The actual value of the constant if a match is found, False if no match is found.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function getConstantActualValueInConstantLibraryObject(inputData, inputMetaData) {
  let functionName = getConstantActualValueInConstantLibraryObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const key in inputMetaData) {
      if (key !== sys.cConstantsShortNames &&
      key !== sys.cConstantsFileNames &&
      key !== sys.cConstantsPrefix &&
      key !== sys.cConstantsFilePaths &&
      key !== sys.cConstantsPhase1ValidationMessages &&
      key !== sys.cConstantsPhase2ValidationMessages) {
        let constantValidationDataLibraryObject = inputMetaData[key];
        let constantName = await getConstantActualValueInConstantNamespaceObject(inputData, constantValidationDataLibraryObject);
        if (constantName) {
          returnData = constantName;
          break;
        }
      } // End-if (key !== sys.cConstantsShortNames && ...)
    } // End-for (const key in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesConstantExistInConstantNamespaceObject
 * @description Walks through all of the constants validation data inside the specified input data structure.
 * Checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants data that is provided also as input.
 * @param {object} inputMetaData The constants validation data structure that should be searched.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function doesConstantExistInConstantNamespaceObject(inputData, inputMetaData) {
  let functionName = doesConstantExistInConstantNamespaceObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const index in inputMetaData) {
      // index is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
      let constantValidationObject = inputMetaData[index];
      // constantValidationObject is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValidationObjectIs + JSON.stringify(constantValidationObject));
      if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name) {
        returnData = true;
        break;
      } // End-if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name)
    } // End-for (const index in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantNameInConstantNamespaceObject
 * @description Walks through all of the constants validation data inside the specified input data structure.
 * Checks to see if any of the expected values match the string that is passed in and returns the name of a match if/when it's found.
 * @param {string} inputData The value that should be looked for in all the constants data that is provided also as input.
 * @param {object} inputMetaData The constants validation data structure that should be searched.
 * @return {string|boolean} The name of the constant or False if it is not found.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function getConstantNameInConstantNamespaceObject(inputData, inputMetaData) {
  let functionName = getConstantNameInConstantNamespaceObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const index in inputMetaData) {
      // index is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
      let constantValidationObject = inputMetaData[index];
      // constantValidationObject is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValidationObjectIs + JSON.stringify(constantValidationObject));
      if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name) {
        returnData = constantValidationObject.Name;
        break;
      } // End-if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name)
    } // End-for (const index in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantActualValueInConstantNamespaceObject
 * @description Walks through all of the constants validation data inside the specified input data structure.
 * Checks to see if any of the expected values match the string that is passed in and returns the actual value of a match if/when it's found.
 * @param {string} inputData The value that should be looked for in all the constants data that is provided also as input.
 * @param {object} inputMetaData The constants validation data structure that should be searched.
 * @return {string|boolean} The actual value of the constant or False if it is not found.
 * @author Seth Hollingsead
 * @date 2022/12/21
 */
async function getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData) {
  let functionName = getConstantActualValueInConstantNamespaceObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const index in inputMetaData) {
      // index is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
      let constantValidationObject = inputMetaData[index];
      // constantValidationObject is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValidationObjectIs + JSON.stringify(constantValidationObject));
      if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name) {
        returnData = constantValidationObject.Actual;
        break;
      } // End-if (inputData === constantValidationObject.Actual || inputData === constantValidationObject.Name)
    } // End-for (const index in inputMetaData)
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * @NOTE Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantType(inputData, inputMetaData) {
  let functionName = getConstantType.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let frameworkConstantsValidationData = {};
    let applicationConstantsValidationData = {};
    let allPluginsConstantsValidationData = {};
    let frameworkConstantMatchArray = [];
    let applicationConstantMatchArray = [];
    let pluginConstantMatchArray = [];
    frameworkConstantsValidationData = D[sys.cConstantsValidationData][wrd.cFramework];
    frameworkConstantMatchArray = await getConstantTypeInConstantLibraryObject([inputData, inputMetaData], frameworkConstantsValidationData);
    if (frameworkConstantMatchArray && inputMetaData === false) {
      returnData = frameworkConstantMatchArray.join(bas.cComa);
    } else if (frameworkConstantMatchArray && inputMetaData === true) {
      returnData = frameworkConstantMatchArray[0];
    }
    if (frameworkConstantMatchArray && frameworkConstantMatchArray.length > 0 && inputMetaData === true) {
      // NOTE: Normally I would not want to have multiple exit points from any function.
      // However, in this case I would have to craft additional logical if-conditions to prevent continued execution,
      // in the event that a match condition has been hit. It would add complexity to this function, and want to keep it as simple as possible.
      // The usage of this function is intended to be reused by the constants pattern recognizer,
      // so if it still needs to be done, then consider revisiting this decision at that time.
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
      return returnData;
    }
    applicationConstantsValidationData = D[sys.cConstantsValidationData][wrd.cApplication];
    applicationConstantMatchArray = await getConstantTypeInConstantLibraryObject([inputData, inputMetaData], applicationConstantsValidationData);
    if (applicationConstantMatchArray && inputMetaData === false) {
      if (returnData === '') {
        returnData = applicationConstantMatchArray.join(bas.cComa);
      } else {
        returnData = returnData + bas.cComa + applicationConstantMatchArray.join(bas.cComa);
      }
    } else if (applicationConstantMatchArray && inputMetaData === true) {
      returnData = applicationConstantMatchArray[0];
    }
    if (applicationConstantMatchArray && applicationConstantMatchArray.length > 0 && inputMetaData === true) {
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
      return returnData;
    }
    allPluginsConstantsValidationData = D[sys.cConstantsValidationData][wrd.cPlugins];
    // Now we have to go through each plugin and make a determination search for each one.
    if (allPluginsConstantsValidationData) {
      for (const pluginName in allPluginsConstantsValidationData) {
        // pluginName is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
        let pluginConstantsValidationData = allPluginsConstantsValidationData[pluginName];
        pluginConstantMatchArray = await getConstantTypeInConstantLibraryObject([inputData, inputMetaData], pluginConstantsValidationData);
        if (pluginConstantMatchArray && inputMetaData === false) {
          if (returnData === '') {
            returnData = pluginConstantMatchArray.join(bas.cComa);
          } else {
            returnData = returnData + bas.cComa + pluginConstantMatchArray.join(bas.cComa);
          }
        } else if (pluginConstantMatchArray && inputMetaData === true) {
          returnData = pluginConstantMatchArray[0]
        }
        if (pluginConstantMatchArray && pluginConstantMatchArray.length > 0 && inputMetaData === true) {
          await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
          await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
          return returnData;
        }
      } // End-for (const pluginName in allPluginsConstantsValidationData)
    } // End-if (allPluginsConstantsValidationData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantActualValue(inputData, inputMetaData) {
  let functionName = getConstantActualValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (await isConstantTypeValid(inputMetaData, '') === true) {
      let constantValidationNamespaceObject = await getConstantsValidationNamespaceObject(inputMetaData, '');
      if (constantValidationNamespaceObject) {
        returnData = await getConstantActualValueInConstantNamespaceObject(inputData, constantValidationNamespaceObject);
      }
    } else { // Else-clause if (isConstantTypeValid(inputMetaData, '') === true)
      let frameworkConstantsValidationData = D[sys.cConstantsValidationData][wrd.cFramework];
      let foundFrameworkConstantActualValue = await getConstantActualValueInConstantLibraryObject(inputData, frameworkConstantsValidationData);
      if (foundFrameworkConstantActualValue === false) {
        let applicationConstantsValidationData = D[sys.cConstantsValidationData][wrd.cApplication];
        let foundApplicationConstantActualValue = await getConstantActualValueInConstantLibraryObject(inputData, applicationConstantsValidationData);
        if (foundApplicationConstantActualValue === false) {
          let allPluginsConstantsValidationData = D[sys.cConstantsValidationData][wrd.cPlugins];
          // Now we have to go through each plugin and make a determination search for each one.
          if (allPluginsConstantsValidationData) {
            for (const pluginName in allPluginsConstantsValidationData) {
              // pluginName is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
              let pluginConstantsValidationData = allPluginsConstantsValidationData[pluginName];
              let foundPluginConstantActualValue = await getConstantActualValueInConstantLibraryObject(inputData, pluginConstantsValidationData);
              if (foundPluginConstantActualValue) {
                returnData = foundPluginConstantActualValue;
                break;
              }
            } // End-for (const pluginName in allPluginsConstantsValidationData)
          } // End-if (allPluginsConstantsValidationData)
        } else {
          // Found a match with the application constants.
          await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage01);
          returnData = foundApplicationConstantActualValue;
        }
      } else {
        // Found a match with the framework constants.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage02);
        returnData = foundFrameworkConstantActualValue;
      }
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as.
 * Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantName(inputData, inputMetaData) {
  let functionName = getConstantName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let frameworkConstantsValidationData = D[sys.cConstantsValidationData][wrd.cFramework];
    let foundFrameworkConstantName = await getConstantNameInConstantLibraryObject(inputData, frameworkConstantsValidationData);
    if (foundFrameworkConstantName === false) {
      let applicationConstantsValidationData = D[sys.cConstantsValidationData][wrd.cApplication];
      let foundApplicationConstantName = await getConstantNameInConstantLibraryObject(inputData, applicationConstantsValidationData);
      if (foundApplicationConstantName === false) {
        let allPluginsConstantsValidationData = D[sys.cConstantsValidationData][wrd.cPlugins];
        // Now we have to go through each plugin and make a determination search for each one.
        if (allPluginsConstantsValidationData) {
          for (const pluginName in allPluginsConstantsValidationData) {
            // pluginName is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
            let pluginConstantsValidationData = allPluginsConstantsValidationData[pluginName];
            let foundPluginConstantName = await getConstantNameInConstantLibraryObject(inputData, pluginConstantsValidationData);
            if (foundPluginConstantName) {
              returnData = foundPluginConstantName;
              break;
            }
          } // End-for (const pluginName in allPluginsConstantsValidationData)
        } // End-if (allPluginsConstantsValidationData)
      } else {
        // Found a match with the application constants.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage01);
        returnData = foundApplicationConstantName;
      }
    } else {
      // Found a match with the framework constants.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cdoesConstantExistMessage02);
      returnData = foundFrameworkConstantName;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function findConstantName(inputData, inputMetaData) {
  let functionName = findConstantName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(bas.cDot)) {
      returnData = inputData.substring(inputData.lastIndexOf(bas.cDot) + 1, inputData.length);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isConstantTypeValid
 * @description Determines if a string is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a
 * valid constant type/library that exists within the system or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function isConstantTypeValid(inputData, inputMetaData) {
  let functionName = isConstantTypeValid.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsShortNames = D[sys.cConstantsValidatinoData][sys.cConstantsShortNames];
    for (let key in constantsShortNames) {
      if (inputData === key || inputData === constantsShortNames[key]) {
        returnData = true;
        break;
      }
    } // End-for (let key in constantsShortNames)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function convertConstantTypeToConstantPrefix(inputData, inputMetaData) {
  let functionName = convertConstantTypeToConstantPrefix.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsValidationDataParentObject = await getConstantsValidationNamespaceParentObject(inputData, '');
    let constantsPrefixData = constantsValidationDataParentObject[sys.cConstantsPrefix];
    for (let key in constantsPrefixData) {
      // key is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
      if (inputData === key) {
        returnData = constantsPrefixData[key];
      }
    } // End-for (let key in constantsPrefixData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData the string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function constantsOptimizedFulfillmentSystem(inputData, inputMetaData) {
  let functionName = constantsOptimizedFulfillmentSystem.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantType = '';
  let constantName = '';
  if (inputData) {
    if (await doesConstantExist(inputData, '') === false) {
      returnData = await constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = await getConstantType(inputData, true);
      // constantType is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeIs + constantType);
      constantName = await getConstantName(inputData, '');
      // constantName is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
      let constantPrefix = await convertConstantTypeToConstantPrefix(constantType, '');
      // constantPrefix is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantPrefixIs + constantPrefix);
      returnData = constantPrefix + constantName;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function constantsFulfillmentSystem(inputData, inputMetaData) {
  let functionName = constantsFulfillmentSystem.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  if (inputData) {
    returnData = await constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determine how many characters are being returned so we can
    // determine what portion of the string we need to continue processing with.
    constantName = await findConstantName(returnData, '');
    // constantName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
    let constantValue = await getConstantActualValue(constantName, '');
    // constantValue is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.crecursiveSubStringIs + recursiveSubString);
      returnData = returnData + bas.cSpace + bas.cPlus + bas.cSpace + await constantsFulfillmentSystem(recursiveSubString, inputData);
    } // End-if (deltaLength != 0)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data
 * specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of
 * the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the validation passed for the
 * entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function validateConstantsDataValues(inputData, inputMetaData) {
  let functionName = validateConstantsDataValues.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    // Scanning constants phase 2 validation data for:
    console.log(msg.cScanningConstantsValidationPhase2Message + inputData);
    let constantNamespaceObject = await getConstantsValidationNamespaceObject(inputData, '');
    // constantNamespaceObject is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNamespaceObjectIs + JSON.stringify(constantNamespaceObject));
    for (const element in constantNamespaceObject) {
      let validationLineItem = constantNamespaceObject[element];
      // validationLineItem is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationLineItemIs + JSON.stringify(validationLineItem));
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          // PASS
          if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = wrd.cPASS + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            } // End-if (colorizeLogsEnabled === true)
            console.log(passMessage);
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true)
        } else {
          // FAIL
          returnData = false;
          if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(255,0,0)(passMessage);
            } // End-if (colorizeLogsEnabled === true)
            console.log(passMessage);
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true)
        }
      } else { // Else-clause if (validationLineItem)
        // `FAIL -- ${inputData} -- FAIL`
        returnData = false;
        passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        } // End-if (colorizeLogsEnabled === true)
        console.log(passMessage);
      } // End else-clause if (validationLineItem)
    } // End-for (const element of D[sys.cConstantsValidationData][inputData])
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function isConstantValid(inputData, inputMetaData) {
  let functionName = isConstantValid.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  validateConstantsDataValidation,
  determineConstantsContextQualifiedPrefix,
  determineSuggestedConstantsValidationLineOfCode,
  validateConstantsDataValidationLineItemName,
  getConstantsValidationNamespaceParentObject,
  getConstantsValidationNamespaceObject,
  doesConstantNamespaceExist,
  doesConstantExist,
  doesConstantExistInConstantLibraryObject,
  getConstantTypeInConstantLibraryObject,
  getConstantNameInConstantLibraryObject,
  getConstantActualValueInConstantLibraryObject,
  doesConstantExistInConstantNamespaceObject,
  getConstantNameInConstantNamespaceObject,
  getConstantActualValueInConstantNamespaceObject,
  getConstantType,
  getConstantActualValue,
  getConstantName,
  findConstantName,
  isConstantTypeValid,
  convertConstantTypeToConstantPrefix,
  constantsOptimizedFulfillmentSystem,
  constantsFulfillmentSystem,
  validateConstantsDataValues,
  isConstantValid
};
