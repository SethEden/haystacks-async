/**
 * @file commandArrayParsingTest.js
 * @module commandArrayParsingTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/07/09
 * @copyright Copyright © 2024-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../../mainTest.js';
import * as tst_man from '../../mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';

const {bas, biz, clr, cmd, cfg, gen, msg, num, phn, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

export const cWndrWonderWomnWoman = [[bas.cWn + bas.cdr, wrd.cWonder],[bas.cWo + bas.cmn, wrd.cWoman]]; // [["Wndr","Wonder"],["Womn","Woman"]];
export const cexpectedDataFromSolveLehmerCode = wrd.cWonder + bas.cWo + bas.cmn + bas.cComa + wrd.cWonder + wrd.cWoman + bas.cComa + bas.cWn + bas.cdr + bas.cWo + bas.cmn; // WonderWomn,WonderWoman,WndrWomn
export const cwomenWonderAliasesObject = {[wrd.cwoman]: bas.cwo + bas.cmn + bas.cComa + bas.cwm + bas.cn, [wrd.cWonder]: bas.cwo + bas.cnd + bas.cr + bas.cComa + bas.cwn + bas.cdr}; // {"woman":"womn,wmn","Wonder":"wondr,wndr"}
export const cexpectedDataFromGenerateCommandAliases = wrd.cWoman + bas.cWo + bas.cnd + bas.cr + bas.cComa + wrd.cWoman + bas.cWn + bas.cdr + bas.cComa + wrd.cWoman + wrd.cWonder + bas.cComa + bas.cWm + bas.cnW + phn.cond + bas.cr + bas.cComa + bas.cWm + bas.cnW + bas.cnd + bas.cr + bas.cComa + bas.cWm + bas.cnW + phn.conder + bas.cComa + bas.cWo + bas.cmn + bas.cWo + bas.cnd + bas.cr + bas.cComa + bas.cWo + bas.cmn + bas.cWn + bas.cdr; // WomanWondr,WomanWndr,WomanWonder,WmnWondr,WmnWndr,WmnWonder,WomnWondr,WomnWndr
