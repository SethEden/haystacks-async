'use strict'
/* eslint-disable no-undef */
/**
 * @file constantBroker.test.js
 * @module constantBroker.test
 * @description Unit tests for the constantBroker.js
 * @requires module:constantBroker
 * @requires module:fileOperations
 * @requires module:main
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
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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
        D[sys.cConstantsValidationData][wrd.cFramework][sys.cConstantsShortNames] = {};
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

/**
 * @function removePluginConstantsValidationData
 * @description Tests the positive and negative test cases of the removePluginConstantsValidationData
 * @author Vlad Sorokin
 * @date 2024/07/08
 */
describe(tst_con.cremovePluginConstantsValidationData, () => {
    /**
     * @function removePluginConstantsValidationData_validPluginNameData
     * @description Tests the constantBroker function removePluginConstantsValidationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_validPluginNameData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = tst_man.ctestPluginOne;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function removePluginConstantsValidationData_inValidPluginNameString
     * @description Tests the constantBroker function removePluginConstantsValidationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_inValidPluginNameString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = tst_man.ctestString1;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function removePluginConstantsValidationData_inValidPluginNameInteger
     * @description Tests the constantBroker function removePluginConstantsValidationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = 123;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function removePluginConstantsValidationData_inValidPluginNameBoolean
     * @description Tests the constantBroker function removePluginConstantsValidationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = false;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function removePluginConstantsValidationData_inValidPluginNameUndefined
     * @description Tests the constantBroker function removePluginConstantsValidationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = undefined;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function removePluginConstantsValidationData_inValidPluginNameNaN
     * @description Tests the constantBroker function removePluginConstantsValidationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cremovePluginConstantsValidationData_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        await main.loadPlugin(tst_man.testPluginPath);
        let pluginName = NaN;

        // Act
        let returnData = await constantBroker.removePluginConstantsValidationData(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})


