/**
* @file system.js
* @module system
* @description Contains all of the system level commands.
* @requires module:commandBroker
* @requires module:ruleBroker
* @requires module:workflowBroker
* @requires module:configurator
* @requires module:loggers
* @requires module:data
* @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
* @requires {@link https://www.npmjs.com/package/figlet|figlet}
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2022/04/20
* @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
*/

// Internal imports
import commandBroker from '../../brokers/commandBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import workflowBroker from '../../brokers/workflowBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import figlet from 'figlet';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.system.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function echoCommand
 * @description Returns the input as the output without any changes.
 * @param {array<boolean|string|integer>} inputData String that should be echoed.
 * inputData[0] === 'echoCommand'
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function echoCommand(inputData, inputMetaData) {
  let functionName = echoCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let errorMessage = '';
  if (inputData) {
    inputData.shift();
    console.log(inputData.join(bas.cSpace));
    returnData[1] = inputData.join(bas.cSpace);
  } else {
    // Nothing to echo.
    errorMessage = msg.cNothingToEcho;
    console.log(errorMessage);
    returnData[1] = errorMessage;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function exit
 * @description Returns false so the entire application can exit.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'exit'
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean False value to
 * indicate if the application exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function exit(inputData, inputMetaData) {
  let functionName = exit.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, true];
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function version
 * @description Displays the current version number for the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'version'
 * inputData[1] === 'application|framework' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function version(inputData, inputMetaData) {
  let functionName = version.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let configVersion = '';
  let appContext = '';
  if (inputData.length === 2) {
     appContext = inputData[1];
     if (appContext.toUpperCase() === wrd.cAPPLICATION) {
        configVersion = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
     } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
        configVersion = await configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber);
     } else {
        configVersion = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
     }
  } else {
    configVersion = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
  }
  console.log(configVersion);
  returnData[1] = configVersion;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'about'
 * inputData[1] === 'application|framework' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function about(inputData, inputMetaData) {
  let functionName = about.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let configDescription = '';
  let appContext = '';
  if (inputData.length === 2) {
    appContext = inputData[1];
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      configDescription = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      configDescription = await configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkDescription);
    } else {
      configDescription = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    }
  } else {
    configDescription = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
  }
  console.log(configDescription);
  returnData[1] = configDescription;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function name
 * @description Displays the name of the current application in standard font format, nothing special.
 * Optional argument to output in figlet font.
 * @param {array<boolean|string|integer>} inputData An array that could really contain anything depending
 * on what the user entered, but the function converts and filters out for a boolean
 * True or False value internally to the function.
 * inputData[0] === 'name'
 * inputData[1] === 'application|framework' (optional)
 * inputData[2] === 'true|false' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function name(inputData, inputMetaData) {
  let functionName = name.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let reportedName = '';
  let figletFont = '';
  let appContext = '';
  let useFancyFont = false;
  if (inputData.length === 2) {
    appContext = inputData[1];
  } // End-if (inputData.length === 2)
  if (inputData.length === 3) {
    appContext = inputData[1];
    useFancyFont = await ruleBroker.processRules([inputData[2], ''], [biz.cstringToDataType]);
  } // End-if (inputData.length === 3)
  if (appContext !== '') {
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      reportedName = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      reportedName = await configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkName);
    } else {
      reportedName = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    }
  } else {
    reportedName = await configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
  }
  if (useFancyFont === true) {
    figletFont = await configurator.getConfigurationSetting(wrd.csystem, cfg.cfigletFont);
    console.log(figlet.textSync(reportedName, {font: figletFont, horizontalLayout: sys.cfull}));
  } else {
    console.log(reportedName);
  }
  returnData[1] = reportedName;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearScreen
 * @description Clears all data from the console cache by printing a bunch of blank lines to the screen.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
// eslint-disable-next-line no-unused-vars
async function clearScreen(inputData, inputMetaData) {
  let functionName = clearScreen.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [true, {}];
  // console.clear(); // This will clear the screen, but not the cache, you can still scroll up and see the previous commands.
  // process.stdout.write('\u001B[2J\u-001B[0;0f'); // Same as above.
  // eslint-disable-next-line no-undef
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  returnData[1] = true;
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function help
 * @description Displays all the information about all of the commands in the system,
 * including both system defined commands and client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'help'
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
// eslint-disable-next-line no-unused-vars
async function help(inputData, inputMetaData) {
  let functionName = help.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [true, []];
  let errorMessage = '';
  if (inputData.length > 1) {
    // calling getCommandNamespaceDataObject() function,
    // because the user entered some namespace we should look for!
    let namespaceCommandsData = await commandBroker.getCommandNamespaceDataObject(undefined, inputData[1]);
    // namespaceCommandsData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceCommandsDataIs + JSON.stringify(namespaceCommandsData));
    if (namespaceCommandsData === false) {
      // ERROR: The command namespace was not found.
      // Please make sure you have entered the correct name and try again.
      errorMessage = msg.chelpCommandMessage01 + bas.cSpace + msg.chelpCommandMessage02;
      console.log(errorMessage);
      returnData[1] = errorMessage;
    } else {
      // NOW call getAllCommandAliasData with the above found data!
      await loggers.consoleLog(namespacePrefix + functionName, msg.chelpCommandMessage03);
      let flattenedNamespaceCommandAliasData = await commandBroker.getAllCommandAliasData(namespaceCommandsData);
      await loggers.consoleTableLog(baseFileName + bas.cDot + functionName, flattenedNamespaceCommandAliasData[0], [wrd.cName, wrd.cDescription]);
      returnData[1] = await ruleBroker.processRules([flattenedNamespaceCommandAliasData[0], ''], [biz.carrayDeepClone]);
    }
  } else {
    let allCommandAliasFlatData = await commandBroker.getAllCommandAliasData(D[sys.cCommandsAliases]);
    returnData[1] = await ruleBroker.processRules([allCommandAliasFlatData, ''], [biz.carrayDeepClone]);
    // allCommandAliasFlatData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasFlatDataIs + JSON.stringify(allCommandAliasFlatData[0]));
    await loggers.consoleTableLog(baseFileName + bas.cDot + functionName, allCommandAliasFlatData[0], [wrd.cName, wrd.cDescription]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function workflowHelp
 * @description Displays all the information about all the workflows in the system,
 * including both system defined workflows & client defined workflows.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'workflowHelp'
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
async function workflowHelp(inputData, inputMetaData) {
  let functionName = workflowHelp.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  let errorMessage = '';
  // The old way of printing out all the workflows, when it was a flat data structure.
  // loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandWorkflows][wrd.cWorkflows], [wrd.cName]);
  if (inputData.length > 1) {
    // calling getWorkflowNamespaceDataObject() function,
    // because the user entered some namespace we should look for!
    await loggers.consoleLog(namespacePrefix + functionName, msg.cworkfowHelpMessage01 + msg.cworkfowHelpMessage02);
    let namespaceWorkflowData = await workflowBroker.getWorkflowNamespaceDataObject(undefined, inputData[1]);
    // namespaceWorkflowData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceWorkflowDataIs + JSON.stringify(namespaceWorkflowData));
    if (namespaceWorkflowData === false) {
      // ERROR: The workflow namespace was not found.
      // Please make sure you have entered the correct name and try again.
      errorMessage = msg.cworkflowHelpCommandMessage01 + bas.cSpace + msg.chelpCommandMessage02;
      console.log(errorMessage);
      returnData[1] = errorMessage;
    } else {
      // NOW call getAllWorkflows with the above found data!
      await loggers.consoleLog(namespacePrefix + functionName, msg.cworkfowHelpMessage03);
      let flattenedNamespaceWorkflowData = await workflowBroker.getAllWorkflows(namespaceWorkflowData);
      await loggers.consoleTableLog(baseFileName + bas.cDot + functionName, flattenedNamespaceWorkflowData);
      returnData[1] = await ruleBroker.processRules([flattenedNamespaceWorkflowData, ''], [biz.carrayDeepClone]);
    }
  } else {
    // User did not enter any parameters,
    // just call getAllWorkflows functions with no input,
    // will return all and print all.
    await loggers.consoleLog(namespacePrefix + functionName, msg.cworkfowHelpMessage04 + msg.cworkfowHelpMessage05 + msg.cworkfowHelpMessage06);
    let allWorkflowData = await workflowBroker.getAllWorkflows();
    await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowDataIs + JSON.stringify(allWorkflowData));
    await loggers.consoleTableLog(baseFileName + bas.cDot + functionName, allWorkflowData);
    returnData[1] = await ruleBroker.processRules([allWorkflowData, ''], [biz.carrayDeepClone]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  echoCommand,
  exit,
  version,
  about,
  name,
  clearScreen,
  help,
  workflowHelp
};
