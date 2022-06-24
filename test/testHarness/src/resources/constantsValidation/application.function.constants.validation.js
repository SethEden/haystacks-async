/**
 * @file application.function.constants.validation.js
 * @module application.function.constants.validation
 * @description Contains all validations for named function constants.
 * @requires module:application.function.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_fnc from '../../constants/application.function.constants.js';

/**
 * @function applicationFunctionConstantsValidation
 * @description Initializes the application function constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationFunctionConstantsValidation = [
  // rulesLibrary
  {Name: 'cinitClientRulesLibrary', Actual: app_fnc.cinitClientRulesLibrary, Expected: 'initClientRulesLibrary'},

  // commandsLibrary
  {Name: 'cinitClientCommandsLibrary', Actual: app_fnc.cinitClientCommandsLibrary, Expected: 'initClientCommandsLibrary'}
];
