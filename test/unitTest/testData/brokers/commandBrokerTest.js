/**
 * @file commandBrokerTest.js
 * @module commandBrokerTest
 * @description File that containts test data.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Vlad Sorokin
 * @date 2024/06/20
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import mainTest from '../mainTest.js';
import * as tst_man from '../mainTest.js';

// External imports
import hayConst from '@haystacks/constants';
import url from 'url';
import path from 'path';

const {bas, biz, cmd, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

const rootPathArray = await mainTest.rootPathDiscovery();
const rootPathAsync = rootPathArray[0];
const rootPathConstants = rootPathArray[1];
const rootPathHayPlugins = rootPathArray[2];

export const testPluginCommandAliases = {
    [wrd.cCommands + wrd.cAliases]: {
        [wrd.csystem]: [{
            [wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01]: {
                [wrd.cName]: wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01,
                [wrd.cAliases]: bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01 + bas.cComa + bas.cts + bas.ct + wrd.cPlugin + num.cOne + gen.cCom + bas.cnd + num.c01,
                [wrd.cDescription]: wrd.cThe + bas.cSpace + num.cfirst + bas.cSpace + wrd.cdemo + bas.cSpace + wrd.ctest + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cas + bas.cSpace + wrd.cpart + bas.cSpace + wrd.cof + bas.cSpace + tst_man.ctestPluginOne,
            },
            [wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02]: {
                [wrd.cName]: wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02,
                [wrd.cAliases]: bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c02 + bas.cComa + bas.cts + bas.ct + wrd.cPlugin + num.cOne + gen.cCom + bas.cnd + num.c02,
                [wrd.cDescription]: wrd.cThe + bas.cSpace + num.csecond + bas.cSpace + wrd.cdemo + bas.cSpace + wrd.ctest + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cas + bas.cSpace + wrd.cpart + bas.cSpace + wrd.cof + bas.cSpace + tst_man.ctestPluginOne,
            }
        }]
    }
};

export const testPluginCommandAliasesExpected = {
    [wrd.cAliases]: bas.cts + bas.ct + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01 + bas.cComa + bas.cts + bas.ct + wrd.cPlugin + num.cOne + gen.cCom + bas.cnd + num.c01,
    [wrd.cDescription]: wrd.cThe + bas.cSpace + num.cfirst + bas.cSpace + wrd.cdemo + bas.cSpace + wrd.ctest + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cas + bas.cSpace + wrd.cpart + bas.cSpace + wrd.cof + bas.cSpace + tst_man.ctestPluginOne,
    [wrd.cName]: wrd.ctest + wrd.cPlugin + num.cOne + wrd.cCommand + num.c01
};