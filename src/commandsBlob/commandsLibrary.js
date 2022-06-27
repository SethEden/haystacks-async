/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the system defined commands as a map between function names and function calls.
 * @requires module:advanced
 * @requires module:auxiliary
 * @requires module:configuration
 * @requires module:constants
 * @requires module:dataDirectorate
 * @requires module:integrationTests
 * @requires module:performanceMetric
 * @requires module:system
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import advancedCommands from './commands/advanced.js';
import auxiliaryCommands from './commands/auxiliary.js';
import configurationCommands from './commands/configuration.js';
import constantsCommands from './commands/constant.js';
import dataDirectorate from './commands/dataDirectorate.js';
import integrationTestCommands from './commands/integrationTests.js';
import performanceMetricCommands from './commands/performanceMetric.js';
import systemCommands from './commands/system.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cmd, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commandsLibrary.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */
async function initCommandsLibrary() {
  let functionName = initCommandsLibrary.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[wrd.cCommands] = {};
  D[wrd.cCommands] = {
    // Commands
    // ***********************************************
    // Advanced commands in order
    // ***********************************************
    [cmd.ccommandSequencer]: (inputData, inputMetaData) => advancedCommands.commandSequencer(inputData, inputMetaData),
    [wrd.cworkflow]: (inputData, inputMetaData) => advancedCommands.workflow(inputData, inputMetaData),
    [cmd.cbusinessRule]: (inputData, inputMetaData) => advancedCommands.businessRule(inputData, inputMetaData),
    [cmd.ccommandGenerator]: (inputData, inputMetaData) => advancedCommands.commandGenerator(inputData, inputMetaData),
    [cmd.ccommandAliasGenerator]: (inputData, inputMetaData) => advancedCommands.commandAliasGenerator(inputData, inputMetaData),

    // ***********************************************
    // Auxiliary commands in order
    // ***********************************************
    [cmd.cconvertColors]: (inputData, inputMetaData) => auxiliaryCommands.convertColors(inputData, inputMetaData),

    // ***********************************************
    // Configuration commands in order
    // ***********************************************
    [cmd.csaveConfiguration]: (inputData, inputMetaData) => configurationCommands.saveConfiguration(inputData, inputMetaData),
    [cmd.cchangeConfigurationSetting]: (inputData, inputMetaData) => configurationCommands.changeConfigurationSetting(inputData, inputMetaData),
    [cmd.clistConfigurationThemes]: (inputData, inputMetaData) => configurationCommands.listConfigurationThemes(inputData, inputMetaData),
    [cmd.cchangeDebugConfigurationTheme]: (inputData, inputMetaData) => configurationCommands.changeDebugConfigurationTheme(inputData, inputMetaData),

    // ***********************************************
    // Constant commands in order
    // ***********************************************
    [cmd.cconstantsGenerator]: (inputData, inputMetaData) => constantsCommands.constantsGenerator(inputData, inputMetaData),
    [cmd.cconstantsGeneratorList]: (inputData, inputMetaData) => constantsCommands.constantsGeneratorList(inputData, inputMetaData),
    [cmd.cconstantsPatternRecognizer]: (inputData, inputMetaData) => constantsCommands.constantsPatternRecognizer(inputData, inputMetaData),
    [cmd.cevaluateConstant]: (inputData, inputMetaData) => constantsCommands.evaluateConstant(inputData, inputMetaData),

    // ***********************************************
    // Data Directorate commands in order
    // ***********************************************
    [cmd.cprintDataHive]: (inputData, inputMetaData) => dataDirectorate.printDataHive(inputData, inputMetaData),
    [cmd.cprintDataHiveAttributes]: (inputData, inputMetaData) => dataDirectorate.printDataHiveAttributes(inputData,inputMetaData),
    [cmd.cclearDataStorage]: (inputData, inputMetaData) => dataDirectorate.clearDataStorage(inputData, inputMetaData),
    [cmd.cchangeSetting]: (inputData, inputMetaData) => dataDirectorate.changeSetting(inputData, inputMetaData),

    // ***********************************************
    // Integration Test commands in order
    // ***********************************************
    [cmd.cvalidateConstants]: (inputData, inputMetaData) => integrationTestCommands.validateConstants(inputData, inputMetaData),
    [cmd.cvalidateCommandAliases]: (inputData, inputMetaData) => integrationTestCommands.validateCommandAliases(inputData, inputMetaData),
    [cmd.cvalidateWorkflows]: (inputData, inputMetaData) => integrationTestCommands.validateWorkflows(inputData, inputMetaData),

    // ***********************************************
    // Performance Metrics commands in order
    // ***********************************************
    [cmd.cbusinessRulesMetrics]: (inputData, inputMetaData) => performanceMetricCommands.businessRulesMetrics(inputData, inputMetaData),
    [cmd.ccommandMetrics]: (inputData, inputMetaData) => performanceMetricCommands.commandMetrics(inputData, inputMetaData),

    // ***********************************************
    // System commands in order
    // ***********************************************
    [cmd.cechoCommand]: (inputData, inputMetaData) => systemCommands.echoCommand(inputData, inputMetaData),
    [wrd.cexit]: (inputData, inputMetData) => systemCommands.exit(inputData, inputMetData),
    [wrd.cversion]: (inputData, inputMetaData) => systemCommands.version(inputData, inputMetaData),
    [wrd.cabout]: (inputData, inputMetaData) => systemCommands.about(inputData, inputMetaData),
    [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData),
    [cmd.cclearScreen]: (inputData, inputMetaData) => systemCommands.clearScreen(inputData, inputMetaData),
    [wrd.chelp]: (inputData, inputMetaData) => systemCommands.help(inputData, inputMetaData),
    [cmd.cworkflowHelp]: (inputData, inputMetaData) => systemCommands.workflowHelp(inputData, inputMetaData),
  };
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  initCommandsLibrary
};
