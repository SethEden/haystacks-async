'use strict'
/* eslint-disable no-undef */
/**
 * @file commandBroker.test.js
 * @module commandBroker.test
 * @description Unit tests for the commandBroker.js
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:test.constants
 * @requires module:
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/06/11
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import commandBroker from '../../../../src/brokers/commandBroker.js'
import D from '../../../../src/structures/data.js';
import * as tst_man from '../../testData/mainTest.js';
import * as tst_con from '../resources/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import url from 'url';
import path from 'path';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.commandBroker.test.
const namespacePrefix = wrd.cframework + bas.cDot + baseFileName + bas.cDot;
let rootPath = '';



/**
 * @function bootStrapCommands
 * @description Tests the positive and negative test cases of the bootStrapCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.cbootStrapCommands, () => {
    /**
     * @function bootStrapCommands_validData
     * @description Tests the commandBroker function bootStrapCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.cbootStrapCommands_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {};        

        // Act
        let returnData = await commandBroker.bootStrapCommands();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function resetCommands
 * @description Tests the positive and negative test cases of the resetCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.cresetCommands, () => {
    /**
     * @function resetCommands_validData
     * @description Tests the commandBroker function resetCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.cresetCommands_validData, async () => {
        // Arrange
        

        // Act
        let returnData = await commandBroker.resetCommands();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function addClientCommands
 * @description Tests the positive and negative test cases of the addClientCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.caddClientCommands, () => {
    /**
     * @function addClientCommands_validClientCommandsData
     * @description Tests the commandBroker function addClientCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_validClientCommandsData, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeTruthy();
        expect(D[wrd.cCommands]).toEqual(testCommandsLibrary);
    });

    /**
     * @function addClientCommands_inValidClientCommandsString
     * @description Tests the commandBroker function addClientCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsString, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsInteger
     * @description Tests the commandBroker function addClientCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsInteger, async () => {
        // Arrange
         D[wrd.cCommands] = {};
        let testCommandsLibrary = 123;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsBoolean
     * @description Tests the commandBroker function addClientCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = false;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsUndefined
     * @description Tests the commandBroker function addClientCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsUndefined, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = undefined;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsNaN
     * @description Tests the commandBroker function addClientCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsNaN, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = NaN;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });
})
