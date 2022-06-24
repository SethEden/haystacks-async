/**
 * @file command.constants.js
 * @module command.constants
 * @description Contains many re-usable command constants
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as biz from './business.constants.js';
import * as sys from './system.constants.js';
import * as wrd from './word.constants.js';

// Generic Commands constants

// ***********************************************
// Nominal commands in order
// ***********************************************
export const cechoCommand = biz.cecho + wrd.cCommand; // echoCommand
export const cEchoCommand = biz.cEcho + wrd.cCommand; // EchoCommand
export const cclearScreen = wrd.cclear + wrd.cScreen; // clearScreen
export const cworkflowHelp = wrd.cworkflow + wrd.cHelp; // workflowHelp
export const ccommandSequencer = wrd.ccommand + wrd.cSequencer; // commandSequencer
export const cprintDataHive = wrd.cprint + wrd.cData + wrd.cHive; // printDataHive
export const cprintDataHiveAttributes = cprintDataHive + wrd.cAttributes; // printDataHiveAttributes
export const cclearDataStorage = wrd.cclear + wrd.cData + wrd.cStorage; // clearDataStorage
export const cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule
export const ccommandGenerator = wrd.ccommand + wrd.cGenerator; // commandGenerator
export const ccommandAliasGenerator = wrd.ccommand + wrd.cAlias + wrd.cGenerator; // commandAliasGenerator
export const cconstantsGenerator = wrd.cconstants + wrd.cGenerator; // constantsGenerator
export const cconstantsGeneratorList = cconstantsGenerator + wrd.cList; // constantsGeneratorList
export const cconstantsPatternRecognizer = wrd.cconstants + wrd.cPattern + wrd.cRecognizer; // constantsPatternRecognizer
export const cbusinessRulesMetrics = wrd.cbusiness + wrd.cRules + wrd.cMetrics; // businessRulesMetrics
export const ccommandMetrics = wrd.ccommand + wrd.cMetrics; // commandMetrics
export const csaveConfiguration = wrd.csave + wrd.cConfiguration; // saveConfiguration
export const cconvertColors = wrd.cconvert + wrd.cColors; // convertColors

// ***********************************************
// Integration Test commands in order
// ***********************************************
export const cvalidateConstants = wrd.cvalidate + wrd.cConstants; // validateConstants
export const cvalidateCommandAliases = wrd.cvalidate + wrd.cCommand + wrd.cAliases; // validateCommandAliases

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cstartup; // Workflow startup
export const cFrameworkDetailsWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cframework + wrd.cDetails; // Workflow frameworkDetails
