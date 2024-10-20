/**
 * @file languageParsing.js
 * @module languageParsing
 * @description Contains all of the business rule functions for processing of different language related text and characters.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2024/10/09
 * @copyright Copyright © 2024-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {abt, bas, lng, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.businessRules.rules.mathOperations.
const namespacePrefix = wrd.cframework + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function languageToAlphabet
 * @description Takes the name of a language and returns the special character alphabet for that language.
 * So an input of Spanish will return: áéíóú¿¡üñ
 * @param {string} inputData The name of the language that it's alphabet of special characters should be returned for.
 * @param {string} inputMetaData Case sensitivity, UPPER CASE, or lower case.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/09
 */
async function languageToAlphabet(inputData, inputMetaData) {
  let functionName = languageToAlphabet.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData && inputMetaData && typeof inputData === wrd.cstring &&
  typeof inputMetaData === wrd.cstring && inputData != '' && inputMetaData != '') {
    switch (inputData.toLowerCase()) {
        case lng.cenglish: // return the English alphabet.
            // English language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'English language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseEnglishAlphabet;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseEnglishAlphabet;
            } else {
                returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
            }
            break;
        case lng.cchinesesimplified: // return the Chinese Simplified alphabet.
            // Chinese Simplified language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Chinese Simplified language detected! 1');
            returnData = abt.cChineseSimplified;
            break;
        case lng.cchinesetraditional: // return the Chinese Traditional alphabet.
            // Chinese Traditional language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Chinese Traditional language detected! 1');
            returnData = abt.cChineseTraditional;
            break;
        case lng.cczech: // return the Czech alphabet.
            // Czech language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Czech language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseCzech;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseCzech;
            } else {
                returnData = abt.cUpperCaseCzech + abt.cLowerCaseCzech;
            }
            break;
        case lng.cfrench: // return the special characters from the French alphabet.
            // French language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'French language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseFrench;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseFrench;
            } else {
                returnData = abt.cUpperCaseFrench + abt.cLowerCaseFrench;
            }
            break;
        case lng.cgerman: // return the special characters from the German alphabet.
            // German language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'German language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseGerman;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseGerman;
            } else {
                returnData = abt.cUpperCaseGerman + abt.cLowerCaseGerman;
            }
            break;
        case lng.chungarian: // return the Hungarian alphabet.
            // Hungarian language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Hungarian language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseHungarian;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseHungarian;
            } else {
                returnData = abt.cUpperCaseHungarian + abt.cLowerCaseHungarian;
            }
            break;
        case lng.citalian: // return the Italian alphabet.
            // Italian language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Italian language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseItalian;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseItalian;
            } else {
                returnData = abt.cUpperCaseItalian + abt.cLowerCaseItalian;
            }
            break;
        case lng.cjapanese: // return the Japanese alphabet.
            // Japanese language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Japanese language detected! 1');
            returnData = abt.cJapanese;
            break;
        case lng.ckorean: // return the Korean alphabet.
            // Korean language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Korean language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseKorean;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseKorean;
            } else {
                returnData = abt.cKorean + abt.cUpperCaseKorean;
            }
            break;
        case lng.cmiscellaneous: // return the miscellaneous special characters alphabet.
            // Miscellaneous language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Miscellaneous language detected! 1');
            returnData = abt.cMisc;
            break;
        case lng.cpolish: // return the Polish alphabet.
            // Polish language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Polish language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCasePolish;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCasePolish;
            } else {
                returnData = abt.cUpperCasePolish + abt.cLowerCasePolish;
            }
            break;
        case lng.cportuguese: // return the Portuguese alphabet.
            // Portuguese language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Portuguese language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCasePortuguese;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCasePortuguese;
            } else {
                returnData = abt.cUpperCasePortuguese + abt.cLowerCasePortuguese;
            }
            break;
        case lng.crussian: // return the Russian alphabet.
            // Russian language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Russian language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseRussian;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseRussian;
            } else {
                returnData = abt.cUpperCaseRussian + abt.cLowerCaseRussian;
            }
            break;
        case lng.cspanish: // return the Spanish alphabet.
            // Spanish language detected! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Spanish language detected! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseSpanish;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseSpanish;
            } else {
                returnData = abt.cUpperCaseSpanish + abt.cLowerCaseSpanish;
            }
            break;
        default: // Default to the english alphabet, as that is the language of business.
            // Defaulting to the English language! 1
            await loggers.consoleLog(namespacePrefix + functionName, 'Defaulting to the English language! 1');
            if (inputMetaData.toLowerCase().includes(wrd.cupper)) {
                returnData = abt.cUpperCaseEnglishAlphabet;
            } else if (inputMetaData.toLowerCase().includes(wrd.clower)) {
                returnData = abt.cLowerCaseEnglishAlphabet;
            } else {
                returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
            }
            break;
    }
  } else if (inputData && typeof inputData === wrd.cstring && inputData != '') {
    // Here we don't have any case sensitivity,
    // so should probably just combine the upper case and lower case alphabets together
    // into a single long return string where ever possible.
    switch (inputData.toLowerCase()) {
        case lng.cenglish: // return the English alphabet.
            // English language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'English language detected! 2');
            returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
            break;
        case lng.cchinesesimplified: // return the Chinese Simplified alphabet.
            // Chinese Simplified language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Chinese Simplified language detected! 2');
            returnData = abt.cChineseSimplified;
            break;
        case lng.cchinesetraditional: // return the Chinese Traditional alphabet.
            // Chinese Traditional language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Chinese Traditional language detected! 2');
            returnData = abt.cChineseTraditional;
            break;
        case lng.cczech: // return the Czech alphabet.
            // Czech language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Czech language detected! 2');
            returnData = abt.cUpperCaseCzech + abt.cLowerCaseCzech;
            break;
        case lng.cfrench: // return the special characters from the French alphabet.
            // French language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'French language detected! 2');
            returnData = abt.cUpperCaseFrench + abt.cLowerCaseFrench;
            break;
        case lng.cgerman: // return the special characters from the German alphabet.
            // German language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'German language detected! 2');
            returnData = abt.cUpperCaseGerman + abt.cLowerCaseGerman;
            break;
        case lng.chungarian: // return the Hungarian alphabet.
            // Hungarian language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Hungarian language detected! 2');
            returnData = abt.cUpperCaseHungarian + abt.cLowerCaseHungarian;
            break;
        case lng.citalian: // return the Italian alphabet.
            // Italian language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Italian language detected! 2');
            returnData = abt.cUpperCaseItalian + abt.cLowerCaseItalian;
            break;
        case lng.cjapanese: // return the Japanese alphabet.
            // Japanese language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Japanese language detected! 2');
            returnData = abt.cJapanese;
            break;
        case lng.ckorean: // return the Korean alphabet.
            // Korean language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Korean language detected! 2');
            returnData = abt.cKorean + abt.cUpperCaseKorean;
            break;
        case lng.cmiscellaneous: // return the miscellaneous special characters alphabet.
            // Miscellaneous language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Miscellaneous language detected! 2');
            returnData = abt.cMisc;
            break;
        case lng.cpolish: // return the Polish alphabet.
            // Polish language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Polish language detected! 2');
            returnData = abt.cUpperCasePolish + abt.cLowerCasePolish;
            break;
        case lng.cportuguese: // return the Portuguese alphabet.
            // Portuguese language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Portuguese language detected! 2');
            returnData = abt.cUpperCasePortuguese + abt.cLowerCasePortuguese;
            break;
        case lng.crussian: // return the Russian alphabet.
            // Russian language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Russian language detected! 2');
            returnData = abt.cUpperCaseRussian + abt.cLowerCaseRussian;
            break;
        case lng.cspanish: // return the Spanish alphabet.
            // Spanish language detected! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Spanish language detected! 2');
            returnData = abt.cUpperCaseSpanish + abt.cLowerCaseSpanish;
            break;
        default: // Default to the english alphabet, as that is the language of business.
            // Defaulting to the English language! 2
            await loggers.consoleLog(namespacePrefix + functionName, 'Defaulting to the English language! 2');
            returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
            break;
    }
  } else {
    // ERROR: Invalid input string.
    console.log(msg.cErrorInvalidInputString);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cErrorInvalidInputString);
    // Return the default English alphabet and try to survive.
    returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  languageToAlphabet
};