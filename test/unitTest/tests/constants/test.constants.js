/**
 * @file test.constants.js
 * @module test.constants
 * @description Contains many re-usable test constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;


export const cUndefined = bas.cUn + bas.cde + bas.cf + bas.ci + bas.cn + bas.ce + bas.cd;
export const cNaN = bas.cNa + bas.cN;


// testConstantsValidationMetadata
export const cUnitTestName = wrd.cUnit + wrd.cTest + wrd.cHarness; // testHarness

// Describe names

/* commandBroker */

/* dataBroker */

/* ruleBroker */

/* themeBroker */

/* workflowBroker */

/* auxiliaryArrayParsing */

/* characterArrayParsing */

/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* characterStringParsing */

/* commandStringParsing */

/* constantStringParsing */

/* dataStringParsing */

/* fileStringParsing */

/* wordStringParsing */

/* characterGeneration */

/* fileOperations */

/* lexycalAnalyzer */

/* mathOperations */

/* promptOperations */

/* ruleParsing */

/* stringGeneration */

/* stringParsingUtilities */

/* timeComputation */

/* advanced */

/* auxiliary */

/* configuration */

/* constant */

/* dataDirectorate */

/* integrationTests */

/* performanceMetric */

/* system */

/* chiefCommander */

/* chiefConfiguration */

/* chiefData */

/* chiefWorkflow */

/* warden */

/* colorizer */

/* configurator */

/* loggers */

/* queue */

/* stack */

/* main */
// initFramework
export const cinitFramework = gen.cinit + wrd.cFramework; // initFramework
export const cinitFramework_validData = cinitFramework + bas.cUnderscore + wrd.cvalid + wrd.cData; // initFramework_validData
export const cinitFramework_inValidClientConfigurationString = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cString; // initFramework_inValidClientConfigurationString 
export const cinitFramework_inValidClientConfigurationInteger = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cInteger; // initFramework_inValidClientConfigurationInteger 
export const cinitFramework_inValidClientConfigurationBoolean = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cBoolean; // initFramework_inValidClientConfigurationBoolean 
export const cinitFramework_inValidClientConfigurationUndefined = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + 'Undefined'; // initFramework_inValidClientConfigurationUndefined 
export const cinitFramework_inValidClientConfigurationNaN = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + 'NaN'; // initFramework_inValidClientConfigurationNaN 

// accouterFramework
export const caccouterFramework = wrd.caccouter + wrd.cFramework; // accouterFramework
export const caccouterFramework_validData = caccouterFramework + bas.cUnderscore + wrd.cvalid + wrd.cData; // accouterFramework_validData 
export const caccouterFramework_inValidDataString = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cString; // accouterFramework_inValidDataString 
export const caccouterFramework_inValidDataInteger = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cInteger; // accouterFramework_inValidDataInteger 
export const caccouterFramework_inValidDataBoolean = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cBoolean; // accouterFramework_inValidDataBoolean 
export const caccouterFramework_inValidDataUndefined = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // accouterFramework_inValidDataUndefined 
export const caccouterFramework_inValidDataNaN = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; //caccouterFramework_inValidDataNaN 

// getFrameworkData
export const cgetFrameworkData = wrd.cget + wrd.cFramework + wrd.cData; // getFrameworkData
export const cgetFrameworkData_validData = cgetFrameworkData + bas.cUnderscore + wrd.cvalid + wrd.cData; // getFrameworkData_validData
export const cgetFrameworkData_inValidString = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // getFrameworkData_inValidString
export const cgetFrameworkData_inValidInteger = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // getFrameworkData_inValidInteger
export const cgetFrameworkData_inValidBoolean = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // getFrameworkData_inValidBoolean
export const cgetFrameworkData_inValidUndefined = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + 'Undefined'; // getFrameworkData_inValidUndefined
export const cgetFrameworkData_inValidNaN = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + 'NaN'; // getFrameworkData_inValidNaN

// mergeClientBusinessRules
export const cmergeClientBusinessRules = wrd.cmerge + wrd.cClient + wrd.cBusiness + wrd.cRules; // mergeClientBusinessRules
export const cmergeClientBusinessRules_validData = cmergeClientBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // mergeClientBusinessRules_validData
export const cmergeClientBusinessRules_inValidClientBusinessRulesString = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cString; // mergeClientBusinessRules_inValidClientBusinessRulesString
export const cmergeClientBusinessRules_inValidClientBusinessRulesInteger = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cInteger; // mergeClientBusinessRules_inValidClientBusinessRulesInteger
export const cmergeClientBusinessRules_inValidClientBusinessRulesBoolean = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cBoolean; // mergeClientBusinessRules_inValidClientBusinessRulesBoolean
export const cmergeClientBusinessRules_inValidClientBusinessRulesUndefined = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + 'Undefined'; // mergeClientBusinessRules_inValidClientBusinessRulesUndefined
export const cmergeClientBusinessRules_inValidClientBusinessRulesNaN = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + 'Undefined'; // mergeClientBusinessRules_inValidClientBusinessRulesNaN

// mergeClientCommands
export const cmergeClientCommands = wrd.cmerge + wrd.cClient + wrd.cCommands; // mergeClientCommands
export const cmergeClientCommands_validData = cmergeClientCommands + bas.cUnderscore + wrd.cvalid + wrd.cData; // mergeClientCommands_validData
export const cmergeClientCommands_inValidClientCommandsString = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cString; // mergeClientCommands_inValidClientCommandsString
export const cmergeClientCommands_inValidClientCommandsInteger = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cInteger; // mergeClientCommands_inValidClientCommandsInteger
export const cmergeClientCommands_inValidClientCommandsBoolean = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cBoolean; // mergeClientCommands_inValidClientCommandsBoolean
export const cmergeClientCommands_inValidClientCommandsUndefined = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + 'Undefined'; // mergeClientCommands_inValidClientCommandsUndefined
export const cmergeClientCommands_inValidClientCommandsNaN = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + 'NaN'; // mergeClientCommands_inValidClientCommandsNaN

// loadCommandAliases

// loadCommandWorkflow

// listLoadedPlugins
export const clistLoadedPlugins = wrd.clist + wrd.cLoaded + wrd.cPlugins; // listLoadedPlugins
export const clistLoadedPlugins_validData = clistLoadedPlugins + bas.cUnderscore + wrd.cvalid + wrd.cData; // listLoadedPlugins_validData
export const clistLoadedPlugins_inValidString = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // listLoadedPlugins_inValidString
export const clistLoadedPlugins_inValidInteger = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // listLoadedPlugins_inValidInteger
export const clistLoadedPlugins_inValidBoolean = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // listLoadedPlugins_inValidBoolean
export const clistLoadedPlugins_inValidUndefined = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + "Undefined"; // listLoadedPlugins_inValidUndefined
export const clistLoadedPlugins_inValidNaN = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + "NaN"; // listLoadedPlugins_inValidNaN

// listAllPluginsInRegistry
export const clistAllPluginsInRegistry = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // listAllPluginsInRegistry
export const clistAllPluginsInRegistry_validData = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // listLoadedPlugins_validData
export const clistAllPluginsInRegistry_inValidString = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // clistAllPluginsInRegistry_inValidString
export const clistAllPluginsInRegistry_inValidInteger = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // clistAllPluginsInRegistry_inValidInteger
export const clistAllPluginsInRegistry_inValidBoolean = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // clistAllPluginsInRegistry_inValidBoolean
export const clistAllPluginsInRegistry_inValidUndefined = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + "Undefined"; // clistAllPluginsInRegistry_inValidUndefined
export const clistAllPluginsInRegistry_inValidNaN = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + "NaN"; // clistAllPluginsInRegistry_inValidNaN

// listAllPluginsInRegistryPath
export const clistAllPluginsInRegistryPath = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // listAllPluginsInRegistry
export const clistAllPluginsInRegistryPath_validData = clistAllPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // listAllPluginsInRegistry_validData

// numberOfPluginsInRegistry
export const cnumberOfPluginsInRegistry = wrd.cnumber + wrd.cOf + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // numberOfPluginsInRegistry
export const cnumberOfPluginsInRegistry_validData = cnumberOfPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // numberOfPluginsInRegistry_validData

// numberOfPluginsInRegistryPath
export const cnumberOfPluginsInRegistryPath = wrd.cnumber + wrd.cOf + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // numberOfPluginsInRegistryPath
export const cnumberOfPluginsInRegistryPath_validData = cnumberOfPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // numberOfPluginsInRegistryPath_validData

// registerPluginByNameAndPath
export const cregisterPluginByNameAndPath = wrd.cregister + wrd.cPlugin + wrd.cBy + wrd.cName + wrd.cAnd + wrd.cPath; // registerPluginByNameAndPath
export const cregisterPluginByNameAndPath_validData = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // registerPluginByNameAndPath_validData
export const cregisterPluginByNameAndPath_inValidPluginNameString = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // registerPluginByNameAndPath_inValidPluginNameString
export const cregisterPluginByNameAndPath_inValidPluginPathString = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cString; // registerPluginByNameAndPath_inValidPluginPathString
export const cregisterPluginByNameAndPath_inValidPluginNameInteger = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // registerPluginByNameAndPath_inValidPluginNameInteger
export const cregisterPluginByNameAndPath_inValidPluginNameBoolean = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // registerPluginByNameAndPath_inValidPluginNameBoolean
export const cregisterPluginByNameAndPath_inValidPluginPathInteger = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cInteger; // registerPluginByNameAndPath_inValidPluginPathInteger
export const cregisterPluginByNameAndPath_inValidPluginPathBoolean = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cBoolean; // registerPluginByNameAndPath_inValidPluginPathBoolean
export const cregisterPluginByNameAndPath_inValidPluginNameUndefined = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // registerPluginByNameAndPath_inValidPluginNameUndefined
export const cregisterPluginByNameAndPath_inValidPluginNameNaN = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // registerPluginByNameAndPath_inValidPluginNameNaN
export const cregisterPluginByNameAndPath_inValidPluginPathUndefined = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + "Undefined"; // registerPluginByNameAndPath_inValidPluginPathUndefined
export const cregisterPluginByNameAndPath_inValidPluginPathNaN = cregisterPluginByNameAndPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + "NaN"; // registerPluginByNameAndPath_inValidPluginPathNaN

// Test names

/* commandBroker */

/* dataBroker */

/* ruleBroker */

/* themeBroker */

/* workflowBroker */

/* auxiliaryArrayParsing */

/* characterArrayParsing */

/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* characterStringParsing */

/* commandStringParsing */

/* constantStringParsing */

/* dataStringParsing */

/* fileStringParsing */

/* wordStringParsing */

/* characterGeneration */

/* fileOperations */

/* lexycalAnalyzer */

/* mathOperations */

/* promptOperations */

/* ruleParsing */

/* stringGeneration */

/* stringParsingUtilities */

/* timeComputation */

/* advanced */

/* auxiliary */

/* configuration */

/* constant */

/* dataDirectorate */

/* integrationTests */

/* performanceMetric */

/* system */

/* chiefCommander */

/* chiefConfiguration */

/* chiefData */

/* chiefWorkflow */

/* warden */

/* colorizer */

/* configurator */

/* loggers */

/* queue */

/* stack */

/* main */


/* test constants */
export const cExpectedActualFrameworkDevName = wrd.chay + wrd.cstacks + bas.cDash + wrd.casync; // ExpectedActualFrameworkDevName
export const cExpectedActualFrameworkProdName = bas.cAt + wrd.chay + wrd.cstacks + bas.cForwardSlash + wrd.casync; // ExpectedActualFrameworkProdName
export const cApplicationName = wrd.ctest + wrd.cHarness; // ApplicationName
export const cAppDevPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash; // AppDevPath
export const cAppProdPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash; // AppProdPath
export const cResourcesCommonPath = wrd.cresources + bas.cForwardSlash; // ResourcesCommonPath
export const cCommandsCommonPath = wrd.ccommands + bas.cForwardSlash; // CommandsCommonPath
export const cConstantsPath = wrd.cconstants + bas.cForwardSlash; // ConstantsPath
export const cConfigurationCommonPath = wrd.cconfiguration + bas.cForwardSlash; // ConfigurationCommonPath
export const cPluginsRegistryCommonPath = wrd.cplugins + bas.cForwardSlash + wrd.cplugins + gen.cDotjson; // PluginsRegistryCommonPath
export const cWorkflowsCommonPath = wrd.cworkflows + bas.cForwardSlash; // WorkflowsCommonPath
export const cThemesCommonPath = wrd.cthemes + bas.cForwardSlash; // ThemesCommonPath
export const cReleasePath = wrd.crelease + bas.cForwardSlash; // ReleasePath
export const ctestHelloWorld = wrd.ctest + wrd.cHello + wrd.cWorld; // testHelloWorld