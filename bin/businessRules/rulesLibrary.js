/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined busness rules as a map between function names and function calls.
 * @requires module:auxiliaryArrayParsing
 * @requires module:characterArrayParsing
 * @requires module:commandArrayParsing
 * @requires module:constantArrayParsing
 * @requires module:constantArrayParsing
 * @requires module:dataArrayParsing
 * @requires module:pathArrayParsing
 * @requires module:wordArrayParsing
 * @requires module:auxiliaryStringParsing
 * @requires module:characterStringParsing
 * @requires module:commandStringParsing
 * @requires module:constantStringParsing
 * @requires module:dataStringParsing
 * @requires module:fileStringParsing
 * @requires module:wordStringParsing
 * @requires module:characterGeneration
 * @requires module:fileOperations
 * @requires module:lexicalAnalyzer
 * @requires module:mathOperations
 * @requires module:promptOperations
 * @requires module:ruleParsing
 * @requires module:stringGeneration
 * @requires module:stringParsingUtilities
 * @requires module:timeComputation
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
// import arrayParsing from './rules/arrayParsing.js';
import auxiliaryArrayParsing from './rules/arrayParsing/auxiliaryArrayParsing.js';
import characterArrayParsing from './rules/arrayParsing/characterArrayParsing.js';
import commandArrayParsing from './rules/arrayParsing/commandArrayParsing.js';
import constantArrayParsing from './rules/arrayParsing/constantArrayParsing.js';
import dataArrayParsing from './rules/arrayParsing/dataArrayParsing.js';
import pathArrayParsing from './rules/arrayParsing/pathArrayParsing.js';
import wordArrayParsing from './rules/arrayParsing/wordArrayParsing.js';
// import auxiliaryStringParsing from './rules/stringParsing/auxiliaryStringParsing.js';
import characterStringParsing from './rules/stringParsing/characterStringParsing.js';
import commandStringParsing from './rules/stringParsing/commandStringParsing.js';
import constantStringParsing from './rules/stringParsing/constantStringParsing.js';
import dataStringParsing from './rules/stringParsing/dataStringParsing.js';
import fileStringParsing from './rules/stringParsing/fileStringParsing.js';
import wordStringParsing from './rules/stringParsing/wordStringParsing.js';
import characterGeneration from './rules/characterGeneration.js';
import fileOperations from './rules/fileOperations.js';
import lexicalAnalyzer from './rules/lexicalAnalyzer.js';
import mathOperations from './rules/mathOperations.js';
import promptOperations from './rules/promptOperations.js';
import ruleParsing from './rules/ruleParsing.js';
import stringGeneration from './rules/stringGeneration.js';
import stringParsingUtilities from './rules/stringParsingUtilities.js';
import timeComputation from './rules/timeComputation.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, sys} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rulesLibrary.
// eslint-disable-next-line no-unused-vars
const namespacePrefix = sys.cbusinessRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
async function initRulesLibrary() {
  //  let functionName = initRulesLibrary.name;
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   D[sys.cbusinessRules] = {};
   D[sys.cbusinessRules] = {
     // eslint-disable-next-line no-unused-vars
     [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),

     // Business Rules
     // ***********************************************************************
     // BEGIN ArrayParsing category
     // ***********************************************************************
     // ***********************************************
     // auxiliaryArrayParsing rules in order
     // ***********************************************
     [biz.cparseColorRangeInputs]: (inputData, inputMetaData) => auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData),
     [biz.cdoesArrayContainValue]: (inputData, inputMetaData) => auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData),

     // ***********************************************
     // characterArrayParsing rules in order
     // ***********************************************
     [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
     [biz.cdoesArrayContainCharacter]: (inputData, inputMetaData) => characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData),
     [biz.cremoveCharacterFromArray]: (inputData, inputMetaData) => characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData),
     [biz.creplaceCharacterAtIndex]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData),

     // ***********************************************
     // commandArrayParsing rules in order
     // ***********************************************
     [biz.csolveLehmerCode]: (inputData, inputMetaData) => commandArrayParsing.solveLehmerCode(inputData, inputMetaData),
     [biz.crecursiveArrayExpansion]: (inputData, inputMetaData) => commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData),
     [biz.cgetLehmerCodeValue]: (inputData, inputMetaData) => commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData),
     [biz.cgenerateCommandAliases]: (inputData, inputMetaData) => commandArrayParsing.generateCommandAliases(inputData, inputMetaData),
     [biz.caggregateCommandArguments]: (inputData, inputMetaData) => commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData),

     // ***********************************************
     // constantArrayParsing rules in order
     // ***********************************************
     [biz.cgetLengthOfLongestStringInArray]: (inputData, inputMetaData) => constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData),
     [biz.csearchForPatternsInStringArray]: (inputData, inputMetaData) => constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData),
     [biz.cvalidatePatternsThatNeedImplementation]: (inputData, inputMetaData) => constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData),

     // ***********************************************
     // dataArrayParsing rules in order
     // ***********************************************
     [biz.carraysAreEqual]: (inputData, inputMetaData) => dataArrayParsing.arraysAreEqual(inputData, inputMetaData),
     [biz.cstoreData]: (inputData, inputMetaData) => dataArrayParsing.storeData(inputData, inputMetaData),
     [biz.cgetStoredData]: (inputData, inputMetaData) => dataArrayParsing.getStoredData(inputData, inputMetaData),
     [biz.cisObjectEmpty]: (inputData, inputMetaData) => dataArrayParsing.isObjectEmpty(inputData, inputMetaData),
     [biz.cisArrayEmpty]: (inputData, inputMetaData) => dataArrayParsing.isArrayEmpty(inputData, inputMetaData),
     [biz.cisObject]: (inputData, inputMetaData) => dataArrayParsing.isObject(inputData, inputMetaData),
     [biz.cisArray]: (inputData, inputMetaData) => dataArrayParsing.isArray(inputData, inputMetaData),
     [biz.cisArrayOrObject]: (inputData, inputMetaData) => dataArrayParsing.isArrayOrObject(inputData, inputMetaData),
     [biz.cisNonZeroLengthArray]: (inputData, inputMetaData) => dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData),
     [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
     [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData),
     [biz.cgetNamespacedDataObject]: (inputData, inputMetaData) => dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData),
     [biz.csetNamespacedDataObject]: (inputData, inputMetaData) => dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData),

     // ***********************************************
     // pathArrayParsing rules in order
     // ***********************************************
     [biz.cdoesArrayContainFilename]: (inputData, inputMetaData) => pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData),
     [biz.cgetFileAndPathListForPath]: (inputData, inputMetaData) => pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData),

     // ***********************************************
     // wordArrayParsing rules in order
     // ***********************************************
     [biz.cconvertCamelCaseStringToArray]: (inputData, inputMetaData) => wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData),
     [biz.cgetWordsArrayFromString]: (inputData, inputMetaData) => wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData),
     [biz.crecombineStringArrayWithSpaces]: (inputData, inputMetaData) => wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData),
     [biz.cconvertArrayToCamelCaseString]: (inputData, inputMetaData) => wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData),
     [biz.cdoesArrayContainLowerCaseConsolidatedString]: (inputData, inputMetaData) => wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData),
     [biz.cascertainMatchingElements]: (inputData, inputMetaData) => wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData),

     // ***********************************************************************
     // END ArrayParsing category
     // ***********************************************************************

     // ***********************************************************************
     // BEGIN StringParsing category
     // ***********************************************************************
     // ***********************************************
     // auxiliaryStringParsing rules in order
     // ***********************************************
     // NONE - getNowMoment was here, but it was a wrapper function, so it was removed.
     // I am going to leave this here as a landing place for future auxiliaryStringParsing utility business rules.

     // ***********************************************
     // characterStringParsing rules in order
     // ***********************************************
     [biz.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
     [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
     [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
     [biz.creplaceSpacesWithPlus]: (inputData, inputMetaData) => characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData),
     [biz.creplaceColonWithUnderscore]: (inputData, inputMetaData) => characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData),
     [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
     [biz.cconvertStringToLowerCase]: (inputData, inputMetaData) => characterStringParsing.convertStringToLowerCase(inputData, inputMetaData),
     [biz.cconvertStringToUpperCase]: (inputData, inputMetaData) => characterStringParsing.convertStringToUpperCase(inputData, inputMetaData),
     [biz.cdoesStringContainUpperCaseCharacter]: (inputData, inputMetaData) => characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData),
     [biz.cdoesStringContainLowerCaseCharacter]: (inputData, inputMetaData) => characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData),
     [biz.cisFirstCharacterLowerCase]: (inputData, inputMetaData) => characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData),
     [biz.cisFirstCharacterUpperCase]: (inputData, inputMetaData) => characterStringParsing.isFirstCharacterUpperCase(inputData, inputMetaData),
     [biz.creplaceCharacterAtIndexOfString]: (inputData, inputMetaData) => characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData),

      // ***********************************************
     // commandStringParsing rules in order
     // ***********************************************
     [biz.ccleanCommandInput]: (inputData, inputMetaData) => commandStringParsing.cleanCommandInput(inputData, inputMetaData),
     [biz.cisValidCommandNameString]: (inputData, inputMetaData) => commandStringParsing.isValidCommandNameString(inputData, inputMetaData),

     // ***********************************************
     // constantStringParsing rules in order
     // ***********************************************
     [biz.cvalidateConstantsDataValidation]: (inputData, inputMetaData) => constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData),
     [biz.cdetermineConstantsContextQualifiedPrefix]: (inputData, inputMetaData) => constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData),
     [biz.cdetermineSuggestedConstantsValidationLineOfCode]: (inputData, inputMetaData) => constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValidationLineItemName]: (inputData, inputMetaData) => constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData),
     [biz.cdoesConstantExist]: (inputData, inputMetaData) => constantStringParsing.doesConstantExist(inputData, inputMetaData),
     [biz.cgetConstantType]: (inputData, inputMetaData) => constantStringParsing.getConstantType(inputData, inputMetaData),
     [biz.cgetConstantActualValue]: (inputData, inputMetaData) => constantStringParsing.getConstantActualValue(inputData, inputMetaData),
     [biz.cgetConstantName]: (inputData, inputMetaData) => constantStringParsing.getConstantName(inputData, inputMetaData),
     [biz.cfindConstantName]: (inputData, inputMetaData) => constantStringParsing.findConstantName(inputData, inputMetaData),
     [biz.cisConstantTypeValid]: (inputData, inputMetaData) => constantStringParsing.isConstantTypeValid(inputData, inputMetaData),
     [biz.cconvertConstantTypeToConstantPrefix]: (inputData, inputMetaData) => constantStringParsing.convertConstantTypeToConstantPrefix(inputData, inputMetaData),
     [biz.cconstantsOptimizedFulfillmentSystem]: (inputData, inputMetaData) => constantStringParsing.constantsOptimizedFulfillmentSystem(inputData, inputMetaData),
     [biz.cconstantsFulfillmentSystem]: (inputData, inputMetaData) => constantStringParsing.constantsFulfillmentSystem(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValues]: (inputData, inputMetaData) => constantStringParsing.validateConstantsDataValues(inputData, inputMetaData),
     [biz.cisConstantValid]: (inputData, inputMetaData) => constantStringParsing.isConstantValid(inputData, inputMetaData),

     // ***********************************************
     // dataStringParsing rules in order
     // ***********************************************
     [biz.cgetAttributeName]: (inputData, inputMetaData) => dataStringParsing.getAttributeName(inputData, inputMetaData),
     [biz.cgetAttributeValue]: (inputData, inputMetaData) => dataStringParsing.getAttributeValue(inputData, inputMetaData),
     [biz.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => dataStringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData),
     [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
     [biz.cgetDataCategoryDetailNameFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryDetailNameFromDataContextName(inputData, inputMetaData),
     [biz.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData),
     [biz.cloadDataFile]: (inputData, inputMetaData) => dataStringParsing.loadDataFile(inputData, inputMetaData),
     [biz.csaveDataFile]: (inputData, inputMetaData) => dataStringParsing.saveDataFile(inputData, inputMetaData),
     [biz.cgetUserNameFromEmail]: (inputData, inputMetaData) => dataStringParsing.getUserNameFromEmail(inputData, inputMetaData),

     // ***********************************************
     // fileStringParsing rules in order
     // ***********************************************
     [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
     [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
     [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
     [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
     [biz.cascertainMatchingFilenames]: (inputData, inputMetaData) => fileStringParsing.ascertainMatchingFilenames(inputData, inputMetaData),
     [biz.csupportedFileFormatsAre]: (inputData, inputMetaData) => fileStringParsing.supportedFileFormatsAre(inputData, inputMetaData),
     [biz.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => fileStringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
     [biz.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => fileStringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData),

     // ***********************************************
     // wordStringParsing rules in order
     // ***********************************************
     [biz.cisStringCamelCase]: (inputData, inputMetaData) => wordStringParsing.isStringCamelCase(inputData, inputMetaData),
     [biz.cmapWordToCamelCaseWord]: (inputData, inputMetaData) => wordStringParsing.mapWordToCamelCaseWord(inputData, inputMetaData),
     [biz.csimplifyAndConsolidateString]: (inputData, inputMetaData) => wordStringParsing.simplifyAndConsolidateString(inputData, inputMetaData),
     [biz.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => wordStringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
     [biz.ccountCamelCaseWords]: (inputData, inputMetaData) => wordStringParsing.countCamelCaseWords(inputData, inputMetaData),
     [biz.cdoesStringContainAcronym]: (inputData, inputMetaData) => wordStringParsing.doesStringContainAcronym(inputData, inputMetaData),
     [biz.cdetermineWordDelimiter]: (inputData, inputMetaData) => wordStringParsing.determineWordDelimiter(inputData, inputMetaData),
     [biz.ccountDelimiterInString]: (inputData, inputMetaData) => wordStringParsing.countDelimiterInString(inputData, inputMetaData),
     [biz.cgetWordCountInString]: (inputData, inputMetaData) => wordStringParsing.getWordCountInString(inputData, inputMetaData),
     [biz.cisStringList]: (inputData, inputMetaData) => wordStringParsing.isStringList(inputData, inputMetaData),
     [biz.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
     // ***********************************************************************
     // END StringParsing category
     // ***********************************************************************

     // ***********************************************
     // characterGeneration rules in order
     // ***********************************************
     [biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateMixedCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateNumberInRange]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange(inputData, inputMetaData),
     [biz.crandomlyGenerateBooleanValue]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue(inputData, inputMetaData),
     [biz.crandomlyGenerateMixedCaseAlphabeticCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter(inputData, inputMetaData),
     [biz.cconvertNumberToUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData),
     [biz.cconvertNumberToLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData),

     // ***********************************************
     // fileOperations rules in order
     // ***********************************************
     [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
     [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData),
     [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
     [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
     [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
     [biz.cscanDirectoryContents]: (inputData, inputMetaData) => fileOperations.scanDirectoryContents(inputData, inputMetaData),
     [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
     [biz.creadDirectorySynchronously]: (inputData, inputMetaData) => fileOperations.readDirectorySynchronously(inputData, inputMetaData),
     [biz.ccopyAllFilesAndFoldersFromFolderToFolder]: (inputData, inputMetaData) => fileOperations.copyAllFilesAndFoldersFromFolderToFolder(inputData, inputMetaData),
     [biz.cbuildReleasePackage]: (inputData, inputMetaData) => fileOperations.buildReleasePackage(inputData, inputMetaData),
     [biz.ccreateZipArchive]: (inputData, inputMetaData) => fileOperations.createZipArchive(inputData, inputMetaData),
     [biz.ccleanRootPath]: (inputData, inputMetaData) => fileOperations.cleanRootPath(inputData, inputMetaData),
     [biz.ccopyFileSync]: (inputData, inputMetaData) => fileOperations.copyFileSync(inputData, inputMetaData),
     [biz.ccopyFolderRecursiveSync]: (inputData, inputMetaData) => fileOperations.copyFolderRecursiveSync(inputData, inputMetaData),
     [biz.cappendMessageToFile]: (inputData, inputMetaData) => fileOperations.appendMessageToFile(inputData, inputMetaData),

     // ***********************************************
     // lexicalAnalyzer rules in order
     // ***********************************************
     [biz.cparseBusinessRuleArgument]: (inputData, inputMetaData) => lexicalAnalyzer.parseBusinessRuleArgument(inputData, inputMetaData),
     [biz.canalyzeArgument]: (inputData, inputMetaData) => lexicalAnalyzer.analyzeArgument(inputData, inputMetaData),
     [biz.canalyzeForRegularExpression]: (inputData, inputMetaData) => lexicalAnalyzer.analyzeForRegularExpression(inputData, inputMetaData),
     [biz.cparseArumentAsRegularExpression]: (inputData, inputMetaData) => lexicalAnalyzer.parseArumentAsRegularExpression(inputData, inputMetaData),
     [biz.cparseArgumentAsArray]: (inputData, inputMetaData) => lexicalAnalyzer.parseArgumentAsArray(inputData, inputMetaData),
     [biz.cremoveStringLiteralTagsFromArray]: (inputData, inputMetaData) => lexicalAnalyzer.removeStringLiteralTagsFromArray(inputData, inputMetaData),

     // ***********************************************
     // mathOperations rules in order
     // ***********************************************
     [biz.chex2rgbConversion]: (inputData, inputMetaData) => mathOperations.hex2rgbConversion(inputData, inputMetaData),
     [biz.cisOdd]: (inputData, inputMetaData) => mathOperations.isOdd(inputData, inputMetaData),
     [biz.cisEven]: (inputData, inputMetaData) => mathOperations.isEven(inputData, inputMetaData),

     // ***********************************************
     // promptOperations rules in order
     // ***********************************************
     [biz.cprompt]: (inputData, inputMetaData) => promptOperations.prompt(inputData, inputMetaData),

     // ***********************************************
     // ruleParsing rules in order
     // ***********************************************
     [biz.cdoAllRulesExist]: (inputData, inputMetaData) => ruleParsing.doAllRulesExist(inputData, inputMetaData),
     [biz.cdoesRuleExist]: (inputData, inputMetaData) => ruleParsing.doesRuleExist(inputData, inputMetaData),
     [biz.cgetRule]: (inputData, inputMetaData) => ruleParsing.getRule(inputData, inputMetaData),
     [biz.cprocessRulesInternal]: (inputData, inputMetaData) => ruleParsing.processRulesInternal(inputData, inputMetaData),

     // ***********************************************
     // stringGeneration rules in order
     // ***********************************************
     [biz.cgenerateRandomMixedCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomSpecialCharacterCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength(inputData, inputMetaData),
     [biz.cgenerateValidEmail]: (inputData, inputMetaData) => stringGeneration.generateValidEmail(inputData, inputMetaData),
     [biz.cgenerateInvalidEmail]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail(inputData, inputMetaData),
     [biz.cgenerateRandomBrightColor]: (inputData, inputMetaData) => stringGeneration.generateRandomBrightColor(inputData, inputMetaData),
     [biz.cgenerateRandomDarkColor]: (inputData, inputMetaData) => stringGeneration.generateRandomDarkColor(inputData, inputMetaData),
     [biz.cgenerateRandomColor]: (inputData, inputMetaData) => stringGeneration.generateRandomColor(inputData, inputMetaData),

     // ***********************************************
     // stringParsingutilities rules in order
     // ***********************************************
     [biz.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsingUtilities.parseSystemRootPath(inputData, inputMetaData),
     [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
     [biz.cstringToBoolean]: (inputData, inputMetaData) => stringParsingUtilities.stringToBoolean(inputData, inputMetaData),
     [biz.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsingUtilities.determineObjectDataType(inputData, inputMetaData),
     [biz.cisBoolean]: (inputData, inputMetaData) => stringParsingUtilities.isBoolean(inputData, inputMetaData),
     [biz.cisInteger]: (inputData, inputMetaData) => stringParsingUtilities.isInteger(inputData, inputMetaData),
     [biz.cisFloat]: (inputData, inputMetaData) => stringParsingUtilities.isFloat(inputData, inputMetaData),
     [biz.cisString]: (inputData, inputMetaData) => stringParsingUtilities.isString(inputData, inputMetaData),
     [biz.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsingUtilities.replaceDoublePercentWithMessage(inputData, inputMetaData),
     [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),

     // ***********************************************
     // timeComputation rules in order
     // ***********************************************
     [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
     [biz.ccomputeDeltaTime]: (inputData, inputMetaData) => timeComputation.computeDeltaTime(inputData, inputMetaData),
     [biz.creformatDeltaTime]: (inputData, inputMetaData) => timeComputation.reformatDeltaTime(inputData, inputMetaData),
     [biz.csleep]: (inputData, inputMetaData) => timeComputation.sleep(inputData, inputMetaData),
   }
   // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initRulesLibrary
};
