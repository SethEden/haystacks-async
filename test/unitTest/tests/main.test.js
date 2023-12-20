'use strict'
/* eslint-disable no-undef */
/**
 * @file main.test.js
 * @module constant.test
 * @description Unit tests for the main.js
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import allTstCV from '../testData/resources/constantsValidation/testConstantsValidationMetadata.js';
import * as tst_man from '../testData/mainTest.js';
import * as tst_con from './constants/test.constants.js';
import * as tst_sys from './constants/test.system.constants.js';
import main from '../../../src/main.js'

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation.js';

const {bas, wrd, num } = hayConst;

/**
 * @function initFramework
 * @description Tests the positive and negative test cases of the initFramework
 * @author Vlad Sorokin
 * @date 2023/11/24
 */
describe(tst_con.cinitFramework, () => {
    /**
     * @function initFramework_validData
     * @description Tests the main function initFramework with a valid input.
     * @author Vlad Sorokin
     * @date 2023/11/24
     * @NOTE If you are using frameworkConstantsPath string constant and your @haystacks-constants is not linked. 
     * Go to unitTest.testData.mainTest.js. Comment out first frameworkConstantsPath string constant and uncomment the second one. 
     * That is supposed to be done in unitTest.testData.mainTest.js, as well as in test.configuration.constants.js and test.configuration.constants.validation.js.
     * Given the above statement its recommended to run unit tests with the constats unlinked, 
     * because the local paths on your system might be different.
     */
    test(tst_con.cinitFramework_validData, async () => {
        // Arrange
        let clientConfiguration = tst_man.initFrameworkObjectInput;
        let mutatedClientConfiguration = tst_man.initFrameworkObjectExpected;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(mutatedClientConfiguration)
    });

    /**
     * @function initFramework_inValidClientConfigurationString
     * @description Tests the main function initFramework with a invalid clientConfiguration string.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.initFramework_inValidClientConfigurationString, async () => {
        // Arrange
        let clientConfiguration = tst_man.ctestString1;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeFalsy();
    });



})