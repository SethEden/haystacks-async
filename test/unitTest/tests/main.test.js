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
import D from '../../../src/structures/data.js';
import testAliases from '../testData/resources/commands/testAliases.xml';
import allTstCV from '../testData/resources/constantsValidation/testConstantsValidationMetadata.js';
import * as tst_man from '../testData/mainTest.js';
import testData from '../testData/testData.json'
import * as tst_con from './constants/test.constants.js';
import * as tst_sys from './constants/test.system.constants.js';
import main from '../../../src/main.js'

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation.js';

const {bas, sys, wrd, num } = hayConst;

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
        returnData = await main.mergeClientBusinessRules(testCommandsLibrary);

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
        returnData = await main.mergeClientBusinessRules(testCommandsLibrary);

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
        returnData = await main.mergeClientBusinessRules(testCommandsLibrary);

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
        returnData = await main.mergeClientBusinessRules(testCommandsLibrary);

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
        returnData = await main.mergeClientBusinessRules(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function loadCommandAliases
 * @description Tests the positive and negative test cases of the loadCommandAliases
 * @author Vlad Sorokin
 * @date 2023/01/02
 */
describe(tst_con.cloadCommandAliases, () => {
    /**
     * @function loadCommandAliases_validCommandAliasesPathData
     * @description Tests the main function loadCommandAliases with a valid input.
     * @author Vlad Sorokin
     * @date 2023/01/02
     */
    test(tst_con.cloadCommandAliases_validData, async () => {
        // Arrange
        let commandAliasesPath = '../testData/resources/commands/testAliases.xml';
        let contextName = wrd.cunit + wrd.cTest;
        let returnData = true;
        let normalizedCommandAliasesPath = path.normalize(commandAliasesPath);

        // Act
        returnData = await main.loadCommandAliases(normalizedCommandAliasesPath, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

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
})
