/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and tracking time durations.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/19
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from './loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import moment from 'moment';
import path from 'path';

const {bas, fnc, gen, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.timers.
const namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to
 * return the value for the day, month, year, hour, minute, second and millisecond.
 * @return {string} A time stamp string that has been formatted accroding to the input format.
 * @author Seth Hollingsead
 * @date 2021/10/19
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
 function getNowMoment(formatting) {
   let functionName = getNowMoment.name;
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   // console.log(`formatting is: ${formatting}`);
   let returnData = '';
   returnData = moment().format(formatting);
   // console.log(`returnData is: ${returnData}`);
   // console.log(`END ${namespacePrefix}${functionName} function`);
   return returnData;
 };

/**
 * @function computeDeltaTime
 * @description Computes the time difference between two different date-time stamps in milliseconds.
 * @param {string} startTime The start of the time period that should be computed.
 * @param {string} endTime The end of the time period that should be computed.
 * @return {integer} The difference between the beginning time and ending time in milliseconds.
 * @author Seth Hollingsead
 * @date 2021/10/19
 */
function computeDeltaTime(startTime, endTime) {
  let functionName = computeDeltaTime.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`startTime is: ${startTime}`);
  // console.log(`endTime is: ${endTime}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstartTimeIs + startTime);
  loggers.consoleLog(namespacePrefix + functionName, msg.cendTimeIs + endTime);
  let deltaTimeResult;
  startTime = moment(startTime, gen.cYYYYMMDD_HHmmss_SSS);
  endTime = moment(endTime, gen.cYYYYMMDD_HHmmss_SSS);
  deltaTimeResult = endTime.diff(startTime); // Should wok in milliseconds out of the box!
  loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaTimeResultIs + deltaTimeResult);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`deltaTimeResult is: ${deltaTimeResult}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return deltaTimeResult;
};

/**
 * @function reformatDeltaTime
 * @description Converts a time interval into a different kind of format.
 * @param {integer} deltaTime A time interval measured in milliseconds.
 * @param {string} format The formatting template that should be used to format the time interval.
 * @return {string} A time interval formatted according to the input format template string.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function reformatDeltaTime(deltaTime, format) {
  let functionName = reformatDeltaTime.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // deltaTime is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaTimeIs + deltaTime);
  // format is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cformatIs + format);
  let returnDeltaTime = '';
  returnDeltaTime = moment.duration(deltaTime).format(format);
  // returnDeltaTime is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDeltaTimeIs + returnDeltaTime);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnDeltaTime;
};

/**
 * @function sleep
 * @description Causes the JavaScript code to wait for a period of time defined by the input.
 * @param {integer} sleepTime The number of milliseconds that the system should sleep for.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 * @reference {@link https://www.sitepoint.com/delay-sleep-pause-wait/}
 */
function sleep(sleepTime) {
  let functionName = sleep.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // sleepTime is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csleepTimeIs + sleepTime);
  const date = moment();
  let currentDate = null;
  do {
    currentDate = moment();
  } while (currentDate - date < sleepTime);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

export default {
  [fnc.cgetNowMoment]: (formatting) => getNowMoment(formatting),
  [fnc.ccomputeDeltaTime]: (startTime, endTime) => computeDeltaTime(startTime, endTime),
  [fnc.creformatDeltaTime]: (deltaTime, format) => reformatDeltaTime(deltaTime, format),
  [fnc.csleep]: (sleepTime) => sleep(sleepTime)
};
