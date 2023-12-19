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

// Test Configuration String Values
export const cFrameworkNameValue =  wrd.haystacks + bas.cDash + wrd.casync; // haystacks-async
export const cclientRootPathValue =  bas.cForwardSlash + wrd.haystacks + bas.cDash + wrd.casync; // C:/haystacks-async
export const cappConfigResourcesPathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash; // C:/haystacks-async/test/unitTest/testData/resources/
export const cappConfigReferencePathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash + wrd.cclient + wrd.cTest + wrd.cData + bas.cForwardSlash; // C:/haystacks-async/test/unitTest/testData/resources/clientTestData/
export const cclientMetaDataPathValue =  bas.cForwardSlash + wrd.ctest + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cData + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // /test/unitTest/testData/resources/metaData.json
export const cclientCommandAliasesPathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.ccommands + bas.cForwardSlash; // C:/haystacks-async/test/testHarness/src/resources/commands/
export const cclientConstantsPathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // C:/haystacks-async/test/testHarness/src/constants/
export const cclientRegisteredPluginsValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cplugins + bas.cForwardSlash + wrd.cplugins + gen.cDotjson; // C:/haystacks-async/test/testHarness/src/resources/plugins/plugins.json
export const cclientWorkflowsPathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cworkflows + bas.cForwardSlash; // C:/haystacks-async/test/testHarness/src/resources/workflows/
export const cclientThemesPathValue =  gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.ctest + wrd.cHarness + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + wrd.cthemes + bas.cForwardSlash; // C:/haystacks-async/test/testHarness/src/resources/themes/
export const cclientMetaDataPathChangedValue1 = wrd.cmeta + wrd.cData + gen.cDotjson; // metaData.json
export const cclientMetaDataPathChangedValue2 = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.ctest + bas.cDoubleBackSlash + wrd.cunit + wrd.cTest + bas.cDoubleBackSlash + wrd.ctest + wrd.cData + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // C:\\haystacks-async\\test\\unitTest\\testData\\resources\\metaData.json
export const cframeworkCommandAliasesPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.ccommands + bas.cDoubleForwardSlash; // C:\\haystacks-async\\//src//resources//commands//
export const cframeworkConfigPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cconfiguration + bas.cDoubleForwardSlash; // C:\\haystacks-async\\//src//resources//configuration//
export const cframeworkConstantsPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.cnode + bas.cUnderscore + wrd.cmodules + bas.cDoubleBackSlash + bas.cAt + wrd.chaystacks + bas.cDoubleBackSlash + wrd.cconstanst + bas.cDoubleBackSlash + wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // C:\\haystacks-async\\node_modules\\@haystacks\\constants\\src/constants/
export const cframeworkFullMetaDataPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.csrc + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // C:\\haystacks-async\\src\\resources\\metaData.json
export const cframeworkResourcesPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.csrc + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash; // C:\\haystacks-async\\src\\resources\\
export const cframeworkRootPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash; // C:\\haystacks-async\\
export const cframeworkThemesPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cthemes + bas.cDoubleForwardSlash; // C:\\haystacks-async\\//src//resources//themes//
export const cframeworkWorkflowsPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + bas.cDoubleForwardSlash + wrd.csrc + bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cworkflows + bas.cDoubleForwardSlash; // C:\\haystacks-async\\//src//resources//workflows//
export const cpluginCommandAliasesPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casyncresources + bas.cDoubleForwardSlash + wrd.ccommands + bas.cDoubleForwardSlash; // C:/haystacks-asyncresources//commands//
export const cpluginFullMetaDataPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash + wrd.cmeta + wrd.cData + gen.cDotjson; // C:\\haystacks-async\\resources\\metaData.json
export const cpluginReleaseResourcesPathValue = wrd.cbin + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash; // bin\\resources\\
export const cpluginResourcesPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casync + bas.cDoubleBackSlash + wrd.cresources + bas.cDoubleBackSlash; // C:\\haystacks-async\\resources\\
export const cpluginWorkflowsPathValue = gen.cCroot + wrd.chaystacks + bas.cDash + wrd.casyncresources + bas.cDoubleForwardSlash + wrd.cworkflows + bas.cDoubleForwardSlash; // C:/haystacks-asyncresources//workflows//

