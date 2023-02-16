/**
 * @file system.constants.js
 * @module system.constants
 * @description Contains system defined acronyms, many of them derived from the basic.constants.
 * The constants contained in this file are system words, phrases, codes and paths.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as wrd from './word.constants.js';

// Miscelaneious
export const cENV = bas.cEN + bas.cV; // ENV
export const cLOG = bas.cLO + bas.cG; // LOG
export const cENVIRONMENT = phn.cENV + bas.cIR + bas.cON + phn.cMENT; // ENVIRONMENT
export const cITERATION = bas.cIT + bas.cER + bas.cAT + bas.cIO + bas.cN; // ITERATION
export const cSTYLE = bas.cST + bas.cYL + bas.cE; // STYLE

// Compound System Words
export const cunderline = wrd.cunder + wrd.cline; // underline
export const cUnderline = wrd.cUnder + wrd.cline; // Underline
export const cwithText = wrd.cwith + wrd.cText; // withText
export const cWithText = wrd.cWith + wrd.cText; // WithText
export const cDebugTest = wrd.cDebug + wrd.cTest; // DebugTest
export const cDebugPage = wrd.cDebug + wrd.cPage; // DebugPage
export const cDebugTestExhaustive = cDebugTest + wrd.cExhaustive; // DebugTestExhaustive
export const cDebugForceMessageToLogFile = wrd.cDebug + wrd.cForce + wrd.cMessage + bas.cTo + wrd.cLog + wrd.cFile; // DebugForceMessageToLogFile
export const cDebugTestData = cDebugTest + wrd.cData; // DebugTestData
export const cDebugPageScripts = cDebugPage + wrd.cScripts; // DebugPageScripts
export const cDebugPageData = cDebugPage + wrd.cData; // DebugPageData
export const cDebugKeywords = wrd.cDebug + wrd.cKeywords; // DebugKeywords
export const cLogBrowserActions = wrd.cLog + wrd.cBrowser + wrd.cActions; // LogBrowserActions
export const cJournalBrowserActions = wrd.cJournal + wrd.cBrowser + wrd.cActions; // JournalBrowserActions
export const cDebugBrowserActions = wrd.cDebug + wrd.cBrowser + wrd.cActions; // DebugBrowserActions
export const cDebugSelectors = wrd.cDebug + wrd.cSelectors; // DebugSelectors
export const cTestAutomation = wrd.cTest + wrd.cAutomation; // TestAutomation
export const cNumberOfRows = wrd.cNumber + wrd.cOf + wrd.cRows; // NumberOfRows
export const cMasterRowNumber = wrd.cMaster + wrd.cRow + wrd.cNumber; // MasterRowNumber
export const cEnvironmentRow = wrd.cEnvironment + wrd.cRow; // EnvironmentRow
export const cEnvironmentRowNumber = cEnvironmentRow + wrd.cNumber; // EnvironmentRowNumber
export const cPageScript = wrd.cPage + wrd.cScript; // PageScript
export const cIntermediatePath = wrd.cIntermediate + wrd.cPath; // IntermediatePath
export const cTimeStamp = wrd.cTime + wrd.cStamp; // TimeStamp
export const cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
export const cdateTimeStamp = wrd.cdate + cTimeStamp; // dateTimeStamp
export const cDateTimeStamp = wrd.cDate + cTimeStamp; // DateTimeStamp
export const cScriptDateStamp = wrd.cScript + wrd.cDate + wrd.cStamp; // ScriptDateStamp
export const cScriptTimeStamp = wrd.cScript + cTimeStamp; // ScriptTimeStamp
export const cKeywordTimeStamp = wrd.cKeyword + cTimeStamp; // KeywordTimeStamp
export const cTestTimeStamp = wrd.cTest + cTimeStamp; // TestTimeStamp
export const cScriptDateTimeStamp = wrd.cScript + cDateTimeStamp; // ScriptDateTimeStamp
export const cBeginScriptTimeStamp = wrd.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
export const cEndScriptTimeStamp = wrd.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
export const cBeginTestTimeStamp = wrd.cBegin + cTestTimeStamp; // BeginTestTimeStamp
export const cEndTestTimeStamp = wrd.cEnd + cTestTimeStamp; // EndTestTimeStamp
export const cBeginPageScriptTimeStamp = wrd.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
export const cEndPageScriptTimeStamp = wrd.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
export const cBeginKeywordTimeStamp = wrd.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
export const cEndKeywordTimeStamp = wrd.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
export const cRuntime = wrd.cRun + wrd.ctime; // Runtime
export const cRunTime = wrd.cRun + wrd.cTime; // RunTime
export const cBrowserName = wrd.cBrowser + wrd.cName; // BrowserName
export const cHostName = wrd.cHost + wrd.cName; // HostName
export const cTestRunID = wrd.cTest + wrd.cRun + wrd.cID; // TestRunID
export const cfilesLists = wrd.cfiles + wrd.cLists; // filesLists
export const cFileTypes = wrd.cFile + wrd.cTypes; // FileTypes
export const cfilename = wrd.cfile + wrd.cname; // filename
export const cFilename = wrd.cFile + wrd.cname; // Filename
export const cFileName = wrd.cFile + wrd.cName; // FileName
export const cfilenames = cfilename + bas.cs; // filenames
export const cFilenames = cFilename + bas.cs; // Filenames
export const cFileNames = cFileName + bas.cs; // FileNames
export const cPreValidateFileName = phn.cPre + wrd.cValidate + cFileName; // PreValidateFileName
export const cAsyncSingular = wrd.cAsync + wrd.cSingular; // AsyncSingular
export const cSyncSingular = wrd.cSync + wrd.cSingular; // SyncSingular
export const cParallelMultiUnified = wrd.cParallel + wrd.cMulti + wrd.cUnified; // ParallelMultiUnified
export const cAllowableCharacters = wrd.cAllowable + wrd.cCharacters; // AllowableCharacters
export const cSpecialCharacters = wrd.cSpecial + wrd.cCharacters; // SpecialCharacters
export const cTimeoutOverride = wrd.cTimeout + wrd.cOverride; // TimeoutOverride
export const cDwellTime = wrd.cDwell + wrd.cTime; // DwellTime
export const cFileCounter = wrd.cFile + wrd.cCounter; // FileCounter
export const cDeltaT = gen.cDelta + bas.cT; // DeltaT
export const cvisibilityCheck = wrd.cvisibility + wrd.cCheck; // visibilityCheck
export const cVisibilityCheck = wrd.cVisibility + wrd.cCheck; // VisibilityCheck
export const cOperatingSystem = wrd.cOperating + wrd.cSystem; // OperatingSystem
export const cinnerText = wrd.cinner + wrd.cText; // innerText
export const cInnerText = wrd.cInner + wrd.cText; // InnerText
export const cinnerHTML = wrd.cinner + wrd.cHTML; // innerHTML
export const cInnerHTML = wrd.cInner + wrd.cHTML; // InnerHTML
export const cTestData = wrd.cTest + wrd.cData; // TestData
export const cProcessingTimeout = wrd.cProcessing + wrd.cTimeout; // ProcessingTimeout
export const cIngestionCompleteDwellTime = wrd.cIngestion + wrd.cComplete + cDwellTime; // IngestionCompleteDwellTime
export const cRowNumber = wrd.cRow + wrd.cNumber; // RowNumber
export const cUsername = wrd.cUser + wrd.cname; // Username
export const cPassword = wrd.cPass + wrd.cword; // Password
export const cProjectName = wrd.cProject + wrd.cName; // ProjectName
export const cProjectDescription = wrd.cProject + wrd.cDescription; // ProjectDescription
export const cTestDataFileName = wrd.cTest + wrd.cData + cFileName; // TestDataFileName
export const cShareEmail = wrd.cShare + wrd.cEmail; // ShareEmail
export const cAccessLevel = wrd.cAccess + wrd.cLevel; // AccessLevel
export const cFileNumber = wrd.cFile + wrd.cNumber; // FileNumber
export const cConfigurationName = wrd.cConfiguration + wrd.cName; // ConfigurationName
export const cConfigurationElement = wrd.cConfiguration + wrd.cElement; // ConfigurationElement
export const cConfigurationElements = cConfigurationElement + bas.cs; // ConfigurationElements
export const cVersionControl = wrd.cVersion + wrd.cControl; // VersionControl
export const cScriptRunTime = wrd.cScript + cRunTime; // ScriptRunTime
export const cTestRunTime = wrd.cTest + cRunTime; // TestRunTime
export const ctypeText = wrd.ctype + wrd.cText; // typeText
export const cTypeText = wrd.cType + wrd.cText; // TypeText
export const cAbreviatedSelectors = wrd.cAbreviated + wrd.cSelectors; // AbreviatedSelectors
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + bas.cIn + wrd.cLogs; // AbreviatedSelectorsInLogs
export const cselectorTimeout = wrd.cselector + wrd.cTimeout; // selectorTimeout
export const cchildElementCount = wrd.cchild + wrd.cElement + wrd.cCount; // childElementCount
export const cUnderscore = wrd.cUnder + wrd.cscore; // Underscore
export const cTestBureau = wrd.cTest + wrd.cBureau; // TestBureau
export const caddWithText = wrd.c_add + wrd.cWith + wrd.cText; // addWithText
export const caddTimeout = wrd.c_add + wrd.cTimeout; // addTimeout
export const caddParent = wrd.c_add + wrd.cParent; // addParent
export const caddFindValue = wrd.c_add + wrd.cFind + wrd.cValue; // addFindValue
export const caddNth = wrd.c_add + wrd.cNth; // addNth
export const caddSibling = wrd.c_add + wrd.cSibling; // addSibling
export const caddFilter = wrd.c_add + wrd.cFilter; // addFilter
export const cgenerateRandom = wrd.cgenerate + wrd.cRandom; // generateRandom
export const crandomlyGenerate = wrd.crandomly + wrd.cGenerate; // randomlyGenerate
export const cMixedCase = wrd.cMixed + wrd.cCase; // MixedCase
export const cUpperCase = wrd.cUpper + wrd.cCase; // UpperCase
export const cLowerCase = wrd.cLower + wrd.cCase; // LowerCase
export const cByLength = wrd.cBy + wrd.cLength; // ByLength
export const cSpecialCharacter = wrd.cSpecial + wrd.cCharacter; // SpecialCharacter
export const cWithSpecialCharacters = wrd.cWith + cSpecialCharacters; // WithSpecialCharacters
export const cTextByLength = wrd.cText + cByLength; // TextByLength
export const cTextWithSpecialCharacters = wrd.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
export const cAlphaNumeric = wrd.cAlpha + wrd.cNumeric; // AlphaNumeric
export const cAlphaNumericCode = cAlphaNumeric + wrd.cCode; // AlphaNumericCode
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
export const cNumericCode = wrd.cNumeric + wrd.cCode; // NumericCode
export const cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
export const cSpecialCharacterCodeByLength = cSpecialCharacter + wrd.cCode + cByLength; // SpecialCharacterCodeByLength
export const cvalidEmail = wrd.cvalid + wrd.cEmail; // validEmail
export const cValidEmail = wrd.cValid + wrd.cEmail; // ValidEmail
export const cInvalidEmail = bas.cIn + cvalidEmail; // InvalidEmail
export const cgenerateValidEmail = wrd.cgenerate + cValidEmail; // generateValidEmail
export const cgenerateInvalidEmail = wrd.cgenerate + cInvalidEmail; // generateInvalidEmail
export const cRandomValidEmail = wrd.cRandom + cValidEmail; // RandomValidEmail
export const cRandomInvalidEmail = wrd.cRandom + cInvalidEmail; // RandomInvalidEmail
export const cLetterOr = wrd.cLetter + bas.cOr; // LetterOr
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + wrd.cNumber + wrd.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
export const cAlphaNumericCharacter = cAlphaNumeric + wrd.cCharacter; // AlphaNumericCharacter
export const cSuffixAndDomain = wrd.cSuffix + wrd.cAnd + wrd.cDomain; // SuffixAndDomain
export const cWithSpecificSuffixAndDomainName = wrd.cWith + wrd.cSpecific + wrd.cSuffix + wrd.cAnd + wrd.cDomain + wrd.cName; // WithSpecificSuffixAndDomainName
export const cNumericCharacter = wrd.cNumeric + wrd.cCharacter; // NumericCharacter
export const cNumberInRange = wrd.cNumber + bas.cIn + wrd.cRange; // NumberInRange
export const cBooleanValue = wrd.cBoolean + wrd.cValue; // BooleanValue
export const cAlphabeticCharacter = wrd.cAlphabetic + wrd.cCharacter; // AlphabeticCharacter
export const cCarriageReturn = wrd.cCarriage + wrd.cReturn; // CarriageReturn
export const cDashboardLogs = wrd.cDashboard + wrd.cLogs; // DashboardLogs
export const cVideoLogs = wrd.cVideo + wrd.cLogs; // VideoLogs
export const cForwardSlash = wrd.cForward + wrd.cSlash; // ForwardSlash
export const cBackSlash = wrd.cBack + wrd.cSlash; // BackSlash
export const cPage_Keywords = wrd.cPage + bas.cUnderscore + wrd.cKeywords; // Page_Keywords
export const cnavigateTo = wrd.cnavigate + bas.cTo; // navigateTo
export const cNavigateTo = wrd.cNavigate + bas.cTo; // NavigateTo
export const cBrowserRefresh = wrd.cBrowser + wrd.cRefresh; // BrowserRefresh
export const cSpaceIsColonSpace = bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // is:
export const cdeployApplication = wrd.cdeploy + wrd.cApplication; // deployApplication
export const cdeployMetaData = wrd.cdeploy + wrd.cMetaData // deployMetaData
export const creleaseApplication = wrd.crelease + wrd.cApplication; // releaseApplication
export const cbackground = wrd.cback + wrd.cground; // background
export const cBackground = wrd.cBack + wrd.cground; // Background
export const cConfiguration_Colors = wrd.cConfiguration + bas.cUnderscore + wrd.cColors; // Configuration_Colors
export const cColorData = wrd.cColor + wrd.cData; // ColorData
export const cColorName = wrd.cColor + wrd.cName; // ColorName
export const cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule
export const cBusinessRule = wrd.cBusiness + wrd.cRule; // BusinessRule
export const cbusinessRules = wrd.cbusiness + wrd.cRules; // businessRules
export const cBusinessRules = wrd.cBusiness + wrd.cRules; // BusinessRules
export const ccommandsBlob = wrd.ccommands + wrd.cBlob; // commandsBlob
export const cCommandsBlob = wrd.cCommands + wrd.cBlob; // CommandsBlob
export const crulesLibrary = wrd.crules + wrd.cLibrary; // rulesLibrary
export const cframework = wrd.cframe + wrd.cwork; // framework
export const cFramework = wrd.cFrame + wrd.cwork; // Framework
export const cCommandsAliases = wrd.cCommands + wrd.cAliases; // CommandsAliases
export const cCommandWorkflows = wrd.cCommand + wrd.cWorkflows; // CommandWorkflows
export const cStandardDeviation = wrd.cStandard + wrd.cDeviation; // StandardDeviation
export const cHexValue = phn.cHex + wrd.cValue; // HexValue
export const cexportconst = wrd.cexport + bas.cSpace + gen.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
export const csmuggleSomething = wrd.csmuggle + bas.cSpace + wrd.csomething; // smuggle something
export const cDataStorage = wrd.cData + wrd.cStorage; // DataStorage
export const cSource1 = wrd.cSource + num.c1; // Source1
export const cSource2 = wrd.cSource + num.c2; // Source2
export const cbigInteger = wrd.cbig + wrd.cInteger; // bigInteger
export const cnumberOfCharactersToGenerate = wrd.cnumber + bas.cOf + wrd.cCharacters + bas.cTo + wrd.cGenerate; // numberOfCharactersToGenerate
export const cgenerateSpecialCharacters = wrd.cgenerate + cSpecialCharacters; // generateSpecialCharacters
export const callowableSpecialCharacters = wrd.callowable + cSpecialCharacters; // allowableSpecialCharacters
export const cspecifiedSuffixAndDomain = wrd.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain
export const cfailureMode = wrd.cfailure + wrd.cMode; // failureMode
export const cWithoutThe = wrd.cWithout + bas.cSpace + wrd.cthe; // Without the
export const cwasCompleted = wrd.cwas + bas.cSpace + wrd.ccompleted; // was completed
export const cGenerateA = wrd.cGenerate + bas.cSpace + bas.ca; // Generate a
export const cprogramLoop = wrd.cprogram + bas.cSpace + wrd.cloop; // program loop
export const candPrefix = wrd.cand + bas.cSpace + wrd.cprefix; // and prefix
export const candSuffix = wrd.cand + bas.cSpace + wrd.csuffix; // and suffix
export const cdomainSpaceName = wrd.cdomain + bas.cSpace + wrd.cname // domain name
export const candSpaceDomainSpaceName = wrd.cand + bas.cSpace + cdomainSpaceName; // and domain name
export const ccurrentMasterStringArrayElement = wrd.ccurrent + wrd.cMaster + wrd.cString + wrd.cArray + wrd.cElement; // currentMasterStringArrayElement
export const cLehmerCodeArray = wrd.cLehmer + wrd.cCode + wrd.cArray; // LehmerCodeArray
export const creturnData = wrd.creturn + wrd.cData; // returnData
export const cCamelCase = wrd.cCamel + wrd.cCase; // CamelCase

// Logging Styles Constants
export const cModuleFontStyle = wrd.cModule + wrd.cFont + wrd.cStyle; // ModuleFontStyle
export const cFunctionFontStyle = wrd.cFunction + wrd.cFont + wrd.cStyle; // FunctionFontStyle
export const cMessageFontStyle = wrd.cMessage + wrd.cFont + wrd.cStyle; // MessageFontStyle
export const cDataFontStyle = wrd.cData + wrd.cFont + wrd.cStyle; // DataFontStyle
export const cModuleFontColor = wrd.cModule + wrd.cFont + wrd.cColor; // ModuleFontColor
export const cFunctionFontColor = wrd.cFunction + wrd.cFont + wrd.cColor; // FunctionFontColor
export const cMessageFontColor = wrd.cMessage + wrd.cFont + wrd.cColor; // MessageFontColor
export const cDataFontColor = wrd.cData + wrd.cFont + wrd.cColor; // DataFontColor
export const cModuleFontBackgroundColor = wrd.cModule + wrd.cFont + cBackground + wrd.cColor; // ModuleFontBackgroundColor
export const cFunctionFontBackgroundColor = wrd.cFunction + wrd.cFont + cBackground + wrd.cColor; // FunctionFontBackgroundColor
export const cMessageFontBackgroundColor = wrd.cMessage + wrd.cFont + cBackground + wrd.cColor; // MessageFontBackgroundColor
export const cDataFontBackgroundColor = wrd.cData + wrd.cFont + cBackground + wrd.cColor; // DataFontBackgroundColor

// File Types
export const cCatia = bas.cCa + bas.cti + bas.ca; // Catia
export const cDocument = wrd.cDocument; // Document
export const cDocuments = cDocument + bas.cs; // Documents
export const cDraft = bas.cDr + phn.caft; // Draft
export const cDWG = bas.cDW + bas.cG; // DWG
export const cHoops = bas.cH + wrd.coops; // Hoops
export const cHOOPS = bas.cH + wrd.cOOPS; // HOOPS
export const cImage = bas.cIm + phn.cage; // Image
export const cImages = cImage + bas.cs; // Images
export const cInventor = phn.cInv + bas.cen + phn.ctor; // Inventor
export const cNeutral = bas.cNe + bas.cut + phn.cral; // Neutral
export const cNX = bas.cNX; // NX
export const cParasolid = bas.cP + phn.cara + wrd.csolid; // Parasolid
export const cProE = phn.cPro + bas.cE; // ProE
export const cRhino = bas.cRh + phn.cino; // Rhino
export const cSolidEdge = wrd.cSolid + wrd.cEdge; // SolidEdge
export const cSolidWorks = wrd.cSolid + wrd.cWorks; // SolidWorks
export const cvrml = bas.cvr + bas.cml; // vrml
export const cVrml = bas.cVr + bas.cml; // Vrml
export const cVRML = bas.cVR + bas.cML; // VRML

// UI Element Types
export const cButton = bas.cBu + bas.ctt + bas.con; // Button

// Environment Variables
export const cQA = bas.cQA; // QA
export const cdev = bas.cde + bas.cv; // dev
export const cDEV = bas.cDE + bas.cV; // DEV
export const cProd = phn.cPro + bas.cd; // Prod
export const cPROD = phn.cPRO + bas.cD; // PROD
export const cPre = phn.cPre; // Pre
export const cPRE = phn.cPRE; // PRE
export const cPreProd = phn.cPre + cProd; // PreProd
export const cPREPROD = phn.cPRE + cPROD; // PREPROD

// Key Combinations
export const cctrl_a = phn.cctrl + bas.cPlus + bas.ca; // ctrl+a
export const cctrl_b = phn.cctrl + bas.cPlus + bas.cb; // ctrl+b
export const cctrl_c = phn.cctrl + bas.cPlus + bas.cc; // ctrl+c
export const cctrl_d = phn.cctrl + bas.cPlus + bas.cd; // ctrl+d
export const cctrl_e = phn.cctrl + bas.cPlus + bas.ce; // ctrl+e
export const cctrl_f = phn.cctrl + bas.cPlus + bas.cf; // ctrl+f
export const cctrl_g = phn.cctrl + bas.cPlus + bas.cg; // ctrl+g
export const cctrl_h = phn.cctrl + bas.cPlus + bas.ch; // ctrl+h
export const cctrl_i = phn.cctrl + bas.cPlus + bas.ci; // ctrl+i
export const cctrl_j = phn.cctrl + bas.cPlus + bas.cj; // ctrl+j
export const cctrl_k = phn.cctrl + bas.cPlus + bas.ck; // ctrl+k
export const cctrl_l = phn.cctrl + bas.cPlus + bas.cl; // ctrl+l
export const cctrl_m = phn.cctrl + bas.cPlus + bas.cm; // ctrl+m
export const cctrl_n = phn.cctrl + bas.cPlus + bas.cn; // ctrl+n
export const cctrl_o = phn.cctrl + bas.cPlus + bas.co; // ctrl+o
export const cctrl_p = phn.cctrl + bas.cPlus + bas.cp; // ctrl+p
export const cctrl_q = phn.cctrl + bas.cPlus + bas.cq; // ctrl+q
export const cctrl_r = phn.cctrl + bas.cPlus + bas.cr; // ctrl+r
export const cctrl_s = phn.cctrl + bas.cPlus + bas.cs; // ctrl+s
export const cctrl_t = phn.cctrl + bas.cPlus + bas.ct; // ctrl+t
export const cctrl_u = phn.cctrl + bas.cPlus + bas.cu; // ctrl+u
export const cctrl_v = phn.cctrl + bas.cPlus + bas.cv; // ctrl+v
export const cctrl_w = phn.cctrl + bas.cPlus + bas.cw; // ctrl+w
export const cctrl_x = phn.cctrl + bas.cPlus + bas.cx; // ctrl+x
export const cctrl_y = phn.cctrl + bas.cPlus + bas.cy; // ctrl+y
export const cctrl_z = phn.cctrl + bas.cPlus + bas.cz; // ctrl+z

// System Terms
export const csystemConfigFileName = wrd.cframework + bas.cDot + wrd.csystem + gen.cDotjson; // framework.system.json
export const capplicationConfigFileName = wrd.capplication + bas.cDot + wrd.csystem + gen.cDotjson; // application.system.json
export const cappConfigPath = gen.capp + wrd.cConfig + wrd.cPath; // appConfigPath
export const cframeworkConfigPath = wrd.cframework + wrd.cConfig + wrd.cPath; // frameworkConfigPath
export const cApplicationName = wrd.cApplication + wrd.cName; // ApplicationName
export const cApplicationRootPath = wrd.cApplication + wrd.cRoot + wrd.cPath; // ApplicationRootPath
export const cApplicationCleanedRootPath = wrd.cApplication + wrd.cCleaned + wrd.cRoot + wrd.cPath; // ApplicationCleanedRootPath
export const cConfigurationPath = wrd.cConfiguration + wrd.cPath; // ConfigurationPath
export const cApplicationVersionNumber = wrd.cApplication + wrd.cVersion + wrd.cNumber; // ApplicationVersionNumber
export const cApplicationDescription = wrd.cApplication + wrd.cDescription; // ApplicationDescription
export const cDataPath = wrd.cData + wrd.cPath; // DataPath
export const cCtempPath = bas.cc + bas.cColon + bas.cForwardSlash + phn.ctemp + bas.cForwardSlash; // CtempPath
export const cPageDataPath = wrd.cPage + cDataPath; // PageDataPath
export const cWorkflowDataPath = wrd.cWorkflow + cDataPath; // WorkflowDataPath
export const cKeywordsDataPath = wrd.cKeywords + cDataPath; // KeywordsDataPath
export const cLocatorsDataPath = wrd.cLocators + cDataPath; // LocatorsDataPath
export const cClientConstantsPath = wrd.cClient + wrd.cConstants + wrd.cPath; // ClientConstantsPath
export const cSystemConstantsPath = wrd.cSystem + wrd.cConstants + wrd.cPath; // SystemConstantsPath
export const cSystemConstantsPathActual = wrd.csrc + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash; // src/constants/
export const cclientBusinessRules = wrd.cclient + wrd.cBusiness + wrd.cRules; // clientBusinessRules
export const cclientCommands = wrd.cclient + wrd.cCommands; // clientCommands
export const cclientRulesLibrary = wrd.cclient + wrd.cRules + wrd.cLibrary; // clientRulesLibrary
export const cCommandQueue = wrd.cCommand + wrd.cQueue; // CommandQueue
export const cConstantsValidationData = wrd.cConstants + wrd.cValidation + wrd.cData; // ConstantsValidationData
export const cConstantsShortNames = wrd.cConstants + wrd.cShort + wrd.cNames; // ConstantsShortNames
export const cConstantsFileNames = wrd.cConstants + wrd.cFile + wrd.cNames; // ConstantsFileNames
export const cConstantsPrefix = wrd.cConstants + wrd.cPrefix; // ConstantsPrefix
export const cConstantsFilePaths = wrd.cConstants + wrd.cFile + wrd.cPaths; // ConstantsFilePaths
export const cConstantsPhase1ValidationMessages = wrd.cConstants + wrd.cPhase + num.c1 + wrd.cValidation + wrd.cMessages; // ConstantsPhase1ValidationMessages
export const cConstantsPhase2ValidationMessages = wrd.cConstants + wrd.cPhase + num.c2 + wrd.cValidation + wrd.cMessages; // ConstantsPhase2ValidationMessages
export const cBasicConstantsValidation = wrd.cBasic + wrd.cConstants + wrd.cValidation; // BasicConstantsValidation
export const cBusinessConstantsValidation = wrd.cBusiness + wrd.cConstants + wrd.cValidation; // BusinessConstantsValidation
export const cColorConstantsValidation = wrd.cColor + wrd.cConstants + wrd.cValidation; // ColorConstantsValidation
export const cCommandConstantsValidation = wrd.cCommand + wrd.cConstants + wrd.cValidation; // CommandConstantsValidation
export const cConfigurationConstantsValidation = wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // ConfigurationConstantsValidation
export const cCountryConstantsValidation = wrd.cCountry + wrd.cConstants + wrd.cValidation; // CountryConstantsValidation
export const cElementConstantsValidation = wrd.cElement + wrd.cConstants + wrd.cValidation; // ElementConstantsValidation
export const cFunctionConstantsValidation = wrd.cFunction + wrd.cConstants + wrd.cValidation; // FunctionConstantsValidation
export const cGenericConstantsValidation = wrd.cGeneric + wrd.cConstants + wrd.cValidation; // GenericConstantsValidation
export const cIsotopeConstantsValidation = wrd.cIsotope + wrd.cConstants + wrd.cValidation; // IsotopeConstantsValidation
export const cKnotConstantsValidation = wrd.cKnot + wrd.cConstants + wrd.cValidation; // KnotConstantsValidation
export const cLanguageConstantsValidation = wrd.cLanguage + wrd.cConstants + wrd.cValidation; // LanguageConstantsValidation
export const cMessageConstantsValidation = wrd.cMessage + wrd.cConstants + wrd.cValidation; // MessageConstantsValidation
export const cNumericConstantsValidation = wrd.cNumeric + wrd.cConstants + wrd.cValidation; // NumericConstantsValidation
export const cPhonicConstantsValidation = wrd.cPhonic + wrd.cConstants + wrd.cValidation; // PhonicConstantsValidation
export const cShapeConstantsValidation = wrd.cShape + wrd.cConstants + wrd.cValidation; // ShapeConstantsValidation
export const cSystemConstantsValidation = wrd.cSystem + wrd.cConstants + wrd.cValidation; // SystemConstantsValidation
export const cUnitConstantsValidation = wrd.cUnit + wrd.cConstants + wrd.cValidation; // UnitConstantsValidation
export const cWordConstantsValidation = wrd.cWord + wrd.cConstants + wrd.cValidation; // WordConstantsValidation
export const cBinaryRootPath = wrd.cBinary + wrd.cRoot + wrd.cPath; // BinaryRootPath
export const cBinaryReleasePath = wrd.cBinary + wrd.cRelease + wrd.cPath; // BinaryReleasePath
export const cdevtty = bas.cForwardSlash + cdev + bas.cForwardSlash + phn.ctty; // /dev/tty
export const cpackageDotJson = wrd.cpackage + bas.cDot + gen.cjson; // package.json
export const cDoubleDotForwardSlash = bas.cDoubleDot + bas.cForwardSlash; // ../

// Constants Filenames
export const cbasic_constants_js = wrd.cbasic + bas.cDot + wrd.cconstants + gen.cDotjs; // basic.constants.js
export const cbusiness_constants_js = wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // business.constants.js
export const ccolor_constants_js = wrd.ccolor + bas.cDot + wrd.cconstants + gen.cDotjs; // color.constants.js
export const ccommand_constants_js = wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // command.constants.js
export const cconfiguration_constants_js = wrd.cconfiguration + bas.cDot + wrd.cconstants + gen.cDotjs; // configuration.constants.js
export const cconstant_constants_js = wrd.cconstant + bas.cDot + wrd.cconstants + gen.cDotjs; // constant.constants.js
export const ccountry_constants_js = wrd.ccountry + bas.cDot + wrd.cconstants + gen.cDotjs; // country.constants.js
export const cfunction_constants_js = wrd.cfunction + bas.cDot + wrd.cconstants + gen.cDotjs; // function.constants.js
export const celement_constants_js = wrd.celement + bas.cDot + wrd.cconstants + gen.cDotjs; // element.constants.js
export const cgeneric_constants_js = wrd.cgeneric + bas.cDot + wrd.cconstants + gen.cDotjs; // generic.constants.js
export const cisotope_constants_js = wrd.cisotope + bas.cDot + wrd.cconstants + gen.cDotjs; // isotope.constants.js
export const cknot_constants_js = wrd.cknot + bas.cDot + wrd.cconstants + gen.cDotjs; // knot.constants.js
export const clanguage_constants_js = wrd.clanguage + bas.cDot + wrd.cconstants + gen.cDotjs; // language.constants.js
export const cmessage_constants_js = wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // message.constants.js
export const cnumeric_constants_js = wrd.cnumeric + bas.cDot + wrd.cconstants + gen.cDotjs; // numeric.constants.js
export const cphonic_constants_js = wrd.cphonic + bas.cDot + wrd.cconstants + gen.cDotjs; // phonic.constants.js
export const cshape_constants_js = wrd.cshape + bas.cDot + wrd.cconstants + gen.cDotjs; // shape.constants.js
export const csystem_constants_js = wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // system.constants.js
export const cunit_constants_js = wrd.cunit + bas.cDot + wrd.cconstants + gen.cDotjs; // unit.constants.js
export const cword_constants_js = wrd.cword + bas.cDot + wrd.cconstants + gen.cDotjs; // word.constants.js

// System Paths
export const cActualFrameworkName = wrd.chay + wrd.cstacks; // haystacks
export const cFrameworkName = wrd.cFramework + wrd.cName; // FrameworkName
export const cFrameworkVersionNumber = wrd.cFramework + wrd.cVersion + wrd.cNumber; // FrameworkVersionNumber
export const cFrameworkDescription = wrd.cFramework + wrd.cDescription; // FrameworkDescription
export const cmetaDatadotJson = wrd.cmeta + wrd.cData + bas.cDot + gen.cjson; // metaData.json
export const cFrameworkDevelopRootPath = wrd.csrc + bas.cDoubleForwardSlash; // src//
export const cFrameworkProductionRootPath = wrd.cbin + bas.cDoubleForwardSlash; // bin//
export const cframeworkConstantsPath = wrd.cconstants + bas.cDoubleForwardSlash; // constants//
export const cframeworkResourcesPath = wrd.cresources + bas.cDoubleForwardSlash; // resources//
export const cframeworkResourcesConfigurationPath = cframeworkResourcesPath + wrd.cconfiguration + bas.cDoubleForwardSlash; // resources//configuration//
export const cframeworkResourcesCommandAliasesPath = cframeworkResourcesPath + wrd.ccommands + bas.cDoubleForwardSlash; // resources//commands//
export const cframeworkResourcesWorkflowsPath = cframeworkResourcesPath + wrd.cworkflows + bas.cDoubleForwardSlash; // resources//workflows//
