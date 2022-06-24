/**
 * @file clientCommandsLibrary.js
 * @module clientCommandsLibrary
 * @description Contains all of the client defined commands as a map between function names and function calls.
 * @requires module:clientCommands
 * @requires module:application.command.constants
 * @requires module:application.function.constants
 * @author Seth Hollingsead
 * @date 2022/02/07
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientCommands from './clientCommands/clientCommands.js';
import * as app_cmd from '../constants/application.command.constants.js';

/**
 * @function initClientCommandsLibrary
 * @description Initializes an object map of client commands and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initClientCommandsLibrary = function() {
  return {
    // Client commands
    // ***********************************************
    // client commands in order
    // ***********************************************
    [app_cmd.ccustomEchoCommand]: (inputData, inputMetaData) => clientCommands.customEchoCommand(inputData, inputMetaData),
    [app_cmd.cbossPanic]: (inputData, inputMetaData) => clientCommands.bossPanic(inputData, inputMetaData)
  };
};

export default {
  initClientCommandsLibrary
};
