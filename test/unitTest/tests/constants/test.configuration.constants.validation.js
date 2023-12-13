/**
 * @file test.configuration.constants.validation.js
 * @module test.configuration.constants.validation
 * @description Contains all validations for named test configuration constants.
 * @requires module:test.configuration.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_cfg from './test.configuration.constants.js';

/**
 * @function unitTestConfigurationConstantsValidation
 * @description Initializes the unit test configuration constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Vlad Sorokin
 * @date 2022/03/22
 */
export const unitTestConfigurationConstantsValidation = [
    {Name: 'cargumentDrivenInterface', Actual: tst_cfg.cargumentDrivenInterface, Expected: 'argumentDrivenInterface'}
  ];
  
