/**
 * @file colorizer.js
 * @module colorizer
 * @description Contains all of the functions needed to manage, parse and control font styles and font colors.
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import configurator from '../executrix/configurator.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import path from 'path';

const {bas, clr, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.colorizer.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function colorizeMessageSimple
 * @description Applies a color setting to an entire message, according to the inputs, background or foreground font color settings.
 * @param {string} message The message that should be formatted and returned according to the inputs, and controlled by the system configuration setting.
 * @param {array<integers>} colorArray The RGB color array that describes the color that should be applied to the message.
 * @param {boolean} isForeground A True or False to indicate if the color setting should be applied to the foreground or not.
 * If False, then apply to the background.
 * @return {string} The message with the color setting applied.
 * @author Seth Hollingsead
 * @date 2022/03/29
 */
async function colorizeMessageSimple(message, colorArray, isForeground) {
  // let functionName = colorizeMessageSimple.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`message is: ${message}`);
  // console.log(`colorArray is: ${JSON.stringify(colorArray)}`);
  // console.log(`isForeground is: ${isForeground}`);
  let colorizedMessage = message;
  let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
  if (colorizeLogsEnabled === true) {
    let red = colorArray[0];
    let green = colorArray[1];
    let blue = colorArray[2];
    if (isForeground === true) {
      colorizedMessage = chalk.rgb(red,green,blue)(colorizedMessage);
    } else {
      colorizedMessage = chalk.bgRgb(red,green,blue)(colorizedMessage);
    }
  } // End-if (colorizeLogsEnabled === true)
  // console.log('colorizedMessage is: ' + colorizedMessage);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return colorizedMessage;
}

/**
 * @function colorizeMessage
 * @description Applies color settings to various portions of the message according to the settings from the configuration system.
 * @param {string} message The message that should be formatted and returned to be logged to the console and/or logged to a log file.
 * @param {string} className The name of the module/file that made the log call.
 * @param {string} functionName The name of the function that made the log call.
 * @param {boolean} debugFilesSetting A True or False value to indicate if the log should happen according to the file/module name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} debugFunctionsSetting A True or False value to indicate if the log should happen according to the function/method name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} flatMessageLog A True or False value to indicate if we are logging a flat message or if we should do additional processing.
 * We will probably do some additional processing either way, but there is a difference in the workflows.
 * For one a non-flat message will certainly have to replace a "%%" ith the class path (className,functionName),
 * and the associated formatting that goes with that according to the settings.
 * @return {string} A colorized version of the message.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
async function colorizeMessage(message, className, callerFunctionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog) {
  // let functionName = colorizeMessage.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`message is: ${message}`);
  // console.log(`className is: ${className}`);
  // console.log(`callerFunctionName is: ${callerFunctionName}`);
  // console.log(`debugFilesSetting is: ${debugFilesSetting}`);
  // console.log(`debugFunctionsSetting is: ${debugFunctionsSetting}`);
  // console.log(`flatMessageLog is: ${flatMessageLog}`);
  let colorizedMessage;
  let messageContent;
  let messageContentPrefix;
  let messageContentSuffix;
  let messageData;
  let processingMessageData = false;
  let debugFilesModuleFontStyleSetting = wrd.cDefault;
  let debugFilesFunctionFontStyleSetting = wrd.cDefault;
  let debugFilesMessageFontStyleSetting = wrd.cDefault;
  let debugFilesDataFontStyleSetting = wrd.cDefault;
  let debugFilesModuleFontColorSetting = wrd.cDefault;
  let debugFilesFunctionFontColorSetting = wrd.cDefault;
  let debugFilesMessageFontColorSetting = wrd.cDefault;
  let debugFilesDataFontColorSetting = wrd.cDefault;
  let debugFilesModuleFontBackgroundColorSetting = wrd.cDefault;
  let debugFilesFunctionFontBackgroundColorSetting = wrd.cDefault;
  let debugFilesMessageFontBackgroundColorSetting = wrd.cDefault;
  let debugFilesDataFontBackgroundColorSetting = wrd.cDefault;

  let debugFunctionsModuleFontStyleSetting = wrd.cDefault;
  let debugFunctionsFunctionFontStyleSetting = wrd.cDefault;
  let debugFunctionsMessageFontStyleSetting = wrd.cDefault;
  let debugFunctionsDataFontStyleSetting = wrd.cDefault;
  let debugFunctionsModuleFontColorSetting = wrd.cDefault;
  let debugFunctionsFunctionFontColorSetting = wrd.cDefault;
  let debugFunctionsMessageFontColorSetting = wrd.cDefault;
  let debugFunctionsDataFontColorSetting = wrd.cDefault;
  let debugFunctionsModuleFontBackgroundColorSetting = wrd.cDefault;
  let debugFunctionsFunctionFontBackgroundColorSetting = wrd.cDefault;
  let debugFunctionsMessageFontBackgroundColorSetting = wrd.cDefault;
  let debugFunctionsDataFontBackgroundColorSetting = wrd.cDefault;

  // We need a 3rd set of variables because we wil need to aggregate these settings together to determine which ones are in effect.
  // One way is to aggregate each setting individually and let which ever one is defined be in effect.
  // Another way is to let the master debug functions and/or debug files setting be the controlling factor.
  // However, if both of them are set to true then we should default to determine which one is in effect from either one.
  // This will also let us do additional processing on the values that come from the settings file.
  // Because some of those settings like the colors and the font styles might have multiple sub-settings.
  // The color setting will of course have R,G,B; And the style setting might have Bold|Underline, so we will of curse have to parse those out.
  let aggregateModuleFontStyleUnderline = false;
  let aggregateModuleFontStyleBold = false;
  let aggregateFunctionFontStyleUnderline = false;
  let aggregateFunctionFontStyleBold = false;
  let aggregateMessageFontStyleUnderline = false;
  let aggregateMessageFontStyleBold = false;
  let aggregateDataFontStyleUnderline = false;
  let aggregateDataFontStyleBold = false;
  let aggregateModuleFontColorSetting = {};
  let aggregateFunctionFontColorSetting = {};
  let aggregateMessageFontColorSetting = {};
  let aggregateDataFontColorSetting = {};
  let aggregateModuleFontBackgroundColorSetting = {};
  let aggregateFunctionFontBackgroundColorSetting = {};
  let aggregateMessageFontBackgroundColorSetting = {};
  let aggregateDataFontBackgroundColorSetting = {};
  let aggregateUnderlineBoldArray = [];
  let messageBrokenDown = [];

  // debugFunctionsSetting = configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);

  debugFilesModuleFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cModuleFontStyle);
  // console.log('debugFilesModuleFontStyleSetting is: ' + debugFilesModuleFontStyleSetting);
  debugFilesFunctionFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cFunctionFontStyle);
  // console.log('debugFilesFunctionFontStyleSetting is: ' + debugFilesFunctionFontStyleSetting);
  debugFilesMessageFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cMessageFontStyle);
  // console.log('debugFilesMessageFontStyleSetting is: ' + debugFilesMessageFontStyleSetting);
  debugFilesDataFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cDataFontStyle);
  // console.log('debugFilesDataFontStyleSetting is: ' + debugFilesDataFontStyleSetting);
  debugFilesModuleFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cModuleFontColor);
  // console.log('debugFilesModuleFontColorSetting is: ' + debugFilesModuleFontColorSetting);
  debugFilesFunctionFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cFunctionFontColor);
  // console.log('debugFilesFunctionFontColorSetting is: ' + debugFilesFunctionFontColorSetting);
  debugFilesMessageFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cMessageFontColor);
  // console.log('debugFilesMessageFontColorSetting is: ' + debugFilesMessageFontColorSetting);
  debugFilesDataFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cDataFontColor);
  // console.log('debugFilesDataFontColorSetting is: ' + debugFilesDataFontColorSetting);
  debugFilesModuleFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cModuleFontBackgroundColor);
  // console.log('debugFilesModuleFontBackgroundColorSetting is: ' + debugFilesModuleFontBackgroundColorSetting);
  debugFilesFunctionFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cFunctionFontBackgroundColor);
  // console.log('debugFilesFunctionFontBackgroundColorSetting is: ' + debugFilesFunctionFontBackgroundColorSetting);
  debugFilesMessageFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cMessageFontBackgroundColor);
  // console.log('debugFilesMessageFontBackgroundColorSetting is: ' + debugFilesMessageFontBackgroundColorSetting);
  debugFilesDataFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, bas.cAt + sys.cDataFontBackgroundColor);
  // console.log('debugFilesDataFontBackgroundColorSetting is: ' + debugFilesDataFontBackgroundColorSetting);

  debugFunctionsModuleFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cModuleFontStyle);
  // console.log('debugFunctionsModuleFontStyleSetting is: ' + debugFunctionsModuleFontStyleSetting);
  debugFunctionsFunctionFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cFunctionFontStyle);
  // console.log('debugFunctionsFunctionFontStyleSetting is: ' + debugFunctionsFunctionFontStyleSetting);
  debugFunctionsMessageFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cMessageFontStyle);
  // console.log('debugFunctionsMessageFontStyleSetting is: ' + debugFunctionsMessageFontStyleSetting);
  debugFunctionsDataFontStyleSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cDataFontStyle);
  // console.log('debugFunctionsDataFontStyleSetting is: ' + debugFunctionsDataFontStyleSetting);
  debugFunctionsModuleFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cModuleFontColor);
  // console.log('debugFunctionsModuleFontColorSetting is: ' + debugFunctionsModuleFontColorSetting);
  debugFunctionsFunctionFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cFunctionFontColor);
  // console.log('debugFunctionsFunctionFontColorSetting is: ' + debugFunctionsFunctionFontColorSetting);
  debugFunctionsMessageFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cMessageFontColor);
  // console.log('debugFunctionsMessageFontColorSetting is: ' + debugFunctionsMessageFontColorSetting);
  debugFunctionsDataFontColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cDataFontColor);
  // console.log('debugFunctionsDataFontColorSetting is: ' + debugFunctionsDataFontColorSetting);
  debugFunctionsModuleFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cModuleFontBackgroundColor);
  // console.log('debugFunctionsModuleFontBackgroundColorSetting is: ' + debugFunctionsModuleFontBackgroundColorSetting);
  debugFunctionsFunctionFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cFunctionFontBackgroundColor);
  // console.log('debugFunctionsFunctionFontBackgroundColorSetting is: ' + debugFunctionsFunctionFontBackgroundColorSetting);
  debugFunctionsMessageFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cMessageFontBackgroundColor);
  // console.log('debugFunctionsMessageFontBackgroundColorSetting is: ' + debugFunctionsMessageFontBackgroundColorSetting);
  debugFunctionsDataFontBackgroundColorSetting = await configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + className, callerFunctionName + bas.cAt + sys.cDataFontBackgroundColor);
  // console.log('debugFunctionsDataFontBackgroundColorSetting is: ' + debugFunctionsDataFontBackgroundColorSetting);

  aggregateUnderlineBoldArray = await aggregateStyleSetting(debugFilesModuleFontStyleSetting, debugFunctionsModuleFontStyleSetting, true);
  aggregateModuleFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateModuleFontStyleBold = aggregateUnderlineBoldArray[1];

  aggregateUnderlineBoldArray = await aggregateStyleSetting(debugFilesFunctionFontStyleSetting, debugFunctionsFunctionFontStyleSetting, true);
  aggregateFunctionFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateFunctionFontStyleBold = aggregateUnderlineBoldArray[1];

  aggregateUnderlineBoldArray = await aggregateStyleSetting(debugFilesMessageFontStyleSetting, debugFunctionsMessageFontStyleSetting, true);
  aggregateMessageFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateMessageFontStyleBold = aggregateUnderlineBoldArray[1];

  aggregateUnderlineBoldArray = await aggregateStyleSetting(debugFilesDataFontStyleSetting, debugFunctionsDataFontStyleSetting, true);
  aggregateDataFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateDataFontStyleBold = aggregateUnderlineBoldArray[1];

  aggregateModuleFontColorSetting = await aggregateStyleSetting(debugFilesModuleFontColorSetting, debugFunctionsModuleFontColorSetting, [0, 255, 255], false);
  aggregateFunctionFontColorSetting = await aggregateStyleSetting(debugFilesFunctionFontColorSetting, debugFunctionsFunctionFontColorSetting, [0, 255, 255], false);
  aggregateMessageFontColorSetting = await aggregateStyleSetting(debugFilesMessageFontColorSetting, debugFunctionsMessageFontColorSetting, [0, 255, 255], false);
  aggregateDataFontColorSetting = await aggregateStyleSetting(debugFilesDataFontColorSetting, debugFunctionsDataFontColorSetting, [0, 255, 255], false);
  aggregateModuleFontBackgroundColorSetting = await aggregateStyleSetting(debugFilesModuleFontBackgroundColorSetting, debugFunctionsModuleFontBackgroundColorSetting, [0, 0, 0], false);
  aggregateFunctionFontBackgroundColorSetting = await aggregateStyleSetting(debugFilesFunctionFontBackgroundColorSetting, debugFunctionsFunctionFontBackgroundColorSetting, [0, 0, 0], false);
  aggregateMessageFontBackgroundColorSetting = await aggregateStyleSetting(debugFilesMessageFontBackgroundColorSetting, debugFunctionsMessageFontBackgroundColorSetting, [0, 0, 0], false);
  aggregateDataFontBackgroundColorSetting = await aggregateStyleSetting(debugFilesDataFontBackgroundColorSetting, debugFunctionsDataFontBackgroundColorSetting, [0, 0, 0], false);

  if (message.includes(bas.cColon) === true) {
    messageBrokenDown = message.split(/:(.+)/); // Use regular expression to split on the first instance of ":" ONLY!
    messageContent = messageBrokenDown[0];
    messageData = messageBrokenDown[1];
    processingMessageData = true;
  } else {
    messageContent = message;
    processingMessageData = false;
  }
  // "good_luck_buddy".split(/_(.+)/)[1]
  // @see https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character
  if (flatMessageLog === false) {
    // console.log('processing flatMessageLot === false');
    if (messageContent.includes(bas.cDoublePercent) === true) {
      messageContentPrefix = messageContent.split(bas.cSpace)[0];
      messageContentSuffix = messageContent.split(bas.cSpace)[2];
    } // End-if (messageContent.includes(bas.cDoublePercent) === true)

    className = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleUnderline);
    className = await setBoldFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleBold);
    // console.log('Done processing underline & bold settings: className is: ' + className);
    callerFunctionName = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(callerFunctionName, aggregateFunctionFontStyleUnderline);
    callerFunctionName = await setBoldFontStyleOnMessageComponentAccordingToSetting(callerFunctionName, aggregateFunctionFontStyleBold);
    // console.log('Done processing underline & bold settings: callerFunctionName is: ' + callerFunctionName);

    if (messageContent.includes(bas.cDoublePercent) === true) {
      messageContent = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
      messageContentPrefix = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontStyleBold);

      messageContentSuffix = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleUnderline);
      messageContentSuffix = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleBold);

      messageContentPrefix = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontColorSetting);
      messageContentSuffix = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontColorSetting);

      messageContentPrefix = await setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontBackgroundColorSetting);
      messageContentSuffix = await setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontBackgroundColorSetting);
    } else {
      messageContent = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
      messageContent = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
      // console.log('Done processing underline & bold settings: messageContent is: ' + messageContent);

      if (processingMessageData === true) {
        messageData = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
        messageData = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      } // End-if (processingMessageData === true)

      messageContent = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
      // console.log('Done processing foreground color settings: messageContent is: ' + messageContent);

      messageContent = await setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontBackgroundColorSetting);
      // console.log('Done processing background color settings: messageContent is: ' + messageContent);
    }
    className = await setFontForegroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontColorSetting);
    // console.log('Done processing foreground color settings: className is: ' + className);
    callerFunctionName = await setFontForegroundColorOnMessageComponentAccordingToSetting(callerFunctionName, aggregateFunctionFontColorSetting);
    // console.log('Done processing foreground color settings: callerFunctionName is: ' + callerFunctionName);

    className = await setFontBackgroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontBackgroundColorSetting);
    // console.log('Done processing background color settings: className is: ' + className);
    callerFunctionName = await setFontBackgroundColorOnMessageComponentAccordingToSetting(callerFunctionName, aggregateFunctionFontBackgroundColorSetting);
    // console.log('Done processing background color settings: callerFunctionName is: ' + callerFunctionName);

    if (processingMessageData === true) {
      messageData = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = await setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontBackgroundColorSetting);
    } // End-if (processingMessageData === true)

    if (messageContent.includes(bas.cDoublePercent) === true) {
      colorizedMessage = messageContentPrefix + bas.cSpace + className + bas.cDot + callerFunctionName + bas.cSpace + messageContentSuffix;
    } else if (messageData !== undefined) {
      colorizedMessage = messageContent + bas.cColon + messageData;
    } else {
      colorizedMessage = messageContent;
    }
  } else if (flatMessageLog === true) {
    messageContent = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
    messageContent = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
    if (processingMessageData === true) {
      // console.log('Attempting to format the message data component of the message: ' + messageData);
      messageData = await setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
      messageData = await setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      messageData = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = await setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontBackgroundColorSetting);
      // console.log('Done formatting all of the messageData: ' + messageData);
    }
    messageContent = await setFontForegroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
    messageContent = await setFontBackgroundColorOnMessageComponentAccordingToSetting(callerFunctionName, aggregateMessageFontBackgroundColorSetting);
    colorizedMessage = messageContent + bas.cColon + messageData;
  } else { // Just return the message as we got it and make sure it gets out!
    colorizedMessage = message; // Don't apply any colorizing to the default. We are not likely to hit this case anyway!!
  }
  // console.log('colorizedMessage is: ' + colorizedMessage);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return colorizedMessage;
}

/**
 * @function aggregateStyleSetting
 * @description Compares the two input settings and determines which one of them is valuable or not valuable.
 * @param {string} settingValue1 The file level setting from the configuration file.
 * @param {string} settingValue2 The function level setting from the configuration file.
 * @param {array<integer>} defaultColorArray The default color value that should be used.
 * @param {boolean} processAsFontSetting A True or False value to indicate if we are processing True = font setting, False = color setting.
 * @return {array<boolean>} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting) {
  // let functionName = aggregateStyleSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`settingValue1 is: ${settingValue1}`);
  // console.log(`settingValue2 is: ${settingValue2}`);
  // console.log(`processAsFontSetting is: ${processAsFontSetting}`);
  let styles = [];
  if ((settingValue1 !== wrd.cDefault || settingValue2 !== wrd.cDefault) && (settingValue1 !== undefined || settingValue2 !== undefined)) {
    if ((settingValue1 !== wrd.cDefault && settingValue2 === wrd.cDefault) || (settingValue1 !== undefined && settingValue2 === undefined)) {
      if (processAsFontSetting === true) {
        styles = await getFontStyleSettingsFromSetting(settingValue1);
      } else {
        styles = await getColorStyleSettingFromSetting(settingValue1, defaultColorArray);
      }
    } else if ((settingValue1 === wrd.cDefault && settingValue2 !== wrd.cDefault) || (settingValue1 === undefined && settingValue2 !== undefined)) {
      if (processAsFontSetting === true) {
        styles = await getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = await getColorStyleSettingFromSetting(settingValue2, defaultColorArray);
      }
    } else { // They both must be NOT default, so we set the aggregate value to the function setting.
      if (processAsFontSetting === true) {
        styles = await getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = await getColorStyleSettingFromSetting(settingValue2, defaultColorArray);
      }
    }
  } // End-if ((settingValue1 !== wrd.cDefault || settingValue2 !== wrd.cDefault) && (settingValue1 !== undefined || settingValue2 !== undefined))
  // console.log('styles is: ' + JSON.stringify(styles));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return styles;
}

/**
 * @function getFontStyleSettingsFromSetting
 * @description Parses the font setting to determine if values should be set for bold and/or underline.
 * @param {string} settingValue The setting value that should be parsed.
 * @return {array<boolean>} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function getFontStyleSettingsFromSetting(settingValue) {
  // let functionName = getFontStyleSettingsFromSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`settingValue is: ${settingValue}`);
  let fontStyles = [false, false];
  let aggregateUnderlineBoldArray = [];
  if (settingValue.includes(bas.cPipe) === true) {
    if (settingValue.includes(bas.cPipe) === true) {
      aggregateUnderlineBoldArray = settingValue.split(bas.cPipe);
      // console.log('aggregateUnderlineBoldArray is: ' + JSON.stringify(aggregateUnderlineBoldArray));
      // console.log('aggregateUnderlineBoldArray[0] is: ' + aggregateUnderlineBoldArray[0]);
      // console.log('aggregateUnderlineBoldArray[1] is: ' + aggregateUnderlineBoldArray[1]);
      if (aggregateUnderlineBoldArray[0] === wrd.cUnderline && aggregateUnderlineBoldArray[1] === wrd.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true;
        fontStyles = [true, true];
      } else if (aggregateUnderlineBoldArray[0] === wrd.cBold && aggregateUnderlineBoldArray[1] === wrd.cUnderline) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true;
        fontStyles = [true, true];
      } else if (aggregateUnderlineBoldArray[0] === wrd.cUnderline && aggregateUnderlineBoldArray[1] !== wrd.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        fontStyles = [true, false];
      } else if (aggregateUnderlineBoldArray[0] === wrd.cBold && aggregateUnderlineBoldArray[1] !== wrd.cUnderline) {
        // aggregateModuleFontStyleBold = true;
        fontStyles = [false, true];
      } else {
        // ERROR: Did not find any matching style logic pattern!
        console.log(msg.cDidNotFindAnyMatchingStyleLogicPattern);
      }
    } else if (settingValue === wrd.cUnderline) {
      // aggregateModuleFontStyleUnderline = true;
      fontStyles = [true, false];
    } else if (settingValue === wrd.cBold) {
      // aggregateModuleFontStyleBold = true;
      fontStyles = [false, true];
    }
  } // End-if (settingValue.includes(bas.cPipe) === true)
  // console.log('fontStyles is: ' + JSON.stringify(fontStyles));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return fontStyles;
}

/**
 * @function getColorStyleSettingFromSetting
 * @description Parses the color setting to determine if the value should be parsed or loaded from the color data tables by unique color name.
 * @param {string} settingValue The setting value, which could be RGB as in R,G,B or it could be a string-name as in a unique color name.
 * @param {array<integer>} defaultColorArray The default color value that should be used.
 * @return {object} A JSON object with three integers that represent RGB values, labeled as "Red", "Green", "Blue".
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function getColorStyleSettingFromSetting(settingValue, defaultColorArray) {
  // let functionName = getColorStyleSettingFromSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`settingValue is: ${settingValue}`);
  let colorStyle = {Red: 0, Green: 0, Blue: 0};
  let aggregateColorArray = [];
  if (settingValue !== undefined) {
    if (settingValue.includes(bas.cComa) === true) {
      aggregateColorArray = settingValue.split(bas.cComa);
      colorStyle[clr.cRed] = aggregateColorArray[0];
      colorStyle[clr.cGreen] = aggregateColorArray[1];
      colorStyle[clr.cBlue] = aggregateColorArray[2];
    } else if (settingValue === wrd.cDefault) {
      colorStyle = false; // Do not apply any color settings of any kind!
    } else { // It must be a named color.
      colorStyle = await getNamedColorData(settingValue, defaultColorArray);
    }
  } else {
    colorStyle = false;
  }
  // console.log('colorStyle is: ' + JSON.stringify(colorStyle));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return colorStyle;
}

/**
 * @function getNamedColorData
 * @description Queries the D-data structure for the named color data.
 * All of this data should have been loaded from the Colors.csv file.
 * @param {string} colorName The name of the color who's RGB value we should look up from the color data structure.
 * @param {array<integer>} defaultColorArray The default color that should be used.
 * @return {array<integer>} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function getNamedColorData(colorName, defaultColorArray) {
  // let functionName = getNamedColorData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`colorName is: ${colorName}`);
  let returnColorData = defaultColorArray;
  if (D[wrd.ccolors] !== undefined) {
    if (D[wrd.ccolors][sys.cColorData] !== undefined) {
      if (D[wrd.ccolors][sys.cColorData][colorName] !== undefined) {
        returnColorData[clr.cRed] = D[wrd.ccolors][sys.cColorData][colorName][clr.cRed];
        returnColorData[clr.cGreen] = D[wrd.ccolors][sys.cColorData][colorName][clr.cGreen];
        returnColorData[clr.cBlue] = D[wrd.ccolors][sys.cColorData][colorName][clr.cBlue];
      } else {
        returnColorData = defaultColorArray;
      }
    } else {
      returnColorData = defaultColorArray;
    }
  } else {
    returnColorData = defaultColorArray;
  }
  // console.log('returnColorData is: ' + JSON.stringify(returnColorData));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnColorData;
}

/**
 * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting
 * @description Examines the underline setting value and determines if the underline font setting should be applied to the message component or not.
 * @param {string} messageComponent The message to which the underline font setting should be applied if the setting value calls for it.
 * @param {boolean} underlineSettingValue A True or False value to indicate if the underline font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have an underline setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue) {
  // let functionName = setUnderlineFontStyleOnMessageComponentAccordingToSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`messageComponent is: ${messageComponent}`);
  // console.log(`underlineSettingValue is: ${underlineSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (underlineSettingValue === true) {
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    if (colorizeLogsEnabled === true) {
      returnMessageComponent.chalk.underline(returnMessageComponent);
    }
  } // End-if (underlineSettingValue === true)
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
}

/**
 * @function setBoldFontStyleOnMessageComponentAccordingToSetting
 * @description Examines the bold setting value and determines if the bold font setting should be applied to the message component or not.
 * @param {string} messageComponent The message to which the bold font setting should be applied if the setting value calls for it.
 * @param {boolean} boldSettingValue A True or False value to indicate if the bold font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have a bold setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue) {
  // let functionName = setBoldFontStyleOnMessageComponentAccordingToSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`messageComponent is: ${messageComponent}`);
  // console.log(`boldSettingValue is: ${boldSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (boldSettingValue === true) {
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    if (colorizeLogsEnabled === true) {
      returnMessageComponent = chalk.bold(returnMessageComponent);
    }
  } // End-if (boldSettingValue === true)
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
}

/**
 * @function setFontForegroundColorOnMessageComponentAccordingToSetting
 * @description Examines the color setting to determine if it is False,
 * if not False then it is assumed to be an array of RGB values which are assigned to the message foreground component using chalk.
 * @param {string} messageComponent The message to which the foreground color setting should be applied if the color setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of False or an array of integers for RGB values. False if no color should be applied.
 * @return {string} The same as the input string, except perhaps it might have a foreground color setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  // let functionName = setFontForegroundColorOnMessageComponentAccordingToSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`messageComponent is: ${messageComponent}`);
  // console.log(`colorSettingValue is: ${JSON.stringify(colorSettingValue)}`);
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    // console.log('Red color setting value is: ' + colorSettingValue[clr.cRed]);
    // console.log('Green color setting value is: ' + colorSettingValue[clr.cGreen]);
    // console.log('Blue color setting value is: ' + colorSettingValue[clr.cBlue]);
    // console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined) {
      let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
      if (colorizeLogsEnabled === true) {
        returnMessageComponent = chalk.rgb(colorSettingValue[clr.cRed], colorSettingValue[clr.cGreen], colorSettingValue[clr.cBlue])(returnMessageComponent);
      }
    } // End-if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined)
  } // End-if (colorSettingValue !== false && colorSettingValue !== undefined)
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
}

/**
 * @function setFontBackgroundColorOnMessageComponentAccordingToSetting
 * @description Examines the color setting to determine if it is False,
 * if not False then it is assumed to be an array of RGB values which are assigned to the message background using chalk.
 * @param {string} messageComponent The message to which the background color setting should be applied if the color setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of False or an array of integers for RGB values. False if not color should be applied.
 * @return {string} The same as the input string, except perhaps it might have a background color setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
async function setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  // let functionName = setFontBackgroundColorOnMessageComponentAccordingToSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`messageComponent is: ${messageComponent}`);
  // console.log(`colorSettingValue is: ${JSON.stringify(colorSettingValue)}`);
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    // console.log('Red color setting value is: ' + colorSettingValue[clr.cRed]);
    // console.log('Green color setting value is: ' + colorSettingValue[clr.cGreen]);
    // console.log('Blue color setting value is: ' + colorSettingValue[clr.cBlue]);
    // console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined) {
      let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
      if (colorizeLogsEnabled === true) {
        returnMessageComponent = chalk.bgRgb(colorSettingValue[clr.cRed], colorSettingValue[clr.cGreen], colorSettingValue[clr.cBlue])(returnMessageComponent);
      }
    } // End-if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined)
  } // End-if (colorSettingValue !== false && colorSettingValue !== undefined)
  // console.log('returnMessageComponent is: ' + returnMessageComponent);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
}

/**
 * @function removeFontStyles
 * @description Removes all font styles and formatting from a string.
 * @param {string} message The string message that has formatting applied to it where the formatting should be removed:
 * Example: [48;2;255;255;255m[38;2;0;0;0mBEGIN main program loop[39m[49m
 * Return: BEGIN main program loop
 * @return {string} The string without all the extra formatting.
 * @author Seth Hollingsead
 * @date 2022/01/31
 * @reference: {@link https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings}
 */
async function removeFontStyles(message) {
  // let functionName = removeFontStyles.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`message is: ${message}`);
  let returnMessage = '';
  if (message) {
    // [48;2;255;255;255m[38;2;0;0;0mBEGIN main program loop[39m[49m
    returnMessage = message.replace(/\u001b[^m]*?m/g,'');
  } // End-if (message)
  // console.log('returnMessage is: ' + returnMessage);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessage;
}

export default {
  colorizeMessageSimple,
  colorizeMessage,
  aggregateStyleSetting,
  getFontStyleSettingsFromSetting,
  getColorStyleSettingFromSetting,
  getNamedColorData,
  setUnderlineFontStyleOnMessageComponentAccordingToSetting,
  setBoldFontStyleOnMessageComponentAccordingToSetting,
  setFontForegroundColorOnMessageComponentAccordingToSetting,
  setFontBackgroundColorOnMessageComponentAccordingToSetting,
  removeFontStyles
};
