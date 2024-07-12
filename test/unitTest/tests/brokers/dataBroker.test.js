'use strict'
/* eslint-disable no-undef */
/**
 * @file dataBroker.test.js
 * @module dataBroker.test
 * @description Unit tests for the dataBroker.js
 * @requires module:constantBroker
 * @requires module:dataBroker
 * @requires module:fileOperations
 * @requires module:main
 * @requires module:D
 * @requires module:constantBrokerTest
 * @requires module:mainTest
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/08
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import constantBroker from '../../../../src/brokers/constantBroker.js';
import dataBroker from '../../../../src/brokers/dataBroker.js'
import ruleBroker from '../../../../src/brokers/ruleBroker.js';
import characterArrayParsing from '../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import dataStringParsing from '../../../../src/businessRules/rules/stringParsing/dataStringParsing.js';
import fileStringParsing from '../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
import * as tst_man from '../../testData/mainTest.js';
import D from '../../../../src/structures/data.js';
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_dbt from '../../testData/brokers/dataBrokerTest.js'

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;

/**
 * @function addPluginConfigurationData
 * @description Tests the positive and negative test cases of the addPluginConfigurationData
 * @author Vlad Sorokin
 * @date 2024/07/08
 */
describe(tst_con.caddPluginConfigurationData, () => {
    /**
     * @function addPluginConfigurationData_validData
     * @description Tests the dataBroker function addPluginConfigurationData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_validData, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginNameString
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginNameString, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginConfigDataString
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginConfigDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginNameInteger
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginNameInteger, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginNameBoolean
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginNameBoolean, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginConfigDataInteger
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginConfigDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = 123;

        // Act
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginConfigDataBoolean
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginConfigDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = false;

        // Act
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginNameUndefined
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginNameUndefined, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginNameNaN
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginNameNaN, async () => {
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
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginConfigDataUndefined
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginConfigDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = undefined;

        // Act
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginConfigurationData_inValidPluginConfigDataNaN
     * @description Tests the dataBroker function addPluginConfigurationData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.caddPluginConfigurationData_inValidPluginConfigDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = [[tst_man.ctestPluginOne, true]];
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][wrd.cplugins] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginConfigData = NaN;

        // Act
        let returnData = await dataBroker.addPluginConfigurationData(pluginName, pluginConfigData);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function scanDataPath
 * @description Tests the positive and negative test cases of the scanDataPath
 * @author Vlad Sorokin
 * @date 2024/07/08
 */
describe(tst_con.cscanDataPath, () => {
    /**
     * @function scanDataPath_validDataPathData
     * @description Tests the dataBroker function scanDataPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_validDataPathData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = tst_dbt.cpathForUnitTestingData;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toEqual([tst_dbt.cexpectedPathForUnitTestData]);
    });

    /**
     * @function scanDataPath_inValidDataPathString
     * @description Tests the dataBroker function scanDataPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_inValidDataPathString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function scanDataPath_inValidDataPathInteger
     * @description Tests the dataBroker function scanDataPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_inValidDataPathInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = 123;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function scanDataPath_inValidDataPathBoolean
     * @description Tests the dataBroker function scanDataPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_inValidDataPathBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = false;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function scanDataPath_inValidDataPathUndefined
     * @description Tests the dataBroker function scanDataPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_inValidDataPathUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = undefined;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function scanDataPath_inValidDataPathNaN
     * @description Tests the dataBroker function scanDataPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/08
     */
    test(tst_con.cscanDataPath_inValidDataPathNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData)
        };
        let dataPath = NaN;

        // Act
        let returnData = await dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function findUniversalDebugConfigSetting
 * @description Tests the positive and negative test cases of the findUniversalDebugConfigSetting
 * @author Vlad Sorokin
 * @date 2024/07/09
 */
describe(tst_con.cfindUniversalDebugConfigSetting, () => {
    /**
     * @function findUniversalDebugConfigSetting_validData
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = tst_man.ctestString1;
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = 123;
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = false;
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = 123;

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = false;

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = undefined;
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = NaN;
        let frameworkConfigFilesToLoad = [tst_dbt.cpathToUnitTestFrameworkDebugSettings];

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = undefined;

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN
     * @description Tests the dataBroker function findUniversalDebugConfigSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/09
     */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData)
        };
        let appConfigFilesToLoad = [tst_dbt.cpathToUnitTestApplicationDebugSettings];
        let frameworkConfigFilesToLoad = NaN;

        // Act
        let returnData = await dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function loadAllCsvData
 * @description Tests the positive and negative test cases of the loadAllCsvData
 * @author Vlad Sorokin
 * @date 2024/07/10
 */
describe(tst_con.cloadAllCsvData, () => {
    /**
     * @function loadAllCsvData_validData
     * @description Tests the dataBroker function loadAllCsvData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual(tst_dbt.cexpectedDataFromBasicCsv);
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidFilesToLoadString
     * @description Tests the dataBroker function loadAllCsvData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidFilesToLoadString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = tst_man.ctestString1;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidContextNameString
     * @description Tests the dataBroker function loadAllCsvData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidContextNameString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllCsvData_inValidFilesToLoadInteger
     * @description Tests the dataBroker function loadAllCsvData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidFilesToLoadInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = 123;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidFilesToLoadBoolean
     * @description Tests the dataBroker function loadAllCsvData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidFilesToLoadBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = false;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidContextNameInteger
     * @description Tests the dataBroker function loadAllCsvData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidContextNameInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = 123
        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidContextNameBoolean
     * @description Tests the dataBroker function loadAllCsvData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidContextNameBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = false
        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidFilesToLoadUndefined
     * @description Tests the dataBroker function loadAllCsvData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidFilesToLoadUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = undefined;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidFilesToLoadNaN
     * @description Tests the dataBroker function loadAllCsvData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidFilesToLoadNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = NaN;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidContextNameUndefined
     * @description Tests the dataBroker function loadAllCsvData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidContextNameUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = undefined
        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);
        
        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function loadAllCsvData_inValidContextNameNaN
     * @description Tests the dataBroker function loadAllCsvData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllCsvData_inValidContextNameNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToBasicCsvFile];
        let contextName = NaN
        // Act
        let returnData = await dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });
})

/**
 * @function loadAllXmlData
 * @description Tests the positive and negative test cases of the loadAllXmlData
 * @author Vlad Sorokin
 * @date 2024/07/10
 */
describe(tst_con.cloadAllXmlData, () => {
    /**
     * @function loadAllXmlData_validData
     * @description Tests the dataBroker function loadAllXmlData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = sys.cCommandWorkflows;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual(tst_dbt.cexpectedDataFromSystemXmlFile);
    });

    /**
     * @function loadAllXmlData_inValidFilesToLoadString
     * @description Tests the dataBroker function loadAllXmlData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidFilesToLoadString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = tst_man.ctestString1;
        let contextName = sys.cCommandWorkflows;        

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidContextNameString
     * @description Tests the dataBroker function loadAllXmlData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidContextNameString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidFilesToLoadInteger
     * @description Tests the dataBroker function loadAllXmlData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidFilesToLoadInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = 123;
        let contextName = sys.cCommandWorkflows;        

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidFilesToLoadBoolean
     * @description Tests the dataBroker function loadAllXmlData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidFilesToLoadBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = false;
        let contextName = sys.cCommandWorkflows;        

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidContextNameInteger
     * @description Tests the dataBroker function loadAllXmlData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidContextNameInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = 123;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidContextNameBoolean
     * @description Tests the dataBroker function loadAllXmlData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidContextNameBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = false;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidFilesToLoadUndefined
     * @description Tests the dataBroker function loadAllXmlData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidFilesToLoadUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = undefined;
        let contextName = sys.cCommandWorkflows;        

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidFilesToLoadNaN
     * @description Tests the dataBroker function loadAllXmlData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidFilesToLoadNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = NaN;
        let contextName = sys.cCommandWorkflows;        

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidContextNameUndefined
     * @description Tests the dataBroker function loadAllXmlData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidContextNameUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = undefined;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllXmlData_inValidContextNameNaN
     * @description Tests the dataBroker function loadAllXmlData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/10
     */
    test(tst_con.cloadAllXmlData_inValidContextNameNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData)
        }
        let filesToLoad = [tst_dbt.cpathToSystemXmlFile];
        let contextName = NaN;

        // Act
        let returnData = await dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function loadAllJsonData
 * @description Tests the positive and negative test cases of the loadAllJsonData
 * @author Vlad Sorokin
 * @date 2024/07/11
 */
describe(tst_con.cloadAllJsonData, () => {
    /**
     * @function loadAllJsonData_validData
     * @description Tests the dataBroker function loadAllJsonData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_validData, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual(tst_man.expectedDataFromJsonTestFile);
    });

    /**
     * @function loadAllJsonData_inValidFilesToLoadString
     * @description Tests the dataBroker function loadAllJsonData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidFilesToLoadString, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = tst_man.ctestString1;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidContextNameString
     * @description Tests the dataBroker function loadAllJsonData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidContextNameString, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidFilesToLoadInteger
     * @description Tests the dataBroker function loadAllJsonData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidFilesToLoadInteger, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = 123;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidFilesToLoadBoolean
     * @description Tests the dataBroker function loadAllJsonData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidFilesToLoadBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = false;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidContextNameInteger
     * @description Tests the dataBroker function loadAllJsonData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidContextNameInteger, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = 123;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidContextNameBoolean
     * @description Tests the dataBroker function loadAllJsonData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidContextNameBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = false;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidFilesToLoadUndefined
     * @description Tests the dataBroker function loadAllJsonData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidFilesToLoadUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = undefined;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidFilesToLoadNaN
     * @description Tests the dataBroker function loadAllJsonData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidFilesToLoadNaN, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = NaN;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidContextNameUndefined
     * @description Tests the dataBroker function loadAllJsonData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidContextNameUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = undefined;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function loadAllJsonData_inValidContextNameNaN
     * @description Tests the dataBroker function loadAllJsonData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cloadAllJsonData_inValidContextNameNaN, async () => {
        // Arrange
        D[wrd.cconfiguration][wrd.csystem] = {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true};
        D[sys.cbusinessRules] = {
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
        }
        let filesToLoad = [tst_dbt.cpathToJsonTestFile];
        let contextName = NaN;

        // Act
        let returnData = await dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function processCsvData
 * @description Tests the positive and negative test cases of the processCsvData
 * @author Vlad Sorokin
 * @date 2024/07/11
 */
describe(tst_con.cprocessCsvData, () => {
    /**
     * @function processCsvData_validData
     * @description Tests the dataBroker function processCsvData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toEqual(tst_dbt.cexpectedDataFromBasicCsv);
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidDataString
     * @description Tests the dataBroker function processCsvData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidDataString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = tst_man.ctestString1;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidContextNameString
     * @description Tests the dataBroker function processCsvData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidContextNameString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidDataInteger
     * @description Tests the dataBroker function processCsvData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidDataInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = 123;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidDataBoolean
     * @description Tests the dataBroker function processCsvData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidDataBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = false;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidContextNameInteger
     * @description Tests the dataBroker function processCsvData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidContextNameInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = 123;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidContextNameBoolean
     * @description Tests the dataBroker function processCsvData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidContextNameBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = false;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidDataUndefined
     * @description Tests the dataBroker function processCsvData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidDataUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = undefined;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidDataNaN
     * @description Tests the dataBroker function processCsvData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidDataNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = NaN;
        let contextName = tst_dbt.cunitTestData;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidContextNameUndefined
     * @description Tests the dataBroker function processCsvData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidContextNameUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = undefined;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });

    /**
     * @function processCsvData_inValidContextNameNaN
     * @description Tests the dataBroker function processCsvData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cprocessCsvData_inValidContextNameNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cgetCsvData]: (inputData, inputMetaData) => fileOperations.getCsvData(inputData, inputMetaData)
        }
        let data = await ruleBroker.processRules([tst_dbt.cpathToBasicCsvFile, ''], [biz.cgetCsvData]);
        let contextName = NaN;

        // Act
        let returnData = await dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeFalsy();
        delete D[tst_dbt.cunitTestData]; // clean up on isle 4
    });
})


/**
 * @function preprocessJsonFile
 * @description Tests the positive and negative test cases of the preprocessJsonFile
 * @author Vlad Sorokin
 * @date 2024/07/11
 */
describe(tst_con.cpreprocessJsonFile, () => {
    /**
     * @function preprocessJsonFile_validFileToLoadData
     * @description Tests the dataBroker function preprocessJsonFile with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_validFileToLoadData, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = tst_dbt.cpathToJsonTestFile;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toEqual(tst_dbt.cexpectedDataFromJsonTestFile);
    });

    /**
     * @function preprocessJsonFile_inValidFileToLoadString
     * @description Tests the dataBroker function preprocessJsonFile with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_inValidFileToLoadString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = tst_man.ctestString1;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function preprocessJsonFile_inValidFileToLoadInteger
     * @description Tests the dataBroker function preprocessJsonFile with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_inValidFileToLoadInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = 123;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function preprocessJsonFile_inValidFileToLoadBoolean
     * @description Tests the dataBroker function preprocessJsonFile with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_inValidFileToLoadBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = false;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function preprocessJsonFile_inValidFileToLoadUndefined
     * @description Tests the dataBroker function preprocessJsonFile with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_inValidFileToLoadUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = undefined;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function preprocessJsonFile_inValidFileToLoadNaN
     * @description Tests the dataBroker function preprocessJsonFile with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/11
     */
    test(tst_con.cpreprocessJsonFile_inValidFileToLoadNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
        }
        let fileToLoad = NaN;

        // Act
        let returnData = await dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeFalsy();
    });
})




