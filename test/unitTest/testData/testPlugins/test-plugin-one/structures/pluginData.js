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
import url from 'url';
import path from 'path';

const {bas, num, wrd} = hayConst;

/**
 * @function rootPathDiscovery
 * @description Function made to find the root path and return it to be used in unit test.
 * @returns {array<string>} Returnts two strings: 
 * rootPathDiscovery[0] is a root string including haystacks-async path.
 * rootPathDiscovery[1] is a root string including haystacks-constants path.
 * rootPathDiscovery[2] is a root string including hayPlugins path
 * @author Vlad Sorokin
 * @date 2024/01/30
 */
export async function rootPathDiscovery() {
  let functionName = rootPathDiscovery.name;
  // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
  let rootPath = '';
  let rootPathTestPluginOne = '';
  let rootPathArray = [];
  let pathSeparator = '';
  let returnData = [];

  rootPath = url.fileURLToPath(path.dirname(import.meta.url));

  pathSeparator = wrd.chaystacks + bas.cDash + wrd.casync;
  rootPathArray = rootPath.split(pathSeparator);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(pathSeparator);

  rootPathTestPluginOne = rootPath + wrd.chaystacks + bas.cDash + wrd.casync + bas.cForwardSlash + wrd.ctest + bas.cForwardSlash + wrd.cunit + wrd.cTest + bas.cForwardSlash + wrd.ctest + wrd.cPlugins + bas.cForwardSlash + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cForwardSlash;

  returnData = rootPathTestPluginOne;
  // console.log(msg.creturnDataIs + returnData);
  // console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
  return returnData;
}
let rootPathTestPluginOne = await rootPathDiscovery();

let pluginData = {
  "PluginName": "test-plugin-one",
  "pluginRootPath": rootPathTestPluginOne,
  "pluginConstantsValidationData": {
    "ConstantsValidationData": {
      "ConstantsShortNames": {
        "pluginBusinessConstantsValidation": "plg_biz",
        "pluginCommandConstantsValidation": "plg_cmd",
        "pluginConstantsValidation": "plg",
        "pluginMessageConstantsValidation": "plg_msg",
        "pluginSystemConstantsValidation": "plg_sys"
      },
      "ConstantsFileNames": {
        "pluginBusinessConstantsValidation": "plugin.business.constants.js",
        "pluginCommandConstantsValidation": "plugin.command.constants.js",
        "pluginConstantsValidation": "plugin.constants.js",
        "pluginMessageConstantsValidation": "plugin.message.constants.js",
        "pluginSystemConstantsValidation": "plugin.system.constants.js"
      },
      "ConstantsPrefix": {
          "pluginBusinessConstantsValidation": "plg_biz.",
          "pluginCommandConstantsValidation": "plg_cmd.",
          "pluginConstantsValidation": "plg.",
          "pluginMessageConstantsValidation": "plg_msg.",
          "pluginSystemConstantsValidation": "plg_sys."
      },
      "ConstantsFilePaths": {
          "pluginBusinessConstantsValidation": rootPathTestPluginOne + "constants/plugin.business.constants.js",
          "pluginCommandConstantsValidation": rootPathTestPluginOne + "constants/plugin.command.constants.js",
          "pluginConstantsValidation": rootPathTestPluginOne + "constants/plugin.constants.js",
          "pluginMessageConstantsValidation": rootPathTestPluginOne + "constants/plugin.message.constants.js",
          "pluginSystemConstantsValidation": rootPathTestPluginOne + "constants/plugin.system.constants.js"
      },
      "ConstantsPhase1ValidationMessages": {
        "pluginBusinessConstantsValidation": "Plugin Business Constants Phase 1 Validation",
        "pluginCommandConstantsValidation": "Plugin Command Constants Phase 1 Validation",
        "pluginConstantsValidation": "Plugin Constants Phase 1 Validation",
        "pluginMessageConstantsValidation": "Plugin Message Constants Phase 1 Validation",
        "pluginSystemConstantsValidation": "Plugin System Constants Phase 1 Validation"
      },
      "ConstantsPhase2ValidationMessages": {
          "pluginBusinessConstantsValidation": "Plugin Business Constants Phase 2 Validation",
          "pluginCommandConstantsValidation": "Plugin Command Constants Phase 2 Validation",
          "pluginConstantsValidation": "Plugin Constants Phase 2 Validation",
          "pluginMessageConstantsValidation": "Plugin Message Constants Phase 2 Validation",
          "pluginSystemConstantsValidation": "Plugin System Constants Phase 2 Validation"
      },
        "pluginBusinessConstantsValidation": [{
              "Name": "ctestPluginOneRule01",
              "Actual": "testPluginOneRule01",
              "Expected": "testPluginOneRule01"
        }, {
              "Name": "ctestPluginOneRule02",
              "Actual": "testPluginOneRule02",
              "Expected": "testPluginOneRule02"
        }
        ],
        "pluginCommandConstantsValidation": [{
          "Name": "ctestPluginOneCommand01",
          "Actual": "testPluginOneCommand01",
          "Expected": "testPluginOneCommand01"
        }, {
          "Name": "ctestPluginOneCommand02",
          "Actual": "testPluginOneCommand02",
          "Expected": "testPluginOneCommand02"
        }
      ],
    }
  },
  "pluginBusinessRules": {
    "businessRules": {}
  },
  "pluginCommands": {
      "commands": {}
  },
  "configuration": {
    "system": {
      "system.demoPluginSetting": false,
      "system.debugSettings": true
    },
    "debugSetting": {
      "plugins": {
        "test-plugin-one": {
          "debugSetting.plugins.test-plugin-one.businessRules.rules.unitTestRules": false
        }
      }
    }
  },
  "CommandsAliases": {
    "system": [{
      "testPluginOneCommand01": {
        "Name": "testPluginOneCommand01",
        "Aliases": "tstPluginOneComand01,tstPluginOneComnd01,tstPluginOneComd01,tstPluginOneCmd01,tstPluginOneC01,tstPluginOneCommand01,tstPluginOComand01,tstPluginOComnd01",
        "Description": "The first demo command as part of test-plugin-one."
      },
      "testPluginOneCommand02": {
        "Name": "testPluginOneCommand02",
        "Aliases": "tstPluginOneComand02,tstPluginOneComnd02,tstPluginOneComd02,tstPluginOneCmd02,tstPluginOneC02,tstPluginOneCommand02,tstPluginOComand02,tstPluginOComnd02",
        "Description": "The second demo command as part of test-plugin-one."
      }
    }]
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