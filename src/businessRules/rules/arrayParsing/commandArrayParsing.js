/**
 * @file commandArrayParsing.js
 * @module commandArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to commands.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.commandArrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function solveLehmerCode
 * @description Used the inputData as an addressable Lehmer Code to find all possible combinations of array elements.
 * @param {array<integer>} inputData The Lehmer code addressable index array we will use to permutate over all possible combinations.
 * @param {array<array<string>>} inputMetaData The nested array that contains all instances of strings that should be used when generating permutations.
 * @return {string} The delimited list of possible combinations generated by solving the Lehmer Code.
 * @author Seth Hollingsead
 * @date 2022/01/20
 * @NOTE: https://en.wikipedia.org/wiki/Lehmer_code
 */
async function solveLehmerCode(inputData, inputMetaData) {
  let functionName = solveLehmerCode.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let lengthOfInputData = inputData.length;
    let expandedLehmerCodeArray = [];
    let lehmerCodeArray = Array.from(Array(lengthOfInputData), () => 0);
    expandedLehmerCodeArray = await ruleParsing.processRulesInternal([await recursiveArrayExpansion([0, lehmerCodeArray], inputData), ''], [biz.carrayDeepClone]);
    // expandedLehmerCodeArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cexpandedLehmerCodeArrayIs + JSON.stringify(expandedLehmerCodeArray));

    // Now we just iterate over each array in expandedLehmerCodeArray and call: getLehmerCodeValue
    for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++) {
      let lehmerCodeStringValue = await getLehmerCodeValue(expandedLehmerCodeArray[i], inputMetaData);
      if (i === 0) {
        returnData = returnData + lehmerCodeStringValue;
      } else {
        returnData = returnData + bas.cComa + lehmerCodeStringValue;
      }
    } // End-for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function recursiveArrayExpansion
 * @description Recursively expands all possible combinations of an input array given an index of expansion and returns the list of arrays.
 * @param {array<integer,array<integer>>} inputData The index of expansion and the array to be expanded as an array object.
 * @param {array<integer>} inputMetaData The Lehmer Codex that should be used to set the limit of expansion based on the index of expansion.
 * @return {array<array<integer>>} The final list of arrays after the array expansion has completed successfully.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
async function recursiveArrayExpansion(inputData, inputMetaData) {
  let functionName = recursiveArrayExpansion.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [];
  let inputDataIsArray = await ruleParsing.processRulesInternal([inputData, ''], [biz.cisArray]);
  let inputMetaDataIsArray = await ruleParsing.processRulesInternal([inputMetaData, ''], [biz.cisArray]);
  if (inputData && inputMetaData && inputDataIsArray === true && inputMetaDataIsArray === true && inputData.length > 0 && inputMetaData.length > 0) {
    // Setup & parse the inputData & inputMetaData into a format we can use to actually do recursive array expansion.
    let indexOfExpansion = inputData[0];
    let arrayToBeExpanded = inputData[1];
    let limitOfExpansion = inputMetaData[indexOfExpansion];
    // indexOfExpansion is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cindexOfExpansionIs + indexOfExpansion);
    // arrayToBeExpanded is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.carrayToBeExpandedIs + JSON.stringify(arrayToBeExpanded));
    // imitOfExpansion is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.climitOfExpansionIs + limitOfExpansion);
    let masterTempReturnData = []; // When we are all done we will set the returnData back to the list of arays in this array.

    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }

    // First level array expansion.
    for (let i = 0; i <= limitOfExpansion; i++) {
      let lehmerCodeArray1 = await ruleParsing.processRulesInternal([arrayToBeExpanded, ''], [biz.carrayDeepClone]);
      // returnData is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
      lehmerCodeArray1[indexOfExpansion] = i;
      if (await ruleParsing.processRulesInternal([[returnData, lehmerCodeArray1], ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]) === false) {
        // pushing LehmerCodeArray1 to returnData value:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cpushingLehmerCodeArray1ToReturnDataValue + JSON.stringify(lehmerCodeArray1));
        returnData.push(lehmerCodeArray1);
        // returnData after push is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterPushIs + JSON.stringify(returnData));
      } // End-if (ruleParsing.processRulesInternal([[returnData, lehmerCodeArray1], ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]) === false)
    } // End-for (let i = 0; i <= limitOfExpansion; i++)
    // returnData after level 1 is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterLevel1Is + JSON.stringify(returnData));

    // Second level array expansion, this is where we call recursively.
    // We need to determine if the index of expansion is equal to the length of the arrayToBeExpanded.
    // If it is then we have reached our recursive expansion limit.
    // If NOT then we need to recursively expand some more on each of the arrays that are now in the returnData array.
    // arrayToBeExpanded.length is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.carrayToBeExpandedDotLengthIs + arrayToBeExpanded.length);
    if (indexOfExpansion < arrayToBeExpanded.length - 1) {
      // We need to remove arrays from the returnData and recursively call the recursiveArrayExpansion with each array we remove.
      // The data we get back from each recursive call should be pushed back to masterTempReturnData array.
      // returnData.length is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataDotLengthIs + returnData.length);
      // Make sure we clone the array we will be removing array elements from,
      // because otherwise we would be looping over the same array we are removing elements from,
      // which would mean that we would never visit all of the elements.
      // https://stackoverflow.com/questions/54081930/why-array-foreach-array-pop-would-not-empty-the-array
      let returnDataTemp = await ruleParsing.processRulesInternal([returnData, ''], [biz.carrayDeepClone]);
      returnDataTemp.forEach(async function() {
        // returnData BEFORE POP is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataBeforePopIs + JSON.stringify(returnData));
        let lehmerCodeArray2 = await ruleParsing.processRulesInternal([returnData.pop(), ''], [biz.carrayDeepClone]);
        // returnData AFTER POP is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterPopIs + JSON.stringify(returnData));
        // masterTempReturnData BEFORE recursive call is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cmasterTempReturnDataBeforeRecursiveCallIs + JSON.stringify(masterTempReturnData));
        let tempReturnData1 = await ruleParsing.processRulesInternal([await recursiveArrayExpansion([indexOfExpansion + 1, lehmerCodeArray2], inputMetaData), ''], [biz.carrayDeepClone]);
        // tempReturnData1 is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData1Is + JSON.stringify(tempReturnData1));
        // tempReturnData1.length is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData1DotLengthIs + tempReturnData1.length);
        for (let k = 0; k <= tempReturnData1.length - 1; k++) {
          // BEGIN k-th iteration:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_kthIteration + k);
          if (await ruleParsing.processRulesInternal([[masterTempReturnData, tempReturnData1[k]], ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]) === false) {
            // pushing tempReturnData1[k] value:
            await loggers.consoleLog(namespacePrefix + functionName, msg.cpushingTempReturnData1Kvalue + JSON.stringify(tempReturnData1[k]));
            masterTempReturnData.push(await ruleParsing.processRulesInternal([tempReturnData1[k], ''], [biz.carrayDeepClone]));
          } // End-if (ruleParsing.processRulesInternal([[masterTempReturnData, tempReturnData1[k]], ruleParsing.getRule(biz.cascertainMatchingElements)], [biz.cdoesArrayContainValue]) === false)
          // END k-th iteration:
          await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_kthIteration + k);
        } // End-for (let k = 0; k <= tempReturnData1.length - 1; k++)
        // masterTempReturnData AFTER recursive call is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cmasterTempReturnDataAfterRecursiveCallIs + JSON.stringify(masterTempReturnData));
      }); // End-for-each (returnDataTemp.forEach(function())
      returnData = await ruleParsing.processRulesInternal([masterTempReturnData, ''], [biz.carrayDeepClone]);
    } // End-if (indexOfExpansion < arrayToBeExpanded.length - 1)
  } // End-if (inputData && inputMetaData && inputDataIsArray === true && inputMetaDataIsArray === true && inputData.length > 0 && inputMetaData.length > 0)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLehmerCodeValue
 * @description Takes a Lehmer code array and an array of arrays and uses the Lehmer Code array to look up the corresponding values in the array of arrays.
 * @param {array<integer>} inputData The Lehmer code array with indices for values we should get & return.
 * @param {array<array<string>>} inputMetaData The nested array of arrays with the values we should get and combine then return as a single string.
 * @return {string} The joined string from each of the array element strings at the Lehmer code indices.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
async function getLehmerCodeValue(inputData, inputMetaData) {
  let functionName = getLehmerCodeValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let lengthOfInputData = inputData.length;
    for (let i = 0; i < lengthOfInputData; i++) {
      // BEGIN i-th iteration:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
      let lookupIndex = inputData[i];
      // lookupIndex is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.clookupIndexIs + lookupIndex);
      let lookupValue = inputMetaData[i][lookupIndex];
      // lookupValue is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.clookupValueIs + lookupValue);
      returnData = returnData + lookupValue;
      // returnData is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      // END i-th iteration:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
    } // End-for (let i = 0; i < lengthOfInputData; i++)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateCommandAliases
 * @description Generates all possible combinations of command aliases given a set of command words and command word abbreviations.
 * @param {object} inputData An object containing all of the meta-data needed for command words and
 * command word abbreviations needed to generate every possible combination of command aliases.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma-separated list of every possible combination of command aliases.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function generateCommandAliases(inputData, inputMetaData) {
  let functionName = generateCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // {"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let primaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cprimaryCommandDelimiterIs + primaryCommandDelimiter);
    let secondaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandDelimiterIs + secondaryCommandDelimiter);
    let tertiaryCommandDelimiter = await configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
    await loggers.consoleLog(namespacePrefix + functionName, msg.ctertiaryCommandDelimiterIs + tertiaryCommandDelimiter);
    let commandDelimiter = '';
    let commandWordsKeys1 = Object.keys(inputData);
    let commandWordAliasesArray = [];
    let masterCommandWordAliasesArray = [commandWordsKeys1.length - 1];
    let masterArrayIndex = [commandWordsKeys1.length - 1];
    for (let i = 0; i < commandWordsKeys1.length; i++) {
      // commandWordsKeys1.forEach((key1) => {
      let key1 = commandWordsKeys1[i];
      let commandWordAliases = inputData[key1];
      if (commandWordAliases.includes(primaryCommandDelimiter)) {
        commandDelimiter = primaryCommandDelimiter;
      } else if (commandWordAliases.includes(secondaryCommandDelimiter)) {
        commandDelimiter = secondaryCommandDelimiter;
      } else if (commandWordAliases.includes(tertiaryCommandDelimiter)) {
        commandDelimiter = tertiaryCommandDelimiter;
      }
      commandWordAliases = commandWordAliases + commandDelimiter + key1;
      // commandWordAliases BEFORE CHANGE is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWordAliasesBeforeChangeIs + commandWordAliases);
      commandWordAliasesArray = commandWordAliases.split(commandDelimiter);
      masterArrayIndex[i] = commandWordAliasesArray.length - 1;
      for (let j = 0; j < commandWordAliasesArray.length; j++) {
        let commandAliasWord = commandWordAliasesArray[j];
        if (await ruleParsing.processRulesInternal([commandAliasWord, ''], [biz.cisFirstCharacterLowerCase]) === true) {
          let firstLetterOfCommandAliasWord = commandAliasWord.charAt(0).toUpperCase();
          commandAliasWord = await ruleParsing.processRulesInternal([[commandAliasWord, 0], firstLetterOfCommandAliasWord], [biz.creplaceCharacterAtIndexOfString]);
          commandWordAliasesArray[j] = commandAliasWord; // Saved the changes back to array.
        } // End-if (ruleParsing.processRulesInternal([commandAliasWord, ''], [biz.cisFirstCharacterLowerCase]) === true)
      } // End-for (let j = 0; j < commandWordAliasesArray.length; j++)
      // commandWordAliasesArray AFTER CHANGE is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWordAliasesAfterChangeIs + JSON.stringify(commandWordAliasesArray));
      masterCommandWordAliasesArray[i] = commandWordAliasesArray; // Try to build an array of arrays (2D)
    } // End-for (let i = 0; i < commandWordsKeys1.length; i++)
    // masterCommandWordAliasesArray is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cmasterCommandWordAlisesArrayIs + JSON.stringify(masterCommandWordAliasesArray));
    // masterArrayIndex is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cmasterArrayIndexIs + JSON.stringify(masterArrayIndex));

    // NOTES: Console output is:
    // masterCommandWordAliasesArray is: [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // masterArrayIndex is: [4,4,3]
    //
    // We should be able to have 2 nested for-loops, and we will declare a counter array initialized to [0,0,0] to match the masterArrayIndex above.
    // The counter array tells us which combination of words we should get.
    // We can simply push those combination of words as a string on a stack we will make for this business rule.
    // Then iterate the last array element as long as it's not greater than the number in the master array index and do the same things over again.
    // When the array index for the last element in the array reaches the masterArrayIndex for the same array index then we increment the second from the last array counter.
    // and start over again with the last element in the array counter.
    // This way we should be able to iterate over the entire 2D array and get every combination without having to create x number of nested for-loops.
    // Essentially we will be having 2-nested for-loops looping over the counter array. The top level loop will be looping over masterArrayIndex.length,
    // and the second loop will be iterating over the integers in the counter array.
    // The counter array will tell the algorthim which combination of words to put together and push on the stack.
    //
    // NOTE: The algorthim described above is called: Lehmer code
    // https://en.wikipedia.org/wiki/Lehmer_code
    returnData = await solveLehmerCode(masterArrayIndex, masterCommandWordAliasesArray);
    // Command Aliases are:
    console.log(msg.cCommandAliasesAre + returnData);
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function aggregateCommandArguments
 * @description Combines all of the input arguments into a single command line to be executed by the command parser.
 * @param {array<string>} inputData An array of strings that represents the command and command parameters to execute.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A sinle string command line of code that should be sent to the command parser.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
async function aggregateCommandArguments(inputData, inputMetaData) {
  let functionName = aggregateCommandArguments.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.length > 3) {
      for (let i = 2; i < inputData.length; i++) {
        // BEGIN i-th iteration:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        if (i === 2) {
          returnData = await ruleParsing.processRulesInternal([inputData[i], '' ], [biz.ccleanCommandInput]);
        } else {
          returnData = returnData + bas.cSpace + await ruleParsing.processRulesInternal([inputData[i], ''], [biz.ccleanCommandInput]);
        }
        // returnData is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
        // END i-th iteration:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      } // End-for (let i = 2; i < inputData.length; i++)
    } else { // else-clause if (inputData.length > 3)
      returnData = await ruleParsing.processRulesInternal([inputData[2], ''], [biz.ccleanCommandInput]);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  solveLehmerCode,
  recursiveArrayExpansion,
  getLehmerCodeValue,
  generateCommandAliases,
  aggregateCommandArguments
};
