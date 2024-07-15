'use strict'
/* eslint-disable no-undef */
/**
 * @file pluginBroker.test.js
 * @module pluginBroker.test
 * @description Unit tests for the pluginBroker.js
 * @requires module:constantBroker
 * @requires module:pluginBroker
 * @requires module:ruleBroker
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:dataStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:main
 * @requires module:D
 * @requires module:test.constants
 * @requires module:pluginBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/08
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import constantBroker from '../../../../src/brokers/constantBroker.js';
import pluginBroker from '../../../../src/brokers/pluginBroker.js'
import ruleBroker from '../../../../src/brokers/ruleBroker.js';
import characterArrayParsing from '../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import dataStringParsing from '../../../../src/businessRules/rules/stringParsing/dataStringParsing.js';
import fileStringParsing from '../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
import D from '../../../../src/structures/data.js';
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_pbt from '../../testData/brokers/pluginBrokerTest.js'
import * as tst_man from '../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;

/**
 * @function loadPluginRegistry
 * @description Tests the positive and negative test cases of the loadPluginRegistry
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.cloadPluginRegistry, () => {
    /**
     * @function loadPluginRegistry_validPluginRegistryPathData
     * @description Tests the pluginBroker function loadPluginRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_validPluginRegistryPathData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = tst_pbt.cpathToUnitTestPluginsJsonFile;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(tst_pbt.cexpectedDataFromPluginsJsonFile);
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathString
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathString, async () => {
        // Arrange
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathInteger
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathInteger, async () => {
        // Arrange
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = 123;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathBoolean
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathBoolean, async () => {
        // Arrange
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = false;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathUndefined
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathUndefined, async () => {
        // Arrange
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = undefined;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathNaN
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathNaN, async () => {
        // Arrange
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = NaN;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function storePluginRegistryInDataStructure
 * @description Tests the positive and negative test cases of the storePluginRegistryInDataStructure
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.cstorePluginRegistryInDataStructure, () => {
    /**
     * @function storePluginRegistryInDataStructure_validPluginRegistryDataData
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_validPluginRegistryDataData, async () => {
        // Arrange
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeTruthy();
        delete D[cfg.cpluginRegistry];
    });

    /**
     * @function storePluginRegistryInDataStructure_inValidPluginRegistryDataString
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataString, async () => {
        // Arrange
        let pluginRegistryData = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[cfg.cpluginRegistry];
    });

    /**
     * @function storePluginRegistryInDataStructure_inValidPluginRegistryDataInteger
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataInteger, async () => {
        // Arrange
        let pluginRegistryData = 123;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[cfg.cpluginRegistry];
    });

    /**
     * @function storePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean, async () => {
        // Arrange
        let pluginRegistryData = false;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[cfg.cpluginRegistry];
    });

    /**
     * @function storePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined, async () => {
        // Arrange
        let pluginRegistryData = undefined;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[cfg.cpluginRegistry];
    });

    /**
     * @function storePluginRegistryInDataStructure_inValidPluginRegistryDataNaN
     * @description Tests the pluginBroker function storePluginRegistryInDataStructure with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataNaN, async () => {
        // Arrange
        let pluginRegistryData = NaN;

        // Act
        let returnData = await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[cfg.cpluginRegistry];
    });
})

/**
 * @function listAllLoadedPlugins
 * @description Tests the positive and negative test cases of the listAllLoadedPlugins
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.clistAllLoadedPlugins, () => {
    /**
     * @function listAllLoadedPlugins_validData
     * @description Tests the pluginBroker function listAllLoadedPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistAllLoadedPlugins_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne,true]];

        // Act
        let returnData = await pluginBroker.listAllLoadedPlugins();

        // Assert
        expect(returnData).toEqual([tst_man.ctestPluginOne]);
    });
})

/**
 * @function listPluginsInRegistry
 * @description Tests the positive and negative test cases of the listPluginsInRegistry
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.clistPluginsInRegistry, () => {
    /**
     * @function listPluginsInRegistry_validData
     * @description Tests the pluginBroker function listPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsInRegistry_validData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;


        // Act
        let returnData = await pluginBroker.listPluginsInRegistry();

        // Assert
        expect(returnData).toEqual([tst_man.ctestPluginOne]);
    });
})

/**
 * @function listPluginsPathsInRegistry
 * @description Tests the positive and negative test cases of the listPluginsPathsInRegistry
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.clistPluginsPathsInRegistry, () => {
    /**
     * @function listPluginsPathsInRegistry_validData
     * @description Tests the pluginBroker function listPluginsPathsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsPathsInRegistry_validData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        let returnData = await pluginBroker.listPluginsPathsInRegistry();

        // Assert
        expect(returnData).toEqual([tst_man.testPluginPath]);
    });
})

/**
 * @function listPluginsAttributeInRegistry
 * @description Tests the positive and negative test cases of the listPluginsAttributeInRegistry
 * @author Vlad Sorokin
 * @date 2024/07/15
 */
describe(tst_con.clistPluginsAttributeInRegistry, () => {
    /**
     * @function listPluginsAttributeInRegistry_validAttributeNameData
     * @description Tests the pluginBroker function listPluginsAttributeInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsAttributeInRegistry_validAttributeNameData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = wrd.cName;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toEqual([tst_man.ctestPluginOne]);
    });

    /**
     * @function listPluginsAttributeInRegistry_inValidAttributeNameInteger
     * @description Tests the pluginBroker function listPluginsAttributeInRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = 123;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listPluginsAttributeInRegistry_inValidAttributeNameBoolean
     * @description Tests the pluginBroker function listPluginsAttributeInRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = false;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listPluginsAttributeInRegistry_inValidAttributeNameUndefined
     * @description Tests the pluginBroker function listPluginsAttributeInRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = undefined;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listPluginsAttributeInRegistry_inValidAttributeNameNaN
     * @description Tests the pluginBroker function listPluginsAttributeInRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = NaN;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})









