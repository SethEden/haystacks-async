'use strict'
/* eslint-disable no-undef */
/**
 * @file auxiliaryArrayParsing.test.js
 * @module auxiliaryArrayParsing.test
 * @description Unit tests for the auxiliaryArrayParsing.js
 * @requires module:auxiliaryArrayParsing
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
import auxiliaryArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js'
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../../src/structures/data.js';
import pluginDataFile from '../../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { clr, cfg, num, sys, wrd} = hayConst;
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
 * @function parseColorRangeInputs
 * @description Tests the positive and negative test cases of the parseColorRangeInputs
 * @author Vlad Sorokin
 * @date 2024/07/30
 */
describe(tst_con.cparseColorRangeInputs, () => {
    /**
     * @function parseColorRangeInputs_validData
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([127, 255]);
    });

    /**
     * @function parseColorRangeInputs_inValidInputDataString
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_inValidInputMetaDataString
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_validInputDataInteger
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a valid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_validInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([123, 255]);
    });

    /**
     * @function parseColorRangeInputs_inValidInputDataBoolean
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_validInputMetaDataInteger
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a valid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_validInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = 123;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([123, 127]);
    });

    /**
     * @function parseColorRangeInputs_inValidInputMetaDataBoolean
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = false;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_inValidInputDataUndefined
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_inValidInputDataNaN
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = 255;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_inValidInputMetaDataUndefined
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = undefined;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function parseColorRangeInputs_inValidInputMetaDataNaN
     * @description Tests the auxiliaryArrayParsing function parseColorRangeInputs with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cparseColorRangeInputs_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 127;
        let inputMetaData = NaN;

        // Act
        let returnData = await auxiliaryArrayParsing.parseColorRangeInputs(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function getNamedColorDataArray
 * @description Tests the positive and negative test cases of the getNamedColorDataArray
 * @author Vlad Sorokin
 * @date 2024/07/30
 */
describe(tst_con.cgetNamedColorDataArray, () => {
    /**
     * @function getNamedColorDataArray_validData
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_validData, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = [0,0,0];

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([num.c255,num.c255,num.c0]);
    });

    /**
     * @function getNamedColorDataArray_inValidInputMetaDataString
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputMetaDataString, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = tst_man.ctestString1;

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputDataInteger
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputDataInteger, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = [255,255,0];

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputDataBoolean
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputDataBoolean, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = [255,255,0];

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputMetaDataInteger
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = 123;

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputMetaDataBoolean
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = false;

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputDataUndefined
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputDataUndefined, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = [255,255,0];

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputDataNaN
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputDataNaN, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = [255,255,0];

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputMetaDataUndefined
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = undefined;

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedColorDataArray_inValidInputMetaDataNaN
     * @description Tests the auxiliaryArrayParsing function getNamedColorDataArray with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cgetNamedColorDataArray_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[wrd.ccolors][sys.cColorData] = {};
        D[wrd.ccolors][sys.cColorData][clr.cYellow] = {
            [clr.cRed]: num.c255,
            [clr.cGreen]: num.c255,
            [clr.cBlue]: num.c0
        }
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = clr.cYellow;
        let inputMetaData = NaN;

        // Act
        let returnData = await auxiliaryArrayParsing.getNamedColorDataArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function doesArrayContainValue
 * @description Tests the positive and negative test cases of the doesArrayContainValue
 * @author Vlad Sorokin
 * @date 2024/07/30
 */
describe(tst_con.cdoesArrayContainValue, () => {
    /**
     * @function doesArrayContainValue_validData
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_validData, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [[wrd.ctest],wrd.ctest];

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesArrayContainValue_inValidInputDataString
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_inValidInputDataString, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainValue_inValidInputDataInteger
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_inValidInputDataInteger, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainValue_inValidInputDataBoolean
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_inValidInputDataBoolean, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainValue_inValidInputDataUndefined
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_inValidInputDataUndefined, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesArrayContainValue_inValidInputDataNaN
     * @description Tests the auxiliaryArrayParsing function doesArrayContainValue with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/30
     */
    test(tst_con.cdoesArrayContainValue_inValidInputDataNaN, async () => {
        // Arrange
        D[wrd.ccolors] = {};
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;

        // Act
        let returnData = await auxiliaryArrayParsing.doesArrayContainValue(inputData);

        // Assert
        expect(returnData).toEqual(false);
    });
})













