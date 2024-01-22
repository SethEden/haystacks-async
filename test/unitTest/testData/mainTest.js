/**
 * @file mainTest.js
 * @module mainTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import { numericConstantsValidation } from '@haystacks/constants/src/constantsValidation/numeric.constants.validation.js';
import * as tst_cfg from '../tests/constants/test.configuration.constants.js';
import * as tst_con from '../tests/constants/test.constants.js';
import * as tst_sys from '../tests/constants/test.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';
import fileOperations from '../../../src/businessRules/rules/fileOperations.js';

const {bas, biz, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

//
export const ctestString1 = bas.cdf + bas.cxg + num.c243 + num.c46 + bas.cdf + bas.cg; // dfxg24346dfg

export const initFrameworkObjectInput = {
    [tst_cfg.cFrameworkName]: tst_cfg.cFrameworkNameInputValue,
    [tst_cfg.cclientRootPath]: tst_cfg.cclientRootPathInputValue,
    [tst_cfg.cappConfigResourcesPath]: tst_cfg.cappConfigResourcesPathInputValue,
    [tst_cfg.cappConfigReferencePath]: tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cclientMetaDataPath]: tst_cfg.cclientMetaDataPathInputValue,
    [tst_cfg.cclientCommandAliasesPath]: tst_cfg.cclientCommandAliasesPathInputValue,
    [tst_cfg.cclientConstantsPath]: tst_cfg.cclientConstantsPathInputValue,
    [tst_cfg.cclientRegisteredPlugins]: tst_cfg.cclientRegisteredPluginsInputValue,
    [tst_cfg.cclientWorkflowsPath]: tst_cfg.cclientWorkflowsPathInputValue,
    [tst_cfg.cclientThemesPath]: tst_cfg.cclientThemesPathInputValue,
    [tst_cfg.cclientBusinessRules]: {},
    [tst_cfg.cclientCommands]: {}
};

export const initFrameworkObjectExpected = {
    [tst_cfg.cFrameworkName]: tst_cfg.cFrameworkNameInputValue,
    [tst_cfg.cappConfigPath]: tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cappConfigReferencePath]: tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cappConfigResourcesPath]: tst_cfg.cappConfigResourcesPathInputValue,
    [tst_cfg.cclientMetaDataPath]: tst_cfg.cclientMetaDataPathChangedExpectedValue1,
    [tst_cfg.cclientBusinessRules]: {},
    [tst_cfg.cclientCommandAliasesPath]: tst_cfg.cclientCommandAliasesPathInputValue,
    [tst_cfg.cclientCommands]: {},
    [tst_cfg.cclientConstantsPath]: tst_cfg.cclientConstantsPathInputValue,
    [tst_cfg.cclientMetaDataPath]: tst_cfg.cclientMetaDataPathChangedExpectedValue2,
    [tst_cfg.cclientRegisteredPlugins]: tst_cfg.cclientRegisteredPluginsInputValue,
    [tst_cfg.cclientRootPath]: tst_cfg.cclientRootPathInputValue,
    [tst_cfg.cclientThemesPath]: tst_cfg.cclientThemesPathInputValue,
    [tst_cfg.cclientWorkflowsPath]: tst_cfg.cclientWorkflowsPathInputValue,
    [tst_cfg.cframeworkCommandAliasesPath]: tst_cfg.cframeworkCommandAliasesPathExpectedValue,
    [tst_cfg.cframeworkConfigPath]: tst_cfg.cframeworkConfigPathExpectedValue,
    [tst_cfg.cframeworkConstantsPath]: tst_cfg.cframeworkConstantsPathExpectedLinkedValue,
    // NOTE: Look at the initFramework_validData note in unit test header.
    // [tst_cfg.cframeworkConstantsPath]: tst_cfg.cframeworkConstantsPathExpectedUnlinkedValue,
    [tst_cfg.cframeworkFullMetaDataPath]: tst_cfg.cframeworkFullMetaDataPathExpectedValue,
    [tst_cfg.cframeworkResourcesPath]: tst_cfg.cframeworkResourcesPathExpectedValue,
    [tst_cfg.cframeworkRootPath]: tst_cfg.cframeworkRootPathExpectedValue,
    [tst_cfg.cframeworkThemesPath]: tst_cfg.cframeworkThemesPathExpectedValue,
    [tst_cfg.cframeworkWorkflowsPath]: tst_cfg.cframeworkWorkflowsPathExpectedValue,
    [tst_cfg.cpluginCommandAliasesPath]: tst_cfg.cpluginCommandAliasesPathExpectedValue,
    [tst_cfg.cpluginFullMetaDataPath]: tst_cfg.cpluginFullMetaDataPathExpectedValue,
    [tst_cfg.cpluginReleaseResourcesPath]: tst_cfg.cpluginReleaseResourcesPathExpectedValue,
    [tst_cfg.cpluginResourcesPath]: tst_cfg.cpluginResourcesPathExpectedValue,
    [tst_cfg.cpluginRootPath]: bas.cDot,
    [tst_cfg.cpluginWorkflowsPath]: tst_cfg.cpluginWorkflowsPathExpectedValue,
};

export const listAllPluginsInRegistry = {
    [wrd.cplugins]: [{
            [tst_sys.cplugin_one]: {
                [wrd.cName]: tst_sys.cplugin_one,
                [wrd.cPath]: gen.cCroot + wrd.chay + wrd.cPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_one + bas.cDoubleBackSlash
            }
        }, {
            [tst_sys.cplugin_three]: {
                [wrd.cName]: tst_sys.cplugin_three,
                [wrd.cPath]: gen.cCroot + wrd.chay + wrd.cPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_three + bas.cDoubleBackSlash
            }
        }, {
            [tst_sys.cplugin_two]: {
                [wrd.cName]: tst_sys.cplugin_two,
                [wrd.cPath]: gen.cCroot + wrd.chay + wrd.cPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_two + bas.cDoubleBackSlash
            }
        }
    ]
};

export const listAllPluginsInRegistryExpected = [tst_sys.cplugin_one, tst_sys.cplugin_three, tst_sys.cplugin_two];
export const pluginsPath = gen.cCroot + wrd.chay + wrd.cPlugins;
export const pluginsPathObject = {[wrd.cpath]: pluginsPath};
export const listLoadedPlugins = [[tst_sys.cplugin_one, true], [tst_sys.cplugin_three, true], [tst_sys.cplugin_two, true]];
export const expectedListLoadedPlugins = [tst_sys.cplugin_one, tst_sys.cplugin_three, tst_sys.cplugin_two];
export const listAllPluginsInRegistryBusinessRule = {[biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData)};
export const pluginNameToUse = tst_sys.cplugin_one;

/**
 * @function testHelloWorld
 * @description Function made to be used for unit testing as a business rule data.
 * @return {string} Returns a string for unit test use.
 * @author Vlad Sorokin
 * @date 2023/01/02
 */
async function testHelloWorld() {
    let functionName = testHelloWorld.name;
    console.log(`BEGIN ${namespacePrefix}${bas.cDot}${functionName} function`);
    let returnData = wrd.chello + bas.cSpace + wrd.cWorld;
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${bas.cDot}${functionName} function`);
    return returnData;
}

export const testBusinessRulesLibrary = {
    [tst_con.ctestHelloWorld]: () => testHelloWorld()
};
