/**
 * @file plugin.message.constants.js
 * @module plugin.message.constants
 * @description Contains many re-usable plugin message constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_sys from './plugin.system.constants.js';
// External imports
import hayConst from '@haystacks/constants';
const {bas, msg, num, sys, wrd} = hayConst;

// Plugin message constants
export const cPluginOneMessage01 = wrd.cThis + bas.cSpace + bas.cis + bas.cSpace + bas.ca + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cPlugin + num.cOne + bas.cDot; // This is a message from PluginOne.
export const cpluginConstantsPathIs = wrd.cplugin + wrd.cConstants + wrd.cPath + sys.cSpaceIsColonSpace; // pluginConstantsPath is:

// Constants Validation
export const callPluginConstantsValidationDataIs = wrd.call + wrd.cPlugin + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_PluginBusinessIs = plg_sys.cresolvedConstantsPath_Plugin + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_PluginBusiness is:
export const cresolvedConstantsPath_PluginCommandIs = plg_sys.cresolvedConstantsPath_Plugin + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_PluginCommand is:
export const cresolvedConstantsPath_PluginConstantIs = plg_sys.cresolvedConstantsPath_Plugin + wrd.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_PluginConstant is:
export const cresolvedConstantsPath_PluginMessageIs = plg_sys.cresolvedConstantsPath_Plugin + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_PluginMessage is:
export const cresolvedConstantsPath_PluginSystemIs = plg_sys.cresolvedConstantsPath_Plugin + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_PluginSystem is:

export const cPluginBusinessConstantsPhase1Validation = wrd.cPlugin + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Plugin Business Constants Phase 1 Validation
export const cPluginCommandConstantsPhase1Validation = wrd.cPlugin + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Plugin Command Constants Phase 1 Validation
export const cPluginConstantsPhase1Validation = wrd.cPlugin + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Plugin Constants Phase 1 Validation
export const cPluginMessageConstantsPhase1Validation = wrd.cPlugin + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Plugin Message Constants Phase 1 Validation
export const cPluginSystemConstantsPhase1Validation = wrd.cPlugin + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Plugin System Constants Phase 1 Validation

export const cPluginBusinessConstantsPhase2Validation = wrd.cPlugin + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Plugin Business Constants Phase 2 Validation
export const cPluginCommandConstantsPhase2Validation = wrd.cPlugin + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Plugin Command Constants Phase 2 Validation
export const cPluginConstantsPhase2Validation = wrd.cPlugin + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Plugin Constants Phase 2 Validation
export const cPluginMessageConstantsPhase2Validation = wrd.cPlugin + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Plugin Message Constants Phase 2 Validation
export const cPluginSystemConstantsPhase2Validation = wrd.cPlugin + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Plugin System Constants Phase 2 Validation