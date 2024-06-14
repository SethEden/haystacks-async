/**
 * @file pluginOneCommands.js
 * @module pluginOneCommands
 * @description Contains all of the commands for the pluginOne plugin.
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.commandsBlob.commands.pluginOneCommands.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.ccommandsBlob + bas.cDot +
  wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function testPluginOneCommand01
 * @description Outputs testPluginOneCommand01,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginOneCommands.testPluginOneCommand01".
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function testPluginOneCommand01(inputData, inputMetaData) {
  let returnData = '';
  returnData = wrd.cplugin + num.cOne + wrd.cCommand + num.c01;
  console.log(namespacePrefix + returnData);
  return returnData;
}

/**
 * @function testPluginOneCommand02
 * @description Outputs testPluginOneCommand02,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginOneCommands.testPluginOneCommand02".
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
 async function testPluginOneCommand02(inputData, inputMetaData) {
  let returnData = '';
  returnData = wrd.cplugin + num.cOne + wrd.cCommand + num.c02;
  console.log(namespacePrefix + returnData);
  return returnData;
}

export default {
  testPluginOneCommand01,
  testPluginOneCommand02
}