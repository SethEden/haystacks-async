/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:ruleBroker
 * @requires module:colorizer
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/18
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import colorizer from './colorizer.js';
import configurator from './configurator.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, clr, cfg, gen, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.loggers.
// eslint-disable-next-line no-unused-vars
const namespacePrefix =  wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function consoleLog
 * @description Compares the class path to a series of configuration settings to determine
 * if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @NOTE When it comes to dumping large amounts of data out of a script the console will not do,
 * And dumping data to an output log file is critical to debugging certain tests and workflows.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function consoleLog(classPath, message) {
  // let functionName = consoleLog.name;
  if (Object.keys(D).length !== 0 && message !== undefined) { // Make sure we don't log anything if we haven't yet loaded the configuration data.
    let consoleLogEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cconsoleLogEnabled);
    if (consoleLogEnabled === true) {
      // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
      // console.log(`classPath is: ${classPath}`);
      // console.log(`message is: ${message}`);
      // let logFile = configurator.getConfigurationSetting(wrd.csystem, cfg.cclientRootPath);
      // if (logFile !== undefined) {
      //   logFile = logFile + bas.cDoubleForwardSlash + wrd.clogs;
      //   // console.log(`Logfile before path.resolve is: ${logFile}`);
      //   logFile = path.resolve(logFile);
      //   // console.log(`Logfile after path.resolve is: ${logFile}`);
      //   logFile = logFile + bas.cDoubleForwardSlash + configurator.getConfigurationSetting(wrd.csystem, cfg.clogFileName);
      //   logFile = path.resolve(logFile);
      //   // console.log(`logFile after adding the log filename: ${logFile}`);
      // }
      let logFile = await getLogFileNameAndPath();

      let debugFunctionSetting = false;
      let debugFileSetting = false;
      let debugSetting = false;
      let configurationName = '';
      let configurationNamespace = '';

      // console.log('Determine if there is a configuration setting for the class path.');
      configurationName = await configurator.processConfigurationNameRules(classPath);
      // console.log(`configurationName is: ${configurationName}`);
      configurationNamespace = await configurator.processConfigurationNamespaceRules(classPath);
      // console.log(`configurationNamespace is: ${configurationNamespace}`);
      debugFunctionSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);
      // console.log(`debugFunctionSetting is: ${debugFunctionSetting}`);
      debugFileSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, '');
      // console.log(`debugFileSetting is: ${debugFileSetting}`);
      if (debugFunctionSetting || debugFileSetting) {
        debugSetting = true;
      }
      // console.log(`debugSetting is: ${debugSetting}`);
      // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
      if (logFile !== undefined && (logFile.toUpperCase().includes(gen.cLOG) || logFile.toUpperCase().includes(gen.cTXT))) {
        await consoleLogProcess(debugSetting, logFile, classPath, message, true);
      } else { // No text log file specified, proceed with the same process for console only.
        await consoleLogProcess(debugSetting, undefined, classPath, message, false);
      }
      // console.log(`END ${namespacePrefix}${functionName} function`);
    } // end-if (consoleLogEnabled === true)
  } else if (message === undefined) { // end-if (Object.keys(D).length !== 0 && message !== undefined)
    // console.log(msg.cWarningMessageIsUndefined);
    // console.log(msg.cclassPathIs + classPath);
  }
}

/**
 * @function consoleTableLog
 * @description Prints out a table with the data provided in the input tableDataArray.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {array<object>} tableData An array of objects that should be printed to the console as if it was data.
 * @param {array<string>} columnNames An array of column names that should be used when outputting the table.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
async function consoleTableLog(classPath, tableData, columnNames) {
  // let functionName = consoleTableLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`tableData is: ${JSON.stringify(tableData)}`);
  // console.log(`columnNames is: ${JSON.stringify(columnNames)}`);
  console.table(tableData, columnNames);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function constantsValidationSummaryLog
 * @description Displays a constants log validation summary pass-fail results depending on the appropriate settings flag, which is passed in by the caller.
 * @param {string} message The message that should be displayed, if the setting determines that it should be displayed.
 * @param {boolean} passFail True or False to indicate if the pas or fail message should be displayed to the console log.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/29
 */
async function constantsValidationSummaryLog(message, passFail) {
  // let functionName = constantsValidationSummaryLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`message is: ${message}`);
  // console.log(`passFail is: ${passFail}`);
  let outputMessage = '';
  let blackColorArray = await colorizer.getNamedColorData(clr.cBlack, [0,0,0]);
  let greenColorArray = await colorizer.getNamedColorData(clr.cGreen, [0,255,0]);
  let redColorArray = await colorizer.getNamedColorData(clr.cRed, [255,0,0]);

  if (passFail === true) {
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsValidationPassMessages) === true) {
      outputMessage = wrd.cPASSED + bas.cSpace + bas.cDoubleDash + bas.cSpace + message + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cPASSED; // `PASSED -- ${message} -- PASSED`;
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, blackColorArray, true);
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, greenColorArray, false);
      console.log(outputMessage);
    } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsValidationPassMessages) === true)
  } else { // passFail === false
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsVaidationFailMessages) === true) {
      outputMessage = wrd.cFAILED + bas.cSpace + bas.cDoubleDash + bas.cSpace + message + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAILED; // `FAILED -- ${message} -- FAILED`;
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, blackColorArray, true);
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, redColorArray, false);
      console.log(outputMessage);
    } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsVaidationFailMessages) === true)
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function consoleLogProcess
 * @description A function that will print a message to a log file and the console, or just the console.
 * The output depends on if there was a txt/log file specified or not.
 * @param {boolean} debugSetting A TRUE or FALSE value to indicate if the log action is enabled or not.
 * @param {string} logFile The path to the log file where the message should be logged.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output (log file and/or console).
 * @param {boolean} loggingToFileAndConsole A TRUE or FALSE value to indicate if the log should be done to the specified log file and the console.
 * If no log file is specified by the caller/settings system then this will be FALSE and only the console will be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function consoleLogProcess(debugSetting, logFile, classPath, message, loggingToFileAndConsole) {
  // let functionName = consoleLogProcess.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`debugSetting is: ${debugSetting}`);
  // console.log(`logFile is: ${logFile}`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  // console.log(`loggingToFileAndConsole is: ${loggingToFileAndConsole}`);
  let outputMessage = '';
  let messageIsValid = false;

  if (debugSetting !== undefined && debugSetting === true) {
    // console.log('The debugSetting is not undefined and also true.');
    outputMessage = await parseClassPath(logFile, classPath, message);
    // console.log(`outputMessage is: ${outputMessage}`);
    // console.log(`message is: ${message}`);
    messageIsValid = await validMessage(outputMessage, message);
    if (messageIsValid === true) {
      await console.log(outputMessage);
    }
    if (messageIsValid === true && loggingToFileAndConsole === true) {
      await printMessageToFile(logFile, outputMessage);
      // console.log('DONE printing the message to the logFile');
    } // End-if (messageIsValid === true && loggingToFileAndConsole === true)
  } else if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdebugTestExhaustive) === true) {
    // console.log('else-block the debugTestExhaustive setting is true!');
    // TODO: Add rule here to replace double percent with message/class-path.
    // Debug Exhaustive is probably not the best, we might want to consider another configuration setting to
    // enable or disable the console specifically. Right now there is no real business need for it.
    // If you really wanted to disable it just comment it out here.
    await console.log(outputMessage);
    if (loggingToFileAndConsole === true) {
      await printMessageToFile(logFile, outputMessage);
      // console.log('done printing the message to the log file.');
    } // End-if (loggingToFileAndConsole === true)
  }
  // console.log('Past all of the if-else-if-else blocks of code.');
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function validMessage
 * @description Looks at the parsed/processed output message and the original message
 * to determine if the message is a valid message to dump to the console and/or the log file (if specified).
 * @param {string|integer|boolean|object} outputMessage The message that has been parsed/processed.
 * @param {string|integer|boolean|object} originalMessage The original message passed in before processing/parsing.
 * @return {boolean} A TRUE or FALSE to indicate if the output message should be dumped to the log file and/or the console.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function validMessage(outputMessage, originalMessage) {
  // let functionName = validMessage.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`outputMessage is: ${outputMessage}`);
  // console.log(`originalMessage is: ${originalMessage}`);
  let returnData = false;

  // This first if-condition catches the case that the output message has already
  // been parsed and modified according to the class path.
  if (outputMessage !== false && outputMessage !== originalMessage) {
    returnData = true;
  } else if (outputMessage !== false && outputMessage.includes(bas.cDoublePercent) === false) {
    // This else-if condition catches the case that the caller just wants to dump a generic message,
    // that doesn't have a class-path designation.
    returnData = true;
  } else if (outputMessage !== false && outputMessage.includes(msg.cActualColonDoublePercent) === true) {
    // This else-if condition catches the special case that the caller wants to dump constants validation generic data to the console.
    // that doesn't have a class-path designation.
    returnData = true;
  }
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function parseClassPath
 * @description Parses the class path and message pulling it apart for logging and looking at custom debug settings.
 * @param {string} logFile The file name and path to the log file where the data should be printed.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {string} Returns the message that should be printed out to the console and logged to the log file.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function parseClassPath(logFile, classPath, message) {
  let functionName = parseClassPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`logFile is: ${logFile}`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  let configurationName = '';
  let configurationNamespace = '';
  let debugFunctionsSetting = false;
  let debugFilesSetting = false;
  let returnData = '';

  configurationName = await configurator.processConfigurationNameRules(classPath);
  // console.log(`configurationName is: ${configurationName}`);
  configurationNamespace = await configurator.processConfigurationNamespaceRules(classPath);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // printMessageToFile(logFile, `Getting configuration setting value for: debugFunctions|${className}.${classFunctionName}`);
  // console.log(`Getting configuration setting value for: ${configurationNamespace}.${configurationName}`);
  debugFunctionsSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);
  // printMessageToFile(logFile, `debugFunctionsSetting is: ${debugFunctionsSetting}`);
  // console.log(`debugFunctionsSetting is: ${debugFunctionsSetting}`);
  debugFilesSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, '');
  // printMessageToFile(logFile, `debugFilesSetting is: ${debugFilesSetting}`);
  // console.log(`debugFilesSetting is: ${debugFilesSetting}`);
  if (debugFunctionsSetting || debugFilesSetting) {
    message = await colorizer.colorizeMessage(message, configurationNamespace, configurationName, debugFilesSetting, debugFunctionsSetting, false);
    // if (message.includes(bas.cDoublePercent)) {
    //   let myNameSpace = configurationNamespace + bas.cDot + configurationName;
    //   // console.log('message is: ' + message);
    //   // console.log('myNameSpace is: ' + myNameSpace);
    //   // console.log('rules is: ' + JSON.stringify(rules));
    //   // NOTE: Calling this directly is an anti-pattern, but it is necessary at this time because of a circular dependency with loggers.
    //   // We will need to refactor the business rules to accept a callback function that does the logging.
    //   // Essentially we will need to use a dependency injection design pattern to prevent the chance of a circular dependency.
    //   // message = stringParsingUtilities.replaceDoublePercentWithMessage(message, [bas.cDoublePercent, myNameSpace]);
    //   message = ruleBroker.processRules([message, [bas.cDoublePercent, myNameSpace]], rules);
    // }
    // console.log('setting the returnData to the message: ' + message);
    returnData = message;
  } else if ((debugFunctionsSetting === undefined && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === undefined && debugFilesSetting === false) ||
  (debugFunctionsSetting === false && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === false && debugFilesSetting === false)) {
    // console.log('Something is undefined && false or some combination of both, return false');
    returnData = false;
  } else {
    message = await colorizer.colorizeMessage(message, classPath, functionName, undefined, undefined, true);
    returnData = message;
  }
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function getLogFileNameAndPath
 * @description Determines, using configuration settings what the log file name and path should be.
 * @return {string} The full path and file name for the log file.
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
async function getLogFileNameAndPath() {
  // let functionName = getLogFileNameAndPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = '';
  let logFile = await configurator.getConfigurationSetting(wrd.csystem, cfg.cclientRootPath);
  if (logFile !== undefined) {
    logFile = logFile + bas.cDoubleForwardSlash + wrd.clogs;
    // console.log(`Logfile before path.resolve is: ${logFile}`);
    logFile = path.resolve(logFile);
    // console.log(`Logfile after path.resolve is: ${logFile}`);
    logFile = logFile + bas.cDoubleForwardSlash + await configurator.getConfigurationSetting(wrd.csystem, cfg.clogFileName);
    logFile = path.resolve(logFile);
    // console.log(`logFile after adding the log filename: ${logFile}`);
  } // End-if (logFile !== undefined)
  returnData = logFile;
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function printMessageToFile
 * @description Prints a message to a log/text file.
 * @param {string} file The file path and file name where message data should be printed.
 * @param {string} message The message that should be logged to the log file if the specified flag is true.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function printMessageToFile(file, message) {
  // let functionName = printMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`file is: ${file}`);
  // console.log(`message is: ${message}`);
  let dateTimeStamp = '';
  if (!file.includes('undefined')) { // NOTE: This usage of the string undefined, must be hard-coded here.
    // '!file.includes(undefined)'
    // console.log(msg.cprintMessageToFile01);
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.clogFileEnabled) === true) {
      // console.log('LogFileEnabled = true');
      if (message) {
        message = await colorizer.removeFontStyles(message);
      }
      if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cincludeDateTimeStampInLogFiles) === true) {
        // Individual messages need to have a time stamp on them. So lets sign the message with a time stamp.
        dateTimeStamp = await ruleBroker.processRules([gen.cYYYY_MM_DD_HH_mm_ss_SSS, ''], [biz.cgetNowMoment]);
        // console.log(`dateTimeStamp is: ${dateTimeStamp}`);
        message = `${dateTimeStamp}: ${message}`;
      }
      await ruleBroker.processRules([file, message], [biz.cappendMessageToFile]);
    } else {
      // 'ERROR: Failure to log to file: '
      await console.log(msg.cprintMessageToFile02 + file);
    }
  } else {
    // 'ERROR: Log File includes undefined.'
    await console.log(msg.cprintMessageToFile03);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  consoleLog,
  consoleTableLog,
  constantsValidationSummaryLog,
  getLogFileNameAndPath,
  printMessageToFile
};
