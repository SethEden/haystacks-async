/**
 * @file plugin.system.constants.js
 * @module plugin.system.constants
 * @description A file to hold all of the plugin system constants.
 * So none of the constants in this file should be generic/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, num, wrd} = hayConst;

// Constants Validation
export const cresolvedConstantsPath_Plugin = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cPlugin; // resolvedConstantsPath_Plugin
export const cpluginBusinessConstantsValidation = wrd.cplugin + wrd.cBusiness + wrd.cConstants + wrd.cValidation; // pluginBusinessConstantsValidation
export const cpluginCommandConstantsValidation = wrd.cplugin + wrd.cCommand + wrd.cConstants + wrd.cValidation; // pluginCommandConstantsValidation
export const cpluginConstantsValidation = wrd.cplugin + wrd.cConstants + wrd.cValidation; // pluginConstantsValidation
export const cpluginMessageConstantsValidation = wrd.cplugin + wrd.cMessage + wrd.cConstants + wrd.cValidation; // pluginMessageConstantsValidation
export const cpluginSystemConstantsValidation = wrd.cplugin + wrd.cSystem + wrd.cConstants + wrd.cValidation; // pluginSystemConstantsValidation

// Filenames
export const cplugin_business_constants_js = wrd.cplugin + bas.cDot + wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // plugin.business.constants.js
export const cplugin_command_constants_js = wrd.cplugin + bas.cDot + wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // plugin.command.constants.js
export const cplugin_constants_js = wrd.cplugin + bas.cDot + wrd.cconstants + gen.cDotjs; // plugin.constants.js
export const cplugin_message_constants_js = wrd.cplugin + bas.cDot + wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // plugin.message.constants.js
export const cplugin_system_constants_js = wrd.cplugin + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // plugin.system.constants.js