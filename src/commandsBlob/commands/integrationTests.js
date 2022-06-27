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
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, clr, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.integrationTests.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstants
 * @description Validates all constants with a 2-phase verification process.
 * @param {string} inputData Not used for this command.
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
    // Get the array of keys and values for all the constants that need to be validated.
    let validationArray = D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all of the key-value pair attributes we need.
    let phase1FinalResult = true;
    let phase2FinalResult = true;
    let phase1Results = {};
    let phase2Results = {};

    // Phase1 Constants Validation
    // BEGIN Phase 1 Constants Validation
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase1ConstantsValidation);
    // First scan through each file and validate that the constants defined in the constants code file are also contained in the validation file.
    for (let key1 in validationArray) {
      let constantsPath = validationArray[key1];
      phase1Results[key1] = await ruleBroker.processRules([constantsPath, key1], [biz.cvalidateConstantsDataValidation]);
    } // End-for (let key1 in validationArray)
    // END Phase 1 Constants Validation
    await loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase1ConstantsValidation);

    // Phase 2 Constants Validation
    // BEGIN Phase 2 Constants Validation
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase2ConstantsValidation);
    // Now verify that the values of the constants are what they are expected to be by using the constants validation data to validate.
    for (let key2 in validationArray) {
      phase2Results[key2] = await ruleBroker.processRules([key2, ''], [biz.cvalidateConstantsDataValues]);
    } // End-for (let key2 in validationArray)
    // END Phase 2 Constants Validation
    await loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase2ConstantsValidation);

    for (let key3 in phase1Results) {
      await loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][key3], phase1Results[key3]);
      if (phase1Results[key3] === false) {
        phase1FinalResult = false;
      }
    } // End-for (let key3 in phase1ResultsArray)

    for (let key4 in phase2Results) {
      await loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][key4], phase2Results[key4]);
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
 * @param {string} inputData Not used for this command.
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
  let allCommandAliases = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases]);
  let passedAllCommandAliasesDuplicateCheck = true;
  let duplicateAliasCount = 0
  let blackColorArray = await colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let redColorArray = await colorizer.getNamedColorData(clr.cRed, [255,0,0]);
  for (let key1 in allCommandAliases[0]) {
    // key1 is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ckey1Is + key1);
    let currentCommand = allCommandAliases[0][key1];
    // currentCommand is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
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
  } // End-for (let key1 in allCommandAliases[0])
  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(msg.cvalidateCommandAliasesMessage1);
    returnData[1] = true;
  } // End-if (passedAllCommandAliasesDuplicateCheck === true)
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateWorkflows
 * @description Validates all the workflows have no duplicates.
 * @param {string} inputData Not used for this command.
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
  let numberOfDuplicatesFound = 0;
  let passedAllWorkflowDuplicateCheck = true;
  let allWorkflowsData = await workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows]);
  let blackColorArray = await colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let redColorArray = await colorizer.getNamedColorData(clr.cRed, [255,0,0]);
  // allWorkflowsData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsDataIs + JSON.stringify(allWorkflowsData));
  for (let workflowKey in allWorkflowsData) {
    numberOfDuplicatesFound = 0;
    let workflowName = allWorkflowsData[workflowKey];
    for (const element of allWorkflowsData) {
      let secondTierWorkflowName = element;
      // console.log('workflowName is: ' + workflowName);
      // console.log('secondTierWorkflowName is: ' + secondTierWorkflowName);
      if (workflowName === secondTierWorkflowName) {
        numberOfDuplicatesFound = numberOfDuplicatesFound + 1;
      }
    } // End-for (const element of allWorkflowsData)
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
  } // End-for (let workflowName in allWorkflowsData)
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

export default {
  validateConstants,
  validateCommandAliases,
  validateWorkflows
}
