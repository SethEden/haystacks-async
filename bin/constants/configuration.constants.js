/**
 * @file configuration.constants.js
 * @module configuration.constants
 * @description Contains all re-usable configuration constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as sys from './system.constants.js';
import * as wrd from './word.constants.js';

// Configuration Settings
export const crootPath = wrd.croot + wrd.cPath; // rootPath
export const cRootPath = wrd.cRoot + wrd.cPath; // RootPath
export const cappRootPath = gen.capp + wrd.cRoot + wrd.cPath; // appRootPath
export const cclientRootPath = wrd.cclient + wrd.cRoot + wrd.cPath; // clientRootPath
export const cframeworkRootPath = wrd.cframework + wrd.cRoot + wrd.cPath; // frameworkRootPath
export const cappConfigResourcesPath = gen.capp + wrd.cConfig + wrd.cResources + wrd.cPath; // appConfigResourcesPath
export const cframeworkResourcesPath = wrd.cframework + wrd.cResources + wrd.cPath; // frameworkResourcesPath
export const cframeworkConstantsPath = wrd.cframework + wrd.cConstants + wrd.cPath; // frameworkConstantsPath
export const cclientConstantsPath = wrd.cclient + wrd.cConstants + wrd.cPath; // clientConstantsPath
export const capplicationConstantsPath = wrd.capplication + wrd.cConstants + wrd.cPath; // applicationConstantsPath
export const cclientMetaDataPath = wrd.cclient + wrd.cMetaData + wrd.cPath; // clientMetaDataPath
export const cclientCommandAliasesPath = wrd.cclient + wrd.cCommand + wrd.cAliases + wrd.cPath; // clientCommandAliasesPath
export const cclientWorkflowsPath = wrd.cclient + wrd.cWorkflows + wrd.cPath; // clientWorkflowsPath
export const cframeworkFullMetaDataPath = wrd.cframework + wrd.cFull + wrd.cMetaData + wrd.cPath; // frameworkFullMetaDataPath
export const cappConfigPath = gen.capp + wrd.cConfig + wrd.cPath; // appConfigPath
export const cframeworkConfigPath = wrd.cframework + wrd.cConfig + wrd.cPath; // frameworkConfigPath
export const cappConfigFiles = gen.capp + wrd.cConfig + wrd.cFiles; // appConfigFiles
export const cframeworkConfigFiles = wrd.cframework + wrd.cConfig + wrd.cFiles; // frameworkConfigFiles
export const cappConfigReferencePath = gen.capp + wrd.cConfig + wrd.cReference + wrd.cPath; // appConfigReferencePath
export const cframeworkCommandAliasesPath = wrd.cframework + wrd.cCommand + wrd.cAliases + wrd.cPath; // frameworkCommandAliasesPath
export const cframeworkWorkflowsPath = wrd.cframework + wrd.cWorkflows + wrd.cPath; // frameworkWorkflowsPath
export const cdebugSetting = wrd.cdebug + wrd.cSetting; // debugSetting
export const cdebugSettings = wrd.cdebug + wrd.cSettings; // debugSettings
export const cdebugFiles = wrd.cdebug + wrd.cFiles; // debugFiles
export const cdebugFunctions = wrd.cdebug + wrd.cFunctions; // debugFunctions
export const cfigletFont = wrd.cfiglet + wrd.cFont; // figletFont
export const cincludeDateTimeStampInLogFiles = wrd.cinclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // includeDateTimeStampInLogFiles
export const cLogFilePathAndName = wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // LogFilePathAndName
export const cDataLogFilePathAndName = wrd.cData + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // DataLogFilePathAndName
export const cExecutionJournalFilePathAndName = wrd.cExecution + wrd.cJournal + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ExecutionJournalFilePathAndName
export const cResultsLogFilePathAndName = wrd.cResults + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ResultsLogFilePathAndName
export const cTestDataPath = wrd.cTest + wrd.cData + wrd.cPath; // TestDataPath
export const cconsoleLogEnabled = wrd.cconsole + wrd.cLog + wrd.cEnabled; // consoleLogEnabled
export const clogFileEnabled = wrd.clog + wrd.cFile + wrd.cEnabled; // logFileEnabled
export const cdateTimeStamp = wrd.cdate + wrd.cTime + wrd.cStamp; // dateTimeStamp
export const cdateStamp = wrd.cdate + wrd.cStamp; // dateStamp
export const ctimeStamp = wrd.ctime + wrd.cStamp; // timeStamp
export const clogFileName = gen.clog + wrd.cFileName; // logFileName
export const cIncludeDateTimeStampInLogFiles = wrd.cInclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // IncludeDateTimeStampInLogFiles
export const cenableColorizedConsoleLogs = wrd.cenable + wrd.cColorized + wrd.cConsole + wrd.cLogs; // enableColorizedConsoleLogs
export const cprimaryCommandDelimiter = wrd.cprimary + wrd.cCommand + wrd.cDelimiter; // primaryCommandDelimiter
export const csecondaryCommandDelimiter = wrd.csecondary + wrd.cCommand + wrd.cDelimiter; // secondaryCommandDelimiter
export const ctertiaryCommandDelimiter = wrd.ctertiary + wrd.cCommand + wrd.cDelimiter; // tertiaryCommandDelimiter
export const cenableBusinessRuleOutput = wrd.cenable + wrd.cBusiness + wrd.cRule + wrd.cOutput; // enableBusinessRuleOutput
export const cenableBusinessRulePerformanceMetrics = wrd.cenable + wrd.cBusiness + wrd.cRule + wrd.cPerformance + wrd.cMetrics; // enableBusinessRulePerformanceMetrics
export const cbusinessRulesNamesPerformanceTrackingStack = wrd.cbusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack; // businessRulesNamesPerformanceTrackingStack
export const cbusinessRulesPerformanceTrackingStack = wrd.cbusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack; // businessRulesPerformanceTrackingStack
export const cbusinessRulesPerformanceAnalysisStack = wrd.cbusiness + wrd.cRules + wrd.cPerformance + wrd.cAnalysis + wrd.cStack; // businessRulesPerformanceAnalysisStack
export const cenableCommandPerformanceMetrics = wrd.cenable + wrd.cCommand + wrd.cPerformance + wrd.cMetrics; // enableCommandPerformanceMetrics
export const ccommandNamesPerformanceTrackingStack = wrd.ccommand + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack; // commandNamesPerformanceTrackingStack
export const ccommandsPerformanceTrackingStack = wrd.ccommands + wrd.cPerformance + wrd.cTracking + wrd.cStack; // commandsPerformanceTrackingStack
export const ccommandsPerformanceAnalysisStack = wrd.ccommands + wrd.cPerformance + wrd.cAnalysis + wrd.cStack; // commandsPerformanceAnalysisStack
export const cclearBusinessRulesPerformanceDataAfterAnalysis = wrd.cclear + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cData + wrd.cAfter + wrd.cAnalysis; // clearBusinessRulesPerformanceDataAfterAnalysis
export const cclearCommandPerformanceDataAfterAnalysis = wrd.cclear + wrd.cCommand + wrd.cPerformance + wrd.cData + wrd.cAfter + wrd.cAnalysis; // clearCommandPerformanceDataAfterAnalysis
export const cprintDataHiveToLogFile = wrd.cprint + wrd.cData + wrd.cHive + wrd.cTo + gen.cLog + wrd.cFile; // printDataHiveToLogFile
export const cenableConstantsValidation = wrd.cenable + wrd.cConstants + wrd.cValidation; // enableConstantsValidation
export const cframeworkConstantsValidationData = wrd.cframework + wrd.cConstants + wrd.cValidation + wrd.cData; // frameworkConstantsValidationData
export const capplicationConstantsValidationData = wrd.capplication + wrd.cConstants + wrd.cValidation + wrd.cData; // applicationConstantsValidationData
export const cdisplayIndividualConstantsValidationPassMessages = wrd.cdisplay + wrd.cIndividual + wrd.cConstants + wrd.cValidation + wrd.cPass + wrd.cMessages; // displayIndividualConstantsValidationPassMessages
export const cdisplayIndividualCosntantsValidationFailMessages = wrd.cdisplay + wrd.cIndividual + wrd.cConstants + wrd.cValidation + wrd.cFail + wrd.cMessages; // displayIndividualConstantsValidationFailMessages
export const cdisplaySummaryConstantsValidationPassMessages = wrd.cdisplay + wrd.cSummary + wrd.cConstants + wrd.cValidation + wrd.cPass + wrd.cMessages; // displaySummaryConstantsValidationPassMessages
export const cdisplaySummaryConstantsValidationFailMessages = wrd.cdisplay + wrd.cSummary + wrd.cConstants + wrd.cValidation + wrd.cFail + wrd.cMessages; // displaySummaryConstantsValidationFailMessages
export const cpassAllConstantsValidation = wrd.cpass + wrd.cAll + wrd.cConstants + wrd.cValidation; // passAllConstantsValidation
export const cpassedAllCommandAliasesDuplicateChecks = wrd.cpassed + wrd.cAll + wrd.cCommand + wrd.cAliases + wrd.cDuplicate + wrd.cChecks; // passedAllCommandAliasesDuplicateChecks
export const creleaseCompleted = wrd.crelease + wrd.cCompleted; // releaseCompleted

// Test Time Tracking
export const cBeginDateTimeStamp = wrd.cBegin + sys.cDateTimeStamp; // BeginDateTimeStamp
export const cEndDateTimeStamp = wrd.cEnd + sys.cDateTimeStamp; // EndDateTimeStamp

export const cBusinessRulePerformanceTrackingStack = wrd.cBusiness + wrd.cRule + wrd.cPerformance + wrd.cTracking + wrd.cStack; // BusinessRulePerformanceTrackingStack
export const cBusinessRuleNamesPerformanceTrackingStack = wrd.cBusiness + wrd.cRule + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack; // BusinessRuleNamesPerformanceTrackingStack
