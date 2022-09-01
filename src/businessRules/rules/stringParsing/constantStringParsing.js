/**
 * @file constantStringParsing.js
 * @module constantStringParsing
 * @description Contains all system defined business rules for parsing strings related to constants.
 * @requires module:ruleParsing
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/n-readlines|n-readlines}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
import D from '../../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import lineByLine from 'n-readlines';
import path from 'path';

const {bas, biz, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.constantStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData the path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
async function validateConstantsDataValidation(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidation.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);

    while (line === liner.next()) {
      if (line) {
        // constants line is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsLineIs + line.toString(gen.cascii));
        let lineInCode = line.toString(gen.cascii);
        let foundConstant = false;
        if (lineInCode.includes(sys.cexportconst) === true) {
          let lineArray = lineInCode.split(bas.cSpace);
          // lineArray[2] is
          await loggers.consoleLog(namespacePrefix + functionName, msg.clineArray2Is + lineArray[2]);
          foundConstant = await validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
          let qualifiedConstantsFilename = await ruleParsing.processRulesInternal([inputData, ''], [biz.cgetFileNameFromPath]);
          if (foundConstant === true) {
            if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
              let passMessage = wrd.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cPASS;
              if (colorizeLogsEnabled === true) {
                passMessage = chalk.rgb(0,0,0)(passMessage);
                passMessage = chalk.bgRgb(0,255,0)(passMessage);
              } // End-if (colorizeLogsEnabled === true)
              console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage)
            } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true)
          } else { // Else-clause if (foundConstant === true)
            if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
              let failMessage = wrd.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL;
              if (colorizeLogsEnabled === true) {
                failMessage = chalk.rgb(0,0,0)(failMessage);
                failMessage = chalk.bgRgb(255,0,0)(failMessage);
              } // End-if (colorizeLogsEnabled === true)
              let qualifiedConstantsPrefix = await determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
              console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + failMessage);
              // await loggers.consoleLog(namespacePrefix + functionName, wrd.cFAIL + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL);
              let suggestedLineOfCode = await determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
              if (suggestedLineOfCode !== '') {
                if (colorizeLogsEnabled === true) {
                  suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                  suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
                } // End-if (colorizeLogsEnabled === true)
                // Suggested line of code is:
                console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
              } // End-if (suggestedLineOfCode !== '')
            } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualCosntantsValidationFailMessages) === true)
            foundAFailure = true;
          }
        } // End-if (lineInCode.includes(sys.cexportconst) === true)
      } else {
        // ERROR: line is null or undefined:
        // file is:
        console.log(msg.cErrorLineIsNullOrUndefined + line + msg.cSpaceFileIs + inputData);
      }      
    } // End-while (line = liner.next())
  } // End-if (inputData && inputMetaData)
  if (foundAFailure === false) {
    returnData = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * The standard prefix that should be used in the code to reference that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string code that represents the method to reference a constants file in the code.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function determineConstantsContextQualifiedPrefix(inputData, inputMetaData) {
  let functionName = determineConstantsContextQualifiedPrefix.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsFileNames = D[sys.cConstantsValidationData][sys.cConstantsFileNames];
    let constantsShortNames = D[sys.cConstantsValidationData][sys.cConstantsShortNames];
    for (let key in constantsFileNames) {
      if (inputData === constantsFileNames[key]) {
        returnData = constantsShortNames[key];
      }
    } // End-for (let key in constantsFileNames)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested lin of code to ad to the appropriate constants validation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant file that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to reference the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData) {
  let functionName = determineSuggestedConstantsValidationLineOfCode.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    // Input: cZZTopInternationalSuccess
    // Output: {Name: 'cZZTopInternationalSuccess', Actual: wrd.cZZTopInternationalSuccess, Expected: 'ZZTopInternationalSuccess'}
    if (inputData.charAt(0) === bas.cc) {
      let literalValue = inputData.substring(1);
      // `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + inputData +
        bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + inputMetaData +
        bas.cDot + inputData + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace +
        bas.cSingleQuote + literalValue + bas.cSingleQuote + bas.cCloseCurlyBrace;
    } else { // Else-clause if (inputData.charAt(0) === bas.cc)
      // 'ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.'
      console.log(msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constant definition can be found, or not found.
 * @param {string} inputData the constant definition that should be searched for.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function validateConstantsDataValidationLineItemName(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidationLineItemName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (const element of D[sys.cConstantsValidationData][inputMetaData]) {
      let validationLineItem = element;
      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        } // End-if (inputData === validationLineItem.Name)
      } // End-if (validationLineItem)
    } // End-for (const element of D[sys.cConstantsValidationData][inputMetaData])
  } // End-if (inputData && inputMetaData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function doesConstantExist(inputData, inputMetaData) {
  let functionName = doesConstantExist.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (const element1 of constantsTypesKeys) {
      let constantTypeKey = element1;
      // constantTypeKey is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
      for (const element2 of constantsKeys) {
        let constantKey = element2;
        // constantKey is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual || inputData === constantActualValue.Name) {
          returnData = true;
          break loop1;
        } // End-if (inputData === constantActualValue.Actual || inputData === constantActualValue.Name)
      } // End-for (const element2 of constantsKeys)
    } // End-for (const element1 of constantsTypesKeys)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * @NOTE Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantType(inputData, inputMetaData) {
  let functionName = getConstantType.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (const element1 of constantsTypesKeys) {
      let constantTypeKey = element1;
      // constantTypeKey is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
      for (const element2 of constantsKeys) {
        let constantKey = element2;
        // constantKey is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey;
            // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?
            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + bas.cComa + constantTypeKey;
          }
        } // End-if (inputData === constantActualValue.Actual)
      } // End-for (const element2 of constantsKeys)
    } // End-for (const element1 of constantsTypesKeys)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantActualValue(inputData, inputMetaData) {
  let functionName = getConstantActualValue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (await isConstantTypeValid(inputMetaData, '') === true) {
      let constantTypeValues1 = D[sys.cConstantsValidationData][inputMetaData];
      // 1 constantsTypeValues is:
      await loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));
      let constantsKeys1 = Object.keys(constantTypeValues1);
      // 1 constantsKeys is:
      await loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys1));
      for (const element1 of constantsKeys1) {
        let constantKey1 = element1;
        // 1 constantKey is:
        await loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey1));
        let constantActualValue1 = constantTypeValues1[constantKey1];
        // 1 constantActualValue is:
        await loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // End-for (const element1 of constantsKeys1)
    } else { // Else-clause if (isConstantTypeValid(inputMetaData, '') === true)
      let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
      // constantsTypesKeys is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
      for (const element2 of constantsTypesKeys) {
        let constantTypeKey = element2;
        // constantTypeKey is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
        let constantTypeValues2 = D[sys.cConstantsValidationData][constantTypeKey];
        // 2 constantTypeValues is:
        await loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));
        let constantsKeys2 = Object.keys(constantTypeValues2);
        // 2 constantsKeys is:
        await loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys2));
        for (const element3 of constantsKeys2) {
          let constantKey2 = element3;
          // 2 constantKey is:
          await loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey2));
          let constantActualValue1 = constantTypeValues2[constantKey2];
          // 1 constantActualValue is:
          await loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
          if (inputData === constantActualValue1.Name || inputData === constantActualValue1.Actual) {
            returnData = constantActualValue1.Actual;
          }
        } // End-for (const element3 of constantsKeys2)
      } // End-for (const element2 of constantsTypesKeys)
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as.
 * Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function getConstantName(inputData, inputMetaData) {
  let functionName = getConstantName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (const element1 of constantsTypesKeys) {
      let constantTypeKey = element1;
      // constantTypeKey is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
      for (const element2 of constantsKeys) {
        let constantKey = element2;
        // constantKey is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // End-for (const element2 of constantsKeys)
    } // End-for (const element1 of constantsTypesKeys)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function findConstantName(inputData, inputMetaData) {
  let functionName = findConstantName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(bas.cDot)) {
      returnData = inputData.substring(inputData.lastIndexOf(bas.cDot) + 1, inputData.length);
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isConstantTypeValid
 * @description Determines if a string is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a
 * valid constant type/library that exists within the system or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function isConstantTypeValid(inputData, inputMetaData) {
  let functionName = isConstantTypeValid.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsShortNames = D[sys.cConstantsValidatinoData][sys.cConstantsShortNames];
    for (let key in constantsShortNames) {
      if (inputData === key || inputData === constantsShortNames[key]) {
        returnData = true;
        break;
      }
    } // End-for (let key in constantsShortNames)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function convertConstantTypeToConstantPrefix(inputData, inputMetaData) {
  let functionName = convertConstantTypeToConstantPrefix.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsPrefixData = D[sys.cConstantsValidationData][sys.cConstantsPrefix];
    for (let key in constantsPrefixData) {
      if (inputData === key) {
        returnData = constantsPrefixData[key];
      }
    } // End-for (let key in constantsPrefixData)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData the string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function constantsOptimizedFulfillmentSystem(inputData, inputMetaData) {
  let functionName = constantsOptimizedFulfillmentSystem.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantType = '';
  let constantName = '';
  if (inputData) {
    if (await doesConstantExist(inputData, '') === false) {
      returnData = await constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = await getConstantType(inputData, true);
      constantName = await getConstantName(inputData, '');
      let constantPrefix = await convertConstantTypeToConstantPrefix(constantType, '');
      returnData = constantPrefix + constantName;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function constantsFulfillmentSystem(inputData, inputMetaData) {
  let functionName = constantsFulfillmentSystem.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  if (inputData) {
    returnData = await constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determine how many characters are being returned so we can
    // determine what portion of the string we need to continue processing with.
    constantName = await findConstantName(returnData, '');
    // constantName is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
    let constantValue = await getConstantActualValue(constantName, '');
    // constantValue is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.crecursivesu + recursiveSubString);
      returnData = returnData + bas.cSpace + bas.cPlus + bas.cSpace + await constantsFulfillmentSystem(recursiveSubString, inputData);
    } // End-if (deltaLength != 0)
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data
 * specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of
 * the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the validation passed for the
 * entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function validateConstantsDataValues(inputData, inputMetaData) {
  let functionName = validateConstantsDataValues.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    let colorizeLogsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    for (const element of D[sys.cConstantsValidationData][inputData]) {
      let validationLineItem = element;
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          // PASS
          if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = wrd.cPASS + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            } // End-if (colorizeLogsEnabled === true)
            console.log(passMessage);
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true)
        } else {
          // FAIL
          returnData = false;
          if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(255,0,0)(passMessage);
            } // End-if (colorizeLogsEnabled === true)
            console.log(passMessage);
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true)
        }
      } else { // Else-clause if (validationLineItem)
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        } // End-if (colorizeLogsEnabled === true)
        console.log(passMessage);
      } // End else-clause if (validationLineItem)
    } // End-for (const element of D[sys.cConstantsValidationData][inputData])
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
async function isConstantValid(inputData, inputMetaData) {
  let functionName = isConstantValid.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  } // End-if (inputData)
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  validateConstantsDataValidation,
  determineConstantsContextQualifiedPrefix,
  determineSuggestedConstantsValidationLineOfCode,
  validateConstantsDataValidationLineItemName,
  doesConstantExist,
  getConstantType,
  getConstantActualValue,
  getConstantName,
  findConstantName,
  isConstantTypeValid,
  convertConstantTypeToConstantPrefix,
  constantsOptimizedFulfillmentSystem,
  constantsFulfillmentSystem,
  validateConstantsDataValues,
  isConstantValid
};
