/**
 * @file test.command.constants.js
 * @module test.command.constants
 * @description A file to hold all of the unit test command constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/12/06
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {num, wrd} = hayConst;

// ********************************
// UnitTestSystem Commands in order
// ********************************
export const cunitTestHelp = wrd.cunit + wrd.cTest + wrd.cHelp; // unitTestHelp
export const cunitTestWorkflowHelp = wrd.cunit + wrd.cTest + wrd.cWorkflow + wrd.cHelp; // unitTestWorkflowHelp

// ********************************
// UnitTestTest Commands in order
// ********************************
export const cvalidateUnitTestConstants = wrd.cvalidate + wrd.cUnit + wrd.cTest + wrd.cConstants; // cvalidateUnitTestConstants
export const cvalidateUnitTestCommandAliases = wrd.cvalidate + wrd.cUnit + wrd.cTest + wrd.cCommand + wrd.cAliases; // cvalidateUnitTestCommandAliases
export const cvalidateUnitTestWorkflows = wrd.cvalidate + wrd.cUnit + wrd.cTest + wrd.cWorkflows; // cvalidateUnitTestWorkflows
export const callUnitTestValidations = wrd.call + wrd.cUnit + wrd.cTest + wrd.cValidations; // callUnitTestValidations

// ********************************
// Unit Test Commands in order
// ********************************
export const ccustomEchoCommand = wrd.ccustom + wrd.cEcho + wrd.cCommand; // customEchoCommand
export const cbossPanic = wrd.cboss + wrd.cPanic; // bossPanic
export const ccommand01 = wrd.ccommand + num.c0 + num.c1; // command01
export const ccommand02 = wrd.ccommand + num.c0 + num.c2; // command02
export const ccommand03 = wrd.ccommand + num.c0 + num.c3; // command03
export const ccommand04 = wrd.ccommand + num.c0 + num.c4; // command04
export const ccommand05 = wrd.ccommand + num.c0 + num.c5; // command05
export const ccommand06 = wrd.ccommand + num.c0 + num.c6; // command06
export const ccommand07 = wrd.ccommand + num.c0 + num.c7; // command07
export const ccommand08 = wrd.ccommand + num.c0 + num.c8; // command08
export const ccommand09 = wrd.ccommand + num.c0 + num.c9; // command09
export const ccommand10 = wrd.ccommand + num.c10; // command10
