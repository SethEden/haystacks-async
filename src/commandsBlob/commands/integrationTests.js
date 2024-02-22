/**
 * @file integrationTests.js
 * @module integrationTests
 * @description Contains all of the commands to test various components of the system.
 * @requires module:commandBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:colorizer
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires module:queue
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../../brokers/commandBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import workflowBroker from '../../brokers/workflowBroker.js';
import colorizer from '../../executrix/colorizer.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
import queue from '../../structures/queue.js';
import stack from '../../structures/stack.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, clr, cmd, cfg, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.commandsBlob.commands.integrationTests.
const namespacePrefix = wrd.cframework + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstants
 * @description Validates all constants with a 2-phase verification process.
 * @param {array<string>} inputData An array that could possibly include the name of this command,
 * and a list of top-level constants validation data structures to be validated.
 * That way we can parameterize and optimize the validation of the constants specific to the testing needs.
 * Rather than always running the full set of constants validation, as that could take a very long time,
 * and only needs to be done exhaustively when releasing a new instance of the entire Haystacks platform.
 * inputData[1] = validateConstants - This command name
 * inputData[2] = Could be a coma-separated string list of constants validation data to validate.
 * inputData[n] = Could be additional list of constants validation data to validate if the user entered a space-separated list.
 * Options are: Framework,Platform,Application,App,Plugins,Plugin
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/03/25
 */
async function validateConstants(inputData, inputMetaData) {
  let functionName = validateConstants.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let pluginNamespace = '';
    let processingPluginResults = false;
    let validationTypesInputArray = []; // Use this to process any inputs the user may have entered.
    let validationTypesConfirmedArray = []; // Use this once we've confirmed valid user entry for inputs given the types of validation that are available.
    let validationTypesConfirmedList = '';
    let validUserEntry = false;
    // Get the array of keys and values for all the constants that need to be validated.
    let validationArray = []; // D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all of the key-value pair attributes we need.
    let validationFrameworkArray = D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsFilePaths]; // Framework constants paths
    let validationApplicationArray = D[sys.cConstantsValidationData][wrd.cApplication][sys.cConstantsFilePaths]; // Application constants paths
    let validationPluginsMetaArray = D[sys.cConstantsValidationData][wrd.cPlugins]; // Will need to iterate through each of the plugins and capture the plugin constants path for each plugin!
    let phase1FinalResult = true;
    let phase2FinalResult = true;
    let phase1Results = {};
    let phase2Results = {};
    let validConstantsValidationTypes = [wrd.cFramework, wrd.cApplication, wrd.cPlugins];
    let validConstantsValidationUserTypes = [wrd.cFramework, wrd.cPlatform, wrd.cApplication, wrd.cApp, wrd.cPlugins, wrd.cPlugin]

    // validationFrameworkArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationFrameworkArrayIs + JSON.stringify(validationFrameworkArray));
    // validationApplicationArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationApplicationArrayIs + JSON.stringify(validationApplicationArray));
    // validationPluginsMetaArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationPluginsMetaArrayIs + JSON.stringify(validationPluginsMetaArray));

    // Check first to see what, if any options, the user may have entered into this command,
    // that will determine to what extent we do validation.
    if (Array.isArray(inputData) && inputData.length === 2) {
      // User either entered a single data structure to validate, or a coma-separated list.
      // inputData.length is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataLengthIs + inputData.length);
      if (inputData[1].includes(bas.cComa)) {
        validationTypesInputArray = inputData[1].split(bas.cComa);
      } else if (inputData[1].includes(bas.cSemiColon)) {
        validationTypesInputArray = inputData[1].split(bas.cSemiColon);
      } else if (inputData[1].includes(bas.cForwardSlash)) {
        validationTypesInputArray = inputData[1].split(bas.cForwardSlash);
      } else if (inputData[1].includes(bas.cBackSlash)) {
        validationTypesInputArray = inputData[1].split(bas.cBackSlash);
      } else {
        // shift the data1!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData1);
        inputData.shift();
        validationTypesInputArray = inputData;
      }
    } else if (Array.isArray(inputData) && inputData.length > 2) {
      // shift the data2!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData2);
      inputData.shift();
      validationTypesInputArray = inputData;
    }

    // validationTypesInputArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesInputArrayIs + JSON.stringify(validationTypesInputArray));

    // This is where we need to process the array of inputs to normalize them to the validation types available by the system.
    // Available types are: Framework,Platform,Application,App,Plugins,Plugin
    if (validationTypesInputArray.length > 0) {
      for (let validationTypesKey in validationTypesInputArray) {
        let userEnteredValidationType = validationTypesInputArray[validationTypesKey];
        if (userEnteredValidationType.toUpperCase().trim() === wrd.cFRAMEWORK || userEnteredValidationType.toUpperCase().trim() === wrd.cPLATFORM) {
          validationTypesConfirmedArray.push(wrd.cFramework);
        } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cAPPLICATION || userEnteredValidationType.toUpperCase().trim() === wrd.cAPP) {
          validationTypesConfirmedArray.push(wrd.cApplication);
        } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGINS || userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGIN) {
          validationTypesConfirmedArray.push(wrd.cPlugins);
        } else if (userEnteredValidationType === '') {
          // Just ignore it!
        } else {
          // WARNING: The specified validation type is not available, please enter a valid type and try again. Type not recognized:
          // Constants validation types are:
          console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage01 + userEnteredValidationType);
          console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage02 + validConstantsValidationUserTypes.join(bas.cComa + bas.cSpace));
        }
      } // End-for (let validationTypesKey in validationTypesInputArray)

      // validationTypesConfirmedArray is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedArrayIs + JSON.stringify(validationTypesConfirmedArray));

      if (validationTypesConfirmedArray.length > 0) {
        validationTypesConfirmedList = validationTypesConfirmedArray.join(bas.cComa);
        validUserEntry = true;
      } else {
        // WARNING: No valid constants validation types were entered.
        console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage03);
        // Constants validation types are:
        console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage02 + validConstantsValidationUserTypes.join(bas.cComa + bas.cSpace));
      }
    } else {
      // User didn't enter any parameters at all....just run it all!
      validationTypesConfirmedList = validConstantsValidationTypes.join(bas.cComa);
      validUserEntry = true;
    }

    // validationTypesConfirmedList is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedListIs + validationTypesConfirmedList);

    if (validUserEntry) {
      if (validationTypesConfirmedList.includes(wrd.cFramework)) {
        validationArray = validationFrameworkArray;
      }
      if (validationTypesConfirmedList.includes(wrd.cApplication)) {
        validationArray = Object.assign(validationArray, validationApplicationArray);
      }
      // validationArray before plugin constants validation data merge is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationArrayBeforePluginConstantsValidationDataMergeIs + JSON.stringify(validationArray));
      if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader)) {
        if (validationTypesConfirmedList.includes(wrd.cPlugins)) {
          for (let plugin in validationPluginsMetaArray) {
            // plugin is:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginIs + plugin);
            let pluginValidationPathData = validationPluginsMetaArray[plugin][sys.cConstantsFilePaths];
            for (let constantsFilePathName in pluginValidationPathData) {
              // constantsFilePathName is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsFilePathNamesIs + constantsFilePathName);
              let constantsFilePathValue = pluginValidationPathData[constantsFilePathName];
              // constantsFilePathValue is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsFilePathValueIs + constantsFilePathValue);
              let newPluginConstantValidationName = plugin + bas.cColon + constantsFilePathName;
              // newPluginConstantValidationName is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cnewPluginConstantValidationNameIs + newPluginConstantValidationName);
              let newPluginConstantValidationPathObject = {[newPluginConstantValidationName]: constantsFilePathValue};
              validationArray = Object.assign(validationArray, newPluginConstantValidationPathObject);
              // validationArray after plugin constants validation data merge is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationArrayAfterPluginConstantsValidationDataMergeIs + JSON.stringify(validationArray));
            } // End-for (let constantsFilePathNames in pluginValidationPathData)
          } // End-for (let plugin in validationPluginsMetaArray)
        } // End-if (validationTypesConfirmedList.includes(wrd.cPlugins))
      } // End-if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader))

      // validationArray is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationArrayIs + JSON.stringify(validationArray));

      // Phase1 Constants Validation
      // BEGIN Phase 1 Constants Validation
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase1ConstantsValidation);
      console.log(msg.cBeginPhase1ConstantsValidation);
      // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
      for (let key1 in validationArray) {
        let constantsPath = validationArray[key1];
        phase1Results[key1] = await ruleBroker.processRules([constantsPath, key1], [biz.cvalidateConstantsDataValidation]);
      } // End-for (let key1 in validationArray)
      // END Phase 1 Constants Validation
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase1ConstantsValidation);
      // phase1Results is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cphase1ResultsIs + JSON.stringify(phase1Results));

      // Phase 2 Constants Validation
      // BEGIN Phase 2 Constants Validation
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase2ConstantsValidation);
      console.log(msg.cBeginPhase2ConstantsValidation);
      // Now verify that the values of the constants are what they are expected to be by using the constants validation data to validate.
      for (let key2 in validationArray) {
        phase2Results[key2] = await ruleBroker.processRules([key2, ''], [biz.cvalidateConstantsDataValues]);
      } // End-for (let key2 in validationArray)
      // END Phase 2 Constants Validation
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase2ConstantsValidation);
      // phase2Results is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cphase2ResultsIs + JSON.stringify(phase2Results));

      for (let key3 in phase1Results) {
        let constantsPhase1ValidationNamespaceParentObject = await ruleBroker.processRules([key3, ''], [biz.cgetConstantsValidationNamespaceParentObject]);
        if (key3.includes(bas.cColon) && key3.toUpperCase().includes(wrd.cPLUGIN)) {
          let pluginPhase1NamespaceArray = key3.split(bas.cColon);
          pluginNamespace = pluginPhase1NamespaceArray[1];
          processingPluginResults = true;
        }
        if (processingPluginResults === false) {
          await loggers.constantsValidationSummaryLog(constantsPhase1ValidationNamespaceParentObject[sys.cConstantsPhase1ValidationMessages][key3], phase1Results[key3]);
        } else if (processingPluginResults === true) {
          await loggers.constantsValidationSummaryLog(constantsPhase1ValidationNamespaceParentObject[sys.cConstantsPhase1ValidationMessages][pluginNamespace], phase1Results[key3]);
        }
        processingPluginResults = false;
        pluginNamespace = '';

        if (phase1Results[key3] === false) {
          phase1FinalResult = false;
        }
      } // End-for (let key3 in phase1ResultsArray)

      for (let key4 in phase2Results) {
        let constantsPhase2ValidationNamespaceParentObject = await ruleBroker.processRules([key4, ''], [biz.cgetConstantsValidationNamespaceParentObject]);
        if (key4.includes(bas.cColon) && key4.toUpperCase().includes(wrd.cPLUGIN)) {
          let pluginPhase2NamespaceArray = key4.split(bas.cColon);
          pluginNamespace = pluginPhase2NamespaceArray[1];
          processingPluginResults = true;
        }
        if (processingPluginResults === false) {
          await loggers.constantsValidationSummaryLog(constantsPhase2ValidationNamespaceParentObject[sys.cConstantsPhase2ValidationMessages][key4], phase2Results[key4]);
        } else if (processingPluginResults === true) {
          await loggers.constantsValidationSummaryLog(constantsPhase2ValidationNamespaceParentObject[sys.cConstantsPhase2ValidationMessages][pluginNamespace], phase2Results[key4]);
        }
        processingPluginResults = false
        pluginNamespace = '';

        if (phase2Results[key4] === false) {
          phase2FinalResult = false;
        }
      } // End-for (let key4 in phase2Results)

      if (phase1FinalResult === true && phase2FinalResult === true) {
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, true);
        returnData[1] = true;
      } else {
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
        returnData[1] = false;
      }
    } else {
      await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
      returnData[1] = false;
    } // End-if (validUserEntry)
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
    returnData[1] = false;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateCommandAliases
 * @description Validates all command aliases have no duplicates within a command, but also between commands.
 * @param {array<string>} inputData An array that could possibly include the name of this command,
 * and a list of top-level command aliases data structures to be validated.
 * That way we can parameterize and optimize the validation of the command aliases specific to the testing needs.
 * Rather than always running the full set of command aliases, as that could take a very long time,
 * and only needs to be done exhaustively when releasing a new instance of the entire Haystacks platform.
 * inputData[1] = validateCommandAliases
 * inputData[2] = Could be a coma-separated string list of command alias data types to validate.
 * inputData[n] = Could be additional list of command alias list data to validate if the user entered a space-separated list.
 * Options are: Framework,Platform,Application,App,Plugins,Plugin
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/03/30
 */
async function validateCommandAliases(inputData, inputMetaData) {
  let functionName = validateCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let validationTypesInputArray = []; // Use this to process any inputs the user may have entered.
  let validationTypesConfirmedArray = []; // Use this once we've confirmed valid user entry for inputs given the types of validation that are available.
  let validationTypesConfirmedList = '';
  let validUserEntry = false;
  let allCommandAliasesToValidate = []
  let passedAllCommandAliasesDuplicateCheck = true;
  let duplicateAliasCount = 0
  let blackColorArray = await colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let redColorArray = await colorizer.getNamedColorData(clr.cRed, [255,0,0]);
  let validCommandAliasesValidationTypes = [wrd.cFramework, wrd.cApplication, wrd.cPlugins];
  let validCommandAliasesValidationUserTypes = [wrd.cFramework, wrd.cPlatform, wrd.cApplication, wrd.cApp, wrd.cPlugins, wrd.cPlugin];

  // Process user input(s).
  // Check first to see what, if any options, the user may have entered into this command,
  // that will determine to what extent we do validation.
  if (Array.isArray(inputData) && inputData.length === 2) {
    // User either entered a single data structure to validate, or a coma-separated list.
    // inputData.length is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataLengthIs + inputData.length);
    if (inputData[1].includes(bas.cComa)) {
      validationTypesInputArray = inputData[1].split(bas.cComa);
    } else if (inputData[1].includes(bas.cSemiColon)) {
      validationTypesInputArray = inputData[1].split(bas.cSemiColon);
    } else if (inputData[1].includes(bas.cForwardSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cForwardSlash);
    } else if (inputData[1].includes(bas.cBackSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cBackSlash);
    } else {
      // shift the data1!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData1);
      inputData.shift();
      validationTypesInputArray = inputData;
    }
  } else if (Array.isArray(inputData) && inputData.length > 2) {
    // shift the data2!
    await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData2);
    inputData.shift();
    validationTypesInputArray = inputData;
  }

  // validationTypesInputArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesInputArrayIs + JSON.stringify(validationTypesInputArray));

  // This is where we need to process the array of inputs to normalize them to the validation types available by the system.
  // Available types are: Framework,Platform,Application,App,Plugins,Plugin
  if (validationTypesInputArray.length > 0) {
    for (let validationTypesKey in validationTypesInputArray) {
      let userEnteredValidationType = validationTypesInputArray[validationTypesKey];
      if (userEnteredValidationType.toUpperCase().trim() === wrd.cFRAMEWORK || userEnteredValidationType.toUpperCase().trim() === wrd.cPLATFORM) {
        validationTypesConfirmedArray.push(wrd.cFramework);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cAPPLICATION || userEnteredValidationType.toUpperCase().trim() === wrd.cAPP) {
        validationTypesConfirmedArray.push(wrd.cApplication);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGINS || userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGIN) {
        validationTypesConfirmedArray.push(wrd.cPlugins);
      } else if (userEnteredValidationType === '') {
        // Just ignore it!
      } else {
        // WARNING: The specified validation type is not available, please enter a valid type and try again. Type not recognized:
        console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage01 + userEnteredValidationType);
        // Command Aliases validation types are:
        console.log(msg.cWarningUserEnteredCommandAliasesValidationDataTypeMessage02 + validCommandAliasesValidationUserTypes.join(bas.cComa + bas.cSpace));
      }
    } // End-for (let validationTypesKey in validationTypesInputArray)

    // validationTypesConfirmedArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedArrayIs + JSON.stringify(validationTypesConfirmedArray));

    if (validationTypesConfirmedArray.length > 0) {
      validationTypesConfirmedList = validationTypesConfirmedArray.join(bas.cComa);
      validUserEntry = true;
    } else {
      // WARNING: No valid command aliases validation types were entered.
      console.log(msg.cWarningUserEnteredCommandAliasesValidationDataTypeMessage03);
      // Command Aliases validation types are:
      console.log(msg.cWarningUserEnteredCommandAliasesValidationDataTypeMessage02 + validCommandAliasesValidationUserTypes.join(bas.cComa + bas.cSpace));
    }
  } else {
    // User didn't enter any parameters at all....just run it all!
    validationTypesConfirmedList = validCommandAliasesValidationTypes.join(bas.cComa);
    validUserEntry = true;
  }

  // validationTypesConfirmedList is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedListIs + validationTypesConfirmedList);

  if (validUserEntry === true) {
    if (validationTypesConfirmedList.includes(wrd.cFramework)) {
      let frameworkCommandAliases = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases][wrd.cFramework]);
      // frameworkCommandAliases is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkCommandAliasesIs + JSON.stringify(frameworkCommandAliases));
      if (frameworkCommandAliases) {
        allCommandAliasesToValidate = await ruleBroker.processRules([allCommandAliasesToValidate, frameworkCommandAliases], [biz.cobjectDeepMerge]);
      }
    }
    if (validationTypesConfirmedList.includes(wrd.cApplication)) {
      let applicationCommandAliases = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases][wrd.cApplication]);
      // applicationCommandAliases is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationCommandAliasesIs + JSON.stringify(applicationCommandAliases));
      if (applicationCommandAliases) {
        if (Object.keys(allCommandAliasesToValidate).length != 0) {
          allCommandAliasesToValidate = await ruleBroker.processRules([allCommandAliasesToValidate, applicationCommandAliases], [biz.cobjectDeepMerge]);
        } else {
          allCommandAliasesToValidate = applicationCommandAliases;
        }
      }
    }
    // If the system is either loading plugins or plugin data has been loaded by the build-release-deployment system for
    // the purpose of releasing a plugin and running plugin validations as part of the plugin release process.
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader) ||
    await configurator.getConfigurationSetting(wrd.csystem, sys.cPluginName)) {
      if (validationTypesConfirmedList.includes(wrd.cPlugins)) {
        let pluginCommandAliases = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases][wrd.cPlugins]);
        // pluginCommandAliases is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesIs + JSON.stringify(pluginCommandAliases));
        if (pluginCommandAliases) {
          if (Object.keys(allCommandAliasesToValidate).length != 0) {
            allCommandAliasesToValidate = await ruleBroker.processRules([allCommandAliasesToValidate, pluginCommandAliases], [biz.cobjectDeepMerge]);
          } else {
            allCommandAliasesToValidate = pluginCommandAliases;
          }
        }
      }
    }
    // Old method of getting all the command aliases data:
    // allCommandAliasesToValidate = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases]);

    // allCommandAliasesToValidate is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasesToValidateIs + JSON.stringify(allCommandAliasesToValidate));

    // Now do the validation from the flattened array of command aliases data.
    // Begin command aliases validation
    console.log(msg.cBeginCommandAliasesValidationMessage);
    for (let key1 in allCommandAliasesToValidate[0]) {
      // key1 is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ckey1Is + key1);
      let currentCommand = allCommandAliasesToValidate[0][key1];
      // currentCommand is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
      console.log(msg.ccurrentCommandIs + currentCommand[wrd.cName]);
      let aliasList = currentCommand[wrd.cAliases];
      // aliasList is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.caliasListIs + aliasList);
      let arrayOfAliases = aliasList.split(bas.cComa);
      for (let j = 0; j < arrayOfAliases.length; j++) {
        // BEGIN j-th loop:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_jthLoop + j);
        let currentAlias = arrayOfAliases[j];
        // currentAlias is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
        duplicateAliasCount = await commandBroker.countMatchingCommandAlias(D[sys.cCommandsAliases], currentAlias);
        if (duplicateAliasCount > 1) {

          // duplicateAliasCount is:
          let duplicateAliasCountMessage = msg.cduplicateAliasCountIs + duplicateAliasCount;
          duplicateAliasCountMessage = await colorizer.colorizeMessageSimple(duplicateAliasCountMessage, blackColorArray, true);
          duplicateAliasCountMessage = await colorizer.colorizeMessageSimple(duplicateAliasCountMessage, redColorArray, false);
          console.log(duplicateAliasCountMessage);
          // duplicate command alias is:
          let duplicateAliasCommandMessage = msg.cduplicateCommandAliasIs + currentAlias;
          duplicateAliasCommandMessage = await colorizer.colorizeMessageSimple(duplicateAliasCommandMessage, blackColorArray, true);
          duplicateAliasCommandMessage = await colorizer.colorizeMessageSimple(duplicateAliasCommandMessage, redColorArray, false);
          console.log(duplicateAliasCommandMessage);

          passedAllCommandAliasesDuplicateCheck = false;
          returnData[1] = false;
          // DO NOT break out of any loops here, the command should scan all command aliases!
        }
        // END j-th loop:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_jthLoop + j);
      } // End-for (let j = 0; j < arrayOfAliases.length; j++)
    } // End-for (let key1 in allCommandAliasesToValidate[0])
    if (passedAllCommandAliasesDuplicateCheck === true) {
      // PASSED: All duplicate command aliases validation tests!
      console.log(msg.cvalidateCommandAliasesMessage1);
      returnData[1] = true;
    } // End-if (passedAllCommandAliasesDuplicateCheck === true)
  } else {
    // No validation was run, YOU SHALL NOT PASS!!!!
    passedAllCommandAliasesDuplicateCheck = false;
    returnData[1] = false;
  } // End-if (validUserEntry === true)
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateWorkflows
 * @description Validates all the workflows have no duplicates.
 * @param {array<string>} inputData An array that could possibly include the name of this command,
 * and a list of top-level workflows data structures to be validated.
 * That way we can parameterize and optimize the validation of the workflows specific to the testing needs.
 * Rather than always running the full set of workflows, as that could take longer,
 * and only needs to be done exhaustively when releasing a new instance of the entire Haystacks platform.
 * inputData[1] = validateWorkflows
 * inputData[2] = Could be a coma-separated string list of workflow data types to validate.
 * inputData[n] = Could be additional list of workflow data types list to validate if the user entered a space-separated list.
 * Options are: Framework,Platform,Application,App,Plugins,Plugin
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/06/08
 */
async function validateWorkflows(inputData, inputMetaData) {
  let functionName = validateWorkflows.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let validationTypesInputArray = []; // Use this to process any inputs the user may have entered.
  let validationTypesConfirmedArray = []; // Use this once we've confirmed valid user entry for inputs given the types of validation that are available.
  let validationTypesConfirmedList = '';
  let validUserEntry = false;
  let allWorkflowsToValidate = [];
  let numberOfDuplicatesFound = 0;
  let passedAllWorkflowDuplicateCheck = true;
  let blackColorArray = await colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let redColorArray = await colorizer.getNamedColorData(clr.cRed, [255,0,0]);
  let validWorkflowsValidationTypes = [wrd.cFramework, wrd.cApplication, wrd.cPlugins];
  let validWorkflowsValidationUserTypes = [wrd.cFramework, wrd.cPlatform, wrd.cApplication, wrd.cApp, wrd.cPlugins, wrd.cPlugin];

  // Process user input(s).
  // Check first to see what, if any options, the user may have entered into this command,
  // that will determine to what extent we do validation.
  if (Array.isArray(inputData) && inputData.length === 2) {
    // User either entered a single data structure to validate, or a coma-separated list.
    // inputData.length is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataLengthIs + inputData.length);
    if (inputData[1].includes(bas.cComa)) {
      validationTypesInputArray = inputData[1].split(bas.cComa);
    } else if (inputData[1].includes(bas.cSemiColon)) {
      validationTypesInputArray = inputData[1].split(bas.cSemiColon);
    } else if (inputData[1].includes(bas.cForwardSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cForwardSlash);
    } else if (inputData[1].includes(bas.cBackSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cBackSlash);
    } else {
      // shift the data1!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData1);
      inputData.shift();
      validationTypesInputArray = inputData;
    }
  } else if (Array.isArray(inputData) && inputData.length > 2) {
    // shift the data2!
    await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData2);
    inputData.shift();
    validationTypesInputArray = inputData;
  }

  // validationTypesInputArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesInputArrayIs + JSON.stringify(validationTypesInputArray));

  // This is where we need to process the array of inputs to normalize them to the validation types available by the system.
  // Available types are: Framework,Platform,Application,App,Plugins,Plugin
  if (validationTypesInputArray.length > 0) {
    for (let validationTypesKey in validationTypesInputArray) {
      let userEnteredValidationType = validationTypesInputArray[validationTypesKey];
      if (userEnteredValidationType.toUpperCase().trim() === wrd.cFRAMEWORK || userEnteredValidationType.toUpperCase().trim() === wrd.cPLATFORM) {
        validationTypesConfirmedArray.push(wrd.cFramework);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cAPPLICATION || userEnteredValidationType.toUpperCase().trim() === wrd.cAPP) {
        validationTypesConfirmedArray.push(wrd.cApplication);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGINS || userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGIN) {
        validationTypesConfirmedArray.push(wrd.cPlugins);
      } else if (userEnteredValidationType === '') {
        // Just ignore it!
      } else {
        // WARNING: The specified validation type is not available, please enter a valid type and try again. Type not recognized:
        console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage01 + userEnteredValidationType);
        // Workflows validation types are:
        console.log(msg.cWarningUserEnteredWorkflowsValidationDataTypeMessage02 + validWorkflowsValidationUserTypes.join(bas.cComa + bas.cSpace));
      }
    } // End-for (let validationTypesKey in validationTypesInputArray)

    // validationTypesConfirmedArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedArrayIs + JSON.stringify(validationTypesConfirmedArray));

    if (validationTypesConfirmedArray.length > 0) {
      validationTypesConfirmedList = validationTypesConfirmedArray.join(bas.cComa);
      validUserEntry = true;
    } else {
      // WARNING: No valid workflow validation types were entered.
      console.log(msg.cWarningUserEnteredWorkflowsValidationDataTypeMessage03);
      // Workflows validation types are:
      console.log(msg.cWarningUserEnteredWorkflowsValidationDataTypeMessage02 + validWorkflowsValidationUserTypes.join(bas.cComa + bas.cSpace));
    }
  } else {
    // User didn't enter any parameters at all....just run it all!
    validationTypesConfirmedList = validWorkflowsValidationTypes.join(bas.cComa);
    validUserEntry = true;
  }

  // validationTypesConfirmedList is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedListIs + validationTypesConfirmedList);

  if (validUserEntry === true) {
    if (validationTypesConfirmedList.includes(wrd.cFramework)) {
      allWorkflowsToValidate = await workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows][wrd.cFramework]);
    }
    // allWorkflowsToValidate is: 1
    await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsToValidate + num.c1 + bas.cSpace + JSON.stringify(allWorkflowsToValidate));
    if (validationTypesConfirmedList.includes(wrd.cApplication)) {
      allWorkflowsToValidate.push(...await workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows][wrd.cApplication]));
    }
    // If the system is either loading plugins or plugin data has been loaded by the build-release-deployment system for
    // the purpose of releasing a plugin and running plugin validations as part of the plugin release process.
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader) ||
    await configurator.getConfigurationSetting(wrd.csystem, sys.cPluginName)) {
      // NOTE: If the plugin system is enabled, but no plugins are loaded, then the following will be undefined if we don't check to see if it is also undefined.
      // The result would be the call to getAllWorkflows will return the contents of all workflows and they would get duplicate added to the allWorkflowsToValidate array.
      // This will generate many duplicate entries that are not actual duplicates, causing false positive failures.
      if (validationTypesConfirmedList.includes(wrd.cPlugins) && D[sys.cCommandWorkflows][wrd.cPlugins] !== undefined) {
        allWorkflowsToValidate.push(...await workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows][wrd.cPlugins]));
      }
    }
    // Old method of getting all the command aliases data:
    // allWorkflowsToValidate = await workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows]);
    // allWorkflowsToValidate is: 2
    await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsToValidate + num.c2 + bas.cSpace + JSON.stringify(allWorkflowsToValidate));
    // Begin workflows validation
    console.log(msg.cBeginWorkflowsValidationMessage);
    for (let workflowKey in allWorkflowsToValidate) {
      numberOfDuplicatesFound = 0;
      let workflowName = allWorkflowsToValidate[workflowKey];
      // workflowName is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
      console.log(msg.cworkflowNameIs + workflowName);
      for (const element of allWorkflowsToValidate) {
        let secondTierWorkflowName = element;
        // secondTierWorkflowName is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.csecondTierWorkflowNameIs + secondTierWorkflowName);
        if (workflowName === secondTierWorkflowName) {
          numberOfDuplicatesFound = numberOfDuplicatesFound + 1;
        }
      } // End-for (const element of allWorkflowsToValidate)
      if (numberOfDuplicatesFound > 1) {
        // Duplicate workflow count is:
        let duplicateWorkflowCountMessage = msg.cDuplicateWorkflowCountIs + numberOfDuplicatesFound;
        duplicateWorkflowCountMessage = await colorizer.colorizeMessageSimple(duplicateWorkflowCountMessage, blackColorArray, true);
        duplicateWorkflowCountMessage = await colorizer.colorizeMessageSimple(duplicateWorkflowCountMessage, redColorArray, false);
        console.log(duplicateWorkflowCountMessage);

        // Duplicate workflow name is:
        let duplicateWorkflowMessage = msg.cDuplicateWorkflowNameIs + workflowName;
        duplicateWorkflowMessage = await colorizer.colorizeMessageSimple(duplicateWorkflowMessage, blackColorArray, true);
        duplicateWorkflowMessage = await colorizer.colorizeMessageSimple(duplicateWorkflowMessage, redColorArray, false);
        console.log(duplicateWorkflowMessage);

        passedAllWorkflowDuplicateCheck = false;
        returnData[1] = false;
      } // End-if (numberOfDuplicatesFound > 1)
    } // End-for (let workflowName in allWorkflowsToValidate)
  } else {
    // No validation was run, YOU SHALL NOT PASS!!!!
    passedAllWorkflowDuplicateCheck = false;
    returnData[1] = false;
  } // End-if (validUserEntry === true)

  if (passedAllWorkflowDuplicateCheck === true) {
    // PASSED: All duplicate workflow validation tests!
    console.log(msg.cvalidateWorkflowsMessage01);
    returnData[1] = true;
  } // End-if (passedAllWorkflowDuplicateCheck === true)
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassedAllWorkflowDuplicateChecks, passedAllWorkflowDuplicateCheck);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function runAllValidations
 * @description Runs all validations together, constants validation, command alias validation and workflow validation.
 * @param {string} inputData An array that could possibly include the name of this command,
 * and a list of top-level data structures that all validations should be run against.
 * Rather than always running the full set of validations against everything, as that could take longer,
 * and only needs to be done exhaustively when releasing a new instance of the entire Haystacks platform.
 * inputData[1] = runAllValidations
 * inputData[2] = Could be a coma-separated string list of data types to run all validation with.
 * inputData[n] = Could be additional list of workflow data types list to validate if the user entered a space-separated list.
 * Options are: Framework,Platform,Application,App,Plugins,Plugin
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2023/02/20
 */
async function runAllValidations(inputData, inputMetaData) {
  let functionName = runAllValidations.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let validationTypesInputArray = []; // Use this to process any inputs the user may have entered.
  let validationTypesConfirmedArray = []; // Use this once we've confirmed valid user entry for inputs given the types of validation that are available.
  let validationTypesConfirmedList = '';
  let validUserEntry = false;
  let validValidationTypes = [wrd.cFramework, wrd.cApplication, wrd.cPlugins];
  let validValidationUserTypes = [wrd.cFramework, wrd.cPlatform, wrd.cApplication, wrd.cApp, wrd.cPlugins, wrd.cPlugin];

  // Process user input(s).
  // Check first to see what, if any options, the user may have entered nto this command,
  // that will determine to what extent we do validation.
  if (Array.isArray(inputData) && inputData.length === 2) {
    // User either entered a single data structure to validate, or a coma-separated list.
    // inputData.length is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataLengthIs + inputData.length);
    if (inputData[1].includes(bas.cComa)) {
      validationTypesInputArray = inputData[1].split(bas.cComa);
    } else if (inputData[1].includes(bas.cSemiColon)) {
      validationTypesInputArray = inputData[1].split(bas.cSemiColon);
    } else if (inputData[1].includes(bas.cForwardSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cForwardSlash);
    } else if (inputData[1].includes(bas.cBackSlash)) {
      validationTypesInputArray = inputData[1].split(bas.cForwardSlash);
    } else {
      // shift the data1!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData1);
      inputData.shift();
      validationTypesInputArray = inputData;
    }
  } else if (Array.isArray(inputData) && inputData.length > 2) {
    // shift the data2!
    await loggers.consoleLog(namespacePrefix + functionName, msg.cshiftData2);
    inputData.shift();
    validationTypesInputArray = inputData;
  }

  // validationTypesInputArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesInputArrayIs + JSON.stringify(validationTypesInputArray));

  // This is where we need to process the array of inputs to normalize them to the validation types available by the system.
  // Available types are: Framework,Platform,Application,App,Plugins,Plugin
  if (validationTypesInputArray.length > 0) {
    for (let validationTypesKey in validationTypesInputArray) {
      let userEnteredValidationType = validationTypesInputArray[validationTypesKey];
      if (userEnteredValidationType.toUpperCase().trim() === wrd.cFRAMEWORK || userEnteredValidationType.toUpperCase().trim() === wrd.cPLATFORM) {
        validationTypesConfirmedArray.push(wrd.cFramework);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cAPPLICATION || userEnteredValidationType.toUpperCase().trim() === wrd.cAPP) {
        validationTypesConfirmedArray.push(wrd.cApplication);
      } else if (userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGINS || userEnteredValidationType.toUpperCase().trim() === wrd.cPLUGIN) {
        validationTypesConfirmedArray.push(wrd.cPlugins);
      } else if (userEnteredValidationType === '') {
        // Just ignore it
      } else {
        // WARNING: The specified validation type is not available, please enter a valid type and try again. Type not recognized:
        console.log(msg.cWarningUserEnteredConstantsValidationDataTypeMessage01 + userEnteredValidationType);
        // Validation types are:
        console.log(msg.cWarningUserEnteredValidationDateTypeMessage02 + validValidationUserTypes.join(bas.cComa + bas.cSpace));
      }
    } // End-for (let validationTypesKey in validationTypesInputArray)

    // validationTypesConfirmedArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedArrayIs + JSON.stringify(validationTypesConfirmedArray));

    if (validationTypesConfirmedArray.length > 0) {
      validationTypesConfirmedList = validationTypesConfirmedArray.join(bas.cComa);
      validUserEntry = true;
    } else {
      // WARNING: No valid validation types were entered.
      console.log(msg.cWarningUserEnteredValidationDataTypeMessage03);
      // All validation types are:
      console.log(msg.cWarningUserEnteredValidationDataTypeMessage02 + validValidationUserTypes.join(bas.cComa + bas.cSpace));
    }
  } else {
    // User didn't enter any parameters at all....just run it all!
    validationTypesConfirmedList = validValidationTypes.join(bas.cComa);
    validationTypesConfirmedArray = validValidationTypes
    validUserEntry = true;
  }

  // vaidationTypesConfirmedList is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalidationTypesConfirmedListIs + validationTypesConfirmedList);

  if (validUserEntry === true) {
    let constantsValidationCommandToQueue = cmd.cvalidateConstants + bas.cSpace + validationTypesConfirmedList;
    let commandAliasesValidationCommandToQueue = cmd.cvalidateCommandAliases + bas.cSpace + validationTypesConfirmedList;
    let workflowsValidationCommandToQueue = cmd.cvalidateWorkflows + bas.cSpace + validationTypesConfirmedList;
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.clogAllCommands) === true) {
      await stack.push(sys.cSystemCommandLog, constantsValidationCommandToQueue);
      await stack.push(sys.cSystemCommandLog, commandAliasesValidationCommandToQueue);
      await stack.push(sys.cSystemCommandLog, workflowsValidationCommandToQueue);
    }
    // Now add them to the front of the command queue in reverse order, so they will get executed next.
    // Running all validations
    console.log(msg.cRunningAllValidationsMessage);
    await queue.enqueueFront(sys.cCommandQueue, workflowsValidationCommandToQueue);
    await queue.enqueueFront(sys.cCommandQueue, commandAliasesValidationCommandToQueue);
    await queue.enqueueFront(sys.cCommandQueue, constantsValidationCommandToQueue);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  validateConstants,
  validateCommandAliases,
  validateWorkflows,
  runAllValidations
}
