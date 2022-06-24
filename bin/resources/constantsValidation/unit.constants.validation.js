/**
 * @file unit.constants.validation.js
 * @module unit.constants.validation
 * @description Contains all validations for unit & unit conversion constants.
 * Also included are validations for units of measurement, units of time, etc...
 * @requires module:unit.constants
 * @author Seth Hollingsead
 * @date 2022/03/21
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as unt from '../../constants/unit.constants.js';

/**
 * @function unitConstantsValidation
 * @description Initializes the unit constants vaidation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/21
 */
export const unitConstantsValidation = [
  // Units of Measure
  {Name: 'cFemto', Actual: unt.cFemto, Expected: 'Femto'},
  {Name: 'cPico', Actual: unt.cPico, Expected: 'Pico'},
  {Name: 'cNano', Actual: unt.cNano, Expected: 'Nano'},
  {Name: 'cMicro', Actual: unt.cMicro, Expected: 'Micro'},
  {Name: 'cMill', Actual: unt.cMill, Expected: 'Mill'},
  {Name: 'cMilli', Actual: unt.cMilli, Expected: 'Milli'},

  // Units of Time
  {Name: 'csecond', Actual: unt.csecond, Expected: 'second'},
  {Name: 'cSecond', Actual: unt.cSecond, Expected: 'Second'},
  {Name: 'cSeconds', Actual: unt.cSeconds, Expected: 'Seconds'},
  {Name: 'cMinute', Actual: unt.cMinute, Expected: 'Minute'},
  {Name: 'cMinutes', Actual: unt.cMinutes, Expected: 'Minutes'},
  {Name: 'cHour', Actual: unt.cHour, Expected: 'Hour'},
  {Name: 'cHours', Actual: unt.cHours, Expected: 'Hours'},
  {Name: 'cDay', Actual: unt.cDay, Expected: 'Day'},
  {Name: 'cDays', Actual: unt.cDays, Expected: 'Days'},
  {Name: 'cWeek', Actual: unt.cWeek, Expected: 'Week'},
  {Name: 'cWeeks', Actual: unt.cWeeks, Expected: 'Weeks'},
  {Name: 'cMonth', Actual: unt.cMonth, Expected: 'Month'},
  {Name: 'cMonths', Actual: unt.cMonths, Expected: 'Months'},
  {Name: 'cYear', Actual: unt.cYear, Expected: 'Year'},
  {Name: 'cYears', Actual: unt.cYears, Expected: 'Years'},
  {Name: 'cDecade', Actual: unt.cDecade, Expected: 'Decade'},
  {Name: 'cDecades', Actual: unt.cDecades, Expected: 'Decades'},
  {Name: 'ccent', Actual: unt.ccent, Expected: 'cent'},
  {Name: 'cCent', Actual: unt.cCent, Expected: 'Cent'},
  {Name: 'cCentur', Actual: unt.cCentur, Expected: 'Centur'},
  {Name: 'cCentury', Actual: unt.cCentury, Expected: 'Century'},
  {Name: 'cCenturies', Actual: unt.cCenturies, Expected: 'Centuries'},
  {Name: 'cMillennium', Actual: unt.cMillennium, Expected: 'Millennium'},
  {Name: 'cMillenniums', Actual: unt.cMillenniums, Expected: 'Millenniums'},
  {Name: 'cNanoSecond', Actual: unt.cNanoSecond, Expected: 'NanoSecond'},
  {Name: 'cNanoSeconds', Actual: unt.cNanoSeconds, Expected: 'NanoSeconds'},
  {Name: 'cMicroSecond', Actual: unt.cMicroSecond, Expected: 'MicroSecond'},
  {Name: 'cMicroSeconds', Actual: unt.cMicroSeconds, Expected: 'MicroSeconds'},
  {Name: 'cMilliSecond', Actual: unt.cMilliSecond, Expected: 'MilliSecond'},
  {Name: 'cMilliSeconds', Actual: unt.cMilliSeconds, Expected: 'MilliSeconds'},
  {Name: 'cPicoSecond', Actual: unt.cPicoSecond, Expected: 'PicoSecond'},
  {Name: 'cPicoSeconds', Actual: unt.cPicoSeconds, Expected: 'PicoSeconds'},
  {Name: 'cFemtoSecond', Actual: unt.cFemtoSecond, Expected: 'FemtoSecond'},
  {Name: 'cFemtoSeconds', Actual: unt.cFemtoSeconds, Expected: 'FemtoSeconds'}

  // Unit Conversions
  // Miles to Km
  // Celcius to Ferinheight
  // Liters to Gallons
];
