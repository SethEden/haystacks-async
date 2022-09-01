/**
 * @file stack.js
 * @module stack
 * @description Implements the various functions of a stack data structure,
 * using the specified namespace on the D-data structure.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import loggers from '../executrix/loggers.js';
import D from './data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// structures.stack.
const namespacePrefix = wrd.cstructures + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initStack
 * @description Initializes the stack with the provided namespace.
 * @param {string} stackNameSpace The namespace the Stack array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function initStack(stackNameSpace) {
  let functionName = initStack.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] === undefined) {
    D[stackNameSpace] = [];
  } else {
    // WARNING: Stack:
    // ALREADY exists!
    console.log(num.c1 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cAlreadyExists);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function clearStack
 * @description Clears all contents of the stack so it can start fresh. It does not delete the stack completely!
 * @param {string} stackNameSpace The namespace for the stack that should be cleared.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function clearStack(stackNameSpace) {
  let functionName = clearStack.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] !== undefined) {
    D[stackNameSpace] = [];
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c2 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function push
 * @description Pushes some data on the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to push the data onto.
 * @param {string|integer|boolean|object|array} value The data that should be pushed on the stack.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function push(stackNameSpace, value) {
  let functionName = push.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + JSON.stringify(value));
  if (D[stackNameSpace] !== undefined) {
    D[stackNameSpace].push(value);
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c3 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function pop
 * @description Pops some data off the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to pop the data and return it.
 * @return {string|integer|boolean|object|array} Whatever data was stored at the top of the stack.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function pop(stackNameSpace) {
  let functionName = pop.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData;
  if (D[stackNameSpace] !== undefined) {
    if (D[stackNameSpace].length === 0) {
      // WARNING: Stack:
      // is empty!
      returnData = msg.cWarningStackColon + stackNameSpace + bas.cisEmpty;
      console.log(returnData);
    } else {
      returnData = D[stackNameSpace].pop();
    }
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c4 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isEmpty
 * @description Determines if the stack specified by the namespace parameter is empty or not empty.
 * @param {string} stackNameSpace The namespace of the stack that should be checked if it is empty or not empty.
 * @return {boolean} True or False to indicate if the specified stack is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function isEmpty(stackNameSpace) {
  let functionName = isEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = false;
  if (D[stackNameSpace] !== undefined) {
    if (D[stackNameSpace].length === 0) {
      returnData = true;
    }
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c5 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function length
 * @description Gets the length of the stack specified by the namespace parameter.
 * @param {string} stackNameSpace The namespace of the stack that should return a length property.
 * @return {integer} A value that represents a count of the number of entities on the specified stack.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function length(stackNameSpace) {
  let functionName = length.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = -1;
  if (D[stackNameSpace] !== undefined) {
    returnData = D[stackNameSpace].length;
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c6 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function contains
 * @description Determines if the specified stack contains the specified value.
 * @param {string} stackNameSpace The namespace of the stack that should be searched for the specified value.
 * @param {string|integer|object|array} value The value/object that should be searched to see if it exists on the specified stack or does not exist.
 * @return {boolean} True or False to indicate if the value/object exists or does not exist.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function contains(stackNameSpace, value) {
  let functionName = contains.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = false;
  if (D[stackNameSpace] !== undefined) {
    returnData = await ruleBroker.processRules([value, D[stackNameSpace]], [biz.cdoesArrayContainCharacter]);
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c7 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function print
 * @description Prints out the stack as specified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace that should be used to print out the contents of the stack on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
async function print(stackNameSpace) {
  let functionName = print.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] !== undefined) {
    // Contents of the stack namespace:
    console.log(msg.cContentsOfTheStackNamespace + stackNameSpace + sys.cSpaceIsColonSpace + JSON.stringify(D[stackNameSpace]));
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(num.c8 + bas.cSpace + msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist + bas.cColon + bas.cSpace + functionName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  initStack,
  clearStack,
  push,
  pop,
  isEmpty,
  length,
  contains,
  print
};
