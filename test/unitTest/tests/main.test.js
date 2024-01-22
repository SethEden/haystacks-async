'use strict'
/* eslint-disable no-undef */
/**
 * @file main.test.js
 * @module main.test
 * @description Unit tests for the main.js
 * @requires module:dataArrayParsing
 * @requires module:data
 * @requires module:main
 * @requires module:testAliases
 * @requires module:testConstantsValidationMetadata
 * @requires module:mainTest
 * @requires module:testData
 * @requires module:test.constants
 * @requires module:test.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import dataArrayParsing from '../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js';
import D from '../../../src/structures/data.js';
import main from '../../../src/main.js'
// import testAliases from '../testData/resources/commands/testAliases.xml';
import allTstCV from '../testData/resources/constantsValidation/testConstantsValidationMetadata.js';
import * as tst_man from '../testData/mainTest.js';
import testData from '../testData/testData.json'
import * as tst_con from './constants/test.constants.js';
import * as tst_sys from './constants/test.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation.js';

const {bas, biz, cfg, sys, wrd, num } = hayConst;

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
     * @NOTE If you are using frameworkConstantsPath string constant and your @haystacks-constants is not linked. 
     * Go to unitTest.testData.mainTest.js. Comment out first frameworkConstantsPath string constant and uncomment the second one. 
     * That is supposed to be done in unitTest.testData.mainTest.js, as well as in test.configuration.constants.js and test.configuration.constants.validation.js.
     * Given the above statement its recommended to run unit tests with the constats unlinked, 
     * because the local paths on your system might be different.
     */
    test(tst_con.cinitFramework_validData, async () => {
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
        expect(returnData).toBeFalsy();
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
        expect(returnData).toBeFalsy();
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
        expect(returnData).toBeFalsy();
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
        expect(returnData).toBeFalsy();
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
        expect(returnData).toBeFalsy();
    });

})

/**
 * @function accouterFramework
 * @description Tests the positive and negative test cases of the accouterFramework
 * @author Vlad Sorokin
 * @date 2023/01/01
 */
describe(tst_con.caccouterFramework, () => {
    /**
     * @function accouterFramework_validData
     * @description Tests the main function accouterFramework with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/01
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
     * @date 2023/01/01
     */
    test(tst_con.caccouterFramework_inValidDataString, async () => {
        // Arrange
        let data = tst_man.ctestString1;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function accouterFramework_inValidDataInteger
     * @description Tests the main function accouterFramework with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/01
     */
    test(tst_con.caccouterFramework_inValidDataInteger, async () => {
        // Arrange
        let data = 123;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function accouterFramework_inValidDataBoolean
     * @description Tests the main function accouterFramework with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/01
     */
    test(tst_con.caccouterFramework_inValidDataBoolean, async () => {
        // Arrange
        let data = false;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function accouterFramework_inValidDataUndefined
     * @description Tests the main function accouterFramework with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/01
     */
    test(tst_con.caccouterFramework_inValidDataUndefined, async () => {
        // Arrange
        let data = undefined;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function accouterFramework_inValidDataNaN
     * @description Tests the main function accouterFramework with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/01
     */
    test(tst_con.caccouterFramework_inValidDataNaN, async () => {
        // Arrange
        let data = NaN;

        // Act
        let returnData = await main.accouterFramework(data);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function getFrameworkData
 * @description Tests the positive and negative test cases of the getFrameworkData
 * @author Vlad Sorokin
 * @date 2023/01/01
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
     * @date 2023/01/01
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
    //  * @date 2023/01/01
    //  */
    // test(tst_con.cgetFrameworkData_inValidString, async () => {
    //     // Arrange
    //     D.data = tst_man.ctestString1;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function getFrameworkData_inValidInteger
    //  * @description Tests the main function getFrameworkData with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidInteger, async () => {
    //     // Arrange
    //     D.data = 123;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function getFrameworkData_inValidBoolean
    //  * @description Tests the main function getFrameworkData with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidBoolean, async () => {
    //     // Arrange
    //     D.data = true;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function getFrameworkData_inValidUndefined
    //  * @description Tests the main function getFrameworkData with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidUndefined, async () => {
    //     // Arrange
    //     D.data = undefined;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function getFrameworkData_inValidNaN
    //  * @description Tests the main function getFrameworkData with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/01
    //  */
    // test(tst_con.getFrameworkData_inValidNaN, async () => {
    //     // Arrange
    //     D.data = NaN;

    //     // Act
    //     let returnData = await main.getFrameworkData();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });
})

/**
 * @function mergeClientBusinessRules
 * @description Tests the positive and negative test cases of the mergeClientBusinessRules
 * @author Vlad Sorokin
 * @date 2023/01/02
 */
describe(tst_con.cmergeClientBusinessRules, () => {
    /**
     * @function mergeClientBusinessRules_validClientBusinessRulesData
     * @description Tests the main function mergeClientBusinessRules with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_validData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesLibrary);

        // Assert
        expect(returnData).toBeTruthy();
        expect(D[sys.cbusinessRules]).toEqual(testRulesLibrary);
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesString
     * @description Tests the main function mergeClientBusinessRules with a invalid data string.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesInteger
     * @description Tests the main function mergeClientBusinessRules with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = 123;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesBoolean
     * @description Tests the main function mergeClientBusinessRules with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = false;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesUndefined
     * @description Tests the main function mergeClientBusinessRules with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = undefined;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesNaN
     * @description Tests the main function mergeClientBusinessRules with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {};
        let testRulesString = NaN;
        let returnData = true;

        // Act
        returnData = await main.mergeClientBusinessRules(testRulesString);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function mergeClientCommands
 * @description Tests the positive and negative test cases of the mergeClientCommands
 * @author Vlad Sorokin
 * @date 2023/01/02
 */
describe(tst_con.cmergeClientCommands, () => {
    /**
     * @function mergeClientCommands_validclientCommandsData
     * @description Tests the main function mergeClientCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeTruthy();
        expect(D[wrd.cCommands]).toEqual(testCommandsLibrary);
    });

    /**
     * @function mergeClientCommands_inValidclientCommandsString
     * @description Tests the main function mergeClientCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsString, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientCommands_inValidclientCommandsInteger
     * @description Tests the main function mergeClientCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsInteger, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = 123;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientCommands_inValidclientCommandsBoolean
     * @description Tests the main function mergeClientCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsBoolean, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = false;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientCommands_inValidclientCommandsUndefined
     * @description Tests the main function mergeClientCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsUndefined, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = undefined;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function mergeClientCommands_inValidclientCommandsNaN
     * @description Tests the main function mergeClientCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsNaN, async () => {
        D[wrd.cCommands] = {};
        let testCommandsLibrary = NaN;
        let returnData = true;

        // Act
        returnData = await main.mergeClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function loadCommandAliases
 * @description Tests the positive and negative test cases of the loadCommandAliases
 * @author Vlad Sorokin
 * @date 2023/01/02
 * @NOTE As of now this test needs jest xml file support, as it will not work unless there is a way for jest to read and use xml files. 
 * Tried to use "jest-environment-jsdom" to solve this issue but couldn't get it to work, though it does seem that solution is use of jsdom.
 */
// describe(tst_con.cloadCommandAliases, () => {
//     /**
//      * @function loadCommandAliases_validCommandAliasesPathData
//      * @description Tests the main function loadCommandAliases with a valid input.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandAliases_validData, async () => {
//         // Arrange
//         let commandAliasesPath = '../testData/resources/commands/testAliases.xml';
//         let contextName = wrd.cunit + wrd.cTest;
//         let returnData = true;
//         let normalizedCommandAliasesPath = path.normalize(commandAliasesPath);

//         // Act
//         returnData = await main.loadCommandAliases(normalizedCommandAliasesPath, contextName);

//         // Assert
//         expect(returnData).toBeTruthy();
//     });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathString
    //  * @description Tests the main function loadCommandAliases with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathString, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameString
    //  * @description Tests the main function loadCommandAliases with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameString, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathInteger
    //  * @description Tests the main function loadCommandAliases with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathInteger, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathBoolean
    //  * @description Tests the main function loadCommandAliases with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathBoolean, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameInteger
    //  * @description Tests the main function loadCommandAliases with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameInteger, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameBoolean
    //  * @description Tests the main function loadCommandAliases with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameBoolean, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathUndefined
    //  * @description Tests the main function loadCommandAliases with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathUndefined, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidCommandAliasesPathNaN
    //  * @description Tests the main function loadCommandAliases with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidCommandAliasesPathNaN, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameUndefined
    //  * @description Tests the main function loadCommandAliases with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameUndefined, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function loadCommandAliases_inValidContextNameNaN
    //  * @description Tests the main function loadCommandAliases with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2023/01/02
    //  */
    // test(tst_con.cloadCommandAliases_inValidContextNameNaN, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await main.loadCommandAliases();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });
// })

// /**
//  * @function loadCommandWorkflows
//  * @description Tests the positive and negative test cases of the loadCommandWorkflows
//  * @author Vlad Sorokin
//  * @date 2023/01/02
//  */
// describe(tst_con.cloadCommandWorkflows, () => {
//     /**
//      * @function loadCommandWorkflows_validWorkflowPathData
//      * @description Tests the main function loadCommandWorkflows with a valid input.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
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
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2023/01/02
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });
// })

/**
 * @function loadCommandWorkflows
 * @description Tests the positive and negative test cases of the loadCommandWorkflows
 * @author Vlad Sorokin
 * @date 2023/01/08
 * @NOTE As of now this test needs jest xml file support, as it will not work unless there is a way for jest to read and use xml files. 
 * Tried to use "jest-environment-jsdom" to solve this issue but couldn't get it to work, though it does seem that solution is use of jsdom.
 * @NOTE When the fist problem will be solved boolean output needs to be added to the function for testing purposes.
 */
// describe(tst_con.cloadCommandWorkflows, () => {
//     /**
//      * @function loadCommandWorkflows_validWorkflowPathData
//      * @description Tests the main function loadCommandWorkflows with a valid input.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
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
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameString
//      * @description Tests the main function loadCommandWorkflows with a invalid data string.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameString, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameInteger
//      * @description Tests the main function loadCommandWorkflows with a invalid data integer.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameInteger, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameBoolean
//      * @description Tests the main function loadCommandWorkflows with a invalid data boolean.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameBoolean, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidWorkflowPathNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidWorkflowPathNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameUndefined
//      * @description Tests the main function loadCommandWorkflows with a invalid data undefined.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameUndefined, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });

//     /**
//      * @function loadCommandWorkflows_inValidContextNameNaN
//      * @description Tests the main function loadCommandWorkflows with a invalid data NaN.
//      * @author Vlad Sorokin
//      * @date 2023/01/08
//      */
//     test(tst_con.cloadCommandWorkflows_inValidContextNameNaN, async () => {
//         // Arrange
        

//         // Act
//         let returnData = await main.loadCommandWorkflows();

//         // Assert
//         expect(returnData).toBeFalsy();
//     });
// })

/**
 * @function listLoadedPlugins
 * @description Tests the positive and negative test cases of the listLoadedPlugins
 * @author Vlad Sorokin
 * @date 2023/01/08
 */
describe(tst_con.clistLoadedPlugins, () => {
    /**
     * @function listLoadedPlugins_validData
     * @description Tests the main function listLoadedPlugins with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/08
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
     * @date 2023/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidString, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = tst_man.ctestString1;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listLoadedPlugins_inValidInteger
     * @description Tests the main function listLoadedPlugins with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidInteger, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = 123;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listLoadedPlugins_inValidBoolean
     * @description Tests the main function listLoadedPlugins with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidBoolean, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = true;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listLoadedPlugins_inValidUndefined
     * @description Tests the main function listLoadedPlugins with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidUndefined, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = undefined;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listLoadedPlugins_inValidNaN
     * @description Tests the main function listLoadedPlugins with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/08
     */
    test(tst_con.clistLoadedPlugins_inValidNaN, async () => {
        // Arrange
        D.data = {};
        D[sys.cpluginsLoaded] = [];
        D[sys.cpluginsLoaded] = NaN;

        // Act
        let returnData = await main.listLoadedPlugins();

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function listAllPluginsInRegistry
 * @description Tests the positive and negative test cases of the listAllPluginsInRegistry
 * @author Vlad Sorokin
 * @date 2023/01/10
 */
describe(tst_con.clistAllPluginsInRegistry, () => {
    /**
     * @function listAllPluginsInRegistry_validData
     * @description Tests the main function listAllPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/10
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
     * @date 2023/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = tst_man.ctestString1;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listAllPluginsInRegistry_inValidInteger
     * @description Tests the main function listAllPluginsInRegistry with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = 123;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listAllPluginsInRegistry_inValidBoolean
     * @description Tests the main function listAllPluginsInRegistry with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = true;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listAllPluginsInRegistry_inValidUndefined
     * @description Tests the main function listAllPluginsInRegistry with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = undefined;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function listAllPluginsInRegistry_inValidNaN
     * @description Tests the main function listAllPluginsInRegistry with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/10
     */
    test(tst_con.clistAllPluginsInRegistry_inValidNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = NaN;

        // Act
        let returnData = await main.listAllPluginsInRegistry();

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function listAllPluginsInRegistryPath
 * @description Tests the positive test cases of the listAllPluginsInRegistryPath
 * @author Vlad Sorokin
 * @date 2023/01/11
 * @NOTE The remaining of invalid tests will be tested with the pluginBroker.js function: listPluginsInRegistryPath.
 */
describe(tst_con.clistAllPluginsInRegistryPath, () => {
    /**
     * @function listAllPluginsInRegistryPath_validData
     * @description Tests the main function listAllPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/11
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
 * @date 2023/01/12
 */
describe(tst_con.cnumberOfPluginsInRegistry, () => {
    /**
     * @function numberOfPluginsInRegistry_validData
     * @description Tests the main function numberOfPluginsInRegistry with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/12
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
 * @date 2023/01/12
 */
describe(tst_con.cnumberOfPluginsInRegistryPath, () => {
    /**
     * @function numberOfPluginsInRegistryPath_validData
     * @description Tests the main function numberOfPluginsInRegistryPath with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/12
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
 * @date 2023/01/12
 */
describe(tst_con.cregisterPluginByNameAndPath, () => {
    /**
     * @function registerPluginByNameAndPath_validPluginNameData
     * @description Tests the main function registerPluginByNameAndPath with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_validData, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = tst_man.pluginsPath;
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameString
     * @description Tests the main function registerPluginByNameAndPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = tst_man.pluginsPathObject;
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.ctestString1;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathString
     * @description Tests the main function registerPluginByNameAndPath with a invalid data string.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = tst_man.ctestString1;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameInteger
     * @description Tests the main function registerPluginByNameAndPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = 123;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameBoolean
     * @description Tests the main function registerPluginByNameAndPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = false;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathInteger
     * @description Tests the main function registerPluginByNameAndPath with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = 123;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathBoolean
     * @description Tests the main function registerPluginByNameAndPath with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = false;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameUndefined
     * @description Tests the main function registerPluginByNameAndPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = undefined;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginNameNaN
     * @description Tests the main function registerPluginByNameAndPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginNameNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = NaN;
        let pluginPath = tst_man.pluginsPath;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathUndefined
     * @description Tests the main function registerPluginByNameAndPath with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = undefined;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function registerPluginByNameAndPath_inValidPluginPathNaN
     * @description Tests the main function registerPluginByNameAndPath with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/12
     */
    test(tst_con.cregisterPluginByNameAndPath_inValidPluginPathNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry][wrd.cplugins] = [];
        let pluginName = tst_man.pluginNameToUse;
        let pluginPath = NaN;

        // Act
        let returnData = await main.registerPluginByNameAndPath(pluginName, pluginPath);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function unregisterPluginByName
 * @description Tests the positive and negative test cases of the unregisterPluginByName
 * @author Vlad Sorokin
 * @date 2023/01/21
 */
describe(tst_con.cunregisterPluginByName, () => {
    /**
     * @function unregisterPluginByName_validPluginNameData
     * @description Tests the main function unregisterPluginByName with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_validData, async () => {
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
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameString, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName =  tst_man.ctestString1;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameInteger
     * @description Tests the main function unregisterPluginByName with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameInteger, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = 123;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameBoolean
     * @description Tests the main function unregisterPluginByName with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameBoolean, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = true;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameUndefined
     * @description Tests the main function unregisterPluginByName with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameUndefined, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = undefined;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function unregisterPluginByName_inValidPluginNameNaN
     * @description Tests the main function unregisterPluginByName with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2023/01/21
     */
    test(tst_con.cunregisterPluginByName_inValidPluginNameNaN, async () => {
        // Arrange
        D[cfg.cpluginRegistry] = {};
        D[cfg.cpluginRegistry] = await dataArrayParsing.objectDeepClone(tst_man.listAllPluginsInRegistry, '');
        let pluginName = NaN;

        // Act
        let returnData = await main.unregisterPluginByName(pluginName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})