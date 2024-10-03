'use strict'
/* eslint-disable no-undef */
/**
 * @file dataArrayParsing.test.js
 * @module dataArrayParsing.test
 * @description Unit tests for the dataArrayParsing.js
 * @requires module:dataArrayParsing
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:main
 * @requires module:D
 * @requires module:pluginData
 * @requires module:test.constants
 * @requires module:dataBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import dataArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js'
import characterArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileStringParsing from '../../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../../src/businessRules/rules/fileOperations.js';
import stringParsingUtilities from '../../../../../src/businessRules/rules/stringParsingUtilities.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import main from '../../../../../src/main.js';
import D from '../../../../../src/structures/data.js';
import pluginDataFile from '../../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_dbt from '../../../testData/brokers/dataBrokerTest.js'
import * as tst_thb from '../../../testData/brokers/themeBrokerTest.js'
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

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};



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









