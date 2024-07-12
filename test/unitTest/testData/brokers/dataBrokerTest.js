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

export const cunitTestData = wrd.cunit + wrd.cTest + wrd.cData; // unitTestData

// Paths
export const cpathForUnitTestingData = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.ctest + wrd.cFolder; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\testFolder
export const cexpectedPathForUnitTestData = cpathForUnitTestingData + bas.cForwardSlash + wrd.cempty + wrd.cFile + wrd.cFor + wrd.cTest + bas.cDot + bas.cjs; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\testFolder/emptyFileForTest.js
export const cpathToUnitTestApplicationDebugSettings = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctestData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cfake + wrd.cTest + wrd.cDebug + wrd.cSettings + bas.cBackSlash + wrd.capp + wrd.cDebug + wrd.cSettings + bas.cBackSlash + wrd.capplication + bas.cDot + wrd.csystem + gen.cDotjson; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\fakeTestDebugSettings\\appDebugSettings\\application.system.json
export const cpathToUnitTestFrameworkDebugSettings = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctestData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cfake + wrd.cTest + wrd.cDebug + wrd.cSettings + bas.cBackSlash + wrd.cframework + wrd.cDebug + wrd.cSettings + bas.cBackSlash + wrd.cframework + bas.cDot + wrd.csystem + gen.cDotjson; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\fakeTestDebugSettings\\frameworkDebugSettings\\framework.system.json
export const cpathToBasicCsvFile = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cgeneric + bas.cBackSlash + wrd.cbasic + wrd.cTest + gen.cDotcsv; // C:\haystacks-async\test\unitTest\testData\generic\basicTest.csv
export const cpathToSystemXmlFile = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cgeneric + bas.cBackSlash + wrd.csystem + gen.cDotxml; // C:\haystacks-async\test\unitTest\testData\generic\system.xml
export const cpathToJsonTestFile = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctestData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + gen.cjson + wrd.cTest + wrd.cData + bas.cBackSlash + bas.cForwardSlash + gen.cjson + wrd.cTest + wrd.cFile + gen.cDotjson; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\jsonTestData\\/jsonTestFile.json

// Expected data
export const cexpectedDataFromBasicCsv = {
    [cunitTestData]: {
        [num.c0]: {
            [wrd.cPage + wrd.cName]: wrd.cPage + bas.cUnderscore + wrd.cHome + wrd.cPublic,
            [wrd.cElement + wrd.cName]: gen.cURL,
            [wrd.cAction + wrd.cOverride]: wrd.cDefault
        },
    },
}; // cunitTestData: {[num.c0]: {[wrd.cAction + wrd.cOverride]: wrd.cDefault, {[wrd.cElement + wrd.cName]: gen.cURL, [wrd.cPage + wrd.cName]: wrd.cPage + bas.cUnderscore + wrd.cHome + wrd.cPublic}}};
export const cexpectedDataFromSystemXmlFile = {
    [wrd.csystem]: [{
            [wrd.csystem]: [{
                    [wrd.capplication + wrd.cDetails]: wrd.ccommand + wrd.cSequencer + bas.cSpace + wrd.cname + bas.cComa + wrd.capplication + bas.cSpace + wrd.cversion + bas.cSpace + wrd.cabout,
                    [wrd.cdetails]: wrd.ccommand + wrd.cSequencer + bas.cSpace + wrd.cname + bas.cComa + wrd.capplication + bas.cSpace + wrd.cversion + bas.cSpace + wrd.cabout,
                    [wrd.cframework + wrd.cDetails]: wrd.ccommand + wrd.cSequencer + bas.cSpace + wrd.cname + bas.cComa + wrd.cframework + bas.cComa + gen.ctrue + bas.cSpace + wrd.cversion + bas.cComa + wrd.cframework + bas.cSpace + wrd.cabout + bas.cComa + wrd.cframework,
                    [wrd.cstartup]: wrd.ccommand + wrd.cSequencer + bas.cSpace + wrd.cname + bas.cComa + wrd.capplication + bas.cComa + gen.ctrue + bas.cSpace + wrd.cversion + bas.cSpace + wrd.cabout,
                    [wrd.csystem]: gen.ccmd + phn.cSeq + bas.cSpace + bas.cwr + bas.ckf + bas.clo + bas.cComa + wrd.cstartup + bas.cSpace + bas.cwr + bas.ckf + bas.clo + bas.cComa + wrd.cdetails + bas.cSpace + bas.cwr + bas.ckf + bas.clo + bas.cComa + wrd.capplication + wrd.cDetails + bas.cSpace + bas.cwr + bas.ckf + bas.clo + bas.cComa + wrd.cframework + wrd.cDetails
                }
            ]
        }
    ]
}
export const cexpectedDataFromJsonTestFile = {
    [wrd.csystem + bas.cDot + wrd.cargument + wrd.cDriven + wrd.cInterface]: false,
    [wrd.csystem + bas.cDot + wrd.cdebug + wrd.cSettings]: true,
    [wrd.csystem + bas.cDot + wrd.cfiglet + wrd.cFont]: wrd.cStar + bas.cSpace + wrd.cWars
} // {"system.argumentDrivenInterface": false, "system.debugSettings": true, "system.figletFont": "Star Wars"}