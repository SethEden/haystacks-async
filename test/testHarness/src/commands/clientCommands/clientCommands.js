/**
 * @file clientCommands.js
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:application.command.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/sync|@haystacks/sync}
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
import haystacks from '@haystacks/sync';
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
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/02/08
 */
const customEchoCommand = function(inputData, inputMetaData) {
  let functionName = customEchoCommand.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, false];
  returnData[1] = inputData + ' clientStringParsing.customEchoCommand';
  console.log(returnData[1]);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

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
const bossPanic = function(inputData, inputMetaData) {
  let functionName = bossPanic.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
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
  let systemColorLogsEnabled = haystacks.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);

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
      fastTypingOutput = haystacks.executeBusinessRules([inputData[5], ''], [biz.cstringToBoolean]);
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
      noColoredLineCount = haystacks.executeBusinessRules([num.c1, [noColoredLinesMaxLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
      enableColoredLine = true;
    }
    if (coloredLineCount <= 0 && enableColoredLine === true) {
      coloredLineCount = haystacks.executeBusinessRules([num.c2, [coloredLinesMaxLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
      enableColoredLine = false;
    }
    stringLength = haystacks.executeBusinessRules([num.c1, [lineLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
    // Now we will generate a number between 0 and the string length, this will be the color limit so we can break the ine up randomly into a beginning segment and an ending segment.
    // Each segment of the line will get a different random foreground font color and random background font color.
    colorBreakPoint = haystacks.executeBusinessRules([num.c1, [stringLength, false, false]], [biz.crandomlyGenerateNumberInRange]);
    stringToPrint = haystacks.executeBusinessRules([stringLength, gen.cMostSpecialCharacters], [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]);
    if (enableColoredLine === true && systemColorLogsEnabled === true) {
      subString1 = stringToPrint.substr(0, colorBreakPoint);
      subString2 = stringToPrint.substr(colorBreakPoint, stringToPrint.length);
      // Determine if the first part of the string will have a light foreground and dark background or dark foreground and light background.
      if (haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]) === true) {
        brightColor1 = haystacks.executeBusinessRules([200, 255], [biz.cgenerateRandomBrightColor]);
        darkColor1 = haystacks.executeBusinessRules([0, 60], [biz.cgenerateRandomDarkColor]);
        colorMode1 = haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]);
        if (colorMode1 === true) {
          subString1 = chalk.rgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
          subString2 = chalk.bgRgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
        } else {
          subString1 = chalk.rgb(darkColor1[0], darkColor1[1], darkColor1[2])(subString1);
          subString2 = chalk.bgRgb(brightColor1[0], brightColor1[1], brightColor1[2])(subString1);
        }
      } // End-if (haystacks.executeBusinessRule(biz.crandomlyGenerateBooleanValue, '', '') === true)
      if (haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]) === true) {
        brightColor2 = haystacks.executeBusinessRules([200, 255], [biz.cgenerateRandomBrightColor]);
        darkColor2 = haystacks.executeBusinessRules([0, 60], [biz.cgenerateRandomDarkColor]);
        colorMode2 = haystacks.executeBusinessRules(['', ''], [biz.crandomlyGenerateBooleanValue]);
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
        process.stdout.write(stringToPrint.charAt(i));
        haystacks.executeBusinessRules([speedTypingPerformanceIndex, ''], [wrd.csleep]);
      } // End-for (let i = 0; i < stringToPrint.length; i++)
      console.log('\r'); // Carriage return
    } else {
      console.log(stringToPrint);
    }
    haystacks.executeBusinessRules([performanceIndex, ''], [wrd.csleep]);
  } // End-while (true) // End of the infinite loop
};

export default {
  customEchoCommand,
  bossPanic
};
