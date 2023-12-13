/**
 * @file test.system.constants.validation.js
 * @module test.system.constants.validation
 * @description Contains all validations for test system constants.
 * @requires module:test.system.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_sys from './test.system.constants.js';

/**
 * @function unitTestSystemConstantsValidation
 * @description Initializes the unit test system constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/03/23
 */
export const unitTestSystemConstantsValidation = [
    {Name: 'cresolvedConstantsPath_UnitTest', Actual: tst_sys.cresolvedConstantsPath_UnitTest, Expected: 'resolvedConstantsPath_UnitTest'},
    {Name: 'cunitTestBusinessConstantsValidation', Actual: tst_sys.cunitTestBusinessConstantsValidation, Expected: 'unitTestBusinessConstantsValidation'},
    {Name: 'cunitTestCommandConstantsValidation', Actual: tst_sys.cunitTestCommandConstantsValidation, Expected: 'unitTestCommandConstantsValidation'},
    {Name: 'cunitTestConfigurationConstantsValidation', Actual: tst_sys.cunitTestConfigurationConstantsValidation, Expected: 'unitTestConfigurationConstantsValidation'},
    {Name: 'cunitTestConstantsValidation', Actual: tst_sys.cunitTestConstantsValidation, Expected:  'unitTestConstantsValidation'},
    {Name: 'cunitTestMessageConstantsValidation', Actual: tst_sys.cunitTestMessageConstantsValidation, Expected: 'unitTestMessageConstantsValidation'},
    {Name: 'cunitTestSystemConstantsValidation', Actual: tst_sys.cunitTestSystemConstantsValidation, Expected: 'unitTestSystemConstantsValidation'},
  
    // Filenames
    {Name: 'cunitTest_business_constants_js', Actual: tst_sys.cunitTest_business_constants_js, Expected: 'unitTest.business.constants.js'},
    {Name: 'cunitTest_command_constants_js', Actual: tst_sys.cunitTest_command_constants_js, Expected: 'unitTest.command.constants.js'},
    {Name: 'cunitTest_configuration_constants_js', Actual: tst_sys.cunitTest_configuration_constants_js, Expected: 'unitTest.configuration.constants.js'},
    {Name: 'cunitTest_constants_js', Actual: tst_sys.cunitTest_constants_js, Expected: 'unitTest.constants.js'},
    {Name: 'cunitTest_message_constants_js', Actual: tst_sys.cunitTest_message_constants_js, Expected: 'unitTest.message.constants.js'},
    {Name: 'cunitTest_system_constants_js', Actual: tst_sys.cunitTest_system_constants_js, Expected: 'unitTest.system.constants.js'}
  ];