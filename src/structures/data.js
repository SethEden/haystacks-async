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

export default {
  [wrd.cdata]: data
};
