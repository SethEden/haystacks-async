/* eslint-disable no-undef */
/**
 * @file promptOperations.js
 * @module promptOperations
 * @description A simple prompt module to get input from the user using process.stdin.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/05/04 - May the Forth be with you!! ;-)
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import fs from 'fs';
import path from 'path';

const {bas, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.promptOperations.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;
const term = 13; // carriage return

/**
 * @function prompt
 * @description Prompts the user for some input and returns the input.
 * @param {string} inputData What the prompt should display when asking the user for input.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of whatever input the user gave.
 * @author Seth Hollingsead
 * @date 2022/05/04 - May the Forth be with you!! ;-)
 */
async function prompt(inputData, inputMetaData) {
  let functionName = prompt.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.caskIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    await process.stdout.write(inputData);
  }

  let buffer = Buffer.alloc(1024),
    // eslint-disable-next-line no-unused-vars
    fd = process.platform === gen.cwin32 ? process.stdin.fd : await fs.openSync(sys.cdevtty, bas.cr),
    // readSize = fs.readSync(fd, buffer, 0, 1024);
    readSize = await fs.readSync(0, buffer, 0, 1024);

    await loggers.consoleLog(namespacePrefix + functionName, msg.cINPUT + buffer.toString(gen.cUTF8, 0, readSize));
  returnData = buffer.toString(gen.cUTF8, 0, readSize);
  if (returnData.includes(String.fromCharCode(term))) {
    // Caught the case that the input string contains the global carriage return term.
    // index of the carriage return character:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt01);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt02 + returnData.indexOf(String.fromCharCode(term)));
    returnData = returnData.slice(0, returnData.indexOf(String.fromCharCode(term)));
  } else if (returnData.includes(bas.cCarriageReturn + bas.cNewLine)) {
    // Caught the case that the string includes a carriage return and new ine characters.
    await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt03);
    returnData = returnData.slice(0, returnData.indexOf(bas.cCarriageReturn + bas.cNewLine));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  prompt
};
