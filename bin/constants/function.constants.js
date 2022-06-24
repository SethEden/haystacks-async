/**
 * @file function.constants.js
 * @module function.constants
 * @description Contains all re-usable function name constants, organized by file.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:phonic.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/12/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as phn from './phonic.constants.js';
import * as wrd from './word.constants.js';

// commandBroker
// let cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands; // bootStrapCommands // Duplicate definition in the chiefCommander
// smuggle something caddClientCommands = wrd.c_add + wrd.cClient + wrd.cCommands; // addClientCommands
export const cgetValidCommand = wrd.cget + wrd.cValid + wrd.cCommand; // getValidCommand
export const cgetCommandArgs = wrd.cget + wrd.cCommand + gen.cArgs; // getCommandArgs
export const cexecuteCommand = wrd.cexecute + wrd.cCommand; // executeCommand

// dataBroker
export const cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath; // scanDataPath
export const cfindUniversalDebugConfigSetting = wrd.cfind + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting; // findUniversalDebugConfigSetting
export const cloadAllCsvData = wrd.cload + phn.cAll + gen.cCsv + wrd.cData; // loadAllCsvData
export const cloadAllXmlData = wrd.cload + phn.cAll + gen.cXml + wrd.cData; // loadAllXmlData
export const cloadAllJsonData = wrd.cload + phn.cAll + gen.cJson + wrd.cData; // loadAllJsonData
export const cprocessCsvData = wrd.cprocess + gen.cCsv + wrd.cData; // processCsvData
export const cpreprocessJsonFile = wrd.cpreprocess + gen.cJson + wrd.cFile; // preprocessJsonFile
export const cwriteJsonDataToFile = wrd.cwrite + gen.cJson + wrd.cData + wrd.cTo + wrd.cFile; // writeJsonDataToFile
export const csetupDataStorage = wrd.csetup + wrd.cData + wrd.cStorage; // setupDataStorage
export const cstoreData = wrd.cstore + wrd.cData; // storeData
export const cgetData = wrd.cget + wrd.cData; // getData
export const cclearData = wrd.cclear + wrd.cData; // clearData
// initializeConstantsValidationData Already created in the ChiefData file.
export const caddConstantsValidationData = wrd.c_add + wrd.cConstants + wrd.cValidation + wrd.cData; // addConstantsValidationData
export const caddDeeplyNestedConstantsValidationData = wrd.c_add + wrd.cDeeply + wrd.cNested + wrd.cConstants + wrd.cValidation + wrd.cData; // addDeeplyNestedConstantsValidationData

// ruleBroker
export const cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules; // bootStrapBusinessRules
export const caddClientRules = wrd.c_add + wrd.cClient + wrd.cRules; // addClientRules
export const cdoesRuleExist = wrd.cdoes + wrd.cRule + wrd.cExist; // doesRuleExist
export const cdoAllRulesExist = wrd.cdo + wrd.cAll + wrd.cRules + wrd.cExist; // doAllRulesExist
export const cprocessRules = wrd.cprocess + wrd.cRules; // processRules

// workflowBroker
export const cgetWorkflow = wrd.cget + wrd.cWorkflow; // getWorkflow

// rulesLibrary
export const cinitRulesLibrary = gen.cinit + wrd.cRules + wrd.cLibrary; // initRulesLibrary

// commandsLibrary
export const cinitCommandsLibrary = gen.cinit + wrd.cCommands + wrd.cLibrary; // initCommandsLibrary

// chiefCommander
export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands; // bootStrapCommands
export const caddClientCommands = wrd.c_add + wrd.cClient + wrd.cCommands; // addClientCommands
export const cloadCommandAliasesFromPath = wrd.cload + wrd.cCommand + wrd.cAliases + wrd.cFrom + wrd.cPath; // loadCommandAliasesFromPath
export const cenqueueCommand = wrd.cenqueue + wrd.cCommand; // enqueueCommand
export const cisCommandQueueEmpty = wrd.cis + wrd.cCommand + wrd.cQueue + wrd.cEmpty; // isCommandQueueEmpty
export const cprocessCommandQueue = wrd.cprocess + wrd.cCommand + wrd.cQueue; // processCommandQueue

// chiefConfiguration
export const csetupConfiguration = wrd.csetup + wrd.cConfiguration; // setupConfiguration

// chiefData
export const csearchForUniversalDebugConfigSetting = wrd.csearch + wrd.cFor + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting; // searchForUniversalDebugConfigSetting
export const cgetAndProcessCsvData = wrd.cget + wrd.cAnd + wrd.cProcess + gen.cCsv + wrd.cData; // getAndProcessCsvData
export const cgetAndProcessXmlData = wrd.cget + wrd.cAnd + wrd.cProcess + gen.cXml + wrd.cData; // getAndProcessXmlData
export const csetupAllCsvData = wrd.csetup + wrd.cAll + gen.cCsv + wrd.cData; // setupAllCsvData
export const csetupAllXmlData = wrd.csetup + wrd.cAll + gen.cXml + wrd.cData; // setupAllXmlData
export const csetupAllJsonConfigData = wrd.csetup + phn.cAll + gen.cJson + wrd.cConfig + wrd.cData; // setupAllJsonConfigData
export const cinitializeConstantsValidationData = wrd.cinitialize + wrd.cConstants + wrd.cValidation + wrd.cData; // initializeConstantsValidationData
// smuggle something caddConstantsValidationData // Already declared in the dataBroker section.

// chiefWorkflow
export const cloadCommandWorkflowsFromPath = wrd.cload + wrd.cCommand + wrd.cWorkflows + wrd.cFrom + wrd.cPath; // loadCommandWorkflowsFromPath

// warden
export const cprocessRootPath = wrd.cprocess + wrd.cRoot + wrd.cPath; // processRootPath
export const cinitFrameworkSchema = gen.cinit + wrd.cFramework + wrd.cSchema; // initFrameworkSchema
export const cmergeClientBusienssRules = wrd.cmerge + wrd.cClient + wrd.cBusiness + wrd.cRules; // mergeClientBusinessRules
export const cmergeClientCommands = wrd.cmerge + wrd.cClient + wrd.cCommands; // mergeClientCommands
export const cloadCommandAliases = wrd.cload + wrd.cCommand + wrd.cAliases; // loadCommandAliases
export const cexecuteBusinessRule = wrd.cexecute + wrd.cBusiness + wrd.cRule; // executeBusinessRule
// smuggle something cenqueueCommand = wrd.cenqueue + wrd.cCommand; // enqueueCommand
// smuggle something cisCommandQueueEmpty = wrd.cis + wrd.cCommand + wrd.cQueue + wrd.cEmpty; // isCommandQueueEmpty
// smuggle something cprocessCommandQueue = wrd.cprocess + wrd.cCommand + wrd.cQueue; // processCommandQueue
// smuggle something csetConfigurationSetting = wrd.cset + wrd.cConfiguration + wrd.cSetting; // setConfigurationSetting
// smuggle something cgetConfigurationSetting = wrd.cget + wrd.cConfiguration + wrd.cSetting; // getConfigurationSetting
// smuggle something cconsoleLog = wrd.cconsole + wrd.cLog; // consoleLog
// smuggle something csleep = wrd.csleep; // sleep

// colorizer
export const ccolorizeMessageSimple = wrd.ccolorize + wrd.cMessage + wrd.cSimple; // colorizeMessageSimple
export const ccolorizeMessage = wrd.ccolorize + wrd.cMessage; // colorizeMessage
export const caggregateStyleSetting = wrd.caggregate + wrd.cStyle + wrd.cSetting; // aggregateStyleSetting
export const cgetFontStyleSettingsFromSetting = wrd.cget + wrd.cFont + wrd.cStyle + wrd.cSettings + wrd.cFrom + wrd.cSetting; // getFontStyleSettingsFromSetting
export const cgetColorStyleSettingFromSetting = wrd.cget + wrd.cColor + wrd.cStyle + wrd.cSetting + wrd.cFrom + wrd.cSetting; // getColorStyleSettingFromSetting
export const cgetNamedColorData = wrd.cget + wrd.cNamed + wrd.cColor + wrd.cData; // getNamedColorData
export const csetUnderlineFontStyleOnMessageComponentAccordingToSetting = wrd.cset + wrd.cUnderline + wrd.cFont + wrd.cStyle + bas.cOn + wrd.cMessage + wrd.cComponent + wrd.cAccording + wrd.cTo + wrd.cSetting; // setUnderlineFontStyleOnMessageComponentAccordingToSetting
export const csetBoldFontStyleOnMessageComponentAccordingToSetting = wrd.cset + wrd.cBold + wrd.cFont + wrd.cStyle + bas.cOn + wrd.cMessage + wrd.cComponent + wrd.cAccording + wrd.cTo + wrd.cSetting; // setBoldFontStyleOnMessageComponentAccordingToSetting
export const csetFontForegroundColorOnMessageComponentAccordingToSetting = wrd.cset + wrd.cFont + wrd.cForeground + wrd.cColor + bas.cOn + wrd.cMessage + wrd.cComponent + wrd.cAccording + wrd.cTo + wrd.cSetting; // setFontForegroundColorOnMessageComponentAccordingToSetting
export const csetFontBackgroundColorOnMessageComponentAccordingToSetting = wrd.cset + wrd.cFont + wrd.cBackground + wrd.cColor + bas.cOn + wrd.cMessage + wrd.cComponent + wrd.cAccording + wrd.cTo + wrd.cSetting; // setFontBackgroundColorOnMessageComponentAccordingToSetting
export const cremoveFontStyles = wrd.cremove + wrd.cFont + wrd.cStyles; // removeFontStyles

// configurator
export const csetConfigurationSetting = wrd.cset + wrd.cConfiguration + wrd.cSetting; // setConfigurationSetting
export const cgetConfigurationSetting = wrd.cget + wrd.cConfiguration + wrd.cSetting; // getConfigurationSetting
export const cprocessConfigurationNameRules = wrd.cprocess + wrd.cConfiguration + wrd.cName + wrd.cRules; // processConfigurationNameRules
export const cprocessConfigurationNamespaceRules = wrd.cprocess + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cRules; // processConfigurationNamespaceRules
export const cprocessConfigurationValueRules = wrd.cprocess + wrd.cConfiguration + wrd.cValue + wrd.cRules; // processConfigurationValueRules

// fileOperations
export const cgetXmlData = wrd.cget + gen.cXml + wrd.cData; // getXmlData
export const cgetCsvData = wrd.cget + gen.cCsv + wrd.cData; // getCsvData
export const cgetJsonData = wrd.cget + gen.cJson + wrd.cData; // getJsonData
export const cwriteJsonData = wrd.cwrite + gen.cJson + wrd.cData; // writeJsonData
export const creadDirectoryContents = wrd.cread + wrd.cDirectory + wrd.cContents; // readDirectoryContents
export const cscanDirectoryContents = wrd.cscan + wrd.cDirectory + wrd.cContents; // scanDirectoryContents
export const creadDirectorySynchronously = wrd.cread + wrd.cDirectory + wrd.cSynchronously; // readDirectorySynchronously
export const ccopyAllFilesAndFoldersFromFolderToFolder = wrd.ccopy + wrd.cAll + wrd.cFiles + wrd.cAnd + wrd.cFolders + wrd.cFrom + wrd.cFolder + wrd.cTo + wrd.cFolder; // copyAllFilesAndFoldersFromFolderToFolder
export const cbuildReleasePackage = wrd.cbuild + wrd.cRelease + wrd.cPackage; // buildReleasePackage
export const ccreateZipArchive = wrd.ccreate + gen.cZip + wrd.cArchive; // createZipArchive
export const ccleanRootPath = wrd.cclean + wrd.cRoot + wrd.cPath; // cleanRootPath
export const ccopyFileSync = wrd.ccopy + wrd.cFile + wrd.cSync; // copyFileSync
export const ccopyFolderRecursiveSync = wrd.ccopy + wrd.cFolder + wrd.cRecursive + wrd.cSync; // copyFolderRecursiveSync
export const cappendMessageToFile = wrd.cappend + wrd.cMessage + bas.cTo + wrd.cFile; // appendMessageToFile

// lexical
export const cparseBusinessRuleArgument = wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument; // parseBusinessRuleArgument
export const canalyzeArgument = wrd.canalyze + wrd.cArgument; // analyzeArgument
export const canalyzeForRegularExpression = wrd.canalyze + wrd.cFor + wrd.cRegular + wrd.cExpression; // analyzeForRegularExpression
export const cparseArgumentAsRegularExpression = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cRegular + wrd.cExpression; // parseArgumentAsRegularExpression
export const cparseArgumentAsArray = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cArray; // parseArgumentAsArray
export const cremoveStringLiteralTagsFromArray = wrd.cremove + wrd.cString + wrd.cLiteral + wrd.cTags + wrd.cFrom + wrd.cArray; // removeStringLiteralTagsFromArray

// loggers
export const cconsoleLog = wrd.cconsole + gen.cLog; // consoleLog
export const cconsoleTableLog = wrd.cconsole + wrd.cTable + gen.cLog; // consoleTableLog
export const cconstantsValidationSummaryLog = wrd.cconstants + wrd.cValidation + wrd.cSummary + wrd.cLog; // constantsValidationSummaryLog
export const cgetLogFileNameAndPath = wrd.cget + gen.cLog + wrd.cFileName + wrd.cAnd + wrd.cPath; // getLogFileNameAndPath
export const cprintMessageToFile = wrd.cprint + wrd.cMessage + wrd.cTo + wrd.cFile; // printMessageToFile

// prompt
export const cprompt = wrd.cprompt; // prompt

// timers
export const cgetNowMoment = wrd.cget + wrd.cNow + wrd.cMoment; // getNowMoment
export const ccomputeDeltaTime = wrd.ccompute + gen.cDelta + wrd.cTime; // computeDeltaTime
export const creformatDeltaTime = wrd.creformat + gen.cDelta + wrd.cTime; // reformatDeltaTime
export const csleep = wrd.csleep; // sleep

// queue
export const cinitQueue = gen.cinit + wrd.cQueue; // initQueue
export const cdequeue = wrd.cdequeue; // dequeue
export const cenqueue = wrd.cenqueue; // enqueue
export const cisEmpty = wrd.cis + wrd.cEmpty; // isEmpty
export const cqueueFront = wrd.cqueue + wrd.cFront; // queueFront
export const cqueueSize = wrd.cqueue + wrd.cSize; // queueSize

// stack
export const cinitStack = gen.cinit + wrd.cStack; // initStack
export const cclearStack = wrd.cclear + wrd.cStack; // clearStack
export const cpush = wrd.cpush; // push
export const cpop = wrd.cpop; // pop
// let cisEmpty = wrd.cis + wrd.cEmpty; // isEmpty // Duplicate definition in the chiefCommander
export const clength = wrd.clength; // length
export const ccontains = wrd.ccontains; // contains
export const cprint = wrd.cprint; // print

// main
export const cinitFramework = gen.cinit + wrd.cFramework; // initFramework
// smuggle something cmergeClientBusinessRules = wrd.cmerge + wrd.cClient + wrd.cBusiness + wrd.cRules; // mergeClientBusinessRules
// smuggle something cmergeClientCommands = wrd.cmerge + wrd.cClient + wrd.cCommands; // mergeClientCommands
// smuggle something cloadCommandAliases = wrd.cload + wrd.cCommand + wrd.cAliases; // loadCommandAliases
// smuggle something cloadCommandWorkflows = wrd.cload + wrd.cCommand + wrd.cWorkflows; // loadCommandWorkflows
// smuggle something cexecuteBusinessRule = wrd.cexecute + wrd.cBusiness + wrd.cRule; // executeBusinessRule
// smuggle something cenqueueCommand = wrd.cenqueue + wrd.cCommand; // enqueueCommand
// smuggle something cisCommandQueueEmpty = wrd.cis + wrd.cCommand + wrd.cQueue + wrd.cEmpty; // isCommandQueueEmpty
// smuggle something cprocessCommandQueue = wrd.cprocess + wrd.cCommand + wrd.cQueue; // processCommandQueue
// smuggle something csetConfigurationSetting = wrd.cset + wrd.cConfiguration + wrd.cSetting; // setConfigurationSetting
// smuggle something cgetConfigurationSetting = wrd.cget + wrd.cConfiguration + wrd.cSetting; // getConfigurationSetting
// smuggle something cconsoleLog = wrd.cconsole + wrd.cLog; // consoleLog
// smuggle something csleep = wrd.csleep; // sleep
// smuggle something cprompt = wrd.cprompt; // prompt
