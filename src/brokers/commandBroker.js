/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Executes commands by calling the appropriate command-function from the commandLibrary,
 * which will actually be stored functions on the D-Data structure.
 * @requires module:ruleBroker
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires module:queue
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/haystacks|haystacks}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/02
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from './ruleBroker.js';
import commandsLibrary from '../commandsBlob/commandsLibrary.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
import queue from '../structures/queue.js';
import stack from '../structures/stack.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.commandBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Captures all of the commands string-to-function cal map data in the commandsLibrary and migrates that dat a to the D-data structure.
 * This is important now because we are going to allow the client to define their own commands separate from the system defined commands.
 * So we need a way to merge al the client defined and system defined commands into one location.
 * Then the command broker will execute commands rom the D-Data structure and not the commands library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await commandsLibrary.initCommandsLibrary();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function addClientCommands
 * @description Merges client defined commands with the system defined commands.
 * @param {array<object>} clientCommands The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function addClientCommands(clientCommands) {
  let functionName = addClientCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // Object.assign(D[wrd.cCommands], clientCommands);
  // D[wrd.cCommands] = {...D[wrd.cCommands], Object.keys(clientCommands): clientCommands[Object.keys(clientCommands)]};
  for (const [key, value] of Object.entries(clientCommands)) {
    // console.log('%%%%%%%%%%%%%%%%%% ---- >>>>>>>>> key is: ' + key);
    D[wrd.cCommands] = {...D[wrd.cCommands], [`${key}`]: value};
  } // End-for (const [key, value] of Object.entries(clientCommands))
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function getValidCommand
 * @description Parses the command string and returns an array that can be used to
 * enqueue or execute that command. Useful for determining if a command is a valid command and
 * working with multiple levels of delimiters for nested command calls, looking up a command alias, etc...
 * @param {string} commandString The command string that should be parsed for a valid command.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {boolean|string} False if the command is not valid, otherwise it returns the command string.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function getValidCommand(commandString, commandDelimiter) {
  let functionName = getValidCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  // commandDelimiter is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandDelimiterIs + commandDelimiter);
  let returnData = false;
  let foundValidCommand = false;
  let commandToExecute, commandArgs;
  let commandArgsDelimiter = commandDelimiter;
  if (commandDelimiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = bas.cSpace;
  }
  if (commandString && commandString.includes(commandArgsDelimiter) === true) {
    commandArgs = commandString.split(commandArgsDelimiter);
    commandToExecute = commandArgs[0];
  } else {
    commandToExecute = commandString;
  }
  // commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  // commandToExecute is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteIs + commandToExecute);
  if (commandString) {
    if (D[wrd.cCommands][commandToExecute] !== undefined) {
      returnData = commandToExecute;
    } else { // else-clause if (D[wrd.cCommands][commandToExecute] !== undefined)
      // else-clause looking for command aliases.
      await loggers.consoleLog(namespacePrefix + functionName, msg.celseClauseLookingForCommandAliases);
      // NOTE: It could be that the user entered a command alias, so we will need to search through all of the command aliases,
      // to see if we can find a match, then get the actual command that should be executed.
      let allCommandAliases = D[sys.cCommandsAliases];
      // allCommandAliases is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasesIs + JSON.stringify(allCommandAliases));
      // Search through the data structure recursively to see if we can find the command or command alias.
      foundValidCommand = await searchCommandAlias(allCommandAliases, commandToExecute);
      // foundValidCommand is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cfoundValidCommandIs + JSON.stringify(foundValidCommand));
      // Check if we found a valid command and return it if we did,
      // or pop a message to indicate the command was not found.
      if (foundValidCommand === false) {
        // WARNING: The specified command:
        // does not exist, please try again!
        console.log(msg.cWarningTheSpecifiedCommand + commandToExecute + msg.cdoesNotExistPleaseTryAgain + bas.cSpace + num.c1);
      } else {
        returnData = foundValidCommand[wrd.cName];
      }
    } // End-else
  } else {
    // Looks like the user entered something undefined: Pop the standard error message:
    // WARNING: The specified command:
    // does not exist, please try again!
    console.log(msg.cWarningTheSpecifiedCommand + commandToExecute + msg.cdoesNotExistPleaseTryAgain);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countMatchingCommandAlias
 * @description This is a recursive function that searches through all teh command aliases
 * data structures and counts the number of command aliases that match the input alias.
 * @param {object} commandAliasData The command alias data that should be searched recursively for the specified command alias.
 * @param {string} commandAliasName The command alias name/string that should be searched for and counted when matches are found.
 * @return {integer} The count of the number of command aliases that match the given input alias.
 * @author Seth Hollingsead
 * @date 2022/06/06
 */
async function countMatchingCommandAlias(commandAliasData, commandAliasName) {
  let functionName = countMatchingCommandAlias.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasDataIs + JSON.stringify(commandAliasData));
  // commandAliasName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasNameIs + commandAliasName);
  let commandAliasCount = 0;
  if (typeof commandAliasData === wrd.cobject) {
    for (let commandAliasEntity in commandAliasData) {
      // commandAliasEntity is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityIs + JSON.stringify(commandAliasEntity));
      // commandAliasEntityValue is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityValueIs + JSON.stringify(commandAliasData[commandAliasEntity]));
      if (commandAliasEntity.toUpperCase() != commandAliasName.toUpperCase()) {
        if (commandAliasData[commandAliasEntity][wrd.cAliases] != undefined) {
          let aliasList = commandAliasData[commandAliasEntity][wrd.cAliases];
          let arrayOfAliases = aliasList.split(bas.cComa);
          for (const element of arrayOfAliases) {
            let currentAlias = element;
            await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
            await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasNameIs + commandAliasName);
            if (commandAliasName === currentAlias) {
              // Found a matching alias entry! 1
              await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundMatchingAliasEntry1);
              commandAliasCount = commandAliasCount + 1;
              // Don't break, continue searching, so we get a full count of any duplicates found.
            }
          } // End-for (const element of arrayOfAliases)
        } else {
          let tempCommandAliasCount = await countMatchingCommandAlias(commandAliasData[commandAliasEntity], commandAliasName);
          // tempCommandAliasCount is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.ctempCommandAliasCountIs + tempCommandAliasCount);
          if (tempCommandAliasCount > 0) {
            // adding commandAliasCount:
            await loggers.consoleLog(namespacePrefix + functionName, msg.caddingCommandAliasCount + commandAliasCount);
            commandAliasCount = commandAliasCount + tempCommandAliasCount;
            // After adding commandAliasCount and tempCommandAliasCount:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cAfterAddingCommandAliasCountAndTempCommandAliasCount + commandAliasCount);
            // Don't break, continue searching, so we get a full count of any duplicates found.
          } // End-if (tempCommandAliasCount > 0)
        }
      } else if (commandAliasEntity.toUpperCase() === commandAliasName.toUpperCase()) {
        // Found a matching entry! 2
        await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundMatchingAliasEntry2);
        commandAliasCount = commandAliasCount + 1;
        // Don't break, continue searching, so we get a full count of any duplicates found.
      }
    } // End-for (let commandAliasEntity in commandAliasData)
  } // End-if (typeof commandAliasData === wrd.cobject)
  // commandAliasCount is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasCountIs + JSON.stringify(commandAliasCount));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return commandAliasCount;
}

/**
 * @function searchCommandAlias
 * @description This is a recursive function that searches through all the command aliases
 * data structures and returns the one command data object that matches the input name.
 * @param {object} commandAliasData The command alias data that should be searched recursively for the specified command alias.
 * @param {string} commandAliasName The command alias name/string that should be found.
 * @return {object} The command object that corresponds to the input command alias name.
 * @author Seth Hollingsead
 * @date 2022/05/27
 */
async function searchCommandAlias(commandAliasData, commandAliasName) {
  let functionName = searchCommandAlias.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasDataIs + JSON.stringify(commandAliasData));
  // commandAliasName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasNameIs + commandAliasName);
  let commandAliasObject = false;
  if (typeof commandAliasData === wrd.cobject) {
    for (let commandAliasEntity in commandAliasData) {
      // commandAliasEntity is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityIs + JSON.stringify(commandAliasEntity));
      // commandAliasEntityValue is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityValueIs + JSON.stringify(commandAliasData[commandAliasEntity]));
      if (commandAliasEntity.toUpperCase() != commandAliasName.toUpperCase()) {
        if (commandAliasData[commandAliasEntity][wrd.cAliases] != undefined) {
          let aliasList = commandAliasData[commandAliasEntity][wrd.cAliases];
          let arrayOfAliases = aliasList.split(bas.cComa);
          for (const element of arrayOfAliases) {
            let currentAlias = element;
            if (commandAliasName === currentAlias ||
            commandAliasName === bas.cDash + currentAlias ||
            commandAliasName === bas.cDoubleDash + currentAlias ||
            commandAliasName === bas.cForwardSlash + currentAlias ||
            commandAliasName === bas.cBackSlash + currentAlias ||
            commandAliasName.toUpperCase() === currentAlias.toUpperCase() ||
            commandAliasName.toUpperCase() === bas.cDash + currentAlias.toUpperCase() ||
            commandAliasName.toUpperCase() === bas.cDoubleDash + currentAlias.toUpperCase() ||
            commandAliasName.toUpperCase() === bas.cForwardSlash + currentAlias.toUpperCase() ||
            commandAliasName.toUpperCase() === bas.cBackSlash + currentAlias.toUpperCase() ||
            commandAliasName.toLowerCase() === currentAlias.toLowerCase() ||
            commandAliasName.toLowerCase() === bas.cDash + currentAlias.toLowerCase() ||
            commandAliasName.toLowerCase() === bas.cDoubleDash + currentAlias.toLowerCase() ||
            commandAliasName.toLowerCase() === bas.cForwardSlash + currentAlias.toLowerCase() ||
            commandAliasName.toLowerCase() === bas.cBackSlash + currentAlias.toLowerCase()) {
              // Found a matching alias entry!
              await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundMatchingAliasEntry1);
              commandAliasObject = commandAliasData[commandAliasEntity];
              break;
            }
          } // End-for (const element of arrayOfAliases)
        } else {
          let commandAliasesObjectTemp = await searchCommandAlias(commandAliasData[commandAliasEntity], commandAliasName);
          // commandAliasesObjectTemp is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesObjectTempIs + JSON.stringify(commandAliasesObjectTemp));
          if (commandAliasesObjectTemp) {
            commandAliasObject = commandAliasesObjectTemp;
            break;
          } // End-if (commandAliasesObjectTemp)
        }
      } else if (commandAliasEntity.toUpperCase() === commandAliasName.toUpperCase()) {
        // Found a matching entry!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cFoundMatchingAliasEntry2);
        commandAliasObject = commandAliasData[commandAliasEntity];
        break;
      }
    } // End-for (let commandAliasEntity in commandAliasData)
  } // End-if (typeof commandAliasData === wrd.cobject)
  // commandAliasObject is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasObjectIs + JSON.stringify(commandAliasObject));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return commandAliasObject;
}

/**
 * @function getAllCommandAliasData
 * @description Recursively gets all of the commands alias data from all levels and flattens them into a single array for printing out to the help command.
 * @param {object} commandAliasDataStructure The command alias data structure that should be recursively flattened into a single array for output.
 * If the input is undefined then the main CommandsAliases data structure will be used at the root of the command aliases data hive.
 * @return {array<string>|boolean} An array of all the command aliases currently needing to be flattened or
 * a boolean True or False to indicate that a leaf-node has been found by the recursive caller.
 * @author Seth Hollingsead
 * @date 2022/05/27
 */
async function getAllCommandAliasData(commandAliasDataStructure) {
  let functionName = getAllCommandAliasData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasDataStructure is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure));
  let allCommandsData = false;
  let internalCommandAliasDataStructure;
  if (commandAliasDataStructure === undefined) {
    internalCommandAliasDataStructure = JSON.parse(JSON.stringify(D[sys.cCommandsAliases]));
  } else {
    internalCommandAliasDataStructure = JSON.parse(JSON.stringify(commandAliasDataStructure));
  }
  // internalCommandAliasDataStructure is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinternalCommandAliasDataStructureIs + JSON.stringify(internalCommandAliasDataStructure));
  if (typeof internalCommandAliasDataStructure === wrd.cobject) {
    allCommandsData = [];
    for (let commandAliasEntity in internalCommandAliasDataStructure) {
      // commandAliasEntity is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityIs + JSON.stringify(commandAliasEntity));
      // internalCommandAliasDataStructure[commandAliasEntity] is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cinternalCommandAliasDataStructureCommandAliasEntityIs + JSON.stringify(internalCommandAliasDataStructure[commandAliasEntity]));
      if (typeof internalCommandAliasDataStructure[commandAliasEntity] === wrd.cobject) {
        // internalCommandAliasDataStructure[commandAliasEntity] is of type object!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cgetAllCommandAliasDataMessage01);
        let allCommandAliasesTemp;
        allCommandAliasesTemp = await getAllCommandAliasData(internalCommandAliasDataStructure[commandAliasEntity]);
        // allCommandAliasesTemp returned from the recursive call is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasesTempReturnedFromRecursiveCallIs + JSON.stringify(allCommandAliasesTemp));
        if (allCommandAliasesTemp === false) {
          // The recursive call returned false, so push the current entity to the output array!
          await loggers.consoleLog(namespacePrefix + functionName, msg.cgetAllCommandAliasDataMessage02);
          allCommandsData.push(internalCommandAliasDataStructure);
          // allCommandsData after pushing to the array is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandsDataAfterPushingToTheArrayIs + JSON.stringify(allCommandsData));
          break;
        } else {
          allCommandsData = await ruleBroker.processRules([allCommandsData, allCommandAliasesTemp], [biz.cobjectDeepMerge]);
        }
      } else {
        allCommandsData = false; // Reset it, because it was reinitalized to an array.
      }
    } // End-for (let commandAliasEntity in internalCommandAliasDataStructure)
  } // End-if (typeof internalCommandAliasDataStructure === wrd.cobject)
  // allCommandsData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandsDataIs + JSON.stringify(allCommandsData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allCommandsData;
}

/**
 * @function getCommandNamespaceDataObject
 * @description Recursively scans through the entire command alias data structure looking for an object that matches the input namespace name.
 * When that namespace is found, the entire object is returned.
 * @param {object} commandAliasDataStructure The command alias data structure that should be recursively searched for the namespace specified.
 * if the input is undefined then the main cCommandsAliases data structure will be used at the root of the CommandAliases data hive.
 * @param {string} namespaceToFind The namespace to look for in the command alias metaData data structure.
 * @return {object|boolean} The namespace object if it is found, or False if the namespace object was not found.
 * @author Seth Hollingsead
 * @date 2022/05/27
 */
async function getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind) {
  let functionName = getCommandNamespaceDataObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasDataStructure is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasDataStructureIs + JSON.stringify(commandAliasDataStructure));
  // namespaceToFind is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceToFindIs + namespaceToFind);
  let namespaceCommandsObject = false;
  if (commandAliasDataStructure === undefined) {
    commandAliasDataStructure = D[sys.cCommandsAliases];
  }
  for (let commandAliasEntity in commandAliasDataStructure) {
    // commandAliasEntity is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasEntityIs + JSON.stringify(commandAliasEntity));
    // commandAliasDataStructure[commandAliasEntity] is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasDataStructureCommandAliasEntityIs + JSON.stringify(commandAliasDataStructure[commandAliasEntity]));
    if (commandAliasEntity === namespaceToFind) {
      namespaceCommandsObject = commandAliasDataStructure[commandAliasEntity];
      break;
    } else if (typeof commandAliasDataStructure[commandAliasEntity] === wrd.cobject) {
      // Search recursively
      let namespaceCommandsTempObject = await getCommandNamespaceDataObject(commandAliasDataStructure[commandAliasEntity], namespaceToFind);
      if (namespaceCommandsTempObject !== false) {
        // Then we must have found the namespace object we were looking for in the recursion call.
        // Just return it, and skip out of the loop.
        namespaceCommandsObject = namespaceCommandsTempObject;
        break;
      }
    }
  } // End-for (let commandAliasEntity in commandAliasDataStructure)
  // namespaceCommandsObject is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceCommandsObjectIs + JSON.stringify(namespaceCommandsObject));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return namespaceCommandsObject;
}

/**
 * @function getCommandArgs
 * @description Gets the arguments of the current command.
 * @param {string} commandString The command string that should be parsed fro command arguments.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {array<boolean|string|integer>} Any array of arguments, some times these might actually be nested command calls.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function getCommandArgs(commandString, commandDelimiter) {
  let functionName = getCommandArgs.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  // commandDelimiter is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandDelimiterIs + commandDelimiter);
  let returnData = false;
  let commandArgsDelimiter = commandDelimiter;
  let isOddRule = [biz.cisOdd];
  let replaceCharacterAtIndexRule = [biz.creplaceCharacterAtIndex];
  let replaceTildesWithSingleQuoteRule = [biz.creplaceCharacterWithCharacter];
  let stringLiteralCommandDelimiterAdded = false;
  let secondaryCommandArgsDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
  if (commandDelimiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = bas.cSpace;
  }
  if (commandString.includes(commandArgsDelimiter) === true) {
    // NOTE: All commands that enqueue or execute commands need to pass through this function.
    // There is a case where the user might pass a string with spaces or other code/syntax.
    // So we need to split first by single character string delimiters and parse the
    // non-string array elements to parse command arguments without accidentally parsing string literal values as command arguments.
    if (commandString.includes(bas.cBackTickQuote) === true) {
      // commandString contains either a singleQuote or a backTickQuote
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringContainsEitherSingleQuoteOrBackTickQuote);
      let preSplitCommandString;
      if (commandString.includes(bas.cBackTickQuote) === true) {
        // commandString contains a singleQuote!
        await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringContainsSingleQuote);
        // NOTE: We cannot actually just replace ach single quote, we need to tag each single quote in pairs of 2.
        // The first one should be post-tagged, i.e. replace "'" with "'~" and the second should be pre-tagged i.e. replace "'" with "~'".
        // Then if there are more single quotes, the thirst post-tagged, i.e. replace "'" with "'~", etc...
        let numberOfSingleQuotes = commandString.split(bas.cBackTickQuote).length - 1;
        // Determine if the number of single quotes is odd or even?
        // About to call the rule broker to process on the number of single quotes and determine if it-be even or odd.
        await loggers.consoleLog(namespacePrefix + functionName, msg.cgetCommandArgsMessage1 + sys.cgetCommandArgsMessage2);
        if (numberOfSingleQuotes >= 2 && await ruleBroker.processRules([numberOfSingleQuotes, ''], isOddRule) === false) {
          // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
          await loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfSingleQuotesIsEven);
          let indexOfStringDelimiter;
          for (let i = 0; i < numberOfSingleQuotes; i++) {
            // Iterate over each one and if they are even or odd we will change how we replace ach single quote character as described above.
            if (i === 0) {
              // Get the index of the first string delimiter.
              indexOfStringDelimiter = commandString.indexOf(bas.cBackTickQuote, 0);
              // First index is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cFirstIndexIs + indexOfStringDelimiter);
              // commandString.replace(bas.cBackTickQuote, bas.cBackTickQuote + bas.cTilde);
              // Rather than use the above, we will make a business rule o replace at index, the above replaces all isntances and we don't want that!
              commandString = await ruleBroker.processRules([commandString, [indexOfStringDelimiter, bas.cBackTickQuote + bas.cTilde]], replaceCharacterAtIndexRule);
              stringLiteralCommandDelimiterAdded = true;
              // commandString after tagging the first string delimiter:
              await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringAfterTaggingTheFirstStringDelimiter + commandString);
            } else {
              indexOfStringDelimiter = commandString.indexOf(bas.cBackTickQuote, indexOfStringDelimiter + 1);
              // Additional index is:
              await loggers.consoleLog(namespacePrefix + functionName, msg.cAdditionalIndexIs + indexOfStringDelimiter);
              // Determine if it is odd or even.
              // NOTE: We start our count with 0 which would technically be our odd, then 1 should be even, but 1 is an odd number, so the logic here should actually be backwards.
              // an even value for "i" would be the odd i-th delimiter value.
              if (await ruleBroker.processRules([i.toString(), ''], isOddRule) === true) {
                // We are on the odd index, 1, 3, 5, etc...
                // odd index
                await loggers.consoleLog(namespacePrefix + functionName, msg.coddIndex);
                commandString = await ruleBroker.processRules([commandString, [indexOfStringDelimiter, bas.cTilde + bas.cBackTickQuote]], replaceCharacterAtIndexRule);
                stringLiteralCommandDelimiterAdded = true;
                // commandString after tagging an odd string delimiter:
                await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringAfterTaggingAnOddStringDelimiter + commandString);
              } else {
                // We are on the even index 2, 4, 6, etc...
                // even index
                await loggers.consoleLog(namespacePrefix + functionName, msg.cevenIndex);
                commandString = await ruleBroker.processRules([commandString, [indexOfStringDelimiter, bas.cBackTickQuote + bas.cTilde]], replaceCharacterAtIndexRule);
                stringLiteralCommandDelimiterAdded = true;
                // commandString after tagging an even string delimiter:
                await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringAfterTaggingAnEvenStringDelimiter + commandString);
              }
            }
          } // End-for (let i = 0; i < numberOfSingleQuotes; i++)
          preSplitCommandString = commandString.split(bas.cBackTickQuote);
          // Now we can check which segments of the array contain our Tilde character, since we used that to tag our single quotes.
          // And the array element that contains the Tilde tag we wil not split.
          // Ultimately everything needs to be returned as an array, make sure we trim the array elements so we don't get any empty array elements.
          // preSpitCommandString is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cpreSplitCommandStringIs + JSON.stringify(preSplitCommandString));
          for (let j = 0; j < preSplitCommandString.length; j++) {
            let preSplitCommandStringElement = preSplitCommandString[j];
            preSplitCommandStringElement = preSplitCommandStringElement.trim(); // Make sure to get rid of any white space on the ends of the string.
            let postSplitCommandString;
            if (j === 0) { // Make sure we re-initialize our return value to an array, since it was set first to a boolean value.
              returnData = [];
            }
            if (preSplitCommandStringElement.includes(bas.cTilde) === false) {
              postSplitCommandString = preSplitCommandStringElement.split(commandArgsDelimiter);
              for (const element of postSplitCommandString) {
                if (element !== '') {
                  // postSplitCommandString[k] is:
                  await loggers.consoleLog(namespacePrefix + functionName, msg.cpostSplitCommandStringIs + JSON.stringify(element));
                  returnData.push(element);
                  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
                } // End-if (postSplitCommandString[k] !== '')
              } // End-for (const element of postSplitCommandString)
            } else {
              // NOTE: We cannot just push the quoted string array back onto the array. Well we might be able to,
              // but if the last character on the last element of the returnData array is a secondaryCommandArgsDelimiter
              // then we need to just append our string to that array element, after we remove the tilde string tags,
              // and replace them with our single quotes again.
              if (returnData[returnData.length - 1].slice(-1) === secondaryCommandArgsDelimiter) {
                preSplitCommandStringElement = await ruleBroker.processRules([preSplitCommandStringElement, [/~/g, bas.cBackTickQuote]], replaceTildesWithSingleQuoteRule);
                returnData[returnData.length - 1] = returnData[returnData.length - 1] + preSplitCommandStringElement;
              } else {
                // preSplitCommandSringElement is:
                await loggers.consoleLog(namespacePrefix + functionName, msg.cpreSplitCommandStringElementIs + JSON.stringify(preSplitCommandStringElement));
                returnData.push(preSplitCommandStringElement); // Add the string now.
              }
              await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
            }
          } // End-for (let j = 0; j < preSplitCommandString.length; j++)
        } // End-if (numberOfSingleQuotes >= 2 && ruleBroker.processRules(numberOfSingleQuotes, '', isOddRule) === false)
      } // End-if (commandString.includes(bas.cBackTickQuote) === true)
      // We might need much additional logic to manage the case that the string contains multiple levels of commands with strings....in that case:
      // The command system will probably need to implement a re-assignment of the string delimiter, also using the bas.cBackTickQuote.
      // I have started to lay out some of that logic above, but we are FAR from it, and there isn't any business need for it right now.
      // So I will handle that case if & when I come to it.
    } else {
      // Doing a straight split of the commandString:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cDoingStraightSplitCommandString + commandString);
      returnData = commandString.split(commandArgsDelimiter);
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
    }
  } // End-if (commandString.includes(commandArgsDelimiter) === true)
  if (stringLiteralCommandDelimiterAdded === true) {
    // This means we need to remove some bas.cTilde from one or more of the command args.
    await ruleBroker.processRules([returnData, ''], [biz.cremoveStringLiteralTagsFromArray]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeCommand
 * @description Takes a command string with all its associated arguments, data & meta-data.
 * This function will parse all of that out of the command lien variable that is passed in.
 * And finally pass all of that data on the execution of the actual command.
 * @param {string} commandString The command to execute along with all the associated command arguments, data & meta-data.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
async function executeCommand(commandString) {
  // Here we need to do all of the parsing for the command.
  // Might be a good idea to rely on business rules to do much of the parsing for us!
  // Also don't forget this is where we will need to implement the command performance
  // tracking & command results processing such as pass-fail,
  // so that when a chain of commands has completed execution we can evaluate command statistics and metrics.
  let functionName = executeCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandString is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  let returnData = [];
  let commandToExecute = await getValidCommand(commandString, await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter));
  // commandToExecute is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteIs + commandToExecute);
  let commandArgs = await getCommandArgs(commandString, await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter));
  // commandArgs is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandArgsIs + commandArgs);
  let commandMetricsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableCommandPerformanceMetrics);
  let commandStartTime = '';
  let commandEndTime = '';
  let commandDeltaTime = '';

  await loggers.consoleLog(namespacePrefix + functionName, 'commandQueue is: ' + await queue.queuePrint(sys.cCommandQueue));

  if (commandMetricsEnabled === true) {
    // Here we will capture the start time of the command we are about to execute.
    // After executing we wil capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the command.
    commandStartTime = await ruleBroker.processRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
    // Command Start time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCommandStartTimeIs + commandStartTime);
  } // End-if (commandMetricsEnabled === true)
  if (commandToExecute !== false && commandArgs !== false) {
    // console.log('commandToExecute is: ' + commandToExecute);
    returnData = await D[wrd.cCommands][commandToExecute](commandArgs, '');
  } else if (commandToExecute !== false && commandArgs === false) {
    // This could be a command without any arguments.
    // console.log('This could be a command without any arguments.');
    returnData = await D[wrd.cCommands][commandToExecute]('', '');
  } else {
    // This command does not exist, nothing to execute, but we don't want the application to exit.
    // An error message should have already been thrown, but we should throw another one here.
    // WARNING: Command does not exist, please enter a valid command and try again!
    console.log(msg.cexecuteCommandMessage1);
    returnData = [true, false];
  }
  if (commandMetricsEnabled === true && commandToExecute !== '' && commandToExecute !== false) {
    let performanceTrackingObject = {};
    commandEndTime = await ruleBroker.processRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
    // Command End time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCommandEndTimeIs + commandEndTime);
    // Now compute the delta tme so we know how long it took to run that command.
    commandDeltaTime = await ruleBroker.processRules([commandStartTime, commandEndTime], [biz.ccomputeDeltaTime]);
    // Command run-time is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCommandRunTimeIs + commandDeltaTime);
    // Check to make sure the command performance tracking stack exists or does not exist.
    if (D[cfg.ccommandsPerformanceTrackingStack] === undefined) {
      await stack.initStack(cfg.ccommandsPerformanceTrackingStack);
    }
    if (D[cfg.ccommandNamesPerformanceTrackingStack] === undefined) {
      await stack.initStack(cfg.ccommandNamesPerformanceTrackingStack);
    }
    performanceTrackingObject = {Name: commandToExecute, RunTime: commandDeltaTime};
    if (await stack.contains(cfg.ccommandNamesPerformanceTrackingStack, commandToExecute) === false) {
      await stack.push(cfg.ccommandNamesPerformanceTrackingStack, commandToExecute);
    }
    await stack.push(cfg.ccommandsPerformanceTrackingStack, performanceTrackingObject);
    // stack.print(cfg.ccommandNamesPerformanceTrackingStack);
    // stack.print(cfg.ccommandsPerformanceTrackingStack);
  } // End-if (commandMetricsEnabled === true && commandToExecute !== '' && commandToExecute !== false)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  bootStrapCommands,
  addClientCommands,
  getValidCommand,
  countMatchingCommandAlias,
  searchCommandAlias,
  getAllCommandAliasData,
  getCommandNamespaceDataObject,
  getCommandArgs,
  executeCommand
};
