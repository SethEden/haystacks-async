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
import commandBroker from '../../../../src/brokers/commandBroker.js'
import dataArrayParsing from '../../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js';
import fileOperations from '../../../../src/businessRules/rules/fileOperations.js';
import warden from '../../../../src/controllers/warden.js'
import pluginCommandsLibrary from '../../testData/testPlugins/test-plugin-one/commandsBlob/commandsLibrary.js'
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
        let pluginCommandAliases = {
            "CommandsAliases": {
                "system": [{
                    "testPluginOneCommand01": {
                        "Name": "testPluginOneCommand01",
                        "Aliases": "tstPluginOneCommand01,tstPluginOneComnd01",
                        "Description": "The first demo command as part of test-plugin-one."
                    },
                    "testPluginOneCommand02": {
                        "Name": "testPluginOneCommand02",
                        "Aliases": "tstPluginOneCommand02,tstPluginOneComnd02",
                        "Description": "The second demo command as part of test-plugin-one."
                    }
                }]
            }
        };

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
        let pluginCommandAliases = {
            "CommandsAliases": {
                "system": [{
                    "testPluginOneCommand01": {
                        "Name": "testPluginOneCommand01",
                        "Aliases": "tstPluginOneCommand01,tstPluginOneComnd01",
                        "Description": "The first demo command as part of test-plugin-one."
                    },
                    "testPluginOneCommand02": {
                        "Name": "testPluginOneCommand02",
                        "Aliases": "tstPluginOneCommand02,tstPluginOneComnd02",
                        "Description": "The second demo command as part of test-plugin-one."
                    }
                }]
            }
        };

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
        let pluginCommandAliases = {
            "CommandsAliases": {
                "system": [{
                    "testPluginOneCommand01": {
                        "Name": "testPluginOneCommand01",
                        "Aliases": "tstPluginOneCommand01,tstPluginOneComnd01",
                        "Description": "The first demo command as part of test-plugin-one."
                    },
                    "testPluginOneCommand02": {
                        "Name": "testPluginOneCommand02",
                        "Aliases": "tstPluginOneCommand02,tstPluginOneComnd02",
                        "Description": "The second demo command as part of test-plugin-one."
                    }
                }]
            }
        };

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
        let pluginCommandAliases = {
            "CommandsAliases": {
                "system": [{
                    "testPluginOneCommand01": {
                        "Name": "testPluginOneCommand01",
                        "Aliases": "tstPluginOneCommand01,tstPluginOneComnd01",
                        "Description": "The first demo command as part of test-plugin-one."
                    },
                    "testPluginOneCommand02": {
                        "Name": "testPluginOneCommand02",
                        "Aliases": "tstPluginOneCommand02,tstPluginOneComnd02",
                        "Description": "The second demo command as part of test-plugin-one."
                    }
                }]
            }
        };

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
        let pluginCommandAliases = {
            "CommandsAliases": {
                "system": [{
                    "testPluginOneCommand01": {
                        "Name": "testPluginOneCommand01",
                        "Aliases": "tstPluginOneCommand01,tstPluginOneComnd01",
                        "Description": "The first demo command as part of test-plugin-one."
                    },
                    "testPluginOneCommand02": {
                        "Name": "testPluginOneCommand02",
                        "Aliases": "tstPluginOneCommand02,tstPluginOneComnd02",
                        "Description": "The second demo command as part of test-plugin-one."
                    }
                }]
            }
        };

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

// /**
//  * @function countMatchingCommandAlias
//  * @description Tests the positive and negative test cases of the countMatchingCommandAlias
//  * @author Vlad Sorokin
//  * @date 2024/06/19
//  */
// describe(tst_con.ccountMatchingCommandAlias, () => {
//     /**
//      * @function countMatchingCommandAlias_validData
//      * @description Tests the commandBroker function countMatchingCommandAlias with a valid input.
//      * @author Vlad Sorokin
//      * @date 2024/06/19
//      */
//     test(tst_con.ccountMatchingCommandAlias_validData, async () => {
//         // Arrange
        
//         let commandAliasData = {["Aliases"]: "tstPluginOneCommand01,tstPluginOneComnd01"};
//         let commandAliasName = 'tstPluginOneCommand01';

//         // Act
//         let returnData = await commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

//         // Assert
//         expect(returnData).toEqual();
//     });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasDataString
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data string.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataString, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasNameString
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data string.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameString, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasDataInteger
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data integer.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataInteger, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasDataBoolean
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data boolean.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataBoolean, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasNameInteger
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data integer.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameInteger, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasNameBoolean
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data boolean.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameBoolean, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasDataUndefined
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data undefined.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataUndefined, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasDataNaN
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data NaN.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataNaN, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasNameUndefined
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data undefined.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameUndefined, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });

//     // /**
//     //  * @function countMatchingCommandAlias_inValidCommandAliasNameNaN
//     //  * @description Tests the commandBroker function countMatchingCommandAlias with a invalid data NaN.
//     //  * @author Vlad Sorokin
//     //  * @date 2024/06/19
//     //  */
//     // test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameNaN, async () => {
//     //     // Arrange
        

//     //     // Act
//     //     let returnData = await commandBroker.countMatchingCommandAlias();

//     //     // Assert
//     //     expect(returnData).toBeFalsy();
//     // });
// })


