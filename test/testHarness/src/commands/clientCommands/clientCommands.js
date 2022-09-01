/**
 * @file clientCommands.js
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:application.command.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/07
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import path from 'path';

const {bas, biz, cfg, gen, msg, num, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// testHarness.commands.clientCommands.clientCommands.
const namespacePrefix = apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new
 * dynamic data storage technique for client commands is working.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/02/08
 */
async function customEchoCommand(inputData, inputMetaData) {
  let functionName = customEchoCommand.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, false];
  returnData[1] = inputData + ' clientStringParsing.customEchoCommand';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function bossPanic
 * @description Prints out random text on the screen
 * in a custom length loop that makes the screen look like it is doing something busy.
 * So anybody who looks at the screen will think you are working on something super important like: "quantum" cryptography or artificial Intelligence.
 * (As if putting the word "Quantum" in front of everything some how makes it smarter!)
 * Could also be used to turn a computer into a movie or TV-episode set-piece to make the people standing in front of the computer seem smarter.
 * If someone does some fake typing on the keyboard and the BossPanic command is configured to run slowly then it might look like someone is writing code super fast!
 * Like an expert Hacker!
 * @param {string} inputData The string used to load the BossPanic configuration setting.
 * This command can work with no arguments or with any of the following optional arguments.
 * They are all numbers so if you want the 3rd one you need to provide the first 2 parameters as well.
 * inputData[1] = PerformanceIndex - This is the number of milliseconds that should be delayed between running each loop iteration.
 * inputData[2] = Maximum line length - The maximum number of characters that should be generated for printing on the screen.
 * inputData[3] = Maximum number of no-colored sequential lines, a smaller number means more colored lines will be generated over all.
 * inputData[4] = Maximum number of colored sequential lines, a smaller number means less colored lines will be generated sequentially.
 * inputData[5] = Boolean True or False to indicate if typing individual characters should be enabled.
 * inputData[6] = Speed-Typing Performance Index, time-out in milliseconds between typing each character.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the command should not exit when it is completed, however,
 * this command puts the application into an infinite loop, so it will technically never return.
 * @author Seth Hollingsead
 * @date 2022/03/31
 * @NOTE This is an INFINITE LOOP function, so press control+C to exit rom the application when you want to exit.
 */
async function bossPanic(inputData, inputMetaData) {
  let functionName = bossPanic.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let stringLength = 0;
  let colorBreakPoint = 0;
  let stringToPrint = '';
  let subString1 = '';
  let subString2 = '';
  let brightColor1 = [];
  let darkColor1 = [];
  let brightColor2 = [];
  let darkColor2 = [];
  let colorMode1 = false;
  let colorMode2 = false;
  let enableColoredLine = false;
  let noColoredLineCount = 0;
  let coloredLineCount = 0;
  let performanceIndex = 0; // Zero is as fast as possible, this will be the delay between loop iterations in milliseconds.
  let lineLength = 10;
  let noColoredLinesMaxLength = 30;
  let coloredLinesMaxLength = 20;
  let fastTypingOutput = false;
  let speedTypingPerformanceIndex = 100; // Default to a fast typing speed.
  let systemColorLogsEnabled = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);

  // Rather than doing the above, I'll just call the business rule to generate a random number between 1 and 100.
  // Then I can call the string generator to generate a random string of characters to match that length.
  // And we can build up each line of code that way.
  // In such a way we can have much finer control over how strings are generated and colorized without going into scanning the hard drive,
  // and printing out file paths and file names.

  if (inputData && inputData.length > 1) {
    performanceIndex = parseInt(inputData[1]);
    if (performanceIndex < 0) {
      performanceIndex = Math.abs(performanceIndex);
    }
    if (inputData.length > 2) {
      lineLength = parseInt(inputData[2]);
      if (lineLength < 0) {
        lineLength = Math.abs(lineLength);
      }
    } // End-if (inputData.length > 2)
    if (inputData.length > 3) {
      noColoredLinesMaxLength = parseInt(inputData[3]);
      if (noColoredLinesMaxLength < 0) {
        noColoredLinesMaxLength = Math.abs(noColoredLinesMaxLength);
      }
    } // End-if (inputData.length > 3)
    if (inputData.length > 4) {
      coloredLinesMaxLength = parseInt(inputData[4]);
      if (coloredLinesMaxLength < 0) {
        coloredLinesMaxLength = Math.abs(coloredLinesMaxLength);
      }
    } // End-if (inputData.length > 4)
    if (inputData.length > 5) {
      fastTypingOutput = await haystacks.executeBusinessRules([inputData[5], ''], [biz.cstringToBoolean]);
    }
    if (inputData.length > 6) {
      speedTypingPerformanceIndex = parseInt(inputData[6]);
      if (speedTypingPerformanceIndex < 0) {
        speedTypingPerformanceIndex = Math.abs(speedTypingPerformanceIndex);
      }
    } // End-if (inputData.length > 6)
  } // End-if (inputData && inputData.length > 1)
  // eslint-disable-next-line no-constant-condition
  while (true) { // Start the infinite loop
    if (noColoredLineCount <= 0 && enableColoredLine === false) {
      noColoredLineCount = await haystacks.executeBusinessRules([num.c1, [noColoredLinesMaxLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
      enableColoredLine = true;
    }
    if (coloredLineCount <= 0 && enableColoredLine === true) {
      coloredLineCount = await haystacks.executeBusinessRules([num.c2, [coloredLinesMaxLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
      enableColoredLine = false;
    }
    stringLength = await haystacks.executeBusinessRules([num.c1, [lineLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
    // Now we will generate a number between 0 and the string length, this will be the color limit so we can break the ine up randomly into a beginning segment and an ending segment.
    // Each segment of the line will get a different random foreground font color and random background font color.
    colorBreakPoint = await haystacks.executeBusinessRules([num.c1, [stringLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
    stringToPrint = await haystacks.executeBusinessRules([stringLength, gen.cMostSpecialCharacters], [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]);
    if (enableColoredLine === true && systemColorLogsEnabled === true) {
      subString1 = stringToPrint.substr(0, colorBreakPoint);
      subString2 = stringToPrint.substr(colorBreakPoint, stringToPrint.length);
      // Determine if the first part of the string will have a light foreground and dark background or dark foreground and light background.
      if (await haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]) === true) {
        brightColor1 = await haystacks.executeBusinessRules([200, 255], [biz.cgenerateRandomBrightColor]);
        darkColor1 = await haystacks.executeBusinessRules([0, 60], [biz.cgenerateRandomDarkColor]);
        colorMode1 = await haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]);
        if (colorMode1 === true) {
          subString1 = chalk.rgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
          subString2 = chalk.bgRgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
        } else {
          subString1 = chalk.rgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
          subString2 = chalk.bgRgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
        }
      } // End-if (haystacks.executeBusinessRule(biz.crandomlyGenerateBooleanValue, '', '') === true)
      if (await haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]) === true) {
        brightColor2 = await haystacks.executeBusinessRules([200, 255], [biz.cgenerateRandomBrightColor]);
        darkColor2 = await haystacks.executeBusinessRules([0, 60], [biz.cgenerateRandomDarkColor]);
        colorMode2 = await haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]);
        if (colorMode2 === true) {
          subString2 = chalk.rgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
          subString2 = chalk.bgRgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
        } else {
          subString2 = chalk.rgb(darkColor2[0], darkColor2[1], darkColor2[2])(subString2);
          subString2 = chalk.bgRgb(brightColor2[0], brightColor2[1], brightColor2[2])(subString2);
        }
      } // End-if (haystacks.executeBusinessRule(biz.crandomlyGenerateBooleanValue, '', '') === true)
      // Now colorize the different string segments and we will recombine them before printing out to the screen.
      stringToPrint = subString1 + subString2;
      coloredLineCount--;
    } else {
      noColoredLineCount--;
    }
    if (fastTypingOutput === true) {
      for (let i = 0; i < stringToPrint.length; i++) {
        // eslint-disable-next-line no-undef
        await process.stdout.write(stringToPrint.charAt(i));
        await haystacks.executeBusinessRules([speedTypingPerformanceIndex, ''], [wrd.csleep]);
      } // End-for (let i = 0; i < stringToPrint.length; i++)
      console.log('\r'); // Carriage return
    } else {
      console.log(stringToPrint);
    }
    await haystacks.executeBusinessRules([performanceIndex, ''], [wrd.csleep]);
  } // End-while (true) // End of the infinite loop
}

/**
 * @function clientCommand01
 * @description Client Command One.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand01(inputData, inputMetaData) {
  let functionName = clientCommand01.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand01';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand02
 * @description Client Command Two.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand02(inputData, inputMetaData) {
  let functionName = clientCommand02.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand02';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand03
 * @description Client Command Three.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand03(inputData, inputMetaData) {
  let functionName = clientCommand03.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand03';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand04
 * @description Client Command Four.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand04(inputData, inputMetaData) {
  let functionName = clientCommand04.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand04';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand05
 * @description Client Command Five.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand05(inputData, inputMetaData) {
  let functionName = clientCommand05.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand05';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand06
 * @description Client Command Six.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand06(inputData, inputMetaData) {
  let functionName = clientCommand06.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand06';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand07
 * @description Client Command Seven.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand07(inputData, inputMetaData) {
  let functionName = clientCommand07.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand07';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand08
 * @description Client Command Eight.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand08(inputData, inputMetaData) {
  let functionName = clientCommand08.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand08';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand09
 * @description Client Command Nine.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand09(inputData, inputMetaData) {
  let functionName = clientCommand09.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand09';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clientCommand10
 * @description Client Command Ten.
 * @param {string} inputData Not used for this command. 
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array,object>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output and finally the promise for the command execution.
 * @author Seth Hollingsead
 * @date 2022/08/01
 * @NOTE: This command will be used to test the order in which commands are enqueued and the order in which commands are executed.
 * Especially when commands are nested inside deeply nested workflows.
 */
 async function clientCommand10(inputData, inputMetaData) {
  let functionName = clientCommand10.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  returnData[1] = 'clientStringParsing.clientCommand10';
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  customEchoCommand,
  bossPanic,
  clientCommand01,
  clientCommand02,
  clientCommand03,
  clientCommand04,
  clientCommand05,
  clientCommand06,
  clientCommand07,
  clientCommand08,
  clientCommand09,
  clientCommand10
};
