/**
 * @file test.business.constants.js
 * @module test.business.constants
 * @description A file to hold all of the unit test business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/12/06
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {num, wrd} = hayConst;

// Unit Test Business Rules
export const cunitTestEcho = wrd.cunitTest + wrd.cEcho; // unitTestEcho

// ********************************
// UnitTestStringParsing rules in order
// ********************************
export const ccustomEcho = wrd.ccustom + wrd.cEcho; // customEcho
export const cmostPopularNumber = wrd.cmost + wrd.cPopular + wrd.cNumber; // mostPopularNumber
export const cisAlmostPalindrome = wrd.cis + wrd.cAlmost + wrd.cPalindrome; // isAlmostPalindrome
export const cthreePointAverage = num.cthree + wrd.cPoint + wrd.cAverage; // threePointAverage
export const carrayCounter = wrd.carray + wrd.cCounter; // arrayCounter
