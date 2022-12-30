/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, sys, wrd} = hayConst;

export const cExpectedActualFrameworkDevName = wrd.chay + wrd.cstacks + bas.cDash + wrd.casync; // haystacks-async
export const cExpectedActualFrameworkProdName = bas.cAt + wrd.chay + wrd.cstacks + bas.cForwardSlash + wrd.casync; // @haystacks/async
export const cApplicationName = wrd.ctest + wrd.cHarness; // testHarness
export const cAppDevPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash; // /src/
export const cAppProdPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wrd.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wrd.ccommands + bas.cForwardSlash; // commands/
export const cConstantsPath = wrd.cconstants + bas.cForwardSlash; // constants/
export const cConfigurationCommonPath = wrd.cconfiguration + bas.cForwardSlash; // configuration/
export const cPluginsRegistryCommonPath = wrd.cplugins + bas.cForwardSlash; // plugins/
export const cWorkflowsCommonPath = wrd.cworkflows + bas.cForwardSlash; // workflows/
export const cThemesCommonPath = wrd.cthemes + bas.cForwardSlash; // themes/
export const cReleasePath = wrd.crelease + bas.cForwardSlash; // release/

// Full Dev paths
export const cFullDevResourcesPath = cAppDevPath + cResourcesCommonPath; // /src/resources/
export const cFullDevCommandsPath = cFullDevResourcesPath + cCommandsCommonPath; // /src/resources/commands/
export const cFullDevConstantsPath = cAppDevPath + cConstantsPath; // /src/constants/
export const cFullDevConfigurationPath = cFullDevResourcesPath + cConfigurationCommonPath; // /src/resources/configuration/
export const cFullDevPluginsRegistryPath = cFullDevResourcesPath + cPluginsRegistryCommonPath; // /src/resources/plugins/
export const cFullDevWorkflowsPath = cFullDevResourcesPath + cWorkflowsCommonPath; // /src/resources/workflows/
export const cFullDevThemesPath = cFullDevResourcesPath + cThemesCommonPath; // /src/resources/themes/
export const cmetaDataDevPath = cFullDevResourcesPath + sys.cmetaDatadotJson; // /src/resources/metaData.json

// Full Prod paths
export const cFullProdResourcesPath = cAppProdPath + cResourcesCommonPath; // /bin/resources/
export const cFullProdCommandsPath = cFullProdResourcesPath + cCommandsCommonPath; // /bin/resources/commands/
export const cFullProdConstantsPath = cAppProdPath + cConstantsPath; // /bin/constants/
export const cFullProdConfigurationPath = cFullProdResourcesPath + cConfigurationCommonPath; // /bin/resources/configuration/
export const cFullProdPluginsRegistryPath = cFullProdResourcesPath + cPluginsRegistryCommonPath; // /bin/resources/plugins/
export const cFullProdWorkflowsPath = cFullProdResourcesPath + cWorkflowsCommonPath; // /bin/resources/workflows/
export const cFullProdThemesPath = cFullProdResourcesPath + cThemesCommonPath; // /bin/resources/themes/
export const cmetaDataProdPath = cFullProdResourcesPath + sys.cmetaDatadotJson; // /bin/resources/metaData.json
