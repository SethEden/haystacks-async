/**
 * @file test.business.constants.validation.js
 * @module test.business.constants.validation
 * @description Contains all validations for named test business rule constants.
 * @requires module:test.business.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_biz from '../../constants/test.business.constants.js';

/**
 * @function unitTestBusinessConstantsValidation
 * @description Initializes the unit test business rules constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Vlad Sorokin
 * @date 2022/03/22
 */
export const unitTestBusinessConstantsValidation = [
    // Unit Test Business Rules
    {Name: 'cunitTestEcho', Actual: tst_biz.cunitTestEcho, Expected: 'unitTestEcho'},
  
    // ********************************
    // UnitTestStringParsing rules in order
    // ********************************
    {Name: 'ccustomEcho', Actual: tst_biz.ccustomEcho, Expected: 'customEcho'},
    {Name: 'cmostPopularNumber', Actual: tst_biz.cmostPopularNumber, Expected: 'mostPopularNumber'},
    {Name: 'cisAlmostPalindrome', Actual: tst_biz.cisAlmostPalindrome, Expected: 'isAlmostPalindrome'},
    {Name: 'cthreePointAverage', Actual: tst_biz.cthreePointAverage, Expected: 'threePointAverage'},
    {Name: 'carrayCounter', Actual: tst_biz.carrayCounter, Expected: 'arrayCounter'}
  ];
  