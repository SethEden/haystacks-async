/**
 * @file auxiliary.js
 * @module auxiliary
 * @description Contains all of the nominal system commands.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/21
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.auxiliary.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function convertColors
 * @description Converts all of the color hexadecimal values into RGB color values.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/03/11
 * @reference {@Link: https://github.com/paularmstrong/normalizr/issues/15}
 */
async function convertColors(inputData, inputMetaData) {
  let functionName = convertColors.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, []];
  let colorKeys = Object.keys(D[wrd.ccolors][sys.cColorData]);
  // colorKeys is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccolorKeysIs + JSON.stringify(colorKeys));
  for (const element of colorKeys) {
    let currentColorName = element;
    // currentColorName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorNameIs + currentColorName);
    let currentColorObject = D[wrd.ccolors][sys.cColorData][currentColorName];
    // currentColorObject is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorObjectIs + JSON.stringify(currentColorObject));
    let currentColorHexValue = currentColorObject[sys.cHexValue];
    // currentColorHexValue is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentColorHexValueIs + currentColorHexValue);
    let ruleOutput = await ruleBroker.processRules([currentColorHexValue, [bas.cHash, '']], [biz.creplaceCharacterWithCharacter, biz.chex2rgbConversion]);
    // ruleOutput is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cruleOutputIs + ruleOutput);
    console.log(currentColorName + bas.cComa + currentColorHexValue + bas.cComa + ruleOutput[0] + bas.cComa + ruleOutput[1] + bas.cComa + ruleOutput[2]);
    returnData[1].push(ruleOutput);
  } // End-for (const element of colorKeys)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  convertColors
};
