'use strict'
/* eslint-disable no-undef */
/**
 * @file constantStringParsing.test.js
 * @module constantStringParsing.test
 * @description Unit tests for the constantStringParsing.js
 * @requires module:constantStringParsing
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:main
 * @requires module:D
 * @requires module:pluginData
 * @requires module:test.constants
 * @requires module:themeBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2025/07/23
 * @copyright Copyright © 2025-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import constantStringParsing from '../../../../../src/businessRules/rules/stringParsing/constantStringParsing.js'
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
import * as tst_csp from '../../../testData/businessRules/stringParsing/constantStringParsingTest.js';
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
 * @function validateConstantsDataValidation
 * @description Tests the positive and negative test cases of the validateConstantsDataValidation
 * @author Vlad Sorokin
 * @date 2025/06/23
 */
describe(tst_con.cvalidateConstantsDataValidation, () => {
    /**
     * @function validateConstantsDataValidation_validData
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataString
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidinputMetaDataString
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidinputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataInteger
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataBoolean
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidinputMetaDataInteger
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidinputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidinputMetaDataBoolean
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidinputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataUndefined
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataNaN
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidinputMetaDataUndefined
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidinputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidation_inValidinputMetaDataNaN
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidinputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidation(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Tests the positive and negative test cases of the determineConstantsContextQualifiedPrefix
 * @author Vlad Sorokin
 * @date 2025/06/23
 */
describe(tst_con.cdetermineConstantsContextQualifiedPrefix, () => {
    /**
     * @function determineConstantsContextQualifiedPrefix_validData
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.cctv);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidInputDataString
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_man.ctestString1;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidinputMetaDataString
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidinputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidInputDataInteger
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = 123;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = false;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidinputMetaDataInteger
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidinputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidinputMetaDataBoolean
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidinputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidInputDataUndefined
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = undefined;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidInputDataNaN
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = NaN;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidinputMetaDataUndefined
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidinputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineConstantsContextQualifiedPrefix_inValidinputMetaDataNaN
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidinputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};

        let inputData = tst_csp.cpathToTestConstantFile;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Tests the positive and negative test cases of the determineSuggestedConstantsValidationLineOfCode
 * @author Vlad Sorokin
 * @date 2025/06/23
 */
describe(tst_con.cdetermineSuggestedConstantsValidationLineOfCode, () => {
    /**
     * @function determineSuggestedConstantsValidationLineOfCode_validData
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestContant;
        let inputMetaData = tst_csp.cctv;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.cconstantValidationForTestConstantAsString);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = tst_csp.cctv;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = tst_csp.cctv;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataInteger
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestContant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataBoolean
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestContant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataUndefined
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = tst_csp.cctv;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataNaN
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = tst_csp.cctv;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataUndefined
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestContant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataNaN
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidinputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestContant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


 