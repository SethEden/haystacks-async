/**
 * @file languageParsing.js
 * @module languageParsing
 * @description Contains all of the business rule functions for processing of different language related text and characters.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2024/10/09
 * @copyright Copyright © 2024-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from './ruleParsing.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {abt, bas, msg, sys, wrd} = hayConst;
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
  // Load the language schema once
  const languageSchema = D[wrd.cSchemas].languageSchema || {};
  // languageSchema is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.clanguageSchemaIs + JSON.stringify(languageSchema));
  // Convert inputData (language) to lowercase to match schema key
  let languageKey = inputData ? inputData.toLowerCase() : '';
  // languageKey is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.clanguageKeyIs + languageKey);
  let languageRule = languageKey ? languageSchema[languageKey] : null; // Retrieve language data from schema
  // languageRule is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.clanguageRuleIs + JSON.stringify(languageRule));

  if (inputData && inputMetaData && typeof inputData === wrd.cstring &&
  typeof inputMetaData === wrd.cstring && inputData != '' && inputMetaData != '') {
    if (languageRule?.[sys.cbusinessRule]) {
      returnData = await ruleParsing.processRulesInternal([inputMetaData, ''], [languageRule[sys.cbusinessRule]]);
    } else {
      returnData = await getEnglishAlphabet('', '');
    }
  } else if (inputData && typeof inputData === wrd.cstring && inputData != '') {
    if (languageRule?.[sys.cbusinessRule]) {
      returnData = await ruleParsing.processRulesInternal(['', ''], [languageRule[sys.cbusinessRule]]);
    } else {
      returnData = await getEnglishAlphabet('', '');
    }
  } else {
    // Invalid input string, default to English alphabet
    console.log(msg.cErrorInvalidInputString);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cErrorInvalidInputString);
    returnData = await getEnglishAlphabet('', '');
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getEnglishAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the English Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getEnglishAlphabet(inputData, inputMetaData) {
 let functionName = getEnglishAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseEnglishAlphabet;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseEnglishAlphabet
 } else {
    returnData = abt.cUpperCaseEnglishAlphabet + abt.cLowerCaseEnglishAlphabet;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getChineseSimplifiedAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the ChineseSimplified Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getChineseSimplifiedAlphabet(inputData, inputMetaData) {
 let functionName = getChineseSimplifiedAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 returnData = abt.cChineseSimplified;
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getChineseTraditionalAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the ChineseTraditional Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getChineseTraditionalAlphabet(inputData, inputMetaData) {
 let functionName = getChineseTraditionalAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 returnData = abt.cChineseTraditional;
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getCzechAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Czech Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getCzechAlphabet(inputData, inputMetaData) {
 let functionName = getCzechAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseCzech;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseCzech;
 } else {
    returnData = abt.cUpperCaseCzech + abt.cLowerCaseCzech;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getFrenchAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the French Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getFrenchAlphabet(inputData, inputMetaData) {
 let functionName = getFrenchAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseFrench;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseFrench;
 } else {
    returnData = abt.cUpperCaseFrench + abt.cLowerCaseFrench;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getGermanAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the German Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getGermanAlphabet(inputData, inputMetaData) {
 let functionName = getGermanAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseGerman;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseGerman;
 } else {
    returnData = abt.cUpperCaseGerman + abt.cLowerCaseGerman;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getHungarianAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Hungarian Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getHungarianAlphabet(inputData, inputMetaData) {
 let functionName = getHungarianAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseHungarian;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseHungarian;
 } else {
    returnData = abt.cUpperCaseHungarian + abt.cLowerCaseHungarian;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getItalianAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Italian Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getItalianAlphabet(inputData, inputMetaData) {
 let functionName = getItalianAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseItalian;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseItalian;
 } else {
    returnData = abt.cUpperCaseItalian + abt.cLowerCaseItalian;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getJapaneseAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Japanese Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getJapaneseAlphabet(inputData, inputMetaData) {
 let functionName = getJapaneseAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 returnData = abt.cJapanese;
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getKoreanAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Korean Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getKoreanAlphabet(inputData, inputMetaData) {
 let functionName = getKoreanAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseKorean;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseKorean;
 } else {
    returnData = abt.cKorean + abt.cUpperCaseKorean;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getMiscellaneousAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Miscellaneous Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getMiscellaneousAlphabet(inputData, inputMetaData) {
 let functionName = getMiscellaneousAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 returnData = abt.cMisc;
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getPolishAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Polish Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getPolishAlphabet(inputData, inputMetaData) {
 let functionName = getPolishAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCasePolish;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCasePolish;
 } else {
    returnData = abt.cUpperCasePolish + abt.cLowerCasePolish;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getPortugueseAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Portuguese Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getPortugueseAlphabet(inputData, inputMetaData) {
 let functionName = getPortugueseAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCasePortuguese;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCasePortuguese;
 } else {
    returnData = abt.cUpperCasePortuguese + abt.cLowerCasePortuguese;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getRussianAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Russian Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getRussianAlphabet(inputData, inputMetaData) {
 let functionName = getRussianAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseRussian;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseRussian;
 } else {
    returnData = abt.cUpperCaseRussian + abt.cLowerCaseRussian;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

/**
 * @function getSpanishAlphabet
 * @description A simple function to return either upper case, lower case, or mixed case letters and special characters of the Spanish Alphabet.
 * @param {string} inputData Case sensitivity, UPPER CASE, or lowercase. if an empty string is provided or the language does not support upper or lower case,
 * then combined case is used.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string of special alphabetic characters for a given language.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function getSpanishAlphabet(inputData, inputMetaData) {
 let functionName = getSpanishAlphabet.name;
 await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
 let returnData = '';
 if (inputData?.toLowerCase()?.includes(wrd.cupper)) {
    returnData = abt.cUpperCaseSpanish;
 } else if (inputData?.toLowerCase()?.includes(wrd.clower)) {
    returnData = abt.cLowerCaseSpanish;
 } else {
    returnData = abt.cUpperCaseSpanish + abt.cLowerCaseSpanish;
 }
 await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
 await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 return returnData;
}

export default {
  languageToAlphabet,
  getEnglishAlphabet,
  getChineseSimplifiedAlphabet,
  getChineseTraditionalAlphabet,
  getCzechAlphabet,
  getFrenchAlphabet,
  getGermanAlphabet,
  getHungarianAlphabet,
  getItalianAlphabet,
  getJapaneseAlphabet,
  getKoreanAlphabet,
  getMiscellaneousAlphabet,
  getPolishAlphabet,
  getPortugueseAlphabet,
  getRussianAlphabet,
  getSpanishAlphabet
};