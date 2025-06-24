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
     * @function validateConstantsDataValidation_inValidInputMetaDataString
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataString, async () => {
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
     * @function validateConstantsDataValidation_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataInteger, async () => {
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
     * @function validateConstantsDataValidation_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataBoolean, async () => {
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
     * @function validateConstantsDataValidation_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataUndefined, async () => {
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
     * @function validateConstantsDataValidation_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function validateConstantsDataValidation with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataNaN, async () => {
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
     * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataString
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataString, async () => {
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
     * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger, async () => {
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
     * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean, async () => {
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
     * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataUndefined, async () => {
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
     * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function determineConstantsContextQualifiedPrefix with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataNaN, async () => {
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
        let inputData = tst_csp.cctestConstant;
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
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
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
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function determineSuggestedConstantsValidationLineOfCode with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Tests the positive and negative test cases of the validateConstantsDataValidationLineItemName
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cvalidateConstantsDataValidationLineItemName, () => {
    /**
     * @function validateConstantsDataValidationLineItemName_validData
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = tst_csp.cTestConstantsValidation;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputDataString
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataString, async () => {
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
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataString
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputDataInteger
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataInteger, async () => {
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
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputDataBoolean
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataBoolean, async () => {
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
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputDataUndefined
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataUndefined, async () => {
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
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputDataNaN
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataNaN, async () => {
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
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function validateConstantsDataValidationLineItemName with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantsValidationNamespaceParentObject
 * @description Tests the positive and negative test cases of the getConstantsValidationNamespaceParentObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantsValidationNamespaceParentObject, () => {
    /**
     * @function getConstantsValidationNamespaceParentObject_validData
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.cconstantsValidationWithoutFramework);
    });

    /**
     * @function getConstantsValidationNamespaceParentObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_inValidInputDataString, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantsValidationNamespaceParentObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantsValidationNamespaceParentObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantsValidationNamespaceParentObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantsValidationNamespaceParentObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantsValidationNamespaceParentObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantsValidationNamespaceParentObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.getConstantsValidationNamespaceParentObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesConstantNamespaceExist
 * @description Tests the positive and negative test cases of the doesConstantNamespaceExist
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cdoesConstantNamespaceExist, () => {
    /**
     * @function doesConstantNamespaceExist_validData
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputDataString
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputDataString, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputMetaDataString
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputDataInteger
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputDataInteger, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputDataBoolean
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputDataBoolean, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputDataUndefined
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputDataUndefined, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputDataNaN
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputDataNaN, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantNamespaceExist_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function doesConstantNamespaceExist with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantNamespaceExist_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cTestConstantsValidation;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.doesConstantNamespaceExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesConstantExist
 * @description Tests the positive and negative test cases of the doesConstantExist
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cdoesConstantExist, () => {
    /**
     * @function doesConstantExist_validData
     * @description Tests the constantStringParsing function doesConstantExist with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesConstantExist_inValidInputDataString
     * @description Tests the constantStringParsing function doesConstantExist with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_inValidInputDataString, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExist_inValidInputDataInteger
     * @description Tests the constantStringParsing function doesConstantExist with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_inValidInputDataInteger, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExist_inValidInputDataBoolean
     * @description Tests the constantStringParsing function doesConstantExist with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_inValidInputDataBoolean, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExist_inValidInputDataUndefined
     * @description Tests the constantStringParsing function doesConstantExist with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_inValidInputDataUndefined, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExist_inValidInputDataNaN
     * @description Tests the constantStringParsing function doesConstantExist with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExist_inValidInputDataNaN, async () => {
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
        let inputMetaData = '';

        // Act
        let returnData = await constantStringParsing.doesConstantExist(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesConstantExistInConstantLibraryObject
 * @description Tests the positive and negative test cases of the doesConstantExistInConstantLibraryObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cdoesConstantExistInConstantLibraryObject, () => {
    /**
     * @function doesConstantExistInConstantLibraryObject_validData
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputDataString
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantLibraryObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function doesConstantExistInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantLibraryObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantTypeInConstantLibraryObject
 * @description Tests the positive and negative test cases of the getConstantTypeInConstantLibraryObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantTypeInConstantLibraryObject, () => {
    /**
     * @function getConstantTypeInConstantLibraryObject_validData
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([tst_csp.cTestConstantsValidation]);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputDataString, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantTypeInConstantLibraryObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function getConstantTypeInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantTypeInConstantLibraryObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [tst_csp.cctestConstant, false];
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.getConstantTypeInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantNameInConstantLibraryObject
 * @description Tests the positive and negative test cases of the getConstantNameInConstantLibraryObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantNameInConstantLibraryObject, () => {
    /**
     * @function getConstantNameInConstantLibraryObject_validData
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.cctestConstant);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputDataString, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantLibraryObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function getConstantNameInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantLibraryObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantActualValueInConstantLibraryObject
 * @description Tests the positive and negative test cases of the getConstantActualValueInConstantLibraryObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantActualValueInConstantLibraryObject, () => {
    /**
     * @function getConstantActualValueInConstantLibraryObject_validData
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.ctestConstant);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputDataString, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = D[sys.cConstantsValidationData][wrd.cFramework];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantLibraryObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function getConstantActualValueInConstantLibraryObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantLibraryObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantLibraryObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesConstantExistInConstantNamespaceObject
 * @description Tests the positive and negative test cases of the doesConstantExistInConstantNamespaceObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cdoesConstantExistInConstantNamespaceObject, () => {
    /**
     * @function doesConstantExistInConstantNamespaceObject_validData
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputDataString
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputDataString, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesConstantExistInConstantNamespaceObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function doesConstantExistInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cdoesConstantExistInConstantNamespaceObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.doesConstantExistInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantNameInConstantNamespaceObject
 * @description Tests the positive and negative test cases of the getConstantNameInConstantNamespaceObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantNameInConstantNamespaceObject, () => {
    /**
     * @function getConstantNameInConstantNamespaceObject_validData
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.cctestConstant);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputDataString, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantNameInConstantNamespaceObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function getConstantNameInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantNameInConstantNamespaceObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.ctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.getConstantNameInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConstantActualValueInConstantNamespaceObject
 * @description Tests the positive and negative test cases of the getConstantActualValueInConstantNamespaceObject
 * @author Vlad Sorokin
 * @date 2025/06/24
 */
describe(tst_con.cgetConstantActualValueInConstantNamespaceObject, () => {
    /**
     * @function getConstantActualValueInConstantNamespaceObject_validData
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_csp.ctestConstant);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputDataString
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputDataString, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputMetaDataString
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputDataInteger
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputDataInteger, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputDataBoolean
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputDataBoolean, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputMetaDataInteger
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = 123;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputMetaDataBoolean
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = false;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputDataUndefined
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputDataUndefined, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputDataNaN
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputDataNaN, async () => {
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
        let inputMetaData = [tst_csp.cconstantValidationForTestConstant];

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputMetaDataUndefined
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = undefined;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConstantActualValueInConstantNamespaceObject_inValidInputMetaDataNaN
     * @description Tests the constantStringParsing function getConstantActualValueInConstantNamespaceObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/24
     */
    test(tst_con.cgetConstantActualValueInConstantNamespaceObject_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[sys.cConstantsValidationData] = tst_csp.cconstantsValidationForTestFile;
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_csp.cctestConstant;
        let inputMetaData = NaN;

        // Act
        let returnData = await constantStringParsing.getConstantActualValueInConstantNamespaceObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})




