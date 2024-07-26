'use strict'
/* eslint-disable no-undef */
/**
 * @file dataBroker.test.js
 * @module dataBroker.test
 * @description Unit tests for the dataBroker.js
 * @requires module:ruleBroker
 * @requires module:fileOperations
 * @requires module:main
 * @requires module:D
 * @requires module:test.constants
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import ruleBroker from '../../../../src/brokers/ruleBroker.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import main from '../../../../src/main.js';
import D from '../../../../src/structures/data.js';
import pluginDataFile from '../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_man from '../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, sys, wrd, num } = hayConst;

// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};

/**
 * @function bootStrapBusinessRules
 * @description Tests the positive and negative test cases of the bootStrapBusinessRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cbootStrapBusinessRules, () => {
    /**
     * @function bootStrapBusinessRules_validData
     * @description Tests the ruleBroker function bootStrapBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cbootStrapBusinessRules_validData, async () => {
        // Act
        await ruleBroker.bootStrapBusinessRules();

        // Assert
        expect(D[sys.cbusinessRules]).toBeDefined();
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cecho);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseColorRangeInputs);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.creplaceCharacterWithCharacter);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.csolveLehmerCode);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetLengthOfLongestStringInArray);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.carraysAreEqual);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cdoesArrayContainFilename);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cconvertCamelCaseStringToArray);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.csingleQuoteSwapAfterEquals);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.ccleanCommandInput);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cvalidateConstantsDataValidation);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetFileNameFromPath);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cisStringCamelCase);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetXmlData);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseBusinessRuleArgument);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.chex2rgbConversion);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cprompt);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cdoAllRulesExist);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgenerateRandomMixedCaseTextByLength);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseSystemRootPath);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetNowMoment);
    });
})

/**
 * @function resetBusinessRules
 * @description Tests the positive and negative test cases of the resetBusinessRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cresetBusinessRules, () => {
    /**
     * @function resetBusinessRules_validData
     * @description Tests the ruleBroker function resetBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cresetBusinessRules_validData, async () => {
        // Act
        await ruleBroker.resetBusinessRules();

        // Assert
        expect(D[sys.cbusinessRules]).toBeDefined();
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cecho);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseColorRangeInputs);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.creplaceCharacterWithCharacter);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.csolveLehmerCode);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetLengthOfLongestStringInArray);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.carraysAreEqual);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cdoesArrayContainFilename);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cconvertCamelCaseStringToArray);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.csingleQuoteSwapAfterEquals);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.ccleanCommandInput);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cvalidateConstantsDataValidation);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetFileNameFromPath);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cisStringCamelCase);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetXmlData);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseBusinessRuleArgument);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.chex2rgbConversion);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cprompt);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cdoAllRulesExist);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgenerateRandomMixedCaseTextByLength);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cparseSystemRootPath);
        expect(D[sys.cbusinessRules]).toHaveProperty(biz.cgetNowMoment);
    });
})

/**
 * @function addClientRules
 * @description Tests the positive and negative test cases of the addClientRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.caddClientRules, () => {
    /**
     * @function addClientRules_validClientRulesData
     * @description Tests the ruleBroker function addClientRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_validClientRulesData, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = [{
            [wrd.ctest + wrd.cPlugin + num.cOne + wrd.cRule + num.c01]: (inputData, inputMetaData) => main.testPluginOneRule01(inputData, inputMetaData),
            }
        ];

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function addClientRules_inValidClientRulesString
     * @description Tests the ruleBroker function addClientRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_inValidClientRulesString, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = tst_man.ctestString1;

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addClientRules_inValidClientRulesInteger
     * @description Tests the ruleBroker function addClientRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_inValidClientRulesInteger, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = 123;

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addClientRules_inValidClientRulesBoolean
     * @description Tests the ruleBroker function addClientRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_inValidClientRulesBoolean, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = false;

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addClientRules_inValidClientRulesUndefined
     * @description Tests the ruleBroker function addClientRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_inValidClientRulesUndefined, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = undefined;

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addClientRules_inValidClientRulesNaN
     * @description Tests the ruleBroker function addClientRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddClientRules_inValidClientRulesNaN, async () => {
        // Arrange
        delete D[sys.cbusinessRules];
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),
        };
        let clientRules = NaN;

        // Act
        let returnData = await ruleBroker.addClientRules(clientRules);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function addPluginRules
 * @description Tests the positive and negative test cases of the addPluginRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.caddPluginRules, () => {
    /**
     * @function addPluginRules_validData
     * @description Tests the ruleBroker function addPluginRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_validData, async () => {
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
        let pluginRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function addPluginRules_inValidPluginRulesString
     * @description Tests the ruleBroker function addPluginRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginRulesString, async () => {
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
        let pluginRules = tst_man.ctestString1;

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginNameInteger
     * @description Tests the ruleBroker function addPluginRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginNameInteger, async () => {
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
        let pluginRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginNameBoolean
     * @description Tests the ruleBroker function addPluginRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginNameBoolean, async () => {
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
        let pluginRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginRulesInteger
     * @description Tests the ruleBroker function addPluginRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginRulesInteger, async () => {
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
        let pluginRules = 123;

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginRulesBoolean
     * @description Tests the ruleBroker function addPluginRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginRulesBoolean, async () => {
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
        let pluginRules = false;

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginNameUndefined
     * @description Tests the ruleBroker function addPluginRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginNameUndefined, async () => {
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
        let pluginRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginNameNaN
     * @description Tests the ruleBroker function addPluginRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginNameNaN, async () => {
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
        let pluginRules = pluginData[wrd.cdata][sys.cpluginBusinessRules];

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginRulesUndefined
     * @description Tests the ruleBroker function addPluginRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginRulesUndefined, async () => {
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
        let pluginRules = undefined;

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginRules_inValidPluginRulesNaN
     * @description Tests the ruleBroker function addPluginRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.caddPluginRules_inValidPluginRulesNaN, async () => {
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
        let pluginRules = NaN;

        // Act
        let returnData = await ruleBroker.addPluginRules(pluginName, pluginRules);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function processRules
 * @description Tests the positive and negative test cases of the processRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cprocessRules, () => {
    /**
     * @function processRules_validData
     * @description Tests the ruleBroker function processRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual();
    });

    /**
     * @function processRules_inValidInputsString
     * @description Tests the ruleBroker function processRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidInputsString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = tst_man.ctestString1;
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidRulesToExecuteString
     * @description Tests the ruleBroker function processRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidRulesToExecuteString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = tst_man.ctestString1;

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidInputsInteger
     * @description Tests the ruleBroker function processRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidInputsInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = 123;
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidInputsBoolean
     * @description Tests the ruleBroker function processRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidInputsBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = false;
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidRulesToExecuteInteger
     * @description Tests the ruleBroker function processRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidRulesToExecuteInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = 123;

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidRulesToExecuteBoolean
     * @description Tests the ruleBroker function processRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidRulesToExecuteBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = false;

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidInputsUndefined
     * @description Tests the ruleBroker function processRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidInputsUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = undefined;
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidInputsNaN
     * @description Tests the ruleBroker function processRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidInputsNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = NaN;
        let rulesToExecute = [biz.cecho];

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidRulesToExecuteUndefined
     * @description Tests the ruleBroker function processRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidRulesToExecuteUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = undefined;

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function processRules_inValidRulesToExecuteNaN
     * @description Tests the ruleBroker function processRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cprocessRules_inValidRulesToExecuteNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData))
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cconfiguration] = {};
        D[wrd.cCommands] = {};
        let inputs = [wrd.cprocess + wrd.cRules + bas.cSpace + wrd.cWorks + bas.cExclamation, ''];
        let rulesToExecute = NaN;

        // Act
        let returnData = await ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function removePluginBusinessRules
 * @description Tests the positive and negative test cases of the removePluginBusinessRules
 * @author Vlad Sorokin
 * @date 2024/07/23
 */
describe(tst_con.cremovePluginBusinessRules, () => {
    /**
     * @function removePluginBusinessRules_validPluginNameData
     * @description Tests the ruleBroker function removePluginBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_validPluginNameData, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function removePluginBusinessRules_inValidPluginNameString
     * @description Tests the ruleBroker function removePluginBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_inValidPluginNameString, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginBusinessRules_inValidPluginNameInteger
     * @description Tests the ruleBroker function removePluginBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_inValidPluginNameInteger, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginBusinessRules_inValidPluginNameBoolean
     * @description Tests the ruleBroker function removePluginBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_inValidPluginNameBoolean, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginBusinessRules_inValidPluginNameUndefined
     * @description Tests the ruleBroker function removePluginBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_inValidPluginNameUndefined, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginBusinessRules_inValidPluginNameNaN
     * @description Tests the ruleBroker function removePluginBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/23
     */
    test(tst_con.cremovePluginBusinessRules_inValidPluginNameNaN, async () => {
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
        let returnData = await ruleBroker.removePluginBusinessRules(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });
})
