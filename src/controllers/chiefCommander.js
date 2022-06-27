/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Holds all of the functions that manage the command queue, and allows commands to be enqueued and dequeued from the command queue.
 * Also executes the command queue ultimately by making calls to the commandBroker to execute individual commands.
 * @requires module:commandBroker
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:data
 * @requires module:queue
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../brokers/commandBroker.js';
import chiefData from '../controllers/chiefData.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
import queue from '../structures/queue.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefCommander.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Initializes all of the commands and gets them added to the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await commandBroker.bootStrapCommands();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function addClientCommands
 * @description This is a wrapper function for calling the commandBroker.addClientCommands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
async function addClientCommands(clientCommands) {
  let functionName = addClientCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await commandBroker.addClientCommands(clientCommands);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandAliasesFromPath
 * @description Loads the command aliases XML file that is specified by the input.
 * The data is automatically saved on the D-data structure.
 * @param {string} commandAliasesFilePathConfigurationName The path and file name to the XML file that contains the command aliases definitions.
 * (Could be system command aliases or client command aliases)
 * @param {string} contextName The context name defines what parent command alias namespace the loaded and merged data should be stored in.
 * Example:
 * contextName = "framework" => D['CommandsAliases']['Framework']
 * contextName = "application" => D['CommandAliases']['Application']
 * contextName = "plugin" => D['CommandAliases']['Plugins']['<pluginName>']
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName) {
  let functionName = loadCommandAliasesFromPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesFilePathConfigurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesFilePathConfigurationNameIs + commandAliasesFilePathConfigurationName);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let allCommandAliasesData = {};
  allCommandAliasesData = await chiefData.setupAllXmlData(commandAliasesFilePathConfigurationName, sys.cCommandsAliases);
  // allCommandAliasesData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasesDataIs + JSON.stringify(allCommandAliasesData));
  if (D[sys.cCommandsAliases] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandsAliases] = {};
    D[sys.cCommandsAliases][sys.cFramework] = allCommandAliasesData;
  } else if (contextName.toUpperCase() === wrd.cAPPLICATION) {
    D[sys.cCommandsAliases][wrd.cApplication] = allCommandAliasesData;
  } else if (contextName.toUpperCase().includes(wrd.cPLUGIN)) {
    // TODO: Split the contextName by the "." so we can get a namespace and use that to define where the plugin workflow data should go.
    // Also make sure the data hasn't been loaded to the same plugin name already!
    // D[sys.cCommandsAliases][wrd.cPlugins][commandsAliasesFilePathConfigurationName] = allCommandAliasesData;
    console.log('ERROR: ---- PLUGIN Command Aliases data not yet supported!!!!!!!!!!!!');
  }
  // console.log('All loaded command aliases data is: ' + JSON.stringify(D[sys.cCommandsAliases]));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function enqueueCommand
 * @description Determines if the command queue has been setup or not,
 * if not then it is initialized, and the command is added to the command queue.
 * @param {string} command The command that should be added  to the command queue.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  if (D[sys.cCommandQueue] === undefined) {
    await queue.initQueue(sys.cCommandQueue);
  }
  await queue.enqueue(sys.cCommandQueue, command);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function isCommandQueueEmpty
 * @description Determines if the command queue is empty or not empty.
 * @return {boolean} A True or False value to indicate if the command queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await queue.isEmpty(sys.cCommandQueue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function processCommandQueue
 * @description Pulls the command from the front of the command queue and executes it using the command broker.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function processCommandQueue() {
  let functionName = processCommandQueue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let commandToExecute;
  let returnData;
  await queue.queuePrint(sys.cCommandQueue);
  commandToExecute = await queue.dequeue(sys.cCommandQueue);
  // commandToExecute is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteIs + commandToExecute);
  returnData = await commandBroker.executeCommand(commandToExecute);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  bootStrapCommands,
  addClientCommands,
  loadCommandAliasesFromPath,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue
};
