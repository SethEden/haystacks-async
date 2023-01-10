/**
 * @file data.js
 * @module data
 * @description Contains the singleton data structure definition that allows the entire application,
 * to share data between various components of the framework and greater application platform.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';

const {wrd} = hayConst;
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
  return data;
}

/**
 * @function setData
 * @description Clears the data and sets it to some new specified data.
 * Can be used to setup mock data, or create a clone of Haystacks for the purposes of
 * executing a callback on Haystacks such as loading more data for a plugin.
 * @param {object} newData The new data that should replace any data already stored on the data structure.
 * @author Seth Hollingsead
 * @date 2023/01/09
 */
async function setData(newData) {
  data = {};
  data = newData;
}

export default {
  [wrd.cdata]: data,
  getData,
  setData
};
