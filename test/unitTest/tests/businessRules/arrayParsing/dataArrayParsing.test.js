'use strict'
/* eslint-disable no-undef */
/**
 * @file dataArrayParsing.test.js
 * @module dataArrayParsing.test
 * @description Unit tests for the dataArrayParsing.js
 * @requires module:dataArrayParsing
 * @requires module:D
 * @requires module:test.constants
 * @requires module:dataBrokerTest
 * @requires module:dataArrayParsingTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import dataArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../../src/structures/data.js';
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_dbt from '../../../testData/brokers/dataBrokerTest.js';
import * as tst_dap from '../../../testData/businessRules/arrayParsing/dataArrayParsingTest.js';
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, msg, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}
await rulesLibrary.initRulesLibrary();

/**
 * @function arraysAreEqual
 * @description Tests the positive and negative test cases of the arraysAreEqual
 * @author Vlad Sorokin
 * @date 2024/10/03
 */
describe(tst_con.carraysAreEqual, () => {
  /**
   * @function arraysAreEqual_validData
   * @description Tests the dataArrayParsing function arraysAreEqual with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(true);
  });

  /**
   * @function arraysAreEqual_inValidInputDataString
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputMetaDataString
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputMetaDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputDataInteger
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputDataBoolean
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputMetaDataInteger
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = 123;

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputMetaDataBoolean
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputDataUndefined
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputDataNaN
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputMetaDataUndefined
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = undefined;

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function arraysAreEqual_inValidInputMetaDataNaN
   * @description Tests the dataArrayParsing function arraysAreEqual with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.carraysAreEqual_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.chello, {[wrd.cworld]: wrd.cgood}];
      let inputMetaData = NaN;

      // Act
      let returnData = await dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})

/**
 * @function storeData
 * @description Tests the positive and negative test cases of the storeData
 * @author Vlad Sorokin
 * @date 2024/10/03
 */
describe(tst_con.cstoreData, () => {
  /**
   * @function storeData_validData
   * @description Tests the dataArrayParsing function storeData with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_validData, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(true);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputDataInteger
   * @description Tests the dataArrayParsing function storeData with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputDataBoolean
   * @description Tests the dataArrayParsing function storeData with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputMetaDataBoolean
   * @description Tests the dataArrayParsing function storeData with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputDataUndefined
   * @description Tests the dataArrayParsing function storeData with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputDataNaN
   * @description Tests the dataArrayParsing function storeData with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputMetaDataUndefined
   * @description Tests the dataArrayParsing function storeData with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = undefined;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function storeData_inValidInputMetaDataNaN
   * @description Tests the dataArrayParsing function storeData with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cstoreData_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = NaN;

      // Act
      let returnData = await dataArrayParsing.storeData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });
})

/**
 * @function getStoredData
 * @description Tests the positive and negative test cases of the getStoredData
 * @author Vlad Sorokin
 * @date 2024/10/03
 */
describe(tst_con.cgetStoredData, () => {
  /**
   * @function getStoredData_validData
   * @description Tests the dataArrayParsing function getStoredData with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_validData, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(tst_dbt.cexpectedDataFromJsonTestFile);
      delete D[sys.cDataStorage];
  });

  /**
   * @function getStoredData_inValidInputDataString
   * @description Tests the dataArrayParsing function getStoredData with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_inValidInputDataString, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputData = tst_man.ctestString1;
      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function getStoredData_inValidInputDataInteger
   * @description Tests the dataArrayParsing function getStoredData with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputData = 123;
      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function getStoredData_inValidInputDataBoolean
   * @description Tests the dataArrayParsing function getStoredData with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputData = false;
      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function getStoredData_inValidInputDataUndefined
   * @description Tests the dataArrayParsing function getStoredData with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputData = undefined;
      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });

  /**
   * @function getStoredData_inValidInputDataNaN
   * @description Tests the dataArrayParsing function getStoredData with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cgetStoredData_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cDataStorage] = {};
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cunitTestData;
      let inputMetaData = tst_dbt.cexpectedDataFromJsonTestFile;
      await dataArrayParsing.storeData(inputData, inputMetaData);

      inputData = NaN;
      inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.getStoredData(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
      delete D[sys.cDataStorage];
  });
})

/**
 * @function isObjectEmpty
 * @description Tests the positive and negative test cases of the isObjectEmpty
 * @author Vlad Sorokin
 * @date 2024/10/03
 */
describe(tst_con.cisObjectEmpty, () => {
  /**
   * @function isObjectEmpty_validData
   * @description Tests the dataArrayParsing function isObjectEmpty with a valid input.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = {};
      let inputMetaData = '';

      // Act
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(true);
  });

  /**
   * @function isObjectEmpty_inValidInputDataString
   * @description Tests the dataArrayParsing function isObjectEmpty with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_inValidInputDataString, async () => {
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
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function isObjectEmpty_inValidInputDataInteger
   * @description Tests the dataArrayParsing function isObjectEmpty with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_inValidInputDataInteger, async () => {
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
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function isObjectEmpty_inValidInputDataBoolean
   * @description Tests the dataArrayParsing function isObjectEmpty with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_inValidInputDataBoolean, async () => {
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
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function isObjectEmpty_inValidInputDataUndefined
   * @description Tests the dataArrayParsing function isObjectEmpty with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_inValidInputDataUndefined, async () => {
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
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function isObjectEmpty_inValidInputDataNaN
   * @description Tests the dataArrayParsing function isObjectEmpty with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/10/03
   */
  test(tst_con.cisObjectEmpty_inValidInputDataNaN, async () => {
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
      let returnData = await dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})

/**
 * @function isArrayEmpty
 * @description Tests the positive and negative test cases of the isArrayEmpty
 * @author Vlad Sorokin
 * @date 2024/11/28
 */
describe(tst_con.cisArrayEmpty, () => {
    /**
     * @function isArrayEmpty_validData
     * @description Tests the dataArrayParsing function isArrayEmpty with a valid input.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [];
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isArrayEmpty_inValidInputDataString
     * @description Tests the dataArrayParsing function isArrayEmpty with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayEmpty_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isArrayEmpty with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayEmpty_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isArrayEmpty with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayEmpty_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isArrayEmpty with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayEmpty_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isArrayEmpty with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisArrayEmpty_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isObject
 * @description Tests the positive and negative test cases of the isObject
 * @author Vlad Sorokin
 * @date 2024/11/28
 */
describe(tst_con.cisObject, () => {
    /**
     * @function isObject_validData
     * @description Tests the dataArrayParsing function isObject with a valid input.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = {[wrd.cObject]: wrd.ctest};
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isObject_inValidInputDataString
     * @description Tests the dataArrayParsing function isObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isObject_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isObject_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isObject_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isObject_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/11/28
     */
    test(tst_con.cisObject_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isArray
 * @description Tests the positive and negative test cases of the isArray
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.cisArray, () => {
    /**
     * @function isArray_validData
     * @description Tests the dataArrayParsing function isArray with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.chello, wrd.cworld];
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isArray_inValidInputDataString
     * @description Tests the dataArrayParsing function isArray with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArray_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isArray with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArray_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isArray with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArray_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isArray with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArray_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isArray with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArray_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isArrayOrObject
 * @description Tests the positive and negative test cases of the isArrayOrObject
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.cisArrayOrObject, () => {
    /**
     * @function isArrayOrObject_validDataArray
     * @description Tests the dataArrayParsing function isArrayOrObject with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_validDataArray, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.chello, wrd.cworld];
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isArrayOrObject_validDataObject
     * @description Tests the dataArrayParsing function isArrayOrObject with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_validDataObject, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = {[wrd.cObject]: wrd.ctest};
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isArrayOrObject_inValidInputDataString
     * @description Tests the dataArrayParsing function isArrayOrObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayOrObject_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isArrayOrObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayOrObject_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isArrayOrObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayOrObject_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isArrayOrObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isArrayOrObject_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isArrayOrObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisArrayOrObject_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isNonZeroLengthArray
 * @description Tests the positive and negative test cases of the isNonZeroLengthArray
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.cisNonZeroLengthArray, () => {
    /**
     * @function isNonZeroLengthArray_validData
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.chello, wrd.cworld];
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isNonZeroLengthArray_inValidInputDataString
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isNonZeroLengthArray_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isNonZeroLengthArray_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isNonZeroLengthArray_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isNonZeroLengthArray_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isNonZeroLengthArray with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function isDeeplyEqual
 * @description Tests the positive and negative test cases of the isDeeplyEqual
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.cisDeeplyEqual, () => {
    /**
     * @function isDeeplyEqual_validData
     * @description Tests the dataArrayParsing function isDeeplyEqual with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isDeeplyEqual_inValidInputDataString
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputMetaDataString
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputDataInteger
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputMetaDataInteger
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = 123;

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputMetaDataBoolean
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = false;

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputDataNaN
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = [1, [2, 3], 4];

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputMetaDataUndefined
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = undefined;

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isDeeplyEqual_inValidInputMetaDataNaN
     * @description Tests the dataArrayParsing function isDeeplyEqual with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cisDeeplyEqual_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, [2, 3], 4];
        let inputMetaData = NaN;

        // Act
        let returnData = await dataArrayParsing.isDeeplyEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function arrayDeepClone
 * @description Tests the positive and negative test cases of the arrayDeepClone
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.carrayDeepClone, () => {
    /**
     * @function arrayDeepClone_validData
     * @description Tests the dataArrayParsing function arrayDeepClone with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [true, 42, wrd.chello, { key: wrd.cvalue }];
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
     * @function arrayDeepClone_inValidInputDataString
     * @description Tests the dataArrayParsing function arrayDeepClone with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_inValidInputDataString, async () => {
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
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function arrayDeepClone_inValidInputDataInteger
     * @description Tests the dataArrayParsing function arrayDeepClone with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_inValidInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function arrayDeepClone_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function arrayDeepClone with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_inValidInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function arrayDeepClone_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function arrayDeepClone with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function arrayDeepClone_inValidInputDataNaN
     * @description Tests the dataArrayParsing function arrayDeepClone with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.carrayDeepClone_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function objectDeepClone
 * @description Tests the positive and negative test cases of the objectDeepClone
 * @author Vlad Sorokin
 * @date 2024/12/23
 */
describe(tst_con.cobjectDeepClone, () => {
    /**
     * @function objectDeepClone_validData
     * @description Tests the dataArrayParsing function objectDeepClone with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = {[wrd.chello]: 1, [wrd.cworld]: {[wrd.chello]: 2, [wrd.cworld]: {[wrd.chello]: 3}}};
        let inputMetaData = '';

        // Act
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
     * @function objectDeepClone_validInputDataString
     * @description Tests the dataArrayParsing function objectDeepClone with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_validInputDataString, async () => {
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
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
     * @function objectDeepClone_validInputDataInteger
     * @description Tests the dataArrayParsing function objectDeepClone with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_validInputDataInteger, async () => {
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
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
     * @function objectDeepClone_validInputDataBoolean
     * @description Tests the dataArrayParsing function objectDeepClone with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_validInputDataBoolean, async () => {
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
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
     * @function objectDeepClone_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function objectDeepClone with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_inValidInputDataUndefined, async () => {
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
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepClone_inValidInputDataNaN
     * @description Tests the dataArrayParsing function objectDeepClone with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/23
     */
    test(tst_con.cobjectDeepClone_inValidInputDataNaN, async () => {
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
        let returnData = await dataArrayParsing.objectDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function objectDeepMerge
 * @description Tests the positive and negative test cases of the objectDeepMerge
 * @author Vlad Sorokin
 * @date 2024/12/26
 */
describe(tst_con.cobjectDeepMerge, () => {
    /**
     * @function objectDeepMerge_validData
     * @description Tests the dataArrayParsing function objectDeepMerge with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject1and2);
    });    

    /**
     * @function objectDeepMerge_inValidInputDataString
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputMetaDataString
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputDataInteger
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputMetaDataInteger
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = 123;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputMetaDataBoolean
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = false;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputDataNaN
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = tst_dap.testObject2;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputMetaDataUndefined
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = undefined;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function objectDeepMerge_inValidInputMetaDataNaN
     * @description Tests the dataArrayParsing function objectDeepMerge with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/26
     */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_dap.testObject1;
        let inputMetaData = NaN;

        // Act
        let returnData = await dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function conditionalObjectAssignment
 * @description Tests the positive and negative test cases of the conditionalObjectAssignment
 * @author Vlad Sorokin
 * @date 2024/12/27
 */
describe(tst_con.cconditionalObjectAssignment, () => {
    /**
     * @function conditionalObjectAssignment_validData
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a valid input.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject3and4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputDataString
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_man.ctestString1;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputMetaDataString
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputDataInteger
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = 123;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = false;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputMetaDataInteger
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = 123;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputMetaDataBoolean
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = false;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = undefined;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputDataNaN
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = NaN;
        const inputMetaData = tst_dap.testObject4;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_dap.testObject4);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputMetaDataUndefined
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = undefined;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function conditionalObjectAssignment_inValidInputMetaDataNaN
     * @description Tests the dataArrayParsing function conditionalObjectAssignment with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/12/27
     */
    test(tst_con.cconditionalObjectAssignment_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        const inputData = tst_dap.testObject3;
        const inputMetaData = NaN;

        // Act
        let returnData = await dataArrayParsing.conditionalObjectAssignment(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getNamespacedDataObject
 * @description Tests the positive and negative test cases of the getNamespacedDataObject
 * @author Vlad Sorokin
 * @date 2024/12/27
 */
describe(tst_con.cgetNamespacedDataObject, () => {
  /**
   * @function getNamespacedDataObject_validData
   * @description Tests the dataArrayParsing function getNamespacedDataObject with a valid input.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_validData, async () => {
      // Arrange
      D[sys.cDataStorage] = {
          [tst_dbt.cunitTestData]: {
              [wrd.cTest]: wrd.cTestValue
          }
      };
      let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual({ [wrd.cTest]: wrd.cTestValue });
  });

  /**
   * @function getNamespacedDataObject_inValidInputDataString
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid data string.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputDataString, async () => {
      // Arrange
      let inputData = tst_man.ctestString1;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert-
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputMetaDataString
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid metadata string.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputMetaDataString, async () => {
      // Arrange
      let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
      let inputMetaData = tst_man.ctestString1;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputDataInteger
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputDataInteger, async () => {
      // Arrange
      let inputData = 123;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputDataBoolean
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputDataBoolean, async () => {
      // Arrange
      let inputData = false;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputMetaDataInteger
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid metadata integer.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputMetaDataInteger, async () => {
      // Arrange
      let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
      let inputMetaData = 123;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputDataUndefined
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputDataUndefined, async () => {
      // Arrange
      let inputData = undefined;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputDataNaN
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputDataNaN, async () => {
      // Arrange
      let inputData = NaN;
      let inputMetaData = false;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputMetaDataUndefined
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid metadata undefined.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputMetaDataUndefined, async () => {
      // Arrange
      let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
      let inputMetaData = undefined;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getNamespacedDataObject_inValidInputMetaDataNaN
   * @description Tests the dataArrayParsing function getNamespacedDataObject with an invalid metadata NaN.
   * @author Vlad Sorokin
   * @date 2024/12/27
   */
  test(tst_con.cgetNamespacedDataObject_inValidInputMetaDataNaN, async () => {
      // Arrange
      let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
      let inputMetaData = NaN;

      // Act
      let returnData = await dataArrayParsing.getNamespacedDataObject(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
});


/**
 * @function setNamespacedDataObject
 * @description Tests the positive and negative test cases of the setNamespacedDataObject
 * @author Vlad Sorokin
 * @date 2025/05/29
 */
describe(tst_con.csetNamespacedDataObject, () => {
    /**
     * @function setNamespacedDataObject_validData
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_validData, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setNamespacedDataObject_inValidInputDataString
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/05/29 
     */
    test(tst_con.csetNamespacedDataObject_inValidInputDataString, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = tst_man.ctestString1;
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputMetaDataString
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = tst_man.ctestString1

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputDataInteger
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = 123;
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputDataBoolean
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = false;
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputMetaDataInteger
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = 123

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputMetaDataBoolean
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = false

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputDataUndefined
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = undefined;
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputDataNaN
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = NaN;
        let inputMetaData = {[wrd.cTest]: wrd.cTestValue};

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputMetaDataUndefined
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = undefined

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setNamespacedDataObject_inValidInputMetaDataNaN
     * @description Tests the dataArrayParsing function setNamespacedDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/05/29
     */
    test(tst_con.csetNamespacedDataObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cDataStorage] = {
            [tst_dbt.cunitTestData]: {
                [wrd.cTest]: wrd.cHello
            }
        };
        let inputData = [sys.cDataStorage, tst_dbt.cunitTestData];
        let inputMetaData = NaN

        // Act
        let returnData = await dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})




