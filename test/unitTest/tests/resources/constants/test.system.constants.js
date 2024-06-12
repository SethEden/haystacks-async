/**
 * @file test.system.constants.js
 * @module test.system.constants
 * @description A file to hold all of the unit test system constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, num, wrd} = hayConst

// Constants Validation
export const cresolvedConstantsPath_UnitTest = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cUnit + wrd.cTest; // resolvedConstantsPath_UnitTest
export const cunitTestBusinessConstantsValidation = wrd.cunit + wrd.cTest + wrd.cBusiness + wrd.cConstants + wrd.cValidation; // unitTestBusinessConstantsValidation
export const cunitTestCommandConstantsValidation = wrd.cunit + wrd.cTest + wrd.cCommand + wrd.cConstants + wrd.cValidation; // unitTestCommandConstantsValidation
export const cunitTestConfigurationConstantsValidation = wrd.cunit + wrd.cTest + wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // unitTestConfigurationConstantsValidation
export const cunitTestConstantsValidation = wrd.cunit + wrd.cTest + wrd.cConstants + wrd.cValidation; // unitTestConstantsValidation
export const cunitTestMessageConstantsValidation = wrd.cunit + wrd.cTest + wrd.cMessage + wrd.cConstants + wrd.cValidation; // unitTestMessageConstantsValidation
export const cunitTestSystemConstantsValidation = wrd.cunit + wrd.cTest + wrd.cSystem + wrd.cConstants + wrd.cValidation; // unitTestSystemConstantsValidation

// Filenames
export const cunitTest_business_constants_js = wrd.cunit + wrd.cTest + bas.cDot + wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.business.constants.js
export const cunitTest_command_constants_js =wrd.cunit +  wrd.cTest + bas.cDot + wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.command.constants.js
export const cunitTest_configuration_constants_js = wrd.cunit + wrd.cTest + bas.cDot + wrd.cconfiguration + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.configuration.constants.js
export const cunitTest_constants_js = wrd.cunit + wrd.cTest + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.constants.js
export const cunitTest_message_constants_js = wrd.cunit + wrd.cTest + bas.cDot + wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.message.constants.js
export const cunitTest_system_constants_js = wrd.cunit + wrd.cTest + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // unitTest.system.constants.js

export const cplugin_one = wrd.cplugin + bas.cDash + num.cone; // plugin-one
export const cplugin_two = wrd.cplugin + bas.cDash + num.ctwo; // plugin-two
export const cplugin_three = wrd.cplugin + bas.cDash + num.cthree; // plugin-three
