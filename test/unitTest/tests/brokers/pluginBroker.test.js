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

// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}

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
        expect(returnData).toEqual(true);
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
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
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        let attributeName = NaN;

        // Act
        let returnData = await pluginBroker.listPluginsAttributeInRegistry(attributeName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function listPluginsInRegistryPath
 * @description Tests the positive and negative test cases of the listPluginsInRegistryPath
 * @author Vlad Sorokin
 * @date 2024/07/16
 */
describe(tst_con.clistPluginsInRegistryPath, () => {
    /**
     * @function listPluginsInRegistryPath_validData
     * @description Tests the pluginBroker function listPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.clistPluginsInRegistryPath_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        } 

        // Act
        let returnData = await pluginBroker.listPluginsInRegistryPath();

        // Assert
        expect(returnData).toEqual([tst_man.ctestPluginOne]);
    });
})

/**
 * @function countPluginsInRegistry
 * @description Tests the positive and negative test cases of the countPluginsInRegistry
 * @author Vlad Sorokin
 * @date 2024/07/16
 */
describe(tst_con.ccountPluginsInRegistry, () => {
    /**
     * @function countPluginsInRegistry_validData
     * @description Tests the pluginBroker function countPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.ccountPluginsInRegistry_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        let returnData = await pluginBroker.countPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(1);
    });
})

/**
 * @function countPluginsInRegistryPath
 * @description Tests the positive and negative test cases of the countPluginsInRegistryPath
 * @author Vlad Sorokin
 * @date 2024/07/16
 */
describe(tst_con.ccountPluginsInRegistryPath, () => {
    /**
     * @function countPluginsInRegistryPath_validData
     * @description Tests the pluginBroker function countPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.ccountPluginsInRegistryPath_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_pbt.cexpectedDataFromPluginsJsonFile;
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        } 

        // Act
        let returnData = await pluginBroker.countPluginsInRegistryPath();

        // Assert
        expect(returnData).toEqual(1);
    });
})

/**
 * @function registerPlugin
 * @description Tests the positive and negative test cases of the registerPlugin
 * @author Vlad Sorokin
 * @date 2024/07/16
 */
describe(tst_con.cregisterPlugin, () => {
    /**
     * @function registerPlugin_validData
     * @description Tests the pluginBroker function registerPlugin with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function registerPlugin_inValidPluginPathString
     * @description Tests the pluginBroker function registerPlugin with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginNameInteger
     * @description Tests the pluginBroker function registerPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = 123;
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginNameBoolean
     * @description Tests the pluginBroker function registerPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = false;
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginPathInteger
     * @description Tests the pluginBroker function registerPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = 123;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginPathBoolean
     * @description Tests the pluginBroker function registerPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = false;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginNameUndefined
     * @description Tests the pluginBroker function registerPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = undefined;
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginNameNaN
     * @description Tests the pluginBroker function registerPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = NaN;
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginPathUndefined
     * @description Tests the pluginBroker function registerPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = undefined;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPlugin_inValidPluginPathNaN
     * @description Tests the pluginBroker function registerPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/16
     */
    test(tst_con.cregisterPlugin_inValidPluginPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = NaN;

        // Act
        let returnData = await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function unregisterPlugin
 * @description Tests the positive and negative test cases of the unregisterPlugin
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.cunregisterPlugin, () => {
    /**
     * @function unregisterPlugin_validPluginNameData
     * @description Tests the pluginBroker function unregisterPlugin with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_validPluginNameData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unregisterPlugin_inValidPluginNameString
     * @description Tests the pluginBroker function unregisterPlugin with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_inValidPluginNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        pluginName = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugin_inValidPluginNameInteger
     * @description Tests the pluginBroker function unregisterPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        pluginName = 123;

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugin_inValidPluginNameBoolean
     * @description Tests the pluginBroker function unregisterPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        pluginName = false;

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugin_inValidPluginNameUndefined
     * @description Tests the pluginBroker function unregisterPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        pluginName = undefined;

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugin_inValidPluginNameNaN
     * @description Tests the pluginBroker function unregisterPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugin_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        pluginName = NaN;

        // Act
        let returnData = await pluginBroker.unregisterPlugin(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function unregisterPlugins
 * @description Tests the positive and negative test cases of the unregisterPlugins
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.cunregisterPlugins, () => {
    /**
     * @function unregisterPlugins_validPluginListArrayData
     * @description Tests the pluginBroker function unregisterPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_validPluginListArrayData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [pluginName];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unregisterPlugins_inValidPluginListArrayString
     * @description Tests the pluginBroker function unregisterPlugins with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_inValidPluginListArrayString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [tst_man.ctestString1];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugins_inValidPluginListArrayInteger
     * @description Tests the pluginBroker function unregisterPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_inValidPluginListArrayInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [123];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugins_inValidPluginListArrayBoolean
     * @description Tests the pluginBroker function unregisterPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_inValidPluginListArrayBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [false];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugins_inValidPluginListArrayUndefined
     * @description Tests the pluginBroker function unregisterPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_inValidPluginListArrayUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [undefined];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPlugins_inValidPluginListArrayNaN
     * @description Tests the pluginBroker function unregisterPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterPlugins_inValidPluginListArrayNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);
        let pluginListArray = [NaN];

        // Act
        let returnData = await pluginBroker.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function syncPluginRegistryWithPluginRegistryPath
 * @description Tests the positive and negative test cases of the syncPluginRegistryWithPluginRegistryPath
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.csyncPluginRegistryWithPluginRegistryPath, () => {
    /**
     * @function syncPluginRegistryWithPluginRegistryPath_validData
     * @description Tests the pluginBroker function syncPluginRegistryWithPluginRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/ /Day1
     */
    test(tst_con.csyncPluginRegistryWithPluginRegistryPath_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        let pluginRegistryPath = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Act
        let returnData = await pluginBroker.syncPluginRegistryWithPluginRegistryPath();

        // Assert
        expect(returnData).toEqual(true);
    });
})

/**
 * @function unregisterAllPlugins
 * @description Tests the positive and negative test cases of the unregisterAllPlugins
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.cunregisterAllPlugins, () => {
    /**
     * @function unregisterAllPlugins_validData
     * @description Tests the pluginBroker function unregisterAllPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cunregisterAllPlugins_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        let pluginRegistryPath = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Act
        let returnData = await pluginBroker.unregisterAllPlugins();

        // Assert
        expect(returnData).toEqual(true);
    });
})

/**
 * @function savePluginRegistry
 * @description Tests the positive and negative test cases of the savePluginRegistry
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.csavePluginRegistry, () => {
    /**
     * @function savePluginRegistry_validData
     * @description Tests the pluginBroker function savePluginRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.csavePluginRegistry_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await pluginBroker.registerPlugin(pluginName, pluginPath);

        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + wrd.cplugin + wrd.cRegistry + wrd.cPath]: tst_pbt.cpathToUnitTestPluginsJsonFile,
        }

        // Act
        let returnData = await pluginBroker.savePluginRegistry();

        // Assert
        expect(returnData).toEqual(true);
    });
})

/**
 * @function loadPluginMetaData
 * @description Tests the positive and negative test cases of the loadPluginMetaData
 * @author Vlad Sorokin
 * @date 2024/07/17
 */
describe(tst_con.cloadPluginMetaData, () => {
    /**
     * @function loadPluginMetaData_validPluginPathData
     * @description Tests the pluginBroker function loadPluginMetaData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_validPluginPathData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile);
    });

    /**
     * @function loadPluginMetaData_inValidPluginPathString
     * @description Tests the pluginBroker function loadPluginMetaData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_inValidPluginPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginMetaData_inValidPluginPathInteger
     * @description Tests the pluginBroker function loadPluginMetaData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_inValidPluginPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = 123;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginMetaData_inValidPluginPathBoolean
     * @description Tests the pluginBroker function loadPluginMetaData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_inValidPluginPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = false;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginMetaData_inValidPluginPathUndefined
     * @description Tests the pluginBroker function loadPluginMetaData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_inValidPluginPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = undefined;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadPluginMetaData_inValidPluginPathNaN
     * @description Tests the pluginBroker function loadPluginMetaData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/17
     */
    test(tst_con.cloadPluginMetaData_inValidPluginPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        let pluginPath = NaN;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function extractAndProcessPluginEntryPointURI
 * @description Tests the positive and negative test cases of the extractAndProcessPluginEntryPointURI
 * @author Vlad Sorokin
 * @date 2024/07/18
 */
describe(tst_con.cextractAndProcessPluginEntryPointURI, () => {
    /**
     * @function extractAndProcessPluginEntryPointURI_validData
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);
        
        // Assert
        expect(returnData).toStrictEqual(tst_pbt.cexpectedURIfromTestPluginOne);
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginMetaDataString
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_man.ctestString1;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginPathString
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = tst_man.ctestString1;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = 123;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = false;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginPathInteger
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = 123;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginPathBoolean
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = false;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = undefined;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = NaN;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginPathUndefined
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = undefined;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function extractAndProcessPluginEntryPointURI_inValidPluginPathNaN
     * @description Tests the pluginBroker function extractAndProcessPluginEntryPointURI with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/18
     */
    test(tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = NaN;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})





























