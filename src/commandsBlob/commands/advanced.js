/**
* @file advanced.js
* @module advanced
* @description Contains all of the advanced system commands.
* @requires module:commandBroker
* @requires module:ruleBroker
* @requires module:workflowBroker
* @requires module:configurator
* @requires module:loggers
* @requires module:data
* @requires module:queue
* @requires module:stack
* @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2022/02/04
* @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
*/

// Internal imports
import commandBroker from '../../brokers/commandBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import workflowBroker from '../../brokers/workflowBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
import queue from '../../structures/queue.js';
import stack from '../../structures/stack.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.advanced.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

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
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
async function commandSequencer(inputData, inputMetaData) {
  let functionName = commandSequencer.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let commandSuccess = true;
  // Initialize a temporary command queue that can be used to aggregate all of the commands that will be added to the official command queue.
  // Once all of the commands are aggregated then we will enqueue the new temporary command queue to the front of the official command queue.
  await queue.initQueue(sys.cCommandQueue + wrd.cTemp);
  for (let i = 1; i < inputData.length; i++) {
    let commandString = inputData[i];
    let primaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cprimaryCommandDelimiterIs + primaryCommandDelimiter);
    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = bas.cSpace;
    }
    let secondaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandDelimiterIs + secondaryCommandArgsDelimiter);
    let tertiaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.ctertiaryCommandDelimiterIs + tertiaryCommandDelimiter);
    // Replace 2nd & rd level delimiters and down-increment them so we are dealing with command strings that can actually be executed.
    const regEx1 = new RegExp(secondaryCommandArgsDelimiter, bas.cg);
    commandString = commandString.replace(regEx1, primaryCommandDelimiter);
    if (commandString.includes(tertiaryCommandDelimiter)) {
      const regEx2 = new RegExp(tertiaryCommandDelimiter, bas.cg);
      commandString = commandString.replace(regEx2, secondaryCommandArgsDelimiter);
    }
    let currentCommand = await commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
    let commandArgs = await commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
    // We need to recompose the command arguments for the current command using the sys.cPrimaryCommandDelimiter.
    if (currentCommand !== false) {
      for (let j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      } // End-for (let j = 1; j < commandArgs.length; j++)
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandSequencerCommandToEnqueueIs + currentCommand);
      await queue.enqueue(sys.cCommandQueue + wrd.cTemp, currentCommand);
    } else { // End-if (currentCommand !== false)
      // WARNING: advanced.commandSequencer: The specified command was not found, please enter a valid command and try again. <commandString>
      let errorMessage = msg.ccommandSequencerMessage1 + msg.ccommandSequencerMessage2 + bas.cSpace + commandString;
      console.log(errorMessage);
      returnData[1] = errorMessage;
      commandSuccess = false;
    }
  } // End-for (let i = 1; i < inputData.length; i++)
  // Now migrate the temporary command queue to the primary command queue,
  // pushing all command entities it to the front of the command queue.
  await queue.enqueueFront(sys.cCommandQueue, await queue.queueContents(sys.cCommandQueue + wrd.cTemp));
  if (commandSuccess === true) {
    returnData[1] = commandSuccess;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

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
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/2/24
 */
async function workflow(inputData, inputMetaData) {
  let functionName = workflow.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let workflowName = inputData[1];
  let workflowValue = await workflowBroker.getWorkflow(workflowName);
  if (workflowValue !== false && typeof workflowValue != wrd.cobject) {
    await queue.enqueueFront(sys.cCommandQueue, workflowValue);
    returnData[1] = true;
  } else {
    // WARNING: advanced.workflow: The specified workflow:
    // was not found in either the system defined workflows, or client defined workflows.
    // Please enter a valid workflow name and try again.
    let errorMessage = msg.cworkflowMessage1 + workflowName + bas.cComa + msg.cworkflowMessage2 + msg.cworkflowMessage3;
    console.log(errorMessage);
    returnData[1] = errorMessage;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function businessRule
 * @description Executes a user specified business rule with some input.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a business rule name and perhaps some rule inputs.
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
 * to call a series of business rules each with their own inputs.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/24
 * @NOTE When executing the business rule: replaceCharacterWithCharacter with a regular expression such as: regEx:[+]:flags:g
 * Consider the following link that describes how the regEx & flags are parsed by the lexicalAnalyzer.
 * {@link https://stackoverflow.com/questions/874709/converting-user-input-string-to-regular-expression}
 */
async function businessRule(inputData, inputMetaData) {
  let functionName = businessRule.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let rules = [];
  let ruleInputData, ruleInputMetaData;
  let ruleOutput = '';
  let businessRuleOutput = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRuleOutput);
  let businessRuleMetricsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRulePerformanceMetrics);
  let businessRuleStartTime = '';
  let businessRuleEndTime = '';
  let businessRuleDeltaTime = '';

  // First go through each rule that should be executed and determine if
  // there are any inputs that need to be passed into the business rule.
  for (let i = 1; i < inputData.length; i++) {
    // Begin the i-th iteration fo the inputData array. i is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_theIthIterationOfInputDataArray + i);
    let currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    // currentRule is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentRuleIs + JSON.stringify(currentRuleArg));
    if (i === 1) {
      // rules = lexical.parseBusinessRuleArgument(currentRuleArg, i);
      rules = await ruleBroker.processRules([currentRuleArg, i], [biz.cparseBusinessRuleArgument]);
    } else if (i === 2) {
      // ruleInputData = lexical.parseBusinessRuleArgument(currentRuleArg, i);
      ruleInputData = await ruleBroker.processRules([currentRuleArg, i], [biz.cparseBusinessRuleArgument]);
    } else if (i === 3 && inputData.length <= 4) {
      // ruleInputMetaData = lexical.parseBusinessRuleArgument(currentRuleArg, i);
      ruleInputMetaData = await ruleBroker.processRules([currentRuleArg, i], [biz.cparseBusinessRuleArgument]);
    } else if (i === 3 && inputData.length > 4) {
      // // In this case all of the arguments will have been combined into a single array and added to the ruleInputData.
      ruleInputMetaData = [];
      for (let j = 3; j <= inputData.length - 1; j++) {
        let currentRuleArrayArg = inputData[j];
        // let tempArg = lexical.parseBusinessRuleArgument(currentRuleArrayArg, j);
        let tempArg = await ruleBroker.processRules([currentRuleArrayArg, j], [biz.cparseBusinessRuleArgument]);
        // console.log('tempArg is: ' + tempArg);
        if (tempArg) {
          ruleInputMetaData.push(tempArg);
        }
      } // End-for (let j = 3; j <= inputData.length - 1; j++)
      break;
    } // End-Else-if (i === 3 && inputData.length > 4)
  } // End-for (let i = 1; i < inputData.length; i++)
  // rules is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.crulesIs + JSON.stringify(rules));
  // ruleInputData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cruleInputDataIs + ruleInputData);
  // ruleInputMetaData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cruleInputMetaData + JSON.stringify(ruleInputMetaData));
  if (businessRuleMetricsEnabled === true) {
    // Here we will capture the start time of the business rule we are about to execute.
    // After executing we will capture the end time and then
    // compare the difference to determine how many milliseconds it took to run the business rule.
    businessRuleStartTime = await ruleBroker.processRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
    // Business Rule Start time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleStartTimeIs + businessRuleStartTime);
  } // End-if (businessRuleMetricsEnabled === true)
  ruleOutput = await ruleBroker.processRules([ruleInputData, ruleInputMetaData], rules);
  returnData[1] = ruleOutput;
  if (businessRuleMetricsEnabled === true) {
    let performanceTrackingObject = {};
    businessRuleEndTime = await ruleBroker.processRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
    // BusinessRule End time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleEndTimeIs + businessRuleEndTime);
    // Now compute the delta time so we know how long it took to run that business rule.
    businessRuleDeltaTime = await ruleBroker.processRules([businessRuleStartTime, businessRuleEndTime], [biz.ccomputeDeltaTime]);
    // BusinessRule run-time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cBusinessRuleRunTimeIs + businessRuleDeltaTime);
    // Check to make sure the business rule performance tracking stack exists or does not exist.
    if (D[cfg.cbusinessRulesPerformanceTrackingStack] === undefined) {
      await stack.initStack(cfg.cbusinessRulesPerformanceTrackingStack);
    }
    if (D[cfg.cbusinessRulesNamesPerformanceTrackingStack] === undefined) { 
      await stack.initStack(cfg.cbusinessRulesNamesPerformanceTrackingStack);
    }
    performanceTrackingObject = {Name: rules[0], RunTime: businessRuleDeltaTime};
    if (await stack.contains(cfg.cbusinessRulesNamesPerformanceTrackingStack, rules[0]) === false) {
      await stack.push(cfg.cbusinessRulesNamesPerformanceTrackingStack, rules[0]);
    }
    await stack.push(cfg.cbusinessRulesPerformanceTrackingStack, performanceTrackingObject);
    // stack.print(cfg.cBusinessRulePerformanceTrackingStack);
    // stack.print(cfg.cBusinessRuleNamesPerformanceTrackingStack);
  } // End-if (businessRuleMetricsEnabled === true)
  if (businessRuleOutput === true) {
    // Rule output is:
    console.log(msg.cRuleOutputIs + JSON.stringify(ruleOutput));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

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
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
async function commandGenerator(inputData, inputMetaData) {
  let functionName = commandGenerator.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let errorMessage = '';
  let legitNumberIndex = -1;
  let replaceCharacterWithCharacterRule = [biz.creplaceCharacterWithCharacter];
  let primaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
  if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
    primaryCommandDelimiter = bas.cSpace;
  }
  let secondaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  let tertiaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
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
    } // End-for (let i = 1; i < inputData.length - 1; i++)
  }

  // NOTE: the str.replace only replaces the first instance of a string value, not all values.
  // but we might have another issue in the sense that if the string begins and ends with "[" & "]" respectively,
  // we might not want to replace those characters.
  // Because it might be that the command should take responsibility or that in such a special case,
  // i.e. treating the whole block as a single array and doing it's own split operation.
  // commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
  // commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
  // commandString before attempted delimiter swap is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringBeforeAttemptedDelimiterSwapIs + commandString);
  // replaceCharacterWithCharacterRule is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.creplaceCharacterWithCharacterRuleIs + JSON.stringify(replaceCharacterWithCharacterRule));
  // let secondaryCommandDelimiterRegEx = new RegExp(bas.cBackSlash + secondaryCommandArgsDelimiter, bas.cg);
  // let secondaryCommandDelimiterRegEx = new RegExp(`[${secondaryCommandArgsDelimiter}]`, bas.cg);
  commandString = await ruleBroker.processRules([commandString, [secondaryCommandArgsDelimiter, primaryCommandDelimiter]], replaceCharacterWithCharacterRule);
  // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandGeneratorMessage1 + commandString);
  // let tertiaryCommandDelimiterRegEx = new RegExp(bas.cBackSlash + tertiaryCommandDelimiter, bas.cg);
  // let tertiaryCommandDelimiterRegEx = new RegExp(`[${tertiaryCommandDelimiter}]`, bas.cg);
  commandString = await ruleBroker.processRules([commandString, [tertiaryCommandDelimiter, secondaryCommandArgsDelimiter]], replaceCharacterWithCharacterRule);
  // After attempting to replace the teriaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandGeneratorMessage2 + commandString);
  let currentCommand = await commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
  let commandArgs = await commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + currentCommand);
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandArgsIs + JSON.stringify(commandArgs));
  if (currentCommand !== false) {
    if (inputData.length >= 3) {
      for (let j = 2; j <= inputData.length - 1; j++) {
        if (isNaN(inputData[j].trim()) === false) {
          legitNumberIndex = j;
          break;
        } // End-if (isNaN(inputData[j].trim()) === false)
      } // End-for (let j = 2; j <= inputData.length - 1; j++)
    } // End-if (inputData.length >= 3)
    if (isNaN(inputData[legitNumberIndex]) === false) { // Make sure the user passed in a number for the second argument.
      let numberOfCommands = parseInt(inputData[legitNumberIndex]);
      if (numberOfCommands > 0) {
        await queue.initQueue(sys.cCommandQueue + wrd.cTemp);
        for (let i = 0; i < numberOfCommands; i++) {
          await queue.enqueue(sys.cCommandQueue + wrd.cTemp, commandString);
        } // End-for (let i = 0; i < numberOfCommands; i++)
        // Now migrate the temporary command queue to the primary command queue,
        // pushing all command entities it to the front of the command queue.
        await queue.enqueueFront(sys.cCommandQueue, await queue.queueContents(sys.cCommandQueue + wrd.cTemp));
        returnData[1] = true;
      } else {
        // WARNING: advanced.commandGenerator: Must enter a number greater than 0, number entered:
        errorMessage = msg.ccommandGeneratorMessage3 + numberOfCommands;
        console.log(errorMessage);
        returnData[1] = errorMessage;
      }
    } else {
      // WARNING: advanced.commandGenerator: Number entered for the number of commands to generate is not a number:
      errorMessage = msg.ccommandGeneratorMessage4 + inputData[2];
      console.log(errorMessage);
      returnData[1] = errorMessage;
    }
  } else {
    // WARNING: advanced.commandGenerator: The specified command:
    // was not found, please enter a valid command and try again.
    errorMessage = msg.ccommandGeneratorMessage5 + commandString + msg.ccommandGeneratorMessage6;
    console.log(errorMessage);
    returnData[1] = errorMessage;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function commandAliasGenerator
 * @description Requests a set of inputs from the user for a command name,
 * and a series of command words and a list of command word acronyms.
 * The command then calls a series of business rules to in-turn generate all
 * possible combinations of command words and command word acronyms.
 * @param {array<object|boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * parses the data string object into a JSON object with values that are the command words and command word abbreviations.
 * inputData[0] === 'commandAliasGenerator'
 * inputData[1] === A JSON object containing the data necessary for defining all command words and command aliases.
 * @NOTE Test string for argument driven interface for this command:
 * {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/25
 */
async function commandAliasGenerator(inputData, inputMetaData) {
  let functionName = commandAliasGenerator.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];
  let commandName = '';
  let commandWordAliasList = '';
  let validCommandName = false;
  let validCommandWordAliasList = false;
  let validCommandInput = false;
  let commandAliasDataStructure = {};
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
      commandName = await ruleBroker.processRules([bas.cGreaterThan, ''], [biz.cprompt]);
      validCommandName = await ruleBroker.processRules([commandName, ''], [biz.cisValidCommandNameString]);
      if (validCommandName === false) {
        // INVALID INPUT: Please enter a valid camel-case command name.
        console.log(msg.ccommandAliasGeneratorMessage3);
      } // End-if (validCommandName === false)
    } // End-while (validCommandName === false)

    let camelCaseCommandNameArray = await ruleBroker.processRules([commandName, ''], [biz.cconvertCamelCaseStringToArray]);
    // camelCaseCommandNameArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseCommandNameArrayIs + JSON.stringify(camelCaseCommandNameArray));

    for (const element of camelCaseCommandNameArray) {
      let commandWord = element;
      // current commandWord is:
      console.log(msg.ccurrentCommandWordIs + commandWord);
      validCommandWordAliasList = false;
      if (commandWord !== '') {
        commandAliasDataStructure[commandWord] = {};
        while (validCommandWordAliasList === false) {
          console.log(msg.cCommandWordAliasPrompt1);
          console.log(msg.cCommandWordAliasPrompt2);
          console.log(msg.cCommandWordAliasPrompt3 + bas.cSpace + commandWord);
          commandWordAliasList = await ruleBroker.processRules([bas.cGreaterThan, ''], [biz.cprompt]);
          validCommandWordAliasList = await ruleBroker.processRules([commandWordAliasList, ''], [biz.cisStringList]);
          if (validCommandWordAliasList === false) {
            // INVALID INPUT: Please enter a valid command word alias list.
            console.log(msg.ccommandAliasGeneratorMessage4);
          } else if (commandWordAliasList !== '') { // As long as the user entered something we should be able to proceed!
            validCommandWordAliasList = true;
          }
        } // End-while (validCommandWordAliasList === false)
        commandAliasDataStructure[commandWord] = commandWordAliasList; 
        validCommandInput = true;
      } // End-if (commandWord !== '')
    } // End-for (const element of camelCaseCommandNameArray)
  } else if (inputData.length === 2) {
    try {
      commandAliasDataStructure = JSON.parse(inputData[1]);
      validCommandInput = true;
    } catch (err) {
      // PARSER ERROR:
      console.log(msg.cPARSER_ERROR + err.message);
      // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
      console.log(msg.ccommandAliasGeneratorMessage5);
      returnData[1] = msg.ccommandAliasGeneratorMessage5;
      // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
      console.log(msg.ccommandAliasGeneratorMessage2);
    }
  } else {
    // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
    console.log(msg.ccommandAliasGeneratorMessage5);
    returnData[1] = msg.ccommandAliasGeneratorMessage5;
    // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
    console.log(msg.ccommandAliasGeneratorMessage2);
  }

  if (validCommandInput === true) {
    // commandAliasDataStructure is:
    await loggers.consoleLog(namespacePrefix, functionName, msg.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure));
    // At this point the user should have entered all valid data and we should be ready to proceed.
    // Pass the data object to a business rule to do the above task.
    returnData[1] = await ruleBroker.processRules([commandAliasDataStructure, ''], [biz.cgenerateCommandAliases]);
  } // End-if (validCommandInput === true)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  commandSequencer,
  workflow,
  businessRule,
  commandGenerator,
  commandAliasGenerator
};
