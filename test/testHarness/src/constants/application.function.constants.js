/**
 * @file application.function.constants.js
 * @module application.function.constants
 * @description Contains a list of all the functions in the client application.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/02/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {gen, wrd} = hayConst;

// rulesLibrary
export const cinitClientRulesLibrary = gen.cinit + wrd.cClient + wrd.cRules + wrd.cLibrary; // initClientRulesLibrary

// commandsLibrary
export const cinitClientCommandsLibrary = gen.cinit + wrd.cClient + wrd.cCommands + wrd.cLibrary; // initClientCommandsLibrary
