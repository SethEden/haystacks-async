/**
 * @file applicationSystem.js
 * @module applicationSystem
 * @description Contains all client application system commands for execution of the client application with basic application system operations.
 * @requires module:application.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/19
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cmd, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.testHarness.commands.clientCommands.applicationSystem.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function applicationHelp
 * @description A command to list the application commands and plugin commands.
 * If no plugins are loaded by the application then no plugin commands will be listed.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/19
 */
async function applicationHelp(inputData, inputMetaData) {
  let functionName = applicationHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, ''];
  await haystacks.enqueueCommand(wrd.chelp + bas.cSpace + wrd.cApplication + bas.cComa + wrd.cPlugins);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function applicationWorkflowHelp
 * @description A command to list the application workflows and plugin workflows.
 * If not plugins are loaded by the application then no plugin workflows will be listed.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/19
 */
async function applicationWorkflowHelp(inputData, inputMetaData) {
  let functionName = applicationWorkflowHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, ''];
  await haystacks.enqueueCommand(cmd.cworkflowHelp + bas.cSpace + wrd.cApplication + bas.cComa + wrd.cPlugins);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  applicationHelp,
  applicationWorkflowHelp
}