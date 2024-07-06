'use strict'
/* eslint-disable no-undef */
/**
 * @file constantBroker.test.js
 * @module constantBroker.test
 * @description Unit tests for the constantBroker.js
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:D
 * @requires module:constantBrokerTest
 * @requires module:mainTest
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/06/11
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import constantBroker from '../../../../src/brokers/constantBroker.js';
// import * as tst_cbt from '../../testData/brokers/constantBrokerTest.js'
import * as tst_man from '../../testData/mainTest.js';
import D from '../../../../src/structures/data.js';
import * as tst_con from '../resources/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { phonicConstantsValidation } from '@haystacks/constants/src/constantsValidation/phonic.constants.validation.js';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;


/**
 * @function initializeConstantsValidationData
 * @description Tests the positive and negative test cases of the initializeConstantsValidationData
 * @author Vlad Sorokin
 * @date 2024/07/03
 */
describe(tst_con.cinitializeConstantsValidationData, () => {
    /**
     * @function initializeConstantsValidationData_validData
     * @description Tests the constantBroker function initializeConstantsValidationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/03
     */
    test(tst_con.cinitializeConstantsValidationData_validData, async () => {
        // Act
        let returnData = await constantBroker.initializeConstantsValidationData();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function generateFrameworkConstantsValidationData
 * @description Tests the positive and negative test cases of the generateFrameworkConstantsValidationData
 * @author Vlad Sorokin
 * @date 2024/07/03
 */
describe(tst_con.cgenerateFrameworkConstantsValidationData, () => {
    /**
     * @function generateFrameworkConstantsValidationData_validData
     * @description Tests the constantBroker function generateFrameworkConstantsValidationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/03
     */
    test(tst_con.cgenerateFrameworkConstantsValidationData_validData, async () => {
        // Act
        let returnData = await constantBroker.generateFrameworkConstantsValidationData();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function addConstantsValidationData
 * @description Tests the positive and negative test cases of the addConstantsValidationData
 * @author Vlad Sorokin
 * @date 2024/07/05
 */
describe(tst_con.caddConstantsValidationData, () => {
    /**
     * @function addConstantsValidationData_validData
     * @description Tests the constantBroker function addConstantsValidationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_validData, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function addConstantsValidationData_inValidConstantsValidationDataString
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidConstantsValidationDataString, async () => {
        // Arrange
        let constantsValidationData = tst_man.ctestString1;
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidContextNameString
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidContextNameString, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = tst_man.ctestString1;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidConstantsValidationDataInteger
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidConstantsValidationDataInteger, async () => {
        // Arrange
        let constantsValidationData = 123;
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidConstantsValidationDataBoolean
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidConstantsValidationDataBoolean, async () => {
        // Arrange
        let constantsValidationData = false;
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidContextNameInteger
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidContextNameInteger, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = 123;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidContextNameBoolean
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidContextNameBoolean, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = false;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidConstantsValidationDataUndefined
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidConstantsValidationDataUndefined, async () => {
        // Arrange
        let constantsValidationData = undefined;
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidConstantsValidationDataNaN
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidConstantsValidationDataNaN, async () => {
        // Arrange
        let constantsValidationData = NaN;
        let contextName = wrd.cFramework;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidContextNameUndefined
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidContextNameUndefined, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = undefined;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addConstantsValidationData_inValidContextNameNaN
     * @description Tests the constantBroker function addConstantsValidationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/05
     */
    test(tst_con.caddConstantsValidationData_inValidContextNameNaN, async () => {
        // Arrange
        let constantsValidationData = {
            [sys.cConstantsValidationData]: {
                [sys.cConstantsShortNames]: {
                    [sys.cBasicConstantsValidation]: gen.cbas
                }
            }
        };
        let contextName = NaN;
    
        // Act
        let returnData = await constantBroker.addConstantsValidationData(constantsValidationData, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})


