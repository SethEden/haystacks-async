/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all fo the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.workflowBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string|boolean} The workflow value, which ideally would be a list of commands and command parameters.
 * False if no workflow by the specified name was found.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
async function getWorkflow(workflowName) {
  let functionName = getWorkflow.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowValue = false;
  let currentWorkflow = await searchWorkflow(D[sys.cCommandWorkflows], workflowName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
  workflowValue = currentWorkflow;
  // workflowValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + JSON.stringify(workflowValue));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowValue;
}

/**
 * @function doesWorkflowExist
 * @description Uses the recursive searchWorkflow function to determine if the workflow can be found in the workflow data structure.
 * @param {string} workflowName The name of the workflow that should be searched for.
 * @return {boolean} True or False to indicate if the workflow already exists or not.
 * @author Seth Hollingsead
 * @date 2022/05/24
 */
async function doesWorkflowExist(workflowName) {
  let functionName = doesWorkflowExist.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowFound = false;
  let workflowSearchResult = await searchWorkflow(D[sys.cCommandWorkflows], workflowName);
  if (workflowSearchResult) {
    workflowFound = true;
  }
  // workflowFound is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowFoundIs + workflowFound);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowFound;
}

/**
 * @function doesWorkflowExistInWorkflowData
 * @description Searches through a data structure to determine if the specified workflow exists within it.
 * @param {object} workflowData The workflow data structure that should be searched for the specified workflow.
 * @param {string} workflowName The name of the workflow that should be searched for in the workflow data structure.
 * @return {boolean} True or False to indicate if the workflow was found or not.
 */
async function doesWorkflowExistInWorkflowData(workflowData, workflowName) {
  let functionName = doesWorkflowExist.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowFound = false;
  let workflowSearchResult = await searchWorkflow(workflowData, workflowName);
  if (workflowSearchResult) {
    workflowFound = true;
  }
  // workflowFound is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowFoundIs + workflowFound);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowFound;
}

/**
 * @function searchWorkflow
 * @description This is a recursive function that searches through all the workflow
 * data structures and returns the one workflow data object that matches the input name.
 * @param {object} allWorkflows The workflow data that should be searched recursively for the specified workflow.
 * @param {string} workflowName The name of the workflow that should be found.
 * @return {object} The workflow object that corresponds to the input workflow name.
 * @author Seth Hollingsead
 * @date 2022/05/24
 */
async function searchWorkflow(workflowData, workflowName) {
  let functionName = searchWorkflow.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowData is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowDataIs + JSON.stringify(workflowData));
  // workflowName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowObject = false;
  if (typeof workflowData === wrd.cobject) {
    for (let workflowEntity in workflowData) {
      // workflowEntity is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowEntityIs + JSON.stringify(workflowEntity));
      // workflow is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowIs + JSON.stringify(workflowData[workflowEntity]));
      if (workflowEntity != workflowName || (workflowEntity === workflowName && typeof workflowData[workflowEntity] === wrd.cobject)) {
        let workflowObjectTemp = await searchWorkflow(workflowData[workflowEntity], workflowName);
        if (workflowObjectTemp && typeof workflowObjectTemp != wrd.cobject) {
          workflowObject = workflowObjectTemp;
          break;
        } // End-if (workflowObjectTemp != false && typeof workflowObjectTemp != wrd.cobject)
      } else if (typeof workflowData[workflowEntity] != wrd.cobject) {
        // Needed to make sure it's not a parent entity of the same name.
        workflowObject = workflowData[workflowEntity];
        break;
      }
    } // End-for (let workflowEntity in workflowData)
  } // End-if (typeof workflowData === wrd.cobject)
  // workflowObject is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowObjectIs + workflowObject);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowObject;
}

/**
 * @function getAllWorkflows
 * @description Recursively gets all of the workflows from all levels and flattens them into a single array for printing out to the workflow help command.
 * @param {object} workflowDataStructure The workflow data structure that should be recursively flattened into a single array for output.
 * If the input is undefined then the main CommandWorkflows data structure will be used at the root of the workflows data hive.
 * @return {array<string>|boolean} An array of all the workflows currently loaded into the D-data structure under the CommandWorkflows data hive or
 * a boolean True or False to indicate that a leaf-node has been found by the recursive caller.
 * @author Seth Hollingsead
 * @date 2022/05/25
 */
async function getAllWorkflows(workflowDataStructure) {
  let functionName = getAllWorkflows.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowDataStructure is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowDataStructureIs + JSON.stringify(workflowDataStructure));
  let allWorkflows = false;
  let internalWorkflowDataStructure;
  if (workflowDataStructure === undefined) {
    internalWorkflowDataStructure = JSON.parse(JSON.stringify(D[sys.cCommandWorkflows]));
  } else {
    internalWorkflowDataStructure = JSON.parse(JSON.stringify(workflowDataStructure));
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinternalWorkflowDataStructureIs + JSON.stringify(internalWorkflowDataStructure));
  if (typeof internalWorkflowDataStructure === wrd.cobject) {
    allWorkflows = [];
    for (let workflowEntity in internalWorkflowDataStructure) {
      // workflowEntity is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowEntityIs + JSON.stringify(workflowEntity));
      // workflowDataStructure[workflowEntity] is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cinternalWorkflowDataStructureWorkflowEntityIs + JSON.stringify(internalWorkflowDataStructure[workflowEntity]));
      if (typeof internalWorkflowDataStructure[workflowEntity] === wrd.cobject) {
        // internalWorkflowDataStructure[workflowEntity] is of type object!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cinternalWorkflowDataStructureWorkflowEntityIsOfTypeObject);
        let allWorkflowsTemp;
        allWorkflowsTemp = await getAllWorkflows(internalWorkflowDataStructure[workflowEntity]);
        // allWorkflowsTemp returned from the recursive call is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsTempReturnedFromRecursiveCallIs + JSON.stringify(allWorkflowsTemp));
        if (allWorkflowsTemp === false) {
          // The recursive call returned false, so push the current entity to the output array!
          await loggers.consoleLog(namespacePrefix + functionName, msg.cgetAllWorkflowsMessage01 + msg.cgetAllWorkflowsMessage02);
          allWorkflows.push(workflowEntity);
          // allWorkflows after pushing to the array 1 is:
          await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsAfterPushingToArray1Is + JSON.stringify(allWorkflows));
        } else {
          allWorkflows = allWorkflows.concat(allWorkflowsTemp);
        }
      } else {
        // workflowEntity is NOT an object type, so push it to the output array!
        await loggers.consoleLog(namespacePrefix + functionName, msg.cgetAllWorkflowsMessage03 + msg.cgetAllWorkflowsMessage04);
        allWorkflows.push(workflowEntity);
        // allWorkflows after pushing to the array 2 is:
        await loggers.consoleLog(namespacePrefix + functionName, msg.callWorkflowsAfterPushingToArray2Is + JSON.stringify(allWorkflows));
      }
    } // End-for (let workflowEntity in internalWorkflowDataStructure)
  } // End-if (typeof workflowDataStructure === wrd.cobject)
  // workflow is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowIs + JSON.stringify(allWorkflows));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allWorkflows;
}

/**
 * @function getWorkflowNamespaceDataObject
 * @description Recursively scans through the entire workflow metaData data structure looking for an object that matches the input namespace name.
 * When that namespace is found, the entire object is returned.
 * @param {object} workflowDataStructure The workflow data structure that should be recursively searched for the namespace specified.
 * If the input is undefined then the main CommandWorkflows data structure will be used at the root of the workflows data hive.
 * @param {string} namespaceToFind The namespace to look for in the workflow metaData data structure.
 * @return {object|boolean} The namespace object if it is found, or False if the namespace object was not found.
 * @author Seth Hollingsead
 * @date 2022/05/25
 */
async function getWorkflowNamespaceDataObject(workflowDataStructure, namespaceToFind) {
  let functionName = getWorkflowNamespaceDataObject.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowDataStructure is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowDataStructureIs + JSON.stringify(workflowDataStructure));
  // namespaceToFind is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cnamespaceToFindIs + namespaceToFind);
  let workflowNamespaceObject = false;
  if (workflowDataStructure === undefined) {
    workflowDataStructure = D[sys.cCommandWorkflows];
  }
  for (let workflowEntity in workflowDataStructure) {
    // workflowEntity is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowEntityIs + JSON.stringify(workflowEntity));
    // workflowDataStructure[workflowEntity] is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowDataStructureWorkflowEntityIs + JSON.stringify(workflowDataStructure[workflowEntity]));
    if (workflowEntity === namespaceToFind) {
      workflowNamespaceObject = workflowDataStructure[workflowEntity];
      break;
    } else if (typeof workflowDataStructure[workflowEntity] === wrd.cobject) {
      // Search recursively
      let workflowTempObject = await getWorkflowNamespaceDataObject(workflowDataStructure[workflowEntity], namespaceToFind);
      if (workflowTempObject) {
        // Then we must have found the namespace object we were looking for in the recursion call.
        // Just return it, and skip out of the loop.
        workflowNamespaceObject = workflowTempObject;
        break;
      }
    }
  } // End-for (let workflowEntity in workflowDataStructure)
  // workflowNamespaceObject is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNamespaceObjectIs + JSON.stringify(workflowNamespaceObject));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowNamespaceObject;
}

export default {
  getWorkflow,
  doesWorkflowExist,
  doesWorkflowExistInWorkflowData,
  searchWorkflow,
  getAllWorkflows,
  getWorkflowNamespaceDataObject
};
