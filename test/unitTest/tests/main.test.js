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
import * as tst_man from '../testData/mainTest.js';
import * as tst_con from './constants/test.constants.js';
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
    test(tst_con.cinitFramework_validData, () => {
        // Arrange
        let clientConfiguration = {
            "FrameworkName": "haystacks-async",
            "clientRootPath": "C:/haystacks-async",
            "appConfigResourcesPath": "C:/haystacks-async/test/unitTest/testData/resources/",
            "appConfigReferencePath": "C:/haystacks-async/test/unitTest/testData/resources/clientTestData/",
            "clientMetaDataPath": "/test/unitTest/testData/resources/metaData.json",
            "clientCommandAliasesPath": "C:/haystacks-async/test/testHarness/src/resources/commands/",
            "clientConstantsPath": "C:/haystacks-async/test/testHarness/src/constants/",
            "clientRegisteredPlugins": "C:/haystacks-async/test/testHarness/src/resources/plugins/plugins.json",
            "clientWorkflowsPath": "C:/haystacks-async/test/testHarness/src/resources/workflows/",
            "clientThemesPath": "C:/haystacks-async/test/testHarness/src/resources/themes/",
            "clientBusinessRules": {},
            "clientCommands": {}
        };
        let mutatedClientConfiguration = {
            "FrameworkName": "haystacks",
            "clientRootPath": "C:/haystacks",
            "appConfigResourcesPath": "C:/haystacks",
            "appConfigReferencePath": "C:/haystacks",
            "clientMetaDataPath": "metaData.json",
            "clientCommandAliasesPath": "C:/haystackscommands/",
            "clientConstantsPath": "C:/haystacks/src/constants/",
            "clientRegisteredPlugins": "C:/haystacksplugins/plugins.json",
            "clientWorkflowsPath": "C:/haystacksworkflows/",
            "clientThemesPath": "C:/haystacksthemes/",
            "clientBusinessRules": {},
            "clientCommands": {},
            "frameworkRootPath": "C:/haystacks/",
            "pluginRootPath": ".",
            "pluginReleaseResourcesPath": "bin/resources/",
            "frameworkConstantsPath": "C:/haystacks/node_modules/@haystacks/constants/src/constants/",
            "appConfigPath": "C:/haystacks/test/testHarness/src/resources/configuration/",
            "frameworkResourcesPath": "C:/haystacks/src/resources/",
            "pluginResourcesPath": "C:/haystacks/test/testHarness/resources/",
            "frameworkFullMetaDataPath": "C:/haystacks/src/resources/metaData.json",
            "pluginFullMetaDataPath": "C:/haystacks/test/testHarness/resources/metaData.json",
            "frameworkConfigPath": "C:/haystacks///src//resources//configuration//",
            "frameworkThemesPath": "C:/haystacks///src//resources//themes//",
            "frameworkCommandAliasesPath": "C:/haystacks///src//resources//commands//",
            "pluginCommandAliasesPath": "C:/haystacks/test/testHarnessresources//commands//",
            "frameworkWorkflowsPath": "C:/haystacks///src//resources//workflows//",
            "pluginWorkflowsPath": "C:/haystacks/test/testHarnessresources//workflows//"
        };

        // Act
        let returnData = main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBe(mutatedClientConfiguration)
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