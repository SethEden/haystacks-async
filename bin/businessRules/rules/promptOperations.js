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
 */
async function prompt(inputData, inputMetaData) {
  let functionName = prompt.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.caskIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  // if (inputData) {
  //   process.stdout.write(inputData);
  // }

  // let buffer = Buffer.alloc(1024),
  //   // eslint-disable-next-line no-unused-vars
  //   fd = process.platform === gen.cwin32 ? process.stdin.fd : await fs.openSync(sys.cdevtty, bas.cr);
  // try {
  //   // readSize = fs.readSync(fd, buffer, 0, 1024);
  //   let readSize = await fs.readSync(0, buffer, 0, 1024);

  //   await loggers.consoleLog(namespacePrefix + functionName, msg.cINPUT + buffer.toString(gen.cUTF8, 0, readSize));
  //   returnData = buffer.toString(gen.cUTF8, 0, readSize);
  // } catch (err) {
  //   if (err.code === gen.cEAGAIN) {
  //     // ERROR: No data available for reading, error message:
  //     console.log(msg.cErrorNoDataAvailableForReading + err.message);
  //   } else {
  //     console.log(msg.cerrorMessage + err.message);
  //   }
  // }
  
  // if (returnData.includes(String.fromCharCode(term))) {
  //   // Caught the case that the input string contains the global carriage return term.
  //   // index of the carriage return character:
  //   await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt01);
  //   await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt02 + returnData.indexOf(String.fromCharCode(term)));
  //   returnData = returnData.slice(0, returnData.indexOf(String.fromCharCode(term)));
  // } else if (returnData.includes(bas.cCarriageReturn + bas.cNewLine)) {
  //   // Caught the case that the string includes a carriage return and new line characters.
  //   await loggers.consoleLog(namespacePrefix + functionName, msg.cprompt03);
  //   returnData = returnData.slice(0, returnData.indexOf(bas.cCarriageReturn + bas.cNewLine));
  // }  

  if (inputData) {
    returnData = new Promise((resolve) => {
      process.stdout.write(inputData);

      process.stdin.on(wrd.cdata, (data) => {
        resolve(data.toString().trim());
      });
    });
  }

  // await Promise.all([promptResponseData]).then((value) => {
  //   loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + JSON.stringify(value));
  // });
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  prompt
};

// NOTE: We have a bug with the above code in that it works for Windows, but not for Mac or Linux.
// I thought it would be interesting to try and feed this code into ChatGPT3 and see if it could tell me why it wasn't working for Mac or Linux.
// I mean I did copy this code from the npm prompt module which IS working for both Windows, Mac, AND Linux.
// So where did I go wrong with my copy process?? Or how can this code get fixed so that it does work on Windows, Mac, AND Linux?
// I cleaned up the code a bit and made everything hard-coded so that it would be easier to copy-paste into ChatGPT.

// This was the response that ChatGPT gave me back, I am commenting it here, because I thought it was insightful and could possibly lead to a solution to this problem.
// ChatGPT: 
// This code uses the 'fs' module to read input from the command line, but it only works on Windows machines because it uses the 'devtty' file descriptor,
// which is specific to Windows and not present on Mac or Linux machines.
// On Mac and Linux machines, the code should use the '/dev/tty' file descriptor instead of 'devtty'.
// Additionally, the code uses the 'process.stdin.fd' property, which is specific to Windows and not present on Mac or Linux machines.
// On Mac and Linux machines, the code should use '0' as file descriptor instead of 'process.stdin.fd'.

// The chatGPT program is correct about its first point, but I'm not sure its a relevant point because I think the code I fed it just had a type-O in how the constant for devtty is resolved.
// The second point seems to also be correct, so I asked ChatGPT to re-write the code for me with the recommended changes and I will put the relevant code below for reference:

// /* eslint-disable no-undef */
// import fs from 'fs';
// import path from 'path';
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// // businessRules.rules.promptOperations.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;
// const term = 13; // carriage return

// async function prompt2(inputData, inputMetaData) {
//   let functionName = prompt.name;
//   console.log(`BEGIN ${namespacePrefix}${functionName} function`);
//   console.log(`inputData is: ${JSON.stringify(inputData)}`);
//   console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
//   let returnData = '';
//   if (inputData) {
//     await process.stdout.write(inputData);
//   }

//   let buffer = Buffer.alloc(1024),
//     fd = process.platform === 'win32' ? 0 : await fs.openSync('/dev/tty', 'r'),
//     readSize = await fs.readSync(fd, buffer, 0, 1024);
  
//   console.log(`INPUT: ${buffer.toString('UTF8', 0, readSize)}`);
//   returnData = buffer.toString('UTF8', 0, readSize);
//   if (returnData.includes(String.fromCharCode(term))) {
//     // Caught the case that the input string contains the global carriage return term.
//     // index of the carriage return character:
//     console.log('Caught the case that the input string contains the global carriage return term.');
//     console.log(`index of the carriage return character: ${returnData.indexOf(String.fromCharCode(term))}`);
//     returnData = returnData.slice(0, returnData.indexOf(String.fromCharCode(term)));
//   } else if (returnData.includes('/r/n')) {
//     // Caught the case that the string includes a carriage return and new line characters.
//     console.log('Caught the case that the string includes a carriage return and new line characters.');
//     returnData = returnData.slice(0, returnData.indexOf('/r/n'));
//   }
//   console.log(`returnData is: ${JSON.stringify(returnData)}`);
//   console.log(`END ${namespacePrefix}${functionName} function`);
//   return returnData;
// }