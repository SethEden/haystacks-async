'use strict'
/* eslint-disable no-undef */
/**
 * @file commandBrokerTest.js
 * @module commandBrokerTest
 * @description Unit tests for the commandBroker.js
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:
 * @requires module:test.constants
 * @requires module:
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Vlad Sorokin
 * @date 2024/06/11
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports


// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation.js';
import url from 'url';
import path from 'path';

const { bas, cmd, biz, cfg, fnc, gen, msg, sys, wrd, num } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.main.test.
const namespacePrefix = wrd.cframework + bas.cDot + baseFileName + bas.cDot;
let rootPath = '';