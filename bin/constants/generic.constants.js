/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';

export const cDotDot = bas.cDot + bas.cDot; // ..
export const cDotDotForwardSlash = cDotDot + bas.cForwardSlash; // ../

// Boolean strings
export const cTrue = bas.cT + phn.crue; // True
export const cFalse = bas.cF + phn.calse; // False
export const ctrue = bas.ct + phn.crue; // true
export const cfalse = bas.cf + phn.calse; // false
export const cTRUE = bas.cTR + bas.cUE; // TRUE
export const cFALSE = bas.cFA + bas.cLS + bas.cE; // FALSE
export const cOff = bas.cO + bas.cff; // Off
export const coff = bas.co + bas.cff; // off
export const cOFF = bas.cOF + bas.cF; // OFF
export const cyes = bas.cy + bas.ces; // yes
export const cnot = bas.cno + bas.ct; // not
export const cYes = bas.cY + bas.ces; // Yes
export const cNot = bas.cNo + bas.ct; // Not
export const cYES = bas.cYE + bas.cS; // YES
export const cNOT = 'NOT'; // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
export const cnotok = cnot + bas.cok; // notok
export const cnotOk = cnot + bas.cOk; // notOk
export const cnotOK = cnot + bas.cOK; // notOK
export const cNotok = cNot + bas.cok; // Notok
export const cNotOk = cNot + bas.cOk; // NotOk
export const cNotOK = cNot + bas.cOK; // NotOK
export const cNOTok = 'NOTok'; // c_NOT = bas.cok;
export const cNOTOk = 'NOTOk'; // c_NOT = bas.cOk;
export const cNOTOK = 'NOTOK'; // c_NOT + bas.cOK;
export const cnotEql = cnot + phn.cEql; // notEql
export const cnoteql = cnot + phn.ceql; // noteql
export const cNotEql = cNot + phn.cEql; // NotEql
export const cNoteql = cNot + phn.ceql; // Noteql
export const cmax = phn.cmax; // max
export const cMax = phn.cMax; // Max
export const cmin = phn.cmin; // min
export const cMin = phn.cMin; // Min

// Test Status
export const cPass = bas.cPa + bas.css; // Pass
export const cWarning = bas.cWa + bas.crn + bas.cin + bas.cg; // Warning
export const cFail = bas.cFa + bas.cil; // Fail

// Directions
export const cDown = bas.cDo + bas.cwn; // Down
export const cLeft = bas.cLe + bas.cft; // Left
export const cRight = bas.cRi + bas.cgh + bas.ct; // Right

// Alphabets
export const cLowerCaseEnglishAlphabet = bas.cab + bas.ccd + bas.cef + bas.cgh + bas.cij + bas.ckl + bas.cmn + bas.cop + bas.cqr + bas.cst + bas.cuv + bas.cwx + bas.cyz; // abcdefghijklmnopqrstuvwxyz
export const cUpperCaseEnglishAlphabet = bas.cAB + bas.cCD + bas.cEF + bas.cGH + bas.cIJ + bas.cKL + bas.cMN + bas.cOP + bas.cQR + bas.cST + bas.cUV + bas.cWX + bas.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
export const cAllNumbers = num.c0 + num.c1 + num.c2 + num.c3 + num.c4 + num.c5 + num.c6 + num.c7 + num.c8 + num.c9; // 0123456789
export const cMostSpecialCharacters = bas.cExclamation + bas.cAt + bas.cHash + bas.cDollar + bas.cPercent + bas.cCarrot + bas.cAndPersand + bas.cStar + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cUnderscore + bas.cPlus +
bas.cOpenCurlyBrace + bas.cCloseCurlyBrace + bas.cPipe + bas.cColon + bas.cDoubleQuote + bas.cLessThan + bas.cGreaterThan + bas.cQuestion + bas.cDot + bas.cComa + bas.cTilde; // !@#$%^&*()_+{}|:"<>?.,~

// File Extensions
export const cexe = bas.cex + bas.ce; // exe
export const cExe = bas.cEx + bas.ce; // Exe
export const cEXE = bas.cEX + bas.cE; // EXE
export const cdoc = bas.cdo + bas.cc; // doc
export const cDoc = bas.cDo + bas.cc; // Doc
export const cDOC = bas.cDO + bas.cC; // DOC
export const ccom = bas.cco + bas.cm; // com
export const cCom = bas.cCo + bas.cm; // Com
export const cCOM = bas.cCO + bas.cM; // COM
export const czip = bas.cz + bas.cip; // zip
export const cZip = bas.cZ + bas.cip; // Zip
export const cZIP = bas.cZ + bas.cIP; // ZIP
export const ctxt = bas.ct + bas.cxt; // txt
export const cTxt = bas.cT + bas.cxt; // Txt
export const cTXT = bas.cT + bas.cXT; // TXT
export const ccsv = bas.ccs + bas.cv; // csv
export const cCsv = bas.cCs + bas.cv; // Csv
export const cCSV = bas.cCS + bas.cV; // CSV
export const cxml = bas.cxm + bas.cl; // xml
export const cXml = bas.cXm + bas.cl; // Xml
export const cXML = bas.cXM + bas.cL; // XML
export const clog = bas.clo + bas.cg; // log
export const cLog = bas.cLo + bas.cg; // Log
export const cLOG = bas.cLO + bas.cG; // LOG
export const cjs = bas.cjs; // js
export const cJs = bas.cJs; // Js
export const cJS = bas.cJS; // JS
export const cjson = bas.cjs + bas.con; // json
export const cJson = bas.cJs + bas.con; // Json
export const cJSON = bas.cJS + bas.cON; // JSON
export const cenv = bas.cen + bas.cv; // env
export const cEnv = bas.cEn + bas.cv; // Env
export const cENV = bas.cEN + bas.cV; // ENV

export const cDotexe = bas.cDot + cexe; // .exe
export const cDotExe = bas.cDot + cExe; // .Exe
export const cDotEXE = bas.cDot + cEXE; // .EXE
export const cDotcsv = bas.cDot + ccsv; // .csv
export const cDotCsv = bas.cDot + cCsv; // .Csv
export const cDotCSV = bas.cDot + cCSV; // .CSV
export const cDotCom = bas.cDot + cCom; // .Com
export const cDotzip = bas.cDot + czip; // .zip
export const cDotZip = bas.cDot + cZip; // .Zip
export const cDotZIP = bas.cDot + cZIP; // .ZIP
export const cDottxt = bas.cDot + ctxt; // .txt
export const cDotTxt = bas.cDot + cTxt; // .Txt
export const cDotTXT = bas.cDot + cTXT; // .TXT
export const cDotxml = bas.cDot + cxml; // .xml
export const cDotXml = bas.cDot + cXml; // .Xml
export const cDotXML = bas.cDot + cXML; // .XML
export const cDotlog = bas.cDot + clog; // .log
export const cDotLog = bas.cDot + cLog; // .Log
export const cDotLOG = bas.cDot + cLOG; // .LOG
export const cDotjs = bas.cDot + cjs; // .js
export const cDotJs = bas.cDot + cJs; // .Js
export const cDotJS = bas.cDot + cJS; // .JS
export const cDotjson = bas.cDot + cjson; // .json
export const cDotJson = bas.cDot + cJson; // .Json
export const cDotJSON = bas.cDot + cJSON; // .JSON
export const cDotenv = bas.cDot + cenv; // .env
export const cDotEnv = bas.cDot + cEnv; // .Env
export const cDotENV = bas.cDot + cENV; // .ENV
export const cascii = bas.cas + bas.cci + bas.ci; // ascii

// Time Formatting
export const cYYYY = bas.cYY + bas.cYY; // YYYY
export const cSSS = bas.cSS + bas.cS; // SSS
export const cYYYYMMDD = cYYYY + bas.cMM + bas.cDD; // YYYYMMDD
export const cHHmmss = bas.cHH + bas.cmm + bas.css; // HHmmss
export const cHHmmss_SSS = cHHmmss + bas.cDash + cSSS; // HHmmss-SSS
export const cYYYYMMDD_HHmmss  = cYYYYMMDD + bas.cDash + cHHmmss; // YYYYMMDD-HHmmss
export const cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + bas.cDash + cSSS; // YYYYMMDD-HHmmss-SSS
export const cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + bas.cColon + bas.cMM + bas.cColon + bas.cDD + bas.cDash + bas.cHH + bas.cColon + bas.cmm + bas.cColon + bas.css + bas.cColon + cSSS; // YYYY:MM:DD-HH:mm:ss:SSS

// Operating Systems
export const cwin32 = phn.cwin + num.c32;

// Naval & Military Codes
export const cAlfa = bas.cAl + bas.cfa; //  Alfa
export const cBravo = bas.cBr + bas.cav + bas.co; // Bravo
export const cCharlie = bas.cCh + bas.car + bas.cli + bas.ce; // Charlie
export const cDelta = bas.cDe + bas.clt + bas.ca; // Delta
export const cEcho = bas.cEc + bas.cho; // Echo
export const cFoxtrot = bas.cFo + bas.cxt + bas.cro + bas.ct; // Foxtrot
export const cGolf = bas.cGo + bas.clf; // Golf
export const cHotel = bas.cHo + bas.cte + bas.cl; // Hotel
export const cIndia = bas.cIn + bas.cdi + bas.ca; // India
export const cJuliett = bas.cJu + bas.cli + bas.cet + bas.ct; // Juliett
export const cKilo = bas.cKi + bas.clo; // Kilo
export const cLima = bas.cLi + bas.cma; // Lima
export const cMike = bas.cMi + bas.cke; // Mike
export const cNovember = bas.cNo + bas.cv + phn.cemb + bas.cer;  // November
export const cOscar = bas.cOs + bas.cca + bas.cr; // Oscar
export const cPapa = bas.cPa + bas.cpa; // Papa
export const cQuebec = bas.cQu + bas.ceb + bas.cec; // Quebec
export const cRomeo = bas.cRo + bas.cme + bas.co; // Romeo
export const cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
export const cTango = bas.cTa + bas.cng + bas.co; // Tango
export const cUniform = bas.cUn + bas.cif + bas.cor + bas.cm; // Uniform
export const cVictor = bas.cVi + phn.cctor; // Victor
export const cWhiskey = bas.cWh + bas.cis + bas.cke + bas.cy; // Whiskey
export const cXray = bas.cXr + bas.cay; // Xray
export const cYankee = bas.cYa + bas.cnk + bas.cee; // Yankee
export const cZulu = bas.cZu + bas.clu; // Zulu

export const cAlpha = bas.cAl + bas.cph + bas.ca; // Alpha
export const cBeta = bas.cBe + bas.cta; // Beta
export const cGamma = bas.cGa + bas.cmm + bas.ca; // Gamma
export const cEpsilon = bas.cEp + bas.csi + bas.clo + bas.cn; // Epsilon
export const cDigamma = bas.cDi + bas.cga + bas.cmm + bas.ca; // Digamma
export const cZeta = bas.cZe + bas.cta; // Zeta
export const ceta = bas.cet + bas.ca; // eta
export const cEta = bas.cEt + bas.ca; // Eta
export const cTheta = bas.cTh + bas.cet + bas.ca; // Theta
export const cIota = bas.cIo + bas.cta; // Iota
export const cKappa = bas.cKa + bas.cpp + bas.ca; // Kappa
export const cLambda = bas.cLa + bas.cmb + bas.cda; // Lambda
export const cMu = bas.cMu; // Mu
export const cNu = bas.cNu; // Nu
export const cXi = bas.cXi; // Xi
export const cOmicron = bas.cOm + bas.cic + bas.cro + bas.cn; // Omicron
export const cPi = bas.cPi; // Pi
export const cSan = bas.cSa + bas.cn; // San
export const cKoppa = bas.cKo + bas.cpp + bas.ca; // Koppa
export const cRho = bas.cRh + bas.co; // Rho
export const cSigma = bas.cSi + bas.cgm + bas.ca; // Sigma
export const cTau = bas.cTa + bas.cu; // Tau
export const cUpsilon = bas.cUp + bas.csi + bas.clo + bas.cn; // Upsilon
export const cPhi = bas.cPh + bas.ci; // Phi
export const cChi = bas.cCh + bas.ci; // Chi
export const cPsi = bas.cPs + bas.ci; // Psi
export const cOmega = bas.cOm + bas.ceg + bas.ca; // Omega

// Months Of The Year
export const cJanuary = bas.cJa + bas.cn + phn.cuary; // January
export const cFebuary = bas.cFe + bas.cb + phn.cuary; // Febuary
export const cMarch = bas.cMa + bas.crc + bas.ch; // March
export const cApril = bas.cAp + bas.cri + bas.cl; // April
export const cMay = bas.cMa + bas.cy; // May
export const cJune = bas.cJu + bas.cne; // June
export const cJuly = bas.cJu + bas.cly; // July
export const cAugust = bas.cAu + bas.cgu + bas.cst; // August
export const cSeptember = bas.cSe + bas.cpt + phn.cemb + bas.cer; // September
export const cOctober = bas.cOc + bas.cto + bas.cb + bas.cer; // October
// cNovember = bas.cNo + bas.cv + bas.cemb + bas.cer; // November
export const cDecember = bas.cDe + bas.cc + phn.cemb + bas.cer; // December

// Constants Abreviations
export const cbas = bas.cba + bas.cs; // bas
export const cbiz = bas.cbi + bas.cz; // biz
export const cclr = phn.cclr; // clr
export const ccmd = bas.ccm + bas.cd; // cmd
export const ccfg = bas.ccf + bas.cg; // cfg
export const ccon = bas.cco + bas.cn; // con
export const cctr = phn.cctr; // ctr
export const cfnc = bas.cfn + bas.cc; // fnc
export const celm = bas.cel + bas.cm; // elm
export const cgen = phn.cgen; // gen
export const ciso = phn.ciso; // iso
export const ckts = bas.ckt + bas.cs; // kts
export const clng = bas.cln + bas.cg; // lng
export const cmsg = bas.cms + bas.cg; // msg
export const cnum = phn.cnum; // num
export const cphn = bas.cph + bas.cn; // phn
export const cshp = phn.cshp; // shp
export const csys = bas.csy + bas.cs; // sys
export const cunt = phn.cunt; // unt
export const cwrd = bas.cwr + bas.cd; // wrd
export const capc = bas.cap + bas.cc; // apc

// Miscelanious
export const cUTF8 = bas.cUT + bas.cF + num.c8; // UTF8
export const crgb = bas.crg + bas.cb; // rgb
export const cRGB = bas.cRG + bas.cB; // RGB
export const ccmyk = bas.ccm + bas.cyk; // cmyk
export const cCMYK = bas.cCM + bas.cYK; // CMYK
export const cconst = phn.ccon + bas.cst; // const
export const cConst = phn.cCon + bas.cst; // Const
export const cASAP = bas.cAS + bas.cAP; // ASAP
export const capp = bas.cap + bas.cp; // app
export const cApp = bas.cAp + bas.cp; // App
export const cAPP = bas.cAP + bas.cP; // APP
export const carg = bas.car + bas.cg; // arg
export const cArg = bas.cAr + bas.cg; // Arg
export const cargs = bas.ca + phn.crgs; // args
export const cArgs = bas.cA + phn.crgs; // Args
export const chex = bas.che + bas.cx; // hex
export const cHex = bas.cHe + bas.cx; // Hex
export const cregEx = phn.creg + bas.cEx; // regEx
export const cRegEx = phn.cReg + bas.cEx; // RegEx
export const cregExp = cregEx + bas.cp; // regExp
export const cRegExp = cRegEx + bas.cp; // RegExp
export const cbin = bas.cbi + bas.cn; // bin
export const cBin = bas.cBi + bas.cn; // Bin
export const cBIN = bas.cBI + bas.cN; // BIN
export const cinit = phn.cini + bas.ct; // init
export const cInit = phn.cIni + bas.ct; // Init
