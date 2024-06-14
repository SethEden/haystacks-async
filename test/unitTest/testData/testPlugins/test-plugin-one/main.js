/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the entry point and all public functions for the plugin.
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/03/14
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import commands from './commandsBlob/commandsLibrary.js'
import D from './structures/pluginData.js';

// External imports
import hayConst from '@haystacks/constants';

const {sys, cfg, wrd} = hayConst;

/**
 * @function initializePlugin
 * @description Simple plugin version for unit testing
 * @param {object} inputMetaData A JSON object that contains meta-data needed by the plugin.
 * In particular this contains a Haystacks context data object that can be used to inject into a new instance of Haystacks,
 * such that the new instance of Haystacks will act and behave exactly like the host application instance of Haystacks.
 * Including being able to make calls back to Haystacks, for the purpose of loading and parsing files, or any number of other operations that need to be done.
 * @return {object} A JSON object that contains all of the data that the plugin provides to the Haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
async function initializePlugin(inputMetaData) {
  D[wrd.cdata][sys.cpluginCommands] = {};
  D[wrd.cdata][sys.cpluginCommands] = await commands.initPluginCommandsLibrary();
  let returnData = D;
  console.log('D is: ', D)
  return returnData;
}

export default {
  initializePlugin
};