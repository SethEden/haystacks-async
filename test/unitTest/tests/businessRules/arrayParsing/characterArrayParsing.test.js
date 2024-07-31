'use strict'
/* eslint-disable no-undef */
/**
 * @file characterArrayParsing.test.js
 * @module characterArrayParsing.test
 * @description Unit tests for the characterArrayParsing.js
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:main
 * @requires module:D
 * @requires module:pluginData
 * @requires module:test.constants
 * @requires module:workflowBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import characterArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js'
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../../src/structures/data.js';
import pluginDataFile from '../../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, cfg, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}
await rulesLibrary.initRulesLibrary();

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};


/**
 * @function replaceCharacterWithCharacter
 * @description Tests the positive and negative test cases of the replaceCharacterWithCharacter
 * @author Vlad Sorokin
 * @date 2024/07/31
 */
describe(tst_con.creplaceCharacterWithCharacter, () => {
  /**
   * @function replaceCharacterWithCharacter_validData
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a valid input.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = [bas.cn, bas.cr];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(wrd.cOr);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputMetaDataString
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputDataInteger
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = [bas.cd, bas.cr];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputDataBoolean
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = [bas.cd, bas.cr];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputMetaDataInteger
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = 123;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputMetaDataBoolean
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = false;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputDataUndefined
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = [bas.cd, bas.cr];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputDataNaN
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = [bas.cd, bas.cr];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputMetaDataUndefined
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = undefined;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterWithCharacter_inValidInputMetaDataNaN
   * @description Tests the characterArrayParsing function replaceCharacterWithCharacter with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cOn;
      let inputMetaData = NaN;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})


/**
 * @function doesArrayContainCharacter
 * @description Tests the positive and negative test cases of the doesArrayContainCharacter
 * @author Vlad Sorokin
 * @date 2024/07/31
 */
describe(tst_con.cdoesArrayContainCharacter, () => {
  /**
   * @function doesArrayContainCharacter_validData
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a valid input.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = [wrd.cOr];

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(true);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputMetaDataString
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputMetaDataInteger
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = 123;

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputMetaDataBoolean
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = false;

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputDataUndefined
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = [wrd.cOr];

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputDataNaN
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = [wrd.cOr];

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputMetaDataUndefined
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = undefined;

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainCharacter_inValidInputMetaDataNaN
   * @description Tests the characterArrayParsing function doesArrayContainCharacter with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cr;
      let inputMetaData = NaN;

      // Act
      let returnData = await characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})


/**
 * @function removeCharacterFromArray
 * @description Tests the positive and negative test cases of the removeCharacterFromArray
 * @author Vlad Sorokin
 * @date 2024/07/31
 */
describe(tst_con.cremoveCharacterFromArray, () => {
  /**
   * @function removeCharacterFromArray_validData
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a valid input.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cb;
      let inputMetaData = [wrd.cAba];

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual([bas.cAa]);
  });

  /**
   * @function removeCharacterFromArray_inValidInputMetaDataString
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cd;
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputMetaDataInteger
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cd;
      let inputMetaData = 123;

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputMetaDataBoolean
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cd;
      let inputMetaData = false;

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputDataUndefined
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = [wrd.c_add];

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputDataNaN
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = [wrd.c_add];

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputMetaDataUndefined
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cd;
      let inputMetaData = undefined;

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function removeCharacterFromArray_inValidInputMetaDataNaN
   * @description Tests the characterArrayParsing function removeCharacterFromArray with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = bas.cd;
      let inputMetaData = NaN;

      // Act
      let returnData = await characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})

/**
 * @function replaceCharacterAtIndex
 * @description Tests the positive and negative test cases of the replaceCharacterAtIndex
 * @author Vlad Sorokin
 * @date 2024/07/31
 */
describe(tst_con.creplaceCharacterAtIndex, () => {
  /**
   * @function replaceCharacterAtIndex_validData
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a valid input.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = [2, bas.cp];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(wrd.cAlpha);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputMetaDataString
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputDataInteger
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = [2, bas.cp];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputDataBoolean
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = [2, bas.cp];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputMetaDataInteger
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = 123;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputMetaDataBoolean
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = false;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputDataUndefined
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = [2, bas.cp];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputDataNaN
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = [2, bas.cp];

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputMetaDataUndefined
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = undefined;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function replaceCharacterAtIndex_inValidInputMetaDataNaN
   * @description Tests the characterArrayParsing function replaceCharacterAtIndex with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/07/31
   */
  test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = wrd.cAloha;
      let inputMetaData = NaN;

      // Act
      let returnData = await characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})