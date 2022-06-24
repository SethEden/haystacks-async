/**
 * @file clientRulesLibrary.js
 * @module clientRulesLibrary
 * @description Contains all of the client defined business rules as a map between function names and function calls.
 * @requires module:clientStringParsing
 * @requires module:application.business.constants
 * @requires module:application.function.constants
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientStringParsing from './clientRules/clientStringParsing.js';
import * as app_biz from '../constants/application.business.constants.js';

/**
 * @function initClientRulesLibrary
 * @description Initializes an object map of client business rules and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initClientRulesLibrary = function() {
  // console.log('BEGIN clientRulesLibrary.initClientRulesLibrary function');
  return {
    [app_biz.cclientEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

    // Client Business Rules
    // ***********************************************
    // clientStringParsing rules in order
    // ***********************************************
    [app_biz.ccustomEcho]: (inputData, inputMetaData) => clientStringParsing.customEcho(inputData, inputMetaData),
    [app_biz.cmostPopularNumber]: (inputData, inputMetaData) => clientStringParsing.mostPopularNumber(inputData, inputMetaData),
    [app_biz.cisAlmostPalindrome]: (inputData, inputMetaData) => clientStringParsing.isAlmostPalindrome(inputData, inputMetaData),
    [app_biz.cthreePointAverage]: (inputData, inputMetaData) => clientStringParsing.threePointAverage(inputData, inputMetaData),
    [app_biz.carrayCounter]: (inputData, inputMetaData) => clientStringParsing.arrayCounter(inputData, inputMetaData)
  };
};

export default {
  initClientRulesLibrary
};
