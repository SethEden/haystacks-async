/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

 // Internal Imports
 import * as app_sys from './application.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, num, sys, wrd} = hayConst;

// Client String Parsing
export const cclientStringParsingDotCustomEcho = wrd.cclient + wrd.cString + wrd.cParsing + bas.cDot + wrd.ccustom + wrd.cEcho; // clientStringParsing.customEcho

// Messages
export const cBuildMessage1 = wrd.cDeployment + bas.cSpace + wrd.cwas + bas.cSpace + wrd.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
export const csourcePathIs = wrd.csource + wrd.cPath + sys.cSpaceIsColonSpace; // sourcePath is:
export const cdestinationPathIs = wrd.cdestination + wrd.cPath + sys.cSpaceIsColonSpace; // destinationPath is:
export const cDeploymentWasCompleted = wrd.cDeployment + bas.cSpace + wrd.cwas + bas.cSpace + wrd.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
export const cDeploymentFailed = wrd.cDeployment + bas.cSpace + wrd.cfailed; // Deployment failed
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1a = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cRelease + bas.cSpace + wrd.cfailed + bas.cSpace + wrd.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wrd.cfailure + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.csystem + bas.cDot + bas.cSpace; // ERROR: Release failed because of a failure in the constants validation system.
export const cdeployApplicationMessage2a = wrd.cPlease + bas.cSpace + wrd.cfix + bas.cSpace + gen.cASAP + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.canother + bas.cSpace + wrd.cdeployment + bas.cDot; // Please fix ASAP before attempting another deployment.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1b = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cRelease + bas.cSpace + wrd.cfailed + bas.cSpace + wrd.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wrd.cfailure + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.calias + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.csystem + bas.cDot + bas.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.
export const cReleasingFramework = wrd.cReleasing + bas.cSpace + wrd.cFramework + bas.cColon; // Releasing Framework:

// Constants Validation
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPawth_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantsIs = app_sys.cresolvedConstantsPath_Application + wrd.cConstants + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstants is:
export const cresolvedConstantsPath_ApplicationFunctionIs = app_sys.cresolvedConstantsPath_Application + wrd.cFunction + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationFunction is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Constants Phase 1 Validation
export const cApplicationFunctionConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cFunction + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Function Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Constants Phase 2 Vaidation
export const cApplicationFunctionConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cFunction + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Function Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 2 Validation
