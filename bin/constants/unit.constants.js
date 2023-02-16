/**
 * @file unit.constants.js
 * @module unit-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2020/07/21
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as phn from './phonic.constants.js';

// Units of Measure
export const cFemto = bas.cFe + bas.cmt + bas.co; // Femto
export const cPico = bas.cPi + bas.cco; // Pico
export const cNano = bas.cNa + bas.cno; // Nano
export const cMicro = bas.cMi + bas.ccr + bas.co; // Micro
export const cMill = bas.cMi + bas.cll; // Mill
export const cMilli = cMill + bas.ci; // Milli

// Units of Time
export const csecond = bas.cse + phn.ccond; // second
export const cSecond = bas.cSe + phn.ccond; // Second
export const cSeconds = cSecond + bas.cs; // Seconds
export const cMinute = bas.cMi + bas.cnu + bas.cte; // Minute
export const cMinutes = cMinute + bas.cs; // Minutes
export const cHour = bas.cHo + bas.cur; // Hour
export const cHours = cHour + bas.cs; // Hours
export const cDay = bas.cDa + bas.cy; // Day
export const cDays = cDay + bas.cs; // Days
export const cWeek = bas.cW + bas.cee + bas.ck; // Week
export const cWeeks = cWeek + bas.cs; // Weeks
export const cMonth = bas.cMo + bas.cn + bas.cth; // Month
export const cMonths = cMonth + bas.cs; // Months
export const cYear = bas.cYe + bas.car; // Year
export const cYears = cYear + bas.cs; // Years
export const cDecade = bas.cDe + bas.cca + bas.cde; // Decade
export const cDecades = cDecade + bas.cs; // Decades
export const ccent = bas.cc + phn.cent; // cent
export const cCent = bas.cC + phn.cent; // Cent
export const cCentur = cCent + bas.cur; // Centur
export const cCentury = cCentur + bas.cy; // Century
export const cCenturies = cCentur + phn.cies; // Centuries
export const cMillennium = cMill + bas.cen + bas.cni + bas.cum; // Millennium // Millennium Falcon ;-)
export const cMillenniums = cMillennium + bas.cs; // Millenniums
export const cNanoSecond = cNano + cSecond; // NanoSecond
export const cNanoSeconds = cNano + cSeconds; // NanoSeconds
export const cMicroSecond = cMicro + cSecond; // MicroSecond
export const cMicroSeconds = cMicro + cSeconds; // MicroSeconds
export const cMilliSecond = cMilli + cSecond; // MilliSecond
export const cMilliSeconds = cMilli + cSeconds; // MilliSeconds
export const cPicoSecond = cPico + cSecond; // PicoSecond
export const cPicoSeconds = cPico + cSeconds; // PicoSeconds
export const cFemtoSecond = cFemto + cSecond; // FemtoSecond
export const cFemtoSeconds = cFemto + cSeconds; // FemtoSeconds

// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons
