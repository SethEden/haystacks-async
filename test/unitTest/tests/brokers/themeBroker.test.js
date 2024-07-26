'use strict'
/* eslint-disable no-undef */
/**
 * @file themeBroker.test.js
 * @module themeBroker.test
 * @description Unit tests for the themeBroker.js
 * @requires module:themeBroker
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:main
 * @requires module:D
 * @requires module:pluginData
 * @requires module:test.constants
 * @requires module:themeBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import themeBroker from '../../../../src/brokers/themeBroker.js'
import characterArrayParsing from '../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileStringParsing from '../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import stringParsingUtilities from '../../../../src/businessRules/rules/stringParsingUtilities.js';
import main from '../../../../src/main.js';
import D from '../../../../src/structures/data.js';
import pluginDataFile from '../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_thb from '../../testData/brokers/themeBrokerTest.js'
import * as tst_man from '../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};

/**
 * @function initThemeData
 * @description Tests the positive and negative test cases of the initThemeData
 * @author Vlad Sorokin
 * @date 2024/07/24
 */
describe(tst_con.cinitThemeData, () => {
    /**
     * @function initThemeData_validData
     * @description Tests the themeBroker function initThemeData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cinitThemeData_validData, async () => {
        // Arrange
        delete D[wrd.cThemes];

        // Act
        await themeBroker.initThemeData();

        // Assert
        expect(D[wrd.cThemes]).toBeDefined();
    });
})

/**
 * @function generateThemeDataFromPath
 * @description Tests the positive and negative test cases of the generateThemeDataFromPath
 * @author Vlad Sorokin
 * @date 2024/07/24
 */
describe(tst_con.cgenerateThemeDataFromPath, () => {
    /**
     * @function generateThemeDataFromPath_validThemesRootPathData
     * @description Tests the themeBroker function generateThemeDataFromPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_validThemesRootPathData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedJsonDataFromTestPluginsThemesFolder);
    });

    /**
     * @function generateThemeDataFromPath_inValidThemesRootPathString
     * @description Tests the themeBroker function generateThemeDataFromPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = tst_man.ctestString1;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateThemeDataFromPath_inValidThemesRootPathInteger
     * @description Tests the themeBroker function generateThemeDataFromPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = 123;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateThemeDataFromPath_inValidThemesRootPathBoolean
     * @description Tests the themeBroker function generateThemeDataFromPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = false;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateThemeDataFromPath_inValidThemesRootPathUndefined
     * @description Tests the themeBroker function generateThemeDataFromPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = undefined;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function generateThemeDataFromPath_inValidThemesRootPathNaN
     * @description Tests the themeBroker function generateThemeDataFromPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = NaN;

        // Act
        let returnData = await themeBroker.generateThemeDataFromPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function addThemeData
 * @description Tests the positive and negative test cases of the addThemeData
 * @author Vlad Sorokin
 * @date 2024/07/24
 */
describe(tst_con.caddThemeData, () => {
    /**
     * @function addThemeData_validData
     * @description Tests the themeBroker function addThemeData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_validData, async () => {
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
        let themeData = pluginData[wrd.cdata][wrd.cThemes];
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function addThemeData_inValidThemeDataString
     * @description Tests the themeBroker function addThemeData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidThemeDataString, async () => {
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
        let themeData = tst_man.ctestString1;
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidThemeDataInteger
     * @description Tests the themeBroker function addThemeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidThemeDataInteger, async () => {
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
        let themeData = 123;
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidThemeDataBoolean
     * @description Tests the themeBroker function addThemeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidThemeDataBoolean, async () => {
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
        let themeData = false;
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidContextNameInteger
     * @description Tests the themeBroker function addThemeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidContextNameInteger, async () => {
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
        let themeData = pluginData[wrd.cdata][wrd.cThemes];
        let contextName = 123;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidContextNameBoolean
     * @description Tests the themeBroker function addThemeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidContextNameBoolean, async () => {
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
        let themeData = pluginData[wrd.cdata][wrd.cThemes];
        let contextName = false;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidThemeDataUndefined
     * @description Tests the themeBroker function addThemeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidThemeDataUndefined, async () => {
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
        let themeData = undefined;
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidThemeDataNaN
     * @description Tests the themeBroker function addThemeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidThemeDataNaN, async () => {
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
        let themeData = NaN;
        let contextName = wrd.cPlugin + bas.cColon + tst_man.ctestPluginOne;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidContextNameUndefined
     * @description Tests the themeBroker function addThemeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidContextNameUndefined, async () => {
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
        let themeData = pluginData[wrd.cdata][wrd.cThemes];
        let contextName = undefined;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addThemeData_inValidContextNameNaN
     * @description Tests the themeBroker function addThemeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.caddThemeData_inValidContextNameNaN, async () => {
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
        let themeData = pluginData[wrd.cdata][wrd.cThemes];
        let contextName = NaN;

        // Act
        let returnData = await themeBroker.addThemeData(themeData, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getNamedThemesFromRootPath
 * @description Tests the positive and negative test cases of the getNamedThemesFromRootPath
 * @author Vlad Sorokin
 * @date 2024/07/24
 */
describe(tst_con.cgetNamedThemesFromRootPath, () => {
    /**
     * @function getNamedThemesFromRootPath_validThemesRootPathData
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_validThemesRootPathData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual([wrd.cDefault]);
    });

    /**
     * @function getNamedThemesFromRootPath_inValidThemesRootPathString
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = tst_man.ctestString1;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemesFromRootPath_inValidThemesRootPathInteger
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = 123;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemesFromRootPath_inValidThemesRootPathBoolean
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = false;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemesFromRootPath_inValidThemesRootPathUndefined
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = undefined;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemesFromRootPath_inValidThemesRootPathNaN
     * @description Tests the themeBroker function getNamedThemesFromRootPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themesRootPath = NaN;

        // Act
        let returnData = await themeBroker.getNamedThemesFromRootPath(themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function getNamedThemePathFromRootPath
 * @description Tests the positive and negative test cases of the getNamedThemePathFromRootPath
 * @author Vlad Sorokin
 * @date 2024/07/24
 */
describe(tst_con.cgetNamedThemePathFromRootPath, () => {
    /**
     * @function getNamedThemePathFromRootPath_validData
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(tst_thb.cpathToTestPluginDefaultTheme);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemeNameString
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = tst_man.ctestString1;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemesRootPathString
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = tst_man.ctestString1;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemeNameInteger
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = 123;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemeNameBoolean
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = false;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemesRootPathInteger
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = 123;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemesRootPathBoolean
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = false;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemeNameUndefined
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = undefined;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemeNameNaN
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = NaN;
        let themesRootPath = tst_thb.cpathToTestPluginThemesFolder;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemesRootPathUndefined
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = undefined;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getNamedThemePathFromRootPath_inValidThemesRootPathNaN
     * @description Tests the themeBroker function getNamedThemePathFromRootPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/24
     */
    test(tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let themeName = wrd.cDefault;
        let themesRootPath = NaN;

        // Act
        let returnData = await themeBroker.getNamedThemePathFromRootPath(themeName, themesRootPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadTheme
 * @description Tests the positive and negative test cases of the loadTheme
 * @author Vlad Sorokin
 * @date 2024/07/26
 */
describe(tst_con.cloadTheme, () => {
    /**
     * @function loadTheme_validData
     * @description Tests the themeBroker function loadTheme with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cloadTheme_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;

        // Act
        let returnData = await themeBroker.loadTheme();

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedTestPluginOneDefaultDebugSettings);
    });
})

/**
 * @function applyTheme
 * @description Tests the positive and negative test cases of the applyTheme
 * @author Vlad Sorokin
 * @date 2024/07/26
 */
describe(tst_con.capplyTheme, () => {
    /**
     * @function applyTheme_validThemeDataData
     * @description Tests the themeBroker function applyTheme with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_validThemeDataData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = tst_thb.cexpectedTestPluginOneDefaultDebugSettings;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function applyTheme_inValidThemeDataString
     * @description Tests the themeBroker function applyTheme with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_inValidThemeDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = tst_man.ctestString1;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function applyTheme_inValidThemeDataInteger
     * @description Tests the themeBroker function applyTheme with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_inValidThemeDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = 123;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function applyTheme_inValidThemeDataBoolean
     * @description Tests the themeBroker function applyTheme with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_inValidThemeDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = false;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function applyTheme_inValidThemeDataUndefined
     * @description Tests the themeBroker function applyTheme with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_inValidThemeDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = undefined;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function applyTheme_inValidThemeDataNaN
     * @description Tests the themeBroker function applyTheme with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.capplyTheme_inValidThemeDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        let themePath = tst_thb.cpathToTestPluginDefaultTheme;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + sys.cthemeConfigPath] = themePath;
        D[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cdebugSettings] = true;
        let themeData = NaN;

        // Act
        let returnData = await themeBroker.applyTheme(themeData);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function removePluginThemeData
 * @description Tests the positive and negative test cases of the removePluginThemeData
 * @author Vlad Sorokin
 * @date 2024/07/26
 */
describe(tst_con.cremovePluginThemeData, () => {
    /**
     * @function removePluginThemeData_validPluginNameData
     * @description Tests the themeBroker function removePluginThemeData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_validPluginNameData, async () => {
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
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function removePluginThemeData_inValidPluginNameString
     * @description Tests the themeBroker function removePluginThemeData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_inValidPluginNameString, async () => {
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
        let pluginName = tst_man.ctestString1;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginThemeData_inValidPluginNameInteger
     * @description Tests the themeBroker function removePluginThemeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_inValidPluginNameInteger, async () => {
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
        let pluginName = 123;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginThemeData_inValidPluginNameBoolean
     * @description Tests the themeBroker function removePluginThemeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_inValidPluginNameBoolean, async () => {
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
        let pluginName = false;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginThemeData_inValidPluginNameUndefined
     * @description Tests the themeBroker function removePluginThemeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_inValidPluginNameUndefined, async () => {
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
        let pluginName = undefined;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginThemeData_inValidPluginNameNaN
     * @description Tests the themeBroker function removePluginThemeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/26
     */
    test(tst_con.cremovePluginThemeData_inValidPluginNameNaN, async () => {
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
        let pluginName = NaN;
        let pluginPath = tst_man.testPluginPath;
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await themeBroker.removePluginThemeData(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });
})
