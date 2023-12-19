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

const { wrd, num } = hayConst;

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
     */
    test(tst_con.cinitFramework_validData, async () => {
        // Arrange
        let clientConfiguration = {
            [tst_sys.cFrameworkName]: "haystacks-async",
            [tst_sys.cclientRootPath]: "C:/haystacks-async",
            [tst_sys.cappConfigResourcesPath]: "C:/haystacks-async/test/unitTest/testData/resources/",
            [tst_sys.cappConfigReferencePath]: "C:/haystacks-async/test/unitTest/testData/resources/clientTestData/",
            [tst_sys.cclientMetaDataPath]: "/test/unitTest/testData/resources/metaData.json",
            [tst_sys.cclientCommandAliasesPath]: "C:/haystacks-async/test/testHarness/src/resources/commands/",
            [tst_sys.cclientConstantsPath]: "C:/haystacks-async/test/testHarness/src/constants/",
            [tst_sys.cclientRegisteredPlugins]: "C:/haystacks-async/test/testHarness/src/resources/plugins/plugins.json",
            [tst_sys.cclientWorkflowsPath]: "C:/haystacks-async/test/testHarness/src/resources/workflows/",
            [tst_sys.cclientThemesPath]: "C:/haystacks-async/test/testHarness/src/resources/themes/",
            [tst_sys.cclientBusinessRules]: {},
            [tst_sys.cclientCommands]: {}
        };
        let mutatedClientConfiguration = {
            "FrameworkName": "haystacks-async",
            "appConfigPath": "C:/haystacks-async/test/unitTest/testData/resources/clientTestData/",
            "appConfigReferencePath": "C:/haystacks-async/test/unitTest/testData/resources/clientTestData/",
            "appConfigResourcesPath": "C:/haystacks-async/test/unitTest/testData/resources/",
            "clientMetaDataPath": "metaData.json",
            "clientBusinessRules": {},
            "clientCommandAliasesPath": "C:/haystacks-async/test/testHarness/src/resources/commands/",
            "clientCommands": {},
            "clientConstantsPath": "C:/haystacks-async/test/testHarness/src/constants/",
            "clientMetaDataPath": "C:\\haystacks-async\\test\\unitTest\\testData\\resources\\metaData.json",
            "clientRegisteredPlugins": "C:/haystacks-async/test/testHarness/src/resources/plugins/plugins.json",
            "clientRootPath": "C:/haystacks-async",
            "clientThemesPath": "C:/haystacks-async/test/testHarness/src/resources/themes/",
            "clientWorkflowsPath": "C:/haystacks-async/test/testHarness/src/resources/workflows/",
            "frameworkCommandAliasesPath": "C:\\haystacks-async\\//src//resources//commands//",
            "frameworkConfigPath": "C:\\haystacks-async\\//src//resources//configuration//",
            "frameworkConstantsPath": "C:\\haystacks-async\\node_modules\\@haystacks\\constants\\src/constants/",
            "frameworkFullMetaDataPath": "C:\\haystacks-async\\src\\resources\\metaData.json",
            "frameworkResourcesPath": "C:\\haystacks-async\\src\\resources\\",
            "frameworkRootPath": "C:\\haystacks-async\\",
            "frameworkThemesPath": "C:\\haystacks-async\\//src//resources//themes//",
            "frameworkWorkflowsPath": "C:\\haystacks-async\\//src//resources//workflows//",
            "pluginCommandAliasesPath": "C:/haystacks-asyncresources//commands//",
            "pluginFullMetaDataPath": "C:\\haystacks-async\\resources\\metaData.json",
            "pluginReleaseResourcesPath": "bin\\resources\\",
            "pluginResourcesPath": "C:\\haystacks-async\\resources\\",
            "pluginRootPath": ".",
            "pluginWorkflowsPath": "C:/haystacks-asyncresources//workflows//",
        };

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(mutatedClientConfiguration)
    });

    // /**
    //  * @function initFramework_inValidClientConfigurationString
    //  * @description Tests the main function initFramework with a invalid clientConfiguration string.
    //  * @author Vlad Sorokin
    //  * @date 2023/11/24
    //  */
    // test(tst_con.initFramework_inValidClientConfigurationString, () => {
    //     // Arrange
    //     let clientConfiguration = tst_man.ctestString1;

    //     // Act
    //     let returnData = stack.initFramework(clientConfiguration);

    //     // Assert
    //     expect(returnData).toBeTruthy();
    // });



})