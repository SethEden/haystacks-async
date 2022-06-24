/**
 * @file function.constants.validation.js
 * @module function.constants.validation
 * @description Contains all validations for named functions in the framework.
 * @requires module:function.constants
 * @author Seth Hollingsead
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as fnc from '../../constants/function.constants.js';

/**
 * @function functionConstantsVaidation
 * @description Initializes the function constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const functionConstantsValidation = [
  // commandBroker
  {Name: 'cgetValidCommand', Actual: fnc.cgetValidCommand, Expected: 'getValidCommand'},
  {Name: 'cgetCommandArgs', Actual: fnc.cgetCommandArgs, Expected: 'getCommandArgs'},
  {Name: 'cexecuteCommand', Actual: fnc.cexecuteCommand, Expected: 'executeCommand'},

  // dataBroker
  {Name: 'cscanDataPath', Actual: fnc.cscanDataPath, Expected: 'scanDataPath'},
  {Name: 'cfindUniversalDebugConfigSetting', Actual: fnc.cfindUniversalDebugConfigSetting, Expected: 'findUniversalDebugConfigSetting'},
  {Name: 'cloadAllCsvData', Actual: fnc.cloadAllCsvData, Expected: 'loadAllCsvData'},
  {Name: 'cloadAllXmlData', Actual: fnc.cloadAllXmlData, Expected: 'loadAllXmlData'},
  {Name: 'cloadAllJsonData', Actual: fnc.cloadAllJsonData, Expected: 'loadAllJsonData'},
  {Name: 'cprocessCsvData', Actual: fnc.cprocessCsvData, Expected: 'processCsvData'},
  {Name: 'cpreprocessJsonFile', Actual: fnc.cpreprocessJsonFile, Expected: 'preprocessJsonFile'},
  {Name: 'cwriteJsonDataToFile', Actual: fnc.cwriteJsonDataToFile, Expected: 'writeJsonDataToFile'},
  {Name: 'csetupDataStorage', Actual: fnc.csetupDataStorage, Expected: 'setupDataStorage'},
  {Name: 'cstoreData', Actual: fnc.cstoreData, Expected: 'storeData'},
  {Name: 'cgetData', Actual: fnc.cgetData, Expected: 'getData'},
  {Name: 'cclearData', Actual: fnc.cclearData, Expected: 'clearData'},
  {Name: 'caddConstantsValidationData', Actual: fnc.caddConstantsValidationData, Expected: 'addConstantsValidationData'},
  {Name: 'caddDeeplyNestedConstantsValidationData', Actual: fnc.caddDeeplyNestedConstantsValidationData, Expected: 'addDeeplyNestedConstantsValidationData'},

  // ruleBroker
  {Name: 'cbootStrapBusinessRules', Actual: fnc.cbootStrapBusinessRules, Expected: 'bootStrapBusinessRules'},
  {Name: 'caddClientRules', Actual: fnc.caddClientRules, Expected: 'addClientRules'},
  {Name: 'cdoesRuleExist', Actual: fnc.cdoesRuleExist, Expected: 'doesRuleExist'},
  {Name: 'cdoAllRulesExist', Actual: fnc.cdoAllRulesExist, Expected: 'doAllRulesExist'},
  {Name: 'cprocessRules', Actual: fnc.cprocessRules, Expected: 'processRules'},

  // workflowBroker
  {Name: 'cgetWorkflow', Actual: fnc.cgetWorkflow, Expected: 'getWorkflow'},

  // rulesLibrary
  {Name: 'cinitRulesLibrary', Actual: fnc.cinitRulesLibrary, Expected: 'initRulesLibrary'},

  // commandsLibrary
  {Name: 'cinitCommandsLibrary', Actual: fnc.cinitCommandsLibrary, Expected: 'initCommandsLibrary'},

  // chiefCommander
  {Name: 'cbootStrapCommands', Actual: fnc.cbootStrapCommands, Expected: 'bootStrapCommands'},
  {Name: 'caddClientCommands', Actual: fnc.caddClientCommands, Expected: 'addClientCommands'},
  {Name: 'cloadCommandAliasesFromPath', Actual: fnc.cloadCommandAliasesFromPath, Expected: 'loadCommandAliasesFromPath'},
  {Name: 'cenqueueCommand', Actual: fnc.cenqueueCommand, Expected: 'enqueueCommand'},
  {Name: 'cisCommandQueueEmpty', Actual: fnc.cisCommandQueueEmpty, Expected: 'isCommandQueueEmpty'},
  {Name: 'cprocessCommandQueue', Actual: fnc.cprocessCommandQueue, Expected: 'processCommandQueue'},

  // chiefConfiguration
  {Name: 'csetupConfiguration', Actual: fnc.csetupConfiguration, Expected: 'setupConfiguration'},

  // chiefData
  {Name: 'csearchForUniversalDebugConfigSetting', Actual: fnc.csearchForUniversalDebugConfigSetting, Expected: 'searchForUniversalDebugConfigSetting'},
  {Name: 'cgetAndProcessCsvData', Actual: fnc.cgetAndProcessCsvData, Expected: 'getAndProcessCsvData'},
  {Name: 'cgetAndProcessXmlData', Actual: fnc.cgetAndProcessXmlData, Expected: 'getAndProcessXmlData'},
  {Name: 'csetupAllCsvData', Actual: fnc.csetupAllCsvData, Expected: 'setupAllCsvData'},
  {Name: 'csetupAllXmlData', Actual: fnc.csetupAllXmlData, Expected: 'setupAllXmlData'},
  {Name: 'csetupAllJsonConfigData', Actual: fnc.csetupAllJsonConfigData, Expected: 'setupAllJsonConfigData'},
  {Name: 'cinitializeConstantsValidationData', Actual: fnc.cinitializeConstantsValidationData, Expected: 'initializeConstantsValidationData'},

  // chiefWorkflow
  {Name: 'cloadCommandWorkflowsFromPath', Actual: fnc.cloadCommandWorkflowsFromPath, Expected: 'loadCommandWorkflowsFromPath'},

  // warden
  {Name: 'cprocessRootPath', Actual: fnc.cprocessRootPath, Expected: 'processRootPath'},
  {Name: 'cinitFrameworkSchema', Actual: fnc.cinitFrameworkSchema, Expected: 'initFrameworkSchema'},
  {Name: 'cmergeClientBusienssRules', Actual: fnc.cmergeClientBusienssRules, Expected: 'mergeClientBusinessRules'},
  {Name: 'cmergeClientCommands', Actual: fnc.cmergeClientCommands, Expected: 'mergeClientCommands'},
  {Name: 'cloadCommandAliases', Actual: fnc.cloadCommandAliases, Expected: 'loadCommandAliases'},
  {Name: 'cexecuteBusinessRule', Actual: fnc.cexecuteBusinessRule, Expected: 'executeBusinessRule'},

  // colorizer
  {Name: 'ccolorizeMessageSimple', Actual: fnc.ccolorizeMessageSimple, Expected: 'colorizeMessageSimple'},
  {Name: 'ccolorizeMessage', Actual: fnc.ccolorizeMessage, Expected: 'colorizeMessage'},
  {Name: 'caggregateStyleSetting', Actual: fnc.caggregateStyleSetting, Expected: 'aggregateStyleSetting'},
  {Name: 'cgetFontStyleSettingsFromSetting', Actual: fnc.cgetFontStyleSettingsFromSetting, Expected: 'getFontStyleSettingsFromSetting'},
  {Name: 'cgetColorStyleSettingFromSetting', Actual: fnc.cgetColorStyleSettingFromSetting, Expected: 'getColorStyleSettingFromSetting'},
  {Name: 'cgetNamedColorData', Actual: fnc.cgetNamedColorData, Expected: 'getNamedColorData'},
  {Name: 'csetUnderlineFontStyleOnMessageComponentAccordingToSetting', Actual: fnc.csetUnderlineFontStyleOnMessageComponentAccordingToSetting, Expected: 'setUnderlineFontStyleOnMessageComponentAccordingToSetting'},
  {Name: 'csetBoldFontStyleOnMessageComponentAccordingToSetting', Actual: fnc.csetBoldFontStyleOnMessageComponentAccordingToSetting, Expected: 'setBoldFontStyleOnMessageComponentAccordingToSetting'},
  {Name: 'csetFontForegroundColorOnMessageComponentAccordingToSetting', Actual: fnc.csetFontForegroundColorOnMessageComponentAccordingToSetting, Expected: 'setFontForegroundColorOnMessageComponentAccordingToSetting'},
  {Name: 'csetFontBackgroundColorOnMessageComponentAccordingToSetting', Actual: fnc.csetFontBackgroundColorOnMessageComponentAccordingToSetting, Expected: 'setFontBackgroundColorOnMessageComponentAccordingToSetting'},
  {Name: 'cremoveFontStyles', Actual: fnc.cremoveFontStyles, Expected: 'removeFontStyles'},

  // configurator
  {Name: 'csetConfigurationSetting', Actual: fnc.csetConfigurationSetting, Expected: 'setConfigurationSetting'},
  {Name: 'cgetConfigurationSetting', Actual: fnc.cgetConfigurationSetting, Expected: 'getConfigurationSetting'},
  {Name: 'cprocessConfigurationNameRules', Actual: fnc.cprocessConfigurationNameRules, Expected: 'processConfigurationNameRules'},
  {Name: 'cprocessConfigurationNamespaceRules', Actual: fnc.cprocessConfigurationNamespaceRules, Expected: 'processConfigurationNamespaceRules'},
  {Name: 'cprocessConfigurationValueRules', Actual: fnc.cprocessConfigurationValueRules, Expected: 'processConfigurationValueRules'},

  // fileOperations
  {Name: 'cgetXmlData', Actual: fnc.cgetXmlData, Expected: 'getXmlData'},
  {Name: 'cgetCsvData', Actual: fnc.cgetCsvData, Expected: 'getCsvData'},
  {Name: 'cgetJsonData', Actual: fnc.cgetJsonData, Expected: 'getJsonData'},
  {Name: 'cwriteJsonData', Actual: fnc.cwriteJsonData, Expected: 'writeJsonData'},
  {Name: 'creadDirectoryContents', Actual: fnc.creadDirectoryContents, Expected: 'readDirectoryContents'},
  {Name: 'cscanDirectoryContents', Actual: fnc.cscanDirectoryContents, Expected: 'scanDirectoryContents'},
  {Name: 'creadDirectorySynchronously', Actual: fnc.creadDirectorySynchronously, Expected: 'readDirectorySynchronously'},
  {Name: 'ccopyAllFilesAndFoldersFromFolderToFolder', Actual: fnc.ccopyAllFilesAndFoldersFromFolderToFolder, Expected: 'copyAllFilesAndFoldersFromFolderToFolder'},
  {Name: 'cbuildReleasePackage', Actual: fnc.cbuildReleasePackage, Expected: 'buildReleasePackage'},
  {Name: 'ccreateZipArchive', Actual: fnc.ccreateZipArchive, Expected: 'createZipArchive'},
  {Name: 'ccleanRootPath', Actual: fnc.ccleanRootPath, Expected: 'cleanRootPath'},
  {Name: 'ccopyFileSync', Actual: fnc.ccopyFileSync, Expected: 'copyFileSync'},
  {Name: 'ccopyFolderRecursiveSync', Actual: fnc.ccopyFolderRecursiveSync, Expected: 'copyFolderRecursiveSync'},
  {Name: 'cappendMessageToFile', Actual: fnc.cappendMessageToFile, Expected: 'appendMessageToFile'},

  // lexical
  {Name: 'cparseBusinessRuleArgument', Actual: fnc.cparseBusinessRuleArgument, Expected: 'parseBusinessRuleArgument'},
  {Name: 'canalyzeArgument', Actual: fnc.canalyzeArgument, Expected: 'analyzeArgument'},
  {Name: 'canalyzeForRegularExpression', Actual: fnc.canalyzeForRegularExpression, Expected: 'analyzeForRegularExpression'},
  {Name: 'cparseArgumentAsRegularExpression', Actual: fnc.cparseArgumentAsRegularExpression, Expected: 'parseArgumentAsRegularExpression'},
  {Name: 'cparseArgumentAsArray', Actual: fnc.cparseArgumentAsArray, Expected: 'parseArgumentAsArray'},
  {Name: 'cremoveStringLiteralTagsFromArray', Actual: fnc.cremoveStringLiteralTagsFromArray, Expected: 'removeStringLiteralTagsFromArray'},

  // loggers
  {Name: 'cconsoleLog', Actual: fnc.cconsoleLog, Expected: 'consoleLog'},
  {Name: 'cconsoleTableLog', Actual: fnc.cconsoleTableLog, Expected: 'consoleTableLog'},
  {Name: 'cconstantsValidationSummaryLog', Actual: fnc.cconstantsValidationSummaryLog, Expected: 'constantsValidationSummaryLog'},
  {Name: 'cgetLogFileNameAndPath', Actual: fnc.cgetLogFileNameAndPath, Expected: 'getLogFileNameAndPath'},
  {Name: 'cprintMessageToFile', Actual: fnc.cprintMessageToFile, Expected: 'printMessageToFile'},

  // prompt
  {Name: 'cprompt', Actual: fnc.cprompt, Expected: 'prompt'},

  // timers
  {Name: 'cgetNowMoment', Actual: fnc.cgetNowMoment, Expected: 'getNowMoment'},
  {Name: 'ccomputeDeltaTime', Actual: fnc.ccomputeDeltaTime, Expected: 'computeDeltaTime'},
  {Name: 'creformatDeltaTime', Actual: fnc.creformatDeltaTime, Expected: 'reformatDeltaTime'},
  {Name: 'csleep', Actual: fnc.csleep, Expected: 'sleep'},

  // queue
  {Name: 'cinitQueue', Actual: fnc.cinitQueue, Expected: 'initQueue'},
  {Name: 'cdequeue', Actual: fnc.cdequeue, Expected: 'dequeue'},
  {Name: 'cenqueue', Actual: fnc.cenqueue, Expected: 'enqueue'},
  {Name: 'cisEmpty', Actual: fnc.cisEmpty, Expected: 'isEmpty'},
  {Name: 'cqueueFront', Actual: fnc.cqueueFront, Expected: 'queueFront'},
  {Name: 'cqueueSize', Actual: fnc.cqueueSize, Expected: 'queueSize'},

  // stack
  {Name: 'cinitStack', Actual: fnc.cinitStack, Expected: 'initStack'},
  {Name: 'cclearStack', Actual: fnc.cclearStack, Expected: 'clearStack'},
  {Name: 'cpush', Actual: fnc.cpush, Expected: 'push'},
  {Name: 'cpop', Actual: fnc.cpop, Expected: 'pop'},
  {Name: 'clength', Actual: fnc.clength, Expected: 'length'},
  {Name: 'ccontains', Actual: fnc.ccontains, Expected: 'contains'},
  {Name: 'cprint', Actual: fnc.cprint, Expected: 'print'},

  // main
  {Name: 'cinitFramework', Actual: fnc.cinitFramework, Expected: 'initFramework'}
];
