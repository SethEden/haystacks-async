/**
 * @file pluginBrokerTest.js
 * @module pluginBrokerTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/07/09
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../mainTest.js';
import * as tst_man from '../mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';
import { getRandomValues } from 'crypto';

const {bas, biz, clr, cmd, cfg, gen, msg, num, phn, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

// Paths
export const cpathToTestPluginThemesFolder = rootPathAsync + bas.cBackSlash + wrd.ctest + bas.cBackSlash + wrd.cunit + wrd.cTest + bas.cBackSlash + wrd.ctest + wrd.cData + bas.cBackSlash + wrd.ctest + wrd.cPlugins + bas.cBackSlash + tst_man.ctestPluginOne + bas.cBackSlash + wrd.cresources + bas.cBackSlash + wrd.cthemes // 'C:/haystacks-async/test/unitTest/testData/testPlugins/test-plugin-one/resources/themes'
export const cpathToTestPluginDefaultTheme = cpathToTestPluginThemesFolder + bas.cBackSlash + wrd.cDefault;

// Expected data
// [{"Name": "Default", "Path": "C:\\haystacks-async\\test\\unitTest\\testData\\testPlugins\\test-plugin-one\\resources\\themes\\Default"}]
export const cexpectedJsonDataFromTestPluginsThemesFolder = [{[wrd.cName]: wrd.cDefault, [wrd.cPath]: cpathToTestPluginDefaultTheme}];
// {
//     "debugSettings": {
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules": false,
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@DataFontBackgroundColor": "Black",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@DataFontColor": "Yellow",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@DataFontStyle": "Bold",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@FunctionFontBackgroundColor": "Black",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@FunctionFontColor": "Yellow",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@FunctionFontStyle": "Bold|Underline",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@MessageFontBackgroundColor": "0,0,100",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@MessageFontColor": "255,0,0",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@MessageFontStyle": "Underline",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@ModuleFontBackgroundColor": "0,0,100",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@ModuleFontColor": "255,0,0",
//         "debugFiles|debugSetting.plugins.plugin-one.businessRules.rules.TestPluginOneRules@ModuleFontStyle": "Bold|Underline",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands": false,
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@DataFontBackgroundColor": "Black",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@DataFontColor": "Yellow",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@DataFontStyle": "Bold",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@FunctionFontBackgroundColor": "Black",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@FunctionFontColor": "Yellow",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@FunctionFontStyle": "Bold|Underline",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@MessageFontBackgroundColor": "0,0,100",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@MessageFontColor": "255,0,0",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@MessageFontStyle": "Underline",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@ModuleFontBackgroundColor": "0,0,100",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@ModuleFontColor": "255,0,0",
//         "debugFiles|debugSetting.plugins.plugin-one.commandsBlob.commands.TestPluginOneCommands@ModuleFontStyle": "Bold|Underline"
//     }
// }
export const cexpectedTestPluginOneDefaultDebugSettings = {
[cfg.cdebugSettings]: {
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules]: false,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cModuleFontStyle]: wrd.cBold + bas.cPipe + wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cFunctionFontStyle]: wrd.cBold + bas.cPipe + wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cMessageFontStyle]: wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cDataFontStyle]: wrd.cBold,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cModuleFontColor]: num.c255 + bas.cComa + num.c0 + bas.cComa + num.c0,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cFunctionFontColor]: clr.cYellow,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cMessageFontColor]: num.c255 + bas.cComa + num.c0 + bas.cComa + num.c0,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cDataFontColor]: clr.cYellow,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cModuleFontBackgroundColor]: num.c0 + bas.cComa + num.c0 + bas.cComa + num.c100,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cFunctionFontBackgroundColor]: clr.cBlack,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cMessageFontBackgroundColor]: num.c0 + bas.cComa + num.c0 + bas.cComa + num.c100,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cRules + bas.cAt + sys.cDataFontBackgroundColor]: clr.cBlack,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands]: false,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cModuleFontStyle]: wrd.cBold + bas.cPipe + wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cFunctionFontStyle]: wrd.cBold + bas.cPipe + wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cMessageFontStyle]: wrd.cUnderline,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cDataFontStyle]: wrd.cBold,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cModuleFontColor]: num.c255 + bas.cComa + num.c0 + bas.cComa + num.c0,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cFunctionFontColor]: clr.cYellow,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cMessageFontColor]: num.c255 + bas.cComa + num.c0 + bas.cComa + num.c0,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cDataFontColor]: clr.cYellow,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cModuleFontBackgroundColor]: num.c0 + bas.cComa + num.c0 + bas.cComa + num.c100,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cFunctionFontBackgroundColor]: clr.cBlack,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cMessageFontBackgroundColor]: num.c0 + bas.cComa + num.c0 + bas.cComa + num.c100,
    [cfg.cdebugFiles + bas.cPipe + cfg.cdebugSetting + bas.cDot + wrd.cplugins + bas.cDot + wrd.ctest + bas.cDash + wrd.cplugin + bas.cDash + num.cone + bas.cDot + sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + wrd.cTest + wrd.cPlugin + num.cOne + wrd.cCommands + bas.cAt + sys.cDataFontBackgroundColor]: clr.cBlack
  }
}; 
