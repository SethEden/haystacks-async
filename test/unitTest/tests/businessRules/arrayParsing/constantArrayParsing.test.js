'use strict'
/* eslint-disable no-undef */
/**
 * @file constantArrayParsing.test.js
 * @module constantArrayParsing.test
 * @description Unit tests for the constantArrayParsing.js
 * @requires module:constantArrayParsing
 * @requires module:rulesLibrary
 * @requires module:D
 * @requires module:test.constants
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import constantArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/constantArrayParsing.js'
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../../src/structures/data.js';
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const {bas, cfg, num, phn, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}
await rulesLibrary.initRulesLibrary();


/**
 * @function getLengthOfLongestStringInArray
 * @description Tests the positive and negative test cases of the getLengthOfLongestStringInArray
 * @author Vlad Sorokin
 * @date 2024/10/02
 */
describe(tst_con.cgetLengthOfLongestStringInArray, () => {
  /**
   * @function getLengthOfLongestStringInArray_validData
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.caba, wrd.c3D, wrd.chello];
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(5);
  });

  /**
   * @function getLengthOfLongestStringInArray_inValidInputDataString
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getLengthOfLongestStringInArray_inValidInputDataInteger
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getLengthOfLongestStringInArray_inValidInputDataBoolean
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getLengthOfLongestStringInArray_inValidInputDataUndefined
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getLengthOfLongestStringInArray_inValidInputDataNaN
   * @description Tests the constantArrayParsing function getLengthOfLongestStringInArray with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})

/**
 * @function searchForPatternsInStringArray
 * @description Tests the positive and negative test cases of the searchForPatternsInStringArray
 * @author Vlad Sorokin
 * @date 2024/10/02
 */
describe(tst_con.csearchForPatternsInStringArray, () => {
  /**
   * @function searchForPatternsInStringArray_validData
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, wrd.ccell, wrd.cpurcell];
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual([phn.cell, phn.ccel, wrd.ccell]);
  });

  /**
   * @function searchForPatternsInStringArray_inValidInputDataString
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function searchForPatternsInStringArray_inValidInputDataInteger
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function searchForPatternsInStringArray_inValidInputDataBoolean
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function searchForPatternsInStringArray_inValidInputDataUndefined
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function searchForPatternsInStringArray_inValidInputDataNaN
   * @description Tests the constantArrayParsing function searchForPatternsInStringArray with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.csearchForPatternsInStringArray_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})

/**
 * @function validatePatternsThatNeedImplementation
 * @description Tests the positive and negative test cases of the validatePatternsThatNeedImplementation
 * @author Vlad Sorokin
 * @date 2024/10/02
 */
describe(tst_con.cvalidatePatternsThatNeedImplementation, () => {
  /**
   * @function validatePatternsThatNeedImplementation_validData
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, wrd.cunit + wrd.cTest + num.c123];
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(wrd.cunit + wrd.cTest + num.c123);
  });

  /**
   * @function validatePatternsThatNeedImplementation_inValidInputDataString
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function validatePatternsThatNeedImplementation_inValidInputDataInteger
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function validatePatternsThatNeedImplementation_inValidInputDataBoolean
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function validatePatternsThatNeedImplementation_inValidInputDataUndefined
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function validatePatternsThatNeedImplementation_inValidInputDataNaN
   * @description Tests the constantArrayParsing function validatePatternsThatNeedImplementation with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/02
   */
  test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cConstantsValidationData] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {};
      D[sys.cConstantsValidationData][wrd.cFramework] = {
        [sys.cWordConstantsValidation]: [{
          [wrd.cName]: bas.cc + wrd.chello,
          [wrd.cActual]: wrd.chello,
          [wrd.cExpected]: wrd.chello
        }]
      };
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = '';

      // Act
      let returnData = await constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})









