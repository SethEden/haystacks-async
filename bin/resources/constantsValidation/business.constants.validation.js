/**
 * @file business.constants.validation.js
 * @module business.constants.validation
 * @description Contains all validations for business rule constants.
 * @requires module:business.constants
 * @author Seth Hollingsead
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as biz from '../../constants/business.constants.js';

/**
 * @function businessConstantsValidation
 * @description Initializes the business constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const businessConstantsValidation = [
  // Business Rules
  {Name: 'cecho', Actual: biz.cecho, Expected: 'echo'},
  {Name: 'cEcho', Actual: biz.cEcho, Expected: 'Echo'},

  // ***********************************************
  // ArrayParsing rules in order
  // ***********************************************
  {Name: 'creplaceCharacterWithCharacter', Actual: biz.creplaceCharacterWithCharacter, Expected: 'replaceCharacterWithCharacter'},
  {Name: 'cconvertCamelCaseStringToArray', Actual: biz.cconvertCamelCaseStringToArray, Expected: 'convertCamelCaseStringToArray'},
  {Name: 'cgetWordsArrayFromString', Actual: biz.cgetWordsArrayFromString, Expected: 'getWordsArrayFromString'},
  {Name: 'crecombineStringArrayWithSpaces', Actual: biz.crecombineStringArrayWithSpaces, Expected: 'recombineStringArrayWithSpaces'},
  {Name: 'cconvertArrayToCamelCaseString', Actual: biz.cconvertArrayToCamelCaseString, Expected: 'convertArrayToCamelCaseString'},
  {Name: 'cdoesArrayContainLowerCaseConsolidatedString', Actual: biz.cdoesArrayContainLowerCaseConsolidatedString, Expected: 'doesArrayContainLowerCaseConsolidatedString'},
  {Name: 'cdoesArrayContainCharacter', Actual: biz.cdoesArrayContainCharacter, Expected: 'doesArrayContainCharacter'},
  {Name: 'cremoveCharacterFromArray', Actual: biz.cremoveCharacterFromArray, Expected: 'removeCharacterFromArray'},
  {Name: 'cascertainMatchingElements', Actual: biz.cascertainMatchingElements, Expected: 'ascertainMatchingElements'},
  {Name: 'cdoesArrayContainFilename', Actual: biz.cdoesArrayContainFilename, Expected: 'doesArrayContainFilename'},
  {Name: 'creadDirectoryContents', Actual: biz.creadDirectoryContents, Expected: 'readDirectoryContents'},
  {Name: 'cgetLengthOfLongestStringInArray', Actual: biz.cgetLengthOfLongestStringInArray, Expected: 'getLengthOfLongestStringInArray'},
  {Name: 'csearchForPatternsInStringArray', Actual: biz.csearchForPatternsInStringArray, Expected: 'searchForPatternsInStringArray'},
  {Name: 'cvalidatePatternsThatNeedImplementation', Actual: biz.cvalidatePatternsThatNeedImplementation, Expected: 'validatePatternsThatNeedImplementation'},
  {Name: 'csolveLehmerCode', Actual: biz.csolveLehmerCode, Expected: 'solveLehmerCode'},
  {Name: 'crecursiveArrayExpansion', Actual: biz.crecursiveArrayExpansion, Expected: 'recursiveArrayExpansion'},
  {Name: 'cgetLehmerCodeValue', Actual: biz.cgetLehmerCodeValue, Expected: 'getLehmerCodeValue'},
  {Name: 'carraysAreEqual', Actual: biz.carraysAreEqual, Expected: 'arraysAreEqual'},
  {Name: 'cstoreData', Actual: biz.cstoreData, Expected: 'storeData'},
  {Name: 'cgetStoredData', Actual: biz.cgetStoredData, Expected: 'getStoredData'},
  {Name: 'cisObjectEmpty', Actual: biz.cisObjectEmpty, Expected: 'isObjectEmpty'},
  {Name: 'cisArrayEmpty', Actual: biz.cisArrayEmpty, Expected: 'isArrayEmpty'},
  {Name: 'cisObject', Actual: biz.cisObject, Expected: 'isObject'},
  {Name: 'cisArray', Actual: biz.cisArray, Expected: 'isArray'},
  {Name: 'cisArrayOrObject', Actual: biz.cisArrayOrObject, Expected: 'isArrayOrObject'},
  {Name: 'cisNonZeroLengthArray', Actual: biz.cisNonZeroLengthArray, Expected: 'isNonZeroLengthArray'},
  {Name: 'carrayDeepClone', Actual: biz.carrayDeepClone, Expected: 'arrayDeepClone'},
  {Name: 'creplaceCharacterAtIndex', Actual: biz.creplaceCharacterAtIndex, Expected: 'replaceCharacterAtIndex'},
  {Name: 'cgenerateCommandAliases', Actual: biz.cgenerateCommandAliases, Expected: 'generateCommandAliases'},
  {Name: 'caggregateCommandArguments', Actual: biz.caggregateCommandArguments, Expected: 'aggregateCommandArguments'},
  {Name: 'cgetFileAndPathListForPath', Actual: biz.cgetFileAndPathListForPath, Expected: 'getFileAndPathListForPath'},
  {Name: 'cparseColorRangeInputs', Actual: biz.cparseColorRangeInputs, Expected: 'parseColorRangeInputs'},
  {Name: 'cdoesArrayContainValue', Actual: biz.cdoesArrayContainValue, Expected: 'doesArrayContainValue'},

  // ***********************************************
  // characterGeneration rules in order
  // ***********************************************
  {Name: 'crandomlyGenerateMixedCaseLetterOrSpecialCharacter', Actual: biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter, Expected: 'randomlyGenerateMixedCaseLetterOrSpecialCharacter'},
  {Name: 'crandomlyGenerateUpperCaseLetterOrSpecialCharacter', Actual: biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter, Expected: 'randomlyGenerateUpperCaseLetterOrSpecialCharacter'},
  {Name: 'crandomlyGenerateLowerCaseLetterOrSpecialCharacter', Actual: biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter, Expected: 'randomlyGenerateLowerCaseLetterOrSpecialCharacter'},
  {Name: 'crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter', Actual: biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter, Expected: 'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter'},
  {Name: 'crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter', Actual: biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter, Expected: 'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter'},
  {Name: 'crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter', Actual: biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter, Expected: 'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter'},
  {Name: 'crandomlyGenerateMixedCaseAlphaNumericCharacter', Actual: biz.crandomlyGenerateMixedCaseAlphaNumericCharacter, Expected: 'randomlyGenerateMixedCaseAlphaNumericCharacter'},
  {Name: 'crandomlyGenerateUpperCaseAlphaNumericCharacter', Actual: biz.crandomlyGenerateUpperCaseAlphaNumericCharacter, Expected: 'randomlyGenerateUpperCaseAlphaNumericCharacter'},
  {Name: 'crandomlyGenerateLowerCaseAlphaNumericCharacter', Actual: biz.crandomlyGenerateLowerCaseAlphaNumericCharacter, Expected: 'randomlyGenerateLowerCaseAlphaNumericCharacter'},
  {Name: 'crandomlyGenerateNumericCharacter', Actual: biz.crandomlyGenerateNumericCharacter, Expected: 'randomlyGenerateNumericCharacter'},
  {Name: 'crandomlyGenerateSpecialCharacter', Actual: biz.crandomlyGenerateSpecialCharacter, Expected: 'randomlyGenerateSpecialCharacter'},
  {Name: 'crandomlyGenerateNumberInRange', Actual: biz.crandomlyGenerateNumberInRange, Expected: 'randomlyGenerateNumberInRange'},
  {Name: 'crandomlyGenerateBooleanValue', Actual: biz.crandomlyGenerateBooleanValue, Expected: 'randomlyGenerateBooleanValue'},
  {Name: 'crandomlyGenerateMixedCaseAlphabeticCharacter', Actual: biz.crandomlyGenerateMixedCaseAlphabeticCharacter, Expected: 'randomlyGenerateMixedCaseAlphabeticCharacter'},
  {Name: 'crandomlyGenerateLowerCaseLetter', Actual: biz.crandomlyGenerateLowerCaseLetter, Expected: 'randomlyGenerateLowerCaseLetter'},
  {Name: 'crandomlyGenerateUpperCaseLetter', Actual: biz.crandomlyGenerateUpperCaseLetter, Expected: 'randomlyGenerateUpperCaseLetter'},
  {Name: 'cconvertNumberToUpperCaseLetter', Actual: biz.cconvertNumberToUpperCaseLetter, Expected: 'convertNumberToUpperCaseLetter'},
  {Name: 'cconvertNumberToLowerCaseLetter', Actual: biz.cconvertNumberToLowerCaseLetter, Expected: 'convertNumberToLowerCaseLetter'},

  // ***********************************************
  // mathOperations rules in order
  // ***********************************************
  {Name: 'chex2rgbConversion', Actual: biz.chex2rgbConversion, Expected: 'hex2rgbConversion'},
  {Name: 'cisOdd', Actual: biz.cisOdd, Expected: 'isOdd'},
  {Name: 'cisEven', Actual: biz.cisEven, Expected: 'isEven'},

  // ***********************************************
  // stringGeneration rules in order
  // ***********************************************
  {Name: 'cgenerateRandomMixedCaseTextByLength', Actual: biz.cgenerateRandomMixedCaseTextByLength, Expected: 'generateRandomMixedCaseTextByLength'},
  {Name: 'cgenerateRandomUpperCaseTextByLength', Actual: biz.cgenerateRandomUpperCaseTextByLength, Expected: 'generateRandomUpperCaseTextByLength'},
  {Name: 'cgenerateRandomLowerCaseTextByLength', Actual: biz.cgenerateRandomLowerCaseTextByLength, Expected: 'generateRandomLowerCaseTextByLength'},
  {Name: 'cgenerateRandomMixedCaseTextWithSpecialCharactersByLength', Actual: biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength, Expected: 'generateRandomMixedCaseTextWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomUpperCaseTextWithSpecialCharactersByLength', Actual: biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength, Expected: 'generateRandomUpperCaseTextWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomLowerCaseTextWithSpecialCharactersByLength', Actual: biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength, Expected: 'generateRandomLowerCaseTextWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomMixedCaseAlphaNumericCodeByLength', Actual: biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength, Expected: 'generateRandomMixedCaseAlphaNumericCodeByLength'},
  {Name: 'cgenerateRandomUpperCaseAlphaNumericCodeByLength', Actual: biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength, Expected: 'generateRandomUpperCaseAlphaNumericCodeByLength'},
  {Name: 'cgenerateRandomLowerCaseAlphaNumericCodeByLength', Actual: biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength, Expected: 'generateRandomLowerCaseAlphaNumericCodeByLength'},
  {Name: 'cgenerateRandomNumericCodeByLength', Actual: biz.cgenerateRandomNumericCodeByLength, Expected: 'generateRandomNumericCodeByLength'},
  {Name: 'cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength', Actual: biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength, Expected: 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength', Actual: biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength, Expected: 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength', Actual: biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength, Expected: 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength'},
  {Name: 'cgenerateRandomSpecialCharacterCodeByLength', Actual: biz.cgenerateRandomSpecialCharacterCodeByLength, Expected: 'generateRandomSpecialCharacterCodeByLength'},
  {Name: 'cgenerateValidEmail', Actual: biz.cgenerateValidEmail, Expected: 'generateValidEmail'},
  {Name: 'cgenerateInvalidEmail', Actual: biz.cgenerateInvalidEmail, Expected: 'generateInvalidEmail'},
  {Name: 'cgenerateValidEmailWithSpecificSuffixAndDomainName', Actual: biz.cgenerateValidEmailWithSpecificSuffixAndDomainName, Expected: 'generateValidEmailWithSpecificSuffixAndDomainName'},
  {Name: 'cgenerateRandomValidEmail', Actual: biz.cgenerateRandomValidEmail, Expected: 'generateRandomValidEmail'},
  {Name: 'cgenerateInvalidEmailWithSpecificSuffixAndDomainName', Actual: biz.cgenerateInvalidEmailWithSpecificSuffixAndDomainName, Expected: 'generateInvalidEmailWithSpecificSuffixAndDomainName'},
  {Name: 'cgenerateRandomInvalidEmail', Actual: biz.cgenerateRandomInvalidEmail, Expected: 'generateRandomInvalidEmail'},
  {Name: 'cgenerateRandomBrightColor', Actual: biz.cgenerateRandomBrightColor, Expected: 'generateRandomBrightColor'},
  {Name: 'cgenerateRandomDarkColor', Actual: biz.cgenerateRandomDarkColor, Expected: 'generateRandomDarkColor'},
  {Name: 'cgenerateRandomColor', Actual: biz.cgenerateRandomColor, Expected: 'generateRandomColor'},

  // ***********************************************
  // StringParsing rules in order
  // ***********************************************
  {Name: 'csingleQuoteSwapAfterEquals', Actual: biz.csingleQuoteSwapAfterEquals, Expected: 'singleQuoteSwapAfterEquals'},
  {Name: 'cswapForwardSlashToBackSlash', Actual: biz.cswapForwardSlashToBackSlash, Expected: 'swapForwardSlashToBackSlash'},
  {Name: 'cswapBackSlashToForwardSlash', Actual: biz.cswapBackSlashToForwardSlash, Expected: 'swapBackSlashToForwardSlash'},
  {Name: 'cswapDoubleForwardSlashToSingleForwardSlash', Actual: biz.cswapDoubleForwardSlashToSingleForwardSlash, Expected: 'swapDoubleForwardSlashToSingleForwardSlash'},
  {Name: 'cswapDoubleBackSlashToSingleBackSlash', Actual: biz.cswapDoubleBackSlashToSingleBackSlash, Expected: 'swapDoubleBackSlashToSingleBackSlash'},
  {Name: 'cgetUserNameFromEmail', Actual: biz.cgetUserNameFromEmail, Expected: 'getUserNameFromEmail'},
  {Name: 'creplaceSpacesWithPlus', Actual: biz.creplaceSpacesWithPlus, Expected: 'replaceSpacesWithPlus'},
  {Name: 'creplaceColonWithUnderscore', Actual: biz.creplaceColonWithUnderscore, Expected: 'replaceColonWithUnderscore'},
  {Name: 'ccleanCarriageReturnFromString', Actual: biz.ccleanCarriageReturnFromString, Expected: 'cleanCarriageReturnFromString'},
  {Name: 'cconvertStringToLowerCase', Actual: biz.cconvertStringToLowerCase, Expected: 'convertStringToLowerCase'},
  {Name: 'cconvertStringToUpperCase', Actual: biz.cconvertStringToUpperCase, Expected: 'convertStringToUpperCase'},
  {Name: 'cgetFileNameFromPath', Actual: biz.cgetFileNameFromPath, Expected: 'getFileNameFromPath'},
  {Name: 'cgetFileExtension', Actual: biz.cgetFileExtension, Expected: 'getFileExtension'},
  {Name: 'cremoveDotFromFileExtension', Actual: biz.cremoveDotFromFileExtension, Expected: 'removeDotFromFileExtension'},
  {Name: 'cremoveFileExtensionFromFileName', Actual: biz.cremoveFileExtensionFromFileName, Expected: 'removeFileExtensionFromFileName'},
  {Name: 'cgetValueFromAssignmentOperationString', Actual: biz.cgetValueFromAssignmentOperationString, Expected: 'getValueFromAssignmentOperationString'},
  {Name: 'caggregateNumericalDifferenceBetweenTwoStrings', Actual: biz.caggregateNumericalDifferenceBetweenTwoStrings, Expected: 'aggregateNumericalDifferenceBetweenTwoStrings'},
  {Name: 'ccountCamelCaseWords', Actual: biz.ccountCamelCaseWords, Expected: 'countCamelCaseWords'},
  {Name: 'cdoesStringContainAcronym', Actual: biz.cdoesStringContainAcronym, Expected: 'doesStringContainAcronym'},
  {Name: 'ccountDelimiterInString', Actual: biz.ccountDelimiterInString, Expected: 'countDelimiterInString'},
  {Name: 'cdetermineWordDelimiter', Actual: biz.cdetermineWordDelimiter, Expected: 'determineWordDelimiter'},
  {Name: 'cgetWordCountInString', Actual: biz.cgetWordCountInString, Expected: 'getWordCountInString'},
  {Name: 'cdoesStringContainUpperCaseCharacter', Actual: biz.cdoesStringContainUpperCaseCharacter, Expected: 'doesStringContainUpperCaseCharacter'},
  {Name: 'cdoesStringContainLowerCaseCharacter', Actual: biz.cdoesStringContainLowerCaseCharacter, Expected: 'doesStringContainLowerCaseCharacter'},
  {Name: 'cisFirstCharacterLowerCase', Actual: biz.cisFirstCharacterLowerCase, Expected: 'isFirstCharacterLowerCase'},
  {Name: 'cisFirstCharacterUpperCase', Actual: biz.cisFirstCharacterUpperCase, Expected: 'isFirstCharacterUpperCase'},
  {Name: 'cisStringList', Actual: biz.cisStringList, Expected: 'isStringList'},
  {Name: 'cisStringCamelCase', Actual: biz.cisStringCamelCase, Expected: 'isStringCamelCase'},
  {Name: 'cmapWordToCamelCaseWord', Actual: biz.cmapWordToCamelCaseWord, Expected: 'mapWordToCamelCaseWord'},
  {Name: 'csimplifyAndConsolidateString', Actual: biz.csimplifyAndConsolidateString, Expected: 'simplifyAndConsolidateString'},
  {Name: 'ccompareSimplifiedAndConsolidatedStrings', Actual: biz.ccompareSimplifiedAndConsolidatedStrings, Expected: 'compareSimplifiedAndConsolidatedStrings'},
  {Name: 'cascertainMatchingFilenames', Actual: biz.cascertainMatchingFilenames, Expected: 'ascertainMatchingFilenames'},
  {Name: 'cvalidateConstantsDataValidation', Actual: biz.cvalidateConstantsDataValidation, Expected: 'validateConstantsDataValidation'},
  {Name: 'cdetermineConstantsContextQualifiedPrefix', Actual: biz.cdetermineConstantsContextQualifiedPrefix, Expected: 'determineConstantsContextQualifiedPrefix'},
  {Name: 'cdetermineSuggestedConstantsValidationLineOfCode', Actual: biz.cdetermineSuggestedConstantsValidationLineOfCode, Expected: 'determineSuggestedConstantsValidationLineOfCode'},
  {Name: 'cvalidateConstantsDataValidationLineItemName', Actual: biz.cvalidateConstantsDataValidationLineItemName, Expected: 'validateConstantsDataValidationLineItemName'},
  {Name: 'cdoesConstantExist', Actual: biz.cdoesConstantExist, Expected: 'doesConstantExist'},
  {Name: 'cgetConstantType', Actual: biz.cgetConstantType, Expected: 'getConstantType'},
  {Name: 'cgetConstantActualValue', Actual: biz.cgetConstantActualValue, Expected: 'getConstantActualValue'},
  {Name: 'cgetConstantName', Actual: biz.cgetConstantName, Expected: 'getConstantName'},
  {Name: 'cfindConstantName', Actual: biz.cfindConstantName, Expected: 'findConstantName'},
  {Name: 'cisConstantTypeValid', Actual: biz.cisConstantTypeValid, Expected: 'isConstantTypeValid'},
  {Name: 'cconvertConstantTypeToConstantPrefix', Actual: biz.cconvertConstantTypeToConstantPrefix, Expected: 'convertConstantTypeToConstantPrefix'},
  {Name: 'cconstantsOptimizedFulfillmentSystem', Actual: biz.cconstantsOptimizedFulfillmentSystem, Expected: 'constantsOptimizedFulfillmentSystem'},
  {Name: 'cconstantsFulfillmentSystem', Actual: biz.cconstantsFulfillmentSystem, Expected: 'constantsFulfillmentSystem'},
  {Name: 'cvalidateConstantsDataValues', Actual: biz.cvalidateConstantsDataValues, Expected: 'validateConstantsDataValues'},
  {Name: 'cisValidCommandNameString', Actual: biz.cisValidCommandNameString, Expected: 'isValidCommandNameString'},
  {Name: 'cisConstantValid', Actual: biz.cisConstantValid, Expected: 'isConstantValid'},
  {Name: 'ccountDuplicateCommandAliases', Actual: biz.ccountDuplicateCommandAliases, Expected: 'countDuplicateCommandAliases'},
  {Name: 'cgetDataCatagoryFromDataContextName', Actual: biz.cgetDataCatagoryFromDataContextName, Expected: 'getDataCatagoryFromDataContextName'},
  {Name: 'cgetDataCatagoryDetailNameFromDataContextName', Actual: biz.cgetDataCatagoryDetailNameFromDataContextName, Expected: 'getDataCatagoryDetailNameFromDataContextName'},
  {Name: 'cgetKeywordNameFromDataContextName', Actual: biz.cgetKeywordNameFromDataContextName, Expected: 'getKeywordNameFromDataContextName'},
  {Name: 'cremoveXnumberOfFoldersFromEndOfPath', Actual: biz.cremoveXnumberOfFoldersFromEndOfPath, Expected: 'removeXnumberOfFoldersFromEndOfPath'},
  {Name: 'cgetFirstTopLevelFolderFromPath', Actual: biz.cgetFirstTopLevelFolderFromPath, Expected: 'getFirstTopLevelFolderFromPath'},
  {Name: 'cloadDataFile', Actual: biz.cloadDataFile, Expected: 'loadDataFile'},
  {Name: 'csaveDataFile', Actual: biz.csaveDataFile, Expected: 'saveDataFile'},
  {Name: 'csupportedFileFormatsAre', Actual: biz.csupportedFileFormatsAre, Expected: 'supportedFileFormatsAre'},
  {Name: 'ccopyAllFilesAndFoldersFromFolderToFolder', Actual: biz.ccopyAllFilesAndFoldersFromFolderToFolder, Expected: 'copyAllFilesAndFoldersFromFolderToFolder'},
  {Name: 'cgetAttributeName', Actual: biz.cgetAttributeName, Expected: 'getAttributeName'},
  {Name: 'cgetAttributeValue', Actual: biz.cgetAttributeValue, Expected: 'getAttributeValue'},
  {Name: 'ccleanCommandInput', Actual: biz.ccleanCommandInput, Expected: 'cleanCommandInput'},
  {Name: 'cgetNowMoment', Actual: biz.cgetNowMoment, Expected: 'getNowMoment'},
  {Name: 'ccreateZipArchive', Actual: biz.ccreateZipArchive, Expected: 'createZipArchive'},

  // ***********************************************
  // StringParsingUtiities rules in order
  // ***********************************************
  {Name: 'cparseSystemRootPath', Actual: biz.cparseSystemRootPath, Expected: 'parseSystemRootPath'},
  {Name: 'cstringToDataType', Actual: biz.cstringToDataType, Expected: 'stringToDataType'},
  {Name: 'cstringToBoolean', Actual: biz.cstringToBoolean, Expected: 'stringToBoolean'},
  {Name: 'cdetermineObjectDataType', Actual: biz.cdetermineObjectDataType, Expected: 'determineObjectDataType'},
  {Name: 'cisBoolean', Actual: biz.cisBoolean, Expected: 'isBoolean'},
  {Name: 'cisInteger', Actual: biz.cisInteger, Expected: 'isInteger'},
  {Name: 'cisFloat', Actual: biz.cisFloat, Expected: 'isFloat'},
  {Name: 'cisString', Actual: biz.cisString, Expected: 'isString'},
  {Name: 'creplaceDoublePercentWithMessage', Actual: biz.creplaceDoublePercentWithMessage, Expected: 'replaceDoublePercentWithMessage'},
  {Name: 'cutilitiesReplaceCharacterWithCharacter', Actual: biz.cutilitiesReplaceCharacterWithCharacter, Expected: 'utilitiesReplaceCharacterWithCharacter'}
];
