/**
 * @file command.constants.validation.js
 * @module command.constants.validation
 * @description Contains all validations for system command constants.
 * @requires module:command.constants
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as cmd from '../../constants/command.constants.js';

/**
 * @function commandConstantsValidation
 * @description Initializes the command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @DATE 2022/03/20
 */
export const commandConstantsValidation = [
  // Generic Commands constants

  // ***********************************************
  // Nominal commands in order
  // ***********************************************
  {Name: 'cechoCommand', Actual: cmd.cechoCommand, Expected: 'echoCommand'},
  {Name: 'cEchoCommand', Actual: cmd.cEchoCommand, Expected: 'EchoCommand'},
  {Name: 'cclearScreen', Actual: cmd.cclearScreen, Expected: 'clearScreen'},
  {Name: 'cworkflowHelp', Actual: cmd.cworkflowHelp, Expected: 'workflowHelp'},
  {Name: 'ccommandSequencer', Actual: cmd.ccommandSequencer, Expected: 'commandSequencer'},
  {Name: 'cprintDataHive', Actual: cmd.cprintDataHive, Expected: 'printDataHive'},
  {Name: 'cprintDataHiveAttributes', Actual: cmd.cprintDataHiveAttributes, Expected: 'printDataHiveAttributes'},
  {Name: 'cclearDataStorage', Actual: cmd.cclearDataStorage, Expected: 'clearDataStorage'},
  {Name: 'cbusinessRule', Actual: cmd.cbusinessRule, Expected: 'businessRule'},
  {Name: 'ccommandGenerator', Actual: cmd.ccommandGenerator, Expected: 'commandGenerator'},
  {Name: 'ccommandAliasGenerator', Actual: cmd.ccommandAliasGenerator, Expected: 'commandAliasGenerator'},
  {Name: 'cconstantsGenerator', Actual: cmd.cconstantsGenerator, Expected: 'constantsGenerator'},
  {Name: 'cconstantsGeneratorList', Actual: cmd.cconstantsGeneratorList, Expected: 'constantsGeneratorList'},
  {Name: 'cconstantsPatternRecognizer', Actual: cmd.cconstantsPatternRecognizer, Expected: 'constantsPatternRecognizer'},
  {Name: 'cbusinessRulesMetrics', Actual: cmd.cbusinessRulesMetrics, Expected: 'businessRulesMetrics'},
  {Name: 'ccommandMetrics', Actual: cmd.ccommandMetrics, Expected: 'commandMetrics'},
  {Name: 'csaveConfiguration', Actual: cmd.csaveConfiguration, Expected: 'saveConfiguration'},
  {Name: 'cconvertColors', Actual: cmd.cconvertColors, Expected: 'convertColors'},

  // ***********************************************
  // Integration Test commands in order
  // ***********************************************
  {Name: 'cvalidateConstants', Actual: cmd.cvalidateConstants, Expected: 'validateConstants'},
  {Name: 'cvalidateCommandAliases', Actual: cmd.cvalidateCommandAliases, Expected: 'validateCommandAliases'},

  // ********************************
  // System defined workflows
  // ********************************
  {Name: 'cStartupWorkflow', Actual: cmd.cStartupWorkflow, Expected: 'Workflow startup'},
  {Name: 'cFrameworkDetailsWorkflow', Actual: cmd.cFrameworkDetailsWorkflow, Expected: 'Workflow frameworkDetails'}
];
