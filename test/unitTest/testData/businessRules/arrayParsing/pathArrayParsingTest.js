/**
 * @file pathArrayParsingTest.js
 * @module pathArrayParsingTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2025/05/29
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../../mainTest.js';
import * as tst_man from '../../mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';

const {bas, biz, clr, cmd, cfg, gen, msg, num, phn, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

export const cexpectedPathToTestFolder = cpathForTestFolder + bas.cForwardSlash; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\testFolder/emptyFileForTest.js

