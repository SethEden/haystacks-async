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
import * as tst_cfg from '../tests/constants/test.configuration.constants.js';


// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
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