/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
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
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefWorkflow.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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
 * @return {void}
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
  let allCommandWorkflowsData = {};
  allCommandWorkflowsData = await chiefData.setupAllXmlData(commandWorkflowFilePathConfigurationName, sys.cCommandWorkflows);
  // allCommandWorkflowsData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.callCommandWorkflowsDataIs + JSON.stringify(allCommandWorkflowsData));
  if (D[sys.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandWorkflows] = {};
    D[sys.cCommandWorkflows][sys.cFramework] = allCommandWorkflowsData;
  } else if (contextName.toUpperCase() === wrd.cAPPLICATION) {
    // for (let i = 0; i < allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows].length; i++) {
      // D[sys.cCommandWorkflows][wrd.cWorkflows].push(allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows][i]);
      // Object.assign(D[sys.cCommandWorkflows][wrd.cWorkflows], allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows]);
      // D[sys.cCommandWorkflows] = ruleBroker.processRules([D[sys.cCommandWorkflows], allCommandWorkflowsData], [biz.cobjectDeepMerge]);
      D[sys.cCommandWorkflows][wrd.cApplication] = allCommandWorkflowsData;
    // }
  } else if (contextName.toUpperCase().includes(wrd.cPLUGIN)) {
    // TODO: Split the contextName by the "." so we can get a namespace and use that to define where the plugin workflow data should go.
    // Also make sure the data hasn't been loaded to the same plugin name already!
    // D[sys.cCommandWorkflows][wrd.cPlugins][commandWorkflowFilePathConfigurationName] = allCommandWorkflowsData;
    console.log('ERROR: ---- PLUGIN Workflow data not yet supported!!!!!!!!!!!!');
  }
  // console.log('All loaded workflow data is: ' + JSON.stringify(D[sys.cCommandWorkflows]));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  loadCommandWorkflowsFromPath
};
