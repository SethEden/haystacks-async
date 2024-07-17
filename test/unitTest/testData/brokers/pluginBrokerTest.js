/**
 * @file dataBrokerTest.js
 * @module dataBrokerTest
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

const {bas, biz, cmd, cfg, gen, msg, num, phn, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

// Paths
export const cpathToUnitTestPluginsJsonFile = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cplugins + bas.cBackSlash + wrd.cplugins + gen.cDotjson; // C:\haystacks-async\test\unitTest\testData\resources\plugins\plugins.json
export const cpathToTestPluginsFolder = rootPathAsync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.ctest + wrd.cPlugins


// Expected data
export const cexpectedDataFromPluginsJsonFile = {
    [wrd.cpath]: cpathToTestPluginsFolder,
    [wrd.cplugins]: [{
            [tst_man.ctestPluginOne]: {
                [wrd.cName]: tst_man.ctestPluginOne,
                [wrd.cPath]: tst_man.testPluginPath
            }
        }
    ]
}; // {"path": "C:/haystacks-async/test/unitTest/testData/testPlugins", "plugins": [{"test-plugin-one": {"Name": "test-plugin-one", "Path": "C:\\haystacks-async\\test\\unitTest\\testData\\testPlugins\\test-plugin-one"}}]}
export const cexpectedDataFromTestPluginOnePackageJsonFile = {
    [wrd.cname]: tst_man.ctestPluginOne,
    [wrd.cversion]: num.c0 + bas.cDot + num.c0 + bas.cDot + num.c1,
    [wrd.cmain]: bas.cDot + bas.cForwardSlash + wrd.cmain + bas.cDot + gen.cjs
}
