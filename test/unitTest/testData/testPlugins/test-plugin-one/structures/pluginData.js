/**
 * @file pluginData.js
 * @module pluginData
 * @description Contains the singleton data structure definition that allows the entire plugin,
 * to collect and share all of its various data components with the Haystacks platform once the plugin is loaded.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';

const {wrd} = hayConst;
let pluginData = {
  "pluginBusinessRules": {
    "businessRules": {}
  },
  "pluginCommands": {
      "commands": {}
  },
  "configuration": {
    "system": {},
    "debugSetting": {},
    "debugSettings": {}
  },
  "CommandAliases": {
    "system": [{}]
  },
  "CommandWorkflows": {
    "debug": [{}],
    "commandsBlob": [{}],
    "system": [{}]
  },
  "Themes": [{}]
};

export default {
  [wrd.cdata]: pluginData
};