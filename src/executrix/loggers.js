/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration files to define which
 * modules/files & functions should participate in logging operations.
 * Additional refactoring enables a schema driven logging control logic, where-as
 * the schema can be overridden by a client application/framework to provide custom client specific logging logic.
 * @requires module:ruleBroker
 * @requires module:chiefData
 * @requires module:colorizer
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2024/12/31 - Originally 2021/10/18
 * @copyright Copyright © 2024-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import chiefData from '../controllers/chiefData.js';
import colorizer from './colorizer.js';
import configurator from './configurator.js';
import socketsClient from './socketsClient.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, clr, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.executrix.loggers.
// eslint-disable-next-line no-unused-vars
const namespacePrefix =  wrd.cframework + bas.cDot + wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

let socketClient = undefined;
socketsClient().then(r => {
  if (socketClient == undefined) socketClient = r;
});

/**
 * @function consoleLog
 * @description Uses the classPathControlFlag to look up to a namespace configuration setting, or
 * a configuration control flag to determine if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @NOTE When it comes to dumping large amounts of data out of a script the console will not do.
 * Dumping data to an output log file is critical to dumping certain tests and workflows.
 * @NOTE The console logger must also be able to transmit console logs across a web socket to a remote server.
 * @param {string} classPathControlFlag The class path for the caller of this function file.function or class.method
 * to a configuration setting control flag that is either true or false, OR
 * the name of a control flag that should be evaluated as either true or false to indicate if
 * the console log, file log, and log transmission should be performed.
 * @NOTE console log, file log and log transmission are also each individually controlled by global configuration control flags,
 * independently of the schema, or class path configuration settings.
 * @param {string} message The message or data contents that should be dumped to the various output channels.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2024/12/31 - Originally 2021/12/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
async function consoleLog(classPathControlFlag, message) {
  // let functionName = consoleLog.name;
  if (Object.keys(D).length !== 0 && message !== undefined) { // Make sure we don't log anything if we haven't yet loaded the configuration data.
    let consoleLogEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cconsoleLogEnabled);
    if (consoleLogEnabled === true) {
      // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
      // console.log(`classPath is: ${classPathControlFlag}`);
      // console.log(`message is: ${message}`);

      let logFile = await getLogFileNameAndPath();
      // logFile is:
      // console.log('logFile is: ' + logFile);
      let debugFunctionSetting = false;
      let debugFileSetting = false;
      let debugSetting = false;
      let configurationName = '';
      let configurationNamespace = '';
      let controlFlagObject = await loggerSchemaGateLogic(classPathControlFlag);
      // controlFlagObject is:
      // console.log('controlFlagObject is: ' + JSON.stringify(controlFlagObject));

      if (controlFlagObject.isControlFlag) {
        // We found a recognized control flag.
        if (controlFlagObject.controlFlagValue === true) {
          // Proceed with logging
          debugSetting = true;
        } else if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdebugTestExhaustive) === true) {
          // Possibly skip unless debugTestExhaustive is on, etc.
          debugSetting = true;
        }
      } else {
        // console.log('Determine if there is a configuration setting for the class path.');
        configurationName = await configurator.processConfigurationNameRules(classPathControlFlag);
        // console.log(`configurationName is: ${configurationName}`);
        configurationNamespace = await configurator.processConfigurationNamespaceRules(classPathControlFlag);
        // console.log(`configurationNamespace is: ${configurationNamespace}`);
        debugFunctionSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);
        // console.log(`debugFunctionSetting is: ${debugFunctionSetting}`);
        debugFileSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, '');
        // console.log(`debugFileSetting is: ${debugFileSetting}`);
        if (debugFunctionSetting || debugFileSetting) {
          debugSetting = true;
        } else if ((debugFunctionSetting === undefined && debugFileSetting === undefined) ||
          (debugFunctionSetting === undefined && debugFileSetting === false) ||
          (debugFunctionSetting === false && debugFileSetting === undefined) ||
          (debugFunctionSetting === false && debugFileSetting === false)) {
          debugSetting = false; // Make sure we catch these special combinations of cases before we handle the else-clause below.
        } else {
          debugSetting = true;
        }
      }
      // debugSetting is:
      // console.log('debugSetting is: ' + debugSetting);
      if (debugSetting === true) {
        // You can also reference other keys in controlFlagObject:
        let fileFlagKey = controlFlagObject.logFileConfigFlagName; // 'logFileEnabled'
        let socketFlagKey = controlFlagObject.logSocketTransmissionFlagName; // 'logToSocketTransmissionEnabled'
        // fileFlagKey is:
        // console.log('fileFlagKey is: ' + fileFlagKey);
        // socketFlagKey is:
        // console.log('socketFlagKey is: ' + socketFlagKey);

        // Then do something like:
        let isFileLoggingOn = await configurator.getConfigurationSetting(wrd.csystem, fileFlagKey);
        let isSocketLoggingOn = await configurator.getConfigurationSetting(wrd.csystem, socketFlagKey);
        // isFileLoggingOn is:
        // console.log('isFileLoggingOn is: ' + isFileLoggingOn);
        // isSocketLoggingOn is:
        // console.log('isSocketLoggingOn is: ' + isSocketLoggingOn);

        let processLogOptions = {
          logFile: logFile,
          isControlFlag: controlFlagObject.isControlFlag,
          classPathControlFlag: classPathControlFlag,
          configurationNamespace: configurationNamespace,
          configurationName: configurationName,
          debugFileSetting: debugFileSetting,
          debugFunctionSetting: debugFunctionSetting,
          message: message,
          isFileLoggingOn: isFileLoggingOn,
          isSocketLoggingOn: isSocketLoggingOn,
          classPath: classPathControlFlag
        }
        await consoleLogProcess(processLogOptions);
      }
    } // end-if (consoleLogEnabled === true)
  } else if (message == undefined) { // end-if (Object.keys(D).length !== 0 && message !== undefined)
    console.log(msg.cWarningMessageIsUndefined);
    console.log(msg.cclassPathIs + classPathControlFlag);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function loggerSchemaGateLogic
 * @description Looks up the classPathControlFlag in the loggerSchema to determine if the logging should proceed or not.
 * And also if the control flag value is found or not found which may determine if the consoleLog will proceed to check or not check
 * the debug configuration namespace from the classPath.
 * @param {string} classPathControlFlag The class path for the caller of the consoleLog function file.function or class.method
 * to a configuration setting control flag that is either true or false, OR
 * the name of a control flag that should be evaluated as either true or false to indicate if
 * the console log, file log, and log transmission should be performed.
 * @return {object} A JSON object that contains some meta-data and boolean values. 2 booleans to indicate if the control flag is
 * a control flag that was found or not found, and also a second boolean that indicates if the control flag value is
 * true or false to indicate if the console logging should proceed, or not proceed.
 * the JSON object structure returned will be as follows:
 * {
 *   isControlFlag: true,
 *   controlFlagValue: true,
 *   logFileConfigFlagName: logFileEnabled
 *   logSocketTransmissionFlagName: logToSocketTransmissionEnabled
 *   ...all additional flagNames
 * }
 * @author Seth Hollingsead
 * @date 2024/12/31
 */
async function loggerSchemaGateLogic(classPathControlFlag) {
  // let functionName = loggerSchemaGateLogic.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPathControlFlag}`);
  let loggerSchema = await chiefData.getSchemaData(sys.cloggerSchema);
  let resultObject = {
    isControlFlag: false,
    controlFlagValue: false
  }

  if (loggerSchema && loggerSchema[sys.ccontrolFlags] && loggerSchema[sys.cflagNames]) {
    let flagNames = loggerSchema[sys.cflagNames];
    for (const [flagKey, flagValue] of Object.entries(flagNames)) {
      resultObject[flagKey] = flagValue;
    }
    let controlFlagsMap = loggerSchema[sys.ccontrolFlags];
    if (Object.hasOwn(controlFlagsMap, classPathControlFlag)) {
      // The user passed something like "Warning" or "Info" that exists in the schema.
      resultObject.isControlFlag = true;
      resultObject.controlFlagValue = controlFlagsMap[classPathControlFlag] === true;
    }
  }
  // console.log('resultObject is: ' + JSON.stringify(resultObject));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return resultObject;
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
 * @param {boolean} passFail True or False to indicate if the pass or fail message should be displayed to the console log.
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
    if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsValidationFailMessages) === true) {
      outputMessage = wrd.cFAILED + bas.cSpace + bas.cDoubleDash + bas.cSpace + message + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAILED; // `FAILED -- ${message} -- FAILED`;
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, blackColorArray, true);
      outputMessage = await colorizer.colorizeMessageSimple(outputMessage, redColorArray, false);
      console.log(outputMessage);
    } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplaySummaryConstantsValidationFailMessages) === true)
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function consoleLogProcess
 * @description A function that will determine how and where log messages are logged.
 * logs could be logged to  the console, to a log file, and to a socket client that will transmit the
 * log message across a web-socket to a remote socket server.
 * @param {*} logOptions A JSON object that contains data and meta-data that will be used to determine
 * how and where a console log message should be logged. The object example prototype is:
 * logFile: logFile,
 * isControlFlag: controlFlagObject.isControlFlag,
 * classPathControlFlag: classPathControlFlag,
 * configurationNamespace: configurationNamespace,
 * configurationName: configurationName,
 * debugFileSetting: debugFileSetting,
 * debugFunctionSetting: debugFunctionSetting,
 * message: message,
 * isFileLoggingOn: isFileLoggingOn,
 * ifSocketLoggingOn: isSocketLoggingOn,
 * classPath: classPathControlFlag
 * @return {void}
 * @author Seth Hollingsead
 * @date 2024/12/31
 */
async function consoleLogProcess(logOptions) {
  // let functionName = consoleLogProcess.name;
  let {
    logFile,
    isControlFlag,
    classPathControlFlag,
    configurationNamespace,
    configurationName,
    debugFileSetting,
    debugFunctionSetting,
    message,
    isFileLoggingOn,
    isSocketLoggingOn,
    classPath
  } = logOptions;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let outputMessage = '';
  // logFile is:
  // console.log('logFile is: ' + logFile);
  // isControlFlag is:
  // console.log('isControlFlag is: ' + isControlFlag);
  // classPathControlFlag is:
  // console.log('classPathControlFlag is: ' + classPathControlFlag);
  // configurationNamespace is:
  // console.log('configurationNamespace is: ' + configurationNamespace);
  // configurationName is:
  // console.log('configurationName is: ' + configurationName);
  // debugFileSetting is:
  // console.log('debugFileSetting is: ' + debugFileSetting);
  // debugFunctionSetting is:
  // console.log('debugFunctionSetting is: ' + debugFunctionSetting);
  // message is:
  // console.log('message is: ' + message);
  // isFileLoggingOn is:
  // console.log('isFileLoggingOn is: ' + isFileLoggingOn);
  // isSocketLoggingOn is:
  // console.log('isSocketLoggingOn is: ' + isSocketLoggingOn);
  // classPath is:
  // console.log('classPath is: ' + classPath);

  if (isControlFlag) {
    // It's a generic control flag message scenario
    // console.log('message is: ' + message);
    outputMessage = message;
    // outputMessage = await colorizer.colorizeMessage(message, classPath, functionName, undefined, undefined, true);
  } else {
    outputMessage = await colorizer.colorizeMessage(message, configurationNamespace, configurationName, debugFileSetting, debugFunctionSetting, false);
  }
  // If we need to apply additional isMessageValid logic, do it here!!
  console.log(outputMessage);

  if (isFileLoggingOn && logFile) {
    await printMessageToFile(logFile, outputMessage);
  }

  if (isSocketLoggingOn) {
    // console.log('socketClient.sending message: ' + outputMessage);
    socketClient.send(outputMessage);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return;
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
  loggerSchemaGateLogic,
  consoleTableLog,
  constantsValidationSummaryLog,
  consoleLogProcess,
  getLogFileNameAndPath,
  printMessageToFile
}