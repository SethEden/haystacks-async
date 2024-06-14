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
    {Name: 'cbootStrapCommands', Actual: wrd.cbootStrapCommands, Expected: 'bootStrapCommands'},
    {Name: 'cresetCommands', Actual: wrd.cresetCommands, Expected: 'resetCommands'},
    {Name: 'caddClientCommands', Actual: wrd.caddClientCommands, Expected: 'addClientCommands'},
    {Name: 'caddPluginCommands', Actual: wrd.caddPluginCommands, Expected: 'addPluginCommands'},

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
    {Name: 'cbootStrapCommands_validData', Actual: wrd.cbootStrapCommands_validData, Expected: 'bootStrapCommands_validData'},

    // resetCommands
    {Name: 'cresetCommands_validData', Actual: wrd.cresetCommands_validData, Expected: 'resetCommands_validData'},

    // addClientCommands
    {Name: 'caddClientCommands_validClientCommandsData', Actual: wrd.caddClientCommands_validClientCommandsData, Expected: 'addClientCommands_validClientCommandsData'},
    {Name: 'caddClientCommands_inValidClientCommandsString', Actual: wrd.caddClientCommands_inValidClientCommandsString, Expected: 'addClientCommands_inValidClientCommandsString'},
    {Name: 'caddClientCommands_inValidClientCommandsInteger', Actual: wrd.caddClientCommands_inValidClientCommandsInteger, Expected: 'addClientCommands_inValidClientCommandsInteger'},
    {Name: 'caddClientCommands_inValidClientCommandsBoolean', Actual: wrd.caddClientCommands_inValidClientCommandsBoolean, Expected: 'addClientCommands_inValidClientCommandsBoolean'},
    {Name: 'caddClientCommands_inValidClientCommandsUndefined', Actual: wrd.caddClientCommands_inValidClientCommandsUndefined, Expected: 'addClientCommands_inValidClientCommandsUndefined'},
    {Name: 'caddClientCommands_inValidClientCommandsNaN', Actual: wrd.caddClientCommands_inValidClientCommandsNaN, Expected: 'addClientCommands_inValidClientCommandsNaN'},

    // addPluginCommands
    {Name: 'caddPluginCommands_validData', Actual: wrd.caddPluginCommands_validData, Expected: 'addPluginCommands_validData'},
    {Name: 'caddPluginCommands_inValidPluginNameString', Actual: wrd.caddPluginCommands_inValidPluginNameString, Expected: 'addPluginCommands_inValidPluginNameString'},
    {Name: 'caddPluginCommands_inValidPluginCommandsString', Actual: wrd.caddPluginCommands_inValidPluginCommandsString, Expected: 'addPluginCommands_inValidPluginCommandsString'},
    {Name: 'caddPluginCommands_inValidPluginNameInteger', Actual: wrd.caddPluginCommands_inValidPluginNameInteger, Expected: 'addPluginCommands_inValidPluginNameInteger'},
    {Name: 'caddPluginCommands_inValidPluginNameBoolean', Actual: wrd.caddPluginCommands_inValidPluginNameBoolean, Expected: 'addPluginCommands_inValidPluginNameBoolean'},
    {Name: 'caddPluginCommands_inValidPluginCommandsInteger', Actual: wrd.caddPluginCommands_inValidPluginCommandsInteger, Expected: 'addPluginCommands_inValidPluginCommandsInteger'},
    {Name: 'caddPluginCommands_inValidPluginCommandsBoolean', Actual: wrd.caddPluginCommands_inValidPluginCommandsBoolean, Expected: 'addPluginCommands_inValidPluginCommandsBoolean'},
    {Name: 'caddPluginCommands_inValidPluginNameUndefined', Actual: wrd.caddPluginCommands_inValidPluginNameUndefined, Expected: 'addPluginCommands_inValidPluginNameUndefined'},
    {Name: 'caddPluginCommands_inValidPluginNameNaN', Actual: wrd.caddPluginCommands_inValidPluginNameNaN, Expected: 'addPluginCommands_inValidPluginNameNaN'},
    {Name: 'caddPluginCommands_inValidPluginCommandsUndefined', Actual: wrd.caddPluginCommands_inValidPluginCommandsUndefined, Expected: 'addPluginCommands_inValidPluginCommandsUndefined'},
    {Name: 'caddPluginCommands_inValidPluginCommandsNaN', Actual: wrd.caddPluginCommands_inValidPluginCommandsNaN, Expected: 'addPluginCommands_inValidPluginCommandsNaN'},

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
