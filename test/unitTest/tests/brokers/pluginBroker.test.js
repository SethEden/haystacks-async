'use strict'
/* eslint-disable no-undef */
/**
 * @file pluginBroker.test.js
 * @module pluginBroker.test
 * @description Unit tests for the pluginBroker.js
 * @requires module:pluginBroker
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:main
 * @requires module:D
 * @requires module:test.constants
 * @requires module:pluginBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @author Vlad Sorokin
 * @date 2024/07/08
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import pluginBroker from '../../../../src/brokers/pluginBroker.js'
import characterStringParsing from '../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileStringParsing from '../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
import D from '../../../../src/structures/data.js';
import * as tst_cbt from '../../testData/brokers/commandBrokerTest.js'
import * as tst_pbt from '../../testData/brokers/pluginBrokerTest.js';
import pluginCommandsLibrary from '../../testData/testPlugins/test-plugin-one/commandsBlob/commandsLibrary.js'
import pluginDataFile from '../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_man from '../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, sys, wrd} = hayConst;
import { writeFile } from 'fs/promises';

// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};

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
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = pathToPluginsJsonFile;

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
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathInteger
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathInteger, async () => {
        // Arrange
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = 123;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathBoolean
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathBoolean, async () => {
        // Arrange
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = false;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathUndefined
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathUndefined, async () => {
        // Arrange
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = undefined;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginRegistry_inValidPluginRegistryPathNaN
     * @description Tests the pluginBroker function loadPluginRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/15
     */
    test(tst_con.cloadPluginRegistry_inValidPluginRegistryPathNaN, async () => {
        // Arrange
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        // Presetting the plugin.json file.
        await writeFile(pathToPluginsJsonFile, JSON.stringify(tst_pbt.cexpectedDataFromPluginsJsonFile, null, 2));            
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let pluginRegistryPath = NaN;

        // Act
        let returnData = await pluginBroker.loadPluginRegistry(pluginRegistryPath);

        // Assert
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};
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
        D[wrd.cCommands] = {};
        let pluginPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};
        let pluginPath = 123;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};
        let pluginPath = false;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};
        let pluginPath = undefined;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};
        let pluginPath = NaN;

        // Act
        let returnData = await pluginBroker.loadPluginMetaData(pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

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
        D[wrd.cCommands] = {};

        let pluginMetaData = tst_man.ctestString1;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

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
        D[wrd.cCommands] = {};

        let pluginMetaData = 123;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = false;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = 123;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = false;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = undefined;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = NaN;
        let pluginPath = tst_man.testPluginPath;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = undefined;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
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
        D[wrd.cCommands] = {};

        let pluginMetaData = tst_pbt.cexpectedDataFromTestPluginOnePackageJsonFile;
        let pluginPath = NaN;
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;

        // Act
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.extractAndProcessPluginEntryPointURI(pluginMetaData, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadPlugin
 * @description Tests the positive and negative test cases of the loadPlugin
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cloadPlugin, () => {
    /**
     * @function loadPlugin_validPluginExecutionPathData
     * @description Tests the pluginBroker function loadPlugin with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_validPluginExecutionPathData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = tst_man.testPluginPath;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(pluginData);
    });

    /**
     * @function loadPlugin_inValidPluginExecutionPathString
     * @description Tests the pluginBroker function loadPlugin with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_inValidPluginExecutionPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginExecutionPathInteger
     * @description Tests the pluginBroker function loadPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_inValidPluginExecutionPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = 123;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginExecutionPathBoolean
     * @description Tests the pluginBroker function loadPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_inValidPluginExecutionPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = false;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginExecutionPathUndefined
     * @description Tests the pluginBroker function loadPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_inValidPluginExecutionPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = undefined;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginExecutionPathNaN
     * @description Tests the pluginBroker function loadPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cloadPlugin_inValidPluginExecutionPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginExecutionPath = NaN;

        // Act
        let returnData = await pluginBroker.loadPlugin(pluginExecutionPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginBusinessRules
 * @description Tests the positive and negative test cases of the integratePluginBusinessRules
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cintegratePluginBusinessRules, () => {
    /**
     * @function integratePluginBusinessRules_validData
     * @description Tests the pluginBroker function integratePluginBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginBusinessRulesString
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = tst_man.ctestString1;
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginBusinessRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginBusinessRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginBusinessRulesInteger
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = 123;
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginBusinessRulesBoolean
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = false;
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginBusinessRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginBusinessRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginBusinessRulesUndefined
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = undefined;
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginBusinessRules_inValidPluginBusinessRulesNaN
     * @description Tests the pluginBroker function integratePluginBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginBusinessRules = NaN;
        
        // Act
        let returnData = await pluginBroker.integratePluginBusinessRules(pluginName, pluginBusinessRules);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginCommands
 * @description Tests the positive and negative test cases of the integratePluginCommands
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cintegratePluginCommands, () => {
    /**
     * @function integratePluginCommands_validData
     * @description Tests the pluginBroker function integratePluginCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = pluginData[wrd.cdata][sys.cpluginCommands];

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginCommands_inValidPluginCommandsString
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginCommandsString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = 123;
        let pluginCommands = pluginData[wrd.cdata][sys.cpluginCommands];

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = false;
        let pluginCommands = pluginData[wrd.cdata][sys.cpluginCommands];

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginCommandsInteger
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginCommandsInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = 123;

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginCommandsBoolean
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginCommandsBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = false;

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = undefined;
        let pluginCommands = pluginData[wrd.cdata][sys.cpluginCommands];

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = NaN;
        let pluginCommands = pluginData[wrd.cdata][sys.cpluginCommands];

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginCommandsUndefined
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginCommandsUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = undefined;

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommands_inValidPluginCommandsNaN
     * @description Tests the pluginBroker function integratePluginCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommands_inValidPluginCommandsNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = {};
        pluginData[wrd.cdata][sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = NaN;

        // Act
        let returnData = await pluginBroker.integratePluginCommands(pluginName, pluginCommands);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginConfigurationData
 * @description Tests the positive and negative test cases of the integratePluginConfigurationData
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cintegratePluginConfigurationData, () => {
    /**
     * @function integratePluginConfigurationData_validData
     * @description Tests the pluginBroker function integratePluginConfigurationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginNameString
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestString1;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginConfigurationDataString
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = 123;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = false;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginConfigurationDataInteger
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = 123;

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginConfigurationDataBoolean
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = false;

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = undefined;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = NaN;
        let pluginConfigData = {
        [wrd.csystem]: {
            [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false,
            [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true
        },
        [cfg.cdebugSetting]: {
            [wrd.cplugins]: {
                [pluginName]: {
                [cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + pluginName + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cunit + wrd.cTest + wrd.cRules]: false
                }
            }
        }};

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginConfigurationDataUndefined
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = undefined;

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginConfigurationData_inValidPluginConfigurationDataNaN
     * @description Tests the pluginBroker function integratePluginConfigurationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = NaN;

        // Act
        let returnData = await pluginBroker.integratePluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginCommandAliases
 * @description Tests the positive and negative test cases of the integratePluginCommandAliases
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cintegratePluginCommandAliases, () => {
    /**
     * @function integratePluginCommandAliases_validData
     * @description Tests the pluginBroker function integratePluginCommandAliases with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginCommandAliasesString
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginCommandAliasesInteger
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = 123;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginCommandAliasesBoolean
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = false;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginCommandAliasesUndefined
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = undefined;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginCommandAliases_inValidPluginCommandAliasesNaN
     * @description Tests the pluginBroker function integratePluginCommandAliases with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = NaN;

        // Act
        let returnData = await pluginBroker.integratePluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginWorkflows
 * @description Tests the positive and negative test cases of the integratePluginWorkflows
 * @author Vlad Sorokin
 * @date 2024/07/22
 */
describe(tst_con.cintegratePluginWorkflows, () => {
    /**
     * @function integratePluginWorkflows_validData
     * @description Tests the pluginBroker function integratePluginWorkflows with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginWorkflowsString
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginWorkflowsInteger
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = 123;

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginWorkflowsBoolean
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = false;

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginWorkflowsUndefined
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = undefined;

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginWorkflows_inValidPluginWorkflowsNaN
     * @description Tests the pluginBroker function integratePluginWorkflows with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/22
     */
    test(tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = NaN;

        // Act
        let returnData = await pluginBroker.integratePluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function integratePluginThemeData
 * @description Tests the positive and negative test cases of the integratePluginThemeData
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cintegratePluginThemeData, () => {
    /**
     * @function integratePluginThemeData_validData
     * @description Tests the pluginBroker function integratePluginThemeData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = pluginData[wrd.cdata][wrd.cThemes];

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function integratePluginThemeData_inValidPluginThemeDataString
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginThemeDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginNameInteger
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginThemeData = pluginData[wrd.cdata][wrd.cThemes];

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginNameBoolean
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginThemeData = pluginData[wrd.cdata][wrd.cThemes];

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginThemeDataInteger
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginThemeDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = 123;

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginThemeDataBoolean
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginThemeDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = false;

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginNameUndefined
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginThemeData = pluginData[wrd.cdata][wrd.cThemes];

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginNameNaN
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginThemeData = pluginData[wrd.cdata][wrd.cThemes];

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginThemeDataUndefined
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginThemeDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = undefined;

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function integratePluginThemeData_inValidPluginThemeDataNaN
     * @description Tests the pluginBroker function integratePluginThemeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cintegratePluginThemeData_inValidPluginThemeDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginThemeData = NaN;

        // Act
        let returnData = await pluginBroker.integratePluginThemeData(pluginName, pluginThemeData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function unloadPlugin
 * @description Tests the positive and negative test cases of the unloadPlugin
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cunloadPlugin, () => {
    /**
     * @function unloadPlugin_validPluginNameData
     * @description Tests the pluginBroker function unloadPlugin with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_validPluginNameData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
    
        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unloadPlugin_inValidPluginNameString
     * @description Tests the pluginBroker function unloadPlugin with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_inValidPluginNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
        pluginName = tst_man.ctestString1;

        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameInteger
     * @description Tests the pluginBroker function unloadPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
        pluginName = 123;

        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameBoolean
     * @description Tests the pluginBroker function unloadPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
        pluginName = false;

        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameUndefined
     * @description Tests the pluginBroker function unloadPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
        pluginName = undefined;

        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameNaN
     * @description Tests the pluginBroker function unloadPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cunloadPlugin_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);
        pluginName = NaN;

        // Act
        let returnData = await pluginBroker.unloadPlugin(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getPluginsRegistryPath
 * @description Tests the positive and negative test cases of the getPluginsRegistryPath
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cgetPluginsRegistryPath, () => {
    /**
     * @function getPluginsRegistryPath_validData
     * @description Tests the pluginBroker function getPluginsRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cgetPluginsRegistryPath_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[sys.cConstantsValidationData] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        let pluginRegistryData = tst_pbt.cexpectedDataFromPluginsJsonFile;
        await pluginBroker.storePluginRegistryInDataStructure(pluginRegistryData);

        // Act
        let returnData = await pluginBroker.getPluginsRegistryPath();

        // Assert
        expect(returnData).toEqual(tst_pbt.cpathToTestPluginsFolder);
    });
})
