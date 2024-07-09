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
import characterStringParsing from '../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
import * as tst_man from '../../testData/mainTest.js';
import D from '../../../../src/structures/data.js';
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_dbt from '../../testData/brokers/dataBrokerTest.js'

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { phonicConstantsValidation } from '@haystacks/constants/src/constantsValidation/phonic.constants.validation.js';

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
