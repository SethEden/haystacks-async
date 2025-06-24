/**
 * @file constantStringParsing.js
 * @module constantStringParsing
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2025/06/23
 * @copyright Copyright © 2025-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../../mainTest.js';

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

export const ctestConstant = wrd.ctest + wrd.cConstant; // testConstant
export const cctestContant = bas.cc + ctestConstant; // ctestConstant
export const cctv = bas.ctc + bas.cv; // ctv
export const cTestConstantsValidation = wrd.cTest + sys.cConstantsValidation; // TestConstantsValidation
export const ctestConstantFileJs = wrd.ctest + bas.cDot + wrd.cconstant + bas.cDot + wrd.cfile + bas.cDot + bas.cjs; // test.constant.file.js

// Expected data
export const cconstantValidationForTestConstant = {
    [wrd.cName]: cctestContant,
    [wrd.cActual]: ctestConstant,
    [wrd.cExpected]: ctestConstant
}; // {Name: 'ctestConstant', Actual: tcv.ctestConstant, Expected: 'testConstant'}

export const cconstantValidationForTestConstantAsString = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + cctestContant + bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + cctv + bas.cDot + cctestContant + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + bas.cSingleQuote + ctestConstant + bas.cSingleQuote + bas.cCloseCurlyBrace; // {"Name":"ctestConstant","Actual":"testConstant","Expected":"testConstant"}

// Paths
export const cpathToTestConstantFile = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cconstants + wrd.cValidation + bas.cBackSlash + ctestConstantFileJs; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\constantsValidation\\test.constant.file.js

// Data
export const cconstantsValidationForTestFile = {
    [wrd.cFramework]: {
        [sys.cConstantsShortNames]: {
            [cTestConstantsValidation]: cctv
        },
        [sys.cConstantsFileNames]: {
            [cTestConstantsValidation]: ctestConstantFileJs
        },
        [sys.cConstantsPrefix]: {
            [cTestConstantsValidation]: cctv + bas.cDot
        },
        [sys.cConstantsFilePaths]: {
            [cTestConstantsValidation]: cpathToTestConstantFile
        },
        [sys.cConstantsPhase1ValidationMessages]: {
            [cTestConstantsValidation]: wrd.cTest + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation
        },
        [sys.cConstantsPhase2ValidationMessages]: {
            [cTestConstantsValidation]: wrd.cTest + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation
        },
        [cTestConstantsValidation]: [{
            [wrd.cName]: cctestContant,
            [wrd.cActual]: ctestConstant,
            [wrd.cExpected]: ctestConstant
        }]
    }
};

