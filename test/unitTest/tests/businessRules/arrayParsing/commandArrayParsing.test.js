'use strict'
/* eslint-disable no-undef */
/**
 * @file commandArrayParsing.test.js
 * @module commandArrayParsing.test
 * @description Unit tests for the commandArrayParsing.js
 * @requires module:commandArrayParsing
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
import commandArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/commandArrayParsing.js'
import characterArrayParsing from '../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import characterStringParsing from '../../../../../src/businessRules/rules/stringParsing/characterStringParsing.js'
import fileStringParsing from '../../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import fileOperations from '../../../../../src/businessRules/rules/fileOperations.js';
import stringParsingUtilities from '../../../../../src/businessRules/rules/stringParsingUtilities.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import main from '../../../../../src/main.js';
import D from '../../../../../src/structures/data.js';
import pluginDataFile from '../../../testData/testPlugins/test-plugin-one/structures/pluginData.js'
import * as tst_con from '../../resources/constants/test.constants.js';
import * as tst_thb from '../../../testData/brokers/themeBrokerTest.js'
import * as tst_man from '../../../testData/mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, biz, cfg, msg, sys, wrd} = hayConst;
// Cleaning sequence
for (let key in D) {
    if (D.hasOwnProperty(key)) {
        delete D[key];
    }
}
await rulesLibrary.initRulesLibrary();

// test-plugin-one data
const pluginData = {[wrd.cdata]: pluginDataFile[wrd.cdata]};

