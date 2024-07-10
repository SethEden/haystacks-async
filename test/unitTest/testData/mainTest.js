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
import * as tst_cfg from '../tests/resources/constants/test.configuration.constants.js';
import * as tst_con from '../tests/resources/constants/test.constants.js';
import * as tst_sys from '../tests/resources/constants/test.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import fileOperations from '../../../src/businessRules/rules/fileOperations.js';
import url from 'url';
import path from 'path';


const {bas, biz, cmd, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

export const ctestPluginOne = wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone; // test-plugin-one

export const ctestString1 = bas.cdf + bas.cxg + num.c243 + num.c46 + bas.cdf + bas.cg; // dfxg24346dfg

export const initFrameworkObjectInput = {
    [tst_cfg.cFrameworkName]: tst_cfg.cFrameworkNameInputValue,
    [tst_cfg.cclientRootPath]: rootPathAsync,
    [tst_cfg.cappConfigResourcesPath]: rootPathAsync + tst_cfg.cappConfigResourcesPathInputValue,
    [tst_cfg.cappConfigReferencePath]: rootPathAsync + tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cclientMetaDataPath]: tst_cfg.cclientMetaDataPathInputValue,
    [tst_cfg.cclientCommandAliasesPath]: tst_cfg.cclientCommandAliasesPathInputValue,
    [tst_cfg.cclientConstantsPath]: rootPathAsync + tst_cfg.cclientConstantsPathInputValue,
    [tst_cfg.cclientRegisteredPlugins]: rootPathAsync + tst_cfg.cclientRegisteredPluginsInputValue,
    [tst_cfg.cclientWorkflowsPath]: rootPathAsync + tst_cfg.cclientWorkflowsPathInputValue,
    [tst_cfg.cclientThemesPath]: rootPathAsync + tst_cfg.cclientThemesPathInputValue,
    [tst_cfg.cclientBusinessRules]: {},
    [tst_cfg.cclientCommands]: {}
};

export const initFrameworkObjectExpected = {
    [tst_cfg.cFrameworkName]: tst_cfg.cFrameworkNameInputValue,
    [tst_cfg.cappConfigPath]: rootPathAsync + tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cappConfigReferencePath]: rootPathAsync + tst_cfg.cappConfigReferencePathInputValue,
    [tst_cfg.cappConfigResourcesPath]: rootPathAsync + tst_cfg.cappConfigResourcesPathInputValue,
    [tst_cfg.cclientMetaDataPath]: rootPathAsync + tst_cfg.cclientMetaDataPathChangedExpectedValue1,
    [tst_cfg.cclientBusinessRules]: {},
    [tst_cfg.cclientCommandAliasesPath]: tst_cfg.cclientCommandAliasesPathInputValue,
    [tst_cfg.cclientCommands]: {},
    [tst_cfg.cclientConstantsPath]: rootPathAsync + tst_cfg.cclientConstantsPathInputValue,
    [tst_cfg.cclientMetaDataPath]: rootPathAsync +  tst_cfg.cclientMetaDataPathChangedExpectedValue2,
    [tst_cfg.cclientRegisteredPlugins]: rootPathAsync + tst_cfg.cclientRegisteredPluginsInputValue,
    [tst_cfg.cclientRootPath]: rootPathAsync,
    [tst_cfg.cclientThemesPath]: rootPathAsync + tst_cfg.cclientThemesPathInputValue,
    [tst_cfg.cclientWorkflowsPath]: rootPathAsync + tst_cfg.cclientWorkflowsPathInputValue,
    [tst_cfg.cframeworkCommandAliasesPath]: rootPathAsync + tst_cfg.cframeworkCommandAliasesPathExpectedValue,
    [tst_cfg.cframeworkConfigPath]: rootPathAsync + tst_cfg.cframeworkConfigPathExpectedValue,
    [tst_cfg.cframeworkConstantsPath]: rootPathConstants + tst_cfg.cframeworkConstantsPathExpectedLinkedValue,
    // NOTE: Look at the initFramework_validData note in unit test header.
    // [tst_cfg.cframeworkConstantsPath]: rootPathAsync + tst_cfg.cframeworkConstantsPathExpectedUnlinkedValue,
    [tst_cfg.cframeworkFullMetaDataPath]: rootPathAsync + tst_cfg.cframeworkFullMetaDataPathExpectedValue,
    [tst_cfg.cframeworkResourcesPath]: rootPathAsync + tst_cfg.cframeworkResourcesPathExpectedValue,
    [tst_cfg.cframeworkRootPath]: rootPathAsync + bas.cBackSlash,
    [tst_cfg.cframeworkThemesPath]: rootPathAsync + tst_cfg.cframeworkThemesPathExpectedValue,
    [tst_cfg.cframeworkWorkflowsPath]: rootPathAsync + tst_cfg.cframeworkWorkflowsPathExpectedValue,
    [tst_cfg.cpluginCommandAliasesPath]: rootPathAsync + tst_cfg.cpluginCommandAliasesPathExpectedValue,
    [tst_cfg.cpluginFullMetaDataPath]: rootPathAsync + tst_cfg.cpluginFullMetaDataPathExpectedValue,
    [tst_cfg.cpluginReleaseResourcesPath]: tst_cfg.cpluginReleaseResourcesPathExpectedValue,
    [tst_cfg.cpluginResourcesPath]: rootPathAsync + tst_cfg.cpluginResourcesPathExpectedValue,
    [tst_cfg.cpluginRootPath]: bas.cDot,
    [tst_cfg.cpluginWorkflowsPath]: rootPathAsync + tst_cfg.cpluginWorkflowsPathExpectedValue,
};

export const listAllPluginsInRegistry = {
    [wrd.cplugins]: [{
            [tst_sys.cplugin_one]: {
                [wrd.cName]: tst_sys.cplugin_one,
                [wrd.cPath]: rootPathHayPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_one + bas.cDoubleBackSlash
            }
        }, {
            [tst_sys.cplugin_three]: {
                [wrd.cName]: tst_sys.cplugin_three,
                [wrd.cPath]: rootPathHayPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_three + bas.cDoubleBackSlash
            }
        }, {
            [tst_sys.cplugin_two]: {
                [wrd.cName]: tst_sys.cplugin_two,
                [wrd.cPath]: rootPathHayPlugins + bas.cDoubleBackSlash + tst_sys.cplugin_two + bas.cDoubleBackSlash
            }
        }
    ]
};

export const ctst = bas.cts + bas.ct;
export const cComnd = bas.cCo + bas.cmn + bas.cd;
export const listAllPluginsInRegistryExpected = [tst_sys.cplugin_one, tst_sys.cplugin_three, tst_sys.cplugin_two];
export const testPluginPath = rootPathAsync + bas.cDoubleForwardSlash + wrd.ctest + bas.cDoubleForwardSlash + wrd.cunit + wrd.cTest + bas.cDoubleForwardSlash + wrd.ctest + wrd.cData + bas.cDoubleForwardSlash + wrd.ctest + wrd.cPlugins + bas.cDoubleForwardSlash + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDoubleForwardSlash;
export const pluginsPath = rootPathHayPlugins;
export const pluginsPathObject = {[wrd.cpath]: pluginsPath};
export const listLoadedPlugins = [[tst_sys.cplugin_one, true], [tst_sys.cplugin_three, true], [tst_sys.cplugin_two, true]];
export const expectedListLoadedPlugins = [tst_sys.cplugin_one, tst_sys.cplugin_three, tst_sys.cplugin_two];
export const listAllPluginsInRegistryBusinessRule = {[biz.cgetDirectoryList]: (inputData, inputMetaData) => fileOperations.getDirectoryList(inputData, inputMetaData)};
export const pluginNameToUse = tst_sys.cplugin_one;
export const pathForUnitTestWritePluginRegistryToDiskValid = rootPathAsync + tst_cfg.cpathToTheTempFolderForUnitTests;
export const tempPluginRegistryTestFileName = wrd.ctemp + wrd.cPlugin + wrd.cRegistry + wrd.cTest + gen.cDotjson;
export const pluginResourcesDataPathConfiguration = testPluginPath + wrd.cresources + bas.cDoubleForwardSlash + wrd.cconfiguration + bas.cDoubleForwardSlash;
export const pluginResourcesDataPathCommands = testPluginPath + wrd.cresources + bas.cDoubleForwardSlash + wrd.ccommands + bas.cDoubleForwardSlash;
export const pluginResourcesDataPathWorkflows = testPluginPath + wrd.cresources + bas.cDoubleForwardSlash + wrd.cworkflows + bas.cDoubleForwardSlash;
export const pluginResourcesDataPathThemes = testPluginPath + wrd.cresources + bas.cDoubleForwardSlash + wrd.cthemes + bas.cDoubleForwardSlash;
export const pluginConfigurationDataExpected = {[cfg.cdebugSettings]: {}, [wrd.csystem]: {[wrd.csystem + bas.cDot + cfg.cdebugSettings]: true, [wrd.csystem + bas.cDot + wrd.cdemo + wrd.cPlugin + wrd.cSetting]: false, [wrd.csystem + bas.cDot + wrd.cunit + wrd.cTesting]: true}}; // {"debugSettings": {}, "system": {"system.debugSettings": true, "system.demoPluginSetting": false, "system.unitTesting": true}}
export const pluginCommanderDataExpected = {[wrd.csystem]: [{[wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01]: {[wrd.cAliases]: ctst + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01 + bas.cComa + ctst + wrd.cPlugin + num.cOne + cComnd + num.c01, [wrd.cDescription]: wrd.cThe + bas.cSpace + num.cfirst + bas.cSpace + wrd.cdemo + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cas + bas.cSpace + wrd.cpart + bas.cSpace + wrd.cof + bas.cSpace + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot,  [wrd.cName]: wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01}, [wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02]: {[wrd.cAliases]: ctst + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02 + bas.cComa + ctst + wrd.cPlugin + num.cOne + cComnd + num.c02, [wrd.cDescription]: wrd.cThe + bas.cSpace + num.csecond + bas.cSpace + wrd.cdemo + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cas + bas.cSpace + wrd.cpart + bas.cSpace + wrd.cof + bas.cSpace + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot, [wrd.cName]: wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02}}]}; // {"system": [{"testPluginOneCommand01": {"Aliases": "tstPluginOneComand01,tstPluginOneComnd01", "Description": "The first demo command as part of test-plugin-one.", "Name": "testPluginOneCommand01"}, "testPluginOneCommand02": {"Aliases": "tstPluginOneComand02,tstPluginOneComnd02", "Description": "The second demo command as part of test-plugin-one.", "Name": "testPluginOneCommand02"}}]}
export const pluginWorkflowsDataExpected = {[wrd.csystem]: [{[wrd.ctest + wrd.cPlugin + num.cOne + wrd.cWorkflow]: cmd.ccommandSequencer + bas.cSpace + wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01 + bas.cSpace + wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02}]}; // {"system": [{"testPluginOneWorkflow": "commandSequencer pluginOneCommand01 pluginOneCommand02"}]}
export const pluginThemesDataExpected = [{[wrd.cName]: wrd.cDefault, [wrd.cPath]: rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.ctest + wrd.cPlugins + bas.cBackSlash + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cthemes + bas.cBackSlash + wrd.cDefault}]; // [{"Name": "Default", "Path": "*root of your system*\\test\\unitTest\\testData\\testPlugins\\test-plugin-one\\resources\\themes\\Default"}]
export const jsonDataPath = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + gen.cjson + wrd.cTest + wrd.cData + bas.cForwardSlash; // /test/unitTest/testData/resources/jsonTestData/
export const expectedDataFromJsonTestFile = {[cfg.cdebugSettings]: {[wrd.csystem + bas.cDot + wrd.cargument + wrd.cDriven + wrd.cInterface]: false, [wrd.csystem + bas.cDot + cfg.cdebugSettings]: true, [wrd.csystem + bas.cDot + wrd.cfiglet + wrd.cFont]: wrd.cStar + bas.cSpace + wrd.cWars}};// {"debugSettings": {"system.argumentDrivenInterface": false, "system.debugSettings": true, "system.figletFont": "Star Wars"}}
export const objectTestSample = {[wrd.cobject + num.c1]: wrd.cmy + wrd.cObject, [wrd.cobject + num.c1]: [{[wrd.cstuff + num.c1]: wrd.cunder + wrd.cstuff + num.c1}, {[wrd.cstuff + num.c2]: wrd.cunder + wrd.cstuff + num.c2}, {[wrd.cstuff + num.c3]: wrd.cunder + wrd.cstuff + num.c3}]} // {"object1": "myObject", "object2": [{"stuff1": "understuff1"}, {"stuff2": "understuff2"}, {"stuff3": "understuff3"}]}

export const listPluginInRegistry = {
    [wrd.cplugins]: [{
            [ctestPluginOne]: {
                [wrd.cName]: ctestPluginOne,
                [wrd.cPath]: testPluginPath
            }
        }
    ]
};


/**
 * @function testHelloWorld
 * @description Function made to be used for unit testing as a business rule data.
 * @return {string} Returns a string for unit test use.
 * @author Vlad Sorokin
 * @date 2023/01/02
 */
async function testHelloWorld() {
    let functionName = testHelloWorld.name;
    console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    let returnData = wrd.chello + bas.cSpace + wrd.cWorld;
    console.log(msg.creturnDataIs + returnData);
    console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    return returnData;
}

export const testBusinessRulesLibrary = {
    [tst_con.ctestHelloWorld]: () => testHelloWorld()
};

/**
 * @function rootPathDiscovery
 * @description Function made to find the root path and return it to be used in unit test.
 * @returns {array<string>} Returnts two strings: 
 * rootPathDiscovery[0] is a root string including haystacks-async path.
 * rootPathDiscovery[1] is a root string including haystacks-constants path.
 * rootPathDiscovery[2] is a root string including hayPlugins path
 * @author Vlad Sorokin
 * @date 2024/01/30
 */
export async function rootPathDiscovery() {
    let functionName = rootPathDiscovery.name;
    // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    let rootPath = '';
    let rootPathAsync = '';
    let rootPathConstants = '';
    let rootPathHayPlugins = '';
    let rootPathArray = [];
    let pathSeparator = '';
    let returnData = [];

    rootPath = url.fileURLToPath(path.dirname(import.meta.url));

    pathSeparator = wrd.chaystacks + bas.cDash + wrd.casync;
    rootPathArray = rootPath.split(pathSeparator);
    rootPathArray.pop(); // remove any bin or src folder from the path.
    rootPath = rootPathArray.join(pathSeparator);

    rootPathAsync = rootPath + wrd.chaystacks + bas.cDash + wrd.casync;
    rootPathConstants = rootPath + wrd.chaystacks + bas.cDash + wrd.cconstants;
    rootPathHayPlugins = rootPath + wrd.chay + wrd.cPlugins;

    returnData = [rootPathAsync, rootPathConstants, rootPathHayPlugins];
    // console.log(msg.creturnDataIs + returnData);
    // console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    return returnData;
}

export default {
    rootPathDiscovery
};