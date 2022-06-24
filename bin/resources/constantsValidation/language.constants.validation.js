/**
 * @file language.constants.validation.js
 * @module language.constants.validation
 * @description Contains all validations for named language constants.
 * @requires module:language.constants
 * @author Seth Hollingsead
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as lng from '../../constants/language.constants.js';

/**
 * @function languageConstantsValidation
 * @description Initializes the language constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const languageConstantsValidation = [
  // Languages
  {Name: 'cChinese', Actual: lng.cChinese, Expected: 'Chinese'},
  {Name: 'cChineseSimplified', Actual: lng.cChineseSimplified, Expected: 'ChineseSimplified'},
  {Name: 'cChineseTraditional', Actual: lng.cChineseTraditional, Expected: 'ChineseTraditional'},
  {Name: 'cCzech', Actual: lng.cCzech, Expected: 'Czech'},
  {Name: 'cEnglish', Actual: lng.cEnglish, Expected: 'English'},
  {Name: 'cFrench', Actual: lng.cFrench, Expected: 'French'},
  {Name: 'cHungarian', Actual: lng.cHungarian, Expected: 'Hungarian'},
  {Name: 'cItalian', Actual: lng.cItalian, Expected: 'Italian'},
  {Name: 'cJapanese', Actual: lng.cJapanese, Expected: 'Japanese'},
  {Name: 'cKorean', Actual: lng.cKorean, Expected: 'Korean'},
  {Name: 'cMiscellaneous', Actual: lng.cMiscellaneous, Expected: 'Miscellaneous'},
  {Name: 'cPolish', Actual: lng.cPolish, Expected: 'Polish'},
  {Name: 'cPortuguese', Actual: lng.cPortuguese, Expected: 'Portuguese'},
  {Name: 'cRussian', Actual: lng.cRussian, Expected: 'Russian'},
  {Name: 'cSpanish', Actual: lng.cSpanish, Expected: 'Spanish'}
];
