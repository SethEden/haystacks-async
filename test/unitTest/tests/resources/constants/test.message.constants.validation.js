/**
 * @file test.message.constants.validation.js
 * @module test.message.constants.validation
 * @description Contains all validations for named test message constants.
 * @requires module:test.message.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_msg from './test.message.constants.js';

/**
 * @function unitTestMessageConstantsValidation
 * @description Initializes the unit test message constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const unitTestMessageConstantsValidation = [
    // UnitTest String Parsing
    {Name: 'cunitTestStringParsingDotCustomEcho', Actual: tst_msg.cunitTestStringParsingDotCustomEcho, Expected: 'unitTestStringParsing.customEcho'},
  
    // Unit Test Harness
    {Name: 'cargumentDrivenInterfaceIs', Actual: tst_msg.cargumentDrivenInterfaceIs, Expected: 'argumentDrivenInterface is: '},
  
    // Messages
    {Name: 'ccomparisonIterationIs', Actual: tst_msg.ccomparisonIterationIs, Expected: 'comparison iteration is: '},
    {Name: 'cstartingPointIs', Actual: tst_msg.cstartingPointIs, Expected: 'startingPoint is: '},
    {Name: 'cendingPointIs', Actual: tst_msg.cendingPointIs, Expected: 'endingPoint is: '},
    {Name: 'cinputDataDotCharAtJIs', Actual: tst_msg.cinputDataDotCharAtJIs, Expected: 'inputData.charAt(j) is: '},
    {Name: 'cinputDataDotCharAtInputDataDotLengthDash', Actual: tst_msg.cinputDataDotCharAtInputDataDotLengthDash, Expected: 'inputData.charAt(inputData.length - '},
    {Name: 'cCloseParenthesisIs', Actual: tst_msg.cCloseParenthesisIs, Expected: ') is: '},
    {Name: 'cWeGotMismatch', Actual: tst_msg.cWeGotMismatch, Expected: 'We got a mismatch!'},
    {Name: 'cmisCompareCountBeforeIncrementIs', Actual: tst_msg.cmisCompareCountBeforeIncrementIs, Expected: 'misCompareCount before increment is: '},
    {Name: 'cmisCompareCountPostIncrementIs', Actual: tst_msg.cmisCompareCountPostIncrementIs, Expected: 'misCompareCount post increment is: '},
    {Name: 'cmisCompareCountAfterForLoopIs', Actual: tst_msg.cmisCompareCountAfterForLoopIs, Expected: 'misCompareCount after the for-loop is: '},
  
    {Name: 'cmostPopularNumberMessage01', Actual: tst_msg.cmostPopularNumberMessage01, Expected: 'BEGIN first for-loop'},
    {Name: 'cmostPopularNumberMessage02', Actual: tst_msg.cmostPopularNumberMessage02, Expected: 'BEGIN nested for-loop i = '},
    {Name: 'cmostPopularNumberMessage03', Actual: tst_msg.cmostPopularNumberMessage03, Expected: 'BEGIN nested for-loop j = '},
    {Name: 'cmostPopularNumberMessage04', Actual: tst_msg.cmostPopularNumberMessage04, Expected: 'FOUND a MATCH!!'},
    {Name: 'cmostPopularNumberMessage05', Actual: tst_msg.cmostPopularNumberMessage05, Expected: 'inputMetaData[i] is: '},
    {Name: 'cmostPopularNumberMessage06', Actual: tst_msg.cmostPopularNumberMessage06, Expected: 'inputMetaData[j] is: '},
    {Name: 'cmostPopularNumberMessage07', Actual: tst_msg.cmostPopularNumberMessage07, Expected: 'contents of tempArray1 are: '},
    {Name: 'cmostPopularNumberMessage08', Actual: tst_msg.cmostPopularNumberMessage08, Expected: 'END nested for-loop j = '},
    {Name: 'cmostPopularNumberMessage09', Actual: tst_msg.cmostPopularNumberMessage09, Expected: 'END nested for-loop i = '},
    {Name: 'cmostPopularNumberMessage10', Actual: tst_msg.cmostPopularNumberMessage10, Expected: 'END first for-loop'},
    {Name: 'cmostPopularNumberMessage11', Actual: tst_msg.cmostPopularNumberMessage11, Expected: 'BEGIN second for-loop'},
    {Name: 'cmostPopularNumberMessage12', Actual: tst_msg.cmostPopularNumberMessage12, Expected: 'BEGIN iteration j = '},
    {Name: 'cmostPopularNumberMessage13', Actual: tst_msg.cmostPopularNumberMessage13, Expected: 'tempArray1[i] is: '},
    {Name: 'cmostPopularNumberMessage14', Actual: tst_msg.cmostPopularNumberMessage14, Expected: 'instanceCounter before increment is: '},
    {Name: 'cmostPopularNumberMessage15', Actual: tst_msg.cmostPopularNumberMessage15, Expected: 'instanceCounter after increment is: '},
    {Name: 'cmostPopularNumberMessage16', Actual: tst_msg.cmostPopularNumberMessage16, Expected: 'contents of tempArray2 are: '},
    {Name: 'cmostPopularNumberMessage17', Actual: tst_msg.cmostPopularNumberMessage17, Expected: 'END iteration j = '},
    {Name: 'cmostPopularNumberMessage18', Actual: tst_msg.cmostPopularNumberMessage18, Expected: 'END nested for-loop i = '},
    {Name: 'cmostPopularNumberMessage19', Actual: tst_msg.cmostPopularNumberMessage19, Expected: 'END second for-loop'},
    {Name: 'cmostPopularNumberMessage20', Actual: tst_msg.cmostPopularNumberMessage20, Expected: 'BEGIN third for-loop'},
    {Name: 'cmostPopularNumberMessage21', Actual: tst_msg.cmostPopularNumberMessage21, Expected: 'tempArray2.length is: '},
    {Name: 'cmostPopularNumberMessage22', Actual: tst_msg.cmostPopularNumberMessage22, Expected: 'BEGIN iteration i = '},
    {Name: 'cmostPopularNumberMessage23', Actual: tst_msg.cmostPopularNumberMessage23, Expected: 'if-condition i = 0 has been met! i = '},
    {Name: 'cmostPopularNumberMessage24', Actual: tst_msg.cmostPopularNumberMessage24, Expected: 'if-condition-else i <> 0 has been met! i = '},
    {Name: 'cmostPopularNumberMessage25', Actual: tst_msg.cmostPopularNumberMessage25, Expected: 'found one greater'},
    {Name: 'cmostPopularNumberMessage26', Actual: tst_msg.cmostPopularNumberMessage26, Expected: 'tempArray2[i] is: '},
    {Name: 'cmostPopularNumberMessage27', Actual: tst_msg.cmostPopularNumberMessage27, Expected: 'tempArray2[i - 1] is: '},
    {Name: 'cmostPopularNumberMessage28', Actual: tst_msg.cmostPopularNumberMessage28, Expected: 'END iteration i = '},
    {Name: 'cmostPopularNumberMessage29', Actual: tst_msg.cmostPopularNumberMessage29, Expected: 'END third for-loop'},
    {Name: 'cmostPopularNumberMessage30', Actual: tst_msg.cmostPopularNumberMessage30, Expected: 'INVALID ENTRY: Please enter some valid numbers.'},
  
    {Name: 'cisAlmostPalindromeInvalidEntry', Actual: tst_msg.cisAlmostPalindromeInvalidEntry, Expected: 'INVALID ENTRY: Please enter some valid string.'},
    {Name: 'cstringInputIs', Actual: tst_msg.cstringInputIs, Expected: 'stringInput is: '},
    {Name: 'cstringArrayIs', Actual: tst_msg.cstringArrayIs, Expected: 'stringArray is: '},
    {Name: 'cthreePointAverageInvalidInput', Actual: tst_msg.cthreePointAverageInvalidInput, Expected: 'INVALID ENTRY: Please enter 3 arrays of numbers each containing 2 numbers in the following format: '},
    {Name: 'cthreePointAverageInputFormat', Actual: tst_msg.cthreePointAverageInputFormat, Expected: '[x1,y1] [x2,y2] [x3,y3]'},
    {Name: 'cx1Is', Actual: tst_msg.cx1Is, Expected: 'x1 is: '},
    {Name: 'cy1Is', Actual: tst_msg.cy1Is, Expected: 'y1 is: '},
    {Name: 'cx2Is', Actual: tst_msg.cx2Is, Expected: 'x2 is: '},
    {Name: 'cy2Is', Actual: tst_msg.cy2Is, Expected: 'y2 is: '},
    {Name: 'cx3Is', Actual: tst_msg.cx3Is, Expected: 'x3 is: '},
    {Name: 'cy3Is', Actual: tst_msg.cy3Is, Expected: 'y3 is: '},
    {Name: 'cx1x2x3Is', Actual: tst_msg.cx1x2x3Is, Expected: 'x1 + x2 + x3 is: '},
    {Name: 'cy1y2y3Is', Actual: tst_msg.cy1y2y3Is, Expected: 'y1 + y2 + y3 is: '},
  
    // Constants Validation
    {Name: 'callUnitTestConstantsValidationDataIs', Actual: tst_msg.callUnitTestConstantsValidationDataIs, Expected: 'allUnitTestConstantsValidationData is: '},
    {Name: 'cresolvedConstantsPath_UnitTestBusinessIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestBusinessIs, Expected: 'resolvedConstantsPath_UnitTestBusiness is: '},
    {Name: 'cresolvedConstantsPath_UnitTestCommandIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestCommandIs, Expected: 'resolvedConstantsPath_UnitTestCommand is: '},
    {Name: 'cresolvedConstantsPath_UnitTestConfigurationIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestConfigurationIs, Expected: 'resolvedConstantsPath_UnitTestConfiguration is: '},
    {Name: 'cresolvedConstantsPath_UnitTestConstantIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestConstantIs, Expected: 'resolvedConstantsPath_UnitTestConstant is: '},
    {Name: 'cresolvedConstantsPath_UnitTestMessageIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestMessageIs, Expected: 'resolvedConstantsPath_UnitTestMessage is: '},
    {Name: 'cresolvedConstantsPath_UnitTestSystemIs', Actual: tst_msg.cresolvedConstantsPath_UnitTestSystemIs, Expected: 'resolvedConstantsPath_UnitTestSystem is: '},
  
    {Name: 'cunitTestBusinessConstantsPhase1Validation', Actual: tst_msg.cunitTestBusinessConstantsPhase1Validation, Expected: 'Unit Test Business Constants Phase 1 Validation'},
    {Name: 'cunitTestCommandConstantsPhase1Validation', Actual: tst_msg.cunitTestCommandConstantsPhase1Validation, Expected: 'Unit Test Command Constants Phase 1 Validation'},
    {Name: 'cunitTestConfigurationConstantsPhase1Validation', Actual: tst_msg.cunitTestConfigurationConstantsPhase1Validation, Expected: 'Unit Test Configuration Constants Phase 1 Validation'},
    {Name: 'cunitTestConstantsPhase1Validation', Actual: tst_msg.cunitTestConstantsPhase1Validation, Expected: 'Unit Test Constants Phase 1 Validation'},
    {Name: 'cunitTestMessageConstantsPhase1Validation', Actual: tst_msg.cunitTestMessageConstantsPhase1Validation, Expected: 'Unit Test Message Constants Phase 1 Validation'},
    {Name: 'cunitTestSystemConstantsPhase1Validation', Actual: tst_msg.cunitTestSystemConstantsPhase1Validation, Expected: 'Unit Test System Constants Phase 1 Validation'},
  
    {Name: 'cunitTestBusinessConstantsPhase2Validation', Actual: tst_msg.cunitTestBusinessConstantsPhase2Validation, Expected: 'Unit Test Business Constants Phase 2 Validation'},
    {Name: 'cunitTestCommandConstantsPhase2Validation', Actual: tst_msg.cunitTestCommandConstantsPhase2Validation, Expected: 'Unit Test Command Constants Phase 2 Validation'},
    {Name: 'cunitTestConfigurationConstantsPhase2Validation', Actual: tst_msg.cunitTestConfigurationConstantsPhase2Validation, Expected: 'Unit Test Configuration Constants Phase 2 Validation'},
    {Name: 'cunitTestConstantsPhase2Validation', Actual: tst_msg.cunitTestConstantsPhase2Validation, Expected: 'Unit Test Constants Phase 2 Validation'},
    {Name: 'cunitTestMessageConstantsPhase2Validation', Actual: tst_msg.cunitTestMessageConstantsPhase2Validation, Expected: 'Unit Test Message Constants Phase 2 Validation'},
    {Name: 'cunitTestSystemConstantsPhase2Validation', Actual: tst_msg.cunitTestSystemConstantsPhase2Validation, Expected: 'Unit Test System Constants Phase 2 Validation'},
  
    {Name: 'cunitTestMessage00', Actual: tst_msg.cunitTestMessage00, Expected: 'Caught the case that some arguments were passed in as input to the function.'},
    {Name: 'cunitTestMessage01', Actual: tst_msg.cunitTestMessage01, Expected: 'BEGIN main program loop'},
    {Name: 'cunitTestMessage02', Actual: tst_msg.cunitTestMessage02, Expected: 'BEGIN command parser'},
    {Name: 'cunitTestMessage03', Actual: tst_msg.cunitTestMessage03, Expected: 'END command parser'},
    {Name: 'cunitTestMessage04', Actual: tst_msg.cunitTestMessage04, Expected: 'END main program loop'},
    {Name: 'cunitTestMessage05', Actual: tst_msg.cunitTestMessage05, Expected: 'Exiting TEST HARNESS UnitTest'}
  
  ];