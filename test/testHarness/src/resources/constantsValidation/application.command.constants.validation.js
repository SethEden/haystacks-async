/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.validation
 * @description Contains all validations for named application command constants.
 * @requires module:application.command.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // Client Commands in order
  // ********************************
  {Name: 'ccustomEchoCommand', Actual: app_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'},
  {Name: 'cbossPanic', Actual: app_cmd.cbossPanic, Expected: 'bossPanic'},
  {Name: 'ccommand01', Actual: app_cmd.ccommand01, Expected: 'command01'},
  {Name: 'ccommand02', Actual: app_cmd.ccommand02, Expected: 'command02'},
  {Name: 'ccommand03', Actual: app_cmd.ccommand03, Expected: 'command03'},
  {Name: 'ccommand04', Actual: app_cmd.ccommand04, Expected: 'command04'},
  {Name: 'ccommand05', Actual: app_cmd.ccommand05, Expected: 'command05'},
  {Name: 'ccommand06', Actual: app_cmd.ccommand06, Expected: 'command06'},
  {Name: 'ccommand07', Actual: app_cmd.ccommand07, Expected: 'command07'},
  {Name: 'ccommand08', Actual: app_cmd.ccommand08, Expected: 'command08'},
  {Name: 'ccommand09', Actual: app_cmd.ccommand09, Expected: 'command09'},
  {Name: 'ccommand10', Actual: app_cmd.ccommand10, Expected: 'command10'}
];
