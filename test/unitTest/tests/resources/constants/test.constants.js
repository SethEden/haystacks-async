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

const {bas, biz, cfg, fnc, gen, msg, phn, sys, wrd} = hayConst;


// testConstantsValidationMetadata
export const cUnitTestName = wrd.cUnit + wrd.cTest + wrd.cHarness; // testHarness

// Describe names

/* commandBroker */
export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands; // bootStrapCommands
export const cresetCommands = wrd.creset + wrd.cCommands; // resetCommands
export const caddClientCommands = wrd.c_add + wrd.cClient + wrd.cCommands; // addClientCommands
export const caddPluginCommands = wrd.c_add + wrd.cPlugin + wrd.cCommands; // addPluginCommands
export const caddPluginCommandAliases = wrd.c_add + wrd.cPlugin + wrd.cCommand + wrd.cAliases; // addPluginCommandAliases
export const cgetValidCommand = wrd.cget + wrd.cValid + wrd.cCommand; // getValidCommand
export const ccountMatchingCommandAlias = wrd.ccount + wrd.cMatching + wrd.cCommand + wrd.cAlias; // countMatchingCommandAlias
export const csearchCommandAlias = wrd.csearch + wrd.cCommand + wrd.cAlias; // searchCommandAlias
export const cgetAllCommandAliasData = wrd.cget + wrd.cAll + wrd.cCommand + wrd.cAlias + wrd.cData; // getAllCommandAliasData
export const cgetCommandNamespaceDataObject = wrd.cget + wrd.cCommand + wrd.cNamespace + wrd.cData + wrd.cObject; // getCommandNamespaceDataObject
export const cgetCommandArgs = wrd.cget + wrd.cCommand + gen.cArgs; // getCommandArgs
export const cexecuteCommand = wrd.cexecute + wrd.cCommand; // executeCommand
export const cremovePluginCommands = wrd.cremove + wrd.cPlugin + wrd.cCommands; // removePluginCommands
export const cremovePluginCommandAliases = wrd.cremove + wrd.cPlugin + wrd.cCommand + wrd.cAliases; // removePluginCommandAliases

/* constantBroker */
export const cinitializeConstantsValidationData = wrd.cinitialize + wrd.cConstants + wrd.cValidation + wrd.cData; // initializeConstantsValidationData
export const cgenerateFrameworkConstantsValidationData = wrd.cgenerate + wrd.cFramework + wrd.cConstants + wrd.cValidation + wrd.cData; // generateFrameworkConstantsValidationData
export const caddConstantsValidationData = wrd.c_add + wrd.cConstants + wrd.cValidation + wrd.cData; // addConstantsValidationDat
export const cremovePluginConstantsValidationData = wrd.cremove + wrd.cPlugin + wrd.cConstants + wrd.cValidation + wrd.cData; // removePluginConstantsValidationData

/* dataBroker */
export const caddPluginConfigurationData = wrd.c_add + wrd.cPlugin + wrd.cConfiguration + wrd.cData; // addPluginConfigurationData
export const cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath; // scanDataPath
export const cfindUniversalDebugConfigSetting = wrd.cfind + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting; // findUniversalDebugConfigSetting
export const cloadAllCsvData = wrd.cload + wrd.cAll + gen.cCsv + wrd.cData; // loadAllCsvData
export const cloadAllXmlData = wrd.cload + wrd.cAll + gen.cXml + wrd.cData; // loadAllXmlData
export const cprocessCsvData = wrd.cprocess + gen.cCsv + wrd.cData; // processCsvData
export const cpreprocessJsonFile = wrd.cpreprocess + gen.cJson + wrd.cFile; // preprocessJsonFile
export const cwriteJsonDataToFile = wrd.cwrite + gen.cJson + wrd.cData + wrd.cTo + wrd.cFile; // writeJsonDataToFile
export const csetupDataStorage = wrd.csetup + wrd.cData + wrd.cStorage; // setupDataStorage
export const cremovePluginConfigurationData = wrd.cremove + wrd.cPlugin + wrd.cConfiguration + wrd.cData; // removePluginConfigurationData

/* pluginBroker */
export const cloadPluginRegistry = wrd.cload + wrd.cPlugin + wrd.cRegistry; // loadPluginRegistry
export const cstorePluginRegistryInDataStructure = wrd.cstore + wrd.cPlugin + wrd.cRegistry + wrd.cIn + wrd.cData + wrd.cStructure; // storePluginRegistryInDataStructure
export const clistAllLoadedPlugins = wrd.clist + wrd.cAll + wrd.cLoaded + wrd.cPlugins; // listAllLoadedPlugins
export const clistPluginsInRegistry = wrd.clist + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // listPluginsInRegistry
export const clistPluginsPathsInRegistry = wrd.clist + wrd.cPlugins + wrd.cPaths + wrd.cIn + wrd.cRegistry; // listPluginsPathsInRegistry
export const clistPluginsAttributeInRegistry = wrd.clist + wrd.cPlugins + wrd.cAttribute + wrd.cIn + wrd.cRegistry; // listPluginsAttributeInRegistry
export const clistPluginsInRegistryPath = wrd.clist + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // listPluginsInRegistryPath
export const ccountPluginsInRegistry = wrd.ccount + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // countPluginsInRegistry
export const ccountPluginsInRegistryPath = wrd.ccount + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // countPluginsInRegistryPath
export const cregisterPlugin = wrd.cregister + wrd.cPlugin; // registerPlugin
export const cunregisterPlugin = wrd.cunregister + wrd.cPlugin; // unregisterPlugin
export const csyncPluginRegistryWithPluginRegistryPath = wrd.csync + wrd.cPlugin + wrd.cRegistry + wrd.cWith + wrd.cPlugin + wrd.cRegistry + wrd.cPath; // syncPluginRegistryWithPluginRegistryPath
export const cunregisterAllPlugins = wrd.cunregister + wrd.cAll + wrd.cPlugins; // unregisterAllPlugins
export const csavePluginRegistry = wrd.csave + wrd.cPlugins + wrd.cRegistry; // savePluginRegistry
export const cloadPluginMetaData = wrd.cload + wrd.cPlugin + wrd.cMeta + wrd.cData; // loadPluginMetaData
export const cextractAndProcessPluginEntryPointURI = wrd.cextract + wrd.cAnd + wrd.cProcess + wrd.cPlugin + wrd.cEntry + wrd.cPoint + gen.cURI; // extractAndProcessPluginEntryPointURI
export const cintegratePluginBusinessRules = wrd.cintegrate + wrd.cPlugin + wrd.cBusiness + wrd.cRules; // integratePluginBusinessRules
export const cintegratePluginCommands = wrd.cintegrate + wrd.cPlugin + wrd.cCommands; // integratePluginCommands
export const cintegratePluginConfigurationData = wrd.cintegrate + wrd.cPlugin + wrd.cConfiguration + wrd.cData; // integratePluginConfigurationData
export const cintegratePluginCommandAliases = wrd.cintegrate + wrd.cPlugin + wrd.cCommand + wrd.cAliases; // integratePluginCommandAliases
export const cintegratePluginWorkflows = wrd.cintegrate + wrd.cPlugin + wrd.cWorkflows; // integratePluginWorkflows
export const cintegratePluginThemeData = wrd.cintegrate + wrd.cPlugin + wrd.cTheme + wrd.cData; // integratePluginThemeData

/* ruleBroker */
export const cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules; // bootStrapBusinessRules
export const cresetBusinessRules = wrd.creset + sys.cBusinessRules; // resetBusinessRules
export const caddClientRules = wrd.c_add + wrd.cClient + wrd.cRules; // addClientRules
export const caddPluginRules = wrd.c_add + wrd.cPlugin + wrd.cRules; // addPluginRules
export const cprocessRules = wrd.cprocess + wrd.cRules; // processRules
export const cremovePluginBusinessRules = wrd.cremove + wrd.cPlugin + sys.cBusinessRules; // removePluginBusinessRules

/* themeBroker */
export const cinitThemeData = gen.cinit + wrd.cTheme + wrd.cData; // initThemeData
export const cgenerateThemeDataFromPath = wrd.cgenerate + wrd.cTheme + wrd.cData + wrd.cFrom + wrd.cPath; // generateThemeDataFromPath
export const caddThemeData = wrd.c_add + wrd.cTheme + wrd.cData; // addThemeData
export const cgetNamedThemesFromRootPath = wrd.cget + wrd.cNamed + wrd.cThemes + wrd.cFrom + wrd.cRoot + wrd.cPath; // getNamedThemesFromRootPath
export const cgetNamedThemePathFromRootPath = wrd.cget + wrd.cNamed + wrd.cTheme + wrd.cPath + wrd.cFrom + wrd.cRoot + wrd.cPath; // getNamedThemePathFromRootPath
export const cloadTheme = wrd.cload + wrd.cTheme; // loadTheme
export const capplyTheme = wrd.capply + wrd.cTheme; // applyTheme
export const cremovePluginThemeData = wrd.cremove + wrd.cPlugin + wrd.cTheme + wrd.cData; // removePluginThemeData

/* workflowBroker */
export const caddPluginWorkflows = wrd.c_add + wrd.cPlugin + wrd.cWorkflows; // addPluginWorkflows
export const cgetWorkflow = wrd.cget + wrd.cWorkflow; // getWorkflow
export const cdoesWorkflowExist = wrd.cdoes + wrd.cWorkflow + wrd.cExist; // doesWorkflowExist
export const cdoesWorkflowExistInWorkflowData = wrd.cdoes + wrd.cWorkflow + wrd.cExist + wrd.cIn + wrd.cWorkflow + wrd.cData; // doesWorkflowExistInWorkflowData
export const csearchWorkflow = wrd.csearch + wrd.cWorkflow; // searchWorkflow
export const cgetAllWorkflows = wrd.cget + wrd.cAll + wrd.cWorkflows; // getAllWorkflows
export const cgetWorkflowNamespaceDataObject = wrd.cget + wrd.cWorkflow + wrd.cNamespace + wrd.cData + wrd.cObject; // getWorkflowNamespaceDataObject
export const cremovePluginWorkflows = wrd.cremove + wrd.cPlugin + wrd.cWorkflows; // removePluginWorkflows

/* auxiliaryArrayParsing */
export const cparseColorRangeInputs = biz.cparseColorRangeInputs; // parseColorRangeInputs
export const cgetNamedColorDataArray = biz.cgetNamedColorDataArray; // getNamedColorDataArray
export const cdoesArrayContainValue = biz.cdoesArrayContainValue; // doesArrayContainValu

/* characterArrayParsing */
export const creplaceCharacterWithCharacter = biz.creplaceCharacterWithCharacter; // replaceCharacterWithCharacter
export const cdoesArrayContainCharacter = biz.cdoesArrayContainCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = biz.cremoveCharacterFromArray; // removeCharacterFromArray
export const creplaceCharacterAtIndex = biz.creplaceCharacterAtIndex; // replaceCharacterAtIndex


/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* auxiliaryStringParsing */

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

// addPluginCommands
export const caddPluginCommands_validData = caddPluginCommands + bas.cUnderscore + wrd.cvalid + wrd.cData; // addPluginCommands_validData
export const caddPluginCommands_inValidPluginCommandsString = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cString; // addPluginCommands_inValidPluginCommandsString
export const caddPluginCommands_inValidPluginNameInteger = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // addPluginCommands_inValid PluginNameInteger
export const caddPluginCommands_inValidPluginNameBoolean = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // addPluginCommands_inValid PluginNameBoolean
export const caddPluginCommands_inValidPluginCommandsInteger = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cInteger; // addPluginCommands_inValidPluginCommandsInteger
export const caddPluginCommands_inValidPluginCommandsBoolean = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cBoolean; // addPluginCommands_inValidPluginCommandsBoolean
export const caddPluginCommands_inValidPluginNameUndefined = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // addPluginCommands_inValid PluginNameUndefined
export const caddPluginCommands_inValidPluginNameNaN = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // addPluginCommands_inValid PluginNameNaN
export const caddPluginCommands_inValidPluginCommandsUndefined = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + 'Undefined'; // addPluginCommands_inValidPluginCommandsUndefined
export const caddPluginCommands_inValidPluginCommandsNaN = caddPluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + 'NaN'; // addPluginCommands_inValidPluginCommandsNaN

// addPluginCommandAliases
export const caddPluginCommandAliases_validData = caddPluginCommandAliases + bas.cUnderscore + wrd.cvalid + wrd.cData; // addPluginCommandAliases_validData
export const caddPluginCommandAliases_inValidPluginCommandAliasesString = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cString; // addPluginCommandAliases_inValidPluginCommandAliasesString
export const caddPluginCommandAliases_inValidPluginNameInteger = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // addPluginCommandAliases_inValidPluginNameInteger
export const caddPluginCommandAliases_inValidPluginNameBoolean = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // addPluginCommandAliases_inValidPluginNameBoolean
export const caddPluginCommandAliases_inValidPluginCommandAliasesInteger = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cInteger; // addPluginCommandAliases_inValidPluginCommandAliasesInteger
export const caddPluginCommandAliases_inValidPluginCommandAliasesBoolean = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cBoolean; // addPluginCommandAliases_inValidPluginCommandAliasesBoolean
export const caddPluginCommandAliases_inValidPluginNameUndefined = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // addPluginCommandAliases_inValidPluginNameUndefined
export const caddPluginCommandAliases_inValidPluginNameNaN = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // addPluginCommandAliases_inValidPluginNameNaN
export const caddPluginCommandAliases_inValidPluginCommandAliasesUndefined = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + 'Undefined'; // addPluginCommandAliases_inValidPluginCommandAliasesUndefined
export const caddPluginCommandAliases_inValidPluginCommandAliasesNaN = caddPluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + 'NaN'; // addPluginCommandAliases_inValidPluginCommandAliasesNaN

// getValidCommand
export const cgetValidCommand_validData = cgetValidCommand + bas.cUnderscore + wrd.cvalid + wrd.cData; // getValidCommand_validData
export const cgetValidCommand_inValidCommandStringString = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cString; // getValidCommand_inValidCommandStringString
export const cgetValidCommand_inValidCommandDelimiterString = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cString; // getValidCommand_inValidCommandDelimiterString
export const cgetValidCommand_inValidCommandStringInteger = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cInteger; // getValidCommand_inValidCommandStringInteger
export const cgetValidCommand_inValidCommandStringBoolean = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cBoolean; // getValidCommand_inValidCommandStringBoolean
export const cgetValidCommand_inValidCommandDelimiterInteger = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cInteger; // getValidCommand_inValidCommandDelimiterInteger
export const cgetValidCommand_inValidCommandDelimiterBoolean = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cBoolean; // getValidCommand_inValidCommandDelimiterBoolean
export const cgetValidCommand_inValidCommandStringUndefined = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + 'Undefined'; // getValidCommand_inValidCommandStringUndefined
export const cgetValidCommand_inValidCommandStringNaN = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + 'NaN'; // getValidCommand_inValidCommandStringNaN
export const cgetValidCommand_inValidCommandDelimiterUndefined = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + 'Undefined'; // getValidCommand_inValidCommandDelimiterUndefined
export const cgetValidCommand_inValidCommandDelimiterNaN = cgetValidCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + 'NaN'; // getValidCommand_inValidCommandDelimiterNaN

// countMatchingCommandAlias
export const ccountMatchingCommandAlias_validData = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cvalid + wrd.cData; // countMatchingCommandAlias_validData
export const ccountMatchingCommandAlias_inValidCommandAliasDataString = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString; // countMatchingCommandAlias_inValidCommandAliasDataString
export const ccountMatchingCommandAlias_inValidCommandAliasNameString = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString; // countMatchingCommandAlias_inValidCommandAliasNameString
export const ccountMatchingCommandAlias_inValidCommandAliasDataInteger = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cInteger; // countMatchingCommandAlias_inValidCommandAliasDataInteger
export const ccountMatchingCommandAlias_inValidCommandAliasDataBoolean = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean; // countMatchingCommandAlias_inValidCommandAliasDataBoolean
export const ccountMatchingCommandAlias_inValidCommandAliasNameInteger = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cInteger; // countMatchingCommandAlias_inValidCommandAliasNameInteger
export const ccountMatchingCommandAlias_inValidCommandAliasNameBoolean = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean; // countMatchingCommandAlias_inValidCommandAliasNameBoolean
export const ccountMatchingCommandAlias_inValidCommandAliasDataUndefined = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + 'Undefined'; // countMatchingCommandAlias_inValidCommandAliasDataUndefined
export const ccountMatchingCommandAlias_inValidCommandAliasDataNaN = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + 'NaN'; // countMatchingCommandAlias_inValidCommandAliasDataNaN
export const ccountMatchingCommandAlias_inValidCommandAliasNameUndefined = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + 'Undefined'; // countMatchingCommandAlias_inValidCommandAliasNameUndefined
export const ccountMatchingCommandAlias_inValidCommandAliasNameNaN = ccountMatchingCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + 'NaN'; // countMatchingCommandAlias_inValidCommandAliasNameNaN

// searchCommandAlias
export const csearchCommandAlias_validData = csearchCommandAlias + bas.cUnderscore + wrd.cvalid + wrd.cData; // searchCommandAlias_validData
export const csearchCommandAlias_inValidCommandAliasDataString = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString; // searchCommandAlias_inValidCommandAliasDataString
export const csearchCommandAlias_inValidCommandAliasNameString = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString; // searchCommandAlias_inValidCommandAliasNameString
export const csearchCommandAlias_inValidCommandAliasDataInteger = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cInteger; // searchCommandAlias_inValidCommandAliasDataInteger
export const csearchCommandAlias_inValidCommandAliasDataBoolean = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean; // searchCommandAlias_inValidCommandAliasDataBoolean
export const csearchCommandAlias_inValidCommandAliasNameInteger = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cInteger; // searchCommandAlias_inValidCommandAliasNameInteger
export const csearchCommandAlias_inValidCommandAliasNameBoolean = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean; // searchCommandAlias_inValidCommandAliasNameBoolean
export const csearchCommandAlias_inValidCommandAliasDataUndefined = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + 'Undefined'; // searchCommandAlias_inValidCommandAliasDataUndefined
export const csearchCommandAlias_inValidCommandAliasDataNaN = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + 'NaN'; // searchCommandAlias_inValidCommandAliasDataNaN
export const csearchCommandAlias_inValidCommandAliasNameUndefined = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + 'Undefined'; // searchCommandAlias_inValidCommandAliasNameUndefined
export const csearchCommandAlias_inValidCommandAliasNameNaN = csearchCommandAlias + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cName + 'NaN'; // searchCommandAlias_inValidCommandAliasNameNaN

// getAllCommandAliasData
export const cgetAllCommandAliasData_validCommandAliasDataStructureData = cgetAllCommandAliasData + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cData; // getAllCommandAliasData_validCommandAliasDataStructureData
export const cgetAllCommandAliasData_inValidCommandAliasDataStructureString = cgetAllCommandAliasData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cString; // getAllCommandAliasData_inValidCommandAliasDataStructureString
export const cgetAllCommandAliasData_inValidCommandAliasDataStructureInteger = cgetAllCommandAliasData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cInteger; // getAllCommandAliasData_inValidCommandAliasDataStructureInteger
export const cgetAllCommandAliasData_inValidCommandAliasDataStructureBoolean = cgetAllCommandAliasData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cBoolean; // getAllCommandAliasData_inValidCommandAliasDataStructureBoolean
export const cgetAllCommandAliasData_validCommandAliasDataStructureUndefined = cgetAllCommandAliasData + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + "Undefined"; // getAllCommandAliasData_validCommandAliasDataStructureUndefined
export const cgetAllCommandAliasData_inValidCommandAliasDataStructureNaN = cgetAllCommandAliasData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + "NaN"; // getAllCommandAliasData_inValidCommandAliasDataStructureNaN

// getCommandNamespaceDataObject
export const cgetCommandNamespaceDataObject_validData = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cvalid + wrd.cData; // getCommandNamespaceDataObject_validData
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cString; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureString
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindString = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString; // getCommandNamespaceDataObject_inValidNamespaceToFindString
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureInteger = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cInteger; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureInteger
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cBoolean; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindInteger = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cInteger; // getCommandNamespaceDataObject_inValidNamespaceToFindInteger
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cBoolean; // getCommandNamespaceDataObject_inValidNamespaceToFindBoolean
export const cgetCommandNamespaceDataObject_validCommandAliasDataStructureUndefined = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + 'Undefined'; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureUndefined
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNaN = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + 'NaN'; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureNaN
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindUndefined = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + 'Undefined'; // getCommandNamespaceDataObject_inValidNamespaceToFindUndefined
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindNaN = cgetCommandNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + 'NaN'; // getCommandNamespaceDataObject_inValidNamespaceToFindNaN

// getCommandArgs
export const cgetCommandArgs_validData = cgetCommandArgs + bas.cUnderscore + wrd.cvalid + wrd.cData; // getCommandArgs_validData
export const cgetCommandArgs_inValidCommandStringString = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cString; // getCommandArgs_inValidCommandStringString
export const cgetCommandArgs_inValidCommandDelimiterString = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cString; // getCommandArgs_inValidCommandDelimiterString
export const cgetCommandArgs_inValidCommandStringInteger = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cInteger; // getCommandArgs_inValidCommandStringInteger
export const cgetCommandArgs_inValidCommandStringBoolean = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cBoolean; // getCommandArgs_inValidCommandStringBoolean
export const cgetCommandArgs_inValidCommandDelimiterInteger = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cInteger; // getCommandArgs_inValidCommandDelimiterInteger
export const cgetCommandArgs_inValidCommandDelimiterBoolean = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cDelimiter + wrd.cBoolean; // getCommandArgs_inValidCommandDelimiterBoolean
export const cgetCommandArgs_inValidCommandStringUndefined = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + 'Undefined'; // getCommandArgs_inValidCommandStringUndefined
export const cgetCommandArgs_inValidCommandStringNaN = cgetCommandArgs + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + 'NaN'; // getCommandArgs_inValidCommandStringNaN
export const cgetCommandArgs_validCommandDelimiterUndefined = cgetCommandArgs + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cDelimiter + 'Undefined'; // getCommandArgs_inValidCommandDelimiterUndefined
export const cgetCommandArgs_validCommandDelimiterNaN = cgetCommandArgs + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cDelimiter + 'NaN'; // getCommandArgs_inValidCommandDelimiterNaN

// executeCommand
export const cexecuteCommand_validCommandStringData = cexecuteCommand + bas.cUnderscore + wrd.cvalid + wrd.cCommand + wrd.cString + wrd.cData; // executeCommand_validCommandStringData
export const cexecuteCommand_inValidCommandStringString = cexecuteCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cString; // executeCommand_inValidCommandStringString
export const cexecuteCommand_inValidCommandStringInteger = cexecuteCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cInteger; // executeCommand_inValidCommandStringInteger
export const cexecuteCommand_inValidCommandStringBoolean = cexecuteCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + wrd.cBoolean; // executeCommand_inValidCommandStringBoolean
export const cexecuteCommand_inValidCommandStringUndefined = cexecuteCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + "Undefined"; // executeCommand_inValidCommandStringUndefined
export const cexecuteCommand_inValidCommandStringNaN = cexecuteCommand + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cCommand + wrd.cString + "NaN"; // executeCommand_inValidCommandStringNaN

// removePluginCommands
export const cremovePluginCommands_validPluginNameData = cremovePluginCommands + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginCommands_validPluginNameData
export const cremovePluginCommands_inValidPluginNameString = cremovePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginCommands_inValidPluginNameString
export const cremovePluginCommands_inValidPluginNameInteger = cremovePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginCommands_inValidPluginNameInteger
export const cremovePluginCommands_inValidPluginNameBoolean = cremovePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginCommands_inValidPluginNameBoolean
export const cremovePluginCommands_inValidPluginNameUndefined = cremovePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginCommands_inValidPluginNameUndefined
export const cremovePluginCommands_inValidPluginNameNaN = cremovePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginCommands_inValidPluginNameNaN

// removePluginCommandAliases
export const cremovePluginCommandAliases_validPluginNameData = cremovePluginCommandAliases + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginCommandAliases_validPluginNameData
export const cremovePluginCommandAliases_inValidPluginNameString = cremovePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginCommandAliases_inValidPluginNameString
export const cremovePluginCommandAliases_inValidPluginNameInteger = cremovePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginCommandAliases_inValidPluginNameInteger
export const cremovePluginCommandAliases_inValidPluginNameBoolean = cremovePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginCommandAliases_inValidPluginNameBoolean
export const cremovePluginCommandAliases_inValidPluginNameUndefined = cremovePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginCommandAliases_inValidPluginNameUndefined
export const cremovePluginCommandAliases_inValidPluginNameNaN = cremovePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginCommandAliases_inValidPluginNameNaN

/* constantBroker */
// initializeConstantsValidationData
export const cinitializeConstantsValidationData_validData = cinitializeConstantsValidationData + bas.cUnderscore + wrd.cvalid + wrd.cData; // initializeConstantsValidationData_validData

// generateFrameworkConstantsValidationData
export const cgenerateFrameworkConstantsValidationData_validData = cgenerateFrameworkConstantsValidationData + bas.cUnderscore + wrd.cvalid + wrd.cData; // generateFrameworkConstantsValidationData_validData

// addConstantsValidationData
export const caddConstantsValidationData_validData = caddConstantsValidationData + bas.cUnderscore + wrd.cvalid + wrd.cData; // addConstantsValidationData_validData
export const caddConstantsValidationData_inValidConstantsValidationDataString = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConstants + wrd.cValidation + wrd.cData + wrd.cString; // addConstantsValidationData_inValidConstantsValidationDataString
export const caddConstantsValidationData_inValidContextNameString = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // addConstantsValidationData_inValidContextNameString
export const caddConstantsValidationData_inValidConstantsValidationDataInteger = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConstants + wrd.cValidation + wrd.cData + wrd.cInteger; // addConstantsValidationData_inValidConstantsValidationDataInteger
export const caddConstantsValidationData_inValidConstantsValidationDataBoolean = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConstants + wrd.cValidation + wrd.cData + wrd.cBoolean; // addConstantsValidationData_inValidConstantsValidationDataBoolean
export const caddConstantsValidationData_inValidContextNameInteger = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // addConstantsValidationData_inValidContextNameInteger
export const caddConstantsValidationData_inValidContextNameBoolean = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // addConstantsValidationData_inValidContextNameBoolean
export const caddConstantsValidationData_inValidConstantsValidationDataUndefined = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConstants + wrd.cValidation + wrd.cData + 'Undefined'; // addConstantsValidationData_inValidConstantsValidationDataUndefined
export const caddConstantsValidationData_inValidConstantsValidationDataNaN = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cConstants + wrd.cValidation + wrd.cData + 'NaN'; // addConstantsValidationData_inValidConstantsValidationDataNaN
export const caddConstantsValidationData_inValidContextNameUndefined = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // addConstantsValidationData_inValidContextNameUndefined
export const caddConstantsValidationData_inValidContextNameNaN = caddConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // addConstantsValidationData_inValidContextNameNaN

// removePluginConstantsValidationData
export const cremovePluginConstantsValidationData_validPluginNameData = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginConstantsValidationData_validPluginNameData
export const cremovePluginConstantsValidationData_inValidPluginNameString = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginConstantsValidationData_inValidPluginNameString
export const cremovePluginConstantsValidationData_inValidPluginNameInteger = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginConstantsValidationData_inValidPluginNameInteger
export const cremovePluginConstantsValidationData_inValidPluginNameBoolean = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginConstantsValidationData_inValidPluginNameBoolean
export const cremovePluginConstantsValidationData_inValidPluginNameUndefined = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginConstantsValidationData_inValidPluginNameUndefined
export const cremovePluginConstantsValidationData_inValidPluginNameNaN = cremovePluginConstantsValidationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginConstantsValidationData_inValidPluginNameNaN

/* dataBroker */
// addPluginConfigurationData
export const caddPluginConfigurationData_validData = caddPluginConfigurationData + bas.cUnderscore + wrd.cvalid + wrd.cData; // addPluginConfigurationData_validData
export const caddPluginConfigurationData_inValidPluginNameString = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // addPluginConfigurationData_inValidPluginNameString
export const caddPluginConfigurationData_inValidPluginConfigDataString = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cData + wrd.cString; // addPluginConfigurationData_inValidPluginConfigDataString
export const caddPluginConfigurationData_inValidPluginNameInteger = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // addPluginConfigurationData_inValidPluginNameInteger
export const caddPluginConfigurationData_inValidPluginNameBoolean = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // addPluginConfigurationData_inValidPluginNameBoolean
export const caddPluginConfigurationData_inValidPluginConfigDataInteger = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cData + wrd.cInteger; // addPluginConfigurationData_inValidPluginConfigDataInteger
export const caddPluginConfigurationData_inValidPluginConfigDataBoolean = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cData + wrd.cBoolean; // addPluginConfigurationData_inValidPluginConfigDataBoolean
export const caddPluginConfigurationData_inValidPluginNameUndefined = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // addPluginConfigurationData_inValidPluginNameUndefined
export const caddPluginConfigurationData_inValidPluginNameNaN = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // addPluginConfigurationData_inValidPluginNameNaN
export const caddPluginConfigurationData_inValidPluginConfigDataUndefined = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cData + 'Undefined'; // addPluginConfigurationData_inValidPluginConfigDataUndefined
export const caddPluginConfigurationData_inValidPluginConfigDataNaN = caddPluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfig + wrd.cData + 'NaN'; // addPluginConfigurationData_inValidPluginConfigDataNaN

// scanDataPath
export const cscanDataPath_validDataPathData = cscanDataPath + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cPath + wrd.cData; // scanDataPath_validDataPathData
export const cscanDataPath_inValidDataPathString = cscanDataPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cString; // scanDataPath_inValidDataPathString
export const cscanDataPath_inValidDataPathInteger = cscanDataPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cInteger; // scanDataPath_inValidDataPathInteger
export const cscanDataPath_inValidDataPathBoolean = cscanDataPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + wrd.cBoolean; // scanDataPath_inValidDataPathBoolean
export const cscanDataPath_inValidDataPathUndefined = cscanDataPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + "Undefined"; // scanDataPath_inValidDataPathUndefined
export const cscanDataPath_inValidDataPathNaN = cscanDataPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cPath + "NaN"; // scanDataPath_inValidDataPathNaN

// findUniversalDebugConfigSetting
export const cfindUniversalDebugConfigSetting_validData = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cvalid + wrd.cData; // findUniversalDebugConfigSetting_validData
export const cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cApp + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
export const cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cApp + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cInteger; // findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger
export const cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cApp + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cInteger; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean
export const cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cApp + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + 'Undefined'; // findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined
export const cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cApp + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + 'NaN'; // findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + 'Undefined'; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN = cfindUniversalDebugConfigSetting + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + 'NaN'; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN

// loadAllCsvData
export const cloadAllCsvData_validData = cloadAllCsvData + bas.cUnderscore + wrd.cvalid + wrd.cData; // loadAllCsvData_validData
export const cloadAllCsvData_inValidFilesToLoadString = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // loadAllCsvData_inValidFilesToLoadString
export const cloadAllCsvData_inValidContextNameString = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // loadAllCsvData_inValidContextNameString
export const cloadAllCsvData_inValidFilesToLoadInteger = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cInteger; // loadAllCsvData_inValidFilesToLoadInteger
export const cloadAllCsvData_inValidFilesToLoadBoolean = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // loadAllCsvData_inValidFilesToLoadBoolean
export const cloadAllCsvData_inValidContextNameInteger = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // loadAllCsvData_inValidContextNameInteger
export const cloadAllCsvData_inValidContextNameBoolean = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // loadAllCsvData_inValidContextNameBoolean
export const cloadAllCsvData_inValidFilesToLoadUndefined = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'Undefined'; // loadAllCsvData_inValidFilesToLoadUndefined
export const cloadAllCsvData_inValidFilesToLoadNaN = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'NaN'; // loadAllCsvData_inValidFilesToLoadNaN
export const cloadAllCsvData_inValidContextNameUndefined = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // loadAllCsvData_inValidContextNameUndefined
export const cloadAllCsvData_inValidContextNameNaN = cloadAllCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // loadAllCsvData_inValidContextNameNaN

// loadAllXmlData
export const cloadAllXmlData_validData = cloadAllXmlData + bas.cUnderscore + wrd.cvalid + wrd.cData; // loadAllXmlData_validData
export const cloadAllXmlData_inValidFilesToLoadString = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // loadAllXmlData_inValidFilesToLoadString
export const cloadAllXmlData_inValidContextNameString = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // loadAllXmlData_inValidContextNameString
export const cloadAllXmlData_inValidFilesToLoadInteger = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cInteger; // loadAllXmlData_inValidFilesToLoadInteger
export const cloadAllXmlData_inValidFilesToLoadBoolean = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // loadAllXmlData_inValidFilesToLoadBoolean
export const cloadAllXmlData_inValidContextNameInteger = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // loadAllXmlData_inValidContextNameInteger
export const cloadAllXmlData_inValidContextNameBoolean = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // loadAllXmlData_inValidContextNameBoolean
export const cloadAllXmlData_inValidFilesToLoadUndefined = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'Undefined'; // loadAllXmlData_inValidFilesToLoadUndefined
export const cloadAllXmlData_inValidFilesToLoadNaN = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'NaN'; // loadAllXmlData_inValidFilesToLoadNaN
export const cloadAllXmlData_inValidContextNameUndefined = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // loadAllXmlData_inValidContextNameUndefined
export const cloadAllXmlData_inValidContextNameNaN = cloadAllXmlData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // loadAllXmlData_inValidContextNameNaN

// loadAllJsonData
export const cloadAllJsonData_inValidFilesToLoadString = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // loadAllJsonData_inValidFilesToLoadString
export const cloadAllJsonData_inValidFilesToLoadInteger = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cInteger; // loadAllJsonData_inValidFilesToLoadInteger
export const cloadAllJsonData_inValidFilesToLoadBoolean = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // loadAllJsonData_inValidFilesToLoadBoolean
export const cloadAllJsonData_inValidFilesToLoadUndefined = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'Undefined'; // loadAllJsonData_inValidFilesToLoadUndefined
export const cloadAllJsonData_inValidFilesToLoadNaN = cloadAllJsonData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFiles + wrd.cTo + wrd.cLoad + 'NaN'; // loadAllJsonData_inValidFilesToLoadNaN

// processCsvData
export const cprocessCsvData_validData = cprocessCsvData + bas.cUnderscore + wrd.cvalid + wrd.cData; // processCsvData_validData
export const cprocessCsvData_inValidDataString = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cString; // processCsvData_inValidDataString
export const cprocessCsvData_inValidContextNameString = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // processCsvData_inValidContextNameString
export const cprocessCsvData_inValidDataInteger = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cInteger; // processCsvData_inValidDataInteger
export const cprocessCsvData_inValidDataBoolean = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cBoolean; // processCsvData_inValidDataBoolean
export const cprocessCsvData_inValidContextNameInteger = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // processCsvData_inValidContextNameInteger
export const cprocessCsvData_inValidContextNameBoolean = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // processCsvData_inValidContextNameBoolean
export const cprocessCsvData_inValidDataUndefined = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'Undefined'; // processCsvData_inValidDataUndefined
export const cprocessCsvData_inValidDataNaN = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + 'NaN'; // processCsvData_inValidDataNaN
export const cprocessCsvData_inValidContextNameUndefined = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // processCsvData_inValidContextNameUndefined
export const cprocessCsvData_inValidContextNameNaN = cprocessCsvData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // processCsvData_inValidContextNameNaN

// preprocessJsonFile
export const cpreprocessJsonFile_validFileToLoadData = cpreprocessJsonFile + bas.cUnderscore + wrd.cvalid + wrd.cFile + wrd.cTo + wrd.cLoad + wrd.cData; // preprocessJsonFile_validFileToLoadData
export const cpreprocessJsonFile_inValidFileToLoadString = cpreprocessJsonFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cLoad + wrd.cString; // preprocessJsonFile_inValidFileToLoadString
export const cpreprocessJsonFile_inValidFileToLoadInteger = cpreprocessJsonFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cLoad + wrd.cInteger; // preprocessJsonFile_inValidFileToLoadInteger
export const cpreprocessJsonFile_inValidFileToLoadBoolean = cpreprocessJsonFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cLoad + wrd.cBoolean; // preprocessJsonFile_inValidFileToLoadBoolean
export const cpreprocessJsonFile_inValidFileToLoadUndefined = cpreprocessJsonFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cLoad + "Undefined"; // preprocessJsonFile_inValidFileToLoadUndefined
export const cpreprocessJsonFile_inValidFileToLoadNaN = cpreprocessJsonFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cLoad + "NaN"; // preprocessJsonFile_inValidFileToLoadNaN

// writeJsonDataToFile
export const cwriteJsonDataToFile_validData = cwriteJsonDataToFile + bas.cUnderscore + wrd.cvalid + wrd.cData; // writeJsonDataToFile_validData
export const cwriteJsonDataToFile_inValidFileToSaveToString = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cSave + wrd.cTo + wrd.cString; // writeJsonDataToFile_inValidFileToSaveToString
export const cwriteJsonDataToFile_inValidDataToWriteOutString = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cWrite + wrd.cOut + wrd.cString; // writeJsonDataToFile_inValidDataToWriteOutString
export const cwriteJsonDataToFile_inValidFileToSaveToInteger = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cSave + wrd.cTo + wrd.cInteger; // writeJsonDataToFile_inValidFileToSaveToInteger
export const cwriteJsonDataToFile_inValidFileToSaveToBoolean = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cSave + wrd.cTo + wrd.cBoolean; // writeJsonDataToFile_inValidFileToSaveToBoolean
export const cwriteJsonDataToFile_inValidDataToWriteOutInteger = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cWrite + wrd.cOut + wrd.cInteger; // writeJsonDataToFile_inValidDataToWriteOutInteger
export const cwriteJsonDataToFile_inValidDataToWriteOutBoolean = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cWrite + wrd.cOut + wrd.cBoolean; // writeJsonDataToFile_inValidDataToWriteOutBoolean
export const cwriteJsonDataToFile_inValidFileToSaveToUndefined = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cSave + wrd.cTo + 'Undefined'; // writeJsonDataToFile_inValidFileToSaveToUndefined
export const cwriteJsonDataToFile_inValidFileToSaveToNaN = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cFile + wrd.cTo + wrd.cSave + wrd.cTo + 'NaN'; // writeJsonDataToFile_inValidFileToSaveToNaN
export const cwriteJsonDataToFile_inValidDataToWriteOutUndefined = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cWrite + wrd.cOut + 'Undefined'; // writeJsonDataToFile_inValidDataToWriteOutUndefined
export const cwriteJsonDataToFile_inValidDataToWriteOutNaN = cwriteJsonDataToFile + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cWrite + wrd.cOut + 'NaN'; // writeJsonDataToFile_inValidDataToWriteOutNaN

// setupDataStorage
export const csetupDataStorage_validData = csetupDataStorage + bas.cUnderscore + wrd.cvalid + wrd.cData; // setupDataStorage_validData

// storeData
export const cstoreData_inValidDataStorageContextNameInteger = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cInteger; // storeData_inValidDataStorageContextNameInteger
export const cstoreData_inValidDataStorageContextNameBoolean = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cBoolean; // storeData_inValidDataStorageContextNameBoolean
export const cstoreData_validDataToStoreString = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cString; // storeData_validDataToStoreString
export const cstoreData_validDataToStoreBoolean = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cBoolean; // storeData_validDataToStoreBoolean
export const cstoreData_validDataToStoreInteger = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cInteger; // storeData_validDataToStoreInteger
export const cstoreData_validDataToStoreArray = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cArray; // storeData_validDataToStoreArray
export const cstoreData_validDataToStoreObject = cstoreData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cObject; // storeData_validDataToStoreObject
export const cstoreData_inValidDataStorageContextNameUndefined = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + 'Undefined'; // storeData_inValidDataStorageContextNameUndefined
export const cstoreData_inValidDataStorageContextNameNaN = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + 'NaN'; // storeData_inValidDataStorageContextNameNaN
export const cstoreData_inValidDataToStoreUndefined = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + 'Undefined'; // storeData_inValidDataToStoreUndefined
export const cstoreData_inValidDataToStoreNaN = cstoreData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + 'NaN'; // storeData_inValidDataToStoreNaN

// getData
export const cgetData_validDataToStoreData = cgetData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cData; // getData_validDataToStoreData
export const cgetData_inValidDataToStoreString = cgetData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cString; // getData_inValidDataToStoreString
export const cgetData_inValidDataToStoreInteger = cgetData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cInteger; // getData_inValidDataToStoreInteger
export const cgetData_inValidDataToStoreBoolean = cgetData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + wrd.cBoolean; // getData_inValidDataToStoreBoolean
export const cgetData_inValidDataToStoreUndefined = cgetData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + "Undefined"; // getData_inValidDataToStoreUndefined
export const cgetData_inValidDataToStoreNaN = cgetData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cTo + wrd.cStore + "NaN"; // getData_inValidDataToStoreNaN

// clearData
export const cclearData_validDataStorageContextNameData = cclearData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cData; // clearData_validDataStorageContextNameData
export const cclearData_inValidDataStorageContextNameString = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cString; // clearData_inValidDataStorageContextNameString
export const cclearData_inValidDataStorageContextNameInteger = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cInteger; // clearData_inValidDataStorageContextNameInteger
export const cclearData_inValidDataStorageContextNameBoolean = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + wrd.cBoolean; // clearData_inValidDataStorageContextNameBoolean
export const cclearData_validDataStorageContextNameUndefined = cclearData + bas.cUnderscore + wrd.cvalid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + "Undefined"; // clearData_validDataStorageContextNameUndefined
export const cclearData_inValidDataStorageContextNameNaN = cclearData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cData + wrd.cStorage + wrd.cContext + wrd.cName + "NaN"; // clearData_inValidDataStorageContextNameNaN

// removePluginConfigurationData
export const cremovePluginConfigurationData_validPluginNameData = cremovePluginConfigurationData + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginConfigurationData_validPluginNameData
export const cremovePluginConfigurationData_inValidPluginNameString = cremovePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginConfigurationData_inValidPluginNameString
export const cremovePluginConfigurationData_inValidPluginNameInteger = cremovePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginConfigurationData_inValidPluginNameInteger
export const cremovePluginConfigurationData_inValidPluginNameBoolean = cremovePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginConfigurationData_inValidPluginNameBoolean
export const cremovePluginConfigurationData_inValidPluginNameUndefined = cremovePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginConfigurationData_inValidPluginNameUndefined
export const cremovePluginConfigurationData_inValidPluginNameNaN = cremovePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginConfigurationData_inValidPluginNameNaN

/* pluginBroker */
// loadPluginRegistry
export const cloadPluginRegistry_validPluginRegistryPathData = cloadPluginRegistry + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + wrd.cData; // loadPluginRegistry_validPluginRegistryPathData
export const cloadPluginRegistry_inValidPluginRegistryPathString = cloadPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + wrd.cString; // loadPluginRegistry_inValidPluginRegistryPathString
export const cloadPluginRegistry_inValidPluginRegistryPathInteger = cloadPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + wrd.cInteger; // loadPluginRegistry_inValidPluginRegistryPathInteger
export const cloadPluginRegistry_inValidPluginRegistryPathBoolean = cloadPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + wrd.cBoolean; // loadPluginRegistry_inValidPluginRegistryPathBoolean
export const cloadPluginRegistry_inValidPluginRegistryPathUndefined = cloadPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + "Undefined"; // loadPluginRegistry_inValidPluginRegistryPathUndefined
export const cloadPluginRegistry_inValidPluginRegistryPathNaN = cloadPluginRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cPath + "NaN"; // loadPluginRegistry_inValidPluginRegistryPathNaN

// storePluginRegistryInDataStructure
export const cstorePluginRegistryInDataStructure_validPluginRegistryDataData = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cRegistry + wrd.cData + wrd.cData; // storePluginRegistryInDataStructure_validPluginRegistryDataData
export const cstorePluginRegistryInDataStructure_inValidPluginRegistryDataString = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cData + wrd.cString; // storePluginRegistryInDataStructure_inValidPluginRegistryDataString
export const cstorePluginRegistryInDataStructure_inValidPluginRegistryDataInteger = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cData + wrd.cInteger; // storePluginRegistryInDataStructure_inValidPluginRegistryDataInteger
export const cstorePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cData + wrd.cBoolean; // storePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean
export const cstorePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cData + "Undefined"; // storePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined
export const cstorePluginRegistryInDataStructure_inValidPluginRegistryDataNaN = cstorePluginRegistryInDataStructure + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRegistry + wrd.cData + "NaN"; // storePluginRegistryInDataStructure_inValidPluginRegistryDataNaN

// listAllLoadedPlugins
export const clistAllLoadedPlugins_validData = clistAllLoadedPlugins + bas.cUnderscore + wrd.cvalid + wrd.cData; // listAllLoadedPlugins_validData

// listPluginsInRegistry
export const clistPluginsInRegistry_validData = clistPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // listPluginsInRegistry_validData

// listPluginsPathsInRegistry
export const clistPluginsPathsInRegistry_validData = clistPluginsPathsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // listPluginsPathsInRegistry_validData

// listPluginsAttributeInRegistry
export const clistPluginsAttributeInRegistry_validAttributeNameData = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cAttribute + wrd.cName + wrd.cData; // listPluginsAttributeInRegistry_validAttributeNameData
export const clistPluginsAttributeInRegistry_inValidAttributeNameString = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAttribute + wrd.cName + wrd.cString; // listPluginsAttributeInRegistry_inValidAttributeNameString
export const clistPluginsAttributeInRegistry_inValidAttributeNameInteger = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAttribute + wrd.cName + wrd.cInteger; // listPluginsAttributeInRegistry_inValidAttributeNameInteger
export const clistPluginsAttributeInRegistry_inValidAttributeNameBoolean = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAttribute + wrd.cName + wrd.cBoolean; // listPluginsAttributeInRegistry_inValidAttributeNameBoolean
export const clistPluginsAttributeInRegistry_inValidAttributeNameUndefined = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAttribute + wrd.cName + "Undefined"; // listPluginsAttributeInRegistry_inValidAttributeNameUndefined
export const clistPluginsAttributeInRegistry_inValidAttributeNameNaN = clistPluginsAttributeInRegistry + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAttribute + wrd.cName + "NaN"; // listPluginsAttributeInRegistry_inValidAttributeNameNaN

// listPluginsInRegistryPath
export const clistPluginsInRegistryPath_validData = clistPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // listPluginsInRegistryPath_validData

// countPluginsInRegistry
export const ccountPluginsInRegistry_validData = ccountPluginsInRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // countPluginsInRegistry_validData

// countPluginsInRegistryPath
export const ccountPluginsInRegistryPath_validData = ccountPluginsInRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // countPluginsInRegistryPath_validData

// registerPlugin
export const cregisterPlugin_validData = cregisterPlugin + bas.cUnderscore + wrd.cvalid + wrd.cData; // registerPlugin_validData
export const cregisterPlugin_inValidPluginNameString = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // registerPlugin_inValidPluginNameString
export const cregisterPlugin_inValidPluginPathString = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cString; // registerPlugin_inValidPluginPathString
export const cregisterPlugin_inValidPluginNameInteger = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // registerPlugin_inValidPluginNameInteger
export const cregisterPlugin_inValidPluginNameBoolean = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // registerPlugin_inValidPluginNameBoolean
export const cregisterPlugin_inValidPluginPathInteger = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cInteger; // registerPlugin_inValidPluginPathInteger
export const cregisterPlugin_inValidPluginPathBoolean = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cBoolean; // registerPlugin_inValidPluginPathBoolean
export const cregisterPlugin_inValidPluginNameUndefined = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // registerPlugin_inValidPluginNameUndefined
export const cregisterPlugin_inValidPluginNameNaN = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // registerPlugin_inValidPluginNameNaN
export const cregisterPlugin_inValidPluginPathUndefined = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + 'Undefined'; // registerPlugin_inValidPluginPathUndefined
export const cregisterPlugin_inValidPluginPathNaN = cregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + 'NaN'; // registerPlugin_inValidPluginPathNaN

// unregisterPlugin
export const cunregisterPlugin_validPluginNameData = cunregisterPlugin + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // unregisterPlugin_validPluginNameData
export const cunregisterPlugin_inValidPluginNameString = cunregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // unregisterPlugin_inValidPluginNameString
export const cunregisterPlugin_inValidPluginNameInteger = cunregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // unregisterPlugin_inValidPluginNameInteger
export const cunregisterPlugin_inValidPluginNameBoolean = cunregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // unregisterPlugin_inValidPluginNameBoolean
export const cunregisterPlugin_inValidPluginNameUndefined = cunregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // unregisterPlugin_inValidPluginNameUndefined
export const cunregisterPlugin_inValidPluginNameNaN = cunregisterPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // unregisterPlugin_inValidPluginNameNaN

// unregisterPlugins
export const cunregisterPlugins_validPluginListArrayData = cunregisterPlugins + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cList + wrd.cArray + wrd.cData; // unregisterPlugins_validPluginListArrayData
export const cunregisterPlugins_inValidPluginListArrayString = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cList + wrd.cArray + wrd.cString; // unregisterPlugins_inValidPluginListArrayString
export const cunregisterPlugins_inValidPluginListArrayInteger = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cList + wrd.cArray + wrd.cInteger; // unregisterPlugins_inValidPluginListArrayInteger
export const cunregisterPlugins_inValidPluginListArrayBoolean = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cList + wrd.cArray + wrd.cBoolean; // unregisterPlugins_inValidPluginListArrayBoolean
export const cunregisterPlugins_inValidPluginListArrayUndefined = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cList + wrd.cArray + "Undefined"; // unregisterPlugins_inValidPluginListArrayUndefined
export const cunregisterPlugins_inValidPluginListArrayNaN = cunregisterPlugins + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cList + wrd.cArray + "NaN"; // unregisterPlugins_inValidPluginListArrayNaN

// syncPluginRegistryWithPluginRegistryPath
export const csyncPluginRegistryWithPluginRegistryPath_validData = csyncPluginRegistryWithPluginRegistryPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // syncPluginRegistryWithPluginRegistryPath_validData

// unregisterAllPlugins
export const cunregisterAllPlugins_validData = cunregisterAllPlugins + bas.cUnderscore + wrd.cvalid + wrd.cData; // unregisterAllPlugins_validData

// savePluginRegistry
export const csavePluginRegistry_validData = csavePluginRegistry + bas.cUnderscore + wrd.cvalid + wrd.cData; // savePluginRegistry_validData

// loadPluginMetaData
export const cloadPluginMetaData_validPluginPathData = cloadPluginMetaData + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cPath + wrd.cData; // loadPluginMetaData_validPluginPathData
export const cloadPluginMetaData_inValidPluginPathString = cloadPluginMetaData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cString; // loadPluginMetaData_inValidPluginPathString
export const cloadPluginMetaData_inValidPluginPathInteger = cloadPluginMetaData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cInteger; // loadPluginMetaData_inValidPluginPathInteger
export const cloadPluginMetaData_inValidPluginPathBoolean = cloadPluginMetaData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cBoolean; // loadPluginMetaData_inValidPluginPathBoolean
export const cloadPluginMetaData_inValidPluginPathUndefined = cloadPluginMetaData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + "Undefined"; // loadPluginMetaData_inValidPluginPathUndefined
export const cloadPluginMetaData_inValidPluginPathNaN = cloadPluginMetaData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + "NaN"; // loadPluginMetaData_inValidPluginPathNaN

// extractAndProcessPluginEntryPointURI
export const cextractAndProcessPluginEntryPointURI_validData = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cvalid + wrd.cData; // extractAndProcessPluginEntryPointURI_validData
export const cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataString = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cMeta + wrd.cData + wrd.cString; // extractAndProcessPluginEntryPointURI_inValidPluginMetaDataString
export const cextractAndProcessPluginEntryPointURI_inValidPluginPathString = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cString; // extractAndProcessPluginEntryPointURI_inValidPluginPathString
export const cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cMeta + wrd.cData + wrd.cInteger; // extractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger
export const cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cMeta + wrd.cData + wrd.cBoolean; // extractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean
export const cextractAndProcessPluginEntryPointURI_inValidPluginPathInteger = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cInteger; // extractAndProcessPluginEntryPointURI_inValidPluginPathInteger
export const cextractAndProcessPluginEntryPointURI_inValidPluginPathBoolean = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + wrd.cBoolean; // extractAndProcessPluginEntryPointURI_inValidPluginPathBoolean
export const cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cMeta + wrd.cData + 'Undefined'; // extractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined
export const cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cMeta + wrd.cData + 'NaN'; // extractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN
export const cextractAndProcessPluginEntryPointURI_inValidPluginPathUndefined = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + 'Undefined'; // extractAndProcessPluginEntryPointURI_inValidPluginPathUndefined
export const cextractAndProcessPluginEntryPointURI_inValidPluginPathNaN = cextractAndProcessPluginEntryPointURI + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cPath + 'NaN'; // extractAndProcessPluginEntryPointURI_inValidPluginPathNaN

// loadPlugin
export const cloadPlugin_validPluginExecutionPathData = cloadPlugin + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cExecution + wrd.cPath + wrd.cData; // loadPlugin_validPluginExecutionPathData
export const cloadPlugin_inValidPluginExecutionPathString = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cExecution + wrd.cPath + wrd.cString; // loadPlugin_inValidPluginExecutionPathString
export const cloadPlugin_inValidPluginExecutionPathInteger = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cExecution + wrd.cPath + wrd.cInteger; // loadPlugin_inValidPluginExecutionPathInteger
export const cloadPlugin_inValidPluginExecutionPathBoolean = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cExecution + wrd.cPath + wrd.cBoolean; // loadPlugin_inValidPluginExecutionPathBoolean
export const cloadPlugin_inValidPluginExecutionPathUndefined = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cExecution + wrd.cPath + "Undefined"; // loadPlugin_inValidPluginExecutionPathUndefined
export const cloadPlugin_inValidPluginExecutionPathNaN = cloadPlugin + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cExecution + wrd.cPath + "NaN"; // loadPlugin_inValidPluginExecutionPathNaN

// integratePluginBusinessRules
export const cintegratePluginBusinessRules_validData = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginBusinessRules_validData
export const cintegratePluginBusinessRules_inValidPluginNameString = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginBusinessRules_inValidPluginNameString
export const cintegratePluginBusinessRules_inValidPluginBusinessRulesString = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cBusiness + wrd.cRules + wrd.cString; // integratePluginBusinessRules_inValidPluginBusinessRulesString
export const cintegratePluginBusinessRules_inValidPluginNameInteger = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginBusinessRules_inValidPluginNameInteger
export const cintegratePluginBusinessRules_inValidPluginNameBoolean = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginBusinessRules_inValidPluginNameBoolean
export const cintegratePluginBusinessRules_inValidPluginBusinessRulesInteger = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cBusiness + wrd.cRules + wrd.cInteger; // integratePluginBusinessRules_inValidPluginBusinessRulesInteger
export const cintegratePluginBusinessRules_inValidPluginBusinessRulesBoolean = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cBusiness + wrd.cRules + wrd.cBoolean; // integratePluginBusinessRules_inValidPluginBusinessRulesBoolean
export const cintegratePluginBusinessRules_inValidPluginNameUndefined = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginBusinessRules_inValidPluginNameUndefined
export const cintegratePluginBusinessRules_inValidPluginNameNaN = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginBusinessRules_inValidPluginNameNaN
export const cintegratePluginBusinessRules_inValidPluginBusinessRulesUndefined = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cBusiness + wrd.cRules + 'Undefined'; // integratePluginBusinessRules_inValidPluginBusinessRulesUndefined
export const cintegratePluginBusinessRules_inValidPluginBusinessRulesNaN = cintegratePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cBusiness + wrd.cRules + 'NaN'; // integratePluginBusinessRules_inValidPluginBusinessRulesNaN

// integratePluginCommands
export const cintegratePluginCommands_validData = cintegratePluginCommands + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginCommands_validData
export const cintegratePluginCommands_inValidPluginNameString = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginCommands_inValidPluginNameString
export const cintegratePluginCommands_inValidPluginCommandsString = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cString; // integratePluginCommands_inValidPluginCommandsString
export const cintegratePluginCommands_inValidPluginNameInteger = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginCommands_inValidPluginNameInteger
export const cintegratePluginCommands_inValidPluginNameBoolean = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginCommands_inValidPluginNameBoolean
export const cintegratePluginCommands_inValidPluginCommandsInteger = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cInteger; // integratePluginCommands_inValidPluginCommandsInteger
export const cintegratePluginCommands_inValidPluginCommandsBoolean = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + wrd.cBoolean; // integratePluginCommands_inValidPluginCommandsBoolean
export const cintegratePluginCommands_inValidPluginNameUndefined = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginCommands_inValidPluginNameUndefined
export const cintegratePluginCommands_inValidPluginNameNaN = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginCommands_inValidPluginNameNaN
export const cintegratePluginCommands_inValidPluginCommandsUndefined = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + 'Undefined'; // integratePluginCommands_inValidPluginCommandsUndefined
export const cintegratePluginCommands_inValidPluginCommandsNaN = cintegratePluginCommands + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommands + 'NaN'; // integratePluginCommands_inValidPluginCommandsNaN

// integratePluginConfigurationData
export const cintegratePluginConfigurationData_validData = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginConfigurationData_validData
export const cintegratePluginConfigurationData_inValidPluginNameString = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginConfigurationData_inValidPluginNameString
export const cintegratePluginConfigurationData_inValidPluginConfigurationDataString = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfiguration + wrd.cData + wrd.cString; // integratePluginConfigurationData_inValidPluginConfigurationDataString
export const cintegratePluginConfigurationData_inValidPluginNameInteger = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginConfigurationData_inValidPluginNameInteger
export const cintegratePluginConfigurationData_inValidPluginNameBoolean = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginConfigurationData_inValidPluginNameBoolean
export const cintegratePluginConfigurationData_inValidPluginConfigurationDataInteger = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfiguration + wrd.cData + wrd.cInteger; // integratePluginConfigurationData_inValidPluginConfigurationDataInteger
export const cintegratePluginConfigurationData_inValidPluginConfigurationDataBoolean = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfiguration + wrd.cData + wrd.cBoolean; // integratePluginConfigurationData_inValidPluginConfigurationDataBoolean
export const cintegratePluginConfigurationData_inValidPluginNameUndefined = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginConfigurationData_inValidPluginNameUndefined
export const cintegratePluginConfigurationData_inValidPluginNameNaN = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginConfigurationData_inValidPluginNameNaN
export const cintegratePluginConfigurationData_inValidPluginConfigurationDataUndefined = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfiguration + wrd.cData + 'Undefined'; // integratePluginConfigurationData_inValidPluginConfigurationDataUndefined
export const cintegratePluginConfigurationData_inValidPluginConfigurationDataNaN = cintegratePluginConfigurationData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cConfiguration + wrd.cData + 'NaN'; // integratePluginConfigurationData_inValidPluginConfigurationDataNaN

// integratePluginCommandAliases
export const cintegratePluginCommandAliases_validData = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginCommandAliases_validData
export const cintegratePluginCommandAliases_inValidPluginNameString = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginCommandAliases_inValidPluginNameString
export const cintegratePluginCommandAliases_inValidPluginCommandAliasesString = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cString; // integratePluginCommandAliases_inValidPluginCommandAliasesString
export const cintegratePluginCommandAliases_inValidPluginNameInteger = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginCommandAliases_inValidPluginNameInteger
export const cintegratePluginCommandAliases_inValidPluginNameBoolean = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginCommandAliases_inValidPluginNameBoolean
export const cintegratePluginCommandAliases_inValidPluginCommandAliasesInteger = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cInteger; // integratePluginCommandAliases_inValidPluginCommandAliasesInteger
export const cintegratePluginCommandAliases_inValidPluginCommandAliasesBoolean = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + wrd.cBoolean; // integratePluginCommandAliases_inValidPluginCommandAliasesBoolean
export const cintegratePluginCommandAliases_inValidPluginNameUndefined = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginCommandAliases_inValidPluginNameUndefined
export const cintegratePluginCommandAliases_inValidPluginNameNaN = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginCommandAliases_inValidPluginNameNaN
export const cintegratePluginCommandAliases_inValidPluginCommandAliasesUndefined = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + 'Undefined'; // integratePluginCommandAliases_inValidPluginCommandAliasesUndefined
export const cintegratePluginCommandAliases_inValidPluginCommandAliasesNaN = cintegratePluginCommandAliases + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cCommand + wrd.cAliases + 'NaN'; // integratePluginCommandAliases_inValidPluginCommandAliasesNaN

// integratePluginWorkflows
export const cintegratePluginWorkflows_validData = cintegratePluginWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginWorkflows_validData
export const cintegratePluginWorkflows_inValidPluginNameString = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginWorkflows_inValidPluginNameString
export const cintegratePluginWorkflows_inValidPluginWorkflowsString = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cString; // integratePluginWorkflows_inValidPluginWorkflowsString
export const cintegratePluginWorkflows_inValidPluginNameInteger = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginWorkflows_inValidPluginNameInteger
export const cintegratePluginWorkflows_inValidPluginNameBoolean = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginWorkflows_inValidPluginNameBoolean
export const cintegratePluginWorkflows_inValidPluginWorkflowsInteger = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cInteger; // integratePluginWorkflows_inValidPluginWorkflowsInteger
export const cintegratePluginWorkflows_inValidPluginWorkflowsBoolean = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cBoolean; // integratePluginWorkflows_inValidPluginWorkflowsBoolean
export const cintegratePluginWorkflows_inValidPluginNameUndefined = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginWorkflows_inValidPluginNameUndefined
export const cintegratePluginWorkflows_inValidPluginNameNaN = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginWorkflows_inValidPluginNameNaN
export const cintegratePluginWorkflows_inValidPluginWorkflowsUndefined = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + 'Undefined'; // integratePluginWorkflows_inValidPluginWorkflowsUndefined
export const cintegratePluginWorkflows_inValidPluginWorkflowsNaN = cintegratePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + 'NaN'; // integratePluginWorkflows_inValidPluginWorkflowsNaN

// integratePluginThemeData
export const cintegratePluginThemeData_validData = cintegratePluginThemeData + bas.cUnderscore + wrd.cvalid + wrd.cData; // integratePluginThemeData_validData
export const cintegratePluginThemeData_inValidPluginNameString = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // integratePluginThemeData_inValidPluginNameString
export const cintegratePluginThemeData_inValidPluginThemeDataString = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cTheme + wrd.cData + wrd.cString; // integratePluginThemeData_inValidPluginThemeDataString
export const cintegratePluginThemeData_inValidPluginNameInteger = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // integratePluginThemeData_inValidPluginNameInteger
export const cintegratePluginThemeData_inValidPluginNameBoolean = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // integratePluginThemeData_inValidPluginNameBoolean
export const cintegratePluginThemeData_inValidPluginThemeDataInteger = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cTheme + wrd.cData + wrd.cInteger; // integratePluginThemeData_inValidPluginThemeDataInteger
export const cintegratePluginThemeData_inValidPluginThemeDataBoolean = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cTheme + wrd.cData + wrd.cBoolean; // integratePluginThemeData_inValidPluginThemeDataBoolean
export const cintegratePluginThemeData_inValidPluginNameUndefined = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // integratePluginThemeData_inValidPluginNameUndefined
export const cintegratePluginThemeData_inValidPluginNameNaN = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // integratePluginThemeData_inValidPluginNameNaN
export const cintegratePluginThemeData_inValidPluginThemeDataUndefined = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cTheme + wrd.cData + 'Undefined'; // integratePluginThemeData_inValidPluginThemeDataUndefined
export const cintegratePluginThemeData_inValidPluginThemeDataNaN = cintegratePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cTheme + wrd.cData + 'NaN'; // integratePluginThemeData_inValidPluginThemeDataNaN

/* ruleBroker */
// bootStrapBusinessRules
export const cbootStrapBusinessRules_validData = cbootStrapBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // bootStrapBusinessRules_validData

// resetBusinessRules
export const cresetBusinessRules_validData = cresetBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // resetBusinessRules_validData

// addClientRules
export const caddClientRules_validClientRulesData = caddClientRules + bas.cUnderscore + wrd.cvalid + wrd.cClient + wrd.cRules + wrd.cData; // addClientRules_validClientRulesData
export const caddClientRules_inValidClientRulesString = caddClientRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cRules + wrd.cString; // addClientRules_inValidClientRulesString
export const caddClientRules_inValidClientRulesInteger = caddClientRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cRules + wrd.cInteger; // addClientRules_inValidClientRulesInteger
export const caddClientRules_inValidClientRulesBoolean = caddClientRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cRules + wrd.cBoolean; // addClientRules_inValidClientRulesBoolean
export const caddClientRules_inValidClientRulesUndefined = caddClientRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cRules + "Undefined"; // addClientRules_inValidClientRulesUndefined
export const caddClientRules_inValidClientRulesNaN = caddClientRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cClient + wrd.cRules + "NaN"; // addClientRules_inValidClientRulesNaN

// addPluginRules
export const caddPluginRules_validData = caddPluginRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // addPluginRules_validData
export const caddPluginRules_inValidPluginNameString = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // addPluginRules_inValidPluginNameString
export const caddPluginRules_inValidPluginRulesString = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRules + wrd.cString; // addPluginRules_inValidPluginRulesString
export const caddPluginRules_inValidPluginNameInteger = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // addPluginRules_inValidPluginNameInteger
export const caddPluginRules_inValidPluginNameBoolean = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // addPluginRules_inValidPluginNameBoolean
export const caddPluginRules_inValidPluginRulesInteger = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRules + wrd.cInteger; // addPluginRules_inValidPluginRulesInteger
export const caddPluginRules_inValidPluginRulesBoolean = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRules + wrd.cBoolean; // addPluginRules_inValidPluginRulesBoolean
export const caddPluginRules_inValidPluginNameUndefined = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // addPluginRules_inValidPluginNameUndefined
export const caddPluginRules_inValidPluginNameNaN = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // addPluginRules_inValidPluginNameNaN
export const caddPluginRules_inValidPluginRulesUndefined = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRules + 'Undefined'; // addPluginRules_inValidPluginRulesUndefined
export const caddPluginRules_inValidPluginRulesNaN = caddPluginRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cRules + 'NaN'; // addPluginRules_inValidPluginRulesNaN

// processRules
export const cprocessRules_validData = cprocessRules + bas.cUnderscore + wrd.cvalid + wrd.cData; // processRules_validData
export const cprocessRules_inValidInputsString = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cString; // processRules_inValidInputsString
export const cprocessRules_inValidRulesToExecuteString = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cString; // processRules_inValidRulesToExecuteString
export const cprocessRules_inValidInputsInteger = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cInteger; // processRules_inValidInputsInteger
export const cprocessRules_inValidInputsBoolean = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + wrd.cBoolean; // processRules_inValidInputsBoolean
export const cprocessRules_inValidRulesToExecuteInteger = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cInteger; // processRules_inValidRulesToExecuteInteger
export const cprocessRules_inValidRulesToExecuteBoolean = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cBoolean; // processRules_inValidRulesToExecuteBoolean
export const cprocessRules_inValidInputsUndefined = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + 'Undefined'; // processRules_inValidInputsUndefined
export const cprocessRules_inValidInputsNaN = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cInputs + 'NaN'; // processRules_inValidInputsNaN
export const cprocessRules_inValidRulesToExecuteUndefined = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cRules + wrd.cTo + wrd.cExecute + 'Undefined'; // processRules_inValidRulesToExecuteUndefined
export const cprocessRules_inValidRulesToExecuteNaN = cprocessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cRules + wrd.cTo + wrd.cExecute + 'NaN'; // processRules_inValidRulesToExecuteNaN

// removePluginBusinessRules
export const cremovePluginBusinessRules_validPluginNameData = cremovePluginBusinessRules + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginBusinessRules_validPluginNameData
export const cremovePluginBusinessRules_inValidPluginNameString = cremovePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginBusinessRules_inValidPluginNameString
export const cremovePluginBusinessRules_inValidPluginNameInteger = cremovePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginBusinessRules_inValidPluginNameInteger
export const cremovePluginBusinessRules_inValidPluginNameBoolean = cremovePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginBusinessRules_inValidPluginNameBoolean
export const cremovePluginBusinessRules_inValidPluginNameUndefined = cremovePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginBusinessRules_inValidPluginNameUndefined
export const cremovePluginBusinessRules_inValidPluginNameNaN = cremovePluginBusinessRules + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginBusinessRules_inValidPluginNameNaN

/* themeBroker */
// initThemeData
export const cinitThemeData_validData = cinitThemeData + bas.cUnderscore + wrd.cvalid + wrd.cData; // initThemeData_validData

// generateThemeDataFromPath
export const cgenerateThemeDataFromPath_validThemesRootPathData = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cvalid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cData; // generateThemeDataFromPath_validThemesRootPathData
export const cgenerateThemeDataFromPath_inValidThemesRootPathString = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cString; // generateThemeDataFromPath_inValidThemesRootPathString
export const cgenerateThemeDataFromPath_inValidThemesRootPathInteger = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cInteger; // generateThemeDataFromPath_inValidThemesRootPathInteger
export const cgenerateThemeDataFromPath_inValidThemesRootPathBoolean = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cBoolean; // generateThemeDataFromPath_inValidThemesRootPathBoolean
export const cgenerateThemeDataFromPath_inValidThemesRootPathUndefined = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + "Undefined"; // generateThemeDataFromPath_inValidThemesRootPathUndefined
export const cgenerateThemeDataFromPath_inValidThemesRootPathNaN = cgenerateThemeDataFromPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + "NaN"; // generateThemeDataFromPath_inValidThemesRootPathNaN

// addThemeData
export const caddThemeData_validData = caddThemeData + bas.cUnderscore + wrd.cvalid + wrd.cData; // addThemeData_validData
export const caddThemeData_inValidThemeDataString = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cString; // addThemeData_inValidThemeDataString
export const caddThemeData_inValidContextNameString = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cString; // addThemeData_inValidContextNameString
export const caddThemeData_inValidThemeDataInteger = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cInteger; // addThemeData_inValidThemeDataInteger
export const caddThemeData_inValidThemeDataBoolean = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cBoolean; // addThemeData_inValidThemeDataBoolean
export const caddThemeData_inValidContextNameInteger = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cInteger; // addThemeData_inValidContextNameInteger
export const caddThemeData_inValidContextNameBoolean = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + wrd.cBoolean; // addThemeData_inValidContextNameBoolean
export const caddThemeData_inValidThemeDataUndefined = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + 'Undefined'; // addThemeData_inValidThemeDataUndefined
export const caddThemeData_inValidThemeDataNaN = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + 'NaN'; // addThemeData_inValidThemeDataNaN
export const caddThemeData_inValidContextNameUndefined = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'Undefined'; // addThemeData_inValidContextNameUndefined
export const caddThemeData_inValidContextNameNaN = caddThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cContext + wrd.cName + 'NaN'; // addThemeData_inValidContextNameNaN

// getNamedThemesFromRootPath
export const cgetNamedThemesFromRootPath_validThemesRootPathData = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cvalid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cData; // getNamedThemesFromRootPath_validThemesRootPathData
export const cgetNamedThemesFromRootPath_inValidThemesRootPathString = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cString; // getNamedThemesFromRootPath_inValidThemesRootPathString
export const cgetNamedThemesFromRootPath_inValidThemesRootPathInteger = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cInteger; // getNamedThemesFromRootPath_inValidThemesRootPathInteger
export const cgetNamedThemesFromRootPath_inValidThemesRootPathBoolean = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cBoolean; // getNamedThemesFromRootPath_inValidThemesRootPathBoolean
export const cgetNamedThemesFromRootPath_inValidThemesRootPathUndefined = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + "Undefined"; // getNamedThemesFromRootPath_inValidThemesRootPathUndefined
export const cgetNamedThemesFromRootPath_inValidThemesRootPathNaN = cgetNamedThemesFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + "NaN"; // getNamedThemesFromRootPath_inValidThemesRootPathNaN

// getNamedThemePathFromRootPath
export const cgetNamedThemePathFromRootPath_validData = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cvalid + wrd.cData; // getNamedThemePathFromRootPath_validData
export const cgetNamedThemePathFromRootPath_inValidThemeNameString = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cName + wrd.cString; // getNamedThemePathFromRootPath_inValidThemeNameString
export const cgetNamedThemePathFromRootPath_inValidThemesRootPathString = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cString; // getNamedThemePathFromRootPath_inValidThemesRootPathString
export const cgetNamedThemePathFromRootPath_inValidThemeNameInteger = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cName + wrd.cInteger; // getNamedThemePathFromRootPath_inValidThemeNameInteger
export const cgetNamedThemePathFromRootPath_inValidThemeNameBoolean = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cName + wrd.cBoolean; // getNamedThemePathFromRootPath_inValidThemeNameBoolean
export const cgetNamedThemePathFromRootPath_inValidThemesRootPathInteger = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cInteger; // getNamedThemePathFromRootPath_inValidThemesRootPathInteger
export const cgetNamedThemePathFromRootPath_inValidThemesRootPathBoolean = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + wrd.cBoolean; // getNamedThemePathFromRootPath_inValidThemesRootPathBoolean
export const cgetNamedThemePathFromRootPath_inValidThemeNameUndefined = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cName + 'Undefined'; // getNamedThemePathFromRootPath_inValidThemeNameUndefined
export const cgetNamedThemePathFromRootPath_inValidThemeNameNaN = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cName + 'NaN'; // getNamedThemePathFromRootPath_inValidThemeNameNaN
export const cgetNamedThemePathFromRootPath_inValidThemesRootPathUndefined = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + 'Undefined'; // getNamedThemePathFromRootPath_inValidThemesRootPathUndefined
export const cgetNamedThemePathFromRootPath_inValidThemesRootPathNaN = cgetNamedThemePathFromRootPath + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cThemes + wrd.cRoot + wrd.cPath + 'NaN'; // getNamedThemePathFromRootPath_inValidThemesRootPathNaN

// loadTheme
export const cloadTheme_validData = cloadTheme + bas.cUnderscore + wrd.cvalid + wrd.cData; // cloadTheme_validData

// applyTheme
export const capplyTheme_validThemeDataData = capplyTheme + bas.cUnderscore + wrd.cvalid + wrd.cTheme + wrd.cData + wrd.cData; // applyTheme_validThemeDataData
export const capplyTheme_inValidThemeDataString = capplyTheme + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cString; // applyTheme_inValidThemeDataString
export const capplyTheme_inValidThemeDataInteger = capplyTheme + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cInteger; // applyTheme_inValidThemeDataInteger
export const capplyTheme_inValidThemeDataBoolean = capplyTheme + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + wrd.cBoolean; // applyTheme_inValidThemeDataBoolean
export const capplyTheme_inValidThemeDataUndefined = capplyTheme + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + "Undefined"; // applyTheme_inValidThemeDataUndefined
export const capplyTheme_inValidThemeDataNaN = capplyTheme + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cTheme + wrd.cData + "NaN"; // applyTheme_inValidThemeDataNaN

// removePluginThemeData
export const cremovePluginThemeData_validPluginNameData = cremovePluginThemeData + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginThemeData_validPluginNameData
export const cremovePluginThemeData_inValidPluginNameString = cremovePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginThemeData_inValidPluginNameString
export const cremovePluginThemeData_inValidPluginNameInteger = cremovePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginThemeData_inValidPluginNameInteger
export const cremovePluginThemeData_inValidPluginNameBoolean = cremovePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginThemeData_inValidPluginNameBoolean
export const cremovePluginThemeData_inValidPluginNameUndefined = cremovePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginThemeData_inValidPluginNameUndefined
export const cremovePluginThemeData_inValidPluginNameNaN = cremovePluginThemeData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginThemeData_inValidPluginNameNaN

/* workflowBroker */
// addPluginWorkflows
export const caddPluginWorkflows_validData = caddPluginWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cData; // addPluginWorkflows_validData
export const caddPluginWorkflows_inValidPluginNameString = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // addPluginWorkflows_inValidPluginNameString
export const caddPluginWorkflows_inValidPluginWorkflowsString = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cString; // addPluginWorkflows_inValidPluginWorkflowsString
export const caddPluginWorkflows_inValidPluginNameInteger = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // addPluginWorkflows_inValidPluginNameInteger
export const caddPluginWorkflows_inValidPluginNameBoolean = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // addPluginWorkflows_inValidPluginNameBoolean
export const caddPluginWorkflows_inValidPluginWorkflowsInteger = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cInteger; // addPluginWorkflows_inValidPluginWorkflowsInteger
export const caddPluginWorkflows_inValidPluginWorkflowsBoolean = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + wrd.cBoolean; // addPluginWorkflows_inValidPluginWorkflowsBoolean
export const caddPluginWorkflows_inValidPluginNameUndefined = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'Undefined'; // addPluginWorkflows_inValidPluginNameUndefined
export const caddPluginWorkflows_inValidPluginNameNaN = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + 'NaN'; // addPluginWorkflows_inValidPluginNameNaN
export const caddPluginWorkflows_inValidPluginWorkflowsUndefined = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + 'Undefined'; // addPluginWorkflows_inValidPluginWorkflowsUndefined
export const caddPluginWorkflows_inValidPluginWorkflowsNaN = caddPluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cWorkflows + 'NaN'; // addPluginWorkflows_inValidPluginWorkflowsNaN

// getWorkflow
export const cgetWorkflow_validWorkflowNameData = cgetWorkflow + bas.cUnderscore + wrd.cvalid + wrd.cWorkflow + wrd.cName + wrd.cData; // getWorkflow_validWorkflowNameData
export const cgetWorkflow_inValidWorkflowNameString = cgetWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cString; // getWorkflow_inValidWorkflowNameString
export const cgetWorkflow_inValidWorkflowNameInteger = cgetWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cInteger; // getWorkflow_inValidWorkflowNameInteger
export const cgetWorkflow_inValidWorkflowNameBoolean = cgetWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cBoolean; // getWorkflow_inValidWorkflowNameBoolean
export const cgetWorkflow_inValidWorkflowNameUndefined = cgetWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + "Undefined"; // getWorkflow_inValidWorkflowNameUndefined
export const cgetWorkflow_inValidWorkflowNameNaN = cgetWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + "NaN"; // getWorkflow_inValidWorkflowNameNaN

// doesWorkflowExist
export const cdoesWorkflowExist_validWorkflowNameData = cdoesWorkflowExist + bas.cUnderscore + wrd.cvalid + wrd.cWorkflow + wrd.cName + wrd.cData; // doesWorkflowExist_validWorkflowNameData
export const cdoesWorkflowExist_inValidWorkflowNameString = cdoesWorkflowExist + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cString; // doesWorkflowExist_inValidWorkflowNameString
export const cdoesWorkflowExist_inValidWorkflowNameInteger = cdoesWorkflowExist + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cInteger; // doesWorkflowExist_inValidWorkflowNameInteger
export const cdoesWorkflowExist_inValidWorkflowNameBoolean = cdoesWorkflowExist + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cBoolean; // doesWorkflowExist_inValidWorkflowNameBoolean
export const cdoesWorkflowExist_inValidWorkflowNameUndefined = cdoesWorkflowExist + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + "Undefined"; // doesWorkflowExist_inValidWorkflowNameUndefined
export const cdoesWorkflowExist_inValidWorkflowNameNaN = cdoesWorkflowExist + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + "NaN"; // doesWorkflowExist_inValidWorkflowNameNaN

// doesWorkflowExistInWorkflowData
export const cdoesWorkflowExistInWorkflowData_validData = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cvalid + wrd.cData; // doesWorkflowExistInWorkflowData_validData
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cString; // doesWorkflowExistInWorkflowData_inValidWorkflowDataString
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cString; // doesWorkflowExistInWorkflowData_inValidWorkflowNameString
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataInteger = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cInteger; // doesWorkflowExistInWorkflowData_inValidWorkflowDataInteger
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cBoolean; // doesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameInteger = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cInteger; // doesWorkflowExistInWorkflowData_inValidWorkflowNameInteger
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cBoolean; // doesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + 'Undefined'; // doesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataNaN = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + 'NaN'; // doesWorkflowExistInWorkflowData_inValidWorkflowDataNaN
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + 'Undefined'; // doesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameNaN = cdoesWorkflowExistInWorkflowData + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + 'NaN'; // doesWorkflowExistInWorkflowData_inValidWorkflowNameNaN

// searchWorkflow
export const csearchWorkflow_validData = csearchWorkflow + bas.cUnderscore + wrd.cvalid + wrd.cData; // searchWorkflow_validData
export const csearchWorkflow_inValidAllWorkflowsString = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + wrd.cWorkflows + wrd.cString; // searchWorkflow_inValidAllWorkflowsString
export const csearchWorkflow_inValidWorkflowNameString = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cString; // searchWorkflow_inValidWorkflowNameString
export const csearchWorkflow_inValidAllWorkflowsInteger = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + wrd.cWorkflows + wrd.cInteger; // searchWorkflow_inValidAllWorkflowsInteger
export const csearchWorkflow_inValidAllWorkflowsBoolean = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + wrd.cWorkflows + wrd.cBoolean; // searchWorkflow_inValidAllWorkflowsBoolean
export const csearchWorkflow_inValidWorkflowNameInteger = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cInteger; // searchWorkflow_inValidWorkflowNameInteger
export const csearchWorkflow_inValidWorkflowNameBoolean = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + wrd.cBoolean; // searchWorkflow_inValidWorkflowNameBoolean
export const csearchWorkflow_inValidAllWorkflowsUndefined = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + wrd.cWorkflows + 'Undefined'; // searchWorkflow_inValidAllWorkflowsUndefined
export const csearchWorkflow_inValidAllWorkflowsNaN = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cAll + wrd.cWorkflows + 'NaN'; // searchWorkflow_inValidAllWorkflowsNaN
export const csearchWorkflow_inValidWorkflowNameUndefined = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + 'Undefined'; // searchWorkflow_inValidWorkflowNameUndefined
export const csearchWorkflow_inValidWorkflowNameNaN = csearchWorkflow + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cName + 'NaN'; // searchWorkflow_inValidWorkflowNameNaN

// getAllWorkflows
export const cgetAllWorkflows_validWorkflowDataStructureData = cgetAllWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cData; // getAllWorkflows_validWorkflowDataStructureData
export const cgetAllWorkflows_inValidWorkflowDataStructureString = cgetAllWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cString; // getAllWorkflows_inValidWorkflowDataStructureString
export const cgetAllWorkflows_inValidWorkflowDataStructureInteger = cgetAllWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cInteger; // getAllWorkflows_inValidWorkflowDataStructureInteger
export const cgetAllWorkflows_inValidWorkflowDataStructureBoolean = cgetAllWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cBoolean; // getAllWorkflows_inValidWorkflowDataStructureBoolean
export const cgetAllWorkflows_validWorkflowDataStructureUndefined = cgetAllWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cWorkflow + wrd.cData + wrd.cStructure + "Undefined"; // cgetAllWorkflows_validWorkflowDataStructureUndefined
export const cgetAllWorkflows_validWorkflowDataStructureNaN = cgetAllWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cWorkflow + wrd.cData + wrd.cStructure + "NaN"; // cgetAllWorkflows_validWorkflowDataStructureNaN

// getWorkflowNamespaceDataObject
export const cgetWorkflowNamespaceDataObject_validData = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cvalid + wrd.cData; // getWorkflowNamespaceDataObject_validData
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cString; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString; // getWorkflowNamespaceDataObject_inValidNamespaceToFindString
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cInteger; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cBoolean; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindInteger = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cInteger; // getWorkflowNamespaceDataObject_inValidNamespaceToFindInteger
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cBoolean; // getWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean
export const cgetWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.valid + wrd.cWorkflow + wrd.cData + wrd.cStructure + 'Undefined'; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureUndefined
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cWorkflow + wrd.cData + wrd.cStructure + 'NaN'; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + 'Undefined'; // getWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindNaN = cgetWorkflowNamespaceDataObject + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cNamespace + wrd.cTo + wrd.cFind + 'NaN'; // getWorkflowNamespaceDataObject_inValidNamespaceToFindNaN

// removePluginWorkflows
export const cremovePluginWorkflows_validPluginNameData = cremovePluginWorkflows + bas.cUnderscore + wrd.cvalid + wrd.cPlugin + wrd.cName + wrd.cData; // removePluginWorkflows_validPluginNameData
export const cremovePluginWorkflows_inValidPluginNameString = cremovePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cString; // removePluginWorkflows_inValidPluginNameString
export const cremovePluginWorkflows_inValidPluginNameInteger = cremovePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cInteger; // removePluginWorkflows_inValidPluginNameInteger
export const cremovePluginWorkflows_inValidPluginNameBoolean = cremovePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + wrd.cBoolean; // removePluginWorkflows_inValidPluginNameBoolean
export const cremovePluginWorkflows_inValidPluginNameUndefined = cremovePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "Undefined"; // removePluginWorkflows_inValidPluginNameUndefined
export const cremovePluginWorkflows_inValidPluginNameNaN = cremovePluginWorkflows + bas.cUnderscore + wrd.cin + wrd.cValid + wrd.cPlugin + wrd.cName + "NaN"; // removePluginWorkflows_inValidPluginNameNaN

/* auxiliaryArrayParsing */
// parseColorRangeInputs
export const cparseColorRangeInputs_validData = cparseColorRangeInputs + bas.cUnderscore + wrd.cvalid + wrd.cData; // parseColorRangeInputs_validData
export const cparseColorRangeInputs_inValidInputDataString = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cString; // parseColorRangeInputs_inValidInputDataString
export const cparseColorRangeInputs_inValidInputMetaDataString = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // parseColorRangeInputs_inValidInputMetaDataString
export const cparseColorRangeInputs_validInputDataInteger = cparseColorRangeInputs + bas.cUnderscore + wrd.cvalid + msg.cInputData + wrd.cInteger; // parseColorRangeInputs_inValidInputDataInteger
export const cparseColorRangeInputs_inValidInputDataBoolean = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // parseColorRangeInputs_inValidInputDataBoolean
export const cparseColorRangeInputs_validInputMetaDataInteger = cparseColorRangeInputs + bas.cUnderscore + wrd.cvalid + msg.cInputMetaData + wrd.cInteger; // parseColorRangeInputs_inValidInputMetaDataInteger
export const cparseColorRangeInputs_inValidInputMetaDataBoolean = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // parseColorRangeInputs_inValidInputMetaDataBoolean
export const cparseColorRangeInputs_inValidInputDataUndefined = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // parseColorRangeInputs_inValidInputDataUndefined
export const cparseColorRangeInputs_inValidInputDataNaN = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // parseColorRangeInputs_inValidInputDataNaN
export const cparseColorRangeInputs_inValidInputMetaDataUndefined = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // parseColorRangeInputs_inValidInputMetaDataUndefined
export const cparseColorRangeInputs_inValidInputMetaDataNaN = cparseColorRangeInputs + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // parseColorRangeInputs_inValidInputMetaDataNaN

// getNamedColorDataArray
export const cgetNamedColorDataArray_validData = cgetNamedColorDataArray + bas.cUnderscore + wrd.cvalid + wrd.cData; // getNamedColorDataArray_validData
export const cgetNamedColorDataArray_inValidInputDataString = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cString; // getNamedColorDataArray_inValidInputDataString
export const cgetNamedColorDataArray_inValidInputMetaDataString = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // getNamedColorDataArray_inValidInputMetaDataString
export const cgetNamedColorDataArray_inValidInputDataInteger = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cInteger; // getNamedColorDataArray_inValidInputDataInteger
export const cgetNamedColorDataArray_inValidInputDataBoolean = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // getNamedColorDataArray_inValidInputDataBoolean
export const cgetNamedColorDataArray_inValidInputMetaDataInteger = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // getNamedColorDataArray_inValidInputMetaDataInteger
export const cgetNamedColorDataArray_inValidInputMetaDataBoolean = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // getNamedColorDataArray_inValidInputMetaDataBoolean
export const cgetNamedColorDataArray_inValidInputDataUndefined = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // getNamedColorDataArray_inValidInputDataUndefined
export const cgetNamedColorDataArray_inValidInputDataNaN = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // getNamedColorDataArray_inValidInputDataNaN
export const cgetNamedColorDataArray_inValidInputMetaDataUndefined = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // getNamedColorDataArray_inValidInputMetaDataUndefined
export const cgetNamedColorDataArray_inValidInputMetaDataNaN = cgetNamedColorDataArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // getNamedColorDataArray_inValidInputMetaDataNaN

// doesArrayContainValue
export const cdoesArrayContainValue_validData = cdoesArrayContainValue + bas.cUnderscore + wrd.cvalid + wrd.cData; // doesArrayContainValue_validData
export const cdoesArrayContainValue_inValidInputDataString = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cString; // doesArrayContainValue_inValidInputDataString
export const cdoesArrayContainValue_inValidInputMetaDataString = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // doesArrayContainValue_inValidInputMetaDataString
export const cdoesArrayContainValue_inValidInputDataInteger = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cInteger; // doesArrayContainValue_inValidInputDataInteger
export const cdoesArrayContainValue_inValidInputDataBoolean = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // doesArrayContainValue_inValidInputDataBoolean
export const cdoesArrayContainValue_inValidInputMetaDataInteger = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // doesArrayContainValue_inValidInputMetaDataInteger
export const cdoesArrayContainValue_inValidInputMetaDataBoolean = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // doesArrayContainValue_inValidInputMetaDataBoolean
export const cdoesArrayContainValue_inValidInputDataUndefined = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // doesArrayContainValue_inValidInputDataUndefined
export const cdoesArrayContainValue_inValidInputDataNaN = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // doesArrayContainValue_inValidInputDataNaN
export const cdoesArrayContainValue_inValidInputMetaDataUndefined = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // doesArrayContainValue_inValidInputMetaDataUndefined
export const cdoesArrayContainValue_inValidInputMetaDataNaN = cdoesArrayContainValue + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // doesArrayContainValue_inValidInputMetaDataNaN

/* characterArrayParsing */
// replaceCharacterWithCharacter
export const creplaceCharacterWithCharacter_validData = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cvalid + wrd.cData; // replaceCharacterWithCharacter_validData
export const creplaceCharacterWithCharacter_inValidInputMetaDataString = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // replaceCharacterWithCharacter_inValidInputMetaDataString
export const creplaceCharacterWithCharacter_inValidInputDataInteger = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cInteger; // replaceCharacterWithCharacter_inValidInputDataInteger
export const creplaceCharacterWithCharacter_inValidInputDataBoolean = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // replaceCharacterWithCharacter_inValidInputDataBoolean
export const creplaceCharacterWithCharacter_inValidInputMetaDataInteger = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // replaceCharacterWithCharacter_inValidInputMetaDataInteger
export const creplaceCharacterWithCharacter_inValidInputMetaDataBoolean = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // replaceCharacterWithCharacter_inValidInputMetaDataBoolean
export const creplaceCharacterWithCharacter_inValidInputDataUndefined = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // replaceCharacterWithCharacter_inValidInputDataUndefined
export const creplaceCharacterWithCharacter_inValidInputDataNaN = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // replaceCharacterWithCharacter_inValidInputDataNaN
export const creplaceCharacterWithCharacter_inValidInputMetaDataUndefined = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // replaceCharacterWithCharacter_inValidInputMetaDataUndefined
export const creplaceCharacterWithCharacter_inValidInputMetaDataNaN = creplaceCharacterWithCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // replaceCharacterWithCharacter_inValidInputMetaDataNaN

// doesArrayContainCharacter
export const cdoesArrayContainCharacter_validData = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cvalid + wrd.cData; // doesArrayContainCharacter_validData
export const cdoesArrayContainCharacter_inValidInputMetaDataString = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // doesArrayContainCharacter_inValidInputMetaDataString
export const cdoesArrayContainCharacter_inValidInputMetaDataInteger = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // doesArrayContainCharacter_inValidInputMetaDataInteger
export const cdoesArrayContainCharacter_inValidInputMetaDataBoolean = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // doesArrayContainCharacter_inValidInputMetaDataBoolean
export const cdoesArrayContainCharacter_inValidInputDataUndefined = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // doesArrayContainCharacter_inValidInputDataUndefined
export const cdoesArrayContainCharacter_inValidInputDataNaN = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // doesArrayContainCharacter_inValidInputDataNaN
export const cdoesArrayContainCharacter_inValidInputMetaDataUndefined = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // doesArrayContainCharacter_inValidInputMetaDataUndefined
export const cdoesArrayContainCharacter_inValidInputMetaDataNaN = cdoesArrayContainCharacter + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // doesArrayContainCharacter_inValidInputMetaDataNaN

// removeCharacterFromArray
export const cremoveCharacterFromArray_validData = cremoveCharacterFromArray + bas.cUnderscore + wrd.cvalid + wrd.cData; // removeCharacterFromArray_validData
export const cremoveCharacterFromArray_inValidInputDataString = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cString; // removeCharacterFromArray_inValidInputDataString
export const cremoveCharacterFromArray_inValidInputMetaDataString = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // removeCharacterFromArray_inValidInputMetaDataString
export const cremoveCharacterFromArray_inValidInputDataInteger = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cInteger; // removeCharacterFromArray_inValidInputDataInteger
export const cremoveCharacterFromArray_inValidInputDataBoolean = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // removeCharacterFromArray_inValidInputDataBoolean
export const cremoveCharacterFromArray_inValidInputMetaDataInteger = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // removeCharacterFromArray_inValidInputMetaDataInteger
export const cremoveCharacterFromArray_inValidInputMetaDataBoolean = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // removeCharacterFromArray_inValidInputMetaDataBoolean
export const cremoveCharacterFromArray_inValidInputDataUndefined = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // removeCharacterFromArray_inValidInputDataUndefined
export const cremoveCharacterFromArray_inValidInputDataNaN = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // removeCharacterFromArray_inValidInputDataNaN
export const cremoveCharacterFromArray_inValidInputMetaDataUndefined = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // removeCharacterFromArray_inValidInputMetaDataUndefined
export const cremoveCharacterFromArray_inValidInputMetaDataNaN = cremoveCharacterFromArray + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // removeCharacterFromArray_inValidInputMetaDataNaN

// replaceCharacterAtIndex
export const creplaceCharacterAtIndex_validData = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cvalid + wrd.cData; // replaceCharacterAtIndex_validData
export const creplaceCharacterAtIndex_inValidInputMetaDataString = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cString; // replaceCharacterAtIndex_inValidInputMetaDataString
export const creplaceCharacterAtIndex_inValidInputDataInteger = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cInteger; // replaceCharacterAtIndex_inValidInputDataInteger
export const creplaceCharacterAtIndex_inValidInputDataBoolean = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + wrd.cBoolean; // replaceCharacterAtIndex_inValidInputDataBoolean
export const creplaceCharacterAtIndex_inValidInputMetaDataInteger = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cInteger; // replaceCharacterAtIndex_inValidInputMetaDataInteger
export const creplaceCharacterAtIndex_inValidInputMetaDataBoolean = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + wrd.cBoolean; // replaceCharacterAtIndex_inValidInputMetaDataBoolean
export const creplaceCharacterAtIndex_inValidInputDataUndefined = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'Undefined'; // replaceCharacterAtIndex_inValidInputDataUndefined
export const creplaceCharacterAtIndex_inValidInputDataNaN = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputData + 'NaN'; // replaceCharacterAtIndex_inValidInputDataNaN
export const creplaceCharacterAtIndex_inValidInputMetaDataUndefined = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'Undefined'; // replaceCharacterAtIndex_inValidInputMetaDataUndefined
export const creplaceCharacterAtIndex_inValidInputMetaDataNaN = creplaceCharacterAtIndex + bas.cUnderscore + wrd.cin + wrd.cValid + msg.cInputMetaData + 'NaN'; // replaceCharacterAtIndex_inValidInputMetaDataNaN



/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* auxiliaryStringParsing */

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