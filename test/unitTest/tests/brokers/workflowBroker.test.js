'use strict'
/* eslint-disable no-undef */
/**
 * @file workflowBroker.test.js
 * @module workflowBroker.test
 * @description Unit tests for the workflowBroker.js
 * @requires module:workflowBroker
 * @requires module:characterArrayParsing
 * @requires module:characterStringParsing
 * @requires module:fileStringParsing
 * @requires module:fileOperations
 * @requires module:stringParsingUtilities
 * @requires module:main
 * @requires module:D
 * @requires module:pluginData
 * @requires module:test.constants
 * @requires module:workflowBrokerTest
 * @requires module:mainTest
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/07/23
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import workflowBroker from '../../../../src/brokers/workflowBroker.js'
import D from '../../../../src/structures/data.js';
import pluginDataFile from '../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../resources/constants/test.constants.js';
import * as tst_thb from '../../testData/brokers/themeBrokerTest.js'
import * as tst_man from '../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const {cfg, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};


/**
 * @function addPluginWorkflows
 * @description Tests the positive and negative test cases of the addPluginWorkflows
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.caddPluginWorkflows, () => {
    /**
     * @function addPluginWorkflows_validData
     * @description Tests the workflowBroker function addPluginWorkflows with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function addPluginWorkflows_inValidPluginWorkflowsString
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginWorkflowsString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginNameInteger
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = 123;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginNameBoolean
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = false;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginWorkflowsInteger
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginWorkflowsInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = 123;

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginWorkflowsBoolean
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginWorkflowsBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = false;

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginNameUndefined
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = undefined;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginNameNaN
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = NaN;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginWorkflowsUndefined
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginWorkflowsUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = undefined;

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function addPluginWorkflows_inValidPluginWorkflowsNaN
     * @description Tests the workflowBroker function addPluginWorkflows with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.caddPluginWorkflows_inValidPluginWorkflowsNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = NaN;

        // Act
        let returnData = await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getWorkflow
 * @description Tests the positive and negative test cases of the getWorkflow
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cgetWorkflow, () => {
    /**
     * @function getWorkflow_validWorkflowNameData
     * @description Tests the workflowBroker function getWorkflow with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_validWorkflowNameData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedDataFromTestPluginOneWorkflow);
    });

    /**
     * @function getWorkflow_inValidWorkflowNameString
     * @description Tests the workflowBroker function getWorkflow with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_inValidWorkflowNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflow_inValidWorkflowNameInteger
     * @description Tests the workflowBroker function getWorkflow with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_inValidWorkflowNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = 123;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflow_inValidWorkflowNameBoolean
     * @description Tests the workflowBroker function getWorkflow with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_inValidWorkflowNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = false;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflow_inValidWorkflowNameUndefined
     * @description Tests the workflowBroker function getWorkflow with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_inValidWorkflowNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = undefined;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflow_inValidWorkflowNameNaN
     * @description Tests the workflowBroker function getWorkflow with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflow_inValidWorkflowNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = NaN;

        // Act
        let returnData = await workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function doesWorkflowExist
 * @description Tests the positive and negative test cases of the doesWorkflowExist
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cdoesWorkflowExist, () => {
    /**
     * @function doesWorkflowExist_validWorkflowNameData
     * @description Tests the workflowBroker function doesWorkflowExist with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_validWorkflowNameData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesWorkflowExist_inValidWorkflowNameString
     * @description Tests the workflowBroker function doesWorkflowExist with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_inValidWorkflowNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExist_inValidWorkflowNameInteger
     * @description Tests the workflowBroker function doesWorkflowExist with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_inValidWorkflowNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = 123;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExist_inValidWorkflowNameBoolean
     * @description Tests the workflowBroker function doesWorkflowExist with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_inValidWorkflowNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = false;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExist_inValidWorkflowNameUndefined
     * @description Tests the workflowBroker function doesWorkflowExist with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_inValidWorkflowNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = undefined;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExist_inValidWorkflowNameNaN
     * @description Tests the workflowBroker function doesWorkflowExist with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExist_inValidWorkflowNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowName = NaN;

        // Act
        let returnData = await workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function doesWorkflowExistInWorkflowData
 * @description Tests the positive and negative test cases of the doesWorkflowExistInWorkflowData
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cdoesWorkflowExistInWorkflowData, () => {
    /**
     * @function doesWorkflowExistInWorkflowData_validData
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataString
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = tst_man.ctestString1;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameString
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataInteger
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = 123;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = false;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameInteger
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = 123;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = false;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = undefined;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataNaN
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = NaN;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = undefined;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameNaN
     * @description Tests the workflowBroker function doesWorkflowExistInWorkflowData with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowData = D[sys.cCommandWorkflows];
        let workflowName = NaN;

        // Act
        let returnData = await workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function searchWorkflow
 * @description Tests the positive and negative test cases of the searchWorkflow
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.csearchWorkflow, () => {
    /**
     * @function searchWorkflow_validData
     * @description Tests the workflowBroker function searchWorkflow with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedDataFromTestPluginOneWorkflow);
    });

    /**
     * @function searchWorkflow_inValidAllWorkflowsString
     * @description Tests the workflowBroker function searchWorkflow with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidAllWorkflowsString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = tst_man.ctestString1;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidWorkflowNameString
     * @description Tests the workflowBroker function searchWorkflow with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidWorkflowNameString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidAllWorkflowsInteger
     * @description Tests the workflowBroker function searchWorkflow with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidAllWorkflowsInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = 123;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidAllWorkflowsBoolean
     * @description Tests the workflowBroker function searchWorkflow with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidAllWorkflowsBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = false;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidWorkflowNameInteger
     * @description Tests the workflowBroker function searchWorkflow with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidWorkflowNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = 123;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidWorkflowNameBoolean
     * @description Tests the workflowBroker function searchWorkflow with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidWorkflowNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = false;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidAllWorkflowsUndefined
     * @description Tests the workflowBroker function searchWorkflow with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidAllWorkflowsUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = undefined;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidAllWorkflowsNaN
     * @description Tests the workflowBroker function searchWorkflow with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidAllWorkflowsNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = NaN;
        let workflowName = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidWorkflowNameUndefined
     * @description Tests the workflowBroker function searchWorkflow with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidWorkflowNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = undefined;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function searchWorkflow_inValidWorkflowNameNaN
     * @description Tests the workflowBroker function searchWorkflow with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.csearchWorkflow_inValidWorkflowNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let allWorkflows = D[sys.cCommandWorkflows];
        let workflowName = NaN;

        // Act
        let returnData = await workflowBroker.searchWorkflow(allWorkflows, workflowName);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function getAllWorkflows
 * @description Tests the positive and negative test cases of the getAllWorkflows
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cgetAllWorkflows, () => {
    /**
     * @function getAllWorkflows_validWorkflowDataStructureData
     * @description Tests the workflowBroker function getAllWorkflows with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_validWorkflowDataStructureData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual([tst_thb.ctestPluginOneWorkflow]);
    });

    /**
     * @function getAllWorkflows_inValidWorkflowDataStructureString
     * @description Tests the workflowBroker function getAllWorkflows with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_inValidWorkflowDataStructureString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getAllWorkflows_inValidWorkflowDataStructureInteger
     * @description Tests the workflowBroker function getAllWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_inValidWorkflowDataStructureInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = 123;

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getAllWorkflows_inValidWorkflowDataStructureBoolean
     * @description Tests the workflowBroker function getAllWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_inValidWorkflowDataStructureBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = false;

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getAllWorkflows_validWorkflowDataStructureUndefined
     * @description Tests the workflowBroker function getAllWorkflows with a valid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_validWorkflowDataStructureUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = undefined;

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual([tst_thb.ctestPluginOneWorkflow]);
    });

    /**
     * @function getAllWorkflows_validWorkflowDataStructureNaN
     * @description Tests the workflowBroker function getAllWorkflows with a valid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetAllWorkflows_validWorkflowDataStructureNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = NaN;

        // Act
        let returnData = await workflowBroker.getAllWorkflows(workflowDataStructure);

        // Assert
        expect(returnData).toEqual(false);
    });
})


/**
 * @function getWorkflowNamespaceDataObject
 * @description Tests the positive and negative test cases of the getWorkflowNamespaceDataObject
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cgetWorkflowNamespaceDataObject, () => {
    /**
     * @function getWorkflowNamespaceDataObject_validData
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_validData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedDataFromTestPluginOneWorkflow);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = tst_man.ctestString1;
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindString
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data string.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = tst_man.ctestString1;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = 123;
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = false;
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindInteger
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = 123;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = false;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a valid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = undefined;
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(tst_thb.cexpectedDataFromTestPluginOneWorkflow);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = NaN;
        let namespaceToFind = tst_thb.ctestPluginOneWorkflow;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = undefined;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindNaN
     * @description Tests the workflowBroker function getWorkflowNamespaceDataObject with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        let workflowDataStructure = D[sys.cCommandWorkflows][wrd.cPlugins];
        let namespaceToFind = NaN;

        // Act
        let returnData = await workflowBroker.getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(false);
    });
})

/**
 * @function removePluginWorkflows
 * @description Tests the positive and negative test cases of the removePluginWorkflows
 * @author Vlad Sorokin
 * @date 2024/07/29
 */
describe(tst_con.cremovePluginWorkflows, () => {
    /**
     * @function removePluginWorkflows_validPluginNameData
     * @description Tests the workflowBroker function removePluginWorkflows with a valid input.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cremovePluginWorkflows_validPluginNameData, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        D[sys.cpluginsLoaded] = [[pluginName, true]];
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        pluginName = tst_man.ctestPluginOne;

        // Act
        let returnData = await workflowBroker.removePluginWorkflows(pluginName);

        // Assert
        expect(returnData).toEqual(true);
    });

    /**
     * @function removePluginWorkflows_inValidPluginNameInteger
     * @description Tests the workflowBroker function removePluginWorkflows with a invalid data integer.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cremovePluginWorkflows_inValidPluginNameInteger, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        pluginName = 123;

        // Act
        let returnData = await workflowBroker.removePluginWorkflows(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginWorkflows_inValidPluginNameBoolean
     * @description Tests the workflowBroker function removePluginWorkflows with a invalid data boolean.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cremovePluginWorkflows_inValidPluginNameBoolean, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        pluginName = false;

        // Act
        let returnData = await workflowBroker.removePluginWorkflows(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginWorkflows_inValidPluginNameUndefined
     * @description Tests the workflowBroker function removePluginWorkflows with a invalid data undefined.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cremovePluginWorkflows_inValidPluginNameUndefined, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        pluginName = undefined;

        // Act
        let returnData = await workflowBroker.removePluginWorkflows(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
     * @function removePluginWorkflows_inValidPluginNameNaN
     * @description Tests the workflowBroker function removePluginWorkflows with a invalid data NaN.
     * @author Vlad Sorokin
     * @date 2024/07/29
     */
    test(tst_con.cremovePluginWorkflows_inValidPluginNameNaN, async () => {
        // Arrange
        D[sys.cpluginsLoaded] = {};
        D[cfg.cpluginRegistry] = {};
        D[sys.cbusinessRules] = {};
        D[sys.cCommandsAliases] = {};
        D[sys.cCommandWorkflows] = {};
        D[wrd.cThemes] = {};
        D[sys.cpluginsLoaded] = [{}];
        D[wrd.cCommands] = {};
        let pluginName = tst_man.ctestPluginOne;
        let pluginWorkflows = pluginData[wrd.cdata][sys.cCommandWorkflows];
        await workflowBroker.addPluginWorkflows(pluginName, pluginWorkflows);

        pluginName = NaN;

        // Act
        let returnData = await workflowBroker.removePluginWorkflows(pluginName);

        // Assert
        expect(returnData).toEqual(false);
    });
})










































