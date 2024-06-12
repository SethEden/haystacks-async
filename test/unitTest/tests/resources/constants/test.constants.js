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

const {bas, cfg, fnc, gen, msg, phn, sys, wrd} = hayConst;


// testConstantsValidationMetadata
export const cUnitTestName = wrd.cUnit + wrd.cTest + wrd.cHarness; // testHarness

// Describe names

/* commandBroker */
export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands; // bootStrapCommands
export const cresetCommands = wrd.creset + wrd.cCommands; // resetCommands
export const caddClientCommands = wrd.c_add + wrd.cClient + wrd.cCommands; // addClientCommands



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
export const cinitFramework = gen.cinit + wrd.cFramework; // initFramework
export const caccouterFramework = wrd.caccouter + wrd.cFramework; // accouterFramework
export const cgetFrameworkData = wrd.cget + wrd.cFramework + wrd.cData; // getFrameworkData
export const cmergeClientBusinessRules = wrd.cmerge + wrd.cClient + wrd.cBusiness + wrd.cRules; // mergeClientBusinessRules
export const cmergeClientCommands = wrd.cmerge + wrd.cClient + wrd.cCommands; // mergeClientCommands
export const clistLoadedPlugins = wrd.clist + wrd.cLoaded + wrd.cPlugins; // listLoadedPlugins
export const clistAllPluginsInRegistry = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // listAllPluginsInRegistry
export const clistAllPluginsInRegistryPath = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // listAllPluginsInRegistry
export const cnumberOfPluginsInRegistry = wrd.cnumber + wrd.cOf + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // numberOfPluginsInRegistry
export const cnumberOfPluginsInRegistryPath = wrd.cnumber + wrd.cOf + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // numberOfPluginsInRegistryPath
export const cregisterPluginByNameAndPath = wrd.cregister + wrd.cPlugin + wrd.cBy + wrd.cName + wrd.cAnd + wrd.cPath; // registerPluginByNameAndPath
export const cunregisterPluginByName = wrd.cunregister + wrd.cPlugin + wrd.cBy + wrd.cName; // unregisterPluginByName
export const cunregisterPlugins = wrd.cunregister + wrd.cPlugins; // cunregisterPlugins
export const csyncPluginRegistryWithPath = wrd.csync + wrd.cPlugin + wrd.cRegistry + wrd.cWith + wrd.cPath; // syncPluginRegistryWithPath
export const cclearAllPluginRegistry = wrd.cclear + wrd.cAll + wrd.cPlugin + wrd.cRegistry; // cclearAllPluginRegistry
export const cwritePluginRegistryToDisk = wrd.cwrite + wrd.cPlugin + wrd.cRegistry + wrd.cTo + wrd.cDisk; // cwritePluginRegistryToDisk
export const cloadPlugin = wrd.cload + wrd.cPlugin; // loadPlugin
export const cloadPlugins = wrd.cload + wrd.cPlugins; // loadPlugin
export const cloadPluginsFromRegistry = wrd.cload + wrd.cPlugins + wrd.cFrom + wrd.cRegistry; // loadPluginsFromRegistry
export const cunloadPlugin = wrd.cunload + wrd.cPlugin;// unloadPlugin
export const cunloadPlugins = wrd.cunload + wrd.cPlugins;//unloadPlugin
export const cunloadAllPlugins = wrd.cunload + wrd.cAll + wrd.cPlugins; // cunloadAllPlugins
export const cgetPluginsRegistryPath = wrd.cget + wrd.cPlugins + wrd.cRegistry + wrd.cPath; // getPluginsRegistryPath
export const cloadPluginResourceData = wrd.cload + wrd.cPlugin + wrd.cResource + wrd.cData; // loadPluginResourceData
export const cloadAllJsonData = wrd.cload + wrd.cAll + gen.cJson + wrd.cData; // loadAllJsonData
export const cstoreData = wrd.cstore + wrd.cData;
export const cgetData = wrd.cget + wrd.cData; // getData
export const cclearData = wrd.cclear + wrd.cData; // clearData
export const cexecuteBusinessRules = wrd.cexecute + wrd.cBusiness + wrd.cRules; // executeBusinessRules
export const cenqueueCommand = wrd.cenqueue + wrd.cCommand; // enqueueCommand
export const cisCommandQueueEmpty = wrd.cis + wrd.cCommand + wrd.cQueue + wrd.cEmpty; // isCommandQueueEmpty
export const cprocessCommandQueue = wrd.cprocess + wrd.cCommand + wrd.cQueue; // processCommandQueue
export const csetConfigurationSetting = wrd.cset + wrd.cConfiguration + wrd.cSetting; // setConfigurationSetting
export const cgetConfigurationSetting = wrd.cget + wrd.cConfiguration + wrd.cSetting; // getConfigurationSetting
export const cconsoleLog = fnc.cconsoleLog; // consoleLog
export const cconsoleTableLog = wrd.cconsole + wrd.cTable + wrd.cLog; // consoleTableLog



// Test names

/* commandBroker */
// bootStrapCommands
export const cbootStrapCommands_validData = cbootStrapCommands + bas.cUnderscore + wrd.cvalid + wrd.cData; // bootStrapCommands_validData

// resetCommands
export const cresetCommands_validData = cresetCommands + bas.cUnderscore + wrd.cvalid + wrd.cData; // resetCommands_validData

// addClientCommands
export const caddClientCommands_validClientCommandsData = caddClientCommands + bas.cUnderscore + wrd.cvalid + wrd.cClient + wrd.cCommands + wrd.cData; // addClientCommands_validClientCommandsData
export const caddClientCommands_inValidClientCommandsString = caddClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommands + wrd.cString; // addClientCommands_inValidClientCommandsString
export const caddClientCommands_inValidClientCommandsInteger = caddClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommands + wrd.cInteger; // addClientCommands_inValidClientCommandsInteger
export const caddClientCommands_inValidClientCommandsBoolean = caddClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommands + wrd.cBoolean; // addClientCommands_inValidClientCommandsBoolean
export const caddClientCommands_inValidClientCommandsUndefined = caddClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommands + "Undefined"; // addClientCommands_inValidClientCommandsUndefined
export const caddClientCommands_inValidClientCommandsNaN = caddClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommands + "NaN"; // addClientCommands_inValidClientCommandsNaN

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
export const cinitFramework_validClientConfigurationData = cinitFramework + bas.cUnderscore + wrd.cvalid + wrd.cClient + wrd.cConfiguration + wrd.cData; // initFramework_validClientConfigurationData
export const cinitFramework_inValidClientConfigurationString = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cString; // initFramework_inValidClientConfigurationString 
export const cinitFramework_inValidClientConfigurationInteger = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cInteger; // initFramework_inValidClientConfigurationInteger 
export const cinitFramework_inValidClientConfigurationBoolean = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + wrd.cBoolean; // initFramework_inValidClientConfigurationBoolean 
export const cinitFramework_inValidClientConfigurationUndefined = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + 'Undefined'; // initFramework_inValidClientConfigurationUndefined 
export const cinitFramework_inValidClientConfigurationNaN = cinitFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cConfiguration + 'NaN'; // initFramework_inValidClientConfigurationNaN 

// accouterFramework
export const caccouterFramework_validData = caccouterFramework + bas.cUnderscore + wrd.cvalid + wrd.cData; // accouterFramework_validData 
export const caccouterFramework_inValidDataString = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cString; // accouterFramework_inValidDataString 
export const caccouterFramework_inValidDataInteger = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cInteger; // accouterFramework_inValidDataInteger 
export const caccouterFramework_inValidDataBoolean = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cBoolean; // accouterFramework_inValidDataBoolean 
export const caccouterFramework_inValidDataUndefined = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // accouterFramework_inValidDataUndefined 
export const caccouterFramework_inValidDataNaN = caccouterFramework + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; //caccouterFramework_inValidDataNaN 

// getFrameworkData
export const cgetFrameworkData_validData = cgetFrameworkData + bas.cUnderscore + wrd.cvalid + wrd.cData; // getFrameworkData_validData
export const cgetFrameworkData_inValidString = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // getFrameworkData_inValidString
export const cgetFrameworkData_inValidInteger = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // getFrameworkData_inValidInteger
export const cgetFrameworkData_inValidBoolean = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // getFrameworkData_inValidBoolean
export const cgetFrameworkData_inValidUndefined = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + 'Undefined'; // getFrameworkData_inValidUndefined
export const cgetFrameworkData_inValidNaN = cgetFrameworkData + bas.cUnderscore + wrd.cin + wrd.cValid + 'NaN'; // getFrameworkData_inValidNaN

// mergeClientBusinessRules
export const cmergeClientBusinessRules_validClientBusinessRulesData = cmergeClientBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cData; // mergeClientBusinessRules_validClientBusinessRulesData
export const cmergeClientBusinessRules_inValidClientBusinessRulesString = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cString; // mergeClientBusinessRules_inValidClientBusinessRulesString
export const cmergeClientBusinessRules_inValidClientBusinessRulesInteger = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cInteger; // mergeClientBusinessRules_inValidClientBusinessRulesInteger
export const cmergeClientBusinessRules_inValidClientBusinessRulesBoolean = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + wrd.cBoolean; // mergeClientBusinessRules_inValidClientBusinessRulesBoolean
export const cmergeClientBusinessRules_inValidClientBusinessRulesUndefined = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + 'Undefined'; // mergeClientBusinessRules_inValidClientBusinessRulesUndefined
export const cmergeClientBusinessRules_inValidClientBusinessRulesNaN = cmergeClientBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cBusiness + wrd.cRules + 'Undefined'; // mergeClientBusinessRules_inValidClientBusinessRulesNaN

// mergeClientCommands
export const cmergeClientCommands_validClientCommandsData = cmergeClientCommands + bas.cUnderscore + wrd.cvalid + wrd.cClient + wrd.cCommands + wrd.cData; // mergeClientCommands_validClientCommandsData
export const cmergeClientCommands_inValidClientCommandsString = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cString; // mergeClientCommands_inValidClientCommandsString
export const cmergeClientCommands_inValidClientCommandsInteger = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cInteger; // mergeClientCommands_inValidClientCommandsInteger
export const cmergeClientCommands_inValidClientCommandsBoolean = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + wrd.cBoolean; // mergeClientCommands_inValidClientCommandsBoolean
export const cmergeClientCommands_inValidClientCommandsUndefined = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + 'Undefined'; // mergeClientCommands_inValidClientCommandsUndefined
export const cmergeClientCommands_inValidClientCommandsNaN = cmergeClientCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cCommand + 'NaN'; // mergeClientCommands_inValidClientCommandsNaN

// loadCommandAliases

// loadCommandWorkflow

// listLoadedPlugins
export const clistLoadedPlugins_validData = clistLoadedPlugins + bas.cUnderscore + wrd.cvalid + wrd.cData; // listLoadedPlugins_validData
export const clistLoadedPlugins_inValidString = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // listLoadedPlugins_inValidString
export const clistLoadedPlugins_inValidInteger = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // listLoadedPlugins_inValidInteger
export const clistLoadedPlugins_inValidBoolean = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // listLoadedPlugins_inValidBoolean
export const clistLoadedPlugins_inValidUndefined = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + "Undefined"; // listLoadedPlugins_inValidUndefined
export const clistLoadedPlugins_inValidNaN = clistLoadedPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + "NaN"; // listLoadedPlugins_inValidNaN

// listAllPluginsInRegistry
export const clistAllPluginsInRegistry_validData = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // listLoadedPlugins_validData
export const clistAllPluginsInRegistry_inValidString = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // clistAllPluginsInRegistry_inValidString
export const clistAllPluginsInRegistry_inValidInteger = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // clistAllPluginsInRegistry_inValidInteger
export const clistAllPluginsInRegistry_inValidBoolean = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // clistAllPluginsInRegistry_inValidBoolean
export const clistAllPluginsInRegistry_inValidUndefined = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + "Undefined"; // clistAllPluginsInRegistry_inValidUndefined
export const clistAllPluginsInRegistry_inValidNaN = clistAllPluginsInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + "NaN"; // clistAllPluginsInRegistry_inValidNaN

// listAllPluginsInRegistryPath
export const clistAllPluginsInRegistryPath_validData = clistAllPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // listAllPluginsInRegistry_validData

// numberOfPluginsInRegistry
export const cnumberOfPluginsInRegistry_validData = cnumberOfPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // numberOfPluginsInRegistry_validData

// numberOfPluginsInRegistryPath
export const cnumberOfPluginsInRegistryPath_validData = cnumberOfPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // numberOfPluginsInRegistryPath_validData

// registerPluginByNameAndPath
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

// unregisterPlugin
export const cunregisterPluginByName_validPluginNameData = cunregisterPluginByName + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // unregisterPluginByName_validPluginNameData
export const cunregisterPluginByName_inValidPluginNameString = cunregisterPluginByName + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // unregisterPluginByName_inValidPluginNameString
export const cunregisterPluginByName_inValidPluginNameInteger = cunregisterPluginByName + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // unregisterPluginByName_inValidPluginNameInteger
export const cunregisterPluginByName_inValidPluginNameBoolean = cunregisterPluginByName + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // unregisterPluginByName_inValidPluginNameBoolean
export const cunregisterPluginByName_inValidPluginNameUndefined = cunregisterPluginByName + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // unregisterPluginByName_inValidPluginNameUndefined
export const cunregisterPluginByName_inValidPluginNameNaN = cunregisterPluginByName + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // unregisterPluginByName_inValidPluginNameNaN

// unregisterPlugins
export const cunregisterPlugins_validPluginsListArrayData = cunregisterPlugins + bas.cUnderscore + wrd.cvalid + wrd.cPlugins + wrd.cList + wrd.cArray + wrd.cData; // cunregisterPlugins_validPluginsListArrayData
export const cunregisterPlugins_inValidPluginsListArrayString = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugins + wrd.cList + wrd.cArray + wrd.cString; // cunregisterPlugins_inValidPluginListArrayString
export const cunregisterPlugins_inValidPluginsListArrayInteger = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugins + wrd.cList + wrd.cArray + wrd.cInteger; // cunregisterPlugins_inValidPluginListArrayInteger
export const cunregisterPlugins_inValidPluginsListArrayBoolean = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugins + wrd.cList + wrd.cArray + wrd.cBoolean; // cunregisterPlugins_inValidPluginListArrayBoolean
export const cunregisterPlugins_inValidPluginsListArrayUndefined = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugins + wrd.cList + wrd.cArray + "Undefined"; // cunregisterPlugins_inValidPluginListArrayUndefined
export const cunregisterPlugins_inValidPluginsListArrayNaN = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugins + wrd.cList + wrd.cArray + "NaN"; // cunregisterPlugins_inValidPluginListArrayNaN

// syncPluginRegistryWithPath
export const csyncPluginRegistryWithPath_validData = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // syncPluginRegistryWithPath_validData
export const csyncPluginRegistryWithPath_inValidString = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // syncPluginRegistryWithPath_inValidString
export const csyncPluginRegistryWithPath_inValidInteger = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // syncPluginRegistryWithPath_inValidInteger
export const csyncPluginRegistryWithPath_inValidBoolean = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // syncPluginRegistryWithPath_inValidBoolean
export const csyncPluginRegistryWithPath_inValidUndefined = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cin + wrd.cValid + "Undefined"; // syncPluginRegistryWithPath_inValidUndefined
export const csyncPluginRegistryWithPath_inValidNaN = csyncPluginRegistryWithPath + bas.cUnderscore + wrd.cin + wrd.cValid + "NaN"; // syncPluginRegistryWithPath_inValidNaN

// clearAllPluginRegistry
export const cclearAllPluginRegistry_validData = cclearAllPluginRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // cclearAllPluginRegistry_validData
export const cclearAllPluginRegistry_inValidString = cclearAllPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // cclearAllPluginRegistry_inValidString
export const cclearAllPluginRegistry_inValidInteger = cclearAllPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // cclearAllPluginRegistry_inValidInteger
export const cclearAllPluginRegistry_inValidBoolean = cclearAllPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // cclearAllPluginRegistry_inValidBoolean
export const cclearAllPluginRegistry_inValidUndefined = cclearAllPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + 'Undefined'; // cclearAllPluginRegistry_inValidUndefined
export const cclearAllPluginRegistry_inValidNaN = cclearAllPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + 'NaN'; // cclearAllPluginRegistry_inValidNaN

// writePluginRegistryToDisk
export const cwritePluginRegistryToDisk_validData = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cvalid + wrd.cData; // cwritePluginRegistryToDisk_validData
export const cwritePluginRegistryToDisk_inValidString = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cString; // cwritePluginRegistryToDisk_inValidString
export const cwritePluginRegistryToDisk_inValidInteger = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInteger; // cwritePluginRegistryToDisk_inValidInteger
export const cwritePluginRegistryToDisk_inValidBoolean = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cBoolean; // cwritePluginRegistryToDisk_inValidBoolean
export const cwritePluginRegistryToDisk_inValidUndefined = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cin + wrd.cValid + 'Undefined'; // cwritePluginRegistryToDisk_inValidUndefined
export const cwritePluginRegistryToDisk_inValidNaN = cwritePluginRegistryToDisk + bas.cUnderscore + wrd.cin + wrd.cValid + 'NaN'; // cwritePluginRegistryToDisk_inValidNaN

// loadPlugin
export const cloadPlugin_validPluginsPathData = cloadPlugin + bas.cUnderscore + wrd.cvalid + wrd.cPlugins + wrd.cPath + wrd.cData; // loadPlugin_validPluginsPathData
export const cloadPlugin_inValidPluginPathString = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cString; // loadPlugin_inValidPluginPathString
export const cloadPlugin_inValidPluginPathInteger = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cInteger; // loadPlugin_inValidPluginPathInteger
export const cloadPlugin_inValidPluginPathBoolean = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cBoolean; // loadPlugin_inValidPluginPathBoolean
export const cloadPlugin_inValidPluginPathUndefined = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // loadPlugin_inValidPluginPathUndefined
export const cloadPlugin_inValidPluginPathNaN = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; // loadPlugin_inValidPluginPathNaN

// loadPlugins
export const cloadPlugins_validPluginsPathsData = cloadPlugins + bas.cUnderscore + wrd.cvalid + wrd.cPlugins + wrd.cPaths + wrd.cData; // loadPlugin_validPluginsPathsData
export const cloadPlugins_inValidPluginsPathsString = cloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cString; // loadPlugin_inValidPluginPathString
export const cloadPlugins_inValidPluginsPathsInteger = cloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cInteger; // loadPlugin_inValidPluginPathInteger
export const cloadPlugins_inValidPluginsPathsBoolean = cloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cBoolean; // loadPlugin_inValidPluginPathBoolean
export const cloadPlugins_inValidPluginsPathsUndefined = cloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // loadPlugin_inValidPluginPathUndefined
export const cloadPlugins_inValidPluginsPathsNaN = cloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; // loadPlugin_inValidPluginPathNaN

// loadPluginsFromRegistry
export const cloadPluginsFromRegistry_validData = cloadPluginsFromRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // loadPluginsFromRegistry_validData

// unloadPlugin
export const cunloadPlugin_validPluginNameData = cunloadPlugin + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // unloadPlugin_validPluginNameData
export const cunloadPlugin_inValidPluginNameString = cunloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // unloadPlugin_inValidPluginNameString
export const cunloadPlugin_inValidPluginNameInteger = cunloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // unloadPlugin_inValidPluginNameInteger
export const cunloadPlugin_inValidPluginNameBoolean = cunloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // unloadPlugin_inValidPluginNameBoolean
export const cunloadPlugin_inValidPluginNameUndefined = cunloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // unloadPlugin_inValidPluginNameUndefined
export const cunloadPlugin_inValidPluginNameNaN = cunloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // unloadPlugin_inValidPluginNameNaN

// unloadPlugins
export const cunloadPlugins_validPluginNamesData = cunloadPlugins + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cNames + wrd.cData; //unloadPlugin_validPluginNamesData
export const cunloadPlugins_inValidPluginNamesString = cunloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cNames + wrd.cString; // unloadPlugin_inValidPluginNameString
export const cunloadPlugins_inValidPluginNamesInteger = cunloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cNames + wrd.cInteger; // unloadPlugin_inValidPluginNameInteger
export const cunloadPlugins_inValidPluginNamesBoolean = cunloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cNames + wrd.cBoolean; // unloadPlugin_inValidPluginNameBoolean
export const cunloadPlugins_inValidPluginNamesUndefined = cunloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cNames + "Undefined"; // unloadPlugin_inValidPluginNameUndefined
export const cunloadPlugins_inValidPluginNamesNaN = cunloadPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cNames + "NaN"; // unloadPlugin_inValidPluginNameNaN

// unloadAllPlugins
export const cunloadAllPlugins_validData = cunloadAllPlugins + bas.cUnderscore + wrd.cvalid + wrd.cData; // unloadAllPlugins_validData
export const cunloadAllPlugins_emptyData = cunloadAllPlugins + bas.cUnderscore + wrd.cempty + wrd.cData; // unloadAllPlugins_emptyData

// getPluginsRegistryPath
export const cgetPluginsRegistryPath_validData = cgetPluginsRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // getPluginsRegistryPath_validData

// loadPluginResourceData 
export const cloadPluginResourceData_validConfigurationData = cloadPluginResourceData + bas.cUnderscore + wrd.cvalid + wrd.cConfiguration + wrd.cData; // loadPluginResourceData_validConfigurationData
export const cloadPluginResourceData_validCommanderAliasesData = cloadPluginResourceData + bas.cUnderscore + wrd.cvalid + wrd.cCommander + wrd.cData; // loadPluginResourceData_validCommanderAliasesData
export const cloadPluginResourceData_validWorkflowsData = cloadPluginResourceData + bas.cUnderscore + wrd.cvalid + wrd.cWorkflows + wrd.cData; // loadPluginResourceData_validWorkflowsData
export const cloadPluginResourceData_validThemesData = cloadPluginResourceData + bas.cUnderscore + wrd.cvalid + wrd.cThemes + wrd.cData; // loadPluginResourceData_validThemesData
export const cloadPluginResourceData_inValidContextNameString = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cData ; // loadPluginResourceData_inValidContextNameString
export const cloadPluginResourceData_inValidPluginConfigPathString = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cResource + wrd.cData; // loadPluginResourceData_inValidPluginConfigPathString
export const cloadPluginResourceData_inValidContextNameInteger = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cName + wrd.cData ; // loadPluginResourceData_inValidContextNameInteger
export const cloadPluginResourceData_inValidContextNameBoolean = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cName + wrd.cData ; // loadPluginResourceData_inValidContextNameBoolean
export const cloadPluginResourceData_inValidPluginConfigPathInteger = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cResource + wrd.cData; // loadPluginResourceData_inValidPluginConfigPathInteger
export const cloadPluginResourceData_inValidPluginConfigPathBoolean = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cResource + wrd.cData; // loadPluginResourceData_inValidPluginConfigPathBoolean
export const cloadPluginResourceData_inValidContextNameUndefined = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cData ; // loadPluginResourceData_inValidContextNameUndefined
export const cloadPluginResourceData_inValidContextNameNaN = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cData ; // loadPluginResourceData_inValidContextNameNaN
export const cloadPluginResourceData_inValidPluginConfigPathUndefined = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cResource + wrd.cData; // loadPluginResourceData_inValidPluginConfigPathUndefined
export const cloadPluginResourceData_inValidPluginConfigPathNaN = cloadPluginResourceData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cResource + wrd.cData; // loadPluginResourceData_inValidPluginConfigPathNaN

// loadAllJsonData
export const cloadAllJsonData_validData = cloadAllJsonData + bas.cUnderscore + wrd.cvalid + wrd.cData; // loadAllJsonData_validData
export const cloadAllJsonData_inValidDataPathString = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cString; // loadAllJsonData_inValidDataPathString
export const cloadAllJsonData_inValidContextNameString = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // loadAllJsonData_inValidContextNameString
export const cloadAllJsonData_inValidDataPathInteger = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cInteger; // loadAllJsonData_inValidDataPathInteger
export const cloadAllJsonData_inValidDataPathBoolean = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cBoolean; // loadAllJsonData_inValidDataPathBoolean
export const cloadAllJsonData_inValidContextNameInteger = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // loadAllJsonData_inValidContextNameInteger
export const cloadAllJsonData_inValidContextNameBoolean = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // loadAllJsonData_inValidContextNameBoolean
export const cloadAllJsonData_inValidDataPathUndefined = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + 'Undefined'; // loadAllJsonData_inValidDataPathUndefined
export const cloadAllJsonData_inValidDataPathNaN = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + 'NaN'; // loadAllJsonData_inValidDataPathNaN
export const cloadAllJsonData_inValidContextNameUndefined = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // loadAllJsonData_inValidContextNameUndefined
export const cloadAllJsonData_inValidContextNameNaN = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // loadAllJsonData_inValidContextNameNaN

// storeData
export const cstoreData_validData = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cName; // cstoreData_validData
export const cstoreData_inValidDataName = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cName; // cstoreData_inValidDataName
export const cstoreData_inValidDataNameInteger = cstoreData + cstoreData_inValidDataName + wrd.cInteger; // cstoreData_inValidDataNameInteger
export const cstoreData_inValidDataNameBoolean = cstoreData + cstoreData_inValidDataName + wrd.cBoolean; // cstoreData_inValidDataNameBoolean
export const cstoreData_inValidDataNameUndefined = cstoreData + cstoreData_inValidDataName + 'Undefined'; // cstoreData_inValidDataNameUndefined
export const cstoreData_inValidDataNameNaN = cstoreData + cstoreData_inValidDataName + 'NaN'; // cstoreData_inValidDataNameNaN
export const cstoreData_inValidDataUndefined = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // cstoreData_inValidDataUndefined
export const cstoreData_inValidDataNaN = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; // cstoreData_inValidDataNaN

// getData
export const cgetData_validDataNameData = cgetData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cName + wrd.cData; // cgetData_validDataNameData
export const cgetData_inValidDataNameInteger = cgetData + bas.cUnderscore + wrd.cin + wrd.cValue + wrd.cData + wrd.cName + wrd.cInteger; // cgetData_inValidDataNameInteger
export const cgetData_inValidDataNameBoolean = cgetData + bas.cUnderscore + wrd.cin + wrd.cValue + wrd.cData + wrd.cName + wrd.cBoolean; // cgetData_inValidDataNameBoolean
export const cgetData_inValidDataNameUndefined = cgetData + bas.cUnderscore + wrd.cin + wrd.cValue + wrd.cData + wrd.cName + 'Undefined'; // cgetData_inValidDataNameUndefined
export const cgetData_inValidDataNameNaN = cgetData + bas.cUnderscore + wrd.cin + wrd.cValue + wrd.cData + wrd.cName + 'NaN'; // cgetData_inValidDataNameNaN

// clearData
export const cclearData_validDataNameData = cclearData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cName + wrd.cData; // clearData_validData
export const cclearData_validDataNameUndefined = cclearData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cName + "Undefined"; // clearData_validDataNameUndefined
export const cclearData_inValidDataNameInteger = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cName + wrd.cInteger; // clearData_inValidDataNameInteger
export const cclearData_inValidDataNameBoolean = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cName + wrd.cBoolean; // clearData_inValidDataNameBoolean
export const cclearData_inValidDataNameNaN = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cName + "NaN"; // clearData_inValidDataNameNaN

// executeBusinessRules
export const cexecuteBusinessRules_validData = cexecuteBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // executeBusinessRules_validDataNameData
export const cexecuteBusinessRules_inValidInputsString  = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cString; // executeBusinessRules_inValidInputsString 
export const cexecuteBusinessRules_inValidBusinessRulesString = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + sys.cBusinessRules + wrd.cString; // executeBusinessRules_inValidBusinessRulesString
export const cexecuteBusinessRules_inValidInputsInteger  = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cInteger; // executeBusinessRules_inValidInputsInteger 
export const cexecuteBusinessRules_inValidInputsBoolean  = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cBoolean; // executeBusinessRules_inValidInputsBoolean 
export const cexecuteBusinessRules_inValidBusinessRulesInteger = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + sys.cBusinessRules + wrd.cInteger; // executeBusinessRules_inValidBusinessRulesInteger
export const cexecuteBusinessRules_inValidBusinessRulesBoolean = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + sys.cBusinessRules + wrd.cBoolean; // executeBusinessRules_inValidBusinessRulesBoolean
export const cexecuteBusinessRules_inValidInputsUndefined  = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + 'Undefined'; // executeBusinessRules_inValidInputsUndefined 
export const cexecuteBusinessRules_inValidInputsNaN  = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + 'NaN'; // executeBusinessRules_inValidInputsNaN 
export const cexecuteBusinessRules_inValidBusinessRulesUndefined = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + sys.cBusinessRules + 'Undefined'; // executeBusinessRules_inValidBusinessRulesUndefined
export const cexecuteBusinessRules_inValidBusinessRulesNaN = cexecuteBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + sys.cBusinessRules + 'NaN'; // executeBusinessRules_inValidBusinessRulesNaN

// enqueueCommand
export const cenqueueCommand_validCommandData = cenqueueCommand + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cData; // enqueueCommand_validCommandData
export const cenqueueCommand_inValidCommandInteger = cenqueueCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cInteger; // enqueueCommand_inValidCommandInteger
export const cenqueueCommand_inValidCommandBoolean = cenqueueCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cBoolean; // enqueueCommand_inValidCommandBoolean
export const cenqueueCommand_inValidCommandUndefined = cenqueueCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + "Undefined"; // enqueueCommand_inValidCommandUndefined
export const cenqueueCommand_inValidCommandNaN = cenqueueCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + "NaN"; // enqueueCommand_inValidCommandNaN

// isCommandQueueEmpty
export const cisCommandQueueEmpty_validTruthyData = cisCommandQueueEmpty + bas.cUnderscore + wrd.cvalid + gen.cTruthy + wrd.cData; // isCommandQueueEmpty_validData
export const cisCommandQueueEmpty_validFalsyData = cisCommandQueueEmpty + bas.cUnderscore + wrd.cvalid + gen.cFalsy + wrd.cData; // isCommandQueueEmpty_validData

// processCommandQueue
export const cprocessCommandQueue_validData = cprocessCommandQueue + bas.cUnderscore + wrd.cvalid + wrd.cData; // processCommandQueue_validData

// setConfigurationSetting
export const csetConfigurationSetting_validData = csetConfigurationSetting + bas.cUnderscore + wrd.cvalid + wrd.cData; // setConfigurationSetting_validData
export const csetConfigurationSetting_inValidConfigurationNamespaceString = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cString; // setConfigurationSetting_inValid ConfigurationNamespaceString
export const csetConfigurationSetting_inValidConfigurationNameString = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cString; // setConfigurationSetting_inValidConfigurationNameString
export const csetConfigurationSetting_inValidConfigurationValueString = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cValue + wrd.cString; // setConfigurationSetting_inValidConfigurationValueString
export const csetConfigurationSetting_inValidConfigurationNamespaceInteger = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cInteger; // setConfigurationSetting_inValid ConfigurationNamespaceInteger
export const csetConfigurationSetting_inValidConfigurationNamespaceBoolean = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cBoolean; // setConfigurationSetting_inValid ConfigurationNamespaceBoolean
export const csetConfigurationSetting_inValidConfigurationNamespaceUndefined = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + 'Undefined'; // setConfigurationSetting_inValid ConfigurationNamespaceUndefined
export const csetConfigurationSetting_inValidConfigurationNamespaceNaN = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + 'NaN'; // setConfigurationSetting_inValid ConfigurationNamespaceNaN
export const csetConfigurationSetting_inValidConfigurationNameInteger = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cInteger; // setConfigurationSetting_inValidConfigurationNameInteger
export const csetConfigurationSetting_inValidConfigurationNameBoolean = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cBoolean; // setConfigurationSetting_inValidConfigurationNameBoolean
export const csetConfigurationSetting_inValidConfigurationNameUndefined = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + 'Undefined'; // setConfigurationSetting_inValidConfigurationNameUndefined
export const csetConfigurationSetting_inValidConfigurationNameNaN = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + 'NaN'; // setConfigurationSetting_inValidConfigurationNameNaN
export const csetConfigurationSetting_inValidConfigurationValueInteger = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cValue + wrd.cInteger; // setConfigurationSetting_inValidConfigurationValueInteger
export const csetConfigurationSetting_inValidConfigurationValueBoolean = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cValue + wrd.cBoolean; // setConfigurationSetting_inValidConfigurationValueBoolean
export const csetConfigurationSetting_inValidConfigurationValueUndefined = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cValue + 'Undefined'; // setConfigurationSetting_inValidConfigurationValueUndefined
export const csetConfigurationSetting_inValidConfigurationValueNaN = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cValue + 'NaN'; // setConfigurationSetting_inValidConfigurationValueNaN
export const csetConfigurationSetting_inValidAllUndefined = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'Undefined'; // setConfigurationSetting_inValidAllUndefined
export const csetConfigurationSetting_inValidAllNaN = csetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'NaN'; // setConfigurationSetting_inValidAllNaN

// getConfigurationSetting
export const cgetConfigurationSetting_validData = cgetConfigurationSetting + bas.cUnderscore + wrd.cvalid + wrd.cData; // getConfigurationSetting_validData
export const cgetConfigurationSetting_inValidConfigurationNamespaceString = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cString; // getConfigurationSetting_inValid ConfigurationNamespaceString
export const cgetConfigurationSetting_inValidConfigurationNameString = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cString; // getConfigurationSetting_inValidConfigurationNameString
export const cgetConfigurationSetting_inValidConfigurationNamespaceInteger = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cInteger; // getConfigurationSetting_inValid ConfigurationNamespaceInteger
export const cgetConfigurationSetting_inValidConfigurationNamespaceBoolean = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cBoolean; // getConfigurationSetting_inValid ConfigurationNamespaceBoolean
export const cgetConfigurationSetting_inValidConfigurationNameInteger = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cInteger; // getConfigurationSetting_inValidConfigurationNameInteger
export const cgetConfigurationSetting_inValidConfigurationNameBoolean = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cBoolean; // getConfigurationSetting_inValidConfigurationNameBoolean
export const cgetConfigurationSetting_inValidConfigurationNamespaceUndefined = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + 'Undefined'; // getConfigurationSetting_inValid ConfigurationNamespaceUndefined
export const cgetConfigurationSetting_inValidConfigurationNamespaceNaN = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + wrd.cspace + 'NaN'; // getConfigurationSetting_inValid ConfigurationNamespaceNaN
export const cgetConfigurationSetting_inValidConfigurationNameUndefined = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + 'Undefined'; // getConfigurationSetting_inValidConfigurationNameUndefined
export const cgetConfigurationSetting_inValidConfigurationNameNaN = cgetConfigurationSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConfiguration + wrd.cName + 'NaN'; // getConfigurationSetting_inValidConfigurationNameNaN

// consoleLog
export const cconsoleLog_validData = cconsoleLog + bas.cUnderscore + wrd.cvalid + wrd.cData; // consoleLog_validData
export const cconsoleLog_inValidTheNamespacePrefixString = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cNamespace + wrd.cPrefix + wrd.cString; // consoleLog_inValidTheNamespacePrefixString
export const cconsoleLog_inValidTheFunctionNameString = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cFunction + wrd.cName + wrd.cString; // consoleLog_inValidTheFunctionNameString
export const cconsoleLog_inValidTheNamespacePrefixInteger = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cNamespace + wrd.cPrefix + wrd.cInteger; // consoleLog_inValidTheNamespacePrefixInteger
export const cconsoleLog_inValidTheNamespacePrefixBoolean = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cNamespace + wrd.cPrefix + wrd.cBoolean; // consoleLog_inValidTheNamespacePrefixBoolean
export const cconsoleLog_inValidTheNamespacePrefixUndefined = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cNamespace + wrd.cPrefix + 'Undefined'; // consoleLog_inValidTheNamespacePrefixUndefined
export const cconsoleLog_inValidTheNamespacePrefixNaN = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cNamespace + wrd.cPrefix + 'NaN'; // consoleLog_inValidTheNamespacePrefixNaN
export const cconsoleLog_inValidTheFunctionNameInteger = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cFunction + wrd.cName + wrd.cInteger; // consoleLog_inValidTheFunctionNameInteger
export const cconsoleLog_inValidTheFunctionNameBoolean = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cFunction + wrd.cName + wrd.cBoolean; // consoleLog_inValidTheFunctionNameBoolean
export const cconsoleLog_inValidTheFunctionNameUndefined = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cFunction + wrd.cName + 'Undefined'; // consoleLog_inValidTheFunctionNameUndefined
export const cconsoleLog_inValidTheFunctionNameNaN = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThe + wrd.cFunction + wrd.cName + 'NaN'; // consoleLog_inValidTheFunctionNameNaN
export const cconsoleLog_inValidAllUndefined = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'Undefined'; // consoleLog_inValidAllUndefined
export const cconsoleLog_inValidAllNaN = cconsoleLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'NaN'; // consoleLog_inValidAllNaN

// consoleTableLog
export const cconsoleTableLog_validData = cconsoleTableLog + bas.cUnderscore + wrd.cvalid + wrd.cData; // consoleTableLog_validData
export const cconsoleTableLog_inValidClassPathString = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClass + wrd.cPath + wrd.cString; // consoleTableLog_inValidClassPathString
export const cconsoleTableLog_inValidTableDataString = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTable + wrd.cData + wrd.cString; // consoleTableLog_inValidTableDataString
export const cconsoleTableLog_inValidColumnNamesString = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cColumn + wrd.cNames + wrd.cString; // consoleTableLog_inValidColumnNamesString
export const cconsoleTableLog_inValidClassPathInteger = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClass + wrd.cPath + wrd.cInteger; // consoleTableLog_inValidClassPathInteger
export const cconsoleTableLog_inValidClassPathBoolean = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClass + wrd.cPath + wrd.cBoolean; // consoleTableLog_inValidClassPathBoolean
export const cconsoleTableLog_inValidClassPathUndefined = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClass + wrd.cPath + 'Undefined'; // consoleTableLog_inValidClassPathUndefined
export const cconsoleTableLog_inValidClassPathNaN = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClass + wrd.cPath + 'NaN'; // consoleTableLog_inValidClassPathNaN
export const cconsoleTableLog_inValidTableDataInteger = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTable + wrd.cData + wrd.cInteger; // consoleTableLog_inValidTableDataInteger
export const cconsoleTableLog_inValidTableDataBoolean = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTable + wrd.cData + wrd.cBoolean; // consoleTableLog_inValidTableDataBoolean
export const cconsoleTableLog_inValidTableDataUndefined = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTable + wrd.cData + 'Undefined'; // consoleTableLog_inValidTableDataUndefined
export const cconsoleTableLog_inValidTableDataNaN = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTable + wrd.cData + 'NaN'; // consoleTableLog_inValidTableDataNaN
export const cconsoleTableLog_inValidColumnNamesInteger = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cColumn + wrd.cNames + wrd.cInteger; // consoleTableLog_inValidColumnNamesInteger
export const cconsoleTableLog_inValidColumnNamesBoolean = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cColumn + wrd.cNames + wrd.cBoolean; // consoleTableLog_inValidColumnNamesBoolean
export const cconsoleTableLog_inValidColumnNamesNaN = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cColumn + wrd.cNames + 'NaN'; // consoleTableLog_inValidColumnNamesNaN
export const cconsoleTableLog_inValidAllUndefined = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'Undefined'; // consoleTableLog_inValidAllUndefined
export const cconsoleTableLog_inValidAllNaN = cconsoleTableLog + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + 'NaN'; // consoleTableLog_inValidAllNaN


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