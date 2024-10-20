/**
 * @file data.js
 * @module data
 * @description Contains the singleton data structure definition that allows the entire application,
 * to share data between various components of the framework and greater application platform.
 * @requires module:ruleBroker
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
// External imports
import hayConst from '@haystacks/constants';

const {biz, msg, sys, wrd} = hayConst;
let data = {};

/**
 * @function getData
 * @description returns the contents of the data structure. Can be used to stash data,
 * before it is reassigned, for the purpose of setting up a unit test scenario with mocked data.
 * @return {object} A JSON object that contains all of the data that is currently stored in the data structure.
 * @author Seth Hollingsead
 * @date 2023/01/09
 */
async function getData() {
  return {configuration: data[wrd.cconfiguration],
    businessRules: data[sys.cbusinessRules],
    Commands: data[wrd.cCommands],
    colors: data[wrd.ccolors],
    ConstantsValidationData: data[sys.cConstantsValidationData],
    CommandsAliases: data[sys.cCommandsAliases],
    CommandWorkflow: data[sys.cCommandWorkflows],
    Themes: data[wrd.cThemes]};
}

/**
 * @function setData
 * @description Clears the data and sets it to some new specified data.
 * Can be used to setup mock data, or create a clone of Haystacks for the purposes of
 * executing a callback on Haystacks such as loading more data for a plugin.
 * @param {object} newData The new data that should replace any data already stored on the data structure.
 * @return {boolean} True or false to indicate success or failure if the data was set.
 * @author Seth Hollingsead
 * @date 2023/01/09
 * @NOTE This function isn't actually working, because in the haystacks code base we've
 * always set the D-data structure data on the D-object itself never on the D['data'] field.
 * So an extra special effort will need to be made to refactor the data interface again and make it work via an actual interface.
 * Instead of a hard-coded data endpoint in the code.
 * This will be a good pre-emptive step to implementing a Red-Black Binary Search Tree.
 * Because once all the data is flowing through a data interface, then we can swap out that interface for a newer faster one based on RB-BST.
 * @UPDATE Actually this function IS THE ONLY WAY this works! Setting the data on the D-object itself fails in every way.
 * I've even tried to update to node v18 and use the structuredClone function, which also didn't work.
 * But the code below DOES WORK! Don't touch it unless you want to break the loading of all plugins.
 * We can review this when we get past a production MVP release.
 * @NOTE Attempting to create/refactor for a new data interface could cause a cascade performance regression,
 * that is the last thing we want to be dealing with at this late stage in the game.
 * Perhaps we will have to wait until after a GUI system is developed, then take on this data/data-interface re-architecture and RB-BST effort all at once.
 */
async function setData(newData) {
  // let functionName = setData.name;
  // console.log('BEGIN Haystacks.data.setData function - MANUAL LOG');
  // console.log('data input is: ' + JSON.stringify(newData));
  let returnData = false;
  if (newData) {
    data = {};
    // for (let dataEntityKey in newData) {
    //   data[dataEntityKey] = {};
    //   data[dataEntityKey] = newData[dataEntityKey];
    // }
    try {
      data = await ruleBroker.processRules([newData, ''], [biz.cobjectDeepClone]);
    } catch (err) {
      // await loggers.consoleLog(namespacePrefix + functionName, msg.cERROR_Colon + err.message);
      // ERROR: Unable to clone data and re-assign it to the D-data structure.
      console.log(msg.cErrorSetDataMessage01);
    }
    returnData = true;
  } else {
    // ERROR: Unable to set data, undefined data input:
    // console.log('ERROR: Unable to set data, undefined data input: ' + JSON.stringify(newData));
  }
  return returnData;
}

export default {
  [wrd.cdata]: data,
  getData,
  setData
};