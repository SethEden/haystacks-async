/**
 * @file test.configuration.constants.js
 * @module test.configuration.constants
 * @description A file to hold all of the unit test configuration constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/12/06
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, wrd} = hayConst;


// smuggle something ccustomEchoCommand = wr1.ccustom + wr1.cEcho + wr1.cCommand; // customEchoCommand
export const cargumentDrivenInterface = wrd.cargument + wrd.cDriven + wrd.cInterface; // argumentDrivenInterface



// Test Configuration String Names
export const cFrameworkName = wrd.cFramework + wrd.cName; // FrameworkName
export const cclientRootPath = wrd.cclient + wrd.cRoot + wrd.cPath; // clientRootPath
export const cappConfigResourcesPath = wrd.capp + wrd.cConfig + wrd.cResources + wrd.cPath; // appConfigResourcesPath
export const cappConfigReferencePath = wrd.capp + wrd.cConfig + wrd.cReference + wrd.cPath; // appConfigReferencePath
export const cclientMetaDataPath = wrd.cclient + wrd.cMeta + wrd.cData + wrd.cPath; // clientMetaDataPath
export const cclientCommandAliasesPath = wrd.cclient + wrd.cCommand + wrd.cAliases + wrd.cPath; // clientCommandAliasesPath
export const cclientConstantsPath = wrd.cclient + wrd.cConstants + wrd.cPath; // clientConstantsPath
export const cclientRegisteredPlugins = wrd.cclient + wrd.cRegistered + wrd.cPlugins; //clientRegisteredPlugins
export const cclientWorkflowsPath = wrd.cclient + wrd.cWorkflows + wrd.cPath; // clientWorkflowsPath 
export const cclientThemesPath = wrd.cclient + wrd.cThemes + wrd.cPath; //clientThemesPath
export const cclientBusinessRules = wrd.cclient + wrd.cBusiness + wrd.cRules; // cclientBusinessRules
export const cclientCommands = wrd.cclient + wrd.cCommands; // clientCommands
export const cappConfigPath = wrd.capp + wrd.cConfig + wrd.cPath; // appConfigPath
export const cframeworkCommandAliasesPath = wrd.cframework + wrd.cCommand + wrd.cAliases + wrd.cPath; // frameworkCommandAliasesPath 
export const cframeworkConfigPath = wrd.cframework + wrd.cConfig + wrd.cPath; // frameworkConfigPath
export const cframeworkConstantsPath = wrd.cframework + wrd.cConstants + wrd.cPath; // frameworkConstantsPath
export const cframeworkFullMetaDataPath = wrd.cframework + wrd.cFull + wrd.cMeta + wrd.cData + wrd.cPath; // frameworkFullMetaDataPath
export const cframeworkResourcesPath = wrd.cframework + wrd.cResources + wrd.cPath; // frameworkResourcesPath
export const cframeworkRootPath = wrd.cframework + wrd.cRoot + wrd.cPath; // frameworkRootPath
export const cframeworkThemesPath = wrd.cframework + wrd.cThemes + wrd.cPath; // frameworkThemesPath
export const cframeworkWorkflowsPath = wrd.cframework + wrd.cWorkflows + wrd.cPath; // frameworkWorkflowsPath
export const cpluginCommandAliasesPath = wrd.cplugin + wrd.cCommand + wrd.cAliases + wrd.cPath; // pluginCommandAliasesPath
export const cpluginFullMetaDataPath = wrd.cplugin + wrd.cFull + wrd.cMeta + wrd.cData + wrd.cPath; // pluginFullMetaDataPath
export const cpluginReleaseResourcesPath = wrd.cplugin + wrd.cRelease + wrd.cResources + wrd.cPath; // pluginReleaseResourcesPath
export const cpluginResourcesPath = wrd.cplugin + wrd.cResources + wrd.cPath; // pluginResourcesPath
export const cpluginRootPath = wrd.cplugin + wrd.cRoot + wrd.cPath; // pluginRootPath
export const cpluginWorkflowsPath = wrd.cplugin + wrd.cWorkflows + wrd.cPath; // pluginWorkflowsPath

// Test Configuration String Input Values
export const cFrameworkNameInputValue =  wrd.chaystacks + bas.cDash + wrd.casync; // haystacks-async
export const cappConfigResourcesPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash; // /test/unitTest/testData/resources/
export const cappConfigReferencePathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash + wrd.cclient + wrd.cTest + wrd.cData + bas.cForwardSlash; // /test/unitTest/testData/resources/clientTestData/
export const cclientMetaDataPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // /test/unitTest/testData/resources/metaData.json
export const cclientCommandAliasesPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.ccommands + bas.cForwardSlash; // /test/testHarness/src/resources/commands/
export const cclientConstantsPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // /test/testHarness/src/constants/
export const cclientRegisteredPluginsInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cplugins + bas.cForwardSlash + wrd.cplugins + gen.cDotjson; // /test/testHarness/src/resources/plugins/plugins.json
export const cclientWorkflowsPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cworkflows + bas.cForwardSlash; // /test/testHarness/src/resources/workflows/
export const cclientThemesPathInputValue = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cthemes + bas.cForwardSlash; // /test/testHarness/src/resources/themes/


// Test Configuration String Expected Values
export const cclientMetaDataPathChangedExpectedValue1 = wrd.cmeta + wrd.cData + gen.cDotjson; // metaData.json
export const cclientMetaDataPathChangedExpectedValue2 = bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // \\test\unitTest\testData\resources\metaData.json
export const cframeworkCommandAliasesPathExpectedValue = bas.cBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.ccommands + bas.cDoubleForwardSlash; // \\src//resources//commands//
export const cframeworkConfigPathExpectedValue = bas.cBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cconfiguration + bas.cDoubleForwardSlash; // \\src//resources//configuration//
export const cframeworkConstantsPathExpectedLinkedValue = bas.cBackSlash + wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // \\src/constants/
// smuggle something cframeworkConstantsPathExpectedUnlinkedValue = bas.cBackSlash + wrd.cnode + bas.cUnderscore + wrd.cmodules + bas.cBackSlash + bas.cAt + wrd.chaystacks + bas.cBackSlash + wrd.cconstanst + bas.cBackSlash + wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // node_modules\@haystacks\constants\src/constants/
export const cframeworkFullMetaDataPathExpectedValue = bas.cBackSlash + wrd.csrc + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // \\resources\\metaData.json
export const cframeworkResourcesPathExpectedValue = bas.cBackSlash + wrd.csrc + bas.cBackSlash + wrd.cresources + bas.cBackSlash; // \\src\resources\
export const cframeworkThemesPathExpectedValue = bas.cBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cthemes + bas.cDoubleForwardSlash; // //src//resources//themes//
export const cframeworkWorkflowsPathExpectedValue = bas.cBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cworkflows + bas.cDoubleForwardSlash; // //src//resources//workflows//
export const cpluginCommandAliasesPathExpectedValue = bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.ccommands + bas.cDoubleForwardSlash; // //resources//commands//
export const cpluginFullMetaDataPathExpectedValue = bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // \\haystacks-async\\resources\\metaData.json
export const cpluginReleaseResourcesPathExpectedValue = wrd.cbin + bas.cBackSlash + wrd.cresources + bas.cBackSlash; // bin\resources\
export const cpluginResourcesPathExpectedValue = bas.cBackSlash + wrd.cresources + bas.cBackSlash; // \\haystacks-async\resources\
export const cpluginWorkflowsPathExpectedValue = bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cworkflows + bas.cDoubleForwardSlash; // resources//workflows//


// Unit Testing paths
export const cpathToTheTempFolderForUnitTests = bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.ctest + wrd.cTemp + bas.cForwardSlash; // /test/unitTest/testData/testTemp/
