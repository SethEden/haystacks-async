'use strict'
/* eslint-disable no-undef */
/**
 * @file wordArrayParsing.test.js
 * @module wordArrayParsing.test
 * @description Unit tests for the wordArrayParsing.js
 * @requires module:wordArrayParsing
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
import wordArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/wordArrayParsing.js'
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
import * as tst_thb from '../../../testData/brokers/themeBrokerTest.js'
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, msg, num, sys, wrd} = hayConst;
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
 * @function convertCamelCaseStringToArray
 * @description Tests the positive and negative test cases of the convertCamelCaseStringToArray
 * @author Vlad Sorokin
 * @date 2025/06/03 
 */
describe(tst_con.cconvertCamelCaseStringToArray, () => {
    /**
     * @function convertCamelCaseStringToArray_validData
     * @description Tests the wordArrayParsing function convertCamelCaseStringToArray with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03 
     */
    test(tst_con.cconvertCamelCaseStringToArray_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cHello + wrd.cWorld + wrd.cTest;
        let inputMetaData = '';

        // Act
        let returnData = await wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cTest]);
    });

    /**
     * @function convertCamelCaseStringToArray_inValidInputDataInteger
     * @description Tests the wordArrayParsing function convertCamelCaseStringToArray with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03 
     */
    test(tst_con.cconvertCamelCaseStringToArray_inValidInputDataInteger, async () => {
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
        let returnData = await wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertCamelCaseStringToArray_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function convertCamelCaseStringToArray with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03 
     */
    test(tst_con.cconvertCamelCaseStringToArray_inValidInputDataBoolean, async () => {
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
        let returnData = await wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertCamelCaseStringToArray_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function convertCamelCaseStringToArray with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03 
     */
    test(tst_con.cconvertCamelCaseStringToArray_inValidInputDataUndefined, async () => {
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
        let returnData = await wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertCamelCaseStringToArray_inValidInputDataNaN
     * @description Tests the wordArrayParsing function convertCamelCaseStringToArray with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03 
     */
    test(tst_con.cconvertCamelCaseStringToArray_inValidInputDataNaN, async () => {
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
        let returnData = await wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

})

/**
 * @function getWordsArrayFromString
 * @description Tests the positive and negative test cases of the getWordsArrayFromString
 * @author Vlad Sorokin
 * @date 2025/06/03
 */
describe(tst_con.cgetWordsArrayFromString, () => {
    /**
     * @function getWordsArrayFromString_validData
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cHello + bas.cSpace + wrd.cWorld + bas.cSpace + wrd.cTest;
        let inputMetaData = '';

        // Act
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cTest]);
    });

    /**
     * @function getWordsArrayFromString_inValidInputDataString
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataString, async () => {
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
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWordsArrayFromString_inValidInputDataInteger
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataInteger, async () => {
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
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWordsArrayFromString_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataBoolean, async () => {
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
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWordsArrayFromString_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataUndefined, async () => {
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
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWordsArrayFromString_inValidInputDataNaN
     * @description Tests the wordArrayParsing function getWordsArrayFromString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataNaN, async () => {
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
        let returnData = await wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function recombineStringArrayWithSpaces
 * @description Tests the positive and negative test cases of the recombineStringArrayWithSpaces
 * @author Vlad Sorokin
 * @date 2025/06/03
 */
describe(tst_con.crecombineStringArrayWithSpaces, () => {
    /**
     * @function recombineStringArrayWithSpaces_validData
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cTest];
        let inputMetaData = '';

        // Act
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cHello + bas.cSpace + wrd.cWorld + bas.cSpace + wrd.cTest);
    });

    /**
     * @function recombineStringArrayWithSpaces_inValidInputDataString
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataString, async () => {
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
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recombineStringArrayWithSpaces_inValidInputDataInteger
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataInteger, async () => {
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
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recombineStringArrayWithSpaces_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataBoolean, async () => {
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
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recombineStringArrayWithSpaces_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataUndefined, async () => {
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
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recombineStringArrayWithSpaces_inValidInputDataNaN
     * @description Tests the wordArrayParsing function recombineStringArrayWithSpaces with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataNaN, async () => {
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
        let returnData = await wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function convertArrayToCamelCaseString
 * @description Tests the positive and negative test cases of the convertArrayToCamelCaseString
 * @author Vlad Sorokin
 * @date 2025/06/03
 */
describe(tst_con.cconvertArrayToCamelCaseString, () => {
    /**
     * @function convertArrayToCamelCaseString_validData
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cTest];
        let inputMetaData = '';

        // Act
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cHello + wrd.cWorld + wrd.cTest);
    });

    /**
     * @function convertArrayToCamelCaseString_inValidInputDataString
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataString, async () => {
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
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertArrayToCamelCaseString_inValidInputDataInteger
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataInteger, async () => {
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
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertArrayToCamelCaseString_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataBoolean, async () => {
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
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertArrayToCamelCaseString_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataUndefined, async () => {
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
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertArrayToCamelCaseString_inValidInputDataNaN
     * @description Tests the wordArrayParsing function convertArrayToCamelCaseString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataNaN, async () => {
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
        let returnData = await wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Tests the positive and negative test cases of the doesArrayContainLowerCaseConsolidatedString
 * @author Vlad Sorokin
 * @date 2025/06/03
 */
describe(tst_con.cdoesArrayContainLowerCaseConsolidatedString, () => {
    /**
     * @function doesArrayContainLowerCaseConsolidatedString_validData
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataString
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataString
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataInteger
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = 123;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = false;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = wrd.ctest;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataUndefined
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = undefined;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataNaN
     * @description Tests the wordArrayParsing function doesArrayContainLowerCaseConsolidatedString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = NaN;

        // Act
        let returnData = await wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function ascertainMatchingElements
 * @description Tests the positive and negative test cases of the ascertainMatchingElements
 * @author Vlad Sorokin
 * @date 2025/06/03
 */
describe(tst_con.cascertainMatchingElements, () => {
    /**
     * @function ascertainMatchingElements_validDataString
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_validDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cworld,wrd.chello,wrd.ctest];
        let inputMetaData = [wrd.cworld,wrd.chello,wrd.ctest];
        // if (inputData === inputMetaData) {
        //   console.log('Input data and metadata are the same');
        // }
        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function ascertainMatchingElements_validDataBoolean
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_validDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [false, true, false];
        let inputMetaData = [false, true, false];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function ascertainMatchingElements_validDataInteger
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_validDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1, 2, 3];
        let inputMetaData = [1, 2, 3];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function ascertainMatchingElements_validDataFloat
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_validDataFloat, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1.1, 1.2, 1.3];
        let inputMetaData = [1.1, 1.2, 1.3];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function ascertainMatchingElements_validDataObject
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_validDataObject, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function ascertainMatchingElements_inValidInputDataString
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputMetaDataString
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputDataInteger
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputDataBoolean
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputMetaDataInteger
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = 123;

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputMetaDataBoolean
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = false;

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputDataUndefined
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputDataNaN
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputMetaDataUndefined
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = undefined;

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function ascertainMatchingElements_inValidInputMetaDataNaN
     * @description Tests the wordArrayParsing function ascertainMatchingElements with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/03
     */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [{ key: wrd.ctest + num.c1 }, { key: wrd.ctest + num.c2 }, { key: wrd.ctest + num.c3 }];
        let inputMetaData = NaN;

        // Act
        let returnData = await wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})
