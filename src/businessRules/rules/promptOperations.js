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
// import fs from 'fs';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.promptOperations.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;
// const term = 13; // carriage return

/**
 * @function prompt
 * @description Prompts the user for some input and returns the input.
 * @param {string} inputData What the prompt should display when asking the user for input.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of whatever input the user gave.
 * @author Seth Hollingsead
 * @date 2022/05/04 - May the Forth be with you!! ;-)
 * @NOTE This function was written with extensive help from ChatGPT,
 * special effort was made to make it work in a cross-platform environment.
 */
async function prompt(inputData, inputMetaData) {
  let functionName = prompt.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.caskIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    returnData = new Promise((resolve) => {
      process.stdout.write(inputData);

      process.stdin.once(wrd.cdata, (data) => {
        resolve(data.toString().trim());
      });
    });
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function promptRaw
 * @description Allows for single keystroke character input from the keyboard, without pressing the enter key to confirm input.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The character entered by the user.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function promptRaw(inputData, inputMetaData) {
  let functionName = promptRaw.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  process.stdin.setRawMode(true); // Allows reading of single key presses
  process.stdin.resume(); // Resume reading from stdin

  returnData = new Promise((resolve) => {
    process.stdin.once(wrd.cdata, (data) => {
      const key = data.toString();
      if (key === '\u0003') { // gen.cCTRLC) { // CTRL+C
        console.log(wrd.cExiting + bas.cSpace + wrd.cApplication);
        process.exit(0);
      } else if (key.name === wrd.cSpace || key.keyCode === 32 || key === bas.cSpace) {
        process.stdin.setRawMode(false);
        resolve(' ');
      } else if (key === '\u001b') { // gen.cESC_Key) {
        process.stdin.setRawMode(false); // disable raw mode
        resolve(false); // Return false, so the caller can exit the interactive raw process loop.
      } else {
        process.stdin.setRawMode(false); // disable raw mode
        resolve(key);
      }
    });
  });
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  prompt,
  promptRaw
};