/**
 * @file allConstantsValidationMetadata.js
 * @module allConstantsValidationMetadata
 * @description Contains initialization for all constants validation meta-data.
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';
const {bas, cfg, gen, msg, sys, wrd, bas_cv, biz_cv, clr_cv, cmd_cv, cfg_cv, ctr_cv, elm_cv, fnc_cv, gen_cv, iso_cv, knt_cv, lng_cv, msg_cv, num_cv, phn_cv, sys_cv, unt_cv, wrd_cv} = hayConst;

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// resources.constantsValidation.allConstantsValidationMetaData.
const namespacePrefix = wrd.cresources + bas.cDot + wrd.cconstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeAllSystemConstantsValidationData
 * @description Initializes all of the system constants validation data so that it cn be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
async function initializeAllSystemConstantsValidationData() {
  let functionName = initializeAllSystemConstantsValidationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let constantsPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkConstantsPath);
  // constantsPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsPathIs + constantsPath);

  let allSystemConstantsValidationData = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cElementConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cFunctionConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cIsotopeConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cKnotConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = [];

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = bas_cv.basicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = biz_cv.businessConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = clr_cv.colorConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = cmd_cv.commandConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = cfg_cv.configurationConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = ctr_cv.countryConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cElementConstantsValidation] = elm_cv.elementConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cFunctionConstantsValidation] = fnc_cv.functionConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = gen_cv.genericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cIsotopeConstantsValidation] = iso_cv.isotopeConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cKnotConstantsValidation] = knt_cv.knotConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = lng_cv.languageConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = msg_cv.messageConstantsVaidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = num_cv.numericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = phn_cv.phonicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = sys_cv.systemConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = unt_cv.unitConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = wrd_cv.wordConstantsValidation;

  // Setup all the paths to the constants files.
  let resolvedConstantsPath_Basic = path.resolve(constantsPath + bas.cForwardSlash + sys.cbasic_constants_js);
  let resolvedConstantsPath_Business = path.resolve(constantsPath + bas.cForwardSlash + sys.cbusiness_constants_js);
  let resolvedConstantsPath_Color = path.resolve(constantsPath + bas.cForwardSlash + sys.ccolor_constants_js);
  let resolvedConstantsPath_Command = path.resolve(constantsPath + bas.cForwardSlash + sys.ccommand_constants_js);
  let resolvedConstantsPath_Configuration = path.resolve(constantsPath + bas.cForwardSlash + sys.cconfiguration_constants_js);
  let resolvedConstantsPath_Country = path.resolve(constantsPath + bas.cForwardSlash + sys.ccountry_constants_js);
  let resolvedConstantsPath_Element = path.resolve(constantsPath + bas.cForwardSlash + sys.celement_constants_js);
  let resolvedConstantsPath_Function = path.resolve(constantsPath + bas.cForwardSlash + sys.cfunction_constants_js);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + bas.cForwardSlash + sys.cgeneric_constants_js);
  let resolvedConstantsPath_Isotope = path.resolve(constantsPath + bas.cForwardSlash + sys.cisotope_constants_js);
  let resolvedConstantsPath_Knot = path.resolve(constantsPath + bas.cForwardSlash + sys.cknot_constants_js);
  let resolvedConstantsPath_Language = path.resolve(constantsPath + bas.cForwardSlash + sys.clanguage_constants_js);
  let resolvedConstantsPath_Message = path.resolve(constantsPath + bas.cForwardSlash + sys.cmessage_constants_js);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + bas.cForwardSlash + sys.cnumeric_constants_js);
  let resolvedConstantsPath_Phonic = path.resolve(constantsPath + bas.cForwardSlash + sys.cphonic_constants_js);
  let resolvedConstantsPath_System = path.resolve(constantsPath + bas.cForwardSlash + sys.csystem_constants_js);
  let resolvedConstantsPath_Unit = path.resolve(constantsPath + bas.cForwardSlash + sys.cunit_constants_js);
  let resolvedConstantsPath_Word = path.resolve(constantsPath + bas.cForwardSlash + sys.cword_constants_js);

  // resolvedConstantsPath_Basic is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_BasicIs + resolvedConstantsPath_Basic);
  // resolvedConstantsPath_Business is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_BusinessIs + resolvedConstantsPath_Business);
  // resolvedConstantsPath_Color is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_ColorIs + resolvedConstantsPath_Color);
  // resolvedConstantsPath_Command is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_CommandIs + resolvedConstantsPath_Command);
  // resolvedConstantsPath_Configuration is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_ConfigurationIs + resolvedConstantsPath_Configuration);
  // resolvedConstantsPath_Country is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_CountryIs + resolvedConstantsPath_Country);
  // resolvedConstantsPath_Element is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_ElementIs + resolvedConstantsPath_Element);
  // resolvedConstantsPath_Function is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_FunctionIs + resolvedConstantsPath_Function);
  // resolvedConstantsPath_Generic is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);
  // resolvedConstantsPath_Isotope is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_IsotopeIs + resolvedConstantsPath_Isotope);
  // resolvedConstantsPath_Knot is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_KnotIs + resolvedConstantsPath_Knot);
  // resolvedConstantsPath_Language is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_LanguageIs + resolvedConstantsPath_Language);
  // resolvedConstantsPath_Message is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_MessageIs + resolvedConstantsPath_Message);
  // resolvedConstantsPath_Numeric is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);
  // resolvedConstantsPath_Phonic is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_PhonicIs + resolvedConstantsPath_Phonic);
  // resolvedConstantsPath_System is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);
  // resolvedConstantsPath_Unit is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_UnitIs + resolvedConstantsPath_Unit);
  // resolvedConstantsPath_Word1 is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_WordIs + resolvedConstantsPath_Word);

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cBasicConstantsValidation] = resolvedConstantsPath_Basic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cBusinessConstantsValidation] = resolvedConstantsPath_Business;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cColorConstantsValidation] = resolvedConstantsPath_Color;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cCommandConstantsValidation] = resolvedConstantsPath_Command;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cConfigurationConstantsValidation] = resolvedConstantsPath_Configuration;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cCountryConstantsValidation] = resolvedConstantsPath_Country;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cElementConstantsValidation] = resolvedConstantsPath_Element;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cFunctionConstantsValidation] = resolvedConstantsPath_Function;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cGenericConstantsValidation] = resolvedConstantsPath_Generic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cIsotopeConstantsValidation] = resolvedConstantsPath_Isotope;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cKnotConstantsValidation] = resolvedConstantsPath_Knot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cLanguageConstantsValidation] = resolvedConstantsPath_Language;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cMessageConstantsValidation] = resolvedConstantsPath_Message;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cNumericConstantsValidation] = resolvedConstantsPath_Numeric;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cPhonicConstantsValidation] = resolvedConstantsPath_Phonic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cSystemConstantsValidation] = resolvedConstantsPath_System;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cUnitConstantsValidation] = resolvedConstantsPath_Unit;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cWordConstantsValidation] = resolvedConstantsPath_Word;

  // Basic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cBasicConstantsValidation] = msg.cBasicConstantsPhase1Validation;
  // Business Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cBusinessConstantsValidation] = msg.cBusinessConstantsPhase1Validation;
  // Color Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cColorConstantsValidation] = msg.cColorConstantsPhase1Validation;
  // Command Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cCommandConstantsValidation] = msg.cCommandConstantsPhase1Validation;
  // Configuration Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cConfigurationConstantsValidation] = msg.cConfigurationConstantsPhase1Validation;
  // Country Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cCountryConstantsValidation] = msg.cCountryConstantsPhase1Validation;
  // Element Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cElementConstantsValidation] = msg.cElementConstantsPhase1Validation;
  // Function Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cFunctionConstantsValidation] = msg.cFunctionConstantsPhase1Validation;
  // Generic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cGenericConstantsValidation] = msg.cGenericConstantsPhase1Validation;
  // Isotope Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cIsotopeConstantsValidation] = msg.cIsotopeConstantsPhase1Validation;
  // Knot Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cKnotConstantsValidation] = msg.cKnotConstantsPhase1Validation;
  // Language Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cLanguageConstantsValidation] = msg.cLanguageConstantsPhase1Validation;
  // Message Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cMessageConstantsValidation] = msg.cMessageConstantsPhase1Validation;
  // Numeric Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cNumericConstantsValidation] = msg.cNumericConstantsPhase1Validation;
  // Phonic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cPhonicConstantsValidation] = msg.cPhonicConstantsPhase1Validation;
  // System Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cSystemConstantsValidation] = msg.cSystemConstantsPhase1Validation;
  // Unit Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cUnitConstantsValidation] = msg.cUnitConstantsPhase1Validation;
  // Word1 Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cWordConstantsValidation] = msg.cWordConstantsPhase1Validation;

  // Basic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cBasicConstantsValidation] = msg.cBasicConstantsPhase2Validation;
  // Business Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cBusinessConstantsValidation] = msg.cBusinessConstantsPhase2Validation;
  // Color Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cColorConstantsValidation] = msg.cColorConstantsPhase2Validation;
  // Command Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cCommandConstantsValidation] = msg.cCommandConstantsPhase2Validation;
  // Configuration Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cConfigurationConstantsValidation] = msg.cConfigurationConstantsPhase2Validation;
  // Country Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cCountryConstantsValidation] = msg.cCountryConstantsPhase2Validation;
  // Element Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cElementConstantsValidation] = msg.cElementConstantsPhase2Validation;
  // Function Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cFunctionConstantsValidation] = msg.cFunctionConstantsPhase2Validation;
  // Generic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cGenericConstantsValidation] = msg.cGenericConstantsPhase2Validation;
  // Isotope Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cIsotopeConstantsValidation] = msg.cIsotopeConstantsPhase2Validation;
  // Knot Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cKnotConstantsValidation] = msg.cKnotConstantsPhase2Validation;
  // Language Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cLanguageConstantsValidation] = msg.cLanguageConstantsPhase2Validation;
  // Message Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cMessageConstantsValidation] = msg.cMessageConstantsPhase2Validation;
  // Numeric Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cNumericConstantsValidation] = msg.cNumericConstantsPhase2Validation;
  // Phonic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cPhonicConstantsValidation] = msg.cPhonicConstantsPhase2Validation;
  // System Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cSystemConstantsValidation] = msg.cSystemConstantsPhase2Validation;
  // Unit Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cUnitConstantsValidation] = msg.cUnitConstantsPhase2Validation;
  // Word1 Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cWordConstantsValidation] = msg.cWordConstantsPhase2Validation;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cBasicConstantsValidation] = gen.cbas;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cBusinessConstantsValidation] = gen.cbiz;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cColorConstantsValidation] = gen.cclr;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cCommandConstantsValidation] = gen.ccmd;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cConfigurationConstantsValidation] = gen.ccfg;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cCountryConstantsValidation] = gen.cctr;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cElementConstantsValidation] = gen.celm;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cFunctionConstantsValidation] = gen.cfnc;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cGenericConstantsValidation] = gen.cgen;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cIsotopeConstantsValidation] = gen.ciso;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cKnotConstantsValidation] = gen.cknt;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cLanguageConstantsValidation] = gen.clng;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cMessageConstantsValidation] = gen.cmsg;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cNumericConstantsValidation] = gen.cnum;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cPhonicConstantsValidation] = gen.cphn;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cSystemConstantsValidation] = gen.csys;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cUnitConstantsValidation] = gen.cunt;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cWordConstantsValidation] = gen.cwrd;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cBasicConstantsValidation] = sys.cbasic_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cBusinessConstantsValidation] = sys.cbusiness_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cColorConstantsValidation] = sys.ccolor_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cCommandConstantsValidation] = sys.ccommand_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cConfigurationConstantsValidation] = sys.cconfiguration_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cCountryConstantsValidation] = sys.ccountry_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cElementConstantsValidation] = sys.celement_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cFunctionConstantsValidation] = sys.cfunction_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cGenericConstantsValidation] = sys.cgeneric_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cIsotopeConstantsValidation] = sys.cisotope_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cKnotConstantsValidation] = sys.cknot_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cLanguageConstantsValidation] = sys.clanguage_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cMessageConstantsValidation] = sys.cmessage_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cNumericConstantsValidation] = sys.cnumeric_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cPhonicConstantsValidation] = sys.cphonic_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cSystemConstantsValidation] = sys.csystem_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cUnitConstantsValidation] = sys.cunit_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cWordConstantsValidation] = sys.cword_constants_js;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cBasicConstantsValidation] = gen.cbas + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cBusinessConstantsValidation] = gen.cbiz + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cColorConstantsValidation] = gen.cclr + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cCommandConstantsValidation] = gen.ccmd + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cConfigurationConstantsValidation] = gen.ccfg + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cCountryConstantsValidation] = gen.cctr + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cElementConstantsValidation] = gen.celm + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cFunctionConstantsValidation] = gen.cfnc + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cGenericConstantsValidation] = gen.cgen + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cIsotopeConstantsValidation] = gen.ciso + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cKnotConstantsValidation] = gen.cknt + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cLanguageConstantsValidation] = gen.clng + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cMessageConstantsValidation] = gen.cmsg + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cNumericConstantsValidation] = gen.cnum + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cPhonicConstantsValidation] = gen.cphn + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cSystemConstantsValidation] = gen.csys + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cUnitConstantsValidation] = gen.cunt + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cWordConstantsValidation] = gen.cwrd + bas.cDot;

  await loggers.consoleLog(namespacePrefix + functionName, msg.callSystemConstantsValidationDataIs + JSON.stringify(allSystemConstantsValidationData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allSystemConstantsValidationData;
}

export default {
  initializeAllSystemConstantsValidationData
};
