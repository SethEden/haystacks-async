/**
 * @file testConstantsValidationMetadata.js
 * @module testConstantsValidationMetadata
 * @description Test data for the unit test.
 * @requires module:test.constants
 * @requires module:test.message.constants
 * @requires module:test.system.constants
 * @requires module:test.business.constants.validation
 * @requires module:test.command.constants.validation
 * @requires module:test.configuration.constants.validation
 * @requires module:test.constants.validation
 * @requires module:test.message.constants.validation
 * @requires module:test.system.constants.validation
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2023/05/12
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst from '../../../tests/constants/test.constants.js';
import * as tst_msg from '../../../tests/constants/test.message.constants.js';
import * as tst_sys from '../../../tests/constants/test.system.constants.js';
import * as tst_biz_cv from '../../../tests/constants/test.business.constants.validation.js';
import * as tst_cmd_cv from '../../../tests/constants/test.command.constants.validation.js';
import * as tst_cfg_cv from '../../../tests/constants/test.configuration.constants.validation.js';
import * as tst_cv from '../../../tests/resources/test.constants.validation.js';
import * as tst_msg_cv from '../../../tests/constants/test.message.constants.validation.js';
import * as tst_sys_cv from '../../../tests/constants/test.system.constants.validation.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.testHarness.resources.constantsValidation.allApplicationConstantsValidationMetadata.
let namespacePrefix = wrd.cunit + wrd.Test + bas.cDot  + tst.cUnitTestName + bas.cDot + wrd.cresources + bas.cDot + wrd.cconstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeAllUnitTestConstantsValidationData
 * @description Initializes all of the unit test constants validation data so that it can be used to validate all of the constants.
 * @return {object} An object that contains all of the data and metaData for application level constants validation.
 * @author Seth Hollingsead
 * @date 2022/03/23
 */
async function initializeAllUnitTestConstantsValidationData() {
    let functionName = initializeAllUnitTestConstantsValidationData.name;
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
    let constantsPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.capplicationConstantsPath);
    // constantsPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cconstantsPathIs + constantsPath);

    let allUnitTestConstantsValidationData = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestBusinessConstantsValidation] = [];
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestCommandConstantsValidation] = [];
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestConfigurationConstantsValidation] = [];
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestConstantsValidation] = [];
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestMessageConstantsValidation] = [];
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestSystemConstantsValidation] = [];

    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestBusinessConstantsValidation] = tst_biz_cv.unitTestBusinessConstantsValidation;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestCommandConstantsValidation] = tst_cmd_cv.unitTestCommandConstantsValidation;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestConfigurationConstantsValidation] = tst_cfg_cv.unitTestConfigurationConstantsValidation;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestConstantsValidation] = tst_cv.unitTestConstantsValidation;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestMessageConstantsValidation] = tst_msg_cv.unitTestMessageConstantsValidation;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][tst_sys.cunitTestSystemConstantsValidation] = tst_sys_cv.unitTestSystemConstantsValidation;

    // Setup all the paths to the constants files.
    let resolvedConstantsPath_UnitTestBusiness = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_business_constants_js);
    let resolvedConstantsPath_UnitTestCommand = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_command_constants_js);
    let resolvedConstantsPath_UnitTestConfiguration = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_configuration_constants_js);
    let resolvedConstantsPath_UnitTestConstant = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_constants_js);
    let resolvedConstantsPath_UnitTestMessage = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_message_constants_js);
    let resolvedConstantsPath_UnitTestSystem = path.resolve(constantsPath + bas.cForwardSlash + tst_sys.cunitTest_system_constants_js);

    // resolvedConstantsPath_UnitTestBusiness is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestBusinessIs + resolvedConstantsPath_UnitTestBusiness);
    // resolvedConstantsPath_UnitTestCommand is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestCommandIs + resolvedConstantsPath_UnitTestCommand);
    // resolvedConstantsPath_UnitTestConfiguration is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestConfigurationIs + resolvedConstantsPath_UnitTestConfiguration);
    // resolvedConstantsPath_UnitTestConstant is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestConstantIs + resolvedConstantsPath_UnitTestConstant);
    // resolvedConstantsPath_UnitTestMessage is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestMessageIs + resolvedConstantsPath_UnitTestMessage);
    // resolvedConstantsPath_UnitTestSystem is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.cresolvedConstantsPath_UnitTestSystemIs + resolvedConstantsPath_UnitTestSystem);

    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestBusinessConstantsValidation] = resolvedConstantsPath_UnitTestBusiness;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestCommandConstantsValidation] = resolvedConstantsPath_UnitTestCommand;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestConfigurationConstantsValidation] = resolvedConstantsPath_UnitTestConfiguration;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestConstantsValidation] = resolvedConstantsPath_UnitTestConstant;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestMessageConstantsValidation] = resolvedConstantsPath_UnitTestMessage;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][tst_sys.cunitTestSystemConstantsValidation] = resolvedConstantsPath_UnitTestSystem;

    // Application Business Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestBusinessConstantsValidation] = tst_msg.cApplicationBusinessConstantsPhase1Validation;
    // Application Command Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestCommandConstantsValidation] = tst_msg.cApplicationCommandConstantsPhase1Validation;
    // Application Configuration Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestConfigurationConstantsValidation] = tst_msg.cApplicationConfigurationConstantsPhase1Validation;
    // Application Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestConstantsValidation] = tst_msg.cApplicationConstantsPhase1Validation;
    // Application Message Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestMessageConstantsValidation] = tst_msg.cApplicationMessageConstantsPhase1Validation;
    // Application System Constants Phase 1 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][tst_sys.cunitTestSystemConstantsValidation] = tst_msg.cApplicationSystemConstantsPhase1Validation;

    // Application Business Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestBusinessConstantsValidation] = tst_msg.cApplicationBusinessConstantsPhase2Validation;
    // Application Command Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestCommandConstantsValidation] = tst_msg.cApplicationCommandConstantsPhase2Validation;
    // Application Configuration Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestConfigurationConstantsValidation] = tst_msg.cApplicationConfigurationConstantsPhase2Validation;
    // Application Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestConstantsValidation] = tst_msg.cApplicationConstantsPhase2Validation;
    // Application Message Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestMessageConstantsValidation] = tst_msg.cApplicationMessageConstantsPhase2Validation;
    // Application System Constants Phase 2 Validation
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][tst_sys.cunitTestSystemConstantsValidation] = tst_msg.cApplicationSystemConstantsPhase2Validation;

    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestConfigurationConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccfg;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestConstantsValidation] = gen.capc;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][tst_sys.cunitTestSystemConstantsValidation] = gen.capp + bas.cUnderscore + gen.csys;

    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestBusinessConstantsValidation] = tst_sys.cunitTest_business_constants_js;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestCommandConstantsValidation] = tst_sys.cunitTest_command_constants_js;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestConfigurationConstantsValidation] = tst_sys.cunitTest_configuration_constants_js;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestConstantsValidation] = tst_sys.cunitTest_constants_js;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestMessageConstantsValidation] = tst_sys.cunitTest_message_constants_js;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][tst_sys.cunitTestSystemConstantsValidation] = tst_sys.cunitTest_system_constants_js;

    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz + bas.cDot;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd + bas.cDot;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestConfigurationConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccfg + bas.cDot;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestConstantsValidation] = gen.capc + bas.cDot;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg + bas.cDot;
    allUnitTestConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][tst_sys.cunitTestSystemConstantsValidation] = gen.capp + bas.cUnderscore + gen.csys + bas.cDot;

    // allUnitTestConstantsValidationData is:
    await haystacks.consoleLog(namespacePrefix, functionName, tst_msg.callUnitTestConstantsValidationDataIs + JSON.stringify(allUnitTestConstantsValidationData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
    return allUnitTestConstantsValidationData;
}

export default {
initializeAllUnitTestConstantsValidationData
};
