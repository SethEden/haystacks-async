/**
 * @file test.constants.validation.js
 * @module test.constants.validation
 * @description Contains all validations for re-usable test constants.
 * @requires module:test.constants
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_con from './test.constants.js';



/**
 * @function testConstantsValidation
 * @description Initializes the test 1 constants validation data objects array.
 * @return {void}
 * @author Vlad Sorokin
 * @date 2023/08/10
 */
export const testConstantsValidation = [
    // Describe words

    /* commandBroker */
    {Name: 'cbootStrapCommands', Actual: tst_con.cbootStrapCommands, Expected: 'bootStrapCommands'},
    {Name: 'cresetCommands', Actual: tst_con.cresetCommands, Expected: 'resetCommands'},
    {Name: 'caddClientCommands', Actual: tst_con.caddClientCommands, Expected: 'addClientCommands'},
    {Name: 'caddPluginCommands', Actual: tst_con.caddPluginCommands, Expected: 'addPluginCommands'},
    {Name: 'caddPluginCommandAliases', Actual: tst_con.caddPluginCommandAliases, Expected: 'addPluginCommandAliases'},
    {Name: 'cgetValidCommand', Actual: tst_con.cgetValidCommand, Expected: 'getValidCommand'},
    {Name: 'ccountMatchingCommandAlias', Actual: tst_con.ccountMatchingCommandAlias, Expected: 'countMatchingCommandAlias'},
    {Name: 'cgetAllCommandAliasData', Actual: tst_con.cgetAllCommandAliasData, Expected: 'getAllCommandAliasData'},
    {Name: 'cgetCommandNamespaceDataObject', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandArgs', Actual: tst_con.cgetCommandArgs, Expected: 'getCommandArgs'},
    {Name: 'cexecuteCommand', Actual: tst_con.cexecuteCommand, Expected: 'executeCommand'},
    {Name: 'cremovePluginCommands', Actual: tst_con.cremovePluginCommands, Expected: 'removePluginCommands'},
    {Name: 'cremovePluginCommandAliases', Actual: tst_con.cremovePluginCommandAliases, Expected: 'removePluginCommandAliases'},
 
    /* commandBroker */
    {Name: 'cinitializeConstantsValidationData', Actual: tst_con.cinitializeConstantsValidationData, Expected: 'initializeConstantsValidationData'},
    {Name: 'cgenerateFrameworkConstantsValidationData', Actual: tst_con.cgenerateFrameworkConstantsValidationData, Expected: 'generateFrameworkConstantsValidationData'},
    {Name: 'caddConstantsValidationData', Actual: tst_con.caddConstantsValidationData, Expected: 'addConstantsValidationData'},
    {Name: 'cremovePluginConstantsValidationData', Actual: tst_con.cremovePluginConstantsValidationData, Expected: 'removePluginConstantsValidationData'},

    /* dataBroker */
    {Name: 'caddPluginConfigurationData', Actual: tst_con.caddPluginConfigurationData, Expected: 'addPluginConfigurationData'}, 
    {Name: 'cscanDataPath', Actual: tst_con.cscanDataPath, Expected: 'scanDataPath'},
    {Name: 'cfindUniversalDebugConfigSetting', Actual: tst_con.cfindUniversalDebugConfigSetting, Expected: 'findUniversalDebugConfigSetting'},
    {Name: 'cloadAllCsvData', Actual: tst_con.cloadAllCsvData, Expected: 'loadAllCsvData'},
    {Name: 'cloadAllXmlData', Actual: tst_con.cloadAllXmlData, Expected: 'loadAllXmlData'},
    {Name: 'cprocessCsvData', Actual: tst_con.cprocessCsvData, Expected: 'processCsvData'},
    {Name: 'cpreprocessJsonFile', Actual: tst_con.cpreprocessJsonFile, Expected: 'preprocessJsonFile'},
    {Name: 'cwriteJsonDataToFile', Actual: tst_con.cwriteJsonDataToFile, Expected: 'writeJsonDataToFile'},
    {Name: 'csetupDataStorage', Actual: tst_con.csetupDataStorage, Expected: 'setupDataStorage'},
    {Name: 'cremovePluginConfigurationData', Actual: tst_con.cremovePluginConfigurationData, Expected: 'removePluginConfigurationData'},

    /* pluginBroker */
    {Name: 'cloadPluginRegistry', Actual: tst_con.cloadPluginRegistry, Expected: 'loadPluginRegistry'},
    {Name: 'cstorePluginRegistryInDataStructure', Actual: tst_con.cstorePluginRegistryInDataStructure, Expected: 'storePluginRegistryInDataStructure'},
    {Name: 'clistAllLoadedPlugins', Actual: tst_con.clistAllLoadedPlugins, Expected: 'listAllLoadedPlugins'},
    {Name: 'clistPluginsInRegistry', Actual: tst_con.clistPluginsInRegistry, Expected: 'listPluginsInRegistry'},
    {Name: 'clistPluginsPathsInRegistry', Actual: tst_con.clistPluginsPathsInRegistry, Expected: 'listPluginsPathsInRegistry'},
    {Name: 'clistPluginsAttributeInRegistry', Actual: tst_con.clistPluginsAttributeInRegistry, Expected: 'listPluginsAttributeInRegistry'},
    {Name: 'clistPluginsInRegistryPath', Actual: tst_con.clistPluginsInRegistryPath, Expected: 'listPluginsInRegistryPath'},
    {Name: 'ccountPluginsInRegistry', Actual: tst_con.ccountPluginsInRegistry, Expected: 'countPluginsInRegistry'},
    {Name: 'ccountPluginsInRegistryPath', Actual: tst_con.ccountPluginsInRegistryPath, Expected: 'countPluginsInRegistryPath'},
    {Name: 'cregisterPlugin', Actual: tst_con.cregisterPlugin, Expected: 'registerPlugin'},
    {Name: 'cunregisterPlugin', Actual: tst_con.cunregisterPlugin, Expected: 'unregisterPlugin'},
    {Name: 'csyncPluginRegistryWithPluginRegistryPath', Actual: tst_con.csyncPluginRegistryWithPluginRegistryPath, Expected: 'syncPluginRegistryWithPluginRegistryPath'},
    {Name: 'cunregisterAllPlugins', Actual: tst_con.cunregisterAllPlugins, Expected: 'unregisterAllPlugins'},
    {Name: 'csavePluginRegistry', Actual: tst_con.csavePluginRegistry, Expected: 'savePluginRegistry'},
    {Name: 'cloadPluginMetaData', Actual: tst_con.cloadPluginMetaData, Expected: 'loadPluginMetaData'},
    {Name: 'cextractAndProcessPluginEntryPointURI', Actual: tst_con.cextractAndProcessPluginEntryPointURI, Expected: 'extractAndProcessPluginEntryPointURI'},
    {Name: 'cloadPlugin', Actual: tst_con.cloadPlugin, Expected: 'loadPlugin'},
    {Name: 'cintegratePluginBusinessRules', Actual: tst_con.cintegratePluginBusinessRules, Expected: 'integratePluginBusinessRules'},
    {Name: 'cintegratePluginCommands', Actual: tst_con.cintegratePluginCommands, Expected: 'integratePluginCommands'},
    {Name: 'cintegratePluginConfigurationData', Actual: tst_con.cintegratePluginConfigurationData, Expected: 'integratePluginConfigurationData'},
    {Name: 'cintegratePluginCommandAliases', Actual: tst_con.cintegratePluginCommandAliases, Expected: 'integratePluginCommandAliases'},
    {Name: 'cintegratePluginWorkflows', Actual: tst_con.cintegratePluginWorkflows, Expected: 'integratePluginWorkflows'},
    {Name: 'cintegratePluginThemeData', Actual: tst_con.cintegratePluginThemeData, Expected: 'integratePluginThemeData'},
    
    /* ruleBroker */
    {Name: 'cbootStrapBusinessRules', Actual: tst_con.cbootStrapBusinessRules, Expected: 'bootStrapBusinessRules'},
    {Name: 'cresetBusinessRules', Actual: tst_con.cresetBusinessRules, Expected: 'resetBusinessRules'},
    {Name: 'caddClientRules', Actual: tst_con.caddClientRules, Expected: 'addClientRules'},
    {Name: 'caddPluginRules', Actual: tst_con.caddPluginRules, Expected: 'addPluginRules'},
    {Name: 'cprocessRules', Actual: tst_con.cprocessRules, Expected: 'processRules'},
    {Name: 'cremovePluginBusinessRules', Actual: tst_con.cremovePluginBusinessRules, Expected: 'removePluginBusinessRules'},

    /* themeBroker */
    {Name: 'cinitThemeData', Actual: tst_con.cinitThemeData, Expected: 'initThemeData'},
    {Name: 'cgenerateThemeDataFromPath', Actual: tst_con.cgenerateThemeDataFromPath, Expected: 'generateThemeDataFromPath'},
    {Name: 'caddThemeData', Actual: tst_con.caddThemeData, Expected: 'addThemeData'},
    {Name: 'cgetNamedThemesFromRootPath', Actual: tst_con.cgetNamedThemesFromRootPath, Expected: 'getNamedThemesFromRootPath'},
    {Name: 'cgetNamedThemePathFromRootPath', Actual: tst_con.cgetNamedThemePathFromRootPath, Expected: 'getNamedThemePathFromRootPath'},
    {Name: 'cloadTheme', Actual: tst_con.cloadTheme, Expected: 'loadTheme'},
    {Name: 'capplyTheme', Actual: tst_con.capplyTheme, Expected: 'applyTheme'},
    {Name: 'cremovePluginThemeData', Actual: tst_con.cremovePluginThemeData, Expected: 'removePluginThemeData'},

    /* workflowBroker */
    {Name: 'caddPluginWorkflows', Actual: tst_con.caddPluginWorkflows, Expected: 'addPluginWorkflows'},
    {Name: 'cgetWorkflow', Actual: tst_con.cgetWorkflow, Expected: 'getWorkflow'},
    {Name: 'cdoesWorkflowExist', Actual: tst_con.cdoesWorkflowExist, Expected: 'doesWorkflowExist'},
    {Name: 'cdoesWorkflowExistInWorkflowData', Actual: tst_con.cdoesWorkflowExistInWorkflowData, Expected: 'doesWorkflowExistInWorkflowData'},
    {Name: 'csearchWorkflow', Actual: tst_con.csearchWorkflow, Expected: 'searchWorkflow'},
    {Name: 'cgetAllWorkflows', Actual: tst_con.cgetAllWorkflows, Expected: 'getAllWorkflows'},
    {Name: 'cgetWorkflowNamespaceDataObject', Actual: tst_con.cgetWorkflowNamespaceDataObject, Expected: 'getWorkflowNamespaceDataObject'},
    {Name: 'cremovePluginWorkflows', Actual: tst_con.cremovePluginWorkflows, Expected: 'removePluginWorkflows'},

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
    {Name: 'cinitFramework', Actual: tst_con.cinitFramework, Expected: 'initFramework'},
    {Name: 'caccouterFramework', Actual: tst_con.caccouterFramework, Expected: 'accouterFramework'},
    {Name: 'cgetFrameworkData', Actual: tst_con.cgetFrameworkData, Expected: 'getFrameworkData'},
    {Name: 'cmergeClientBusinessRules', Actual: tst_con.cmergeClientBusinessRules, Expected: 'mergeClientBusinessRules'},
    {Name: 'cmergeClientCommands', Actual: tst_con.cmergeClientCommands, Expected: 'mergeClientCommands'},
    {Name: 'clistLoadedPlugins', Actual: tst_con.clistLoadedPlugins, Expected: 'listLoadedPlugins'},
    {Name: 'clistAllPluginsInRegistry', Actual: tst_con.clistAllPluginsInRegistry, Expected: 'listAllPluginsInRegistry'},
    {Name: 'clistAllPluginsInRegistryPath', Actual: tst_con.clistAllPluginsInRegistryPath, Expected: 'listAllPluginsInRegistryPath'},
    {Name: 'cnumberOfPluginsInRegistry', Actual: tst_con.cnumberOfPluginsInRegistry, Expected: 'numberOfPluginsInRegistry'},
    {Name: 'cnumberOfPluginsInRegistryPath', Actual: tst_con.cnumberOfPluginsInRegistryPath, Expected: 'numberOfPluginsInRegistryPath'},
    {Name: 'cregisterPluginByNameAndPath', Actual: tst_con.cregisterPluginByNameAndPath, Expected: 'registerPluginByNameAndPath'},
    {Name: 'cunregisterPluginByName', Actual: tst_con.cunregisterPluginByName, Expected: 'unregisterPluginByName'},
    {Name: 'cunregisterPlugins', Actual: tst_con.cunregisterPlugins, Expected: 'unregisterPlugins'},
    {Name: 'csyncPluginRegistryWithPath', Actual: tst_con.csyncPluginRegistryWithPath, Expected: 'syncPluginRegistryWithPath'},
    {Name: 'cclearAllPluginRegistry', Actual: tst_con.cclearAllPluginRegistry, Expected: 'clearAllPluginRegistry'},
    {Name: 'cwritePluginRegistryToDisk', Actual: tst_con.cwritePluginRegistryToDisk, Expected: 'writePluginRegistryToDisk'},
    {Name: 'cloadPlugin', Actual: tst_con.cloadPlugin, Expected: 'loadPlugin'},
    {Name: 'cloadPlugins', Actual: tst_con.cloadPlugins, Expected: 'loadPlugins'},
    {Name: 'cloadPluginsFromRegistry', Actual: tst_con.cloadPluginsFromRegistry, Expected: 'loadPluginsFromRegistry'},
    {Name: 'cunloadPlugin', Actual: tst_con.cunloadPlugin, Expected: 'unloadPlugin'},
    {Name: 'cunloadPlugins', Actual: tst_con.cunloadPlugins, Expected: 'unloadPlugins'},
    {Name: 'cunloadAllPlugins', Actual: tst_con.cunloadAllPlugins, Expected: 'unloadAllPlugins'},
    {Name: 'cgetPluginsRegistryPath', Actual: tst_con.cgetPluginsRegistryPath, Expected: 'getPluginsRegistryPath'}, 
    {Name: 'cloadPluginResourceData', Actual: tst_con.cloadPluginResourceData, Expected: 'loadPluginResourceData'},
    {Name: 'cloadAllJsonData', Actual: tst_con.cloadAllJsonData, Expected: 'loadAllJsonData'},
    {Name: 'cstoreData', Actual: tst_con.cstoreData, Expected: 'storeData'},
    {Name: 'cgetData', Actual: tst_con.cgetData, Expected: 'getData'},
    {Name: 'cclearData', Actual: tst_con.cclearData, Expected: 'clearData'},
    {Name: 'cexecuteBusinessRules', Actual: tst_con.cexecuteBusinessRules, Expected: 'executeBusinessRules'},
    {Name: 'cenqueueCommand', Actual: tst_con.cenqueueCommand, Expected: 'enqueueCommand'},
    {Name: 'cisCommandQueueEmpty', Actual: tst_con.cisCommandQueueEmpty, Expected: 'isCommandQueueEmpty'},
    {Name: 'csetConfigurationSetting', Actual: tst_con.csetConfigurationSetting, Expected: 'setConfigurationSetting'},
    {Name: 'cgetConfigurationSetting', Actual: tst_con.cgetConfigurationSetting, Expected: 'getConfigurationSetting'},
    {Name: 'cconsoleLog', Actual: tst_con.cconsoleLog, Expected: 'cconsoleLog'},
    {Name: 'cconsoleTableLog', Actual: tst_con.cconsoleTableLog, Expected: 'cconsoleTableLog'},


    // Test names

    /* commandBroker */
    // bootStrapCommands
    {Name: 'cbootStrapCommands_validData', Actual: tst_con.cbootStrapCommands_validData, Expected: 'bootStrapCommands_validData'},

    // resetCommands
    {Name: 'cresetCommands_validData', Actual: tst_con.cresetCommands_validData, Expected: 'resetCommands_validData'},

    // addClientCommands
    {Name: 'caddClientCommands_validClientCommandsData', Actual: tst_con.caddClientCommands_validClientCommandsData, Expected: 'addClientCommands_validClientCommandsData'},
    {Name: 'caddClientCommands_inValidClientCommandsString', Actual: tst_con.caddClientCommands_inValidClientCommandsString, Expected: 'addClientCommands_inValidClientCommandsString'},
    {Name: 'caddClientCommands_inValidClientCommandsInteger', Actual: tst_con.caddClientCommands_inValidClientCommandsInteger, Expected: 'addClientCommands_inValidClientCommandsInteger'},
    {Name: 'caddClientCommands_inValidClientCommandsBoolean', Actual: tst_con.caddClientCommands_inValidClientCommandsBoolean, Expected: 'addClientCommands_inValidClientCommandsBoolean'},
    {Name: 'caddClientCommands_inValidClientCommandsUndefined', Actual: tst_con.caddClientCommands_inValidClientCommandsUndefined, Expected: 'addClientCommands_inValidClientCommandsUndefined'},
    {Name: 'caddClientCommands_inValidClientCommandsNaN', Actual: tst_con.caddClientCommands_inValidClientCommandsNaN, Expected: 'addClientCommands_inValidClientCommandsNaN'},

    // addPluginCommands
    {Name: 'caddPluginCommands_validData', Actual: tst_con.caddPluginCommands_validData, Expected: 'addPluginCommands_validData'},
    {Name: 'caddPluginCommands_inValidPluginCommandsString', Actual: tst_con.caddPluginCommands_inValidPluginCommandsString, Expected: 'addPluginCommands_inValidPluginCommandsString'},
    {Name: 'caddPluginCommands_inValidPluginNameInteger', Actual: tst_con.caddPluginCommands_inValidPluginNameInteger, Expected: 'addPluginCommands_inValidPluginNameInteger'},
    {Name: 'caddPluginCommands_inValidPluginNameBoolean', Actual: tst_con.caddPluginCommands_inValidPluginNameBoolean, Expected: 'addPluginCommands_inValidPluginNameBoolean'},
    {Name: 'caddPluginCommands_inValidPluginCommandsInteger', Actual: tst_con.caddPluginCommands_inValidPluginCommandsInteger, Expected: 'addPluginCommands_inValidPluginCommandsInteger'},
    {Name: 'caddPluginCommands_inValidPluginCommandsBoolean', Actual: tst_con.caddPluginCommands_inValidPluginCommandsBoolean, Expected: 'addPluginCommands_inValidPluginCommandsBoolean'},
    {Name: 'caddPluginCommands_inValidPluginNameUndefined', Actual: tst_con.caddPluginCommands_inValidPluginNameUndefined, Expected: 'addPluginCommands_inValidPluginNameUndefined'},
    {Name: 'caddPluginCommands_inValidPluginNameNaN', Actual: tst_con.caddPluginCommands_inValidPluginNameNaN, Expected: 'addPluginCommands_inValidPluginNameNaN'},
    {Name: 'caddPluginCommands_inValidPluginCommandsUndefined', Actual: tst_con.caddPluginCommands_inValidPluginCommandsUndefined, Expected: 'addPluginCommands_inValidPluginCommandsUndefined'},
    {Name: 'caddPluginCommands_inValidPluginCommandsNaN', Actual: tst_con.caddPluginCommands_inValidPluginCommandsNaN, Expected: 'addPluginCommands_inValidPluginCommandsNaN'},

    // addPluginCommandAliases
    {Name: 'caddPluginCommandAliases_validData', Actual: tst_con.caddPluginCommandAliases_validData, Expected: 'addPluginCommandAliases_validData'},
    {Name: 'caddPluginCommandAliases_inValidPluginCommandAliasesString', Actual: tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesString, Expected: 'addPluginCommandAliases_inValidPluginCommandAliasesString'},
    {Name: 'caddPluginCommandAliases_inValidPluginNameInteger', Actual: tst_con.caddPluginCommandAliases_inValidPluginNameInteger, Expected: 'addPluginCommandAliases_inValidPluginNameInteger'},
    {Name: 'caddPluginCommandAliases_inValidPluginNameBoolean', Actual: tst_con.caddPluginCommandAliases_inValidPluginNameBoolean, Expected: 'addPluginCommandAliases_inValidPluginNameBoolean'},
    {Name: 'caddPluginCommandAliases_inValidPluginCommandAliasesInteger', Actual: tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesInteger, Expected: 'addPluginCommandAliases_inValidPluginCommandAliasesInteger'},
    {Name: 'caddPluginCommandAliases_inValidPluginCommandAliasesBoolean', Actual: tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesBoolean, Expected: 'addPluginCommandAliases_inValidPluginCommandAliasesBoolean'},
    {Name: 'caddPluginCommandAliases_inValidPluginNameUndefined', Actual: tst_con.caddPluginCommandAliases_inValidPluginNameUndefined, Expected: 'addPluginCommandAliases_inValidPluginNameUndefined'},
    {Name: 'caddPluginCommandAliases_inValidPluginNameNaN', Actual: tst_con.caddPluginCommandAliases_inValidPluginNameNaN, Expected: 'addPluginCommandAliases_inValidPluginNameNaN'},
    {Name: 'caddPluginCommandAliases_inValidPluginCommandAliasesUndefined', Actual: tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesUndefined, Expected: 'addPluginCommandAliases_inValidPluginCommandAliasesUndefined'},
    {Name: 'caddPluginCommandAliases_inValidPluginCommandAliasesNaN', Actual: tst_con.caddPluginCommandAliases_inValidPluginCommandAliasesNaN, Expected: 'addPluginCommandAliases_inValidPluginCommandAliasesNaN'},
    
    // getValidCommand
    {Name: 'cgetValidCommand_validData', Actual: tst_con.cgetValidCommand_validData, Expected: 'getValidCommand_validData'},
    {Name: 'cgetValidCommand_inValidCommandStringString', Actual: tst_con.cgetValidCommand_inValidCommandStringString, Expected: 'getValidCommand_inValidCommandStringString'},
    {Name: 'cgetValidCommand_inValidCommandDelimiterString', Actual: tst_con.cgetValidCommand_inValidCommandDelimiterString, Expected: 'getValidCommand_inValidCommandDelimiterString'},
    {Name: 'cgetValidCommand_inValidCommandStringInteger', Actual: tst_con.cgetValidCommand_inValidCommandStringInteger, Expected: 'getValidCommand_inValidCommandStringInteger'},
    {Name: 'cgetValidCommand_inValidCommandStringBoolean', Actual: tst_con.cgetValidCommand_inValidCommandStringBoolean, Expected: 'getValidCommand_inValidCommandStringBoolean'},
    {Name: 'cgetValidCommand_inValidCommandDelimiterInteger', Actual: tst_con.cgetValidCommand_inValidCommandDelimiterInteger, Expected: 'getValidCommand_inValidCommandDelimiterInteger'},
    {Name: 'cgetValidCommand_inValidCommandDelimiterBoolean', Actual: tst_con.cgetValidCommand_inValidCommandDelimiterBoolean, Expected: 'getValidCommand_inValidCommandDelimiterBoolean'},
    {Name: 'cgetValidCommand_inValidCommandStringUndefined', Actual: tst_con.cgetValidCommand_inValidCommandStringUndefined, Expected: 'getValidCommand_inValidCommandStringUndefined'},
    {Name: 'cgetValidCommand_inValidCommandStringNaN', Actual: tst_con.cgetValidCommand_inValidCommandStringNaN, Expected: 'getValidCommand_inValidCommandStringNaN'},
    {Name: 'cgetValidCommand_inValidCommandDelimiterUndefined', Actual: tst_con.cgetValidCommand_inValidCommandDelimiterUndefined, Expected: 'getValidCommand_inValidCommandDelimiterUndefined'},
    {Name: 'cgetValidCommand_inValidCommandDelimiterNaN', Actual: tst_con.cgetValidCommand_inValidCommandDelimiterNaN, Expected: 'getValidCommand_inValidCommandDelimiterNaN'},

    // countMatchingCommandAlias
    {Name: 'ccountMatchingCommandAlias_validData', Actual: tst_con.ccountMatchingCommandAlias_validData, Expected: 'countMatchingCommandAlias_validData'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasDataString', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataString, Expected: 'countMatchingCommandAlias_inValidCommandAliasDataString'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasNameString', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameString, Expected: 'countMatchingCommandAlias_inValidCommandAliasNameString'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasDataInteger', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataInteger, Expected: 'countMatchingCommandAlias_inValidCommandAliasDataInteger'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasDataBoolean', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataBoolean, Expected: 'countMatchingCommandAlias_inValidCommandAliasDataBoolean'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasNameInteger', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameInteger, Expected: 'countMatchingCommandAlias_inValidCommandAliasNameInteger'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasNameBoolean', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameBoolean, Expected: 'countMatchingCommandAlias_inValidCommandAliasNameBoolean'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasDataUndefined', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataUndefined, Expected: 'countMatchingCommandAlias_inValidCommandAliasDataUndefined'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasDataNaN', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataNaN, Expected: 'countMatchingCommandAlias_inValidCommandAliasDataNaN'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasNameUndefined', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameUndefined, Expected: 'countMatchingCommandAlias_inValidCommandAliasNameUndefined'},
    {Name: 'ccountMatchingCommandAlias_inValidCommandAliasNameNaN', Actual: tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameNaN, Expected: 'countMatchingCommandAlias_inValidCommandAliasNameNaN'},

    // getAllCommandAliasData
    {Name: 'cgetAllCommandAliasData_validCommandAliasDataStructureData', Actual: tst_con.cgetAllCommandAliasData_validCommandAliasDataStructureData, Expected: 'getAllCommandAliasData_validCommandAliasDataStructureData'},
    {Name: 'cgetAllCommandAliasData_inValidCommandAliasDataStructureString', Actual: tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureString, Expected: 'getAllCommandAliasData_inValidCommandAliasDataStructureString'},
    {Name: 'cgetAllCommandAliasData_inValidCommandAliasDataStructureInteger', Actual: tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureInteger, Expected: 'getAllCommandAliasData_inValidCommandAliasDataStructureInteger'},
    {Name: 'cgetAllCommandAliasData_inValidCommandAliasDataStructureBoolean', Actual: tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureBoolean, Expected: 'getAllCommandAliasData_inValidCommandAliasDataStructureBoolean'},
    {Name: 'cgetAllCommandAliasData_validCommandAliasDataStructureUndefined', Actual: tst_con.cgetAllCommandAliasData_validCommandAliasDataStructureUndefined, Expected: 'getAllCommandAliasData_validCommandAliasDataStructureUndefined'},
    {Name: 'cgetAllCommandAliasData_inValidCommandAliasDataStructureNaN', Actual: tst_con.cgetAllCommandAliasData_inValidCommandAliasDataStructureNaN, Expected: 'getAllCommandAliasData_inValidCommandAliasDataStructureNaN'},

    // cgetCommandNamespaceDataObject
    {Name: 'cgetCommandNamespaceDataObject_validData', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidNamespaceToFindString', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureInteger', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidNamespaceToFindInteger', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_validCommandAliasDataStructureUndefined', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNaN', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidNamespaceToFindUndefined', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},
    {Name: 'cgetCommandNamespaceDataObject_inValidNamespaceToFindNaN', Actual: tst_con.cgetCommandNamespaceDataObject, Expected: 'getCommandNamespaceDataObject'},

    // cgetCommandArgs
    {Name: 'cgetCommandArgs_validData', Actual: tst_con.cgetCommandArgs_validData, Expected: 'getCommandArgs_validData'},
    {Name: 'cgetCommandArgs_inValidCommandStringString', Actual: tst_con.cgetCommandArgs_inValidCommandStringString, Expected: 'getCommandArgs_inValidCommandStringString'},
    {Name: 'cgetCommandArgs_inValidCommandDelimiterString', Actual: tst_con.cgetCommandArgs_inValidCommandDelimiterString, Expected: 'getCommandArgs_inValidCommandDelimiterString'},
    {Name: 'cgetCommandArgs_inValidCommandStringInteger', Actual: tst_con.cgetCommandArgs_inValidCommandStringInteger, Expected: 'getCommandArgs_inValidCommandStringInteger'},
    {Name: 'cgetCommandArgs_inValidCommandStringBoolean', Actual: tst_con.cgetCommandArgs_inValidCommandStringBoolean, Expected: 'getCommandArgs_inValidCommandStringBoolean'},
    {Name: 'cgetCommandArgs_inValidCommandDelimiterInteger', Actual: tst_con.cgetCommandArgs_inValidCommandDelimiterInteger, Expected: 'getCommandArgs_inValidCommandDelimiterInteger'},
    {Name: 'cgetCommandArgs_inValidCommandDelimiterBoolean', Actual: tst_con.cgetCommandArgs_inValidCommandDelimiterBoolean, Expected: 'getCommandArgs_inValidCommandDelimiterBoolean'},
    {Name: 'cgetCommandArgs_inValidCommandStringUndefined', Actual: tst_con.cgetCommandArgs_inValidCommandStringUndefined, Expected: 'getCommandArgs_inValidCommandStringUndefined'},
    {Name: 'cgetCommandArgs_inValidCommandStringNaN', Actual: tst_con.cgetCommandArgs_inValidCommandStringNaN, Expected: 'getCommandArgs_inValidCommandStringNaN'},
    {Name: 'cgetCommandArgs_validCommandDelimiterUndefined', Actual: tst_con.cgetCommandArgs_validCommandDelimiterUndefined, Expected: 'getCommandArgs_validCommandDelimiterUndefined'},
    {Name: 'cgetCommandArgs_validCommandDelimiterNaN', Actual: tst_con.cgetCommandArgs_validCommandDelimiterNaN, Expected: 'getCommandArgs_validCommandDelimiterNaN'},
    
    // cexecuteCommand
    {Name: 'cexecuteCommand_validCommandStringData', Actual: tst_con.cexecuteCommand_validCommandStringData, Expected: 'executeCommand_validCommandStringData'},
    {Name: 'cexecuteCommand_inValidCommandStringString', Actual: tst_con.cexecuteCommand_inValidCommandStringString, Expected: 'executeCommand_inValidCommandStringString'},
    {Name: 'cexecuteCommand_inValidCommandStringInteger', Actual: tst_con.cexecuteCommand_inValidCommandStringInteger, Expected: 'executeCommand_inValidCommandStringInteger'},
    {Name: 'cexecuteCommand_inValidCommandStringBoolean', Actual: tst_con.cexecuteCommand_inValidCommandStringBoolean, Expected: 'executeCommand_inValidCommandStringBoolean'},
    {Name: 'cexecuteCommand_inValidCommandStringUndefined', Actual: tst_con.cexecuteCommand_inValidCommandStringUndefined, Expected: 'executeCommand_inValidCommandStringUndefined'},
    {Name: 'cexecuteCommand_inValidCommandStringNaN', Actual: tst_con.cexecuteCommand_inValidCommandStringNaN, Expected: 'executeCommand_inValidCommandStringNaN'},
    
    // cremovePluginCommands
    {Name: 'cremovePluginCommands_validPluginNameData', Actual: tst_con.cremovePluginCommands_validPluginNameData, Expected: 'removePluginCommands_validPluginNameData'},
    {Name: 'cremovePluginCommands_inValidPluginNameString', Actual: tst_con.cremovePluginCommands_inValidPluginNameString, Expected: 'removePluginCommands_inValidPluginNameString'},
    {Name: 'cremovePluginCommands_inValidPluginNameInteger', Actual: tst_con.cremovePluginCommands_inValidPluginNameInteger, Expected: 'removePluginCommands_inValidPluginNameInteger'},
    {Name: 'cremovePluginCommands_inValidPluginNameBoolean', Actual: tst_con.cremovePluginCommands_inValidPluginNameBoolean, Expected: 'removePluginCommands_inValidPluginNameBoolean'},
    {Name: 'cremovePluginCommands_inValidPluginNameUndefined', Actual: tst_con.cremovePluginCommands_inValidPluginNameUndefined, Expected: 'removePluginCommands_inValidPluginNameUndefined'},
    {Name: 'cremovePluginCommands_inValidPluginNameNaN', Actual: tst_con.cremovePluginCommands_inValidPluginNameNaN, Expected: 'removePluginCommands_inValidPluginNameNaN'},
        
    // cremovePluginCommandAliases
    {Name: 'cremovePluginCommandAliases_validPluginNameData', Actual: tst_con.cremovePluginCommandAliases_validPluginNameData, Expected: 'removePluginCommandAliases_validPluginNameData'},
    {Name: 'cremovePluginCommandAliases_inValidPluginNameString', Actual: tst_con.cremovePluginCommandAliases_inValidPluginNameString, Expected: 'removePluginCommandAliases_inValidPluginNameString'},
    {Name: 'cremovePluginCommandAliases_inValidPluginNameInteger', Actual: tst_con.cremovePluginCommandAliases_inValidPluginNameInteger, Expected: 'removePluginCommandAliases_inValidPluginNameInteger'},
    {Name: 'cremovePluginCommandAliases_inValidPluginNameBoolean', Actual: tst_con.cremovePluginCommandAliases_inValidPluginNameBoolean, Expected: 'removePluginCommandAliases_inValidPluginNameBoolean'},
    {Name: 'cremovePluginCommandAliases_inValidPluginNameUndefined', Actual: tst_con.cremovePluginCommandAliases_inValidPluginNameUndefined, Expected: 'removePluginCommandAliases_inValidPluginNameUndefined'},
    {Name: 'cremovePluginCommandAliases_inValidPluginN ameNaN', Actual: tst_con.cremovePluginCommandAliases_inValidPluginNameNaN, Expected: 'removePluginCommandAliases_inValidPluginNameNaN'},

    /* commandBroker */
    // cinitializeConstantsValidationData
    {Name: 'cinitializeConstantsValidationData_validData', Actual: tst_con.cinitializeConstantsValidationData_validData, Expected: 'initializeConstantsValidationData_validData'},

    // cgenerateFrameworkConstantsValidationData
    {Name: 'cgenerateFrameworkConstantsValidationData_validData', Actual: tst_con.cgenerateFrameworkConstantsValidationData_validData, Expected: 'generateFrameworkConstantsValidationData_validData'},
    
    // caddConstantsValidationData
    {Name: 'caddConstantsValidationData_validData', Actual: tst_con.caddConstantsValidationData_validData, Expected: 'addConstantsValidationData_validData'},
    {Name: 'caddConstantsValidationData_inValidConstantsValidationDataString', Actual: tst_con.caddConstantsValidationData_inValidConstantsValidationDataString, Expected: 'addConstantsValidationData_inValidConstantsValidationDataString'},
    {Name: 'caddConstantsValidationData_inValidContextNameString', Actual: tst_con.caddConstantsValidationData_inValidContextNameString, Expected: 'addConstantsValidationData_inValidContextNameString'},
    {Name: 'caddConstantsValidationData_inValidConstantsValidationDataInteger', Actual: tst_con.caddConstantsValidationData_inValidConstantsValidationDataInteger, Expected: 'addConstantsValidationData_inValidConstantsValidationDataInteger'},
    {Name: 'caddConstantsValidationData_inValidConstantsValidationDataBoolean', Actual: tst_con.caddConstantsValidationData_inValidConstantsValidationDataBoolean, Expected: 'addConstantsValidationData_inValidConstantsValidationDataBoolean'},
    {Name: 'caddConstantsValidationData_inValidContextNameInteger', Actual: tst_con.caddConstantsValidationData_inValidContextNameInteger, Expected: 'addConstantsValidationData_inValidContextNameInteger'},
    {Name: 'caddConstantsValidationData_inValidContextNameBoolean', Actual: tst_con.caddConstantsValidationData_inValidContextNameBoolean, Expected: 'addConstantsValidationData_inValidContextNameBoolean'},
    {Name: 'caddConstantsValidationData_inValidConstantsValidationDataUndefined', Actual: tst_con.caddConstantsValidationData_inValidConstantsValidationDataUndefined, Expected: 'addConstantsValidationData_inValidConstantsValidationDataUndefined'},
    {Name: 'caddConstantsValidationData_inValidConstantsValidationDataNaN', Actual: tst_con.caddConstantsValidationData_inValidConstantsValidationDataNaN, Expected: 'addConstantsValidationData_inValidConstantsValidationDataNaN'},
    {Name: 'caddConstantsValidationData_inValidContextNameUndefined', Actual: tst_con.caddConstantsValidationData_inValidContextNameUndefined, Expected: 'addConstantsValidationData_inValidContextNameUndefined'},
    {Name: 'caddConstantsValidationData_inValidContextNameNaN', Actual: tst_con.caddConstantsValidationData_inValidContextNameNaN, Expected: 'addConstantsValidationData_inValidContextNameNaN'},

    // removePluginConstantsValidationData
    {Name: 'cremovePluginConstantsValidationData_validPluginNameData', Actual: tst_con.cremovePluginConstantsValidationData_validPluginNameData, Expected: 'removePluginConstantsValidationData_validPluginNameData'},
    {Name: 'cremovePluginConstantsValidationData_inValidPluginNameString', Actual: tst_con.cremovePluginConstantsValidationData_inValidPluginNameString, Expected: 'removePluginConstantsValidationData_inValidPluginNameString'},
    {Name: 'cremovePluginConstantsValidationData_inValidPluginNameInteger', Actual: tst_con.cremovePluginConstantsValidationData_inValidPluginNameInteger, Expected: 'removePluginConstantsValidationData_inValidPluginNameInteger'},
    {Name: 'cremovePluginConstantsValidationData_inValidPluginNameBoolean', Actual: tst_con.cremovePluginConstantsValidationData_inValidPluginNameBoolean, Expected: 'removePluginConstantsValidationData_inValidPluginNameBoolean'},
    {Name: 'cremovePluginConstantsValidationData_inValidPluginNameUndefined', Actual: tst_con.cremovePluginConstantsValidationData_inValidPluginNameUndefined, Expected: 'removePluginConstantsValidationData_inValidPluginNameUndefined'},
    {Name: 'cremovePluginConstantsValidationData_inValidPluginNameNaN', Actual: tst_con.cremovePluginConstantsValidationData_inValidPluginNameNaN, Expected: 'removePluginConstantsValidationData_inValidPluginNameNaN'},

    /* dataBroker */
    // addPluginConfigurationData
    {Name: 'caddPluginConfigurationData_validData', Actual: tst_con.caddPluginConfigurationData_validData, Expected: 'addPluginConfigurationData_validData'},   
    {Name: 'caddPluginConfigurationData_inValidPluginNameString', Actual: tst_con.caddPluginConfigurationData_inValidPluginNameString, Expected: 'addPluginConfigurationData_inValidPluginNameString'}, 
    {Name: 'caddPluginConfigurationData_inValidPluginConfigDataString', Actual: tst_con.caddPluginConfigurationData_inValidPluginConfigDataString, Expected: 'addPluginConfigurationData_inValidPluginConfigDataString'},   
    {Name: 'caddPluginConfigurationData_inValidPluginNameInteger', Actual: tst_con.caddPluginConfigurationData_inValidPluginNameInteger, Expected: 'addPluginConfigurationData_inValidPluginNameInteger'},  
    {Name: 'caddPluginConfigurationData_inValidPluginNameBoolean', Actual: tst_con.caddPluginConfigurationData_inValidPluginNameBoolean, Expected: 'addPluginConfigurationData_inValidPluginNameBoolean'},  
    {Name: 'caddPluginConfigurationData_inValidPluginConfigDataInteger', Actual: tst_con.caddPluginConfigurationData_inValidPluginConfigDataInteger, Expected: 'addPluginConfigurationData_inValidPluginConfigDataInteger'},    
    {Name: 'caddPluginConfigurationData_inValidPluginConfigDataBoolean', Actual: tst_con.caddPluginConfigurationData_inValidPluginConfigDataBoolean, Expected: 'addPluginConfigurationData_inValidPluginConfigDataBoolean'},    
    {Name: 'caddPluginConfigurationData_inValidPluginNameUndefined', Actual: tst_con.caddPluginConfigurationData_inValidPluginNameUndefined, Expected: 'addPluginConfigurationData_inValidPluginNameUndefined'},    
    {Name: 'caddPluginConfigurationData_inValidPluginNameNaN', Actual: tst_con.caddPluginConfigurationData_inValidPluginNameNaN, Expected: 'addPluginConfigurationData_inValidPluginNameNaN'},  
    {Name: 'caddPluginConfigurationData_inValidPluginConfigDataUndefined', Actual: tst_con.caddPluginConfigurationData_inValidPluginConfigDataUndefined, Expected: 'addPluginConfigurationData_inValidPluginConfigDataUndefined'},  
    {Name: 'caddPluginConfigurationData_inValidPluginConfigDataNaN', Actual: tst_con.caddPluginConfigurationData_inValidPluginConfigDataNaN, Expected: 'addPluginConfigurationData_inValidPluginConfigDataNaN'},    

    // scanDataPath
    {Name: 'cscanDataPath_validDataPathData', Actual: tst_con.cscanDataPath_validDataPathData, Expected: 'scanDataPath_validDataPathData'},
    {Name: 'cscanDataPath_inValidDataPathString', Actual: tst_con.cscanDataPath_inValidDataPathString, Expected: 'scanDataPath_inValidDataPathString'},
    {Name: 'cscanDataPath_inValidDataPathInteger', Actual: tst_con.cscanDataPath_inValidDataPathInteger, Expected: 'scanDataPath_inValidDataPathInteger'},
    {Name: 'cscanDataPath_inValidDataPathBoolean', Actual: tst_con.cscanDataPath_inValidDataPathBoolean, Expected: 'scanDataPath_inValidDataPathBoolean'},
    {Name: 'cscanDataPath_inValidDataPathUndefined', Actual: tst_con.cscanDataPath_inValidDataPathUndefined, Expected: 'scanDataPath_inValidDataPathUndefined'},
    {Name: 'cscanDataPath_inValidDataPathNaN', Actual: tst_con.cscanDataPath_inValidDataPathNaN, Expected: 'scanDataPath_inValidDataPathNaN'},

    // findUniversalDebugConfigSetting
    {Name: 'cfindUniversalDebugConfigSetting_validData', Actual: tst_con.cfindUniversalDebugConfigSetting_validData, Expected: 'findUniversalDebugConfigSetting_validData'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString, Expected: 'findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadString'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString, Expected: 'findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger, Expected: 'findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadInteger'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean, Expected: 'findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadBoolean'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger, Expected: 'findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadInteger'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean, Expected: 'findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadBoolean'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined, Expected: 'findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadUndefined'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN, Expected: 'findUniversalDebugConfigSetting_inValidAppConfigFilesToLoadNaN'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined, Expected: 'findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadUndefined'},
    {Name: 'cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN', Actual: tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN, Expected: 'findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadNaN'},

    // loadAllCsvData
    {Name: 'cloadAllCsvData_validData', Actual: tst_con.cloadAllCsvData_validData, Expected: 'loadAllCsvData_validData'},
    {Name: 'cloadAllCsvData_inValidFilesToLoadString', Actual: tst_con.cloadAllCsvData_inValidFilesToLoadString, Expected: 'loadAllCsvData_inValidFilesToLoadString'},
    {Name: 'cloadAllCsvData_inValidContextNameString', Actual: tst_con.cloadAllCsvData_inValidContextNameString, Expected: 'loadAllCsvData_inValidContextNameString'},
    {Name: 'cloadAllCsvData_inValidFilesToLoadInteger', Actual: tst_con.cloadAllCsvData_inValidFilesToLoadInteger, Expected: 'loadAllCsvData_inValidFilesToLoadInteger'},
    {Name: 'cloadAllCsvData_inValidFilesToLoadBoolean', Actual: tst_con.cloadAllCsvData_inValidFilesToLoadBoolean, Expected: 'loadAllCsvData_inValidFilesToLoadBoolean'},
    {Name: 'cloadAllCsvData_inValidContextNameInteger', Actual: tst_con.cloadAllCsvData_inValidContextNameInteger, Expected: 'loadAllCsvData_inValidContextNameInteger'},
    {Name: 'cloadAllCsvData_inValidContextNameBoolean', Actual: tst_con.cloadAllCsvData_inValidContextNameBoolean, Expected: 'loadAllCsvData_inValidContextNameBoolean'},
    {Name: 'cloadAllCsvData_inValidFilesToLoadUndefined', Actual: tst_con.cloadAllCsvData_inValidFilesToLoadUndefined, Expected: 'loadAllCsvData_inValidFilesToLoadUndefined'},
    {Name: 'cloadAllCsvData_inValidFilesToLoadNaN', Actual: tst_con.cloadAllCsvData_inValidFilesToLoadNaN, Expected: 'loadAllCsvData_inValidFilesToLoadNaN'},
    {Name: 'cloadAllCsvData_inValidContextNameUndefined', Actual: tst_con.cloadAllCsvData_inValidContextNameUndefined, Expected: 'loadAllCsvData_inValidContextNameUndefined'},
    {Name: 'cloadAllCsvData_inValidContextNameNaN', Actual: tst_con.cloadAllCsvData_inValidContextNameNaN, Expected: 'loadAllCsvData_inValidContextNameNaN'},

    // loadAllXmlData
    {Name: 'cloadAllXmlData_validData', Actual: tst_con.cloadAllXmlData_validData, Expected: 'loadAllXmlData_validData'},
    {Name: 'cloadAllXmlData_inValidFilesToLoadString', Actual: tst_con.cloadAllXmlData_inValidFilesToLoadString, Expected: 'loadAllXmlData_inValidFilesToLoadString'},
    {Name: 'cloadAllXmlData_inValidContextNameString', Actual: tst_con.cloadAllXmlData_inValidContextNameString, Expected: 'loadAllXmlData_inValidContextNameString'},
    {Name: 'cloadAllXmlData_inValidFilesToLoadInteger', Actual: tst_con.cloadAllXmlData_inValidFilesToLoadInteger, Expected: 'loadAllXmlData_inValidFilesToLoadInteger'},
    {Name: 'cloadAllXmlData_inValidFilesToLoadBoolean', Actual: tst_con.cloadAllXmlData_inValidFilesToLoadBoolean, Expected: 'loadAllXmlData_inValidFilesToLoadBoolean'},
    {Name: 'cloadAllXmlData_inValidContextNameInteger', Actual: tst_con.cloadAllXmlData_inValidContextNameInteger, Expected: 'loadAllXmlData_inValidContextNameInteger'},
    {Name: 'cloadAllXmlData_inValidContextNameBoolean', Actual: tst_con.cloadAllXmlData_inValidContextNameBoolean, Expected: 'loadAllXmlData_inValidContextNameBoolean'},
    {Name: 'cloadAllXmlData_inValidFilesToLoadUndefined', Actual: tst_con.cloadAllXmlData_inValidFilesToLoadUndefined, Expected: 'loadAllXmlData_inValidFilesToLoadUndefined'},
    {Name: 'cloadAllXmlData_inValidFilesToLoadNaN', Actual: tst_con.cloadAllXmlData_inValidFilesToLoadNaN, Expected: 'loadAllXmlData_inValidFilesToLoadNaN'},
    {Name: 'cloadAllXmlData_inValidContextNameUndefined', Actual: tst_con.cloadAllXmlData_inValidContextNameUndefined, Expected: 'loadAllXmlData_inValidContextNameUndefined'},
    {Name: 'cloadAllXmlData_inValidContextNameNaN', Actual: tst_con.cloadAllXmlData_inValidContextNameNaN, Expected: 'loadAllXmlData_inValidContextNameNaN'},

    // loadAllJsonData
    {Name: 'cloadAllJsonData_inValidFilesToLoadString', Actual: tst_con.cloadAllJsonData_inValidFilesToLoadString, Expected: 'loadAllJsonData_inValidFilesToLoadString'},
    {Name: 'cloadAllJsonData_inValidFilesToLoadInteger', Actual: tst_con.cloadAllJsonData_inValidFilesToLoadInteger, Expected: 'loadAllJsonData_inValidFilesToLoadInteger'},
    {Name: 'cloadAllJsonData_inValidFilesToLoadBoolean', Actual: tst_con.cloadAllJsonData_inValidFilesToLoadBoolean, Expected: 'loadAllJsonData_inValidFilesToLoadBoolean'},
    {Name: 'cloadAllJsonData_inValidFilesToLoadUndefined', Actual: tst_con.cloadAllJsonData_inValidFilesToLoadUndefined, Expected: 'loadAllJsonData_inValidFilesToLoadUndefined'},
    {Name: 'cloadAllJsonData_inValidFilesToLoadNaN', Actual: tst_con.cloadAllJsonData_inValidFilesToLoadNaN, Expected: 'loadAllJsonData_inValidFilesToLoadNaN'},

    // processCsvData
    {Name: 'cprocessCsvData_validData', Actual: tst_con.cprocessCsvData_validData, Expected: 'processCsvData_validData'},
    {Name: 'cprocessCsvData_inValidDataString', Actual: tst_con.cprocessCsvData_inValidDataString, Expected: 'processCsvData_inValidDataString'},
    {Name: 'cprocessCsvData_inValidContextNameString', Actual: tst_con.cprocessCsvData_inValidContextNameString, Expected: 'processCsvData_inValidContextNameString'},
    {Name: 'cprocessCsvData_inValidDataInteger', Actual: tst_con.cprocessCsvData_inValidDataInteger, Expected: 'processCsvData_inValidDataInteger'},
    {Name: 'cprocessCsvData_inValidDataBoolean', Actual: tst_con.cprocessCsvData_inValidDataBoolean, Expected: 'processCsvData_inValidDataBoolean'},
    {Name: 'cprocessCsvData_inValidContextNameInteger', Actual: tst_con.cprocessCsvData_inValidContextNameInteger, Expected: 'processCsvData_inValidContextNameInteger'},
    {Name: 'cprocessCsvData_inValidContextNameBoolean', Actual: tst_con.cprocessCsvData_inValidContextNameBoolean, Expected: 'processCsvData_inValidContextNameBoolean'},
    {Name: 'cprocessCsvData_inValidDataUndefined', Actual: tst_con.cprocessCsvData_inValidDataUndefined, Expected: 'processCsvData_inValidDataUndefined'},
    {Name: 'cprocessCsvData_inValidDataNaN', Actual: tst_con.cprocessCsvData_inValidDataNaN, Expected: 'processCsvData_inValidDataNaN'},
    {Name: 'cprocessCsvData_inValidContextNameUndefined', Actual: tst_con.cprocessCsvData_inValidContextNameUndefined, Expected: 'processCsvData_inValidContextNameUndefined'},
    {Name: 'cprocessCsvData_inValidContextNameNaN', Actual: tst_con.cprocessCsvData_inValidContextNameNaN, Expected: 'processCsvData_inValidContextNameNaN'},
        
    // preprocessJsonFile
    {Name: 'cpreprocessJsonFile_validFileToLoadData', Actual: tst_con.cpreprocessJsonFile_validFileToLoadData, Expected: 'preprocessJsonFile_validFileToLoadData'},
    {Name: 'cpreprocessJsonFile_inValidFileToLoadString', Actual: tst_con.cpreprocessJsonFile_inValidFileToLoadString, Expected: 'preprocessJsonFile_inValidFileToLoadString'},
    {Name: 'cpreprocessJsonFile_inValidFileToLoadInteger', Actual: tst_con.cpreprocessJsonFile_inValidFileToLoadInteger, Expected: 'preprocessJsonFile_inValidFileToLoadInteger'},
    {Name: 'cpreprocessJsonFile_inValidFileToLoadBoolean', Actual: tst_con.cpreprocessJsonFile_inValidFileToLoadBoolean, Expected: 'preprocessJsonFile_inValidFileToLoadBoolean'},
    {Name: 'cpreprocessJsonFile_inValidFileToLoadUndefined', Actual: tst_con.cpreprocessJsonFile_inValidFileToLoadUndefined, Expected: 'preprocessJsonFile_inValidFileToLoadUndefined'},
    {Name: 'cpreprocessJsonFile_inValidFileToLoadNaN', Actual: tst_con.cpreprocessJsonFile_inValidFileToLoadNaN, Expected: 'preprocessJsonFile_inValidFileToLoadNaN'},

    // writeJsonDataToFile
    {Name: 'cwriteJsonDataToFile_validData', Actual: tst_con.cwriteJsonDataToFile_validData, Expected: 'writeJsonDataToFile_validData'},
    {Name: 'cwriteJsonDataToFile_inValidFileToSaveToString', Actual: tst_con.cwriteJsonDataToFile_inValidFileToSaveToString, Expected: 'writeJsonDataToFile_inValidFileToSaveToString'},
    {Name: 'cwriteJsonDataToFile_inValidDataToWriteOutString', Actual: tst_con.cwriteJsonDataToFile_inValidDataToWriteOutString, Expected: 'writeJsonDataToFile_inValidDataToWriteOutString'},
    {Name: 'cwriteJsonDataToFile_inValidFileToSaveToInteger', Actual: tst_con.cwriteJsonDataToFile_inValidFileToSaveToInteger, Expected: 'writeJsonDataToFile_inValidFileToSaveToInteger'},
    {Name: 'cwriteJsonDataToFile_inValidFileToSaveToBoolean', Actual: tst_con.cwriteJsonDataToFile_inValidFileToSaveToBoolean, Expected: 'writeJsonDataToFile_inValidFileToSaveToBoolean'},
    {Name: 'cwriteJsonDataToFile_inValidDataToWriteOutInteger', Actual: tst_con.cwriteJsonDataToFile_inValidDataToWriteOutInteger, Expected: 'writeJsonDataToFile_inValidDataToWriteOutInteger'},
    {Name: 'cwriteJsonDataToFile_inValidDataToWriteOutBoolean', Actual: tst_con.cwriteJsonDataToFile_inValidDataToWriteOutBoolean, Expected: 'writeJsonDataToFile_inValidDataToWriteOutBoolean'},
    {Name: 'cwriteJsonDataToFile_inValidFileToSaveToUndefined', Actual: tst_con.cwriteJsonDataToFile_inValidFileToSaveToUndefined, Expected: 'writeJsonDataToFile_inValidFileToSaveToUndefined'},
    {Name: 'cwriteJsonDataToFile_inValidFileToSaveToNaN', Actual: tst_con.cwriteJsonDataToFile_inValidFileToSaveToNaN, Expected: 'writeJsonDataToFile_inValidFileToSaveToNaN'},
    {Name: 'cwriteJsonDataToFile_inValidDataToWriteOutUndefined', Actual: tst_con.cwriteJsonDataToFile_inValidDataToWriteOutUndefined, Expected: 'writeJsonDataToFile_inValidDataToWriteOutUndefined'},
    {Name: 'cwriteJsonDataToFile_inValidDataToWriteOutNaN', Actual: tst_con.cwriteJsonDataToFile_inValidDataToWriteOutNaN, Expected: 'writeJsonDataToFile_inValidDataToWriteOutNaN'},

    // setupDataStorage
    {Name: 'csetupDataStorage_validData', Actual: tst_con.csetupDataStorage_validData, Expected: 'setupDataStorage_validData'},

    // storeData
    {Name: 'cstoreData_inValidDataStorageContextNameInteger', Actual: tst_con.cstoreData_inValidDataStorageContextNameInteger, Expected: 'storeData_inValidDataStorageContextNameInteger'},
    {Name: 'cstoreData_inValidDataStorageContextNameBoolean', Actual: tst_con.cstoreData_inValidDataStorageContextNameBoolean, Expected: 'storeData_inValidDataStorageContextNameBoolean'},
    {Name: 'cstoreData_validDataToStoreString', Actual: tst_con.cstoreData_validDataToStoreString, Expected: 'storeData_validDataToStoreString'},
    {Name: 'cstoreData_validDataToStoreBoolean', Actual: tst_con.cstoreData_validDataToStoreBoolean, Expected: 'storeData_validDataToStoreBoolean'},
    {Name: 'cstoreData_validDataToStoreInteger', Actual: tst_con.cstoreData_validDataToStoreInteger, Expected: 'storeData_validDataToStoreInteger'},
    {Name: 'cstoreData_validDataToStoreArray', Actual: tst_con.cstoreData_validDataToStoreArray, Expected: 'storeData_validDataToStoreArray'},
    {Name: 'cstoreData_validDataToStoreObject', Actual: tst_con.cstoreData_validDataToStoreObject, Expected: 'storeData_validDataToStoreObject'},
    {Name: 'cstoreData_inValidDataStorageContextNameUndefined', Actual: tst_con.cstoreData_inValidDataStorageContextNameUndefined, Expected: 'storeData_inValidDataStorageContextNameUndefined'},
    {Name: 'cstoreData_inValidDataStorageContextNameNaN', Actual: tst_con.cstoreData_inValidDataStorageContextNameNaN, Expected: 'storeData_inValidDataStorageContextNameNaN'},
    {Name: 'cstoreData_inValidDataToStoreUndefined', Actual: tst_con.cstoreData_inValidDataToStoreUndefined, Expected: 'storeData_inValidDataToStoreUndefined'},
    {Name: 'cstoreData_inValidDataToStoreNaN', Actual: tst_con.cstoreData_inValidDataToStoreNaN, Expected: 'storeData_inValidDataToStoreNaN'},

    // getData
    {Name: 'cgetData_validDataToStoreData', Actual: tst_con.cgetData_validDataToStoreData, Expected: 'getData_validDataToStoreData'},
    {Name: 'cgetData_inValidDataToStoreString', Actual: tst_con.cgetData_inValidDataToStoreString, Expected: 'getData_inValidDataToStoreString'},
    {Name: 'cgetData_inValidDataToStoreInteger', Actual: tst_con.cgetData_inValidDataToStoreInteger, Expected: 'getData_inValidDataToStoreInteger'},
    {Name: 'cgetData_inValidDataToStoreBoolean', Actual: tst_con.cgetData_inValidDataToStoreBoolean, Expected: 'getData_inValidDataToStoreBoolean'},
    {Name: 'cgetData_inValidDataToStoreUndefined', Actual: tst_con.cgetData_inValidDataToStoreUndefined, Expected: 'getData_inValidDataToStoreUndefined'},
    {Name: 'cgetData_inValidDataToStoreNaN', Actual: tst_con.cgetData_inValidDataToStoreNaN, Expected: 'getData_inValidDataToStoreNaN'},
    
    // clearData
    {Name: 'cclearData_validDataStorageContextNameData', Actual: tst_con.cclearData_validDataStorageContextNameData, Expected: 'clearData_validDataStorageContextNameData'},
    {Name: 'cclearData_inValidDataStorageContextNameString', Actual: tst_con.cclearData_inValidDataStorageContextNameString, Expected: 'clearData_inValidDataStorageContextNameString'},
    {Name: 'cclearData_inValidDataStorageContextNameInteger', Actual: tst_con.cclearData_inValidDataStorageContextNameInteger, Expected: 'clearData_inValidDataStorageContextNameInteger'},
    {Name: 'cclearData_inValidDataStorageContextNameBoolean', Actual: tst_con.cclearData_inValidDataStorageContextNameBoolean, Expected: 'clearData_inValidDataStorageContextNameBoolean'},
    {Name: 'cclearData_validDataStorageContextNameUndefined', Actual: tst_con.cclearData_validDataStorageContextNameUndefined, Expected: 'clearData_validDataStorageContextNameUndefined'},
    {Name: 'cclearData_inValidDataStorageContextNameNaN', Actual: tst_con.cclearData_inValidDataStorageContextNameNaN, Expected: 'clearData_inValidDataStorageContextNameNaN'},

    // removePluginConfigurationData
    {Name: 'cremovePluginConfigurationData_validPluginNameData', Actual: tst_con.cremovePluginConfigurationData_validPluginNameData, Expected: 'removePluginConfigurationData_validPluginNameData'},
    {Name: 'cremovePluginConfigurationData_inValidPluginNameString', Actual: tst_con.cremovePluginConfigurationData_inValidPluginNameString, Expected: 'removePluginConfigurationData_inValidPluginNameString'},
    {Name: 'cremovePluginConfigurationData_inValidPluginNameInteger', Actual: tst_con.cremovePluginConfigurationData_inValidPluginNameInteger, Expected: 'removePluginConfigurationData_inValidPluginNameInteger'},
    {Name: 'cremovePluginConfigurationData_inValidPluginNameBoolean', Actual: tst_con.cremovePluginConfigurationData_inValidPluginNameBoolean, Expected: 'removePluginConfigurationData_inValidPluginNameBoolean'},
    {Name: 'cremovePluginConfigurationData_inValidPluginNameUndefined', Actual: tst_con.cremovePluginConfigurationData_inValidPluginNameUndefined, Expected: 'removePluginConfigurationData_inValidPluginNameUndefined'},
    {Name: 'cremovePluginConfigurationData_inValidPluginNameNaN', Actual: tst_con.cremovePluginConfigurationData_inValidPluginNameNaN, Expected: 'removePluginConfigurationData_inValidPluginNameNaN'},

    /* pluginBroker */
    // loadPluginRegistry
    {Name: 'cloadPluginRegistry_validPluginRegistryPathData', Actual: tst_con.cloadPluginRegistry_validPluginRegistryPathData, Expected: 'loadPluginRegistry_validPluginRegistryPathData'},
    {Name: 'cloadPluginRegistry_inValidPluginRegistryPathString', Actual: tst_con.cloadPluginRegistry_inValidPluginRegistryPathString, Expected: 'loadPluginRegistry_inValidPluginRegistryPathString'},
    {Name: 'cloadPluginRegistry_inValidPluginRegistryPathInteger', Actual: tst_con.cloadPluginRegistry_inValidPluginRegistryPathInteger, Expected: 'loadPluginRegistry_inValidPluginRegistryPathInteger'},
    {Name: 'cloadPluginRegistry_inValidPluginRegistryPathBoolean', Actual: tst_con.cloadPluginRegistry_inValidPluginRegistryPathBoolean, Expected: 'loadPluginRegistry_inValidPluginRegistryPathBoolean'},
    {Name: 'cloadPluginRegistry_inValidPluginRegistryPathUndefined', Actual: tst_con.cloadPluginRegistry_inValidPluginRegistryPathUndefined, Expected: 'loadPluginRegistry_inValidPluginRegistryPathUndefined'},
    {Name: 'cloadPluginRegistry_inValidPluginRegistryPathNaN', Actual: tst_con.cloadPluginRegistry_inValidPluginRegistryPathNaN, Expected: 'loadPluginRegistry_inValidPluginRegistryPathNaN'},

    // storePluginRegistryInDataStructure
    {Name: 'cstorePluginRegistryInDataStructure_validPluginRegistryDataData', Actual: tst_con.cstorePluginRegistryInDataStructure_validPluginRegistryDataData, Expected: 'storePluginRegistryInDataStructure_validPluginRegistryDataData'},
    {Name: 'cstorePluginRegistryInDataStructure_inValidPluginRegistryDataString', Actual: tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataString, Expected: 'storePluginRegistryInDataStructure_inValidPluginRegistryDataString'},
    {Name: 'cstorePluginRegistryInDataStructure_inValidPluginRegistryDataInteger', Actual: tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataInteger, Expected: 'storePluginRegistryInDataStructure_inValidPluginRegistryDataInteger'},
    {Name: 'cstorePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean', Actual: tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean, Expected: 'storePluginRegistryInDataStructure_inValidPluginRegistryDataBoolean'},
    {Name: 'cstorePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined', Actual: tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined, Expected: 'storePluginRegistryInDataStructure_inValidPluginRegistryDataUndefined'},
    {Name: 'cstorePluginRegistryInDataStructure_inValidPluginRegistryDataNaN', Actual: tst_con.cstorePluginRegistryInDataStructure_inValidPluginRegistryDataNaN, Expected: 'storePluginRegistryInDataStructure_inValidPluginRegistryDataNaN'},

    // listAllLoadedPlugins
    {Name: 'clistAllLoadedPlugins_validData', Actual: tst_con.clistAllLoadedPlugins_validData, Expected: 'listAllLoadedPlugins_validData'},

    // listPluginsInRegistry
    {Name: 'clistPluginsInRegistry_validData', Actual: tst_con.clistPluginsInRegistry_validData, Expected: 'listPluginsInRegistry_validData'},

    // listPluginsPathsInRegistry
    {Name: 'clistPluginsPathsInRegistry_validData', Actual: tst_con.clistPluginsPathsInRegistry_validData, Expected: 'listPluginsPathsInRegistry_validData'},

    // listPluginsAttributeInRegistry
    {Name: 'clistPluginsAttributeInRegistry_validAttributeNameData', Actual: tst_con.clistPluginsAttributeInRegistry_validAttributeNameData, Expected: 'listPluginsAttributeInRegistry_validAttributeNameData'},
    {Name: 'clistPluginsAttributeInRegistry_inValidAttributeNameString', Actual: tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameString, Expected: 'listPluginsAttributeInRegistry_inValidAttributeNameString'},
    {Name: 'clistPluginsAttributeInRegistry_inValidAttributeNameInteger', Actual: tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameInteger, Expected: 'listPluginsAttributeInRegistry_inValidAttributeNameInteger'},
    {Name: 'clistPluginsAttributeInRegistry_inValidAttributeNameBoolean', Actual: tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameBoolean, Expected: 'listPluginsAttributeInRegistry_inValidAttributeNameBoolean'},
    {Name: 'clistPluginsAttributeInRegistry_inValidAttributeNameUndefined', Actual: tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameUndefined, Expected: 'listPluginsAttributeInRegistry_inValidAttributeNameUndefined'},
    {Name: 'clistPluginsAttributeInRegistry_inValidAttributeNameNaN', Actual: tst_con.clistPluginsAttributeInRegistry_inValidAttributeNameNaN, Expected: 'listPluginsAttributeInRegistry_inValidAttributeNameNaN'},

    // listPluginsInRegistryPath
    {Name: 'clistPluginsInRegistryPath_validData', Actual: tst_con.clistPluginsInRegistryPath_validData, Expected: 'listPluginsInRegistryPath_validData'},

    // countPluginsInRegistry
    {Name: 'ccountPluginsInRegistry_validData', Actual: tst_con.ccountPluginsInRegistry_validData, Expected: 'countPluginsInRegistry_validData'},

    // countPluginsInRegistryPath
    {Name: 'ccountPluginsInRegistryPath_validData', Actual: tst_con.ccountPluginsInRegistryPath_validData, Expected: 'countPluginsInRegistryPath_validData'},

    // registerPlugin
    {Name: 'cregisterPlugin_validData', Actual: tst_con.cregisterPlugin_validData, Expected: 'registerPlugin_validData'},
    {Name: 'cregisterPlugin_inValidPluginNameString', Actual: tst_con.cregisterPlugin_inValidPluginNameString, Expected: 'registerPlugin_inValidPluginNameString'},
    {Name: 'cregisterPlugin_inValidPluginPathString', Actual: tst_con.cregisterPlugin_inValidPluginPathString, Expected: 'registerPlugin_inValidPluginPathString'},
    {Name: 'cregisterPlugin_inValidPluginNameInteger', Actual: tst_con.cregisterPlugin_inValidPluginNameInteger, Expected: 'registerPlugin_inValidPluginNameInteger'},
    {Name: 'cregisterPlugin_inValidPluginNameBoolean', Actual: tst_con.cregisterPlugin_inValidPluginNameBoolean, Expected: 'registerPlugin_inValidPluginNameBoolean'},
    {Name: 'cregisterPlugin_inValidPluginPathInteger', Actual: tst_con.cregisterPlugin_inValidPluginPathInteger, Expected: 'registerPlugin_inValidPluginPathInteger'},
    {Name: 'cregisterPlugin_inValidPluginPathBoolean', Actual: tst_con.cregisterPlugin_inValidPluginPathBoolean, Expected: 'registerPlugin_inValidPluginPathBoolean'},
    {Name: 'cregisterPlugin_inValidPluginNameUndefined', Actual: tst_con.cregisterPlugin_inValidPluginNameUndefined, Expected: 'registerPlugin_inValidPluginNameUndefined'},
    {Name: 'cregisterPlugin_inValidPluginNameNaN', Actual: tst_con.cregisterPlugin_inValidPluginNameNaN, Expected: 'registerPlugin_inValidPluginNameNaN'},
    {Name: 'cregisterPlugin_inValidPluginPathUndefined', Actual: tst_con.cregisterPlugin_inValidPluginPathUndefined, Expected: 'registerPlugin_inValidPluginPathUndefined'},
    {Name: 'cregisterPlugin_inValidPluginPathNaN', Actual: tst_con.cregisterPlugin_inValidPluginPathNaN, Expected: 'registerPlugin_inValidPluginPathNaN'},

    // unregisterPlugin
    {Name: 'cunregisterPlugin_validPluginNameData', Actual: tst_con.cunregisterPlugin_validPluginNameData, Expected: 'unregisterPlugin_validPluginNameData'},
    {Name: 'cunregisterPlugin_inValidPluginNameString', Actual: tst_con.cunregisterPlugin_inValidPluginNameString, Expected: 'unregisterPlugin_inValidPluginNameString'},
    {Name: 'cunregisterPlugin_inValidPluginNameInteger', Actual: tst_con.cunregisterPlugin_inValidPluginNameInteger, Expected: 'unregisterPlugin_inValidPluginNameInteger'},
    {Name: 'cunregisterPlugin_inValidPluginNameBoolean', Actual: tst_con.cunregisterPlugin_inValidPluginNameBoolean, Expected: 'unregisterPlugin_inValidPluginNameBoolean'},
    {Name: 'cunregisterPlugin_inValidPluginNameUndefined', Actual: tst_con.cunregisterPlugin_inValidPluginNameUndefined, Expected: 'unregisterPlugin_inValidPluginNameUndefined'},
    {Name: 'cunregisterPlugin_inValidPluginNameNaN', Actual: tst_con.cunregisterPlugin_inValidPluginNameNaN, Expected: 'unregisterPlugin_inValidPluginNameNaN'},

    // syncPluginRegistryWithPluginRegistryPath
    {Name: 'csyncPluginRegistryWithPluginRegistryPath_validData', Actual: tst_con.csyncPluginRegistryWithPluginRegistryPath_validData, Expected: 'syncPluginRegistryWithPluginRegistryPath_validData'},

    // unregisterAllPlugins
    {Name: 'cunregisterAllPlugins_validData', Actual: tst_con.cunregisterAllPlugins_validData, Expected: 'unregisterAllPlugins_validData'},

    // savePluginRegistry
    {Name: 'csavePluginRegistry_validData', Actual: tst_con.csavePluginRegistry_validData, Expected: 'savePluginRegistry_validData'},

    // loadPluginMetaData
    {Name: 'cloadPluginMetaData_validPluginPathData', Actual: tst_con.cloadPluginMetaData_validPluginPathData, Expected: 'loadPluginMetaData_validPluginPathData'},
    {Name: 'cloadPluginMetaData_inValidPluginPathString', Actual: tst_con.cloadPluginMetaData_inValidPluginPathString, Expected: 'loadPluginMetaData_inValidPluginPathString'},
    {Name: 'cloadPluginMetaData_inValidPluginPathInteger', Actual: tst_con.cloadPluginMetaData_inValidPluginPathInteger, Expected: 'loadPluginMetaData_inValidPluginPathInteger'},
    {Name: 'cloadPluginMetaData_inValidPluginPathBoolean', Actual: tst_con.cloadPluginMetaData_inValidPluginPathBoolean, Expected: 'loadPluginMetaData_inValidPluginPathBoolean'},
    {Name: 'cloadPluginMetaData_inValidPluginPathUndefined', Actual: tst_con.cloadPluginMetaData_inValidPluginPathUndefined, Expected: 'loadPluginMetaData_inValidPluginPathUndefined'},
    {Name: 'cloadPluginMetaData_inValidPluginPathNaN', Actual: tst_con.cloadPluginMetaData_inValidPluginPathNaN, Expected: 'loadPluginMetaData_inValidPluginPathNaN'},

    // extractAndProcessPluginEntryPointURI
    {Name: 'cextractAndProcessPluginEntryPointURI_validData', Actual: tst_con.cextractAndProcessPluginEntryPointURI_validData, Expected: 'extractAndProcessPluginEntryPointURI_validData'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataString', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataString, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginMetaDataString'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginPathString', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathString, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginPathString'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginMetaDataInteger'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginMetaDataBoolean'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginPathInteger', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathInteger, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginPathInteger'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginPathBoolean', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathBoolean, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginPathBoolean'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginMetaDataUndefined'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginMetaDataNaN'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginPathUndefined', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathUndefined, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginPathUndefined'},
    {Name: 'cextractAndProcessPluginEntryPointURI_inValidPluginPathNaN', Actual: tst_con.cextractAndProcessPluginEntryPointURI_inValidPluginPathNaN, Expected: 'extractAndProcessPluginEntryPointURI_inValidPluginPathNaN'},

    // loadPlugin
    {Name: 'cloadPlugin_validPluginExecutionPathData', Actual: tst_con.cloadPlugin_validPluginExecutionPathData, Expected: 'loadPlugin_validPluginExecutionPathData'},
    {Name: 'cloadPlugin_inValidPluginExecutionPathString', Actual: tst_con.cloadPlugin_inValidPluginExecutionPathString, Expected: 'loadPlugin_inValidPluginExecutionPathString'},
    {Name: 'cloadPlugin_inValidPluginExecutionPathInteger', Actual: tst_con.cloadPlugin_inValidPluginExecutionPathInteger, Expected: 'loadPlugin_inValidPluginExecutionPathInteger'},
    {Name: 'cloadPlugin_inValidPluginExecutionPathBoolean', Actual: tst_con.cloadPlugin_inValidPluginExecutionPathBoolean, Expected: 'loadPlugin_inValidPluginExecutionPathBoolean'},
    {Name: 'cloadPlugin_inValidPluginExecutionPathUndefined', Actual: tst_con.cloadPlugin_inValidPluginExecutionPathUndefined, Expected: 'loadPlugin_inValidPluginExecutionPathUndefined'},
    {Name: 'cloadPlugin_inValidPluginExecutionPathNaN', Actual: tst_con.cloadPlugin_inValidPluginExecutionPathNaN, Expected: 'loadPlugin_inValidPluginExecutionPathNaN'},

    // integratePluginBusinessRules
    {Name: 'cintegratePluginBusinessRules_validData', Actual: tst_con.cintegratePluginBusinessRules_validData, Expected: 'integratePluginBusinessRules_validData'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginNameString', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginNameString, Expected: 'integratePluginBusinessRules_inValidPluginNameString'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginBusinessRulesString', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesString, Expected: 'integratePluginBusinessRules_inValidPluginBusinessRulesString'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginNameInteger', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginNameInteger, Expected: 'integratePluginBusinessRules_inValidPluginNameInteger'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginNameBoolean, Expected: 'integratePluginBusinessRules_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginBusinessRulesInteger', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesInteger, Expected: 'integratePluginBusinessRules_inValidPluginBusinessRulesInteger'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginBusinessRulesBoolean', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesBoolean, Expected: 'integratePluginBusinessRules_inValidPluginBusinessRulesBoolean'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginNameUndefined, Expected: 'integratePluginBusinessRules_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginNameNaN', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginNameNaN, Expected: 'integratePluginBusinessRules_inValidPluginNameNaN'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginBusinessRulesUndefined', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesUndefined, Expected: 'integratePluginBusinessRules_inValidPluginBusinessRulesUndefined'},
    {Name: 'cintegratePluginBusinessRules_inValidPluginBusinessRulesNaN', Actual: tst_con.cintegratePluginBusinessRules_inValidPluginBusinessRulesNaN, Expected: 'integratePluginBusinessRules_inValidPluginBusinessRulesNaN'},

    // integratePluginCommands
    {Name: 'cintegratePluginCommands_validData', Actual: tst_con.cintegratePluginCommands_validData, Expected: 'integratePluginCommands_validData'},
    {Name: 'cintegratePluginCommands_inValidPluginNameString', Actual: tst_con.cintegratePluginCommands_inValidPluginNameString, Expected: 'integratePluginCommands_inValidPluginNameString'},
    {Name: 'cintegratePluginCommands_inValidPluginCommandsString', Actual: tst_con.cintegratePluginCommands_inValidPluginCommandsString, Expected: 'integratePluginCommands_inValidPluginCommandsString'},
    {Name: 'cintegratePluginCommands_inValidPluginNameInteger', Actual: tst_con.cintegratePluginCommands_inValidPluginNameInteger, Expected: 'integratePluginCommands_inValidPluginNameInteger'},
    {Name: 'cintegratePluginCommands_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginCommands_inValidPluginNameBoolean, Expected: 'integratePluginCommands_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginCommands_inValidPluginCommandsInteger', Actual: tst_con.cintegratePluginCommands_inValidPluginCommandsInteger, Expected: 'integratePluginCommands_inValidPluginCommandsInteger'},
    {Name: 'cintegratePluginCommands_inValidPluginCommandsBoolean', Actual: tst_con.cintegratePluginCommands_inValidPluginCommandsBoolean, Expected: 'integratePluginCommands_inValidPluginCommandsBoolean'},
    {Name: 'cintegratePluginCommands_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginCommands_inValidPluginNameUndefined, Expected: 'integratePluginCommands_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginCommands_inValidPluginNameNaN', Actual: tst_con.cintegratePluginCommands_inValidPluginNameNaN, Expected: 'integratePluginCommands_inValidPluginNameNaN'},
    {Name: 'cintegratePluginCommands_inValidPluginCommandsUndefined', Actual: tst_con.cintegratePluginCommands_inValidPluginCommandsUndefined, Expected: 'integratePluginCommands_inValidPluginCommandsUndefined'},
    {Name: 'cintegratePluginCommands_inValidPluginCommandsNaN', Actual: tst_con.cintegratePluginCommands_inValidPluginCommandsNaN, Expected: 'integratePluginCommands_inValidPluginCommandsNaN'},

    // integratePluginConfigurationData
    {Name: 'cintegratePluginConfigurationData_validData', Actual: tst_con.cintegratePluginConfigurationData_validData, Expected: 'integratePluginConfigurationData_validData'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginNameString', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginNameString, Expected: 'integratePluginConfigurationData_inValidPluginNameString'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginConfigurationDataString', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataString, Expected: 'integratePluginConfigurationData_inValidPluginConfigurationDataString'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginNameInteger', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginNameInteger, Expected: 'integratePluginConfigurationData_inValidPluginNameInteger'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginNameBoolean, Expected: 'integratePluginConfigurationData_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginConfigurationDataInteger', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataInteger, Expected: 'integratePluginConfigurationData_inValidPluginConfigurationDataInteger'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginConfigurationDataBoolean', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataBoolean, Expected: 'integratePluginConfigurationData_inValidPluginConfigurationDataBoolean'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginNameUndefined, Expected: 'integratePluginConfigurationData_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginNameNaN', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginNameNaN, Expected: 'integratePluginConfigurationData_inValidPluginNameNaN'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginConfigurationDataUndefined', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataUndefined, Expected: 'integratePluginConfigurationData_inValidPluginConfigurationDataUndefined'},
    {Name: 'cintegratePluginConfigurationData_inValidPluginConfigurationDataNaN', Actual: tst_con.cintegratePluginConfigurationData_inValidPluginConfigurationDataNaN, Expected: 'integratePluginConfigurationData_inValidPluginConfigurationDataNaN'},

    // integratePluginCommandAliases
    {Name: 'cintegratePluginCommandAliases_validData', Actual: tst_con.cintegratePluginCommandAliases_validData, Expected: 'integratePluginCommandAliases_validData'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginNameString', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginNameString, Expected: 'integratePluginCommandAliases_inValidPluginNameString'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginCommandAliasesString', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesString, Expected: 'integratePluginCommandAliases_inValidPluginCommandAliasesString'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginNameInteger', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginNameInteger, Expected: 'integratePluginCommandAliases_inValidPluginNameInteger'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginNameBoolean, Expected: 'integratePluginCommandAliases_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginCommandAliasesInteger', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesInteger, Expected: 'integratePluginCommandAliases_inValidPluginCommandAliasesInteger'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginCommandAliasesBoolean', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesBoolean, Expected: 'integratePluginCommandAliases_inValidPluginCommandAliasesBoolean'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginNameUndefined, Expected: 'integratePluginCommandAliases_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginNameNaN', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginNameNaN, Expected: 'integratePluginCommandAliases_inValidPluginNameNaN'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginCommandAliasesUndefined', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesUndefined, Expected: 'integratePluginCommandAliases_inValidPluginCommandAliasesUndefined'},
    {Name: 'cintegratePluginCommandAliases_inValidPluginCommandAliasesNaN', Actual: tst_con.cintegratePluginCommandAliases_inValidPluginCommandAliasesNaN, Expected: 'integratePluginCommandAliases_inValidPluginCommandAliasesNaN'},

    // integratePluginWorkflows
    {Name: 'cintegratePluginWorkflows_validData', Actual: tst_con.cintegratePluginWorkflows_validData, Expected: 'integratePluginWorkflows_validData'},
    {Name: 'cintegratePluginWorkflows_inValidPluginNameString', Actual: tst_con.cintegratePluginWorkflows_inValidPluginNameString, Expected: 'integratePluginWorkflows_inValidPluginNameString'},
    {Name: 'cintegratePluginWorkflows_inValidPluginWorkflowsString', Actual: tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsString, Expected: 'integratePluginWorkflows_inValidPluginWorkflowsString'},
    {Name: 'cintegratePluginWorkflows_inValidPluginNameInteger', Actual: tst_con.cintegratePluginWorkflows_inValidPluginNameInteger, Expected: 'integratePluginWorkflows_inValidPluginNameInteger'},
    {Name: 'cintegratePluginWorkflows_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginWorkflows_inValidPluginNameBoolean, Expected: 'integratePluginWorkflows_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginWorkflows_inValidPluginWorkflowsInteger', Actual: tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsInteger, Expected: 'integratePluginWorkflows_inValidPluginWorkflowsInteger'},
    {Name: 'cintegratePluginWorkflows_inValidPluginWorkflowsBoolean', Actual: tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsBoolean, Expected: 'integratePluginWorkflows_inValidPluginWorkflowsBoolean'},
    {Name: 'cintegratePluginWorkflows_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginWorkflows_inValidPluginNameUndefined, Expected: 'integratePluginWorkflows_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginWorkflows_inValidPluginNameNaN', Actual: tst_con.cintegratePluginWorkflows_inValidPluginNameNaN, Expected: 'integratePluginWorkflows_inValidPluginNameNaN'},
    {Name: 'cintegratePluginWorkflows_inValidPluginWorkflowsUndefined', Actual: tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsUndefined, Expected: 'integratePluginWorkflows_inValidPluginWorkflowsUndefined'},
    {Name: 'cintegratePluginWorkflows_inValidPluginWorkflowsNaN', Actual: tst_con.cintegratePluginWorkflows_inValidPluginWorkflowsNaN, Expected: 'integratePluginWorkflows_inValidPluginWorkflowsNaN'},

    // integratePluginThemeData
    {Name: 'cintegratePluginThemeData_validData', Actual: tst_con.cintegratePluginThemeData_validData, Expected: 'integratePluginThemeData_validData'},
    {Name: 'cintegratePluginThemeData_inValidPluginNameString', Actual: tst_con.cintegratePluginThemeData_inValidPluginNameString, Expected: 'integratePluginThemeData_inValidPluginNameString'},
    {Name: 'cintegratePluginThemeData_inValidPluginThemeDataString', Actual: tst_con.cintegratePluginThemeData_inValidPluginThemeDataString, Expected: 'integratePluginThemeData_inValidPluginThemeDataString'},
    {Name: 'cintegratePluginThemeData_inValidPluginNameInteger', Actual: tst_con.cintegratePluginThemeData_inValidPluginNameInteger, Expected: 'integratePluginThemeData_inValidPluginNameInteger'},
    {Name: 'cintegratePluginThemeData_inValidPluginNameBoolean', Actual: tst_con.cintegratePluginThemeData_inValidPluginNameBoolean, Expected: 'integratePluginThemeData_inValidPluginNameBoolean'},
    {Name: 'cintegratePluginThemeData_inValidPluginThemeDataInteger', Actual: tst_con.cintegratePluginThemeData_inValidPluginThemeDataInteger, Expected: 'integratePluginThemeData_inValidPluginThemeDataInteger'},
    {Name: 'cintegratePluginThemeData_inValidPluginThemeDataBoolean', Actual: tst_con.cintegratePluginThemeData_inValidPluginThemeDataBoolean, Expected: 'integratePluginThemeData_inValidPluginThemeDataBoolean'},
    {Name: 'cintegratePluginThemeData_inValidPluginNameUndefined', Actual: tst_con.cintegratePluginThemeData_inValidPluginNameUndefined, Expected: 'integratePluginThemeData_inValidPluginNameUndefined'},
    {Name: 'cintegratePluginThemeData_inValidPluginNameNaN', Actual: tst_con.cintegratePluginThemeData_inValidPluginNameNaN, Expected: 'integratePluginThemeData_inValidPluginNameNaN'},
    {Name: 'cintegratePluginThemeData_inValidPluginThemeDataUndefined', Actual: tst_con.cintegratePluginThemeData_inValidPluginThemeDataUndefined, Expected: 'integratePluginThemeData_inValidPluginThemeDataUndefined'},
    {Name: 'cintegratePluginThemeData_inValidPluginThemeDataNaN', Actual: tst_con.cintegratePluginThemeData_inValidPluginThemeDataNaN, Expected: 'integratePluginThemeData_inValidPluginThemeDataNaN'},
    
    /* ruleBroker */
    // bootStrapBusinessRules
    {Name: 'cbootStrapBusinessRules_validData', Actual: tst_con.cbootStrapBusinessRules_validData, Expected: 'bootStrapBusinessRules_validData'},

    // resetBusinessRules
    {Name: 'cresetBusinessRules_validData', Actual: tst_con.cresetBusinessRules_validData, Expected: 'resetBusinessRules_validData'},

    // addClientRules
    {Name: 'caddClientRules_validClientRulesData', Actual: tst_con.caddClientRules_validClientRulesData, Expected: 'addClientRules_validClientRulesData'},
    {Name: 'caddClientRules_inValidClientRulesString', Actual: tst_con.caddClientRules_inValidClientRulesString, Expected: 'addClientRules_inValidClientRulesString'},
    {Name: 'caddClientRules_inValidClientRulesInteger', Actual: tst_con.caddClientRules_inValidClientRulesInteger, Expected: 'addClientRules_inValidClientRulesInteger'},
    {Name: 'caddClientRules_inValidClientRulesBoolean', Actual: tst_con.caddClientRules_inValidClientRulesBoolean, Expected: 'addClientRules_inValidClientRulesBoolean'},
    {Name: 'caddClientRules_inValidClientRulesUndefined', Actual: tst_con.caddClientRules_inValidClientRulesUndefined, Expected: 'addClientRules_inValidClientRulesUndefined'},
    {Name: 'caddClientRules_inValidClientRulesNaN', Actual: tst_con.caddClientRules_inValidClientRulesNaN, Expected: 'addClientRules_inValidClientRulesNaN'},

    // addPluginRules
    {Name: 'caddPluginRules_validData', Actual: tst_con.caddPluginRules_validData, Expected: 'addPluginRules_validData'},
    {Name: 'caddPluginRules_inValidPluginNameString', Actual: tst_con.caddPluginRules_inValidPluginNameString, Expected: 'addPluginRules_inValidPluginNameString'},
    {Name: 'caddPluginRules_inValidPluginRulesString', Actual: tst_con.caddPluginRules_inValidPluginRulesString, Expected: 'addPluginRules_inValidPluginRulesString'},
    {Name: 'caddPluginRules_inValidPluginNameInteger', Actual: tst_con.caddPluginRules_inValidPluginNameInteger, Expected: 'addPluginRules_inValidPluginNameInteger'},
    {Name: 'caddPluginRules_inValidPluginNameBoolean', Actual: tst_con.caddPluginRules_inValidPluginNameBoolean, Expected: 'addPluginRules_inValidPluginNameBoolean'},
    {Name: 'caddPluginRules_inValidPluginRulesInteger', Actual: tst_con.caddPluginRules_inValidPluginRulesInteger, Expected: 'addPluginRules_inValidPluginRulesInteger'},
    {Name: 'caddPluginRules_inValidPluginRulesBoolean', Actual: tst_con.caddPluginRules_inValidPluginRulesBoolean, Expected: 'addPluginRules_inValidPluginRulesBoolean'},
    {Name: 'caddPluginRules_inValidPluginNameUndefined', Actual: tst_con.caddPluginRules_inValidPluginNameUndefined, Expected: 'addPluginRules_inValidPluginNameUndefined'},
    {Name: 'caddPluginRules_inValidPluginNameNaN', Actual: tst_con.caddPluginRules_inValidPluginNameNaN, Expected: 'addPluginRules_inValidPluginNameNaN'},
    {Name: 'caddPluginRules_inValidPluginRulesUndefined', Actual: tst_con.caddPluginRules_inValidPluginRulesUndefined, Expected: 'addPluginRules_inValidPluginRulesUndefined'},
    {Name: 'caddPluginRules_inValidPluginRulesNaN', Actual: tst_con.caddPluginRules_inValidPluginRulesNaN, Expected: 'addPluginRules_inValidPluginRulesNaN'},

    // processRules
    {Name: 'cprocessRules_validData', Actual: tst_con.cprocessRules_validData, Expected: 'processRules_validData'},
    {Name: 'cprocessRules_inValidInputsString', Actual: tst_con.cprocessRules_inValidInputsString, Expected: 'processRules_inValidInputsString'},
    {Name: 'cprocessRules_inValidRulesToExecuteString', Actual: tst_con.cprocessRules_inValidRulesToExecuteString, Expected: 'processRules_inValidRulesToExecuteString'},
    {Name: 'cprocessRules_inValidInputsInteger', Actual: tst_con.cprocessRules_inValidInputsInteger, Expected: 'processRules_inValidInputsInteger'},
    {Name: 'cprocessRules_inValidInputsBoolean', Actual: tst_con.cprocessRules_inValidInputsBoolean, Expected: 'processRules_inValidInputsBoolean'},
    {Name: 'cprocessRules_inValidRulesToExecuteInteger', Actual: tst_con.cprocessRules_inValidRulesToExecuteInteger, Expected: 'processRules_inValidRulesToExecuteInteger'},
    {Name: 'cprocessRules_inValidRulesToExecuteBoolean', Actual: tst_con.cprocessRules_inValidRulesToExecuteBoolean, Expected: 'processRules_inValidRulesToExecuteBoolean'},
    {Name: 'cprocessRules_inValidInputsUndefined', Actual: tst_con.cprocessRules_inValidInputsUndefined, Expected: 'processRules_inValidInputsUndefined'},
    {Name: 'cprocessRules_inValidInputsNaN', Actual: tst_con.cprocessRules_inValidInputsNaN, Expected: 'processRules_inValidInputsNaN'},
    {Name: 'cprocessRules_inValidRulesToExecuteUndefined', Actual: tst_con.cprocessRules_inValidRulesToExecuteUndefined, Expected: 'processRules_inValidRulesToExecuteUndefined'},
    {Name: 'cprocessRules_inValidRulesToExecuteNaN', Actual: tst_con.cprocessRules_inValidRulesToExecuteNaN, Expected: 'processRules_inValidRulesToExecuteNaN'},

    // removePluginBusinessRules
    {Name: 'cremovePluginBusinessRules_validPluginNameData', Actual: tst_con.cremovePluginBusinessRules_validPluginNameData, Expected: 'removePluginBusinessRules_validPluginNameData'},
    {Name: 'cremovePluginBusinessRules_inValidPluginNameString', Actual: tst_con.cremovePluginBusinessRules_inValidPluginNameString, Expected: 'removePluginBusinessRules_inValidPluginNameString'},
    {Name: 'cremovePluginBusinessRules_inValidPluginNameInteger', Actual: tst_con.cremovePluginBusinessRules_inValidPluginNameInteger, Expected: 'removePluginBusinessRules_inValidPluginNameInteger'},
    {Name: 'cremovePluginBusinessRules_inValidPluginNameBoolean', Actual: tst_con.cremovePluginBusinessRules_inValidPluginNameBoolean, Expected: 'removePluginBusinessRules_inValidPluginNameBoolean'},
    {Name: 'cremovePluginBusinessRules_inValidPluginNameUndefined', Actual: tst_con.cremovePluginBusinessRules_inValidPluginNameUndefined, Expected: 'removePluginBusinessRules_inValidPluginNameUndefined'},
    {Name: 'cremovePluginBusinessRules_inValidPluginNameNaN', Actual: tst_con.cremovePluginBusinessRules_inValidPluginNameNaN, Expected: 'removePluginBusinessRules_inValidPluginNameNaN'},

    /* themeBroker */
    // initThemeData
    {Name: 'cinitThemeData_validData', Actual: tst_con.cinitThemeData_validData, Expected: 'initThemeData_validData'},

    // generateThemeDataFromPath
    {Name: 'cgenerateThemeDataFromPath_validThemesRootPathData', Actual: tst_con.cgenerateThemeDataFromPath_validThemesRootPathData, Expected: 'generateThemeDataFromPath_validThemesRootPathData'},
    {Name: 'cgenerateThemeDataFromPath_inValidThemesRootPathString', Actual: tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathString, Expected: 'generateThemeDataFromPath_inValidThemesRootPathString'},
    {Name: 'cgenerateThemeDataFromPath_inValidThemesRootPathInteger', Actual: tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathInteger, Expected: 'generateThemeDataFromPath_inValidThemesRootPathInteger'},
    {Name: 'cgenerateThemeDataFromPath_inValidThemesRootPathBoolean', Actual: tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathBoolean, Expected: 'generateThemeDataFromPath_inValidThemesRootPathBoolean'},
    {Name: 'cgenerateThemeDataFromPath_inValidThemesRootPathUndefined', Actual: tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathUndefined, Expected: 'generateThemeDataFromPath_inValidThemesRootPathUndefined'},
    {Name: 'cgenerateThemeDataFromPath_inValidThemesRootPathNaN', Actual: tst_con.cgenerateThemeDataFromPath_inValidThemesRootPathNaN, Expected: 'generateThemeDataFromPath_inValidThemesRootPathNaN'},

    // addThemeData
    {Name: 'caddThemeData_validData', Actual: tst_con.caddThemeData_validData, Expected: 'addThemeData_validData'},
    {Name: 'caddThemeData_inValidThemeDataString', Actual: tst_con.caddThemeData_inValidThemeDataString, Expected: 'addThemeData_inValidThemeDataString'},
    {Name: 'caddThemeData_inValidContextNameString', Actual: tst_con.caddThemeData_inValidContextNameString, Expected: 'addThemeData_inValidContextNameString'},
    {Name: 'caddThemeData_inValidThemeDataInteger', Actual: tst_con.caddThemeData_inValidThemeDataInteger, Expected: 'addThemeData_inValidThemeDataInteger'},
    {Name: 'caddThemeData_inValidThemeDataBoolean', Actual: tst_con.caddThemeData_inValidThemeDataBoolean, Expected: 'addThemeData_inValidThemeDataBoolean'},
    {Name: 'caddThemeData_inValidContextNameInteger', Actual: tst_con.caddThemeData_inValidContextNameInteger, Expected: 'addThemeData_inValidContextNameInteger'},
    {Name: 'caddThemeData_inValidContextNameBoolean', Actual: tst_con.caddThemeData_inValidContextNameBoolean, Expected: 'addThemeData_inValidContextNameBoolean'},
    {Name: 'caddThemeData_inValidThemeDataUndefined', Actual: tst_con.caddThemeData_inValidThemeDataUndefined, Expected: 'addThemeData_inValidThemeDataUndefined'},
    {Name: 'caddThemeData_inValidThemeDataNaN', Actual: tst_con.caddThemeData_inValidThemeDataNaN, Expected: 'addThemeData_inValidThemeDataNaN'},
    {Name: 'caddThemeData_inValidContextNameUndefined', Actual: tst_con.caddThemeData_inValidContextNameUndefined, Expected: 'addThemeData_inValidContextNameUndefined'},
    {Name: 'caddThemeData_inValidContextNameNaN', Actual: tst_con.caddThemeData_inValidContextNameNaN, Expected: 'addThemeData_inValidContextNameNaN'},

    // getNamedThemesFromRootPath
    {Name: 'cgetNamedThemesFromRootPath_validThemesRootPathData', Actual: tst_con.cgetNamedThemesFromRootPath_validThemesRootPathData, Expected: 'getNamedThemesFromRootPath_validThemesRootPathData'},
    {Name: 'cgetNamedThemesFromRootPath_inValidThemesRootPathString', Actual: tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathString, Expected: 'getNamedThemesFromRootPath_inValidThemesRootPathString'},
    {Name: 'cgetNamedThemesFromRootPath_inValidThemesRootPathInteger', Actual: tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathInteger, Expected: 'getNamedThemesFromRootPath_inValidThemesRootPathInteger'},
    {Name: 'cgetNamedThemesFromRootPath_inValidThemesRootPathBoolean', Actual: tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathBoolean, Expected: 'getNamedThemesFromRootPath_inValidThemesRootPathBoolean'},
    {Name: 'cgetNamedThemesFromRootPath_inValidThemesRootPathUndefined', Actual: tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathUndefined, Expected: 'getNamedThemesFromRootPath_inValidThemesRootPathUndefined'},
    {Name: 'cgetNamedThemesFromRootPath_inValidThemesRootPathNaN', Actual: tst_con.cgetNamedThemesFromRootPath_inValidThemesRootPathNaN, Expected: 'getNamedThemesFromRootPath_inValidThemesRootPathNaN'},

    // getNamedThemePathFromRootPath
    {Name: 'cgetNamedThemePathFromRootPath_validData', Actual: tst_con.cgetNamedThemePathFromRootPath_validData, Expected: 'getNamedThemePathFromRootPath_validData'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemeNameString', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameString, Expected: 'getNamedThemePathFromRootPath_inValidThemeNameString'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemesRootPathString', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathString, Expected: 'getNamedThemePathFromRootPath_inValidThemesRootPathString'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemeNameInteger', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameInteger, Expected: 'getNamedThemePathFromRootPath_inValidThemeNameInteger'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemeNameBoolean', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameBoolean, Expected: 'getNamedThemePathFromRootPath_inValidThemeNameBoolean'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemesRootPathInteger', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathInteger, Expected: 'getNamedThemePathFromRootPath_inValidThemesRootPathInteger'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemesRootPathBoolean', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathBoolean, Expected: 'getNamedThemePathFromRootPath_inValidThemesRootPathBoolean'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemeNameUndefined', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameUndefined, Expected: 'getNamedThemePathFromRootPath_inValidThemeNameUndefined'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemeNameNaN', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemeNameNaN, Expected: 'getNamedThemePathFromRootPath_inValidThemeNameNaN'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemesRootPathUndefined', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathUndefined, Expected: 'getNamedThemePathFromRootPath_inValidThemesRootPathUndefined'},
    {Name: 'cgetNamedThemePathFromRootPath_inValidThemesRootPathNaN', Actual: tst_con.cgetNamedThemePathFromRootPath_inValidThemesRootPathNaN, Expected: 'getNamedThemePathFromRootPath_inValidThemesRootPathNaN'},

    // loadTheme
    {Name: 'cloadTheme_validData', Actual: tst_con.cloadTheme_validData, Expected: 'loadTheme_validData'},
 
    // applyTheme
    {Name: 'capplyTheme_validThemeDataData', Actual: tst_con.capplyTheme_validThemeDataData, Expected: 'applyTheme_validThemeDataData'},
    {Name: 'capplyTheme_inValidThemeDataString', Actual: tst_con.capplyTheme_inValidThemeDataString, Expected: 'applyTheme_inValidThemeDataString'},
    {Name: 'capplyTheme_inValidThemeDataInteger', Actual: tst_con.capplyTheme_inValidThemeDataInteger, Expected: 'applyTheme_inValidThemeDataInteger'},
    {Name: 'capplyTheme_inValidThemeDataBoolean', Actual: tst_con.capplyTheme_inValidThemeDataBoolean, Expected: 'applyTheme_inValidThemeDataBoolean'},
    {Name: 'capplyTheme_inValidThemeDataUndefined', Actual: tst_con.capplyTheme_inValidThemeDataUndefined, Expected: 'applyTheme_inValidThemeDataUndefined'},
    {Name: 'capplyTheme_inValidThemeDataNaN', Actual: tst_con.capplyTheme_inValidThemeDataNaN, Expected: 'applyTheme_inValidThemeDataNaN'},

    // removePluginThemeData
    {Name: 'cremovePluginThemeData_validPluginNameData', Actual: tst_con.cremovePluginThemeData_validPluginNameData, Expected: 'removePluginThemeData_validPluginNameData'},
    {Name: 'cremovePluginThemeData_inValidPluginNameString', Actual: tst_con.cremovePluginThemeData_inValidPluginNameString, Expected: 'removePluginThemeData_inValidPluginNameString'},
    {Name: 'cremovePluginThemeData_inValidPluginNameInteger', Actual: tst_con.cremovePluginThemeData_inValidPluginNameInteger, Expected: 'removePluginThemeData_inValidPluginNameInteger'},
    {Name: 'cremovePluginThemeData_inValidPluginNameBoolean', Actual: tst_con.cremovePluginThemeData_inValidPluginNameBoolean, Expected: 'removePluginThemeData_inValidPluginNameBoolean'},
    {Name: 'cremovePluginThemeData_inValidPluginNameUndefined', Actual: tst_con.cremovePluginThemeData_inValidPluginNameUndefined, Expected: 'removePluginThemeData_inValidPluginNameUndefined'},
    {Name: 'cremovePluginThemeData_inValidPluginNameNaN', Actual: tst_con.cremovePluginThemeData_inValidPluginNameNaN, Expected: 'removePluginThemeData_inValidPluginNameNaN'},

    /* workflowBroker */
    // addPluginWorkflows
    {Name: 'caddPluginWorkflows_validData', Actual: tst_con.caddPluginWorkflows_validData, Expected: 'addPluginWorkflows_validData'},
    {Name: 'caddPluginWorkflows_inValidPluginNameString', Actual: tst_con.caddPluginWorkflows_inValidPluginNameString, Expected: 'addPluginWorkflows_inValidPluginNameString'},
    {Name: 'caddPluginWorkflows_inValidPluginWorkflowsString', Actual: tst_con.caddPluginWorkflows_inValidPluginWorkflowsString, Expected: 'addPluginWorkflows_inValidPluginWorkflowsString'},
    {Name: 'caddPluginWorkflows_inValidPluginNameInteger', Actual: tst_con.caddPluginWorkflows_inValidPluginNameInteger, Expected: 'addPluginWorkflows_inValidPluginNameInteger'},
    {Name: 'caddPluginWorkflows_inValidPluginNameBoolean', Actual: tst_con.caddPluginWorkflows_inValidPluginNameBoolean, Expected: 'addPluginWorkflows_inValidPluginNameBoolean'},
    {Name: 'caddPluginWorkflows_inValidPluginWorkflowsInteger', Actual: tst_con.caddPluginWorkflows_inValidPluginWorkflowsInteger, Expected: 'addPluginWorkflows_inValidPluginWorkflowsInteger'},
    {Name: 'caddPluginWorkflows_inValidPluginWorkflowsBoolean', Actual: tst_con.caddPluginWorkflows_inValidPluginWorkflowsBoolean, Expected: 'addPluginWorkflows_inValidPluginWorkflowsBoolean'},
    {Name: 'caddPluginWorkflows_inValidPluginNameUndefined', Actual: tst_con.caddPluginWorkflows_inValidPluginNameUndefined, Expected: 'addPluginWorkflows_inValidPluginNameUndefined'},
    {Name: 'caddPluginWorkflows_inValidPluginNameNaN', Actual: tst_con.caddPluginWorkflows_inValidPluginNameNaN, Expected: 'addPluginWorkflows_inValidPluginNameNaN'},
    {Name: 'caddPluginWorkflows_inValidPluginWorkflowsUndefined', Actual: tst_con.caddPluginWorkflows_inValidPluginWorkflowsUndefined, Expected: 'addPluginWorkflows_inValidPluginWorkflowsUndefined'},
    {Name: 'caddPluginWorkflows_inValidPluginWorkflowsNaN', Actual: tst_con.caddPluginWorkflows_inValidPluginWorkflowsNaN, Expected: 'addPluginWorkflows_inValidPluginWorkflowsNaN'},

    // getWorkflow
    {Name: 'cgetWorkflow_validWorkflowNameData', Actual: tst_con.cgetWorkflow_validWorkflowNameData, Expected: 'getWorkflow_validWorkflowNameData'},
    {Name: 'cgetWorkflow_inValidWorkflowNameString', Actual: tst_con.cgetWorkflow_inValidWorkflowNameString, Expected: 'getWorkflow_inValidWorkflowNameString'},
    {Name: 'cgetWorkflow_inValidWorkflowNameInteger', Actual: tst_con.cgetWorkflow_inValidWorkflowNameInteger, Expected: 'getWorkflow_inValidWorkflowNameInteger'},
    {Name: 'cgetWorkflow_inValidWorkflowNameBoolean', Actual: tst_con.cgetWorkflow_inValidWorkflowNameBoolean, Expected: 'getWorkflow_inValidWorkflowNameBoolean'},
    {Name: 'cgetWorkflow_inValidWorkflowNameUndefined', Actual: tst_con.cgetWorkflow_inValidWorkflowNameUndefined, Expected: 'getWorkflow_inValidWorkflowNameUndefined'},
    {Name: 'cgetWorkflow_inValidWorkflowNameNaN', Actual: tst_con.cgetWorkflow_inValidWorkflowNameNaN, Expected: 'getWorkflow_inValidWorkflowNameNaN'},

    // doesWorkflowExist
    {Name: 'cdoesWorkflowExist_validWorkflowNameData', Actual: tst_con.cdoesWorkflowExist_validWorkflowNameData, Expected: 'doesWorkflowExist_validWorkflowNameData'},
    {Name: 'cdoesWorkflowExist_inValidWorkflowNameString', Actual: tst_con.cdoesWorkflowExist_inValidWorkflowNameString, Expected: 'doesWorkflowExist_inValidWorkflowNameString'},
    {Name: 'cdoesWorkflowExist_inValidWorkflowNameInteger', Actual: tst_con.cdoesWorkflowExist_inValidWorkflowNameInteger, Expected: 'doesWorkflowExist_inValidWorkflowNameInteger'},
    {Name: 'cdoesWorkflowExist_inValidWorkflowNameBoolean', Actual: tst_con.cdoesWorkflowExist_inValidWorkflowNameBoolean, Expected: 'doesWorkflowExist_inValidWorkflowNameBoolean'},
    {Name: 'cdoesWorkflowExist_inValidWorkflowNameUndefined', Actual: tst_con.cdoesWorkflowExist_inValidWorkflowNameUndefined, Expected: 'doesWorkflowExist_inValidWorkflowNameUndefined'},
    {Name: 'cdoesWorkflowExist_inValidWorkflowNameNaN', Actual: tst_con.cdoesWorkflowExist_inValidWorkflowNameNaN, Expected: 'doesWorkflowExist_inValidWorkflowNameNaN'},

    // doesWorkflowExistInWorkflowData
    {Name: 'cdoesWorkflowExistInWorkflowData_validData', Actual: tst_con.cdoesWorkflowExistInWorkflowData_validData, Expected: 'doesWorkflowExistInWorkflowData_validData'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowDataString'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowNameString'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowDataInteger', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataInteger, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowDataInteger'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowDataBoolean'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowNameInteger', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameInteger, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowNameInteger'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowNameBoolean'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowDataUndefined'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowDataNaN', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataNaN, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowDataNaN'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowNameUndefined'},
    {Name: 'cdoesWorkflowExistInWorkflowData_inValidWorkflowNameNaN', Actual: tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameNaN, Expected: 'doesWorkflowExistInWorkflowData_inValidWorkflowNameNaN'},

    // searchWorkflow
    {Name: 'csearchWorkflow_validData', Actual: tst_con.csearchWorkflow_validData, Expected: 'searchWorkflow_validData'},
    {Name: 'csearchWorkflow_inValidAllWorkflowsString', Actual: tst_con.csearchWorkflow_inValidAllWorkflowsString, Expected: 'searchWorkflow_inValidAllWorkflowsString'},
    {Name: 'csearchWorkflow_inValidWorkflowNameString', Actual: tst_con.csearchWorkflow_inValidWorkflowNameString, Expected: 'searchWorkflow_inValidWorkflowNameString'},
    {Name: 'csearchWorkflow_inValidAllWorkflowsInteger', Actual: tst_con.csearchWorkflow_inValidAllWorkflowsInteger, Expected: 'searchWorkflow_inValidAllWorkflowsInteger'},
    {Name: 'csearchWorkflow_inValidAllWorkflowsBoolean', Actual: tst_con.csearchWorkflow_inValidAllWorkflowsBoolean, Expected: 'searchWorkflow_inValidAllWorkflowsBoolean'},
    {Name: 'csearchWorkflow_inValidWorkflowNameInteger', Actual: tst_con.csearchWorkflow_inValidWorkflowNameInteger, Expected: 'searchWorkflow_inValidWorkflowNameInteger'},
    {Name: 'csearchWorkflow_inValidWorkflowNameBoolean', Actual: tst_con.csearchWorkflow_inValidWorkflowNameBoolean, Expected: 'searchWorkflow_inValidWorkflowNameBoolean'},
    {Name: 'csearchWorkflow_inValidAllWorkflowsUndefined', Actual: tst_con.csearchWorkflow_inValidAllWorkflowsUndefined, Expected: 'searchWorkflow_inValidAllWorkflowsUndefined'},
    {Name: 'csearchWorkflow_inValidAllWorkflowsNaN', Actual: tst_con.csearchWorkflow_inValidAllWorkflowsNaN, Expected: 'searchWorkflow_inValidAllWorkflowsNaN'},
    {Name: 'csearchWorkflow_inValidWorkflowNameUndefined', Actual: tst_con.csearchWorkflow_inValidWorkflowNameUndefined, Expected: 'searchWorkflow_inValidWorkflowNameUndefined'},
    {Name: 'csearchWorkflow_inValidWorkflowNameNaN', Actual: tst_con.csearchWorkflow_inValidWorkflowNameNaN, Expected: 'searchWorkflow_inValidWorkflowNameNaN'},

    // getAllWorkflows
    {Name: 'cgetAllWorkflows_validWorkflowDataStructureData', Actual: tst_con.cgetAllWorkflows_validWorkflowDataStructureData, Expected: 'getAllWorkflows_validWorkflowDataStructureData'},
    {Name: 'cgetAllWorkflows_inValidWorkflowDataStructureString', Actual: tst_con.cgetAllWorkflows_inValidWorkflowDataStructureString, Expected: 'getAllWorkflows_inValidWorkflowDataStructureString'},
    {Name: 'cgetAllWorkflows_inValidWorkflowDataStructureInteger', Actual: tst_con.cgetAllWorkflows_inValidWorkflowDataStructureInteger, Expected: 'getAllWorkflows_inValidWorkflowDataStructureInteger'},
    {Name: 'cgetAllWorkflows_inValidWorkflowDataStructureBoolean', Actual: tst_con.cgetAllWorkflows_inValidWorkflowDataStructureBoolean, Expected: 'getAllWorkflows_inValidWorkflowDataStructureBoolean'},
    {Name: 'cgetAllWorkflows_validWorkflowDataStructureUndefined', Actual: tst_con.cgetAllWorkflows_validWorkflowDataStructureUndefined, Expected: 'getAllWorkflows_validWorkflowDataStructureUndefined'},
    {Name: 'cgetAllWorkflows_validWorkflowDataStructureNaN', Actual: tst_con.cgetAllWorkflows_validWorkflowDataStructureNaN, Expected: 'getAllWorkflows_validWorkflowDataStructureNaN'},

    // getWorkflowNamespaceDataObject
    {Name: 'cgetWorkflowNamespaceDataObject_validData', Actual: tst_con.cgetWorkflowNamespaceDataObject_validData, Expected: 'getWorkflowNamespaceDataObject_validData'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString, Expected: 'getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString, Expected: 'getWorkflowNamespaceDataObject_inValidNamespaceToFindString'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger, Expected: 'getWorkflowNamespaceDataObject_inValidWorkflowDataStructureInteger'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean, Expected: 'getWorkflowNamespaceDataObject_inValidWorkflowDataStructureBoolean'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidNamespaceToFindInteger', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindInteger, Expected: 'getWorkflowNamespaceDataObject_inValidNamespaceToFindInteger'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean, Expected: 'getWorkflowNamespaceDataObject_inValidNamespaceToFindBoolean'},
    {Name: 'cgetWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined', Actual: tst_con.cgetWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined, Expected: 'getWorkflowNamespaceDataObject_validWorkflowDataStructureUndefined'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN, Expected: 'getWorkflowNamespaceDataObject_inValidWorkflowDataStructureNaN'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined, Expected: 'getWorkflowNamespaceDataObject_inValidNamespaceToFindUndefined'},
    {Name: 'cgetWorkflowNamespaceDataObject_inValidNamespaceToFindNaN', Actual: tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindNaN, Expected: 'getWorkflowNamespaceDataObject_inValidNamespaceToFindNaN'},

    // removePluginWorkflows
    {Name: 'cremovePluginWorkflows_validPluginNameData', Actual: tst_con.cremovePluginWorkflows_validPluginNameData, Expected: 'removePluginWorkflows_validPluginNameData'},
    {Name: 'cremovePluginWorkflows_inValidPluginNameString', Actual: tst_con.cremovePluginWorkflows_inValidPluginNameString, Expected: 'removePluginWorkflows_inValidPluginNameString'},
    {Name: 'cremovePluginWorkflows_inValidPluginNameInteger', Actual: tst_con.cremovePluginWorkflows_inValidPluginNameInteger, Expected: 'removePluginWorkflows_inValidPluginNameInteger'},
    {Name: 'cremovePluginWorkflows_inValidPluginNameBoolean', Actual: tst_con.cremovePluginWorkflows_inValidPluginNameBoolean, Expected: 'removePluginWorkflows_inValidPluginNameBoolean'},
    {Name: 'cremovePluginWorkflows_inValidPluginNameUndefined', Actual: tst_con.cremovePluginWorkflows_inValidPluginNameUndefined, Expected: 'removePluginWorkflows_inValidPluginNameUndefined'},
    {Name: 'cremovePluginWorkflows_inValidPluginNameNaN', Actual: tst_con.cremovePluginWorkflows_inValidPluginNameNaN, Expected: 'removePluginWorkflows_inValidPluginNameNaN'},

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
    //initFramework
    {Name: 'cinitFramework_validClientConfigurationData', Actual: tst_con.cinitFramework_validClientConfigurationData, Expected: 'initFramework_validClientConfigurationData'}, 
    {Name: 'cinitFramework_inValidClientConfigurationString', Actual: tst_con.cinitFramework_inValidClientConfigurationString, Expected: 'initFramework_inValidClientConfigurationString'},
    {Name: 'cinitFramework_inValidClientConfigurationInteger', Actual: tst_con.cinitFramework_inValidClientConfigurationInteger, Expected: 'initFramework_inValidClientConfigurationInteger'},
    {Name: 'cinitFramework_inValidClientConfigurationBoolean', Actual: tst_con.cinitFramework_inValidClientConfigurationBoolean, Expected: 'initFramework_inValidClientConfigurationBoolean'},
    {Name: 'cinitFramework_inValidClientConfigurationUndefined', Actual: tst_con.cinitFramework_inValidClientConfigurationUndefined, Expected: 'initFramework_inValidClientConfigurationUndefined'},
    {Name: 'cinitFramework_inValidClientConfigurationNaN', Actual: tst_con.cinitFramework_inValidClientConfigurationNaN, Expected: 'initFramework_inValidClientConfigurationNaN'},

    // accouterFramework
    {Name: 'caccouterFramework_validData', Actual: tst_con.caccouterFramework_validData, Expected: 'accouterFramework_validData'}, 
    {Name: 'caccouterFramework_inValidDataString', Actual: tst_con.caccouterFramework_inValidDataString, Expected: 'accouterFramework_inValidDataString'}, 
    {Name: 'caccouterFramework_inValidDataInteger', Actual: tst_con.caccouterFramework_inValidDataInteger, Expected: 'accouterFramework_inValidDataInteger'}, 
    {Name: 'caccouterFramework_inValidDataBoolean', Actual: tst_con.caccouterFramework_inValidDataBoolean, Expected: 'accouterFramework_inValidDataBoolean'}, 
    {Name: 'caccouterFramework_inValidDataUndefined', Actual: tst_con.caccouterFramework_inValidDataUndefined, Expected: 'accouterFramework_inValidDataUndefined'}, 
    {Name: 'caccouterFramework_inValidDataNaN', Actual: tst_con.caccouterFramework_inValidDataNaN, Expected: 'accouterFramework_inValidDataNaN'},

    // getFrameworkData
    {Name: 'cgetFrameworkData_validData', Actual: tst_con.cgetFrameworkData_validData, Expected: 'getFrameworkData_validData'},
    {Name: 'cgetFrameworkData_inValidString', Actual: tst_con.cgetFrameworkData_inValidString, Expected: 'getFrameworkData_inValidString'},
    {Name: 'cgetFrameworkData_inValidInteger', Actual: tst_con.cgetFrameworkData_inValidInteger, Expected: 'getFrameworkData_inValidInteger'},
    {Name: 'cgetFrameworkData_inValidBoolean', Actual: tst_con.cgetFrameworkData_inValidBoolean, Expected: 'getFrameworkData_inValidBoolean'},
    {Name: 'cgetFrameworkData_inValidUndefined', Actual: tst_con.cgetFrameworkData_inValidUndefined, Expected: 'getFrameworkData_inValidUndefined'},
    {Name: 'cgetFrameworkData_inValidNaN', Actual: tst_con.cgetFrameworkData_inValidNaN, Expected: 'getFrameworkData_inValidNaN'},
    
    // mergeClientBusinessRules
    {Name: 'cmergeClientBusinessRules_validClientBusinessRulesData', Actual: tst_con.cmergeClientBusinessRules_validClientBusinessRulesData, Expected: 'mergeClientBusinessRules_validClientBusinessRulesData'},
    {Name: 'cmergeClientBusinessRules_inValidClientBusinessRulesString', Actual: tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesString, Expected: 'mergeClientBusinessRules_inValidClientBusinessRulesString'},
    {Name: 'cmergeClientBusinessRules_inValidClientBusinessRulesInteger', Actual: tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesInteger, Expected: 'mergeClientBusinessRules_inValidClientBusinessRulesInteger'},
    {Name: 'cmergeClientBusinessRules_inValidClientBusinessRulesBoolean', Actual: tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesBoolean, Expected: 'mergeClientBusinessRules_inValidClientBusinessRulesBoolean'},
    {Name: 'cmergeClientBusinessRules_inValidClientBusinessRulesUndefined', Actual: tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesUndefined, Expected: 'mergeClientBusinessRules_inValidClientBusinessRulesUndefined'},
    {Name: 'cmergeClientBusinessRules_inValidClientBusinessRulesNaN', Actual: tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesNaN, Expected: 'mergeClientBusinessRules_inValidClientBusinessRulesNaN'},

    // mergeClientCommands
    {Name: 'cmergeClientCommands_validClientCommandsData', Actual: tst_con.cmergeClientCommands_validClientCommandsData, Expected: 'mergeClientCommands_validClientCommandsData'},
    {Name: 'cmergeClientCommands_inValidClientCommandsString', Actual: tst_con.cmergeClientCommands_inValidClientCommandsString, Expected: 'mergeClientCommands_inValidClientCommandsString'},
    {Name: 'cmergeClientCommands_inValidClientCommandsInteger', Actual: tst_con.cmergeClientCommands_inValidClientCommandsInteger, Expected: 'mergeClientCommands_inValidClientCommandsInteger'},
    {Name: 'cmergeClientCommands_inValidClientCommandsBoolean', Actual: tst_con.cmergeClientCommands_inValidClientCommandsBoolean, Expected: 'mergeClientCommands_inValidClientCommandsBoolean'},
    {Name: 'cmergeClientCommands_inValidClientCommandsUndefined', Actual: tst_con.cmergeClientCommands_inValidClientCommandsUndefined, Expected: 'mergeClientCommands_inValidClientCommandsUndefined'},
    {Name: 'cmergeClientCommands_inValidClientCommandsNaN', Actual: tst_con.cmergeClientCommands_inValidClientCommandsNaN, Expected: 'mergeClientCommands_inValidClientCommandsNaN'},

    // loadCommandAlieses

    // loadCommandWorkflow

    // listLoadedPlugins
    {Name: 'clistLoadedPlugins_validData', Actual: tst_con.clistLoadedPlugins_validData, Expected: 'listLoadedPlugins_validData'},
    {Name: 'clistLoadedPlugins_inValidString', Actual: tst_con.clistLoadedPlugins_inValidString, Expected: 'listLoadedPlugins_inValidString'},
    {Name: 'clistLoadedPlugins_inValidInteger', Actual: tst_con.clistLoadedPlugins_inValidInteger, Expected: 'listLoadedPlugins_inValidInteger'},
    {Name: 'clistLoadedPlugins_inValidBoolean', Actual: tst_con.clistLoadedPlugins_inValidBoolean, Expected: 'listLoadedPlugins_inValidBoolean'},
    {Name: 'clistLoadedPlugins_inValidUndefined', Actual: tst_con.clistLoadedPlugins_inValidUndefined, Expected: 'listLoadedPlugins_inValidUndefined'},
    {Name: 'clistLoadedPlugins_inValidNaN', Actual: tst_con.clistLoadedPlugins_inValidNaN, Expected: 'listLoadedPlugins_inValidNaN'},

    // listAllPluginsInRegistry
    {Name: 'clistAllPluginsInRegistry_validData', Actual: tst_con.clistAllPluginsInRegistry_validData, Expected: 'listAllPluginsInRegistry_validData'},
    {Name: 'clistAllPluginsInRegistry_inValidString', Actual: tst_con.clistAllPluginsInRegistry_inValidString, Expected: 'listAllPluginsInRegistry_inValidString'},
    {Name: 'clistAllPluginsInRegistry_inValidInteger', Actual: tst_con.clistAllPluginsInRegistry_inValidInteger, Expected: 'listAllPluginsInRegistry_inValidInteger'},
    {Name: 'clistAllPluginsInRegistry_inValidBoolean', Actual: tst_con.clistAllPluginsInRegistry_inValidBoolean, Expected: 'listAllPluginsInRegistry_inValidBoolean'},
    {Name: 'clistAllPluginsInRegistry_inValidUndefined', Actual: tst_con.clistAllPluginsInRegistry_inValidUndefined, Expected: 'listAllPluginsInRegistry_inValidUndefined'},
    {Name: 'clistAllPluginsInRegistry_inValidNaN', Actual: tst_con.clistAllPluginsInRegistry_inValidNaN, Expected: 'listAllPluginsInRegistry_inValidNaN'},

    // listAllPluginsInRegistryPath
    {Name: 'clistAllPluginsInRegistryPath_validData', Actual: tst_con.clistAllPluginsInRegistryPath_validData, Expected: 'listAllPluginsInRegistryPath_validData'},

    // numberOfPluginsInRegistry
    {Name: 'cnumberOfPluginsInRegistry_validData', Actual: tst_con.cnumberOfPluginsInRegistry_validData, Expected: 'numberOfPluginsInRegistry_validData'},

    // numberOfPluginsInRegistryPath
    {Name: 'cnumberOfPluginsInRegistryPath_validData', Actual: tst_con.cnumberOfPluginsInRegistryPath_validData, Expected: 'numberOfPluginsInRegistryPath_validData'},

    // registerPluginByNameAndPath
    {Name: 'cregisterPluginByNameAndPath_validData', Actual: tst_con.cregisterPluginByNameAndPath_validData, Expected: 'registerPluginByNameAndPath_validData'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginNameString', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginNameString, Expected: 'registerPluginByNameAndPath_inValidPluginNameString'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginPathString', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginPathString, Expected: 'registerPluginByNameAndPath_inValidPluginPathString'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginNameInteger', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginNameInteger, Expected: 'registerPluginByNameAndPath_inValidPluginNameInteger'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginNameBoolean', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginNameBoolean, Expected: 'registerPluginByNameAndPath_inValidPluginNameBoolean'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginPathInteger', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginPathInteger, Expected: 'registerPluginByNameAndPath_inValidPluginPathInteger'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginPathBoolean', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginPathBoolean, Expected: 'registerPluginByNameAndPath_inValidPluginPathBoolean'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginNameUndefined', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginNameUndefined, Expected: 'registerPluginByNameAndPath_inValidPluginNameUndefined'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginNameNaN', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginNameNaN, Expected: 'registerPluginByNameAndPath_inValidPluginNameNaN'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginPathUndefined', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginPathUndefined, Expected: 'registerPluginByNameAndPath_inValidPluginPathUndefined'},
    {Name: 'cregisterPluginByNameAndPath_inValidPluginPathNaN', Actual: tst_con.cregisterPluginByNameAndPath_inValidPluginPathNaN, Expected: 'registerPluginByNameAndPath_inValidPluginPathNaN'},

    // unregisterPluginByName
    {Name: 'cunregisterPluginByName_validPluginNameData', Actual: tst_con.cunregisterPluginByName_validPluginNameData, Expected: 'unregisterPluginByName_validPluginNameData'},
    {Name: 'cunregisterPluginByName_inValidPluginNameString', Actual: tst_con.cunregisterPluginByName_inValidPluginNameString, Expected: 'unregisterPluginByName_inValidPluginNameString'},
    {Name: 'cunregisterPluginByName_inValidPluginNameInteger', Actual: tst_con.cunregisterPluginByName_inValidPluginNameInteger, Expected: 'unregisterPluginByName_inValidPluginNameInteger'},
    {Name: 'cunregisterPluginByName_inValidPluginNameBoolean', Actual: tst_con.cunregisterPluginByName_inValidPluginNameBoolean, Expected: 'unregisterPluginByName_inValidPluginNameBoolean'},
    {Name: 'cunregisterPluginByName_inValidPluginNameUndefined', Actual: tst_con.cunregisterPluginByName_inValidPluginNameUndefined, Expected: 'unregisterPluginByName_inValidPluginNameUndefined'},
    {Name: 'cunregisterPluginByName_inValidPluginNameNaN', Actual: tst_con.cunregisterPluginByName_inValidPluginNameNaN, Expected: 'unregisterPluginByName_inValidPluginNameNaN'},

    // unregisterPlugins
    {Name: 'cunregisterPlugins_validPluginsListArrayData', Actual: tst_con.cunregisterPlugins_validPluginsListArrayData, Expected: 'unregisterPlugins_validPluginsListArrayData'},
    {Name: 'cunregisterPlugins_inValidPluginsListArrayString', Actual: tst_con.cunregisterPlugins_inValidPluginsListArrayString, Expected: 'unregisterPlugins_inValidPluginsListArrayString'},
    {Name: 'cunregisterPlugins_inValidPluginsListArrayInteger', Actual: tst_con.cunregisterPlugins_inValidPluginsListArrayInteger, Expected: 'unregisterPlugins_inValidPluginsListArrayInteger'},
    {Name: 'cunregisterPlugins_inValidPluginsListArrayBoolean', Actual: tst_con.cunregisterPlugins_inValidPluginsListArrayBoolean, Expected: 'unregisterPlugins_inValidPluginsListArrayBoolean'},
    {Name: 'cunregisterPlugins_inValidPluginsListArrayUndefined', Actual: tst_con.cunregisterPlugins_inValidPluginsListArrayUndefined, Expected: 'unregisterPlugins_inValidPluginsListArrayUndefined'},
    {Name: 'cunregisterPlugins_inValidPluginsListArrayNaN', Actual: tst_con.cunregisterPlugins_inValidPluginsListArrayNaN, Expected: 'unregisterPlugins_inValidPluginsListArrayNaN'},

    // syncPluginRegistryWithPath
    {Name: 'csyncPluginRegistryWithPath_validData', Actual: tst_con.csyncPluginRegistryWithPath_validData, Expected: 'syncPluginRegistryWithPath_validData'},
    {Name: 'csyncPluginRegistryWithPath_inValidString', Actual: tst_con.csyncPluginRegistryWithPath_inValidString, Expected: 'syncPluginRegistryWithPath_inValidString'},
    {Name: 'csyncPluginRegistryWithPath_inValidInteger', Actual: tst_con.csyncPluginRegistryWithPath_inValidInteger, Expected: 'syncPluginRegistryWithPath_inValidInteger'},
    {Name: 'csyncPluginRegistryWithPath_inValidBoolean', Actual: tst_con.csyncPluginRegistryWithPath_inValidBoolean, Expected: 'syncPluginRegistryWithPath_inValidBoolean'},
    {Name: 'csyncPluginRegistryWithPath_inValidUndefined', Actual: tst_con.csyncPluginRegistryWithPath_inValidUndefined, Expected: 'syncPluginRegistryWithPath_inValidUndefined'},
    {Name: 'csyncPluginRegistryWithPath_inValidNaN', Actual: tst_con.csyncPluginRegistryWithPath_inValidNaN, Expected: 'syncPluginRegistryWithPath_inValidNaN'},

    // clearAllPluginRegistry
    {Name: 'cclearAllPluginRegistry_validData', Actual: tst_con.cclearAllPluginRegistry_validData, Expected: 'clearAllPluginRegistry_validData'},
    {Name: 'cclearAllPluginRegistry_inValidString', Actual: tst_con.cclearAllPluginRegistry_inValidString, Expected: 'clearAllPluginRegistry_inValidString'},
    {Name: 'cclearAllPluginRegistry_inValidInteger', Actual: tst_con.cclearAllPluginRegistry_inValidInteger, Expected: 'clearAllPluginRegistry_inValidInteger'},
    {Name: 'cclearAllPluginRegistry_inValidBoolean', Actual: tst_con.cclearAllPluginRegistry_inValidBoolean, Expected: 'clearAllPluginRegistry_inValidBoolean'},
    {Name: 'cclearAllPluginRegistry_inValidUndefined', Actual: tst_con.cclearAllPluginRegistry_inValidUndefined, Expected: 'clearAllPluginRegistry_inValidUndefined'},
    {Name: 'cclearAllPluginRegistry_inValidNaN', Actual: tst_con.cclearAllPluginRegistry_inValidNaN, Expected: 'clearAllPluginRegistry_inValidNaN'},

    // writePluginRegistryToDisk
    {Name: 'cwritePluginRegistryToDisk_validData', Actual: tst_con.cwritePluginRegistryToDisk_validData, Expected: 'writePluginRegistryToDisk_validData'},
    {Name: 'cwritePluginRegistryToDisk_inValidString', Actual: tst_con.cwritePluginRegistryToDisk_inValidString, Expected: 'writePluginRegistryToDisk_inValidString'},
    {Name: 'cwritePluginRegistryToDisk_inValidInteger', Actual: tst_con.cwritePluginRegistryToDisk_inValidInteger, Expected: 'writePluginRegistryToDisk_inValidInteger'},
    {Name: 'cwritePluginRegistryToDisk_inValidBoolean', Actual: tst_con.cwritePluginRegistryToDisk_inValidBoolean, Expected: 'writePluginRegistryToDisk_inValidBoolean'},
    {Name: 'cwritePluginRegistryToDisk_inValidUndefined', Actual: tst_con.cwritePluginRegistryToDisk_inValidUndefined, Expected: 'writePluginRegistryToDisk_inValidUndefined'},
    {Name: 'cwritePluginRegistryToDisk_inValidNaN', Actual: tst_con.cwritePluginRegistryToDisk_inValidNaN, Expected: 'writePluginRegistryToDisk_inValidNaN'},

    // loadPlugin
    {Name: 'cloadPlugin_validPluginsPathData', Actual: tst_con.cloadPlugin_validPluginsPathData, Expected: 'loadPlugin_validData'},
    {Name: 'cloadPlugin_inValidPluginPathString', Actual: tst_con.cloadPlugin_inValidPluginPathString, Expected: 'loadPlugin_inValidPluginPluginsPathPathString'},
    {Name: 'cloadPlugin_inValidPluginPathInteger', Actual: tst_con.cloadPlugin_inValidPluginPathInteger, Expected: 'loadPlugin_inValidPluginPathInteger'},
    {Name: 'cloadPlugin_inValidPluginPathBoolean', Actual: tst_con.cloadPlugin_inValidPluginPathBoolean, Expected: 'loadPlugin_inValidPluginPathBoolean'},
    {Name: 'cloadPlugin_inValidPluginPathUndefined', Actual: tst_con.cloadPlugin_inValidPluginPathUndefined, Expected: 'loadPlugin_inValidPluginPathUndefined'},
    {Name: 'cloadPlugin_inValidPluginPathNaN', Actual: tst_con.cloadPlugin_inValidPluginPathNaN, Expected: 'loadPlugin_inValidPluginPathNaN'},

    // loadPlugins
    {Name: 'cloadPlugins_validPluginsPathsData', Actual: tst_con.cloadPlugins_valiPluginsPathsdData, Expected: 'loadPlugins_validPluginsPathsData'},
    {Name: 'cloadPlugins_inValidPluginPathString', Actual: tst_con.cloadPlugins_inValidPluginPathString, Expected: 'loadPlugins_inValidPluginPathString'},
    {Name: 'cloadPlugins_inValidPluginPathInteger', Actual: tst_con.cloadPlugins_inValidPluginPathInteger, Expected: 'loadPlugins_inValidPluginPathInteger'},
    {Name: 'cloadPlugins_inValidPluginPathBoolean', Actual: tst_con.cloadPlugins_inValidPluginPathBoolean, Expected: 'loadPlugins_inValidPluginPathBoolean'},
    {Name: 'cloadPlugins_inValidPluginPathUndefined', Actual: tst_con.cloadPlugins_inValidPluginPathUndefined, Expected: 'loadPlugins_inValidPluginPathUndefined'},
    {Name: 'cloadPlugins_inValidPluginPathNaN', Actual: tst_con.cloadPlugins_inValidPluginPathNaN, Expected: 'loadPlugins_inValidPluginPathNaN'},

    // loadPluginsFromRegistry
    {Name: 'cloadPluginsFromRegistry_validData', Actual: tst_con.cloadPluginsFromRegistry_validData, Expected: 'loadPluginsFromRegistry_validData'},

    // unloadPlugin
    {Name: 'cunloadPlugin_validData', Actual: tst_con.cunloadPlugin_validData, Expected: 'unloadPlugin_validData'},
    {Name: 'cunloadPlugin_inValidPluginNameString', Actual: tst_con.cunloadPlugin_inValidPluginNameString, Expected: 'unloadPlugin_inValidPluginNameString'},
    {Name: 'cunloadPlugin_inValidPluginNameInteger', Actual: tst_con.cunloadPlugin_inValidPluginNameInteger, Expected: 'unloadPlugin_inValidPluginNameInteger'},
    {Name: 'cunloadPlugin_inValidPluginNameBoolean', Actual: tst_con.cunloadPlugin_inValidPluginNameBoolean, Expected: 'unloadPlugin_inValidPluginNameBoolean'},
    {Name: 'cunloadPlugin_inValidPluginNameUndefined', Actual: tst_con.cunloadPlugin_inValidPluginNameUndefined, Expected: 'unloadPlugin_inValidPluginNameUndefined'},
    {Name: 'cunloadPlugin_inValidPluginNameNaN', Actual: tst_con.cunloadPlugin_inValidPluginNameNaN, Expected: 'unloadPlugin_inValidPluginNameNaN'},

    // unloadPlugins
    {Name: 'cunloadPlugins_validPluginNamesData', Actual: tst_con.cunloadPlugins_validPluginNamesData, Expected: 'unloadPlugins_validPluginNamesData'},
    {Name: 'cunloadPlugins_inValidPluginNamesString', Actual: tst_con.cunloadPlugins_inValidPluginNamesString, Expected: 'unloadPlugins_inValidPluginNamesString'},
    {Name: 'cunloadPlugins_inValidPluginNamesInteger', Actual: tst_con.cunloadPlugins_inValidPluginNamesInteger, Expected: 'unloadPlugins_inValidPluginNamesInteger'},
    {Name: 'cunloadPlugins_inValidPluginNamesBoolean', Actual: tst_con.cunloadPlugins_inValidPluginNamesBoolean, Expected: 'unloadPlugins_inValidPluginNamesBoolean'},
    {Name: 'cunloadPlugins_inValidPluginNamesUndefined', Actual: tst_con.cunloadPlugins_inValidPluginNamesUndefined, Expected: 'unloadPlugins_inValidPluginNamesUndefined'},
    {Name: 'cunloadPlugins_inValidPluginNamesNaN', Actual: tst_con.cunloadPlugins_inValidPluginNamesNaN, Expected: 'unloadPlugins_inValidPluginNamesNaN'},

    // unloadAllPlugins
    {Name: 'cunloadAllPlugins_validData', Actual: tst_con.cunloadAllPlugins_validData, Expected: 'unloadAllPlugins_validData'},
    {Name: 'cunloadAllPlugins_emptyData', Actual: tst_con.cunloadAllPlugins_emptyData, Expected: 'unloadAllPlugins_emptyData'},

    // getPluginsRegistryPath
    {Name: 'cgetPluginsRegistryPath_validData', Actual: tst_con.cgetPluginsRegistryPath_validData, Expected: 'getPluginsRegistryPath_validData'},

    // loadPluginResourceData 
    {Name: 'cloadPluginResourceData_validConfigurationData', Actual: tst_con.cloadPluginResourceData_validConfigurationData, Expected: 'loadPluginResourceData_validConfigurationData'},
    {Name: 'cloadPluginResourceData_validCommanderAliasesData', Actual: tst_con.cloadPluginResourceData_validCommanderAliasesData, Expected: 'loadPluginResourceData_validCommanderAliasesData'},
    {Name: 'cloadPluginResourceData_validWorkflowsData', Actual: tst_con.cloadPluginResourceData_validWorkflowsData, Expected: 'loadPluginResourceData_validWorkflowsData'},
    {Name: 'cloadPluginResourceData_validThemesData', Actual: tst_con.cloadPluginResourceData_validThemesData, Expected: 'loadPluginResourceData_validThemesData'},
    {Name: 'cloadPluginResourceData_inValidContextNameString', Actual: tst_con.cloadPluginResourceData_inValidContextNameString, Expected: 'loadPluginResourceData_inValidContextNameString'},
    {Name: 'cloadPluginResourceData_inValidPluginConfigPathString', Actual: tst_con.cloadPluginResourceData_inValidPluginConfigPathString, Expected: 'loadPluginResourceData_inValidPluginConfigPathString'},
    {Name: 'cloadPluginResourceData_inValidContextNameInteger', Actual: tst_con.cloadPluginResourceData_inValidContextNameInteger, Expected: 'loadPluginResourceData_inValidContextNameInteger'},
    {Name: 'cloadPluginResourceData_inValidContextNameBoolean', Actual: tst_con.cloadPluginResourceData_inValidContextNameBoolean, Expected: 'loadPluginResourceData_inValidContextNameBoolean'},
    {Name: 'cloadPluginResourceData_inValidPluginConfigPathInteger', Actual: tst_con.cloadPluginResourceData_inValidPluginConfigPathInteger, Expected: 'loadPluginResourceData_inValidPluginConfigPathInteger'},
    {Name: 'cloadPluginResourceData_inValidPluginConfigPathBoolean', Actual: tst_con.cloadPluginResourceData_inValidPluginConfigPathBoolean, Expected: 'loadPluginResourceData_inValidPluginConfigPathBoolean'},
    {Name: 'cloadPluginResourceData_inValidContextNameUndefined', Actual: tst_con.cloadPluginResourceData_inValidContextNameUndefined, Expected: 'loadPluginResourceData_inValidContextNameUndefined'},
    {Name: 'cloadPluginResourceData_inValidContextNameNaN', Actual: tst_con.cloadPluginResourceData_inValidContextNameNaN, Expected: 'loadPluginResourceData_inValidContextNameNaN'},
    {Name: 'cloadPluginResourceData_inValidPluginConfigPathUndefined', Actual: tst_con.cloadPluginResourceData_inValidPluginConfigPathUndefined, Expected: 'loadPluginResourceData_inValidPluginConfigPathUndefined'},
    {Name: 'cloadPluginResourceData_inValidPluginConfigPathNaN', Actual: tst_con.cloadPluginResourceData_inValidPluginConfigPathNaN, Expected: 'loadPluginResourceData_inValidPluginConfigPathNaN'},

    // loadAllJsonData
    {Name: 'cloadAllJsonData_validData', Actual: tst_con.cloadAllJsonData_validData, Expected: 'loadAllJsonData_validData'},
    {Name: 'cloadAllJsonData_inValidDataPathString', Actual: tst_con.cloadAllJsonData_inValidDataPathString, Expected: 'loadAllJsonData_inValidDataPathString'},
    {Name: 'cloadAllJsonData_inValidContextNameString', Actual: tst_con.cloadAllJsonData_inValidContextNameString, Expected: 'loadAllJsonData_inValidContextNameString'},
    {Name: 'cloadAllJsonData_inValidDataPathInteger', Actual: tst_con.cloadAllJsonData_inValidDataPathInteger, Expected: 'loadAllJsonData_inValidDataPathInteger'},
    {Name: 'cloadAllJsonData_inValidDataPathBoolean', Actual: tst_con.cloadAllJsonData_inValidDataPathBoolean, Expected: 'loadAllJsonData_inValidDataPathBoolean'},
    {Name: 'cloadAllJsonData_inValidContextNameInteger', Actual: tst_con.cloadAllJsonData_inValidContextNameInteger, Expected: 'loadAllJsonData_inValidContextNameInteger'},
    {Name: 'cloadAllJsonData_inValidContextNameBoolean', Actual: tst_con.cloadAllJsonData_inValidContextNameBoolean, Expected: 'loadAllJsonData_inValidContextNameBoolean'},
    {Name: 'cloadAllJsonData_inValidDataPathUndefined', Actual: tst_con.cloadAllJsonData_inValidDataPathUndefined, Expected: 'loadAllJsonData_inValidDataPathUndefined'},
    {Name: 'cloadAllJsonData_inValidDataPathNaN', Actual: tst_con.cloadAllJsonData_inValidDataPathNaN, Expected: 'loadAllJsonData_inValidDataPathNaN'},
    {Name: 'cloadAllJsonData_inValidContextNameUndefined', Actual: tst_con.cloadAllJsonData_inValidContextNameUndefined, Expected: 'loadAllJsonData_inValidContextNameUndefined'},
    {Name: 'cloadAllJsonData_inValidContextNameNaN', Actual: tst_con.cloadAllJsonData_inValidContextNameNaN, Expected: 'loadAllJsonData_inValidContextNameNaN'},

    // storeData
    {Name: 'cstoreData_validData', Actual: tst_con.cstoreData_validData, Expected: 'storeData_validData'},
    {Name: 'cstoreData_inValidDataName', Actual: tst_con.cstoreData_inValidDataName, Expected: 'storeData_inValidDataName'},
    {Name: 'cstoreData_inValidDataNameInteger', Actual: tst_con.cstoreData_inValidDataNameInteger, Expected: 'storeData_inValidDataNameInteger'},
    {Name: 'cstoreData_inValidDataNameBoolean', Actual: tst_con.cstoreData_inValidDataNameBoolean, Expected: 'storeData_inValidDataNameBoolean'},
    {Name: 'cstoreData_inValidDataNameUndefined', Actual: tst_con.cstoreData_inValidDataNameUndefined, Expected: 'storeData_inValidDataNameUndefined'},
    {Name: 'cstoreData_inValidDataNameNaN', Actual: tst_con.cstoreData_inValidDataNameNaN, Expected: 'storeData_inValidDataNameNaN'},
    {Name: 'cstoreData_inValidDataUndefined', Actual: tst_con.cstoreData_inValidDataUndefined, Expected: 'storeData_inValidDataUndefined'},
    {Name: 'cstoreData_inValidDataNaN', Actual: tst_con.cstoreData_inValidDataNaN, Expected: 'storeData_inValidDataNaN'},

    // getData
    {Name: 'cgetData_validDataNameData', Actual: tst_con.cgetData_validDataNameData, Expected: 'getData_validDataNameData'},
    {Name: 'cgetData_inValidDataNameInteger', Actual: tst_con.cgetData_inValidDataNameInteger, Expected: 'getData_inValidDataNameInteger'},
    {Name: 'cgetData_inValidDataNameBoolean', Actual: tst_con.cgetData_inValidDataNameBoolean, Expected: 'getData_inValidDataNameBoolean'},
    {Name: 'cgetData_inValidDataNameUndefined', Actual: tst_con.cgetData_inValidDataNameUndefined, Expected: 'getData_inValidDataNameUndefined'},
    {Name: 'cgetData_inValidDataNameNaN', Actual: tst_con.cgetData_inValidDataNameNaN, Expected: 'getData_inValidDataNameNaN'},

    // clearData
    {Name: 'cclearData_validDataNameData', Actual: tst_con.cclearData_validDataNameData, Expected: 'clearData_validDataNameData'},
    {Name: 'cclearData_validDataNameUndefined', Actual: tst_con.cclearData_validDataNameUndefined, Expected: 'clearData_validDataNameUndefined'},
    {Name: 'cclearData_inValidDataNameInteger', Actual: tst_con.cclearData_inValidDataNameInteger, Expected: 'clearData_inValidDataNameInteger'},
    {Name: 'cclearData_inValidDataNameBoolean', Actual: tst_con.cclearData_inValidDataNameBoolean, Expected: 'clearData_inValidDataNameBoolean'},
    {Name: 'cclearData_inValidDataNameNaN', Actual: tst_con.cclearData_inValidDataNameNaN, Expected: 'clearData_inValidDataNameNaN'},

    // executeBusinessRules
    {Name: 'cexecuteBusinessRules_validData', Actual: tst_con.cexecuteBusinessRules_validData, Expected: 'executeBusinessRules_validData'},
    {Name: 'cexecuteBusinessRules_inValidInputsString', Actual: tst_con.cexecuteBusinessRules_inValidInputsString, Expected: 'executeBusinessRules_inValidInputsString'},
    {Name: 'cexecuteBusinessRules_inValidBusinessRulesString', Actual: tst_con.cexecuteBusinessRules_inValidBusinessRulesString, Expected: 'executeBusinessRules_inValidBusinessRulesString'},
    {Name: 'cexecuteBusinessRules_inValidInputsInteger', Actual: tst_con.cexecuteBusinessRules_inValidInputsInteger, Expected: 'executeBusinessRules_inValidInputsInteger'},
    {Name: 'cexecuteBusinessRules_inValidInputsBoolean', Actual: tst_con.cexecuteBusinessRules_inValidInputsBoolean, Expected: 'executeBusinessRules_inValidInputsBoolean'},
    {Name: 'cexecuteBusinessRules_inValidBusinessRulesInteger', Actual: tst_con.cexecuteBusinessRules_inValidBusinessRulesInteger, Expected: 'executeBusinessRules_inValidBusinessRulesInteger'},
    {Name: 'cexecuteBusinessRules_inValidBusinessRulesBoolean', Actual: tst_con.cexecuteBusinessRules_inValidBusinessRulesBoolean, Expected: 'executeBusinessRules_inValidBusinessRulesBoolean'},
    {Name: 'cexecuteBusinessRules_inValidInputsUndefined', Actual: tst_con.cexecuteBusinessRules_inValidInputsUndefined, Expected: 'executeBusinessRules_inValidInputsUndefined'},
    {Name: 'cexecuteBusinessRules_inValidInputsNaN', Actual: tst_con.cexecuteBusinessRules_inValidInputsNaN, Expected: 'executeBusinessRules_inValidInputsNaN'},
    {Name: 'cexecuteBusinessRules_inValidBusinessRulesUndefined', Actual: tst_con.cexecuteBusinessRules_inValidBusinessRulesUndefined, Expected: 'executeBusinessRules_inValidBusinessRulesUndefined'},
    {Name: 'cexecuteBusinessRules_inValidBusinessRulesNaN', Actual: tst_con.cexecuteBusinessRules_inValidBusinessRulesNaN, Expected: 'executeBusinessRules_inValidBusinessRulesNaN'},

    // enqueueCommand
    {Name: 'cenqueueCommand_validCommandData', Actual: tst_con.cenqueueCommand_validCommandData, Expected: 'enqueueCommand_validCommandData'},
    {Name: 'cenqueueCommand_inValidCommandString', Actual: tst_con.cenqueueCommand_inValidCommandString, Expected: 'enqueueCommand_inValidCommandString'},
    {Name: 'cenqueueCommand_inValidCommandInteger', Actual: tst_con.cenqueueCommand_inValidCommandInteger, Expected: 'enqueueCommand_inValidCommandInteger'},
    {Name: 'cenqueueCommand_inValidCommandBoolean', Actual: tst_con.cenqueueCommand_inValidCommandBoolean, Expected: 'enqueueCommand_inValidCommandBoolean'},
    {Name: 'cenqueueCommand_inValidCommandUndefined', Actual: tst_con.cenqueueCommand_inValidCommandUndefined, Expected: 'enqueueCommand_inValidCommandUndefined'},
    {Name: 'cenqueueCommand_inValidCommandNaN', Actual: tst_con.cenqueueCommand_inValidCommandNaN, Expected: 'enqueueCommand_inValidCommandNaN'},

    // isCommandQueueEmpty
    {Name: 'cisCommandQueueEmpty_validTruthyData', Actual: tst_con.cisCommandQueueEmpty_validTruthyData, Expected: 'isCommandQueueEmpty_validTruthyData'},
    {Name: 'cisCommandQueueEmpty_validFalsyData', Actual: tst_con.cisCommandQueueEmpty_validFalsyData, Expected: 'isCommandQueueEmpty_validFalsyData'},
    {Name: 'cprocessCommandQueue', Actual: tst_con.cprocessCommandQueue, Expected: 'processCommandQueue'},
    {Name: 'cprocessCommandQueue_validData', Actual: tst_con.cprocessCommandQueue_validData, Expected: 'processCommandQueue_validData'},

    // setConfigurationSetting
    {Name: 'csetConfigurationSetting_validData', Actual: tst_con.csetConfigurationSetting_validData, Expected: 'setConfigurationSetting_validData'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNamespaceString', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNamespaceString, Expected: 'setConfigurationSetting_inValidConfigurationNamespaceString'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNameString', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNameString, Expected: 'setConfigurationSetting_inValidConfigurationNameString'},
    {Name: 'csetConfigurationSetting_inValidConfigurationValueString', Actual: tst_con.csetConfigurationSetting_inValidConfigurationValueString, Expected: 'setConfigurationSetting_inValidConfigurationValueString'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNamespaceInteger', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNamespaceInteger, Expected: 'setConfigurationSetting_inValidConfigurationNamespaceInteger'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNamespaceBoolean', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNamespaceBoolean, Expected: 'setConfigurationSetting_inValidConfigurationNamespaceBoolean'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNamespaceUndefined', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNamespaceUndefined, Expected: 'setConfigurationSetting_inValidConfigurationNamespaceUndefined'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNamespaceNaN', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNamespaceNaN, Expected: 'setConfigurationSetting_inValidConfigurationNamespaceNaN'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNameInteger', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNameInteger, Expected: 'setConfigurationSetting_inValidConfigurationNameInteger'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNameBoolean', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNameBoolean, Expected: 'setConfigurationSetting_inValidConfigurationNameBoolean'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNameUndefined', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNameUndefined, Expected: 'setConfigurationSetting_inValidConfigurationNameUndefined'},
    {Name: 'csetConfigurationSetting_inValidConfigurationNameNaN', Actual: tst_con.csetConfigurationSetting_inValidConfigurationNameNaN, Expected: 'setConfigurationSetting_inValidConfigurationNameNaN'},
    {Name: 'csetConfigurationSetting_inValidConfigurationValueInteger', Actual: tst_con.csetConfigurationSetting_inValidConfigurationValueInteger, Expected: 'setConfigurationSetting_inValidConfigurationValueInteger'},
    {Name: 'csetConfigurationSetting_inValidConfigurationValueBoolean', Actual: tst_con.csetConfigurationSetting_inValidConfigurationValueBoolean, Expected: 'setConfigurationSetting_inValidConfigurationValueBoolean'},
    {Name: 'csetConfigurationSetting_inValidConfigurationValueUndefined', Actual: tst_con.csetConfigurationSetting_inValidConfigurationValueUndefined, Expected: 'setConfigurationSetting_inValidConfigurationValueUndefined'},
    {Name: 'csetConfigurationSetting_inValidConfigurationValueNaN', Actual: tst_con.csetConfigurationSetting_inValidConfigurationValueNaN, Expected: 'setConfigurationSetting_inValidConfigurationValueNaN'},
    {Name: 'csetConfigurationSetting_inValidAllUndefined', Actual: tst_con.csetConfigurationSetting_inValidAllUndefined, Expected: 'setConfigurationSetting_inValidAllUndefined'},
    {Name: 'csetConfigurationSetting_inValidAllNaN', Actual: tst_con.csetConfigurationSetting_inValidAllNaN, Expected: 'setConfigurationSetting_inValidAllNaN'},

    // getConfigurationSetting
    {Name: 'cgetConfigurationSetting_validData', Actual: tst_con.cgetConfigurationSetting_validData, Expected: 'getConfigurationSetting_validData'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNamespaceString', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceString, Expected: 'getConfigurationSetting_inValidConfigurationNamespaceString'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNameString', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNameString, Expected: 'getConfigurationSetting_inValidConfigurationNameString'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNamespaceInteger', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceInteger, Expected: 'getConfigurationSetting_inValidConfigurationNamespaceInteger'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNamespaceBoolean', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceBoolean, Expected: 'getConfigurationSetting_inValidConfigurationNamespaceBoolean'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNameInteger', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNameInteger, Expected: 'getConfigurationSetting_inValidConfigurationNameInteger'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNameBoolean', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNameBoolean, Expected: 'getConfigurationSetting_inValidConfigurationNameBoolean'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNamespaceUndefined', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceUndefined, Expected: 'getConfigurationSetting_inValidConfigurationNamespaceUndefined'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNamespaceNaN', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceNaN, Expected: 'getConfigurationSetting_inValidConfigurationNamespaceNaN'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNameUndefined', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNameUndefined, Expected: 'getConfigurationSetting_inValidConfigurationNameUndefined'},
    {Name: 'cgetConfigurationSetting_inValidConfigurationNameNaN', Actual: tst_con.cgetConfigurationSetting_inValidConfigurationNameNaN, Expected: 'getConfigurationSetting_inValidConfigurationNameNaN'},

    // consoleLog
    {Name: 'cconsoleLog_validData', Actual: tst_con.cconsoleLog_validData, Expected: 'cconsoleLog_validData'},
    {Name: 'cconsoleLog_inValidTheNamespacePrefixString', Actual: tst_con.cconsoleLog_inValidTheNamespacePrefixString, Expected: 'cconsoleLog_inValidTheNamespacePrefixString'},
    {Name: 'cconsoleLog_inValidTheFunctionNameString', Actual: tst_con.cconsoleLog_inValidTheFunctionNameString, Expected: 'cconsoleLog_inValidTheFunctionNameString'},
    {Name: 'cconsoleLog_inValidTheNamespacePrefixInteger', Actual: tst_con.cconsoleLog_inValidTheNamespacePrefixInteger, Expected: 'cconsoleLog_inValidTheNamespacePrefixInteger'},
    {Name: 'cconsoleLog_inValidTheNamespacePrefixBoolean', Actual: tst_con.cconsoleLog_inValidTheNamespacePrefixBoolean, Expected: 'cconsoleLog_inValidTheNamespacePrefixBoolean'},
    {Name: 'cconsoleLog_inValidTheNamespacePrefixUndefined', Actual: tst_con.cconsoleLog_inValidTheNamespacePrefixUndefined, Expected: 'cconsoleLog_inValidTheNamespacePrefixUndefined'},
    {Name: 'cconsoleLog_inValidTheNamespacePrefixNaN', Actual: tst_con.cconsoleLog_inValidTheNamespacePrefixNaN, Expected: 'cconsoleLog_inValidTheNamespacePrefixNaN'},
    {Name: 'cconsoleLog_inValidTheFunctionNameInteger', Actual: tst_con.cconsoleLog_inValidTheFunctionNameInteger, Expected: 'cconsoleLog_inValidTheFunctionNameInteger'},
    {Name: 'cconsoleLog_inValidTheFunctionNameBoolean', Actual: tst_con.cconsoleLog_inValidTheFunctionNameBoolean, Expected: 'cconsoleLog_inValidTheFunctionNameBoolean'},
    {Name: 'cconsoleLog_inValidTheFunctionNameUndefined', Actual: tst_con.cconsoleLog_inValidTheFunctionNameUndefined, Expected: 'cconsoleLog_inValidTheFunctionNameUndefined'},
    {Name: 'cconsoleLog_inValidTheFunctionNameNaN', Actual: tst_con.cconsoleLog_inValidTheFunctionNameNaN, Expected: 'cconsoleLog_inValidTheFunctionNameNaN'},
    {Name: 'cconsoleLog_inValidAllUndefined', Actual: tst_con.cconsoleLog_inValidAllUndefined, Expected: 'cconsoleLog_inValidAllUndefined'},
    {Name: 'cconsoleLog_inValidAllNaN', Actual: tst_con.cconsoleLog_inValidAllNaN, Expected: 'cconsoleLog_inValidAllNaN'},

    // consoleTableLog
    {Name: 'cconsoleTableLog_validData', Actual: tst_con.cconsoleTableLog_validData, Expected: 'cconsoleTableLog_validData'},
    {Name: 'cconsoleTableLog_inValidClassPathString', Actual: tst_con.cconsoleTableLog_inValidClassPathString, Expected: 'cconsoleTableLog_inValidClassPathString'},
    {Name: 'cconsoleTableLog_inValidTableDataString', Actual: tst_con.cconsoleTableLog_inValidTableDataString, Expected: 'cconsoleTableLog_inValidTableDataString'},
    {Name: 'cconsoleTableLog_inValidColumnNamesString', Actual: tst_con.cconsoleTableLog_inValidColumnNamesString, Expected: 'cconsoleTableLog_inValidColumnNamesString'},
    {Name: 'cconsoleTableLog_inValidClassPathInteger', Actual: tst_con.cconsoleTableLog_inValidClassPathInteger, Expected: 'cconsoleTableLog_inValidClassPathInteger'},
    {Name: 'cconsoleTableLog_inValidClassPathBoolean', Actual: tst_con.cconsoleTableLog_inValidClassPathBoolean, Expected: 'cconsoleTableLog_inValidClassPathBoolean'},
    {Name: 'cconsoleTableLog_inValidClassPathUndefined', Actual: tst_con.cconsoleTableLog_inValidClassPathUndefined, Expected: 'cconsoleTableLog_inValidClassPathUndefined'},
    {Name: 'cconsoleTableLog_inValidClassPathNaN', Actual: tst_con.cconsoleTableLog_inValidClassPathNaN, Expected: 'cconsoleTableLog_inValidClassPathNaN'},
    {Name: 'cconsoleTableLog_inValidTableDataInteger', Actual: tst_con.cconsoleTableLog_inValidTableDataInteger, Expected: 'cconsoleTableLog_inValidTableDataInteger'},
    {Name: 'cconsoleTableLog_inValidTableDataBoolean', Actual: tst_con.cconsoleTableLog_inValidTableDataBoolean, Expected: 'cconsoleTableLog_inValidTableDataBoolean'},
    {Name: 'cconsoleTableLog_inValidTableDataUndefined', Actual: tst_con.cconsoleTableLog_inValidTableDataUndefined, Expected: 'cconsoleTableLog_inValidTableDataUndefined'},
    {Name: 'cconsoleTableLog_inValidTableDataNaN', Actual: tst_con.cconsoleTableLog_inValidTableDataNaN, Expected: 'cconsoleTableLog_inValidTableDataNaN'},
    {Name: 'cconsoleTableLog_inValidColumnNamesInteger', Actual: tst_con.cconsoleTableLog_inValidColumnNamesInteger, Expected: 'cconsoleTableLog_inValidColumnNamesInteger'},
    {Name: 'cconsoleTableLog_inValidColumnNamesBoolean', Actual: tst_con.cconsoleTableLog_inValidColumnNamesBoolean, Expected: 'cconsoleTableLog_inValidColumnNamesBoolean'},
    {Name: 'cconsoleTableLog_inValidColumnNamesNaN', Actual: tst_con.cconsoleTableLog_inValidColumnNamesNaN, Expected: 'cconsoleTableLog_inValidColumnNamesNaN'},
    {Name: 'cconsoleTableLog_inValidAllUndefined', Actual: tst_con.cconsoleTableLog_inValidAllUndefined, Expected: 'cconsoleTableLog_inValidAllUndefined'},
    {Name: 'cconsoleTableLog_inValidAllNaN', Actual: tst_con.cconsoleTableLog_inValidAllNaN, Expected: 'cconsoleTableLog_inValidAllNaN'}
];

export const unitTestConstantsValidation = [
    {Name: 'cExpectedActualFrameworkDevName', Actual: tst_con.cExpectedActualFrameworkDevName, Expected: 'haystacks-async'},
    {Name: 'cExpectedActualFrameworkProdName', Actual: tst_con.cExpectedActualFrameworkProdName, Expected: '@haystacks/async'},
    {Name: 'cUnitTestName', Actual: tst_con.cUnitTestName, Expected: 'testHarness'},
    {Name: 'cTstDevPath', Actual: tst_con.cTstDevPath, Expected: '/src/'},
    {Name: 'cTstProdPath', Actual: tst_con.cTstProdPath, Expected: '/bin/'},
    {Name: 'cResourcesCommonPath', Actual: tst_con.cResourcesCommonPath, Expected: 'resources/'},
    {Name: 'cCommandsCommonPath', Actual: tst_con.cCommandsCommonPath, Expected: 'commands/'},
    {Name: 'cConstantsPath', Actual: tst_con.cConstantsPath, Expected: 'constants/'},
    {Name: 'cConfigurationCommonPath', Actual: tst_con.cConfigurationCommonPath, Expected: 'configuration/'},
    {Name: 'cPluginsRegistryCommonPath', Actual: tst_con.cPluginsRegistryCommonPath, Expected: 'plugins/plugins.json'},
    {Name: 'cWorkflowsCommonPath', Actual: tst_con.cWorkflowsCommonPath, Expected: 'workflows/'},
    {Name: 'cThemesCommonPath', Actual: tst_con.cThemesCommonPath, Expected: 'themes/'},
    {Name: 'cReleasePath', Actual: tst_con.cReleasePath, Expected: 'release/'}
]
