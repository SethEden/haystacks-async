/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:commandBroker
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:lexical
 * @requires module:loggers
 * @requires module:prompt
 * @requires module:timers
 * @requires module:data
 * @requires module:queue
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../../brokers/commandBroker.js';
import dataBroker from '../../brokers/dataBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import workflowBroker from '../../brokers/workflowBroker.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import lexical from '../../executrix/lexical.js';
import loggers from '../../executrix/loggers.js';
import prompt from '../../executrix/prompt.js';
import timers from '../../executrix/timers.js';
import D from '../../structures/data.js';
import queue from '../../structures/queue.js';
import stack from '../../structures/stack.js';
// External imports
// import prompt from 'prompt-sync';
import hayConst from '@haystacks/constants';
import figlet from 'figlet';
import * as math from 'mathjs';
import path from 'path';

const {bas, biz, cmd, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.nominal.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;
// prompt();

/**
 * @function echoCommand
 * @description Returns the input as the output without any changes.
 * @param {array<boolean|string|integer>} inputData String that should be echoed.
 * inputData[0] === 'echoCommand'
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const echoCommand = function(inputData, inputMetaData) {
  let functionName = echoCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData) {
    inputData.shift();
    console.log(inputData.join(bas.cSpace));
  } else {
    // Nothing to echo.
    console.log(msg.cNothingToEcho);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function exit
 * @description Returns false so the entire application can exit.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'exit'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} False to indicate that the application should exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const exit = function(inputData, inputMetaData) {
  let functionName = exit.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function version
 * @description Dispalys the current version number for the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'version'
 * inputData[1] === 'application|framework' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const version = function(inputData, inputMetaData) {
  let functionName = version.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let configVersion = '';
  let appContext = '';
  if (inputData.length === 2) {
    appContext = inputData[1];
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber);
    } else {
      configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
    }
  } else {
    configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
  }
  console.log(configVersion);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'about'
 * inputData[1] === 'application|framework' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const about = function(inputData, inputMetaData) {
  let functionName = about.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let configDescription = '';
  let appContext = '';
  if (inputData.length === 2) {
    appContext = inputData[1];
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkDescription);
    } else {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    }
  } else {
    configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
  }
  console.log(configDescription);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function name
 * @description Displays the name of the current application in standard font format, nothing special.
 * Optional argument to output in figlet font.
 * @param {array<boolean|string|integer>} inputData An array that could really contain anything depending
 * on what the user entered, but the functino converts and filters out for a boolean
 * True or False value internally to the function.
 * inputData[0] === 'name'
 * inputData[1] === 'application|framework' (optional)
 * inputData[2] === 'true|false' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const name = function(inputData, inputMetaData) {
  let functionName = name.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let reportedName = '';
  let figletFont = '';
  let appContext = '';
  let useFancyFont = false;
  let rules = [];
  rules[0] = biz.cstringToDataType;
  if (inputData.length === 2) {
    appContext = inputData[1];
  }
  if (inputData.length === 3) {
    appContext = inputData[1];
    useFancyFont = ruleBroker.processRules(inputData[2], '', rules);
  }
  if (appContext !== '') {
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkName);
    } else {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    }
  } else {
    reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
  }
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(wrd.csystem, cfg.cfigletFont);
    console.log(figlet.textSync(reportedName, {font: figletFont, horizontalLayout: sys.cfull}));
  } else {
    console.log(reportedName);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function clearScreen
 * @description Clears all data from the console cache by printing a bunch of blank lines to the screen.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
const clearScreen = function(inputData, inputMetaData) {
  let functionName = clearScreen.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  // console.clear(); // This will clear the screen, but not the cache, you can still scroll up and see the previous commands.
  // process.stdout.write('\u001B[2J\u-001B[0;0f'); // Same as above.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function help
 * @description Displays all the information about all of the commands in the system,
 * including both system defined commands and client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'help'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
const help = function(inputData, inputMetaData) {
  let functionName = help.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandsAliases][wrd.cCommands], [wrd.cName, wrd.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function workflowHelp
 * @description Displays all the information about all the workflows in the system,
 * including both system defined workflows & client defined workflows.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'workflowHelp'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
const workflowHelp = function(inputData, inputMetaData) {
  let functionName = workflowHelp.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandWorkflows][wrd.cWorkflows], [wrd.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function commandSequencer
 * @description Takes an arguments array where the second array object would contain a list of
 * commands that should be enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of commands that should be enqueued to the command queue.
 * inputData[0] === 'commandSequencer'
 * inputData[1] === command string 1
 * inputData[2] === command string 2
 * inputData[n] === command string n
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
const commandSequencer = function(inputData, inputMetaData) {
  let functionName = commandSequencer.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  for (let i = 1; i < inputData.length; i++) {
    let commandString = inputData[i];
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.cprimaryCommandDelimiterIs + primaryCommandDelimiter);
    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = bas.cSpace;
    }
    let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandDelimiterIs + secondaryCommandArgsDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.ctertiaryCommandDelimiterIs + tertiaryCommandDelimiter);
    // Replace 2nd & rd level delimiters and down-increemnt them so we are dealing with command strings that can actually be executed.
    const regEx1 = new RegExp(secondaryCommandArgsDelimiter, bas.cg);
    commandString = commandString.replace(regEx1, primaryCommandDelimiter);
    // console.log('commandString after secondaryCommandArgsDelimiter replace with primaryCommandDelimiter is: ' + commandString);
    if (commandString.includes(tertiaryCommandDelimiter)) {
      const regEx2 = new RegExp(tertiaryCommandDelimiter, bas.cg);
      commandString = commandString.replace(regEx2, secondaryCommandArgsDelimiter);
      // console.log('commandString after tertiaryCommandDelimiter replace with secondaryCommandArgsDelimiter is: ' + commandString);
    }
    let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
    let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
    // We need to recompose the command arguments for the current command using the sys.cPrimaryCommandDelimiter.
    if (currentCommand !== false) {
      for (let j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      } // End-for (let j = 1; j < commandArgs.length; j++)
      loggers.consoleLog(namespacePrefix + functionName, msg.ccommandSequencerCommandToEnqueueIs + currentCommand);
      queue.enqueue(sys.cCommandQueue, currentCommand);
    } else { // End-if (currentCommand !== false)
      // WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.
      console.log(msg.ccommandSequencerMessage1 + msg.ccommandSequencerMessage2);
    }
  } // End-for (let i = 1; i < inputData.length; i++)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function workflow
 * @description Takes an arguments array where the second array object would contain a workflow name.
 * We will lookup the named workflow in the D-data structure and send that workflow to a cal to the command sequencer.
 * Which will in-turn convert the list of commands in that workflow into commands that are enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a workflow name, that we should use to look up the workflow in the D-data structure.
 * inputData[0] === 'workflow'
 * inputData[1] === workflowName
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/2/24
 */
const workflow = function(inputData, inputMetaData) {
  let functionName = workflow.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let workflowName = inputData[1];
  let workflowValue = workflowBroker.getWorkflow(workflowName);
  if (workflowValue !== false) {
    queue.enqueue(sys.cCommandQueue, workflowValue);
  } else {
    // WARNING: nominal.workflow: The specified workflow:
    // was not found in either the system defined workflows, or client defined workflows.
    // Please enter a valid workflow name and try again.
    console.log(msg.cworkflowMessage1 + workflowName + bas.cComa + msg.cworkflowMessage2 + msg.cworkflowMessage3);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

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
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const printDataHive = function(inputData, inputMetaData) {
  let functionName = printDataHive.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let printDataHiveToLogFileConfigSetting = configurator.getConfigurationSetting(wrd.csystem, cfg.cprintDataHiveToLogFile);
  let logFilePathAndName = '';
  // if (printDataHiveToLogFileConfigSetting === true) {
    logFilePathAndName = loggers.getLogFileNameAndPath();
    // logFilePathAndName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.clogFilePathAndNameIs + logFilePathAndName);
  // }
  if (inputData && inputData[1].includes(bas.cDot) === true) {
    let dataHivePathArray = inputData[1].split(bas.cDot);
    let leafDataHiveElement = D;
    // dataHivePathArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
    // This for-loop should let us drill down in the D-Data structure followign the path that was provided.
    // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
    for (let i = 0; i < dataHivePathArray.length; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
      leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
      // contents of leafDataHiveElement is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
      // END i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
    }
    console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    if (printDataHiveToLogFileConfigSetting === true) {
      loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    }
  } else {
    if (D[inputData[1]] !== undefined) {
      // contents are:
      console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      if (printDataHiveToLogFileConfigSetting === true) {
        loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      }
    } else {
      // contents of D are:
      console.log(msg.ccontentsOfDare + JSON.stringify(D));
      if (printDataHiveToLogFileConfigSetting === true) {
        loggers.printMessageToFile(logFilePathAndName, msg.ccontentsOfDare + JSON.stringify(D));
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function printDataHiveAttributes
 * @description Prints out all of the attributes for a given specified data-set from the D-data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive or leaf data structure in the heirarchy and
 * a name of an attribute where all values should be printed.
 * Examples ConstantsValidationData.ColorConstantsValidation.Actual
 * inputData[0] === 'printDataHiveAttributes'
 * inputData[1] === ConstantsValidationData.ColorConstantsValidation.Actual
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const printDataHiveAttributes = function(inputData, inputMetaData) {
  let functionName = printDataHiveAttributes.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData && inputData.length > 1) {
    if (inputData[1].includes(bas.cDot) === true) {
      let dataHivePathArray = inputData[1].split(bas.cDot);
      let leafDataHiveElement = D;
      // dataHivePathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
      // This for-loop should let us drill down in the D-Data structue following the path that was provided.
      // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
      // Make sure we don't try to grab the very last term of the namespace. See note below.
      for (let i = 0; i < dataHivePathArray.length - 1; i++) {
        // BEGIN i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
        // contents of leafDataHiveElement is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
        // END i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      } // End-for (let i = 0; i < dataHivePathArray.length - 1; i++)
      loggers.consoleLog(namespacePrefix + functionName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
      let attributeName = dataHivePathArray[dataHivePathArray.length - 1];
      if (leafDataHiveElement && leafDataHiveElement.length > 0) {
        let leafDataHiveElementKeys1 = Object.keys(leafDataHiveElement);
        for (let j = 0; j < leafDataHiveElement.length; j++) {
          let dataEntry = leafDataHiveElement[j];
          if (dataEntry) {
            if (attributeName.toLowerCase() === wrd.centity) {
              // entity is:
              console.log(msg.centryIs + JSON.stringify(dataEntry));
            } else {
              if (dataEntry[attributeName]) {
                // attributeValue is:
                console.log(msg.cattributeValueIs + dataEntry[attributeName]);
              } // End-if (dataEntry[attributeName])
            }
          } // End-if (dataEntry)
        } // End-for (let j = 0; j < leafDataHiveElement.length; j++)
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
            } // End-if (dataEntry2)
          }
        });
      }
    } else { // End-if (inputData[1].includes(bas.cDot) === true)
      // This is the case that the user has probably just specified a single data hive
      // that might not have specific attribute names such as the configuration data.
      console.log(msg.cprintDataHiveAttributesMessage1 + msg.cprintDataHiveAttributesMessage2);
    }
  } else { // End-if (inputData && inputData.length > 1)
    console.log(msg.cprintDataHiveAttributesMessage3);
  } // End-else condition if (inputData && inputData.length > 1)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

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
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const clearDataStorage = function(inputData, inputMetaData) {
  let functionName = clearDataStorage.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData[1] !== undefined) {
    dataBroker.clearData(inputData[1]);
  } else {
    dataBroker.clearData('');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function businessRule
 * @description Executes a user specified business rule with some input.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a busienss rule name and perhpas some rule inputs.
 * inputData[0] === 'businessRule'
 * inputData[1] === rule 1 (including arguments with secondary delimiter)
 * inputData[2] === rule 2 (including arguments with secondary delimiter)
 * inputData[n] === rule n (including arguments with secondary delimiter)
 * @NOTE There are 2 ways this system can work, the user can either call each rule with it's own inputs,
 * or the user can leverage the rule system itself to pass the outputs from rule 1 as inputs to rule 2, etc...
 * This command will only always take the arguments for the first business rule as inputs and let the business rules system
 * pass the outputs as inputs as discussed above.
 * It is assumed if the user wanted to execute a sequence of business rules each with their own inputs,
 * then the user should use the command sequencer in combination with this function
 * to call a series of busienss rules each with their own inputs.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 * @NOTE When executing the business rule: replaceCharacterWithCharacter with a regular expression such as: regEx:[+]:flags:g
 * Consider the following link that describes how the regEx & flags are parsed by the lexical.
 * {@link https://stackoverflow.com/questions/874709/converting-user-input-string-to-regular-expression}
 */
const businessRule = function(inputData, inputMetaData) {
  let functionName = businessRule.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let rules = [];
  let ruleInputData, ruleInputMetaData;
  let ruleOutput = '';
  let addedARule = false;
  let businessRuleOutput = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRuleOutput);
  let businessRuleMetricsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRulePerformanceMetrics);
  let businessRuleStartTime = '';
  let businessRuleEndTime = '';
  let businessRuleDeltaTime = '';
  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;

  // First go through each rule that should be executed and determine if
  // there are any inputs that need to be passed into the business rule.
  for (let i = 1; i < inputData.length; i++) {
    // Begin the i-th iteration fo the inputData array. i is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_theIthIterationOfInputDataArray + i);
    let currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    // currentRule is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentRuleIs + JSON.stringify(currentRuleArg));
    let ruleArgs = [];
    if (i === 1) {
      rules = lexical.parseBusinessRuleArgument(currentRuleArg, i);
    } else if (i === 2) {
      ruleInputData = lexical.parseBusinessRuleArgument(currentRuleArg, i);
    } else if (i === 3 && inputData.length <= 4) {
      ruleInputMetaData = lexical.parseBusinessRuleArgument(currentRuleArg, i);
    } else if (i === 3 && inputData.length > 4) {
      // // In this case all of the arguments will have been combined into a single array and added to the ruleInputData.
      ruleInputMetaData = [];
      for (let j = 3; j <= inputData.length - 1; j++) {
        let currentRuleArrayArg = inputData[j];
        let tempArg = lexical.parseBusinessRuleArgument(currentRuleArrayArg, j);
        // console.log('tempArg is: ' + tempArg);
        if (tempArg) {
          ruleInputMetaData.push(tempArg);
        }
      } // End-for (let j = inputData.length - 1; j > 2; j--)
      break;
    } // End-Else-if (i === 3 && inputData.length > 4)
  } // End-for (let i = 1; i < inputData.length; i++)
  // rules is:
  loggers.consoleLog(namespacePrefix + functionName, msg.crulesIs + JSON.stringify(rules));
  // ruleInputData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cruleInputDataIs + ruleInputData);
  // ruleInputMetaData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cruleInputMetaData + JSON.stringify(ruleInputMetaData));
  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compare the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = timers.getNowMoment(gen.cYYYYMMDD_HHmmss_SSS);
    // Business Rule Start time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleStartTimeIs + businessRuleStartTime);
  } // End-if (businessRuleMetricsEnabled === true)
  ruleOutput = ruleBroker.processRules(ruleInputData, ruleInputMetaData, rules);
  if (businessRuleMetricsEnabled === true) {
    let performanceTrackingObject = {};
    businessRuleEndTime = timers.getNowMoment(gen.cYYYYMMDD_HHmmss_SSS);
    // BusinessRule End time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleEndTimeIs + businessRuleEndTime);
    // Now compute the delta time so we know how long it took to run that busienss rule.
    businessRuleDeltaTime = timers.computeDeltaTime(businessRuleStartTime, businessRuleEndTime);
    // BusinessRule run-time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleRunTimeIs + businessRuleDeltaTime);
    // Check to make sure the business rule performance trackign stack exists or does not exist.
    if (D[cfg.cbusinessRulesPerformanceTrackingStack] === undefined) {
      stack.initStack(cfg.cbusinessRulesPerformanceTrackingStack);
    }
    if (D[cfg.cbusinessRulesNamesPerformanceTrackingStack] === undefined) {
      stack.initStack(cfg.cbusinessRulesNamesPerformanceTrackingStack);
    }
    performanceTrackingObject = {Name: rules[0], RunTime: businessRuleDeltaTime};
    if (stack.contains(cfg.cbusinessRulesNamesPerformanceTrackingStack, rules[0]) === false) {
      stack.push(cfg.cbusinessRulesNamesPerformanceTrackingStack, rules[0]);
    }
    stack.push(cfg.cbusinessRulesPerformanceTrackingStack, performanceTrackingObject);
    // stack.print(cfg.cBusinessRulePerformanceTrackingStack);
    // stack.print(cfg.cBusinessRuleNamesPerformanceTrackingStack);
  } // End-if (businessRuleMetricsEnabled === true)
  if (businessRuleOutput === true) {
    // Rule output is:
    console.log(msg.cRuleOutputIs + JSON.stringify(ruleOutput));
  }
  businessRuleStartTime = '';
  businessRuleEndTime = '';
  businessRuleDeltaTime = '';
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function commandGenerator
 * @description Takes a set of input parameters such as a command and the number of times it should be executed.
 * Then this command will enqueue that command that number of times to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the command that should be executed and the number of times it should be executed.
 * inputData[0] === 'commandGenerator'
 * inputData[1] === command string
 * inputData[2] === number of times to enqueue the above command string
 * @param {string} inputMetaData Not sued for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const commandGenerator = function(inputData, inputMetaData) {
  let functionName = commandGenerator.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let foundLegitNumber = false;
  let legitNumberIndex = -1;
  let replaceCharacterWithCharacterRule = [];
  replaceCharacterWithCharacterRule[0] = biz.creplaceCharacterWithCharacter;
  let primaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cPrimaryCommandDelimiter);
  if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
    primaryCommandDelimiter = bas.cSpace;
  }
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
  let commandString = '';
  if (inputData.length === 3) {
    commandString = inputData[1];
  } else if (inputData.length >= 4) {
    for (let i = 1; i < inputData.length - 1; i++) {
      if (i === 1) {
        commandString = inputData[1];
      } else {
        commandString = commandString + bas.cBackTickQuote + inputData[i].trim() + bas.cBackTickQuote;
      }
    } // End-for (let i = 1; i < inputData.length - 2; i++)
  }

  // NOTE: the str.replace only replaces the first instance of a string value, not all values.
  // but we might have another issue in the sense that if the string begins and ends with "[" & "]" respectively,
  // we might not want to replace those characters.
  // Because it might be that the command should take responsibility or that in such a special case,
  // i.e. treating the whole block as a single array and doing it's own split operation.
  // commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
  // commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
  // commandString before attempted delimiter swap is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringBeforeAttemptedDelimiterSwapIs + commandString);
  // replaceCharacterWithCharacterRule is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creplaceCharacterWithCharacterRuleIs + JSON.stringify(replaceCharacterWithCharacterRule));
  // let secondaryCommandDelimiterRegEx = new RegExp(bas.cBackSlash + secondaryCommandArgsDelimiter, bas.cg);
  let secondaryCommandDelimiterRegEx = new RegExp(`[${secondaryCommandArgsDelimiter}]`, bas.cg);
  commandString = ruleBroker.processRules(commandString, [secondaryCommandArgsDelimiter, primaryCommandDelimiter], replaceCharacterWithCharacterRule);
  // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandGeneratorMessage1 + commandString);
  // let tertiaryCommandDelimiterRegEx = new RegExp(bas.cBackSlash + tertiaryCommandDelimiter, bas.cg);
  let tertiaryCommandDelimiterRegEx = new RegExp(`[${tertiaryCommandDelimiter}]`, bas.cg);
  commandString = ruleBroker.processRules(commandString, [tertiaryCommandDelimiter, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule);
  // After attempting to replace the teriaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandGeneratorMessage2 + commandString);
  let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
  let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
  loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + currentCommand);
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandArgsIs + JSON.stringify(commandArgs));
  if (currentCommand !== false) {
    if (inputData.length >= 3) {
      for (let j = 2; j <= inputData.length - 1; j++) {
        if (isNaN(inputData[j].trim()) === false) {
          foundLegitNumber = true;
          legitNumberIndex = j;
          break;
        }
      } // End-for (let i = 2; i <= inputData.length - 1; i++)
    } // End-if (inputData.length >= 3)
    if (isNaN(inputData[legitNumberIndex]) === false) { // Make sure the user passed in a number for the second argument.
      let numberOfCommands = parseInt(inputData[legitNumberIndex]);
      if (numberOfCommands > 0) {
        for (let i = 0; i < numberOfCommands; i++) {
          queue.enqueue(sys.cCommandQueue, commandString);
        }
      } else {
        // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
        console.log(mg.ccommandGeneratorMessage3 + numberOfCommands);
      }
    } else {
      // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
      console.log(msg.ccommandGeneratorMessage4 + inputData[2]);
    }
  } else {
    // WARNING: nominal.commandGenerator: The specified command:
    // was not found, please enter a valid command and try again.
    console.log(msg.ccommandGeneratorMessage5 + commandString + msg.ccommandGeneratorMessage6);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function commandAliasGenerator
 * @description Requests a set of inputs from the user for a command name,
 * and a series of command words and a list of command word acronyms.
 * The command then calls a series of business rules to in-turn generate all
 * possible combinations of command words and command word acronyms.
 * @param {array<object|boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * parses the data string object into a JSON object with values that are the command words and command word abreviations.
 * inputData[0] === 'commandAliasGenerator'
 * inputData[1] === A JSON object containing the data necessary for defining all command words and command aliases.
 * @NOTE Test string for argument driven interface for this command:
 * {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/25
 */
const commandAliasGenerator = function(inputData, inputMetaData) {
  let functionName = commandAliasGenerator.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let commandName = '';
  let commandWordAliasList = '';
  let validCommandName = false;
  let validCommandWordAliasList = false;
  let validCommandInput = false;
  let commandAliasDataStructure = {};
  let commandNameParsingRule = [];
  let camelCaseToArrayRule = [];
  let commandWordAliasListParsingRule = [];
  let generateCommandAliasesRule = [];
  commandNameParsingRule[0] = biz.cisValidCommandNameString;
  camelCaseToArrayRule[0] = biz.cconvertCamelCaseStringToArray;
  commandWordAliasListParsingRule[0] = biz.cisStringList;
  generateCommandAliasesRule[0] = biz.cgenerateCommandAliases;
  // Command can be called by passing parameters and bypass the prompt system.
  console.log(msg.ccommandAliasGeneratorMessage1);
  // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
  console.log(msg.ccommandAliasGeneratorMessage2);

  if (inputData.length === 0) {
    while (validCommandName === false) {
      console.log(msg.cCommandNamePrompt1);
      console.log(msg.cCommandNamePrompt2);
      console.log(msg.cCommandNamePrompt3);
      console.log(msg.cCommandNamePrompt4);
      console.log(msg.cCommandNamePrompt5);
      commandName = prompt.prompt(bas.cGreaterThan);
      validCommandName = ruleBroker.processRules(commandName, '', commandNameParsingRule);
      if (validCommandName === false) {
        // INVALID INPUT: Please enter a valid camel-case command name.
        console.log(msg.ccommandAliasGeneratorMessage3);
      } // End-if (validCommandName === false)
    } // End-while (validCommandName === false)

    let camelCaseCommandNameArray = ruleBroker.processRules(commandName, '', camelCaseToArrayRule);
    // camelCaseCommandNameArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseCommandNameArrayIs + JSON.stringify(camelCaseCommandNameArray));

    for (let i = 0; i < camelCaseCommandNameArray.length; i++) {
      let commandWord = camelCaseCommandNameArray[i];
      // current commandWord is:
      console.log(msg.ccurrentCommandWordIs + commandWord);
      validCommandWordAliasList = false;
      if (commandWord !== '') {
        commandAliasDataStructure[commandWord] = {};
        while (validCommandWordAliasList === false) {
          console.log(msg.cCommandWordAliasPrompt1);
          console.log(msg.cCommandWordAliasPrompt2);
          console.log(msg.cCommandWordAliasPrompt3 + bas.cSpace + commandWord);
          commandWordAliasList = prompt.prompt(bas.cGreaterThan);
          validCommandWordAliasList = ruleBroker.processRules(commandWordAliasList, '', commandWordAliasListParsingRule);
          if (vaidCommandWordAliasList === false) {
            // INVALID INPUT: Please enter a valid command word alias list.
            console.log(msg.ccommandAliasGeneratorMessage4);
          } else if (commandWordAliasList !== '') { // As long as the user entered something we shoudl be able to proceed!
            validCommandWordAliasList = true;
          }
        } // End-while (validCommandWordAliasList === false)
        commandAliasDataStructure[commandWord] = commandWordAliasList;
        validCommandInput = true;
      } // End-if (commandWord !== '')
    } // End-for (let i = 0; i < camelCaseCommandNameArray.length; i++)
  } else if (inputData.length === 2) {
    try {
      commandAliasDataStructure = JSON.parse(inputData[1]);
      validCommandInput = true;
    } catch (err) {
      // PARSER ERROR:
      console.log(msg.cPARSER_ERROR + err.message);
      // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
      console.log(msg.ccommandAliasGeneratorMessage5);
      // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
      console.log(msg.ccommandAliasGeneratorMessage2);
    }
  } else {
    // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
    console.log(msg.ccommandAliasGeneratorMessage5);
    // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
    console.log(msg.ccommandAliasGeneratorMessage2);
  }

  if (validCommandInput === true) {
    // commandAliasDataStructure is:
    loggers.consoleLog(namespacePrefix, functionName, msg.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure));
    // At this point the user should have entered all valid data and we should be ready to proceed.
    // TODO: Start generating all the possible combinations of the command words and command word aliases.
    // Pass the data object to a business rule to do the above task.
    let commandAliases = ruleBroker.processRules(commandAliasDataStructure, '', generateCommandAliasesRule);
  } // End-if (validCommandInput === true)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsGenerator
 * @description Requests a string input the user would like to have converted nto a constant,
 * while determining the most optimized way to define the new constant based on existing constants.
 * Also checks to see if that new constant is already defined in the constants system.
 * @param {string} inputData Parameterized constant to generate for.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/30
 */
const constantsGenerator = function(inputData, inputMetaData) {
  let functionName = constantsGenerator.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let validEntry = false;
    let userDefinedConstant = '';
    let validConstantRule = [];
    let doesConstantExistRule = [];
    let getConstantTypeRule = [];
    let constantsFulfillmentSystemRule = [];
    let wordsCountRule = [];
    let wordsArrayRule = [];
    let recombineArrayInputRule = [];
    validConstantRule[0] = biz.cisConstantValid;
    doesConstantExistRule[0] = biz.cdoesConstantExist;
    getConstantTypeRule[0] = biz.cgetConstantType;
    constantsFulfillmentSystemRule[0] = biz.cconstantsFulfillmentSystem;
    wordsCountRule[0] = biz.cgetWordCountInString;
    wordsArrayRule[0] = biz.cgetWordsArrayFromString;
    recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces;

    if (inputData.length === 0) {
      while (validEntry === false) {
        console.log(msg.cConstantPrompt1);
        console.log(msg.cConstantPrompt2);
        console.log(msg.cConstantPrompt3);
        userDefinedConstant = prompt.prompt(bas.cGreaterThan);
        validEntry = ruleBroker.processRules(userDefinedConstant, '', validConstantRule);
        if (validEntry === false) {
          // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
          console.log(msg.cconstantsGeneratorMessage1);
        }
      } // End-while (validEntry === false)
    } else if (inputData.length === 2) {
      userDefinedConstant = inputData[1];
    } else {
      // We need to recombine all of the array elements after the 0-th element into a single string with spaces inbetween.
      userDefinedConstant = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
    }
    // userDefinedConstant is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantIs + userDefinedConstant);

    // First lets check if the constant is already defined, so we can warn the user.
    // NOTE: It could be that the developer is just lookng to optimize the existing constant,
    // but if not, a warning to the user would be a good idea!
    let doesConstantExist = ruleBroker.processRules(userDefinedConstant, '', doesConstantExistRule);
    if (doesConstantExist === true) {
      let constantType = ruleBroker.processRules(userDefinedConstant, '', getConstantTypeRule);
      // WARNING: The constant has already been defined in the following library(ies):
      console.log(msg.cconstantsGeneratorMessage2 + constantType);
    }
    userDefinedConstant = userDefinedConstant.trim();
    let wordCount = ruleBroker.processRules(userDefinedConstant, '', wordsCountRule);
    // wordCount is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
    // Now begin the fulfillment algorithm.
    if (wordCount > 1) {
      let wordsArray = ruleBroker.processRules(userDefinedConstant, '', wordsArrayRule);
      for (let j = 0; j < wordsArray.length; j++) {
        // Optimized constant definition for word:
        console.log(msg.cOptimizedConstantDefinitionForWord + bas.cc + wordsArray[j] + bas.cSpace + bas.cEqual + bas.cSpace +
        ruleBroker.processRules(wordsArray[j].trim(), wordsArray[j].trim(), constantsFulfillmentSystemRule));
      } // End-for (let j = 0; j < wordsArray.length; j++)
    } else { // There is only a single word to process.
      // output a proper line of code:
      // export const csomething = wrd.csome + wrd.cthing; // something
      console.log(wrd.cexport + bas.cSpace + gen.cconst + bas.cSpace + bas.cc + userDefinedConstant + bas.cSpace + bas.cEqual + bas.cSpace +
      ruleBroker.processRules(userDefinedConstant, userDefinedConstant, constantsFulfillmentSystemRule) +
      bas.cSemiColon + bas.cSpace + bas.cDoubleForwardSlash + bas.cSpace + userDefinedConstant);
    }
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsGeneratorList
 * @description Calls the constantsGenerator command to iterate over a list of constants and generate many constants sequentially.
 * @NOTE This function will also walk the list and determine if there are any common strings
 * internal to the list that could be defined as new constants to help with the optimization process.
 * @NOTE Testing string: constGenL somethingXML,whatever that is,A basic NodeJS template App,that can easily
 * @param {string} inputData Parameterized coma delimited list of constants to be auto-generated
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/30
 */
const constantsGeneratorList = function(inputData, inputMetaData) {
  let functionName = constantsGeneratorList.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let validEntry = false;
    let userDefinedConstantList = '';
    let validConstantRule = [];
    let recombineArrayInputRule = [];
    validConstantRule[0] = biz.cisConstantValid;
    recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces;
    if (inputData.length === 0) {
      while (validEntry === false) {
        console.log(msg.cConstantsListPrompt1);
        console.log(msg.cConstantsListPrompt2);
        console.log(msg.cConstantsListPrompt3);
        userDefinedConstantList = prompt.prompt(bas.cGreaterThan);
        validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
        if (validEntry === false) {
          // INVALID INPUT: Please enter a valid constant list.
          console.log(msg.cconstantsGeneratorListMessage1);
        }
      } // End-while (validEntry === false)
    } else if (inputData.length === 2) {
      userDefinedConstantList = inputData[1];
    } else {
      // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
      // The array elements will then be used to enqueue the command constantsGenerator.
      userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
    }
    // userDefinedConstantList is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListIs + userDefinedConstantList);
    if (userDefinedConstantList.includes(bas.cComa) === true) {
      // userDefinedConstantList contains comas
      loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListContainsComas);
      let userDefinedConstantsListArray = userDefinedConstantList.split(bas.cComa);
      // userDefinedConstantsListArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListArrayIs + JSON.stringify(userDefinedConstantsListArray));
      if (userDefinedConstantsListArray.length > 1) {
        for (let i = 0; i < userDefinedConstantsListArray.length; i++) {
          queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantsListArray[i].trim());
        }
      } else if (userDefinedConstantsLIsArray.length === 1) {
        // Just enqueue the constants Generator command with the input directly.
        queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantsListArray[0].trim());
      }
    } else {
      // userDefinedConstantsList DOES NOT contain comas
      loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListDoesNotContainComas);
      queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantList.trim());
    }
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsPatternRecognizer
 * @description Walks through a list of constants lookng for patterns internal to the strings.
 * @param {string} inputData Parameterized coma delimited list of constants to be
 * passed through pattern recognition to find common strings among them.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const constantsPatternRecognizer = function(inputData, inputMetaData) {
  let functionName = constantsPatternRecognizer.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let validEntry = false;
    let userDefinedConstantList = '';
    let validConstantRule = [];
    let recombineArrayInputRule = [];
    let wordsArrayFromStringRule = [];
    let searchForPatternsInStringArrayRule = [];
    let validatePatternsNeedImplementationRule = [];
    let wordsArray = [];
    let commonPatternsArray = [];
    validConstantRule[0] = biz.cisConstantValid;
    recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces
    wordsArrayFromStringRule[0] = biz.cgetWordsArrayFromString;
    searchForPatternsInStringArrayRule[0] = biz.csearchForPatternsInStringArray;
    validatePatternsNeedImplementationRule[0] = biz.cvalidatePatternsThatNeedImplementation;
    if (inputData.length === 0) {
      while (validEntry === false) {
        console.log(msg.cConstantsListPatternSearchPrompt1);
        console.log(msg.cConstantsListPatternSearchPrompt2);
        console.log(msg.cConstantsListPatternSearchPrompt3);
        userDefinedConstantList = prompt.prompt(bas.cGreaterThan);
        validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
        if (validEntry === false) {
          // INVALID INPUT: Please enter a valid constant list.
          console.log(msg.cconstantsGeneratorListMessage1);
        }
      } // End-while (validEntry === false)
    } else if (inputData.length === 2) {
      userDefinedConstantList = inputData[1];
    } else {
      // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
      // The array elements will then be used to enqueue the command constantsGenerator.
      userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
    }
    // userDefinedConstantLiset is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListIs + userDefinedConstantList);
    if (userDefinedConstantList.includes(bas.cComa) === true) {
      wordsArray = userDefinedConstantList.split(bas.cComa);
    } else {
      // userDefinedConstantList DOES NOT contain comas
      loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListDoesNotContainComas);
      // Check and see if there is another delimiter we can use to break up the string into an array,
      // such as a space character, Maybe the user entered a sentence and would like all the words of the sentence to be optimized.
      wordsArray = ruleBroker.processRules(userDefinedConstantList, '' , wordsArrayFromStringRule);
    }
    // wordsArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordsArrayIs + JSON.stringify(wordsArray));
    commonPatternsArray = ruleBroker.processRules(wordsArray, '', searchForPatternsInStringArrayRule);
    // commonPatternsArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccommonPatternsArrayIs + JSON.stringify(commonPatternsArray));
    // This next call will compare the identified string patterns with existing constants, and highlight which ones are not yet implemented.
    let newConstantsList = ruleBroker.processRules(commonPatternsArray, '', validatePatternsNeedImplementationRule);
    let constantsPatternGenerationSetting = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsPatternGeneration);
    if (constantsPatternGenerationSetting === true) {
      queue.enqueue(sys.cCommandQueue, cmd.cconstantsGeneratorList + bas.cSpace + newConstantsList);
    }
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function businessRulesMetrics
 * @description A command to compute business rule metrics for each of the
 * business rules that were called in a sequence of call(s) or workflow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/03
 */
const businessRulesMetrics = function(inputData, inputMetaData) {
  let functionName = businessRulesMetrics.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let businessRuleMetricsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRulePerformanceMetrics);
  if (businessRuleMetricsEnabled === true) {
    let businessRuleCounter = 0;
    let businessRulePerformanceSum = 0;
    let businessRulePerformanceStdSum = 0;
    let average = 0;
    let standardDev = 0;
    // Here we iterate over all of the business rules that were added to the sys.cBusinessRulePerformanceTrackingStack.
    for (let i = 0; i < stack.length(cfg.cbusinessRulesNamesPerformanceTrackingStack); i++) {
      businessRuleCounter = 0; // Reset it to zero, because we are beginning again with another busienss rule name.
      businessRulePerformanceSum = 0;
      businessRulePerformanceStdSum = 0;
      average = 0;
      standardDev = 0;
      // Here we will not iterate over all of the contents of all of the busienss rule performance numbers and
      // do the necessary math for each business rule according to the parent loop.
      let currentBusinessRuleName = D[cfg.cbusinessRulesNamesPerformanceTrackingStack][i];
      for (let j = 0; j < stack.length(cfg.cbusinessRulesPerformanceTrackingStack); j++) {
        if (D[cfg.cbusinessRulesPerformanceTrackingStack][j][wrd.cName] === currentBusinessRuleName) {
          businessRuleCounter = businessRuleCounter + 1;
          // businessRuleCounter is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRuleCounterIs + businessRuleCounter);
          businessRulePerformanceSum = businessRulePerformanceSum + D[cfg.cbusinessRulesPerformanceTrackingStack][j][sys.cRunTime];
          // businessRulePerformanceSum is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulePerformanceSumIs + businessRulePerformanceSum);
        } // End-if (D[cfg.cBusinessRulePerformanceTrackingStack][j][wrd.cName] === currentBusinessRuleName)
      } // End-for (let j = 0; j < stack.length(cfg.cBusinessRulePerformanceTrackingStack); j++)
      // DONE! businessRulePerformanceSum is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoneBusinessRulePerformanceSumIs + businessRulePerformanceSum);
      average = businessRulePerformanceSum / businessRuleCounter;
      // average is:
      loggers.consoleLog(namespacePrefix + functionName, msg.caverageIs + average);
      // Now go back through them all so we can compute the standard deviation.
      for (let k = 0; k < stack.length(cfg.cbusinessRulesPerformanceTrackingStack); k++) {
        if (D[cfg.cbusinessRulesPerformanceTrackingStack][k][wrd.cName] === currentBusinessRuleName) {
          businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow((D[cfg.cbusinessRulesPerformanceTrackingStack][k][sys.cRunTime] - average), 2);
          // businessRulePerformanceStdSum is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
        } // End-if (D[cfg.cBusinessRulePerformanceTrackingStack][k][wrd.cName] === currentBusinessRuleName)
      } // End-for (let k = 0; k < stack.length(cfg.cBusinessRulePerformanceTrackingStack); k++)
      // DONE! businessRulePerformanceStdSum is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoneBusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
      standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter);
      // standardDev is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cstandardDevIs + standardDev);
      if (D[cfg.cbusinessRulesPerformanceAnalysisStack] === undefined) {
        stack.initStack(cfg.cbusinessRulesPerformanceAnalysisStack);
      }
      stack.push(cfg.cbusinessRulesPerformanceAnalysisStack, {Name: currentBusinessRuleName, Average: average, StandardDeviation: standardDev});
    } // End-for (let i = 0; i < stack.length(cfg.cBusinessRulesNamesPerformanceTrackingStack); i++)
    loggers.consoleTableLog('', D[cfg.cbusinessRulesPerformanceAnalysisStack], [wrd.cName, wrd.cAverage, sys.cStandardDeviation]);
    stack.clearStack(cfg.cbusinessRulesPerformanceAnalysisStack);
    // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
    // It might be that the user wants to do somethign else with this data in memory after it's done.
    if (configurator.getConfigurationSetting(wrd.csystem, cfg.cclearBusinessRulesPerformanceDataAfterAnalysis) === true) {
      stack.clearStack(cfg.cbusinessRulesPerformanceTrackingStack);
      stack.clearStack(cfg.cbusinessRulesNamesPerformanceTrackingStack);
    }
  } // End-if (businessRuleMetricsEnabled === true)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function commandMetrics
 * @description A command to compute command metrics for each of the commands that were called in a sequence of call(s) or workfow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
const commandMetrics = function(inputData, inputMetaData) {
  let functionName = commandMetrics.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let commandMetricsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableCommandPerformanceMetrics);
  if (commandMetricsEnabled === true) {
    let commandCounter = 0;
    let commandPerformanceSum = 0;
    let commandPerformanceStdSum = 0;
    let average = 0;
    let standardDev = 0;
    // Here we iterate over all of the commands that were added to the cfg.ccommandsPerformanceTrackingStack.
    for (let i = 0; i < stack.length(cfg.ccommandNamesPerformanceTrackingStack); i++) {
      commandCounter - 0;
      commandPerformanceSum = 0;
      commandPerformanceStdSum = 0;
      average = 0;
      standardDev = 0;
      // Here we will now iterate over all of the contents of all the command performance numbers and
      // do the necessary math for each command according to the parent loop.
      let currentCommandName = D[cfg.ccommandNamesPerformanceTrackingStack][i];
      for (let j = 0; j < stack.length(cfg.ccommandsPerformanceTrackingStack); j++) {
        if (D[cfg.ccommandsPerformanceTrackingStack][j][wrd.cName] === currentCommandName) {
          commandCounter = commandCounter + 1;
          // commandCounter is:
          loggers.consoleLog(namespacePrefix + functionName, msg.ccommandCounterIs + commandCounter);
          commandPerformanceSum = commandPerformanceSum + D[cfg.ccommandsPerformanceTrackingStack][j][sys.cRunTime];
          // commandPerformanceSum is:
          loggers.consoleLog(namespacePrefix + functionName, msg.ccommandPerformanceSumIs + commandPerformanceSum);
        } // End-if (D[cfg.ccommandsPerformanceTrackingStack][j][wrd.cName] === currentCommandName)
      } // End-for (let j = 0; j < stack.length(cfg.ccommandsPerformanceTrackingStack); j++)
      // DONE! commandPerformanceSum is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoneCommandPerformanceSumIs + commandPerformanceSum);
      average = commandPerformanceSum / commandCounter;
      // average is:
      loggers.consoleLog(namespacePrefix + functionName, msg.caverageIs + average);
      // Now go back through them allso we can compute the standard deviation.
      for (let k = 0; k < stack.length(cfg.ccommandsPerformanceTrackingStack); k++) {
        if (D[cfg.ccommandsPerformanceTrackingStack][k][wrd.cName] === currentCommandName) {
          commandPerformanceStdSum = commandPerformanceStdSum + math.pow((D[cfg.ccommandsPerformanceTrackingStack][k][sys.cRunTime] - average), 2);
          // commandPerformanceStdSum is:
          loggers.consoleLog(namespacePrefix + functionName, msg.ccommandPerformanceStdSumIs + commandPerformanceStdSum);
        } // End-if (D[cfg.ccommandsPerformanceTrackingStack][k][wrd.cName] === currentCommandName)
      } // End-for (let k = 0; k < stack.length(cfg.ccommandsPerformanceTrackingStack); k++)
      // DONE! commandPerformanceStdSum is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoneCommandPerformanceStdSumIs + commandPerformanceStdSum);
      standardDev = math.sqrt(commandPerformanceStdSum / commandCounter);
      // standardDev is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cstandardDevIs + standardDev);
      if (D[cfg.ccommandsPerformanceAnalysisStack] === undefined) {
        stack.initStack(cfg.ccommandsPerformanceAnalysisStack);
      }
      stack.push(cfg.ccommandsPerformanceAnalysisStack, {Name: currentCommandName, Average: average, StandardDeviation: standardDev});
    } // End-for (let i = 0; i < stack.length(cfg.ccommandNamesPerformanceTrackingStack); i++)
    loggers.consoleTableLog('', D[cfg.ccommandsPerformanceAnalysisStack], [wrd.cName, wrd.cAverage, sys.cStandardDeviation]);
    stack.clearStack(cfg.ccommandsPerformanceAnalysisStack);
    // We need to have a flag that will enable the user to determine if the data should be cleared afer the analysis is complete.
    // It might be that the user wants to do something else with this data in memory after it's done.
    if (configurator.getConfigurationSetting(wrd.csystem, cfg.cclearCommandPerformanceDataAfterAnalysis) === true) {
      stack.clearStack(cfg.ccommandsPerformanceTrackingStack);
      stack.clearStack(cfg.ccommandNamesPerformanceTrackingStack);
    }
  } // End-if (commandMetricsEnabled === true)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function saveConfiguration
 * @description Saves out all of the configuration data to a JSON file so custom user settings can be persisted between sessions.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
const saveConfiguration = function(inputData, inputMetaData) {
  let functionName = saveConfiguration.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  dataBroker.writeJsonDataToFile(configurator.getConfigurationSetting(wrd.csystem, cfg.cappConfigPath) + wrd.cconfig + gen.cDotjson, JSON.stringify(D));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertColors
 * @description Converts all of the color hexidecimal values into RGB color values.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/11
 * @reference {@Link: https://github.com/paularmstrong/normalizr/issues/15}
 */
const convertColors = function(inputData, inputMetaData) {
  let functionName = convertColors.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let colorConversionRule = [];
  colorConversionRule[0] = biz.creplaceCharacterWithCharacter;
  colorConversionRule[1] = biz.chex2rgbConversion;

  let colorKeys = Object.keys(D[wrd.ccolors][sys.cColorData]);
  // colorKeys is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccolorKeysIs + JSON.stringify(colorKeys));
  for (let i = 0; i < colorKeys.length; i++) {
    let currentColorName = colorKeys[i];
    // currentColorName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorNameIs + currentColorName);
    let currentColorObject = D[wrd.ccolors][sys.cColorData][currentColorName];
    // currentColorObject is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorObjectIs + JSON.stringify(currentColorObject));
    let currentColorHexValue = currentColorObject[sys.cHexValue];
    // currentColorHexValue is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorHexValueIs + currentColorHexValue);
    let ruleOutput = ruleBroker.processRules(currentColorHexValue, [bas.cHash, ''], colorConversionRule);
    // ruleOutput is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cruleOutputIs + ruleOutput);
    console.log(currentColorName + bas.cComa + currentColorHexValue + bas.cComa + ruleOutput[0] + bas.cComa + ruleOutput[1] + bas.cComa + ruleOutput[2]);
  } // End-for (let i = 0; i < colorKeys.length; i++)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  echoCommand,
  exit,
  version,
  about,
  name,
  clearScreen,
  help,
  workflowHelp,
  commandSequencer,
  workflow,
  printDataHive,
  printDataHiveAttributes,
  clearDataStorage,
  businessRule,
  commandGenerator,
  commandAliasGenerator,
  constantsGenerator,
  constantsGeneratorList,
  constantsPatternRecognizer,
  businessRulesMetrics,
  commandMetrics,
  saveConfiguration,
  convertColors
};
