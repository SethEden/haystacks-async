/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import chiefData from './chiefData.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.chiefWorkflow.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function loadCommandWorkflowsFromPath
 * @description Loads the command workflows XML file that is specified by the input.
 * @param {string} commandWorkflowFilePathConfigurationName The path and file name to the XML that contains the command workflows definitions.
 * (Could be system defined command workflows or client command defined command workflows)
 * @param {string} contextName The context name defines what parent workflow namespace the loaded and merged data should be stored in.
 * Example:
 * contextName = "framework" => D['CommandWorkflows']['Framework']
 * contextName = "application" => D['CommandWorkflows']['Application']
 * contextName = "plugin" => D['CommandWorkflows']['Plugins']['<pluginName>']
 * @return {boolean|object} True or False if the data to be loaded is not from a plugin, returns a JSON object is the data to be loaded is from a plugin.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName) {
  let functionName = loadCommandWorkflowsFromPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandWorkflowFilePathConfigurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWorkflowFilePathConfigurationNameIs + commandWorkflowFilePathConfigurationName);
  // contextName
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let returnData = false;
  let allCommandWorkflowsData = {};
  if (!contextName.toUpperCase().includes(wrd.cPLUGIN)) {
    allCommandWorkflowsData = await chiefData.setupAllXmlData(commandWorkflowFilePathConfigurationName, sys.cCommandWorkflows);
  } else if (contextName.toUpperCase().includes(wrd.cPLUGIN)) {
    allCommandWorkflowsData = await chiefData.setupAllXmlPluginData(commandWorkflowFilePathConfigurationName, sys.cPluginWorkflows);
  }

  // allCommandWorkflowsData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandWorkflowsDataIs + JSON.stringify(allCommandWorkflowsData));
  if (D[sys.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandWorkflows] = {};
    D[sys.cCommandWorkflows][sys.cFramework] = allCommandWorkflowsData;
    returnData = true;
  } else if (contextName.toUpperCase() === wrd.cAPPLICATION) {
    // for (let i = 0; i < allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows].length; i++) {
      // D[sys.cCommandWorkflows][wrd.cWorkflows].push(allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows][i]);
      // Object.assign(D[sys.cCommandWorkflows][wrd.cWorkflows], allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows]);
      // D[sys.cCommandWorkflows] = ruleBroker.processRules([D[sys.cCommandWorkflows], allCommandWorkflowsData], [biz.cobjectDeepMerge]);
      D[sys.cCommandWorkflows][wrd.cApplication] = allCommandWorkflowsData;
      returnData = true;
    // }
  } else if (contextName.toUpperCase().includes(wrd.cPLUGIN)) {
    let pluginName = await configurator.getConfigurationSetting(wrd.csystem, sys.cPluginName);
    // NOTE: If there is a pluginName in the configuration setting, then we have a special condition that is running here.
    // This is the case that the build-Release app is running to roll a release of a plugin, and plugin validation data is being loaded for validation.
    if (pluginName) {
      D[sys.cCommandWorkflows][wrd.cPlugins] = {};
      D[sys.cCommandWorkflows][wrd.cPlugins][pluginName] = {};
      D[sys.cCommandWorkflows][wrd.cPlugins][pluginName] = allCommandWorkflowsData;
    }
    returnData = allCommandWorkflowsData;
  }
  // console.log('All loaded workflow data is: ' + JSON.stringify(D[sys.cCommandWorkflows]));
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  loadCommandWorkflowsFromPath
};
