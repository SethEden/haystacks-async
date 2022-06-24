/**
 * @file queue.js
 * @module queue
 * @description Implements the various functions of a queue data structure,
 * using the specified name-space on the D-data structure.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../executrix/loggers.js';
import D from './data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// structures.queue.
const namespacePrefix = wrd.cstructures + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initQueue
 * @description Initializes the queue with the provided namespace.
 * @param {string} queueNameSpace The namespace the queue array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function initQueue(queueNameSpace) {
  let functionName = initQueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  D[queueNameSpace] = [];
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function dequeue
 * @description Gets the entity at the front of the queue, removes it from the queue and returns that entity.
 * @param {string} queueNameSpace The namespace the queue array should be dequeued from.
 * @return {string} The item at the front of the queue and removes it from the queue.
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function dequeue(queueNameSpace) {
  let functionName = dequeue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  let returnData;
  returnData = D[queueNameSpace].shift();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function enqueue
 * @description Adds the value to the specified namespace queue.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @param {string} value The value that should be added to the specified queue array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function enqueue(queueNameSpace, value) {
  let functionName = enqueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + value);
  D[queueNameSpace].push(value);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function isEmpty
 * @description Determines if the queue is empty or not empty.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @return {boolean} True or False to indicate if the queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function isEmpty(queueNameSpace) {
  let functionName = isEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  let returnData;
  if (D[queueNameSpace] === undefined) {
    returnData = true;
  } else {
    returnData = (D[queueNameSpace].length === 0);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function queueFront
 * @description Gets the entity at the front of the queue.
 * @param {string} queueNameSpace The namespace the queue array from which the front of the queue should be found.
 * @return {string} The entity at the front of the queue.
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function queueFront(queueNameSpace) {
  let functionName = queueFront.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  let returnData;
  if (D[queueNameSpace] !== undefined) {
    returnData = D[queueNameSpace][0];
  } else {
    // WARNING: Queue:
    // does not exist!
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function queueSize
 * @description Gets the current size of the queue.
 * @param {string} queueNameSpace The namespace of the queue array from which we should get the current queue size.
 * @return {integer} A count for the number of entities in the specified queue.
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @reference {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function queueSize(queueNameSpace) {
  let functionName = queueFront.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  let returnData = 0;
  if (D[queueNameSpace] !== undefined) {
    returnData = D[queueNameSpace].length;
  } else {
    // WARNING: Queue:
    // does not exist!
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function queuePrint
 * @description Prints out the queue as specified by the namespace input parameter.
 * @param {string} queueNameSpace The namespace that should be used to print out the contents of the queue on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/06/21
 */
function queuePrint(queueNameSpace) {
  let functionName = queuePrint.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cqueueNameSpaceIs + queueNameSpace);
  if (D[queueNameSpace] !== undefined) {
    // Contents of the queue namespace:
    console.log(msg.cContentsOfTheQueueNamespace + queueNameSpace + sys.cSpaceIsColonSpace + JSON.stringify(D[queueNameSpace]));
  } else {
    // WARNING: Queue:
    // does not exist!
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  initQueue,
  dequeue,
  enqueue,
  isEmpty,
  queueFront,
  queueSize,
  queuePrint
};
