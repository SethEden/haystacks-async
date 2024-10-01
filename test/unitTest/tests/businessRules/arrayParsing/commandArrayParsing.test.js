'use strict'
/* eslint-disable no-undef */
/**
 * @file commandArrayParsing.test.js
 * @module commandArrayParsing.test
 * @description Unit tests for the commandArrayParsing.js
 * @requires module:commandArrayParsing
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
import commandArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/commandArrayParsing.js'
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
import * as tst_cap from '../../../testData/businessRules/arrayParsing/commandArrayParsingTest.js'
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
 * @function solveLehmerCode
 * @description Tests the positive and negative test cases of the solveLehmerCode
 * @author Vlad Sorokin
 * @date 2024/10/01
 */
describe(tst_con.csolveLehmerCode, () => {
    /**
     * @function solveLehmerCode_validData
     * @description Tests the commandArrayParsing function solveLehmerCode with a valid input.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_cap.cexpectedDataFromSolveLehmerCode);
    });

    /**
     * @function solveLehmerCode_inValidInputDataString
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputMetaDataString
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputDataInteger
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputDataBoolean
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputMetaDataInteger
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = 123;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputMetaDataBoolean
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = false;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputDataUndefined
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputDataNaN
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputMetaDataUndefined
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = undefined;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function solveLehmerCode_inValidInputMetaDataNaN
     * @description Tests the commandArrayParsing function solveLehmerCode with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.csolveLehmerCode_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,1];
        let inputMetaData = NaN;

        // Act
        let returnData = await commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function recursiveArrayExpansion
 * @description Tests the positive and negative test cases of the recursiveArrayExpansion
 * @author Vlad Sorokin
 * @date 2024/10/01
 */
describe(tst_con.crecursiveArrayExpansion, () => {
    /**
     * @function recursiveArrayExpansion_validData
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a valid input.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([[2, 0], [2, 1], [2, 2], [1, 0], [1, 1], [1, 2], [0, 0], [0, 1], [0, 2]]);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputDataString
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputMetaDataString
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputDataInteger
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputDataBoolean
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputMetaDataInteger
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = 123;

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputMetaDataBoolean
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = false;

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputDataUndefined
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputDataNaN
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = [2,2];

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputMetaDataUndefined
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = undefined;

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function recursiveArrayExpansion_inValidInputMetaDataNaN
     * @description Tests the commandArrayParsing function recursiveArrayExpansion with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [0,[0,0]];
        let inputMetaData = NaN;

        // Act
        let returnData = await commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function getLehmerCodeValue
 * @description Tests the positive and negative test cases of the getLehmerCodeValue
 * @author Vlad Sorokin
 * @date 2024/10/01
 */
describe(tst_con.cgetLehmerCodeValue, () => {
    /**
     * @function getLehmerCodeValue_validData
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a valid input.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cWonder + bas.cWo + bas.cmn);
    });

    /**
     * @function getLehmerCodeValue_inValidInputDataString
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputMetaDataString
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputDataInteger
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputDataBoolean
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputMetaDataInteger
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = 123;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputMetaDataBoolean
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = false;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputDataUndefined
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputDataNaN
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = tst_cap.cWndrWonderWomnWoman;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputMetaDataUndefined
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = undefined;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getLehmerCodeValue_inValidInputMetaDataNaN
     * @description Tests the commandArrayParsing function getLehmerCodeValue with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgetLehmerCodeValue_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [1,0];
        let inputMetaData = NaN;

        // Act
        let returnData = await commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function generateCommandAliases
 * @description Tests the positive and negative test cases of the generateCommandAliases
 * @author Vlad Sorokin
 * @date 2024/10/01
 */
describe(tst_con.cgenerateCommandAliases, () => {
    /**
     * @function generateCommandAliases_validData
     * @description Tests the commandArrayParsing function generateCommandAliases with a valid input.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_validData, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_cap.cwomenWonderAliasesObject;
        let inputMetaData = '';

        // Act
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(tst_cap.cexpectedDataFromGenerateCommandAliases);
    });

    /**
     * @function generateCommandAliases_inValidInputDataString
     * @description Tests the commandArrayParsing function generateCommandAliases with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_inValidInputDataString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
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
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateCommandAliases_inValidInputDataInteger
     * @description Tests the commandArrayParsing function generateCommandAliases with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_inValidInputDataInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
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
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateCommandAliases_inValidInputDataBoolean
     * @description Tests the commandArrayParsing function generateCommandAliases with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_inValidInputDataBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
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
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateCommandAliases_inValidInputDataUndefined
     * @description Tests the commandArrayParsing function generateCommandAliases with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_inValidInputDataUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
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
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateCommandAliases_inValidInputDataNaN
     * @description Tests the commandArrayParsing function generateCommandAliases with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.cgenerateCommandAliases_inValidInputDataNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cprimaryCommandDelimiter]: " ",
            [wrd.csystem + bas.cDot + cfg.csecondaryCommandDelimiter]: bas.cComa,
            [wrd.csystem + bas.cDot + cfg.ctertiaryCommandDelimiter]: bas.cPipe,
        };
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
        let returnData = await commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function aggregateCommandArguments
 * @description Tests the positive and negative test cases of the aggregateCommandArguments
 * @author Vlad Sorokin
 * @date 2024/10/01
 */
describe(tst_con.caggregateCommandArguments, () => {
    /**
     * @function aggregateCommandArguments_validData
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a valid input.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.ctest + wrd.cHarness, '', wrd.chelp];
        let inputMetaData = '';

        // Act
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.chelp);
    });

    /**
     * @function aggregateCommandArguments_inValidInputDataString
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_inValidInputDataString, async () => {
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
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function aggregateCommandArguments_inValidInputDataInteger
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_inValidInputDataInteger, async () => {
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
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function aggregateCommandArguments_inValidInputDataBoolean
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_inValidInputDataBoolean, async () => {
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
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function aggregateCommandArguments_inValidInputDataUndefined
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_inValidInputDataUndefined, async () => {
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
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function aggregateCommandArguments_inValidInputDataNaN
     * @description Tests the commandArrayParsing function aggregateCommandArguments with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/10/01
     */
    test(tst_con.caggregateCommandArguments_inValidInputDataNaN, async () => {
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
        let returnData = await commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})








