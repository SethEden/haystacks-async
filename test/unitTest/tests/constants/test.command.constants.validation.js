/**
 * @file test.command.constants.validation.js
 * @module test.command.constants.validation
 * @description Contains all validations for named test command constants.
 * @requires module:test.command.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_cmd from './test.command.constants.js';

/**
 * @function unitTestCommandConstantsValidation
 * @description Initializes the unit test command constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Vlad Sorokin
 * @date 2022/03/22
 */
export const unitTestCommandConstantsValidation = [
    // ********************************
    // UnitTestSystem Commands in order
    // ********************************
    {Name: 'cunitTestHelp', Actual: tst_cmd.cunitTestHelp, Expected: 'unitTestHelp'},
    {Name: 'cunitTestWorkflowHelp', Actual: tst_cmd.cunitTestWorkflowHelp, Expected: 'unitTestWorkflowHelp'},
  
    // ********************************
    // UnitTestTest Commands in order
    // ********************************
    {Name: 'cvalidateUnitTestConstants', Actual: tst_cmd.cvalidateUnitTestConstants, Expected: 'validateUnitTestConstants'},
    {Name: 'cvalidateUnitTestCommandAliases', Actual: tst_cmd.cvalidateUnitTestCommandAliases, Expected: 'validateUnitTestCommandAliases'},
    {Name: 'cvalidateUnitTestWorkflows', Actual: tst_cmd.cvalidateUnitTestWorkflows, Expected: 'validateUnitTestWorkflows'},
    {Name: 'callUnitTestValidations', Actual: tst_cmd.callUnitTestValidations, Expected: 'allUnitTestValidations'},
  
    // ********************************
    // Client Commands in order
    // ********************************
    {Name: 'ccustomEchoCommand', Actual: tst_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'},
    {Name: 'cbossPanic', Actual: tst_cmd.cbossPanic, Expected: 'bossPanic'},
    {Name: 'ccommand01', Actual: tst_cmd.ccommand01, Expected: 'command01'},
    {Name: 'ccommand02', Actual: tst_cmd.ccommand02, Expected: 'command02'},
    {Name: 'ccommand03', Actual: tst_cmd.ccommand03, Expected: 'command03'},
    {Name: 'ccommand04', Actual: tst_cmd.ccommand04, Expected: 'command04'},
    {Name: 'ccommand05', Actual: tst_cmd.ccommand05, Expected: 'command05'},
    {Name: 'ccommand06', Actual: tst_cmd.ccommand06, Expected: 'command06'},
    {Name: 'ccommand07', Actual: tst_cmd.ccommand07, Expected: 'command07'},
    {Name: 'ccommand08', Actual: tst_cmd.ccommand08, Expected: 'command08'},
    {Name: 'ccommand09', Actual: tst_cmd.ccommand09, Expected: 'command09'},
    {Name: 'ccommand10', Actual: tst_cmd.ccommand10, Expected: 'command10'}
  ];
  