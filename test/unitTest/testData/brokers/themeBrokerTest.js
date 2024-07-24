/**
 * @file pluginBrokerTest.js
 * @module pluginBrokerTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/07/09
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../mainTest.js';
import * as tst_man from '../mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';
import { getRandomValues } from 'crypto';

const {bas, biz, cmd, cfg, gen, msg, num, phn, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

// Paths
export const cpathToTestPluginThemesFolder = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.ctest + wrd.cPlugins + bas.cBackSlash + tst_man.ctestPluginOne + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cthemes // 'C:/haystacks-async/test/unitTest/testData/testPlugins/test-plugin-one/resources/themes'


// Expected data
export const cexpectedJsonDataFromTestPluginsThemesFolder = [{[wrd.cName]: wrd.cDefault, [wrd.cPath]: cpathToTestPluginThemesFolder + bas.cBackSlash + wrd.cDefault}]// [{"Name": "Default", "Path": "C:\\haystacks-async\\test\\unitTest\\testData\\testPlugins\\test-plugin-one\\resources\\themes\\Default"}]