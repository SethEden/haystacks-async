'use strict'
/* eslint-disable no-undef */
/**
 * @file commandBroker.test.js
 * @module commandBroker.test
 * @requires module:
 * @description Unit tests for the commandBroker.js
 * @requires module:commandBroker
 * @requires module:dataArrayParsing
 * @requires module:fileOperations
 * @requires module:warden
 * @requires module:D
 * @requires module:tst_cbt
 * @requires module:tst_man
 * @requires module:test.constants
 * @requires module:tst_con
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/06/11
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import commandBroker from '../../../../src/brokers/commandBroker.js';
import dataArrayParsing from '../../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import warden from '../../../../src/controllers/warden.js';
import pluginCommandsLibrary from '../../testData/testPlugins/test-plugin-one/commandsBlob/commandsLibrary.js';
import * as tst_cbt from '../../testData/brokers/commandBrokerTest.js'
import * as tst_man from '../../testData/mainTest.js';
import D from '../../../../src/structures/data.js';
import * as tst_con from '../resources/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import url from 'url';
import path from 'path';

const { bas, cmd, biz, cfg, fnc, gen, msg, phn, sys, wrd, num } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.commandBroker.test.
const namespacePrefix = wrd.cframework + bas.cDot + baseFileName + bas.cDot;
let rootPath = '';



/**
 * @function bootStrapCommands
 * @description Tests the positive and negative test cases of the bootStrapCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.cbootStrapCommands, () => {
    /**
     * @function bootStrapCommands_validData
     * @description Tests the commandBroker function bootStrapCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.cbootStrapCommands_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {};        

        // Act
        let returnData = await commandBroker.bootStrapCommands();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function resetCommands
 * @description Tests the positive and negative test cases of the resetCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.cresetCommands, () => {
    /**
     * @function resetCommands_validData
     * @description Tests the commandBroker function resetCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.cresetCommands_validData, async () => {
        // Arrange
        

        // Act
        let returnData = await commandBroker.resetCommands();

        // Assert
        expect(returnData).toBeTruthy();
    });
})

/**
 * @function addClientCommands
 * @description Tests the positive and negative test cases of the addClientCommands
 * @author Vlad Sorokin
 * @date 2024/06/11
 */
describe(tst_con.caddClientCommands, () => {
    /**
     * @function addClientCommands_validClientCommandsData
     * @description Tests the commandBroker function addClientCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_validClientCommandsData, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.testBusinessRulesLibrary;
        let returnData = false;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeTruthy();
        expect(D[wrd.cCommands]).toEqual(testCommandsLibrary);
    });

    /**
     * @function addClientCommands_inValidClientCommandsString
     * @description Tests the commandBroker function addClientCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsString, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = tst_man.ctestString1;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsInteger
     * @description Tests the commandBroker function addClientCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsInteger, async () => {
        // Arrange
         D[wrd.cCommands] = {};
        let testCommandsLibrary = 123;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsBoolean
     * @description Tests the commandBroker function addClientCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = false;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsUndefined
     * @description Tests the commandBroker function addClientCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsUndefined, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = undefined;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addClientCommands_inValidClientCommandsNaN
     * @description Tests the commandBroker function addClientCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/11
     */
    test(tst_con.caddClientCommands_inValidClientCommandsNaN, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let testCommandsLibrary = NaN;
        let returnData = true;

        // Act
        returnData = await commandBroker.addClientCommands(testCommandsLibrary);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function addPluginCommands
 * @description Tests the positive and negative test cases of the addPluginCommands
 * @author Vlad Sorokin
 * @date 2024/06/13
 */
describe(tst_con.caddPluginCommands, () => {
    /**
     * @function addPluginCommands_validData
     * @description Tests the commandBroker function addPluginCommands with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = {};
        pluginCommands[sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands[sys.cpluginCommands]);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function addPluginCommands_inValidPluginCommandsString
     * @description Tests the commandBroker function addPluginCommands with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginCommandsString, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginNameInteger
     * @description Tests the commandBroker function addPluginCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginNameInteger, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginCommands = {};
        pluginCommands[sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands[sys.cpluginCommands]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginNameBoolean
     * @description Tests the commandBroker function addPluginCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginNameBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginCommands = {};
        pluginCommands[sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands[sys.cpluginCommands]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginCommandsInteger
     * @description Tests the commandBroker function addPluginCommands with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginCommandsInteger, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = 123;

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginCommandsBoolean
     * @description Tests the commandBroker function addPluginCommands with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginCommandsBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = false;

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginNameUndefined
     * @description Tests the commandBroker function addPluginCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginNameUndefined, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginCommands = {};
        pluginCommands[sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands[sys.cpluginCommands]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginNameNaN
     * @description Tests the commandBroker function addPluginCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginNameNaN, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginCommands = {};
        pluginCommands[sys.cpluginCommands] = await pluginCommandsLibrary.initPluginCommandsLibrary();

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands[sys.cpluginCommands]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginCommandsUndefined
     * @description Tests the commandBroker function addPluginCommands with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginCommandsUndefined, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = undefined;
        
        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommands_inValidPluginCommandsNaN
     * @description Tests the commandBroker function addPluginCommands with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/13
     */
    test(tst_con.caddPluginCommands_inValidPluginCommandsNaN, async () => {
        // Arrange
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommands = NaN;

        // Act
        let returnData = await commandBroker.addPluginCommands(pluginName,pluginCommands);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function addPluginCommandAliases
 * @description Tests the positive and negative test cases of the addPluginCommandAliases
 * @author Vlad Sorokin
 * @date 2024/06/17
 */
describe(tst_con.caddPluginCommandAliases, () => {
    /**
     * @function addPluginCommandAliases_validData
     * @description Tests the commandBroker function addPluginCommandAliases with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_validData, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginCommandAliasesString
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginNameInteger
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = 123;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginNameBoolean
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = false;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginCommandAliasesInteger
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = 123;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginCommandAliasesBoolean
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = false;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginNameUndefined
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = undefined;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginNameNaN
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = NaN;
        let pluginCommandAliases = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases[sys.cCommandsAliases]);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginCommandAliasesUndefined
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = undefined;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function addPluginCommandAliases_inValidPluginCommandAliasesNaN
     * @description Tests the commandBroker function addPluginCommandAliases with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginCommandAliases = NaN;

        // Act
        let returnData = await commandBroker.addPluginCommandAliases(pluginName,pluginCommandAliases);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function getValidCommand
 * @description Tests the positive and negative test cases of the getValidCommand
 * @author Vlad Sorokin
 * @date 2024/06/17
 */
describe(tst_con.cgetValidCommand, () => {
    /**
     * @function getValidCommand_validData
     * @description Tests the commandBroker function getValidCommand with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_validData, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + gen.ctrue;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual("name");
    });

    /**
     * @function getValidCommand_inValidCommandStringString
     * @description Tests the commandBroker function getValidCommand with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandStringString, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = tst_man.ctestString1;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandDelimiterString
     * @description Tests the commandBroker function getValidCommand with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandDelimiterString, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + gen.ctrue;
        let commandDelimiter = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandStringInteger
     * @description Tests the commandBroker function getValidCommand with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandStringInteger, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = 123;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandStringBoolean
     * @description Tests the commandBroker function getValidCommand with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandStringBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = false;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandDelimiterInteger
     * @description Tests the commandBroker function getValidCommand with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandDelimiterInteger, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + gen.ctrue;
        let commandDelimiter = 123;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandDelimiterBoolean
     * @description Tests the commandBroker function getValidCommand with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandDelimiterBoolean, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + gen.ctrue;
        let commandDelimiter = false;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandStringUndefined
     * @description Tests the commandBroker function getValidCommand with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandStringUndefined, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = undefined;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getValidCommand_inValidCommandStringNaN
     * @description Tests the commandBroker function getValidCommand with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/17
     */
    test(tst_con.cgetValidCommand_inValidCommandStringNaN, async () => {
        // Arrange
        D[wrd.cCommands] = {
            [wrd.cname]: (inputData, inputMetaData) => systemCommands.name(inputData, inputMetaData)
        }
        let commandString = NaN;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function countMatchingCommandAlias
 * @description Tests the positive and negative test cases of the countMatchingCommandAlias
 * @author Vlad Sorokin
 * @date 2024/06/19
 */
describe(tst_con.ccountMatchingCommandAlias, () => {
    /**
     * @function countMatchingCommandAlias_validData
     * @description Tests the commandBroker function countMatchingCommandAlias with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_validData, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(1);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasDataString
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = tst_man.ctestString1;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasNameString
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasDataInteger
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = 123;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasDataBoolean
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = false;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasNameInteger
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = 123;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasNameBoolean
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = false;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasDataUndefined
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = undefined;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasDataNaN
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = NaN;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasNameUndefined
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = undefined;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });

    /**
     * @function countMatchingCommandAlias_inValidCommandAliasNameNaN
     * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/19
     */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = NaN;

        // Act
        let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(0);
    });
})

/**
 * @function searchCommandAlias
 * @description Tests the positive and negative test cases of the searchCommandAlias
 * @author Vlad Sorokin
 * @date 2024/06/20
 */
describe(tst_con.csearchCommandAlias, () => {
    /**
     * @function searchCommandAlias_validData
     * @description Tests the commandBroker function searchCommandAlias with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_validData, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toEqual(tst_cbt.testPluginCommandAliasesExpected);
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasDataString
     * @description Tests the commandBroker function searchCommandAlias with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = tst_man.ctestString1;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasNameString
     * @description Tests the commandBroker function searchCommandAlias with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasDataInteger
     * @description Tests the commandBroker function searchCommandAlias with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = 123;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasDataBoolean
     * @description Tests the commandBroker function searchCommandAlias with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = false;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasNameInteger
     * @description Tests the commandBroker function searchCommandAlias with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = 123;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasNameBoolean
     * @description Tests the commandBroker function searchCommandAlias with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = false;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasDataUndefined
     * @description Tests the commandBroker function searchCommandAlias with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = undefined;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasDataNaN
     * @description Tests the commandBroker function searchCommandAlias with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasData = NaN;
        let commandAliasName = bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasNameUndefined
     * @description Tests the commandBroker function searchCommandAlias with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = undefined;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function searchCommandAlias_inValidCommandAliasNameNaN
     * @description Tests the commandBroker function searchCommandAlias with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/20
     */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasData = D[sys.cCommandsAliases];
        let commandAliasName = NaN;

        // Act
        let returnData = await commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function getAllCommandAliasData
 * @description Tests the positive and negative test cases of the getAllCommandAliasData
 * @author Vlad Sorokin
 * @date 2024/06/26
 */
describe(tst_con.cgetAllCommandAliasData, () => {
    /**
     * @function getAllCommandAliasData_validCommandAliasDataStructureData
     * @description Tests the commandBroker function getAllCommandAliasData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_validCommandAliasDataStructureData, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructured = tst_cbt.testPluginCommandAliases;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toEqual([tst_cbt.allTestPluginCommandAliases]);
    });

    /**
     * @function getAllCommandAliasData_inValidCommandAliasDataStructureString
    
     * @description Tests the commandBroker function getAllCommandAliasData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureString, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructured = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getAllCommandAliasData_inValidCommandAliasDataStructureInteger
     * @description Tests the commandBroker function getAllCommandAliasData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureInteger, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructured = 123;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getAllCommandAliasData_inValidCommandAliasDataStructureBoolean
     * @description Tests the commandBroker function getAllCommandAliasData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureBoolean, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructured = false;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getAllCommandAliasData_validCommandAliasDataStructureUndefined
     * @description Tests the commandBroker function getAllCommandAliasData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_validCommandAliasDataStructureUndefined, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructured = undefined;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toEqual([tst_cbt.allTestPluginCommandAliases]);
    });

    /**
     * @function getAllCommandAliasData_inValidCommandAliasDataStructureNaN
     * @description Tests the commandBroker function getAllCommandAliasData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureNaN, async () => {
        // Arrange
        D[sys.cbusinessRules] = {
            [biz.cobjectDeepMerge]: (inputData, inputMetaData) => dataArrayParsing.objectDeepMerge(inputData, inputMetaData)
        };
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructured = NaN;

        // Act
        let returnData = await commandBroker.getAllCommandAliasData(commandAliasDataStructured);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function getCommandNamespaceDataObject
 * @description Tests the positive and negative test cases of the getCommandNamespaceDataObject
 * @author Vlad Sorokin
 * @date 2024/06/27
 */
describe(tst_con.cgetCommandNamespaceDataObject, () => {
    /**
     * @function getCommandNamespaceDataObject_validData
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_validData, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(tst_cbt.testPluginOneCommand01);
    });

    /**
     * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureString
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_man.ctestString1;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidNamespaceToFindString
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureInteger
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = 123;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = false;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidNamespaceToFindInteger
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = 123;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidNamespaceToFindBoolean
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = false;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_validCommandAliasDataStructureUndefined
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_validCommandAliasDataStructureUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandAliasDataStructure = undefined;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(tst_cbt.testPluginOneCommand01);
    });

    /**
     * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureNaN
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = NaN;
        let namespaceToFind = wrd.cName;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidNamespaceToFindUndefined
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = undefined;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandNamespaceDataObject_inValidNamespaceToFindNaN
     * @description Tests the commandBroker function getCommandNamespaceDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/27
     */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = {};
        let commandAliasDataStructure = tst_cbt.testPluginCommandAliases;
        let namespaceToFind = NaN;

        // Act
        let returnData = await commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBeFalsy();
    });
})

/**
 * @function getCommandArgs
 * @description Tests the positive and negative test cases of the getCommandArgs
 * @author Vlad Sorokin
 * @date 2024/06/26
 */
describe(tst_con.cgetCommandArgs, () => {
    /**
     * @function getCommandArgs_validData
     * @description Tests the commandBroker function getCommandArgs with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_validData, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual([tst_cbt.testPluginOneCommand01, tst_cbt.testPluginOneCommand02]);
    });

    /**
     * @function getCommandArgs_inValidCommandStringString
     * @description Tests the commandBroker function getCommandArgs with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandStringString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_man.ctestString1;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandDelimiterString
     * @description Tests the commandBroker function getCommandArgs with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandDelimiterString, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = tst_man.ctestString1;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandStringInteger
     * @description Tests the commandBroker function getCommandArgs with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandStringInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = 123;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandStringBoolean
     * @description Tests the commandBroker function getCommandArgs with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandStringBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = false;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandDelimiterInteger
     * @description Tests the commandBroker function getCommandArgs with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandDelimiterInteger, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = 123;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandDelimiterBoolean
     * @description Tests the commandBroker function getCommandArgs with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandDelimiterBoolean, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = false;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandStringUndefined
     * @description Tests the commandBroker function getCommandArgs with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandStringUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = undefined;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_inValidCommandStringNaN
     * @description Tests the commandBroker function getCommandArgs with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_inValidCommandStringNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = NaN;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBeFalsy();
    });

    /**
     * @function getCommandArgs_validCommandDelimiterUndefined
     * @description Tests the commandBroker function getCommandArgs with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_validCommandDelimiterUndefined, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = undefined;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual([tst_cbt.testPluginOneCommand01, tst_cbt.testPluginOneCommand02]);
    });

    /**
     * @function getCommandArgs_validCommandDelimiterNaN
     * @description Tests the commandBroker function getCommandArgs with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/06/26
     */
    test(tst_con.cgetCommandArgs_validCommandDelimiterNaN, async () => {
        // Arrange
        D[sys.cCommandsAliases] = tst_cbt.testPluginCommandAliases;
        let commandString = tst_cbt.testPluginOneCommand01 + bas.cSpace + tst_cbt.testPluginOneCommand02;
        let commandDelimiter = NaN;

        // Act
        let returnData = await commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual([tst_cbt.testPluginOneCommand01, tst_cbt.testPluginOneCommand02]);
    });
})

/**
 * @function executeCommand
 * @description Tests the positive and negative test cases of the executeCommand
 * @author Vlad Sorokin
 * @date 2024/06/28
 */
describe(tst_con.cexecuteCommand, () => {
    /**
     * @function executeCommand_validCommandStringData
     * @description Tests the commandBroker function executeCommand with a valid input.
     * @author Vlad Sorokin
     * @date 2024/06/28
     */
    test(tst_con.cexecuteCommand_validCommandStringData, async () => {
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
        let returnData = await commandBroker.executeCommand(pluginLoadWithData);

        // Assert
        expect(returnData).toEqual();
    });

    // /**
    //  * @function executeCommand_inValidCommandStringString
    //  * @description Tests the commandBroker function executeCommand with a invalid data string.
    //  * @author Vlad Sorokin
    //  * @date 2024/06/28
    //  */
    // test(tst_con.cexecuteCommand_inValidCommandStringString, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await commandBroker.executeCommand();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function executeCommand_inValidCommandStringInteger
    //  * @description Tests the commandBroker function executeCommand with a invalid data integer.
    //  * @author Vlad Sorokin
    //  * @date 2024/06/28
    //  */
    // test(tst_con.cexecuteCommand_inValidCommandStringInteger, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await commandBroker.executeCommand();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function executeCommand_inValidCommandStringBoolean
    //  * @description Tests the commandBroker function executeCommand with a invalid data boolean.
    //  * @author Vlad Sorokin
    //  * @date 2024/06/28
    //  */
    // test(tst_con.cexecuteCommand_inValidCommandStringBoolean, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await commandBroker.executeCommand();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function executeCommand_inValidCommandStringUndefined
    //  * @description Tests the commandBroker function executeCommand with a invalid data undefined.
    //  * @author Vlad Sorokin
    //  * @date 2024/06/28
    //  */
    // test(tst_con.cexecuteCommand_inValidCommandStringUndefined, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await commandBroker.executeCommand();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });

    // /**
    //  * @function executeCommand_inValidCommandStringNaN
    //  * @description Tests the commandBroker function executeCommand with a invalid data NaN.
    //  * @author Vlad Sorokin
    //  * @date 2024/06/28
    //  */
    // test(tst_con.cexecuteCommand_inValidCommandStringNaN, async () => {
    //     // Arrange
        

    //     // Act
    //     let returnData = await commandBroker.executeCommand();

    //     // Assert
    //     expect(returnData).toBeFalsy();
    // });
})



