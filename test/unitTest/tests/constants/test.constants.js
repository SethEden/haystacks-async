/**
 * @file test.constants.js
 * @module test.constants
 * @description Contains many re-usable test constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/11/24
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;


export const cUndefined = bas.cUn + bas.cde + bas.cf + bas.ci + bas.cn + bas.ce + bas.cd;
export const cNaN = bas.cNa + bas.cN;


// testConstantsValidationMetadata
export const cUnitTestName = wrd.cUnit + wrd.cTest + wrd.cHarness; // testHarness

// Describe names

/* commandBroker */

/* dataBroker */

/* ruleBroker */

/* themeBroker */

/* workflowBroker */

/* auxiliaryArrayParsing */

/* characterArrayParsing */

/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* characterStringParsing */

/* commandStringParsing */

/* constantStringParsing */

/* dataStringParsing */

/* fileStringParsing */

/* wordStringParsing */

/* characterGeneration */

/* fileOperations */

/* lexycalAnalyzer */

/* mathOperations */

/* promptOperations */

/* ruleParsing */

/* stringGeneration */

/* stringParsingUtilities */

/* timeComputation */

/* advanced */

/* auxiliary */

/* configuration */

/* constant */

/* dataDirectorate */

/* integrationTests */

/* performanceMetric */

/* system */

/* chiefCommander */

/* chiefConfiguration */

/* chiefData */

/* chiefWorkflow */

/* warden */

/* colorizer */

/* configurator */

/* loggers */

/* queue */

/* stack */

/* main */
// initFramework
export const cinitFramework = gen.cinit + wrd.cFramework; // initFramework
export const cinitFramework_validData = cinitFramework + bas.cUnderscore + wrd.cvalid + wrd.cData; // initFramework_validData
export const cinitFramework_inValidClientConfigurationString = cinitFramework + bas.cUnderscore + wrd.cinValid + wrd.cClient + wrd.cConfiguration + wrd.cString; // initFramework_inValidClientConfigurationString 
export const cinitFramework_inValidClientConfigurationInteger = cinitFramework + bas.cUnderscore + wrd.cinValid + wrd.cClient + wrd.cConfiguration + wrd.cInteger; // initFramework_inValidClientConfigurationInteger 
export const cinitFramework_inValidClientConfigurationBoolean = cinitFramework + bas.cUnderscore + wrd.cinValid + wrd.cClient + wrd.cConfiguration + wrd.cBoolean; // initFramework_inValidClientConfigurationBoolean 
export const cinitFramework_inValidClientConfigurationUndefined = cinitFramework + bas.cUnderscore + wrd.cinValid + wrd.cClient + wrd.cConfiguration + 'Undefined'; // initFramework_inValidClientConfigurationUndefined 
export const cinitFramework_inValidClientConfigurationNaN = cinitFramework + bas.cUnderscore + wrd.cinValid + wrd.cClient + wrd.cConfiguration + 'NaN'; // initFramework_inValidClientConfigurationNaN 

// accouterFramework
export const caccouterFramework = wrd.caccouter + wrd.cFramework; // accouterFramework
export const caccouterFramework_validData = caccouterFramework + bas.cUnderscore + wrd.cvalid + wrd.cData; // accouterFramework_validData 
export const caccouterFramework_inValidDataString = caccouterFramework + bas.cUnderscore + wrd.cinValid + wrd.cData + wrd.cString; // accouterFramework_inValidDataString 
export const caccouterFramework_inValidDataInteger = caccouterFramework + bas.cUnderscore + wrd.cinValid + wrd.cData + wrd.cInteger; // accouterFramework_inValidDataInteger 
export const caccouterFramework_inValidDataBoolean = caccouterFramework + bas.cUnderscore + wrd.cinValid + wrd.cData + wrd.cBoolean; // accouterFramework_inValidDataBoolean 
export const caccouterFramework_inValidDataUndefined = caccouterFramework + bas.cUnderscore + wrd.cinValid + wrd.cData + 'Undefined'; // accouterFramework_inValidDataUndefined 
export const caccouterFramework_inValidDataNaN = caccouterFramework + bas.cUnderscore + wrd.cinValid + wrd.cData + 'NaN'; //caccouterFramework_inValidDataNaN 

//getFrameworkData
export const cgetFrameworkData = wrd.cget + wrd.cFramework + wrd.cData; // getFrameworkData
export const cgetFrameworkData_validData = cgetFrameworkData + bas.cUnderscore + wrd.cvalid + wrd.cData; // getFrameworkData_validData
export const cgetFrameworkData_inValidString = cgetFrameworkData + bas.cUnderscore + wrd.cinValid + wrd.cString; // getFrameworkData_inValidString
export const cgetFrameworkData_inValidInteger = cgetFrameworkData + bas.cUnderscore + wrd.cinValid + wrd.cInteger; // getFrameworkData_inValidInteger
export const cgetFrameworkData_inValidBoolean = cgetFrameworkData + bas.cUnderscore + wrd.cinValid + wrd.cBoolean; // getFrameworkData_inValidBoolean
export const cgetFrameworkData_inValidUndefined = cgetFrameworkData + bas.cUnderscore + wrd.cinValid + 'Undefined'; // getFrameworkData_inValidUndefined
export const cgetFrameworkData_inValidNaN = cgetFrameworkData + bas.cUnderscore + wrd.cinValid + 'NaN'; // getFrameworkData_inValidNaN


// Test names

/* commandBroker */

/* dataBroker */

/* ruleBroker */

/* themeBroker */

/* workflowBroker */

/* auxiliaryArrayParsing */

/* characterArrayParsing */

/* commandArrayParsing */

/* constantArrayParsing */

/* dataArrayParsing */

/* pathArrayParsing */

/* wordArrayParsing */

/* characterStringParsing */

/* commandStringParsing */

/* constantStringParsing */

/* dataStringParsing */

/* fileStringParsing */

/* wordStringParsing */

/* characterGeneration */

/* fileOperations */

/* lexycalAnalyzer */

/* mathOperations */

/* promptOperations */

/* ruleParsing */

/* stringGeneration */

/* stringParsingUtilities */

/* timeComputation */

/* advanced */

/* auxiliary */

/* configuration */

/* constant */

/* dataDirectorate */

/* integrationTests */

/* performanceMetric */

/* system */

/* chiefCommander */

/* chiefConfiguration */

/* chiefData */

/* chiefWorkflow */

/* warden */

/* colorizer */

/* configurator */

/* loggers */

/* queue */

/* stack */

/* main */


/* test constants */
export const cExpectedActualFrameworkDevName = wrd.chay + wrd.cstacks + bas.cDash + wrd.casync; // haystacks-async
export const cExpectedActualFrameworkProdName = bas.cAt + wrd.chay + wrd.cstacks + bas.cForwardSlash + wrd.casync; // @haystacks/async
export const cApplicationName = wrd.ctest + wrd.cHarness; // testHarness
export const cAppDevPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash; // /src/
export const cAppProdPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wrd.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wrd.ccommands + bas.cForwardSlash; // commands/
export const cConstantsPath = wrd.cconstants + bas.cForwardSlash; // constants/
export const cConfigurationCommonPath = wrd.cconfiguration + bas.cForwardSlash; // configuration/
export const cPluginsRegistryCommonPath = wrd.cplugins + bas.cForwardSlash + wrd.cplugins + gen.cDotjson; // plugins/plugins.json
export const cWorkflowsCommonPath = wrd.cworkflows + bas.cForwardSlash; // workflows/
export const cThemesCommonPath = wrd.cthemes + bas.cForwardSlash; // themes/
export const cReleasePath = wrd.crelease + bas.cForwardSlash; // release/