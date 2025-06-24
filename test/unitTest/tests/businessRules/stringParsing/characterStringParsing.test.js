'use strict'
/* eslint-disable no-undef */
/**
 * @file characterStringParsing.test.js
 * @module characterStringParsing.test
 * @description Unit tests for the characterStringParsing.js
 * @requires module:characterStringParsing
 * @requires module:rulesLibrary
 * @requires module:D
 * @requires module:test.constants
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2025/07/23
 * @copyright Copyright © 2025-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import characterStringParsing from '../../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../../src/structures/data.js';
import * as tst_con from '../../resources/constants/test.constants.js';
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
 * @function singleQuoteSwapAfterEquals
 * @description Tests the positive and negative test cases of the singleQuoteSwapAfterEquals
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.csingleQuoteSwapAfterEquals, () => {
    /**
     * @function singleQuoteSwapAfterEquals_validData
     * @description Tests the characterStringParsing function singleQuoteSwapAfterEquals with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.csingleQuoteSwapAfterEquals_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = bas.cSingleQuote + wrd.cTest + bas.cSingleQuote;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(bas.cDoubleQuote + wrd.cTest + bas.cDoubleQuote);
    });

    /**
     * @function singleQuoteSwapAfterEquals_inValidInputDataInteger
     * @description Tests the characterStringParsing function singleQuoteSwapAfterEquals with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function singleQuoteSwapAfterEquals_inValidInputDataBoolean
     * @description Tests the characterStringParsing function singleQuoteSwapAfterEquals with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function singleQuoteSwapAfterEquals_inValidInputDataUndefined
     * @description Tests the characterStringParsing function singleQuoteSwapAfterEquals with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function singleQuoteSwapAfterEquals_inValidInputDataNaN
     * @description Tests the characterStringParsing function singleQuoteSwapAfterEquals with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function swapForwardSlashToBackSlash
 * @description Tests the positive and negative test cases of the swapForwardSlashToBackSlash
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cswapForwardSlashToBackSlash, () => {
    /**
     * @function swapForwardSlashToBackSlash_validData
     * @description Tests the characterStringParsing function swapForwardSlashToBackSlash with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapForwardSlashToBackSlash_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cForwardSlash + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cBackSlash + wrd.cHello);
    });

    /**
     * @function swapForwardSlashToBackSlash_inValidInputDataInteger
     * @description Tests the characterStringParsing function swapForwardSlashToBackSlash with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapForwardSlashToBackSlash_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapForwardSlashToBackSlash_inValidInputDataBoolean
     * @description Tests the characterStringParsing function swapForwardSlashToBackSlash with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapForwardSlashToBackSlash_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapForwardSlashToBackSlash_inValidInputDataUndefined
     * @description Tests the characterStringParsing function swapForwardSlashToBackSlash with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapForwardSlashToBackSlash_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapForwardSlashToBackSlash_inValidInputDataNaN
     * @description Tests the characterStringParsing function swapForwardSlashToBackSlash with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapForwardSlashToBackSlash_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function swapBackSlashToForwardSlash
 * @description Tests the positive and negative test cases of the swapBackSlashToForwardSlash
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cswapBackSlashToForwardSlash, () => {
    /**
     * @function swapBackSlashToForwardSlash_validData
     * @description Tests the characterStringParsing function swapBackSlashToForwardSlash with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapBackSlashToForwardSlash_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cBackSlash + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cForwardSlash + wrd.cHello);
    });

    /**
     * @function swapBackSlashToForwardSlash_inValidInputDataInteger
     * @description Tests the characterStringParsing function swapBackSlashToForwardSlash with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapBackSlashToForwardSlash_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapBackSlashToForwardSlash_inValidInputDataBoolean
     * @description Tests the characterStringParsing function swapBackSlashToForwardSlash with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapBackSlashToForwardSlash_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapBackSlashToForwardSlash_inValidInputDataUndefined
     * @description Tests the characterStringParsing function swapBackSlashToForwardSlash with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapBackSlashToForwardSlash_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapBackSlashToForwardSlash_inValidInputDataNaN
     * @description Tests the characterStringParsing function swapBackSlashToForwardSlash with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapBackSlashToForwardSlash_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function swapDoubleForwardSlashToSingleForwardSlash
 * @description Tests the positive and negative test cases of the swapDoubleForwardSlashToSingleForwardSlash
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cswapDoubleForwardSlashToSingleForwardSlash, () => {
    /**
     * @function swapDoubleForwardSlashToSingleForwardSlash_validData
     * @description Tests the characterStringParsing function swapDoubleForwardSlashToSingleForwardSlash with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cDoubleForwardSlash + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cForwardSlash + wrd.cHello);
    });

    /**
     * @function swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataInteger
     * @description Tests the characterStringParsing function swapDoubleForwardSlashToSingleForwardSlash with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean
     * @description Tests the characterStringParsing function swapDoubleForwardSlashToSingleForwardSlash with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataUndefined
     * @description Tests the characterStringParsing function swapDoubleForwardSlashToSingleForwardSlash with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataNaN
     * @description Tests the characterStringParsing function swapDoubleForwardSlashToSingleForwardSlash with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function swapDoubleBackSlashToSingleBackSlash
 * @description Tests the positive and negative test cases of the swapDoubleBackSlashToSingleBackSlash
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cswapDoubleBackSlashToSingleBackSlash, () => {
    /**
     * @function swapDoubleBackSlashToSingleBackSlash_validData
     * @description Tests the characterStringParsing function swapDoubleBackSlashToSingleBackSlash with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cDoubleBackSlash + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cBackSlash + wrd.cHello);
    });

    /**
     * @function swapDoubleBackSlashToSingleBackSlash_inValidInputDataInteger
     * @description Tests the characterStringParsing function swapDoubleBackSlashToSingleBackSlash with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean
     * @description Tests the characterStringParsing function swapDoubleBackSlashToSingleBackSlash with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleBackSlashToSingleBackSlash_inValidInputDataUndefined
     * @description Tests the characterStringParsing function swapDoubleBackSlashToSingleBackSlash with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function swapDoubleBackSlashToSingleBackSlash_inValidInputDataNaN
     * @description Tests the characterStringParsing function swapDoubleBackSlashToSingleBackSlash with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function replaceSpacesWithPlus
 * @description Tests the positive and negative test cases of the replaceSpacesWithPlus
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.creplaceSpacesWithPlus, () => {
    /**
     * @function replaceSpacesWithPlus_validData
     * @description Tests the characterStringParsing function replaceSpacesWithPlus with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceSpacesWithPlus_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cSpace + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cPlus + wrd.cHello);
    });

    /**
     * @function replaceSpacesWithPlus_inValidInputDataInteger
     * @description Tests the characterStringParsing function replaceSpacesWithPlus with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceSpacesWithPlus_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceSpacesWithPlus_inValidInputDataBoolean
     * @description Tests the characterStringParsing function replaceSpacesWithPlus with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceSpacesWithPlus_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceSpacesWithPlus_inValidInputDataUndefined
     * @description Tests the characterStringParsing function replaceSpacesWithPlus with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceSpacesWithPlus_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceSpacesWithPlus_inValidInputDataNaN
     * @description Tests the characterStringParsing function replaceSpacesWithPlus with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceSpacesWithPlus_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function replaceColonWithUnderscore
 * @description Tests the positive and negative test cases of the replaceColonWithUnderscore
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.creplaceColonWithUnderscore, () => {
    /**
     * @function replaceColonWithUnderscore_validData
     * @description Tests the characterStringParsing function replaceColonWithUnderscore with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceColonWithUnderscore_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cColon + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cUnderscore + wrd.cHello);
    });

    /**
     * @function replaceColonWithUnderscore_inValidInputDataInteger
     * @description Tests the characterStringParsing function replaceColonWithUnderscore with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceColonWithUnderscore_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceColonWithUnderscore_inValidInputDataBoolean
     * @description Tests the characterStringParsing function replaceColonWithUnderscore with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceColonWithUnderscore_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceColonWithUnderscore_inValidInputDataUndefined
     * @description Tests the characterStringParsing function replaceColonWithUnderscore with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceColonWithUnderscore_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceColonWithUnderscore_inValidInputDataNaN
     * @description Tests the characterStringParsing function replaceColonWithUnderscore with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceColonWithUnderscore_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function cleanCarriageReturnFromString
 * @description Tests the positive and negative test cases of the cleanCarriageReturnFromString
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.ccleanCarriageReturnFromString, () => {
    /**
     * @function cleanCarriageReturnFromString_validData
     * @description Tests the characterStringParsing function cleanCarriageReturnFromString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.ccleanCarriageReturnFromString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest + bas.cCarriageReturn + wrd.cHello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cTest + bas.cSpace + wrd.cHello);
    });

    /**
     * @function cleanCarriageReturnFromString_inValidInputDataInteger
     * @description Tests the characterStringParsing function cleanCarriageReturnFromString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.ccleanCarriageReturnFromString_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCarriageReturnFromString_inValidInputDataBoolean
     * @description Tests the characterStringParsing function cleanCarriageReturnFromString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.ccleanCarriageReturnFromString_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCarriageReturnFromString_inValidInputDataUndefined
     * @description Tests the characterStringParsing function cleanCarriageReturnFromString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.ccleanCarriageReturnFromString_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function cleanCarriageReturnFromString_inValidInputDataNaN
     * @description Tests the characterStringParsing function cleanCarriageReturnFromString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.ccleanCarriageReturnFromString_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function convertStringToLowerCase
 * @description Tests the positive and negative test cases of the convertStringToLowerCase
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cconvertStringToLowerCase, () => {
    /**
     * @function convertStringToLowerCase_validData
     * @description Tests the characterStringParsing function convertStringToLowerCase with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToLowerCase_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cSUCCESS;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.convertStringToLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.csuccess);
    });

    /**
     * @function convertStringToLowerCase_inValidInputDataInteger
     * @description Tests the characterStringParsing function convertStringToLowerCase with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToLowerCase_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToLowerCase_inValidInputDataBoolean
     * @description Tests the characterStringParsing function convertStringToLowerCase with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToLowerCase_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToLowerCase_inValidInputDataUndefined
     * @description Tests the characterStringParsing function convertStringToLowerCase with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToLowerCase_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToLowerCase_inValidInputDataNaN
     * @description Tests the characterStringParsing function convertStringToLowerCase with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToLowerCase_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function convertStringToUpperCase
 * @description Tests the positive and negative test cases of the convertStringToUpperCase
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cconvertStringToUpperCase, () => {
    /**
     * @function convertStringToUpperCase_validData
     * @description Tests the characterStringParsing function convertStringToUpperCase with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToUpperCase_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.csuccess;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.convertStringToUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cSUCCESS);
    });

    /**
     * @function convertStringToUpperCase_inValidInputDataInteger
     * @description Tests the characterStringParsing function convertStringToUpperCase with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToUpperCase_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToUpperCase_inValidInputDataBoolean
     * @description Tests the characterStringParsing function convertStringToUpperCase with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToUpperCase_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToUpperCase_inValidInputDataUndefined
     * @description Tests the characterStringParsing function convertStringToUpperCase with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToUpperCase_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function convertStringToUpperCase_inValidInputDataNaN
     * @description Tests the characterStringParsing function convertStringToUpperCase with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cconvertStringToUpperCase_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesStringContainUpperCaseCharacter
 * @description Tests the positive and negative test cases of the doesStringContainUpperCaseCharacter
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cdoesStringContainUpperCaseCharacter, () => {
    /**
     * @function doesStringContainUpperCaseCharacter_validData
     * @description Tests the characterStringParsing function doesStringContainUpperCaseCharacter with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainUpperCaseCharacter_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.cTest;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesStringContainUpperCaseCharacter_inValidInputDataInteger
     * @description Tests the characterStringParsing function doesStringContainUpperCaseCharacter with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainUpperCaseCharacter_inValidInputDataBoolean
     * @description Tests the characterStringParsing function doesStringContainUpperCaseCharacter with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainUpperCaseCharacter_inValidInputDataUndefined
     * @description Tests the characterStringParsing function doesStringContainUpperCaseCharacter with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainUpperCaseCharacter_inValidInputDataNaN
     * @description Tests the characterStringParsing function doesStringContainUpperCaseCharacter with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesStringContainLowerCaseCharacter
 * @description Tests the positive and negative test cases of the doesStringContainLowerCaseCharacter
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cdoesStringContainLowerCaseCharacter, () => {
    /**
     * @function doesStringContainLowerCaseCharacter_validData
     * @description Tests the characterStringParsing function doesStringContainLowerCaseCharacter with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainLowerCaseCharacter_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = bas.ca + wrd.cTest;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesStringContainLowerCaseCharacter_inValidInputDataInteger
     * @description Tests the characterStringParsing function doesStringContainLowerCaseCharacter with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainLowerCaseCharacter_inValidInputDataBoolean
     * @description Tests the characterStringParsing function doesStringContainLowerCaseCharacter with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainLowerCaseCharacter_inValidInputDataUndefined
     * @description Tests the characterStringParsing function doesStringContainLowerCaseCharacter with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesStringContainLowerCaseCharacter_inValidInputDataNaN
     * @description Tests the characterStringParsing function doesStringContainLowerCaseCharacter with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isFirstCharacterLowerCase
 * @description Tests the positive and negative test cases of the isFirstCharacterLowerCase
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.cisFirstCharacterLowerCase, () => {
    /**
     * @function isFirstCharacterLowerCase_validData
     * @description Tests the characterStringParsing function isFirstCharacterLowerCase with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cisFirstCharacterLowerCase_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = wrd.chello;
        let inputMetaData = '';

        // Act
        let returnData = await characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isFirstCharacterLowerCase_inValidInputDataInteger
     * @description Tests the characterStringParsing function isFirstCharacterLowerCase with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cisFirstCharacterLowerCase_inValidInputDataInteger, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isFirstCharacterLowerCase_inValidInputDataBoolean
     * @description Tests the characterStringParsing function isFirstCharacterLowerCase with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cisFirstCharacterLowerCase_inValidInputDataBoolean, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isFirstCharacterLowerCase_inValidInputDataUndefined
     * @description Tests the characterStringParsing function isFirstCharacterLowerCase with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cisFirstCharacterLowerCase_inValidInputDataUndefined, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function isFirstCharacterLowerCase_inValidInputDataNaN
     * @description Tests the characterStringParsing function isFirstCharacterLowerCase with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.cisFirstCharacterLowerCase_inValidInputDataNaN, async () => {
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
        let returnData = await characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);
        
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function replaceCharacterAtIndexOfString
 * @description Tests the positive and negative test cases of the replaceCharacterAtIndexOfString
 * @author Vlad Sorokin
 * @date 2025/06/04
 */
describe(tst_con.creplaceCharacterAtIndexOfString, () => {
    /**
     * @function replaceCharacterAtIndexOfString_validData
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a valid input.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cman, 1];
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(wrd.cmen);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputDataString
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data string.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = tst_man.ctestString1;
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputDataInteger
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = 123;
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputDataBoolean
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = false;
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputMetaDataInteger
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cman, 1];
        let inputMetaData = 123;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputMetaDataBoolean
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cman, 1];
        let inputMetaData = false;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputDataUndefined
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = undefined;
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputDataNaN
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = NaN;
        let inputMetaData = bas.ce;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);


        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputMetaDataUndefined
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cman, 1];
        let inputMetaData = undefined;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function replaceCharacterAtIndexOfString_inValidInputMetaDataNaN
     * @description Tests the characterStringParsing function replaceCharacterAtIndexOfString with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2025/06/04
     */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let inputData = [wrd.cman, 1];
        let inputMetaData = NaN;

        // Act
        let returnData = await characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });
})
