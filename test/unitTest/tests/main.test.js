'use strict'
/* eslint-disable no-undef */
/**
 * @file main.test.js
 * @module main.test
 * @description Unit tests for the main.js
 * @requires module:ruleBroker
 * @requires module:dataArrayParsing
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:dataStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:timeComputation
 * @requires module:plugins
 * @requires module:configurator
 * @requires module:data
 * @requires module:main
 * @requires module:testAliases
 * @requires module:testConstantsValidationMetadata
 * @requires module:mainTest
 * @requires module:testData
 * @requires module:test.configuration.constants
 * @requires module:test.constants
 * @requires module:test.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires import { writeFile } from 'fs/promises';
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import ruleBroker from '../../../src/brokers/ruleBroker.js';
import dataArrayParsing from '../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js';
import characterArrayParsing from '../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../src/businessRules/rules/stringParsing/characterStringParsing.js';
import dataStringParsing from '../../../src/businessRules/rules/stringParsing/dataStringParsing.js';
import fileStringParsing from '../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../src/businessRules/rules/fileOperations.js';
import stringParsingUtilities from '../../../src/businessRules/rules/stringParsingUtilities.js';
import timeComputation from '../../../src/businessRules/rules/timeComputation.js';
import pluginCommands from '../../../src/commandsBlob/commands/plugins.js';
import configurator from '../../../src/executrix/configurator.js';
import D from '../../../src/structures/data.js';
import main from '../../../src/main.js'
// import testAliases from '../testData/resources/commands/testAliases.xml';
import * as tst_pbt from '../testData/brokers/pluginBrokerTest.js'
import * as tst_man from '../testData/mainTest.js';
import testData from '../testData/testData.json'
import * as tst_con from './resources/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { writeFile } from 'fs/promises';
import path from 'path';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.main.test.
const namespacePrefix = wrd.cframework + bas.cDot + baseFileName + bas.cDot;
let rootPath = '';

/**
 * @function initFramework
 * @description Tests the positive and negative test cases of the initFramework
 * @author Vlad Sorokin
 * @date 2023/11/24
 */
describe(tst_con.cinitFramework, () => {
    /**
     * @function initFramework_validClientConfigurationData
     * @description Tests the main function initFramework with a valid input.
     * @author Vlad Sorokin
     * @date 2023/11/24
     * @NOTE If you are using frameworkConstantsPath string constant and your @haystacks-constants is not linked. 
     * Go to unitTest.testData.mainTest.js. Comment out first frameworkConstantsPath string constant and uncomment the second one. 
     * That is supposed to be done in unitTest.testData.mainTest.js, as well as in test.configuration.constants.js and test.configuration.constants.validation.js.
     * Given the above statement its recommended to run unit tests with the constats unlinked, 
     * because the local paths on your system might be different.
     */
    test(tst_con.cinitFramework_validClientConfigurationData, async () => {
        // Arrange
        let clientConfiguration = tst_man.initFrameworkObjectInput;
        let mutatedClientConfiguration = tst_man.initFrameworkObjectExpected;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(mutatedClientConfiguration);
    });

    /**
     * @function initFramework_inValidClientConfigurationString
     * @description Tests the main function initFramework with a invalid clientConfiguration string.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.cinitFramework_inValidClientConfigurationString, async () => {
        // Arrange
        let clientConfiguration = tst_man.ctestString1;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function initFramework_inValidClientConfigurationInteger
     * @description Tests the main function initFramework with a invalid clientConfiguration integer.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.cinitFramework_inValidClientConfigurationInteger, async () => {
        // Arrange
        let clientConfiguration = 123;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function initFramework_inValidClientConfigurationBoolean
     * @description Tests the main function initFramework with a invalid clientConfiguration boolean.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.cinitFramework_inValidClientConfigurationBoolean, async () => {
        // Arrange
        let clientConfiguration = false;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function initFramework_inValidClientConfigurationUndefined
     * @description Tests the main function initFramework with a invalid clientConfiguration undefined.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.cinitFramework_inValidClientConfigurationUndefined, async () => {
        // Arrange
        let clientConfiguration = undefined;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function initFramework_inValidClientConfigurationNaN
     * @description Tests the main function initFramework with a invalid clientConfiguration NaN.
     * @author Vlad Sorokin
     * @date 2023/11/24
     */
    test(tst_con.cinitFramework_inValidClientConfigurationNaN, async () => {
        // Arrange
        let clientConfiguration = NaN;

        // Act
        let returnData = await main.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function accouterFramework
 * @description Tests the positive and negative test cases of the accouterFramework
 * @author Vlad Sorokin
 * @date 2024/01/01
 */
describe(tst_con.caccouterFramework, () => {
    /**
     * @function accouterFramework_validData
     * @description Tests the main function accouterFramework with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_validData, async () => {
        // Arrange
        let data = testData;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function accouterFramework_inValidDataString
     * @description Tests the main function accouterFramework with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_inValidDataString, async () => {
        // Arrange
        let data = tst_man.ctestString1;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function accouterFramework_inValidDataInteger
     * @description Tests the main function accouterFramework with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_inValidDataInteger, async () => {
        // Arrange
        let data = 123;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function accouterFramework_inValidDataBoolean
     * @description Tests the main function accouterFramework with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_inValidDataBoolean, async () => {
        // Arrange
        let data = false;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function accouterFramework_inValidDataUndefined
     * @description Tests the main function accouterFramework with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_inValidDataUndefined, async () => {
        // Arrange
        let data = undefined;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function accouterFramework_inValidDataNaN
     * @description Tests the main function accouterFramework with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.caccouterFramework_inValidDataNaN, async () => {
        // Arrange
        let data = NaN;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getFrameworkData
 * @description Tests the positive and negative test cases of the getFrameworkData
 * @author Vlad Sorokin
 * @date 2024/01/01
 * @NOTE Consider revisiting the D.getData, function called by main.getFrameworkData.
 * @NOTE Invalid tests are not passing.
 * This is due to unfinished work in data.js. When unit testing gets to data.js this function is supposed to be returned to and finished.
 * As we need an interface to set the data instead of brute force assigning the data, in this case data will be able to be type checked.
 */
describe(tst_con.cgetFrameworkData, () => {
    /**
     * @function getFrameworkData_validData
     * @description Tests the main function getFrameworkData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/01
     */
    test(tst_con.cgetFrameworkData_validData, async () => {
        // Arrange
        D.data = testData;
        let data = testData;

        // Act
        let returnData = await main.getFrameworkData();

        // Assert
        expect(returnData).toEqual(data);
    });

    // /**
    //  * @function getFrameworkData_inValidString
    //  * @description Tests the main function getFrameworkData with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/01
    //  */
    // test(tst_con.cgetFrameworkData_inValidString, async () => {
    //     // Arrange
    //     D.data = tst_man.ctestString1;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function getFrameworkData_inValidInteger
    //  * @description Tests the main function getFrameworkData with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidInteger, async () => {
    //     // Arrange
    //     D.data = 123;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function getFrameworkData_inValidBoolean
    //  * @description Tests the main function getFrameworkData with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidBoolean, async () => {
    //     // Arrange
    //     D.data = true;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function getFrameworkData_inValidUndefined
    //  * @description Tests the main function getFrameworkData with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidUndefined, async () => {
    //     // Arrange
    //     D.data = undefined;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function getFrameworkData_inValidNaN
    //  * @description Tests the main function getFrameworkData with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidNaN, async () => {
    //     // Arrange
    //     D.data = NaN;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });
})

/**
 * @function mergeClientBusinessRules
 * @description Tests the positive and negative test cases of the mergeClientBusinessRules
 * @author Vlad Sorokin
 * @date 2024/01/02
 */
describe(tst_con.cmergeClientBusinessRules, () => {
    /**
     * @function mergeClientBusinessRules_validClientBusinessRulesData
     * @description Tests the main function mergeClientBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_validClientBusinessRulesData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesLibrary);

        // Assert
        expect(returnData).toEqual(true);
        expect(D[sys.cbusinessRules]).toEqual(testRulesLibrary);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesString
     * @description Tests the main function mergeClientBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesInteger
     * @description Tests the main function mergeClientBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = 123;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesBoolean
     * @description Tests the main function mergeClientBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = false;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesUndefined
     * @description Tests the main function mergeClientBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = undefined;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesNaN
     * @description Tests the main function mergeClientBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = NaN;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function mergeClientCommands
 * @description Tests the positive and negative test cases of the mergeClientCommands
 * @author Vlad Sorokin
 * @date 2024/01/02
 */
describe(tst_con.cmergeClientCommands, () => {
    /**
     * @function mergeClientCommands_validClientCommandsData
     * @description Tests the main function mergeClientCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(true);
        expect(D[wrd.cCommands]).toEqual(testCommandsLibrary);
    });

    /**
     * @function mergeClientCommands_inValidClientCommandsString
     * @description Tests the main function mergeClientCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsString, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientCommands_inValidClientCommandsInteger
     * @description Tests the main function mergeClientCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsInteger, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = 123;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientCommands_inValidClientCommandsBoolean
     * @description Tests the main function mergeClientCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsBoolean, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = false;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientCommands_inValidClientCommandsUndefined
     * @description Tests the main function mergeClientCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsUndefined, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = undefined;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function mergeClientCommands_inValidClientCommandsNaN
     * @description Tests the main function mergeClientCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsNaN, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = NaN;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadCommandAliases
 * @description Tests the positive and negative test cases of the loadCommandAliases
 * @author Vlad Sorokin
 * @date 2024/01/02
 * @NOTE As of now this test needs jest xml file support, as it will not work unless there is a way for jest to read and use xml files. 
 * Tried to use "jest-environment-jsdom" to solve this issue but couldn't get it to work, though it does seem that solution is use of jsdom.
 */
// describe(tst_con.cloadCommandAliases, () => {
    // /**
    //  * @function loadCommandAliases_validCommandAliasesPathData
    //  * @description Tests the main function loadCommandAliases with a valid input.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_validData, async () => {
    //     // Arrange
    //     let commandAliasesPath = '../testData/resources/commands/testAliases.xml';
    //     let contextName = wrd.cunit + wrd.cTest;
    //     let returnData = true;
    //     let normalizedCommandAliasesPath = path.normalize(commandAliasesPath);

    //     // Act
    //     returnData = await main.loadCommandAliases(normalizedCommandAliasesPath, contextName);

    //     // Assert
    //     expect(returnData).toEqual(true);
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathString
    //  * @description Tests the main function loadCommandAliases with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathString, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameString
    //  * @description Tests the main function loadCommandAliases with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameString, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathInteger
    //  * @description Tests the main function loadCommandAliases with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathInteger, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathBoolean
    //  * @description Tests the main function loadCommandAliases with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathBoolean, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameInteger
    //  * @description Tests the main function loadCommandAliases with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameInteger, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameBoolean
    //  * @description Tests the main function loadCommandAliases with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameBoolean, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathUndefined
    //  * @description Tests the main function loadCommandAliases with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathUndefined, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathNaN
    //  * @description Tests the main function loadCommandAliases with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathNaN, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameUndefined
    //  * @description Tests the main function loadCommandAliases with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameUndefined, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameNaN
    //  * @description Tests the main function loadCommandAliases with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2024/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameNaN, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toEqual(false);
    // });
// })

// /**
//  * @function loadCommandWorkflows
//  * @description Tests the positive and negative test cases of the loadCommandWorkflows
//  * @author Vlad Sorokin
//  * @date 2024/01/02
//  */
// describe(tst_con.cloadCommandWorkflows, () => {
//     /**
//      * @function loadCommandWorkflows_validWorkflowPathData
//      * @description Tests the main function loadCommandWorkflows with a valid input.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_validData, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2024/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });
// })

/**
 * @function loadCommandWorkflows
 * @description Tests the positive and negative test cases of the loadCommandWorkflows
 * @author Vlad Sorokin
 * @date 2024/01/08
 * @NOTE As of now this test needs jest xml file support, as it will not work unless there is a way for jest to read and use xml files. 
 * Tried to use "jest-environment-jsdom" to solve this issue but couldn't get it to work, thought it does seem that solution is use of jsdom.
 * @NOTE When the fist problem will be solved boolean output needs to be added to the function for testing purposes.
 */
// describe(tst_con.cloadCommandWorkflows, () => {
//     /**
//      * @function loadCommandWorkflows_validWorkflowPathData
//      * @description Tests the main function loadCommandWorkflows with a valid input.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_validData, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2024/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toEqual(false);
//     });
// })

/**
 * @function listLoadedPlugins
 * @description Tests the positive and negative test cases of the listLoadedPlugins
 * @author Vlad Sorokin
 * @date 2024/01/08
 */
describe(tst_con.clistLoadedPlugins, () => {
    /**
     * @function listLoadedPlugins_validData
     * @description Tests the main function listLoadedPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_validData, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = tst_man.listLoadedPlugins;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(tst_man.expectedListLoadedPlugins);
    });

    /**
     * @function listLoadedPlugins_inValidString
     * @description Tests the main function listLoadedPlugins with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidString, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = tst_man.ctestString1;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listLoadedPlugins_inValidInteger
     * @description Tests the main function listLoadedPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidInteger, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = 123;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listLoadedPlugins_inValidBoolean
     * @description Tests the main function listLoadedPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidBoolean, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = true;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listLoadedPlugins_inValidUndefined
     * @description Tests the main function listLoadedPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidUndefined, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = undefined;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listLoadedPlugins_inValidNaN
     * @description Tests the main function listLoadedPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidNaN, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = NaN;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function listAllPluginsInRegistry
 * @description Tests the positive and negative test cases of the listAllPluginsInRegistry
 * @author Vlad Sorokin
 * @date 2024/01/10
 */
describe(tst_con.clistAllPluginsInRegistry, () => {
    /**
     * @function listAllPluginsInRegistry_validData
     * @description Tests the main function listAllPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_validData, async () => {
        // Arrange
        let pluginsRegistred = tst_man.listAllPluginsInRegistry;
        let pluginsExpected = tst_man.listAllPluginsInRegistryExpected;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(pluginsExpected);
    });

    /**
     * @function listAllPluginsInRegistry_inValidString
     * @description Tests the main function listAllPluginsInRegistry with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = tst_man.ctestString1;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listAllPluginsInRegistry_inValidInteger
     * @description Tests the main function listAllPluginsInRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = 123;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listAllPluginsInRegistry_inValidBoolean
     * @description Tests the main function listAllPluginsInRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = true;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listAllPluginsInRegistry_inValidUndefined
     * @description Tests the main function listAllPluginsInRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = undefined;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function listAllPluginsInRegistry_inValidNaN
     * @description Tests the main function listAllPluginsInRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = NaN;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function listAllPluginsInRegistryPath
 * @description Tests the positive test cases of the listAllPluginsInRegistryPath
 * @author Vlad Sorokin
 * @date 2024/01/11
 * @NOTE The remaining of invalid tests will be tested with the pluginBroker.js function: listPluginsInRegistryPath.
 */
describe(tst_con.clistAllPluginsInRegistryPath, () => {
    /**
     * @function listAllPluginsInRegistryPath_validData
     * @description Tests the main function listAllPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/11
     */
    test(tst_con.clistAllPluginsInRegistryPath_validData, async () => {
        // Arrange
        let pathToPluginsRegistred = tst_man.pluginsPathObject;
        let businessRuleToExecute = tst_man.listAllPluginsInRegistryBusinessRule;
        let expectedPluginsList = tst_man.listAllPluginsInRegistryExpected;
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = pathToPluginsRegistred;
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = businessRuleToExecute;

        // Act
        let returnData = await main.listAllPluginsInRegistryPath();

        // Assert
        expect(returnData).toEqual(expectedPluginsList);
    });
})

/**
 * @function numberOfPluginsInRegistry
 * @description Tests the positive test cases of the numberOfPluginsInRegistry
 * @author Vlad Sorokin
 * @date 2024/01/12
 */
describe(tst_con.cnumberOfPluginsInRegistry, () => {
    /**
     * @function numberOfPluginsInRegistry_validData
     * @description Tests the main function numberOfPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cnumberOfPluginsInRegistry_validData, async () => {
        // Arrange
        let pluginsRegistred = tst_man.listAllPluginsInRegistry;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.numberOfPluginsInRegistry();

        // Assert
        expect(returnData).toEqual(3);
    });
})

/**
 * @function numberOfPluginsInRegistryPath
 * @description Tests the positive test cases of the numberOfPluginsInRegistryPath
 * @author Vlad Sorokin
 * @date 2024/01/12
 */
describe(tst_con.cnumberOfPluginsInRegistryPath, () => {
    /**
     * @function numberOfPluginsInRegistryPath_validData
     * @description Tests the main function numberOfPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cnumberOfPluginsInRegistryPath_validData, async () => {
        // Arrange
        let pathToPluginsRegistred = tst_man.pluginsPathObject;
        let businessRuleToExecute = tst_man.listAllPluginsInRegistryBusinessRule;
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = pathToPluginsRegistred;
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = businessRuleToExecute;

        // Act
        let returnData = await main.numberOfPluginsInRegistryPath();

        // Assert
        expect(returnData).toEqual(3);
    });
})

/**
 * @function registerPluginByNameAndPath
 * @description Tests the positive and negative test cases of the registerPluginByNameAndPath
 * @author Vlad Sorokin
 * @date 2024/01/12
 */
describe(tst_con.cregisterPluginByNameAndPath, () => {
    /**
     * @function registerPluginByNameAndPath_validPluginNameData
     * @description Tests the main function registerPluginByNameAndPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_validData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathString
     * @description Tests the main function registerPluginByNameAndPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = tst_man.ctestString1;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameInteger
     * @description Tests the main function registerPluginByNameAndPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = 123;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameBoolean
     * @description Tests the main function registerPluginByNameAndPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = false;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathInteger
     * @description Tests the main function registerPluginByNameAndPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = 123;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathBoolean
     * @description Tests the main function registerPluginByNameAndPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = false;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameUndefined
     * @description Tests the main function registerPluginByNameAndPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = undefined;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameNaN
     * @description Tests the main function registerPluginByNameAndPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = NaN;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathUndefined
     * @description Tests the main function registerPluginByNameAndPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = undefined;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathNaN
     * @description Tests the main function registerPluginByNameAndPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = NaN;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function unregisterPluginByName
 * @description Tests the positive and negative test cases of the unregisterPluginByName
 * @author Vlad Sorokin
 * @date 2024/01/21
 */
describe(tst_con.cunregisterPluginByName, () => {
    /**
     * @function unregisterPluginByName_validPluginNameData
     * @description Tests the main function unregisterPluginByName with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_validPluginNameData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = tst_man.pluginNameToUse;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameString
     * @description Tests the main function unregisterPluginByName with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = tst_man.ctestString1;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameInteger
     * @description Tests the main function unregisterPluginByName with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = 123;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameBoolean
     * @description Tests the main function unregisterPluginByName with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = true;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameUndefined
     * @description Tests the main function unregisterPluginByName with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = undefined;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameNaN
     * @description Tests the main function unregisterPluginByName with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = NaN;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function unregisterPlugins
 * @description Tests the positive and negative test cases of the unregisterPlugins
 * @author Vlad Sorokin
 * @date 2024/01/22
 */
describe(tst_con.cunregisterPlugins, () => {
    /**
     * @function unregisterPlugins_validPluginsListArrayData
     * @description Tests the main function unregisterPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_validPluginsListArrayData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginListArray = tst_man.expectedListLoadedPlugins;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unregisterPlugins_inValidPluginsListArrayString
     * @description Tests the main function unregisterPlugins with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_inValidPluginsListArrayString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');;
        let pluginListArray = tst_man.ctestString1;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPlugins_inValidPluginsListArrayInteger
     * @description Tests the main function unregisterPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_inValidPluginsListArrayInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');;
        let pluginListArray = 123;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPlugins_inValidPluginsListArrayBoolean
     * @description Tests the main function unregisterPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_inValidPluginsListArrayBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');;
        let pluginListArray = false;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPlugins_inValidPluginsListArrayUndefined
     * @description Tests the main function unregisterPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_inValidPluginsListArrayUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');;
        let pluginListArray = undefined;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unregisterPlugins_inValidPluginsListArrayNaN
     * @description Tests the main function unregisterPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/01/22
     */
    test(tst_con.cunregisterPlugins_inValidPluginsListArrayNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');;
        let pluginListArray = NaN;

        // Act
        let returnData = await main.unregisterPlugins(pluginListArray);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function syncPluginRegistryWithPath
 * @description Tests the positive and negative test cases of the syncPluginRegistryWithPath
 * @author Vlad Sorokin
 * @date 2024/02/20
 */
describe(tst_con.csyncPluginRegistryWithPath, () => {
    /**
     * @function syncPluginRegistryWithPath_validData
     * @description Tests the main function syncPluginRegistryWithPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_validData, async () => {
        // Arrange
        let pluginsRegistred = tst_man.listAllPluginsInRegistry;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function syncPluginRegistryWithPath_inValidString
     * @description Tests the main function syncPluginRegistryWithPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_inValidString, async () => {
        // Arrange
        let pluginsRegistred = tst_man.ctestString1;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        
        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function syncPluginRegistryWithPath_inValidInteger
     * @description Tests the main function syncPluginRegistryWithPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_inValidInteger, async () => {
        // Arrange
        let pluginsRegistred = 123;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function syncPluginRegistryWithPath_inValidBoolean
     * @description Tests the main function syncPluginRegistryWithPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_inValidBoolean, async () => {
        // Arrange
        let pluginsRegistred = false;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        
        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function syncPluginRegistryWithPath_inValidUndefined
     * @description Tests the main function syncPluginRegistryWithPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_inValidUndefined, async () => {
        // Arrange
        let pluginsRegistred = undefined;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        
        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function syncPluginRegistryWithPath_inValidNaN
     * @description Tests the main function syncPluginRegistryWithPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/02/20
     */
    test(tst_con.csyncPluginRegistryWithPath_inValidNaN, async () => {
        // Arrange
        let pluginsRegistred = NaN;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        
        // Act
        let returnData = await main.syncPluginRegistryWithPath();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function clearAllPluginRegistry
 * @description Tests the positive and negative test cases of the clearAllPluginRegistry
 * @author Vlad Sorokin
 * @date 2024/02/26
 */
describe(tst_con.cclearAllPluginRegistry, () => {
    /**
     * @function clearAllPluginRegistry_validData
     * @description Tests the main function clearAllPluginRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_validData, async () => {
        // Arrange
        let pluginsRegistred = tst_man.listAllPluginsInRegistry;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function clearAllPluginRegistry_inValidString
     * @description Tests the main function clearAllPluginRegistry with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_inValidString, async () => {
        // Arrange
        let pluginsRegistred = tst_man.ctestString1;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function clearAllPluginRegistry_inValidInteger
     * @description Tests the main function clearAllPluginRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_inValidInteger, async () => {
        // Arrange
        let pluginsRegistred = 123;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function clearAllPluginRegistry_inValidBoolean
     * @description Tests the main function clearAllPluginRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_inValidBoolean, async () => {
        // Arrange
        let pluginsRegistred = true;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function clearAllPluginRegistry_inValidUndefined
     * @description Tests the main function clearAllPluginRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_inValidUndefined, async () => {
        // Arrange
        let pluginsRegistred = undefined;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function clearAllPluginRegistry_inValidNaN
     * @description Tests the main function clearAllPluginRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/02/26
     */
    test(tst_con.cclearAllPluginRegistry_inValidNaN, async () => {
        // Arrange
        let pluginsRegistred = NaN;
        D[cfg.cpluginRegistry] = pluginsRegistred;

        // Act
        let returnData = await main.clearAllPluginRegistry();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function writePluginRegistryToDisk
 * @description Tests the positive and negative test cases of the writePluginRegistryToDisk
 * @author Vlad Sorokin
 * @date 2024/02/29
 */
describe(tst_con.cwritePluginRegistryToDisk, () => {
    /**
     * @function writePluginRegistryToDisk_validData
     * @description Tests the main function writePluginRegistryToDisk with a valid input.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_validData, async () => {
        // Arrange
        let pluginsRegistred = tst_man.expectedListLoadedPlugins;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(true);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });

    /**
     * @function writePluginRegistryToDisk_inValidString
     * @description Tests the main function writePluginRegistryToDisk with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_inValidString, async () => {
        let pluginsRegistred = tst_man.ctestString1;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(false);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });

    /**
     * @function writePluginRegistryToDisk_inValidInteger
     * @description Tests the main function writePluginRegistryToDisk with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_inValidInteger, async () => {
        // Arrange
        let pluginsRegistred = 123;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(false);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });

    /**
     * @function writePluginRegistryToDisk_inValidBoolean
     * @description Tests the main function writePluginRegistryToDisk with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_inValidBoolean, async () => {
        let pluginsRegistred = true;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(false);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });

    /**
     * @function writePluginRegistryToDisk_inValidUndefined
     * @description Tests the main function writePluginRegistryToDisk with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_inValidUndefined, async () => {
        let pluginsRegistred = undefined;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(false);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });

    /**
     * @function writePluginRegistryToDisk_inValidNaN
     * @description Tests the main function writePluginRegistryToDisk with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/02/29
     */
    test(tst_con.cwritePluginRegistryToDisk_inValidNaN, async () => {
        let pluginsRegistred = NaN;
        D[cfg.cpluginRegistry] = pluginsRegistred;
        D[sys.cbusinessRules] = {
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cwriteJsonData]: (inputData, inputMetaData) => fileOperations.writeJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cdeleteFile]: (inputData, inputMetaData) => fileOperations.deleteFile(inputData, inputMetaData)
        };
        let pathToPluginsJsonFile = tst_pbt.cpathToUnitTestPluginsJsonFile;
        await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pathToPluginsJsonFile);

        // Act
        let returnData = await main.writePluginRegistryToDisk();

        // Assert
        expect(returnData).toEqual(false);

        // Emptying out the plugin.json file.
        await writeFile(pathToPluginsJsonFile, '');
    });
})

/**
 * @function loadPlugin
 * @description Tests the positive and negative test cases of the loadPlugin
 * @author Vlad Sorokin
 * @date 2024/03/14
 */
describe(tst_con.cloadPlugin, () => {
    /**
     * @function loadPlugin_validPluginPathData
     * @description Tests the main function loadPlugin with a valid input.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_validPluginsPathData, async () => {
        // Arrange
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugin(pluginPath);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function loadPlugin_inValidPluginPathString
     * @description Tests the main function loadPlugin with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_inValidPluginPathString, async () => {
        // Arrange
        let pluginPath = tst_man.ctestString1;
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugin(pluginPath);
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginPathInteger
     * @description Tests the main function loadPlugin with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_inValidPluginPathInteger, async () => {
        // Arrange
        let pluginPath = 123;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugin(pluginPath);
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginPathBoolean
     * @description Tests the main function loadPlugin with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_inValidPluginPathBoolean, async () => {
        // Arrange
        let pluginPath = false;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugin(pluginPath);
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginPathUndefined
     * @description Tests the main function loadPlugin with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_inValidPluginPathUndefined, async () => {
        // Arrange
        let pluginPath = undefined;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugin(pluginPath);
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugin_inValidPluginPathNaN
     * @description Tests the main function loadPlugin with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/03/14
     */
    test(tst_con.cloadPlugin_inValidPluginPathNaN, async () => {
       // Arrange
       let pluginPath = NaN;
       D[sys.cbusinessRules] = {
           [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
           [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
       };
       D[sys.cCommandsAliases] = {};
       D[sys.cCommandWorkflows] = {};
       D[wrd.cThemes] = {};
       D[sys.cpluginsLoaded] = [{}];

       // Act
       let returnData = await main.loadPlugin(pluginPath);
        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadPlugins
 * @description Tests the positive and negative test cases of the loadPlugins
 * @author Vlad Sorokin
 * @date 2024/03/20
 */
describe(tst_con.cloadPlugins, () => {
    /**
     * @function loadPlugins_validPluginsPathsData
     * @description Tests the main function loadPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_validPluginsPathsData, async () => {
        // Arrange
        let pluginPathArray = [tst_man.testPluginPath];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function loadPlugins_inValidPluginsPathsString
     * @description Tests the main function loadPlugins with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_inValidPluginsPathsString, async () => {
        // Arrange
        let pluginPathArray = [tst_man.ctestString1];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugins_inValidPluginsPathsInteger
     * @description Tests the main function loadPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_inValidPluginsPathsInteger, async () => {
        // Arrange
        let pluginPathArray = [123];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugins_inValidPluginsPathsBoolean
     * @description Tests the main function loadPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_inValidPluginsPathsBoolean, async () => {
        // Arrange
        let pluginPathArray = [false];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugins_inValidPluginsPathsUndefined
     * @description Tests the main function loadPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_inValidPluginsPathsUndefined, async () => {
        // Arrange
        let pluginPathArray = [undefined];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPlugins_inValidPluginsPathsNaN
     * @description Tests the main function loadPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPlugins_inValidPluginsPathsNaN, async () => {
        // Arrange
        let pluginPathArray = [NaN];
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.loadPlugins(pluginPathArray);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadPluginsFromRegistry
 * @description Tests the positive and negative test cases of the loadPluginsFromRegistry
 * @author Vlad Sorokin
 * @date 2024/03/20
 */
describe(tst_con.cloadPluginsFromRegistry, () => {
    /**
     * @function loadPluginsFromRegistry_validData
     * @description Tests the main function loadPluginsFromRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2024/03/20
     */
    test(tst_con.cloadPluginsFromRegistry_validData, async () => {
        // Arrange
        
        D[cfg.cpluginRegistry] = tst_man.listPluginInRegistry;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };

        // Act
        let returnData = await main.loadPluginsFromRegistry();
       
        // Assert
        expect(returnData).toEqual(true);
    });
})

/**
 * @function unloadPlugin
 * @description Tests the positive and negative test cases of the unloadPlugin function
 * @author Vlad Sorokin
 * @date 2024/05/08
 */
describe(tst_con.cunloadPlugin, () => {
    /**
     * @function unloadPlugin_validPluginNameData
     * @description Tests the main function unloadPlugin with a valid plugin name.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_validPluginNameData, async () => {
        // Arrange
        let pluginPath = tst_man.testPluginPath;
        let pluginName = tst_man.ctestPluginOne;
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // let pluginData = D[sys.cConstantsValidationData][wrd.cPlugins][pluginName];
        // console.log("HERERERERERERE: ", D[sys.cConstantsValidationData][wrd.cPlugins][pluginName]);
        // console.log(sys.cpluginBusinessConstantsValidation, pluginData[sys.cpluginBusinessConstantsValidation]);


        // Act
        let returnData = await main.unloadPlugin(pluginName);


        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unloadPlugin_inValidPluginNameString
     * @description Tests the main function unloadPlugin with an invalid plugin name string.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_inValidPluginNameString, async () => {
        // Arrange
        let pluginName = tst_man.ctestString1;
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugin(pluginName);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameInteger
     * @description Tests the main function unloadPlugin with an invalid plugin name integer.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_inValidPluginNameInteger, async () => {
        // Arrange
        let pluginName = 123;
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugin(pluginName);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameBoolean
     * @description Tests the main function unloadPlugin with an invalid plugin name boolean.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_inValidPluginNameBoolean, async () => {
        // Arrange
        let pluginName = false;
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugin(pluginName);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameUndefined
     * @description Tests the main function unloadPlugin with an invalid plugin name undefined.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_inValidPluginNameUndefined, async () => {
        // Arrange
        let pluginName = undefined;
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugin(pluginName);
        
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugin_inValidPluginNameNaN
     * @description Tests the main function unloadPlugin with an invalid plugin name NaN.
     * @author Vlad Sorokin
     * @date 2024/05/08
     */
    test(tst_con.cunloadPlugin_inValidPluginNameNaN, async () => {
        // Arrange
        let pluginName = NaN;
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugin(pluginName);
        
        // Assert
        expect(returnData).toEqual(false);
    });
});

/**
 * @function unloadPlugins
 * @description Tests the positive and negative test cases of the unloadPlugins
 * @author Vlad Sorokin
 * @date 2024/05/23
 */
describe(tst_con.cunloadPlugins, () => {
    /**
     * @function unloadPlugins_validPluginNamesData
     * @description Tests the main function unloadPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_validPluginNamesData, async () => {
        // Arrange
        let pluginNameArray = [tst_man.ctestPluginOne];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unloadPlugins_inValidPluginNamesString
     * @description Tests the main function unloadPlugins with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_inValidPluginNamesString, async () => {
        // Arrange
        let pluginNameArray = [tst_man.ctestString1];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugins_inValidPluginNamesInteger
     * @description Tests the main function unloadPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_inValidPluginNamesInteger, async () => {
        // Arrange
        let pluginNameArray = [123];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugins_inValidPluginNamesBoolean
     * @description Tests the main function unloadPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_inValidPluginNamesBoolean, async () => {
        // Arrange
        let pluginNameArray = [false];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugins_inValidPluginNamesUndefined
     * @description Tests the main function unloadPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_inValidPluginNamesUndefined, async () => {
        // Arrange
        let pluginNameArray = [undefined];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function unloadPlugins_inValidPluginNamesNaN
     * @description Tests the main function unloadPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/23
     */
    test(tst_con.cunloadPlugins_inValidPluginNamesNaN, async () => {
        // Arrange
        let pluginNameArray = [NaN];
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadPlugins(pluginNameArray);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function unloadAllPlugins
 * @description Tests the positive and negative test cases of the unloadAllPlugins
 * @author Vlad Sorokin
 * @date 2024/05/24
 */
describe(tst_con.cunloadAllPlugins, () => {
    /**
     * @function unloadAllPlugins_validData
     * @description Tests the main function unloadAllPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cunloadAllPlugins_validData, async () => {
        // Arrange
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        
        await main.loadPlugin(pluginPath);

        // Act
        let returnData = await main.unloadAllPlugins();

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function unloadAllPlugins_emptyData
     * @description Tests the main function unloadAllPlugins with a  empty data.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cunloadAllPlugins_emptyData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];

        // Act
        let returnData = await main.unloadAllPlugins();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getPluginsRegistryPath
 * @description Tests the positive and negative test cases of the getPluginsRegistryPath
 * @author Vlad Sorokin
 * @date 2024/05/24
 */
describe(tst_con.cgetPluginsRegistryPath, () => {
    /**
     * @function getPluginsRegistryPath_validData
     * @description Tests the main function getPluginsRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cgetPluginsRegistryPath_validData, async () => {
        // Arrange
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[cfg.cpluginRegistry][wrd.cpath] = pluginPath;

        // Act
        let returnData = await main.getPluginsRegistryPath();

        // Assert
        expect(returnData).toEqual(pluginPath);
    });
})

/**
 * @function loadPluginResourceData
 * @description Tests the positive and negative test cases of the loadPluginResourceData
 * @author Vlad Sorokin
 * @date 2024/05/24
 */
describe(tst_con.cloadPluginResourceData, () => {
    /**
     * @function loadPluginResourceData_validConfigurationData
     * @description Tests the main function loadPluginResourceData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_validConfigurationData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(tst_man.pluginConfigurationDataExpected);
    });

    /**
     * @function loadPluginResourceData_validCommanderAliasesData
     * @description Tests the main function loadPluginResourceData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_validCommanderAliasesData, async () => {
        // Arrange
        let pluginPath = tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};

        let contextName = wrd.ccommand + wrd.cAliases;
        let pluginResourcePath = tst_man.pluginResourcesDataPathCommands;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(tst_man.pluginCommanderDataExpected/**{"system": [{"testPluginOneCommand01": {"Aliases": "tstPluginOneComand01,tstPluginOneComnd01", "Description": "The first demo command as part of test-plugin-one.", "Name": "testPluginOneCommand01"}, "testPluginOneCommand02": {"Aliases": "tstPluginOneComand02,tstPluginOneComnd02", "Description": "The second demo command as part of test-plugin-one.", "Name": "testPluginOneCommand02"}}]}*/);
    });

    /**
     * @function loadPluginResourceData_validWorkflowsData
     * @description Tests the main function loadPluginResourceData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_validWorkflowsData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cworkflows;
        let pluginResourcePath = tst_man.pluginResourcesDataPathWorkflows;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(tst_man.pluginWorkflowsDataExpected);
    });

    /**
     * @function loadPluginResourceData_validThemesData
     * @description Tests the main function loadPluginResourceData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_validThemesData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cthemes;
        let pluginResourcePath = tst_man.pluginResourcesDataPathThemes;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(tst_man.pluginThemesDataExpected);
    });

    /**
     * @function loadPluginResourceData_inValidContextNameString
     * @description Tests the main function loadPluginResourceData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidContextNameString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = tst_man.ctestString1;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;


        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidPluginConfigPathString
     * @description Tests the main function loadPluginResourceData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidPluginConfigPathString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = tst_man.ctestString1;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidContextNameInteger
     * @description Tests the main function loadPluginResourceData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidContextNameInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = 123;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidContextNameBoolean
     * @description Tests the main function loadPluginResourceData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidContextNameBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = false;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidPluginConfigPathInteger
     * @description Tests the main function loadPluginResourceData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidPluginConfigPathInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = 123;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidPluginConfigPathBoolean
     * @description Tests the main function loadPluginResourceData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidPluginConfigPathBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = false;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidContextNameUndefined
     * @description Tests the main function loadPluginResourceData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidContextNameUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = undefined;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidContextNameNaN
     * @description Tests the main function loadPluginResourceData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidContextNameNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = NaN;
        let pluginResourcePath = tst_man.pluginResourcesDataPathConfiguration;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidPluginConfigPathUndefined
     * @description Tests the main function loadPluginResourceData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidPluginConfigPathUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = undefined;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadPluginResourceData_inValidPluginConfigPathNaN
     * @description Tests the main function loadPluginResourceData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/24
     */
    test(tst_con.cloadPluginResourceData_inValidPluginConfigPathNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.carrayDeepClone]: (inputData, inputMetaData) => dataArrayParsing.arrayDeepClone(inputData, inputMetaData),
            [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
            [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
            [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
            [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
            [biz.cgetFileExtension]: (inputData, inputMetaData) => fileStringParsing.getFileExtension(inputData, inputMetaData),
            [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => fileStringParsing.removeDotFromFileExtension(inputData, inputMetaData),
            [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => fileStringParsing.getFileNameFromPath(inputData, inputMetaData),
            [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => fileStringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData),
            [biz.creadDirectoryContents]: (inputData, inputMetaData) => fileOperations.readDirectoryContents(inputData, inputMetaData),
            [biz.cgetXmlData]: (inputData, inputMetaData) => fileOperations.getXmlData(inputData, inputMetaData),
            [biz.cgetDataCategoryFromDataContextName]: (inputData, inputMetaData) => dataStringParsing.getDataCategoryFromDataContextName(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
            [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData)
        };

        let contextName = wrd.cconfiguration;
        let pluginResourcePath = NaN;

        // Act
        let returnData = await main.loadPluginResourceData(contextName, pluginResourcePath);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function loadAllJsonData
 * @description Tests the positive and negative test cases of the loadAllJsonData
 * @author Vlad Sorokin
 * @date 2024/05/29
 */
describe(tst_con.cloadAllJsonData, () => {
    /**
     * @function loadAllJsonData_validData
     * @description Tests the main function loadAllJsonData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_validData, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = wrd.cconfiguration;
        
        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(tst_man.expectedDataFromJsonTestFile);
    });

    /**
     * @function loadAllJsonData_inValidDataPathString
     * @description Tests the main function loadAllJsonData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidDataPathString, async () => {
        // Arrange
        let dataPath = tst_man.ctestString1;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidContextNameString
     * @description Tests the main function loadAllJsonData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidContextNameString, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = tst_man.ctestString1;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidDataPathInteger
     * @description Tests the main function loadAllJsonData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidDataPathInteger, async () => {
        // Arrange
        let dataPath = 123;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidDataPathBoolean
     * @description Tests the main function loadAllJsonData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidDataPathBoolean, async () => {
        // Arrange
        let dataPath = false;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidContextNameInteger
     * @description Tests the main function loadAllJsonData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidContextNameInteger, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = 123;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidContextNameBoolean
     * @description Tests the main function loadAllJsonData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidContextNameBoolean, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = false;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidDataPathUndefined
     * @description Tests the main function loadAllJsonData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidDataPathUndefined, async () => {
        // Arrange
        let dataPath = undefined;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidDataPathNaN
     * @description Tests the main function loadAllJsonData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidDataPathNaN, async () => {
        // Arrange
        let dataPath = NaN;
        let contextName = wrd.cconfiguration;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidContextNameUndefined
     * @description Tests the main function loadAllJsonData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidContextNameUndefined, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = undefined;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function loadAllJsonData_inValidContextNameNaN
     * @description Tests the main function loadAllJsonData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/29
     */
    test(tst_con.cloadAllJsonData_inValidContextNameNaN, async () => {
        // Arrange
        let dataPath = tst_man.jsonDataPath;
        let contextName = undefined;

        // Act
        let returnData = await main.loadAllJsonData(dataPath, contextName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function storeData
 * @description Tests the positive and negative test cases of the storeData
 * @author Vlad Sorokin
 * @date 2024/05/31
 */
describe(tst_con.cstoreData, () => {
    /**
     * @function storeData_validData
     * @description Tests the main function storeData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_validData, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function storeData_inValidDataName
     * @description Tests the main function storeData with a in valid input.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataName, async () => {
        // Arrange
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataNameInteger
     * @description Tests the main function storeData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataNameInteger, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = 123;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataNameBoolean
     * @description Tests the main function storeData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataNameBoolean, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = false;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataNameUndefined
     * @description Tests the main function storeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataNameUndefined, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = undefined;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataNameNaN
     * @description Tests the main function storeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataNameNaN, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = NaN;
        let data = wrd.cunit + wrd.cTesting;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataUndefined
     * @description Tests the main function storeData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataUndefined, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = undefined;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function storeData_inValidDataNaN
     * @description Tests the main function storeData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cstoreData_inValidDataNaN, async () => {
        // Arrange
        D[sys.cDataStorage] = {}; 
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = NaN;

        // Act
        let returnData = await main.storeData(dataName, data);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getData
 * @description Tests the positive and negative test cases of the getData
 * @author Vlad Sorokin
 * @date 2024/05/31
 */
describe(tst_con.cgetData, () => {
    /**
     * @function getData_validDataNameData
     * @description Tests the main function getData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cgetData_validDataNameData, async () => {
        // Arrange
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = wrd.cunit + wrd.cTesting;

        await main.storeData(dataName, data);

        // Act
        let returnData = await main.getData(dataName);

        // Assert
        expect(returnData).toEqual(wrd.cunit + wrd.cTesting);
    });

    /**
     * @function getData_inValidDataNameInteger
     * @description Tests the main function getData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cgetData_inValidDataNameInteger, async () => {
        // Arrange
        let dataName = 123;

        // Act
        let returnData = await main.getData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getData_inValidDataNameBoolean
     * @description Tests the main function getData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cgetData_inValidDataNameBoolean, async () => {
        // Arrange
        let dataName = false;

        // Act
        let returnData = await main.getData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getData_inValidDataNameUndefined
     * @description Tests the main function getData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cgetData_inValidDataNameUndefined, async () => {
        // Arrange
        let dataName = undefined;

        // Act
        let returnData = await main.getData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getData_inValidDataNameNaN
     * @description Tests the main function getData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cgetData_inValidDataNameNaN, async () => {
        // Arrange
        let dataName = NaN;

        // Act
        let returnData = await main.getData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function clearData
 * @description Tests the positive and negative test cases of the clearData
 * @author Vlad Sorokin
 * @date 2024/05/31
 */
describe(tst_con.cclearData, () => {
    /**
     * @function clearData_validDataNameData
     * @description Tests the main function clearData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cclearData_validDataNameData, async () => {
        // Arrange
        await main.clearData();
        let dataName = wrd.cunit + wrd.cTest + wrd.cData;
        let data = wrd.cunit + wrd.cTesting;
        
        await main.storeData(dataName, data);
        
        // Act
        let returnData = await main.clearData(dataName);
        
        // Assert
        expect(returnData).toEqual(true);
    });
    
    /**
     * @function clearData_validDataNameUndefined
     * @description Tests the main function clearData with a valid data undefined.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cclearData_validDataNameUndefined, async () => {
        // Arrange
        await main.clearData();
        let dataName = undefined;

        // Act
        let returnData = await main.clearData(dataName);

        // Assert
        expect(returnData).toEqual(true);
    });
    
    /**
     * @function clearData_inValidDataNameInteger
     * @description Tests the main function clearData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cclearData_inValidDataNameInteger, async () => {
        // Arrange
        await main.clearData();
        let dataName = 123;

        // Act
        let returnData = await main.clearData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function clearData_inValidDataNameBoolean
     * @description Tests the main function clearData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cclearData_inValidDataNameBoolean, async () => {
        // Arrange
        await main.clearData();
        let dataName = false;

        // Act
        let returnData = await main.clearData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });


    /**
     * @function clearData_inValidDataNameNaN
     * @description Tests the main function clearData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/05/31
     */
    test(tst_con.cclearData_inValidDataNameNaN, async () => {
        // Arrange
        await main.clearData();
        let dataName = NaN;

        // Act
        let returnData = await main.clearData(dataName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function executeBusinessRules
 * @description Tests the positive and negative test cases of the executeBusinessRules
 * @author Vlad Sorokin
 * @date 2024/06/03
 */
describe(tst_con.cexecuteBusinessRules, () => {
    /**
     * @function executeBusinessRules_validData
     * @description Tests the main function executeBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(tst_man.objectTestSample);
    });

    /**
     * @function executeBusinessRules_inValidInputsString
     * @description Tests the main function executeBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = tst_man.ctestString1;
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidBusinessRulesString
     * @description Tests the main function executeBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = tst_man.ctestString1;

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidInputsInteger
     * @description Tests the main function executeBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = 123;
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidInputsBoolean
     * @description Tests the main function executeBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = false;
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidBusinessRulesInteger
     * @description Tests the main function executeBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = 123;

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidBusinessRulesBoolean
     * @description Tests the main function executeBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = false;

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidInputsUndefined
     * @description Tests the main function executeBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = undefined;
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidInputsNaN
     * @description Tests the main function executeBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = NaN;
        let businessRules = [biz.cobjectDeepClone];

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidBusinessRulesUndefined
     * @description Tests the main function executeBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = undefined;

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function executeBusinessRules_inValidBusinessRulesNaN
     * @description Tests the main function executeBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/03
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData)
        };
        let inputs = [tst_man.objectTestSample];
        let businessRules = NaN;

        // Act
        let returnData = await main.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function enqueueCommand
 * @description Tests the positive and negative test cases of the enqueueCommand
 * @author Vlad Sorokin
 * @date 2024/06/05
 */
describe(tst_con.cenqueueCommand, () => {
    /**
     * @function enqueueCommand_validCommandData
     * @description Tests the main function enqueueCommand with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cenqueueCommand_validCommandData, async () => {
        // Arrange
        D[sys.cUserEnteredCommandLog] = [];
        D[sys.cSystemCommandLog] = [];
        let command = cmd.cloadPlugin;

        // Act
        let returnData = await main.enqueueCommand(command);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function enqueueCommand_inValidCommandInteger
     * @description Tests the main function enqueueCommand with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cenqueueCommand_inValidCommandInteger, async () => {
        // Arrange
        D[sys.cUserEnteredCommandLog] = [];
        D[sys.cSystemCommandLog] = [];
        let command = 123;

        // Act
        let returnData = await main.enqueueCommand(command);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function enqueueCommand_inValidCommandBoolean
     * @description Tests the main function enqueueCommand with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cenqueueCommand_inValidCommandBoolean, async () => {
        // Arrange
        D[sys.cUserEnteredCommandLog] = [];
        D[sys.cSystemCommandLog] = [];
        let command = false;

        // Act
        let returnData = await main.enqueueCommand(command);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function enqueueCommand_inValidCommandUndefined
     * @description Tests the main function enqueueCommand with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cenqueueCommand_inValidCommandUndefined, async () => {
        // Arrange
        D[sys.cUserEnteredCommandLog] = [];
        D[sys.cSystemCommandLog] = [];
        let command = undefined;

        // Act
        let returnData = await main.enqueueCommand(command);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function enqueueCommand_inValidCommandNaN
     * @description Tests the main function enqueueCommand with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cenqueueCommand_inValidCommandNaN, async () => {
        // Arrange
        D[sys.cUserEnteredCommandLog] = [];
        D[sys.cSystemCommandLog] = [];
        let command = NaN;

        // Act
        let returnData = await main.enqueueCommand(command);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function isCommandQueueEmpty
 * @description Tests the positive and negative test cases of the isCommandQueueEmpty
 * @author Vlad Sorokin
 * @date 2024/06/05
 */
describe(tst_con.cisCommandQueueEmpty, () => {
    /**
     * @function isCommandQueueEmpty_validTruthyData
     * @description Tests the main function isCommandQueueEmpty with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cisCommandQueueEmpty_validTruthyData, async () => {
        // Arrange
        D[sys.cCommandQueue] = [];

        // Act
        let returnData = await main.isCommandQueueEmpty();

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function isCommandQueueEmpty_validFalsyData
     * @description Tests the main function isCommandQueueEmpty with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cisCommandQueueEmpty_validFalsyData, async () => {
        // Arrange
        D[sys.cCommandQueue] = [
            cmd.cloadPlugin
        ];

        // Act
        let returnData = await main.isCommandQueueEmpty();

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function processCommandQueue
 * @description Tests the positive and negative test cases of the processCommandQueue
 * @author Vlad Sorokin
 * @date 2024/06/05
 */
describe(tst_con.cprocessCommandQueue, () => {
    /**
     * @function processCommandQueue_validData
     * @description Tests the main function processCommandQueue with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cprocessCommandQueue_validData, async () => {
        // Arrange
        let pluginLoadWithData = cmd.cloadPlugin + bas.cSpace + tst_man.testPluginPath;
        D[sys.cbusinessRules] = {
            [biz.cgetJsonData]: (inputData, inputMetaData) => fileOperations.getJsonData(inputData, inputMetaData),
            [biz.cgetNowMoment]: (inputData, inputMetaData) => timeComputation.getNowMoment(inputData, inputMetaData),
            [biz.cobjectDeepClone]: (inputData, inputMetaData) => dataArrayParsing.objectDeepClone(inputData, inputMetaData),
            [biz.cdoesArrayContainCharacter]: (inputData, inputMetaData) => characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData),
            [biz.ccomputeDeltaTime]: (inputData, inputMetaData) => timeComputation.computeDeltaTime(inputData, inputMetaData)
        };
        D[wrd.cCommands] = {
            [cmd.cloadPlugin]: (inputData, inputMetaData) => pluginCommands.loadPlugin(inputData, inputMetaData)
        }
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[sys.cCommandQueue] = [
            pluginLoadWithData
        ];

        // Act
        let returnData = await main.processCommandQueue();

        // Assert
        expect(returnData).toEqual([true, true]);
    });
})

/**
 * @function setConfigurationSetting
 * @description Tests the positive and negative test cases of the setConfigurationSetting
 * @author Vlad Sorokin
 * @date 2024/06/05
 */
describe(tst_con.csetConfigurationSetting, () => {
    /**
     * @function setConfigurationSetting_validData
     * @description Tests the main function setConfigurationSetting with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_validData, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceString
     * @description Tests the main function setConfigurationSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = tst_man.ctestString1;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNameString
     * @description Tests the main function setConfigurationSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = tst_man.ctestString1;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationValueString
     * @description Tests the main function setConfigurationSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = tst_man.ctestString1;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceInteger
     * @description Tests the main function setConfigurationSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = 123;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceBoolean
     * @description Tests the main function setConfigurationSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = false;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceUndefined
     * @description Tests the main function setConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = undefined;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceNaN
     * @description Tests the main function setConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = NaN;
        let configurationName = wrd.ctesting;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNameInteger
     * @description Tests the main function setConfigurationSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = 123;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNameBoolean
     * @description Tests the main function setConfigurationSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = false;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNameUndefined
     * @description Tests the main function setConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = undefined;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationNameNaN
     * @description Tests the main function setConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = NaN;
        let configurationValue = true;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationValueInteger
     * @description Tests the main function setConfigurationSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = 123;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationValueBoolean
     * @description Tests the main function setConfigurationSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = false;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationValueUndefined
     * @description Tests the main function setConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = undefined;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidConfigurationValueNaN
     * @description Tests the main function setConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = NaN;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidAllUndefined
     * @description Tests the main function setConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidAllUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = undefined;
        let configurationName = undefined;
        let configurationValue = undefined;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function setConfigurationSetting_inValidAllNaN
     * @description Tests the main function setConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.csetConfigurationSetting_inValidAllNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = NaN;
        let configurationName = NaN;
        let configurationValue = NaN;


        // Act
        let returnData = await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getConfigurationSetting
 * @description Tests the positive and negative test cases of the getConfigurationSetting
 * @author Vlad Sorokin
 * @date 2024/06/05
 */
describe(tst_con.cgetConfigurationSetting, () => {
    /**
     * @function getConfigurationSetting_validData
     * @description Tests the main function getConfigurationSetting with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_validData, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceString
     * @description Tests the main function getConfigurationSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = tst_man.ctestString1;
        configurationName = wrd.ctesting;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNameString
     * @description Tests the main function getConfigurationSetting with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameString, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        configurationName = tst_man.ctestString1;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceInteger
     * @description Tests the main function getConfigurationSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = 123;
        configurationName = wrd.ctesting;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceBoolean
     * @description Tests the main function getConfigurationSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = false;
        configurationName = wrd.ctesting;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNameInteger
     * @description Tests the main function getConfigurationSetting with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameInteger, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        configurationName = 123;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNameBoolean
     * @description Tests the main function getConfigurationSetting with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameBoolean, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        configurationName = false;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceUndefined
     * @description Tests the main function getConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = undefined;
        configurationName = wrd.ctesting;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceNaN
     * @description Tests the main function getConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = NaN;
        configurationName = wrd.ctesting;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNameUndefined
     * @description Tests the main function getConfigurationSetting with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameUndefined, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        configurationName = undefined;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getConfigurationSetting_inValidConfigurationNameNaN
     * @description Tests the main function getConfigurationSetting with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/05
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameNaN, async () => {
        // Arrange
        D[wrd.cconfiguration] = {};
        let configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        let configurationName = wrd.ctesting;
        let configurationValue = true;

        await main.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        configurationNamespace = wrd.cunit + bas.cDot + wrd.ctest;
        configurationName = NaN;

        // Act
        let returnData = await main.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function consoleLog
 * @description Tests the positive and negative test cases of the consoleLog
 * @author Vlad Sorokin
 * @date 2024/06/06
 */
describe(tst_con.cconsoleLog, () => {
    /**
     * @function consoleLog_validData
     * @description Tests the main function consoleLog with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_validData, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function consoleLog_inValidTheNamespacePrefixString
     * @description Tests the main function consoleLog with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheNamespacePrefixString, async () => {
        // Arrange
        let theNamespacePrefix = tst_man.ctestString1;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheFunctionNameString
     * @description Tests the main function consoleLog with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheFunctionNameString, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = tst_man.ctestString1;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheNamespacePrefixInteger
     * @description Tests the main function consoleLog with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheNamespacePrefixInteger, async () => {
        // Arrange
        let theNamespacePrefix = 123;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheNamespacePrefixBoolean
     * @description Tests the main function consoleLog with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheNamespacePrefixBoolean, async () => {
        // Arrange
        let theNamespacePrefix = false;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheNamespacePrefixUndefined
     * @description Tests the main function consoleLog with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheNamespacePrefixUndefined, async () => {
        // Arrange
        let theNamespacePrefix = undefined;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheNamespacePrefixNaN
     * @description Tests the main function consoleLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheNamespacePrefixNaN, async () => {
        // Arrange
        let theNamespacePrefix = NaN;
        let theFunctionName = fnc.cconsoleLog + wrd.cTest;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheFunctionNameInteger
     * @description Tests the main function consoleLog with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheFunctionNameInteger, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = 123;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheFunctionNameBoolean
     * @description Tests the main function consoleLog with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheFunctionNameBoolean, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = false;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheFunctionNameUndefined
     * @description Tests the main function consoleLog with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheFunctionNameUndefined, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = undefined;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidTheFunctionNameNaN
     * @description Tests the main function consoleLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidTheFunctionNameNaN, async () => {
        // Arrange
        let theNamespacePrefix = wrd.cframework + bas.cDot + wrd.cmain + bas.cDot;
        let theFunctionName = NaN;
        let message = wrd.ctesting;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidAllUndefined
     * @description Tests the main function consoleLog with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidAllUndefined, async () => {
        // Arrange
        let theNamespacePrefix = undefined;
        let theFunctionName = undefined;
        let message = undefined;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain]: true};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleLog_inValidAllNaN
     * @description Tests the main function consoleLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/06
     */
    test(tst_con.cconsoleLog_inValidAllNaN, async () => {
        // Arrange
        let theNamespacePrefix = NaN;
        let theFunctionName = NaN;
        let message = NaN;
        D[wrd.cconfiguration] = {};
        D[wrd.cconfiguration][wrd.csystem] = {};
        D[wrd.cconfiguration][wrd.csystem] = {
            [wrd.csystem + bas.cDot + cfg.cconsoleLogEnabled]: true
        };
        D[wrd.cconfiguration][cfg.cdebugSetting] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework] = {};
        D[wrd.cconfiguration][cfg.cdebugSetting][wrd.cframework][wrd.cmain] = {[cfg.cdebugSetting + bas.cDot + wrd.cframework + bas.cDot + wrd.cmain + bas.cDot + fnc.cconsoleLog + wrd.cTest]: true}

        // Act
        let returnData = await main.consoleLog(theNamespacePrefix, theFunctionName, message);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function consoleTableLog
 * @description Tests the positive and negative test cases of the consoleTableLog
 * @author Vlad Sorokin
 * @date 2024/06/07
 */
describe(tst_con.cconsoleTableLog, () => {
    /**
     * @function consoleTableLog_validData
     * @description Tests the main function consoleTableLog with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_validData, async () => {
        // Arrange
        let classPath = '';
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function consoleTableLog_inValidTableDataString
     * @description Tests the main function consoleTableLog with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidTableDataString, async () => {
        // Arrange
        let classPath = '';
        let tableData = tst_man.ctestString1;
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidColumnNamesString
     * @description Tests the main function consoleTableLog with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesString, async () => {
        // Arrange
        let classPath = '';
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = tst_man.ctestString1;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidClassPathInteger
     * @description Tests the main function consoleTableLog with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidClassPathInteger, async () => {
        // Arrange
        let classPath = 123;
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidClassPathBoolean
     * @description Tests the main function consoleTableLog with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidClassPathBoolean, async () => {
        // Arrange
        let classPath = false;
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidClassPathNaN
     * @description Tests the main function consoleTableLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidClassPathNaN, async () => {
        // Arrange
        let classPath = NaN;
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidTableDataInteger
     * @description Tests the main function consoleTableLog with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidTableDataInteger, async () => {
        // Arrange
        let classPath = '';
        let tableData = 123;
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidTableDataBoolean
     * @description Tests the main function consoleTableLog with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidTableDataBoolean, async () => {
        // Arrange
        let classPath = '';
        let tableData = false;
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidTableDataUndefined
     * @description Tests the main function consoleTableLog with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidTableDataUndefined, async () => {
        // Arrange
        let classPath = '';
        let tableData = undefined;
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidTableDataNaN
     * @description Tests the main function consoleTableLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidTableDataNaN, async () => {
        // Arrange
        let classPath = '';
        let tableData = NaN;
        let columnNames = [wrd.cvalue];

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidColumnNamesInteger
     * @description Tests the main function consoleTableLog with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesInteger, async () => {
        // Arrange
        let classPath = '';
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = 123;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidColumnNamesBoolean
     * @description Tests the main function consoleTableLog with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesBoolean, async () => {
        // Arrange
        let classPath = '';
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = false;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidColumnNamesNaN
     * @description Tests the main function consoleTableLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesNaN, async () => {
        // Arrange
        let classPath = '';
        let tableData = [
            { value: wrd.cunit + wrd.ctesting },
            { value: wrd.ctest },
        ];
        let columnNames = NaN;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidAllUndefined
     * @description Tests the main function consoleTableLog with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidAllUndefined, async () => {
        // Arrange
        let classPath = undefined;
        let tableData = undefined;
        let columnNames = undefined;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function consoleTableLog_inValidAllNaN
     * @description Tests the main function consoleTableLog with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/07
     */
    test(tst_con.cconsoleTableLog_inValidAllNaN, async () => {
        // Arrange
        let classPath = NaN;
        let tableData = NaN;
        let columnNames = NaN;

        // Act
        let returnData = await main.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toEqual(false);
    });
})

