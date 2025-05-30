'use strict'
/* eslint-disable no-undef */
/**
 * @file pathArrayParsing.test.js
 * @module pathArrayParsing.test
 * @description Unit tests for the pathArrayParsing.js
 * @requires module:pathArrayParsing
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
import pathArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/pathArrayParsing.js'
import characterArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileStringParsing from '../../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../../src/businessRules/rules/fileOperations.js';
import stringParsingUtilities from '../../../../../src/businessRules/rules/stringParsingUtilities.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import main from '../../../../../src/main.js';
import D from '../../../../../src/structures/data.js';
import pluginDataFile from '../../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_dbt from '../../../testData/brokers/dataBrokerTest.js';
import * as tst_con from '../../resources/constants/test.constants.js';
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
 * @function doesArrayContainFilename
 * @description Tests the positive and negative test cases of the doesArrayContainFilename
 * @author Vlad Sorokin
 * @date 2024/05/29
 */
describe(tst_con.cdoesArrayContainFilename, () => {
  /**
   * @function doesArrayContainFilename_validData
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a valid input.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.cHello, wrd.cWorld, wrd.cHaystacks, wrd.cAsync];
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(true);
  });

  /**
   * @function doesArrayContainFilename_inValidInputDataString
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputDataInteger
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputDataBoolean
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputMetaDataInteger
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.cHello, wrd.cWorld, wrd.cHaystacks, wrd.cAsync];
      let inputMetaData = 123;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputMetaDataBoolean
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.cHello, wrd.cWorld, wrd.cHaystacks, wrd.cAsync];
      let inputMetaData = false;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputDataUndefined
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputDataNaN
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData = wrd.cHello;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputMetaDataUndefined
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.cHello, wrd.cWorld, wrd.cHaystacks, wrd.cAsync];
      let inputMetaData = undefined;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function doesArrayContainFilename_inValidInputMetaDataNaN
   * @description Tests the pathArrayParsing function doesArrayContainFilename with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = [wrd.cHello, wrd.cWorld, wrd.cHaystacks, wrd.cAsync];
      let inputMetaData = NaN;

      // Act
      let returnData = await pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})


/**
 * @function getFileAndPathListForPath
 * @description Tests the positive and negative test cases of the getFileAndPathListForPath
 * @author Vlad Sorokin
 * @date 2024/05/29
 */
describe(tst_con.cgetFileAndPathListForPath, () => {
  /**
   * @function getFileAndPathListForPath_validData
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a valid input.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_validData, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_dbt.cpathForTestFolder;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual([tst_dbt.cexpectedPathForTestFolder]);
  });

  /**
   * @function getFileAndPathListForPath_inValidInputDataString
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a invalid data string.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_inValidInputDataString, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = tst_man.ctestString1;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getFileAndPathListForPath_inValidInputDataInteger
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a invalid data integer.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_inValidInputDataInteger, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = 123;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getFileAndPathListForPath_inValidInputDataBoolean
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a invalid data boolean.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_inValidInputDataBoolean, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = false;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getFileAndPathListForPath_inValidInputDataUndefined
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a invalid data undefined.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_inValidInputDataUndefined, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = undefined;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });

  /**
   * @function getFileAndPathListForPath_inValidInputDataNaN
   * @description Tests the pathArrayParsing function getFileAndPathListForPath with a invalid data NaN.
   * @author Vlad Sorokin
   * @date 2024/05/29
   */
  test(tst_con.cgetFileAndPathListForPath_inValidInputDataNaN, async () => {
      // Arrange
      D[sys.cpluginsLoaded] = {};
      D[cfg.cpluginRegistry] = {};
      D[sys.cCommandsAliases] = {};
      D[sys.cCommandWorkflows] = {};
      D[wrd.cThemes] = {};
      D[sys.cpluginsLoaded] = [{}];
      D[wrd.cCommands] = {};
      let inputData = NaN;
      let inputMetaData;


      
      // Act
      let returnData = await pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

      // Assert
      expect(returnData).toEqual(false);
  });
})








