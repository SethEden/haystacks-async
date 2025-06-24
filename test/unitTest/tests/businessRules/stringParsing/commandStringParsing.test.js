'use strict'
/* eslint-disable no-undef */
/**
 * @file commandStringParsing.test.js
 * @module commandStringParsing.test
 * @description Unit tests for the commandStringParsing.js
 * @requires module:commandStringParsing
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
import commandStringParsing from '../../../../../src/businessRules/rules/stringParsing/commandStringParsing.js'
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
 * @function cleanCommandInput
 * @description Tests the positive and negative test cases of the cleanCommandInput
 * @author Vlad Sorokin
 * @date 2025/06/23
 */
describe(tst_con.ccleanCommandInput, () => {
    /**
     * @function cleanCommandInput_validData
     * @description Tests the commandStringParsing function cleanCommandInput with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cHello + bas.cDash + bas.cDash + wrd.cWorld;
        let inputMetaData = '';

        // Act
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cHello + wrd.cWorld);
    });

    /**
     * @function cleanCommandInput_inValidInputDataString
     * @description Tests the commandStringParsing function cleanCommandInput with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_inValidInputDataString, async () => {
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
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(tst_man.ctestString1);
    });

    /**
     * @function cleanCommandInput_inValidInputDataInteger
     * @description Tests the commandStringParsing function cleanCommandInput with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_inValidInputDataInteger, async () => {
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
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCommandInput_inValidInputDataBoolean
     * @description Tests the commandStringParsing function cleanCommandInput with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_inValidInputDataBoolean, async () => {
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
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCommandInput_inValidInputDataUndefined
     * @description Tests the commandStringParsing function cleanCommandInput with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_inValidInputDataUndefined, async () => {
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
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCommandInput_inValidInputDataNaN
     * @description Tests the commandStringParsing function cleanCommandInput with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.ccleanCommandInput_inValidInputDataNaN, async () => {
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
        let returnData = await commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isValidCommandNameString
 * @description Tests the positive and negative test cases of the isValidCommandNameString
 * @author Vlad Sorokin
 * @date 2025/06/23
 */
describe(tst_con.cisValidCommandNameString, () => {
    /**
     * @function isValidCommandNameString_validData
     * @description Tests the commandStringParsing function isValidCommandNameString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cisValidCommandNameString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.ctest + wrd.cCommand + wrd.cName;
        let inputMetaData = '';

        // Act
        let returnData = await commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });
    
    /**
     * @function isValidCommandNameString_inValidInputDataInteger
     * @description Tests the commandStringParsing function isValidCommandNameString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cisValidCommandNameString_inValidInputDataInteger, async () => {
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
        let returnData = await commandStringParsing.isValidCommandNameString(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isValidCommandNameString_inValidInputDataBoolean
     * @description Tests the commandStringParsing function isValidCommandNameString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cisValidCommandNameString_inValidInputDataBoolean, async () => {
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
        let returnData = await commandStringParsing.isValidCommandNameString(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isValidCommandNameString_inValidInputDataUndefined
     * @description Tests the commandStringParsing function isValidCommandNameString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cisValidCommandNameString_inValidInputDataUndefined, async () => {
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
        let returnData = await commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isValidCommandNameString_inValidInputDataNaN
     * @description Tests the commandStringParsing function isValidCommandNameString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/23
     */
    test(tst_con.cisValidCommandNameString_inValidInputDataNaN, async () => {
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
        let returnData = await commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

