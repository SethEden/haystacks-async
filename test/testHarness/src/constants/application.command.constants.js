/**
 * @file application.command.constants.js
 * @module application.command.constants
 * @description A file to hold all of the client application command constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {wrd} = hayConst;

// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = wrd.ccustom + wrd.cEcho + wrd.cCommand; // customEchoCommand
export const cbossPanic = wrd.cboss + wrd.cPanic; // bossPanic
