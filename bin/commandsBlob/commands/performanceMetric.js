/**
* @file performanceMetric.js
* @module performanceMetric
* @description Contains all of the performance metric commands.
* @requires module:ruleBroker
* @requires module:configurator
* @requires module:loggers
* @requires module:data
* @requires module:stack
* @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
* @requires {@link https://mathjs.org/index.html|math}
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2022/02/04
* @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
*/

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
import stack from '../../structures/stack.js';
// External imports
import hayConst from '@haystacks/constants';
import * as math from 'mathjs';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.performanceMetric.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function businessRulesMetrics
 * @description A command to compute business rule metrics for each of the
 * business rules that were called in a sequence of call(s) or workflow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/03/03
 */
async function businessRulesMetrics(inputData, inputMetaData) {
   let functionName = businessRulesMetrics.name;
   await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
   await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = [true, []];
   let businessRuleMetricsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableBusinessRulePerformanceMetrics);
   if (businessRuleMetricsEnabled === true) {
     let businessRuleCounter = 0;
     let businessRulePerformanceSum = 0;
     let businessRulePerformanceStdSum = 0;
     let average = 0;
     let standardDev = 0;
     // Here we iterate over all of the business rules that were added to the sys.cBusinessRulePerformanceTrackingStack.
     for (let i = 0; i < await stack.length(cfg.cbusinessRulesNamesPerformanceTrackingStack); i++) {
       businessRuleCounter = 0; // Reset it to zero, because we are beginning again with another business rule name.
       businessRulePerformanceSum = 0;
       businessRulePerformanceStdSum = 0;
       average = 0;
       standardDev = 0;
       // Here we will not iterate over all of the contents of all of the business rule performance numbers and
       // do the necessary math for each business rule according to the parent loop.
       let currentBusinessRuleName = D[cfg.cbusinessRulesNamesPerformanceTrackingStack][i];
       for (let j = 0; j < await stack.length(cfg.cbusinessRulesPerformanceTrackingStack); j++) {
         if (D[cfg.cbusinessRulesPerformanceTrackingStack][j][wrd.cName] === currentBusinessRuleName) {
           businessRuleCounter = businessRuleCounter + 1;
           // businessRuleCounter is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRuleCounterIs + businessRuleCounter);
           businessRulePerformanceSum = businessRulePerformanceSum + D[cfg.cbusinessRulesPerformanceTrackingStack][j][sys.cRunTime];
           // businessRulePerformanceSum is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulePerformanceSumIs + businessRulePerformanceSum);
         } // End-if (D[cfg.cBusinessRulePerformanceTrackingStack][j][wrd.cName] === currentBusinessRuleName)
       } // End-for (let j = 0; j < await stack.length(cfg.cBusinessRulePerformanceTrackingStack); j++)
       // DONE! businessRulePerformanceSum is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneBusinessRulePerformanceSumIs + businessRulePerformanceSum);
       average = businessRulePerformanceSum / businessRuleCounter;
       // average is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.caverageIs + average);
       // Now go back through them all so we can compute the standard deviation.
       for (let k = 0; k < await stack.length(cfg.cbusinessRulesPerformanceTrackingStack); k++) {
         if (D[cfg.cbusinessRulesPerformanceTrackingStack][k][wrd.cName] === currentBusinessRuleName) {
           businessRulePerformanceStdSum = businessRulePerformanceStdSum + math.pow((D[cfg.cbusinessRulesPerformanceTrackingStack][k][sys.cRunTime] - average), 2);
           // businessRulePerformanceStdSum is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
         } // End-if (D[cfg.cBusinessRulePerformanceTrackingStack][k][wrd.cName] === currentBusinessRuleName)
       } // End-for (let k = 0; k < await stack.length(cfg.cBusinessRulePerformanceTrackingStack); k++)
       // DONE! businessRulePerformanceStdSum is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneBusinessRulePerformanceStdSumIs + businessRulePerformanceStdSum);
       standardDev = math.sqrt(businessRulePerformanceStdSum / businessRuleCounter);
       // standardDev is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cstandardDevIs + standardDev);

       if (D[cfg.cbusinessRulesPerformanceAnalysisStack] === undefined) {
        await stack.initStack(cfg.cbusinessRulesPerformanceAnalysisStack);
       }
       await stack.push(cfg.cbusinessRulesPerformanceAnalysisStack, {Name: currentBusinessRuleName, Average: average, StandardDeviation: standardDev});
     } // End-for (let i = 0; i < await stack.length(cfg.cBusinessRulesNamesPerformanceTrackingStack); i++)
     await loggers.consoleTableLog('', D[cfg.cbusinessRulesPerformanceAnalysisStack], [wrd.cName, wrd.cAverage, sys.cStandardDeviation]);
     returnData[1] = await ruleBroker.processRules([D[cfg.cbusinessRulesPerformanceAnalysisStack], ''], [biz.carrayDeepClone]);
     await stack.clearStack(cfg.cbusinessRulesPerformanceAnalysisStack);
     // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
     // It might be that the user wants to do something else with this data in memory after it's done.
     if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cclearBusinessRulesPerformanceDataAfterAnalysis) === true) {
      await stack.clearStack(cfg.cbusinessRulesPerformanceTrackingStack);
      await stack.clearStack(cfg.cbusinessRulesNamesPerformanceTrackingStack);
     } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cclearBusinessRulesPerformanceDataAfterAnalysis) === true)
   } // End-if (businessRuleMetricsEnabled === true)
   await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
   await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
}

/**
 * @function commandMetrics
 * @description A command to compute command metrics for each of the commands that were called in a sequence of call(s) or workfow(s).
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
async function commandMetrics(inputData, inputMetaData) {
   let functionName = commandMetrics.name;
   await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
   await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = [true, []];
   let commandMetricsEnabled = await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableCommandPerformanceMetrics);
   if (commandMetricsEnabled === true) {
     let commandCounter = 0;
     let commandPerformanceSum = 0;
     let commandPerformanceStdSum = 0;
     let average = 0;
     let standardDev = 0;
     // Here we iterate over all of the commands that were added to the cfg.ccommandsPerformanceTrackingStack.
     for (let i = 0; i < await stack.length(cfg.ccommandNamesPerformanceTrackingStack); i++) {
       commandCounter = 0;
       commandPerformanceSum = 0;
       commandPerformanceStdSum = 0;
       average = 0;
       standardDev = 0;
       // Here we will now iterate over all of the contents of all the command performance numbers and
       // do the necessary math for each command according to the parent loop.
       let currentCommandName = D[cfg.ccommandNamesPerformanceTrackingStack][i];
       for (let j = 0; j < await stack.length(cfg.ccommandsPerformanceTrackingStack); j++) {
         if (D[cfg.ccommandsPerformanceTrackingStack][j][wrd.cName] === currentCommandName) {
           commandCounter = commandCounter + 1;
           // commandCounter is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandCounterIs + commandCounter);
           commandPerformanceSum = commandPerformanceSum + D[cfg.ccommandsPerformanceTrackingStack][j][sys.cRunTime];
           // commandPerformanceSum is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandPerformanceSumIs + commandPerformanceSum);
         } // End-if (D[cfg.ccommandsPerformanceTrackingStack][j][wrd.cName] === currentCommandName)
       } // End-for (let j = 0; j < stack.length(cfg.ccommandsPerformanceTrackingStack); j++)
       // DONE! commandPerformanceSum is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneCommandPerformanceSumIs + commandPerformanceSum);
       average = commandPerformanceSum / commandCounter;
       // average is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.caverageIs + average);
       // Now go back through them allso we can compute the standard deviation.
       for (let k = 0; k < await stack.length(cfg.ccommandsPerformanceTrackingStack); k++) {
         if (D[cfg.ccommandsPerformanceTrackingStack][k][wrd.cName] === currentCommandName) {
           commandPerformanceStdSum = commandPerformanceStdSum + math.pow((D[cfg.ccommandsPerformanceTrackingStack][k][sys.cRunTime] - average), 2);
           // commandPerformanceStdSum is:
           await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandPerformanceStdSumIs + commandPerformanceStdSum);
         } // End-if (D[cfg.ccommandsPerformanceTrackingStack][k][wrd.cName] === currentCommandName)
       } // End-for (let k = 0; k < stack.length(cfg.ccommandsPerformanceTrackingStack); k++)
       // DONE! commandPerformanceStdSum is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cDoneCommandPerformanceStdSumIs + commandPerformanceStdSum);
       standardDev = math.sqrt(commandPerformanceStdSum / commandCounter);
       // standardDev is:
       await loggers.consoleLog(namespacePrefix + functionName, msg.cstandardDevIs + standardDev);
       if (D[cfg.ccommandsPerformanceAnalysisStack] === undefined) {
        await stack.initStack(cfg.ccommandsPerformanceAnalysisStack);
       }
       await stack.push(cfg.ccommandsPerformanceAnalysisStack, {Name: currentCommandName, Average: average, StandardDeviation: standardDev});
     } // End-for (let i = 0; i < stack.length(cfg.ccommandNamesPerformanceTrackingStack); i++)
     await loggers.consoleTableLog('', D[cfg.ccommandsPerformanceAnalysisStack], [wrd.cName, wrd.cAverage, sys.cStandardDeviation]);
     returnData[1] = await ruleBroker.processRules([D[cfg.ccommandsPerformanceAnalysisStack], ''], [biz.carrayDeepClone]);
     await stack.clearStack(cfg.ccommandsPerformanceAnalysisStack);
     // We need to have a flag that will enable the user to determine if the data should be cleared after the analysis is complete.
     // It might be that the user wants to do something else with this data in memory after it's done.
     if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cclearCommandPerformanceDataAfterAnalysis) === true) {
      await stack.clearStack(cfg.ccommandsPerformanceTrackingStack);
      await stack.clearStack(cfg.ccommandNamesPerformanceTrackingStack);
     } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cclearCommandPerformanceDataAfterAnalysis) === true)
   } // End-if (commandMetricsEnabled === true)
   await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
   await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
}

export default {
  businessRulesMetrics,
  commandMetrics
};
