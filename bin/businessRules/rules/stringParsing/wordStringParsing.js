/**
 * @file wordStringParsing.js
 * @module wordStringParsing
 * @description Contains all system defined business rules for parsing words and lists.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import * as math from 'mathjs';
import path from 'path';

const {bas, biz, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.wordStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function isStringCamelCase
 * @description Determines if an input string is a camel case string or not.
 * @param {string} inputData The string that should be checked for the camel case qualifications.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is camel case or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Even if we have an all upper case acronym at the end fo the camel case string,
 * the string itself is still considered camel case.
 * Valid Examples:
 * myParsedXML
 * fireflyWonder1996
 * wonderWomand1984
 * covidMedicalCase
 * aBc
 */
async function isStringCamelCase(inputData, inputMetaData) {
  let functionName = isStringCamelCase.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let foundFirstCapitalLetter = false;
    // First make sure the string meets the basic qualifications of a camel case string.
    // 1. Does not contain underscore or dash word separators.
    // 2. Contains at least 1 lower case letter or more.
    // 3. Contains at least 1 upper case letter or more.
    // 4. Has a lower case or upper case first letter of the first word.
    let doesContainUpperCaseCharacter = await ruleParsing.processRulesInternal([inputData, ''], [biz.cdoesStringContainUpperCaseCharacter]);
    let doesContainLowerCaseCharacter = await ruleParsing.processRulesInternal([inputData, ''], [biz.cdoesStringContainLowerCaseCharacter]);
    let isFirstCharUpperCase = await ruleParsing.processRulesInternal([inputData, ''], [biz.cisFirstCharacterUpperCase]);
    let isFirstCharLowerCase = await ruleParsing.processRulesInternal([inputData, ''], [biz.cisFirstCharacterLowerCase]);
    if (!inputData.match(/[\s_-]/g) && doesContainUpperCaseCharacter &&
    doesContainLowerCaseCharacter && (isFirstCharUpperCase || isFirstCharLowerCase)) {
      for (let i = 1; i < inputData.length; i++) {
        // Now check or the final qualification:
        // 3. Ensure that upper case letters are separated by lower case letters
        // (numbers also allowed, but there should be at least some lower case letters)
        // NOTE: This for-loop is how we iterate over the characters of the string.

        // First we need to ok for the first upper case letter.
        if (foundFirstCapitalLetter === false) {
          if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficient evidence to prove this is a camel case string.
          }
        }
      } // End-for (let i = 1; i < inputData.length; i++)
    } // End-if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&...)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function mapWordToCamelCaseWord
 * @description Takes a string key and an indexed string value and maps the word to an upper case first letter word.
 * @param {string} inputData The string key/value that should be converted to a camel case word.
 * @param {string} inputMetaData The string index for the map to the value that should be used.
 * @return {string} A string where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function mapWordToCamelCaseWord(inputData, inputMetaData) {
  let functionName = mapWordToCamelCaseWord.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lower case,
 * with all digits and symbols and whitespace removed.
 * @param {string} inputData The string that should be simplified and consolidated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that has been simplified and consolidated by converting to lower case, removing all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE I think this function is not completely working as expected, probably something to do with that regular expression.
 * Input was: 11UpberDriver321CodeClearance0x#0000FF-akaBlue
 * Output was: upberdrivercodeclearanceffakablue
 */
async function simplifyAndConsolidateString(inputData, inputMetaData) {
  let functionName = simplifyAndConsolidateString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    // returnData = inputData.toLowerCase().replace(/[\W]/g, '');
    returnData = await ruleParsing.processRulesInternal([inputData.toLowerCase().trim(), [/[^\w\s]/g, '']], [biz.cutilitiesReplaceCharacterWithCharacter]);
    returnData = await ruleParsing.processRulesInternal([returnData, [/[\0-9]/g, '']], [biz.cutilitiesReplaceCharacterWithCharacter]);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A True or False value to indicate if the strings are virtually identical or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData) {
  let functionName = compareSimplifiedAndConsolidatedStrings.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    returnData = await simplifyAndConsolidateString(inputData, '') === await simplifyAndConsolidateString(inputMetaData, '');
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countCamelCaseWords
 * @description Takes a string in camelCase and returns the number of words that it contains based on camel case rules.
 * @param {string} inputData String to count words from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of camel case words found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 * @NOTE Based on the implementation for the business rule/function arrayParsing.convertCamelCaseStringToArray.
 */
async function countCamelCaseWords(inputData, inputMetaData) {
  let functionName = countCamelCaseWords.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let caps = [];
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    } // End-for (let i = 1; i < inputData.length; i++)
    returnData = caps.length;
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesStringContainAcronym
 * @description Scans a string and determines if there are 2 or more immediately adjacent upper-case characters in the string.
 * Example: nodeJS where JS is an acronym for JavaScript.
 * @param {string} inputData The string that should be scanned to determine if it contains an acronym or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string contains an acronym.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function doesStringContainAcronym(inputData, inputMetaData) {
  let functionName = doesStringContainAcronym.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let lastCharacterWasUpperCase = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      // if the last character was upper case and the current character is upper case,
      // then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineWordDelimiter
 * @description Determines what delimiter should e used to break a string up into words if possible.
 * @param {string} inputData The string that should be examined to determine what delimiter should be used to break it up into words.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The delimiter that should be used, or if camelCase then the function will return the string "CamelCase".
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function determineWordDelimiter(inputData, inputMetaData) {
  let functionName = determineWordDelimiter.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let camelCaseWordCount = await countCamelCaseWords(inputData, '');
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseWordCountIs + camelCaseWordCount);
    let containsAcronym = await doesStringContainAcronym(inputData, '');
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccontainsAcronymIs + containsAcronym);
    let spacesCount = await countDelimiterInString(inputData, bas.cSpace);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cspacesCountIs + spacesCount);
    let periodCount = await countDelimiterInString(inputData, bas.cDot);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cperiodCountIs + periodCount);
    let dashCount = await countDelimiterInString(inputData, bas.cDash);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdashCountIs + dashCount);
    let comaCount = await countDelimiterInString(inputData, bas.cComa);
    await loggers.consoleLog(namespacePrefix + functionName, msg.ccomaCountIs + comaCount);
    let underscoreCount = await countDelimiterInString(inputData, bas.cUnderscore);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cunderscoreCountIs + underscoreCount);
    let plusCount = await countDelimiterInString(inputData, bas.cPlus);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cplusCountIs + plusCount);
    let percentCount = await countDelimiterInString(inputData, bas.cPercent);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpercentCountIs + percentCount);
    if (
    camelCaseWordCount > 0 &&
    containsAcronym === false &&
    spacesCount === 0 &&
    periodCount === 0 &&
    dashCount === 0 &&
    comaCount === 0 &&
    underscoreCount === 0 &&
    plusCount === 0 &&
    percentCount === 0) {
      returnData = sys.cCamelCase;
      // We haven't hit the case eyt where we need to differentiate between all these extra cases, and there are several of them.
      // We could have multiple acronyms in a word, or in multiple words that are camelCase.
      // Each of these could be really complex special cases.
      // If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount > 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cComa;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount > 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cUnderscore;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount > 0 && percentCount === 0) {
      returnData = bas.cPlus;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount > 0) {
      returnData = bas.cPercent;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cDetermineWordDelimiterMessage1 + msg.cDetermineWordDelimiterMessage2 +
      msg.cDetermineWordDelimiterMessage3 + msg.cDetermineWordDelimiterMessage4);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function countDelimiterInString
 * @description Takes a string and returns the number of specified delimiters it contains.
 * @param {string} inputData String to count delimiters from.
 * @param {string} inputMetaData The delimiter that should be used when counting from the input string.
 * @return {integer} The number of delimiters found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE: https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
 */
async function countDelimiterInString(inputData, inputMetaData) {
  let functionName = countDelimiterInString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    returnData = (inputData.split(inputMetaData).length - 1);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getWordCountInString
 * @description Gets the number of words in a string, it expects words to be
 * delimited by either camel-case, spaces, period, dash, underscore, plus or percent symbols.
 * @param {string} inputData The string that words should be counted from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of words that were found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function getWordCountInString(inputData, inputMetaData) {
  let functionName = getWordCountInString.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let wordDelimiter = await determineWordDelimiter(inputData, inputMetaData);
    if (wordDelimiter === sys.cCamelCase) {
      returnData = await countCamelCaseWords(inputData, '');
    } else if (wordDelimiter !== '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
      await loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordCountInStringMessage1 + msg.cGetWordCountInStringMessage2 + msg.cGetWordCountInStringMessage3);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isStringList
 * @description Determines if the input string is a list or not.
 * @param {string} inputData The string that should be checked if it is a list or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a list or not a list.
 * Using the list of system defined primary, secondary or tertiary command delimiters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function isStringList(inputData, inputMetaData) {
  let functionName = isStringList.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  console.log(msg.cinputMetaDataIs + inputMetaData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let primaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
    let secondaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
    if (inputData.includes(primaryCommandDelimiter) === true ||
    inputData.includes(secondaryCommandDelimiter) === true ||
    inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  } // End-if (inputData)
  console.log(msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param {string} inputData String 1 to compare.
 * @param {string} inputMetaData String 2 to compare.
 * @return {integer} The delta difference between the two strings, expressed as a number.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData) {
  let functionName = aggregateNumericalDifferenceBetweenTwoStrings.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = -1;
  if (inputData && inputMetaData) {
    // Convert the input strings to lower case and clean them up for parsing.
    let string1 = inputData.toLowerCase().replace(/\W/g, '');
    let string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
    await loggers.consoleLog(namespacePrefix + functionName, msg.cstring1Is + string1);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cstring2Is + string2);

    // Build some arrays of variations on string 2, we will use these for doing the comparisons.
    let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
    let variation1 = Array(string2.length + 1).fill(0);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);

    for (let i = 0; i < string1.length; i++) {
      await loggers.consoleLog(namespacePrefix + functionName, msg.ciValueIs + i);
      variation1[0] = i + 1;
      await loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
      for (let j = 0; j < string2.length; j++) {
        await loggers.consoleLog(namespacePrefix + functionName, msg.cjValueIs + j);
        let deletionCost = variation0[j + 1] + 1;
        let insertionCost = variation1[j] + 1;
        let substitutionCost;
        if (string1[i] === string2[j]) {
          substitutionCost = variation0[j];
        } else {
          substitutionCost = variation0[j] + 1;
        }
        await loggers.consoleLog(namespacePrefix + functionName, msg.cdeletionCostIs + deletionCost);
        await loggers.consoleLog(namespacePrefix + functionName, msg.cinsertionCostIs + insertionCost);
        await loggers.consoleLog(namespacePrefix + functionName, msg.csubstitutionCostIs + substitutionCost);
        variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
        await loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);
      } // End-for (let j = 0; j < string2.length; j++)
      let temp = variation1;
      variation1 = variation0;
      variation0 = temp;
    } // End-for (let i = 0; i < string1.length; i++)
    returnData = variation0[string2.length];
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  isStringCamelCase,
  mapWordToCamelCaseWord,
  simplifyAndConsolidateString,
  compareSimplifiedAndConsolidatedStrings,
  countCamelCaseWords,
  doesStringContainAcronym,
  determineWordDelimiter,
  countDelimiterInString,
  getWordCountInString,
  isStringList,
  aggregateNumericalDifferenceBetweenTwoStrings
};
