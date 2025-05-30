
/**
 * @file dataArrayParsingTest.js
 * @module dataArrayParsingTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/07/09
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

export const testObject1 = {[wrd.cname]: wrd.chello, [wrd.cage]: 30}; // {"name": "hello", "age": 30} 
export const testObject2 = {[wrd.cage]: 25, city: wrd.ctest}; // {"age": 25, "city": "test"} 
export const testObject1and2 = {[wrd.cname]: wrd.chello, [wrd.cage]: 25, city: wrd.ctest}; // {"name": "hello", "age": 25, "city": "test"} 
export const testObject3 = {
    id: 1,
    name: wrd.ctest,
    active: true,
};
export const testObject4 = {
    category: wrd.cBasic,
    createdBy: wrd.cSystem,
};
export const testObject3and4 = {
    category: wrd.cBasic,
    createdBy: wrd.cSystem,
    id: 1,
    name: wrd.ctest,
    active: true,
};