// @ts-nocheck
declare type GMT = "GMT" | undefined;
declare type Month = "JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN" | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC";
// prettier-ignore
declare type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
declare type Weekday = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
// prettier-ignore
declare type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
// prettier-ignore
declare type MinuteOrSecond = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;

/**
 * @param wd1 weekday string
 * @param wd2 weekday string
 * @param gmt Either the string "GMT" or is left out.
 * @returns True if the current weekday is in between those two ordered weekdays. Bounds are inclusive, but the bounds are ordered. If the "GMT" parameter is specified, times are taken to be in GMT. Otherwise, the local timezone is used.
 */
declare function weekdayRange(wd1: Weekday, wd2?: Weekday, gmt?: GMT): boolean;

/**
 * @param weekday weekday string
 * @param gmt Either the string "GMT" or is left out.
 * @returns True if the current weekday is the parameter represents. If the string "GMT" is specified as a second parameter, times are taken to be in GMT. Otherwise, they are assumed to be in the local timezone.
 */
declare function weekdayRange(weekday: Weekday, gmt?: GMT): boolean;

/**
 * @param day The ordered day of the month between 1 and 31 (as an integer).
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(day: Day, gmt?: GMT): boolean;

/**
 * @param month Month string
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(month: Month, gmt?: GMT): boolean;

/**
 * @param year The ordered full year integer number. For example, 2016 (not 16).
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(year: number, gmt?: GMT): boolean;

/**
 * @param month1 Month string
 * @param month2 Month string
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(month1: Month, month2: Month, gmt?: GMT): boolean;

/**
 * @param year1 The ordered full year integer number. For example, 2016 (not 16).
 * @param year2 The ordered full year integer number. For example, 2016 (not 16).
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(year1: number, year2: number, gmt?: GMT): boolean;

/**
 * @param day1 The ordered day of the month between 1 and 31 (as an integer).
 * @param month1 Month string
 * @param day2 The ordered day of the month between 1 and 31 (as an integer).
 * @param month2 Month string
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(day1: Day, month1: Month, day2: Day, month2: Month, gmt?: GMT): boolean;

/**
 * @param day The ordered day of the month between 1 and 31 (as an integer).
 * @param month Month string
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(day: Day, month: Month, gmt?: GMT): boolean;

/**
 * @param month1 Month string
 * @param year1 The ordered full year integer number. For example, 2016 (not 16).
 * @param month2 Month string
 * @param year2 The ordered full year integer number. For example, 2016 (not 16).
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(month1: Month, year1: number, month2: Month, year2: number, gmt?: GMT): boolean;

/**
 * @param day1 The ordered day of the month between 1 and 31 (as an integer).
 * @param month1 Month string
 * @param year1 The ordered full year integer number. For example, 2016 (not 16).
 * @param day2 The ordered day of the month between 1 and 31 (as an integer).
 * @param month2 Month string
 * @param year2 The ordered full year integer number. For example, 2016 (not 16).
 * @param gmt Either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.
 */
declare function dateRange(
  day1: Day,
  month1: Month,
  year1: number,
  day2: Day,
  month2: Month,
  year2: number,
  gmt?: GMT
): boolean;

/**
 * @param hour The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param gmt Either the string "GMT" for GMT timezone, or not specified, for local timezone.
 * @returns True if at times that match that specification
 */
declare function timerange(hour: Hour, gmt?: GMT): boolean;

/**
 * @param hour The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param minute Minutes from 0 to 59.
 * @param gmt Either the string "GMT" for GMT timezone, or not specified, for local timezone.
 * @returns True if at times that match that specification
 */
declare function timerange(hour: Hour, minute: MinuteOrSecond, gmt?: GMT): boolean;

/**
 * @param hour1 The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param minute1 Minutes from 0 to 59.
 * @param hour2 The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param minute2 Minutes from 0 to 59.
 * @param gmt Either the string "GMT" for GMT timezone, or not specified, for local timezone.
 * @returns True if between those times, including bounds, but the bounds are ordered.
 */
declare function timerange(
  hour1: Hour,
  minute1: MinuteOrSecond,
  hour2: Hour,
  minute2: MinuteOrSecond,
  gmt?: GMT
): boolean;

/**
 * @param hour1 The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param minute1 Minutes from 0 to 59.
 * @param second1 Seconds from 0 to 59.
 * @param hour2 The hour from 0 to 23. (0 is midnight, 23 is 11 pm.)
 * @param minute2 Minutes from 0 to 59.
 * @param second2 Seconds from 0 to 59.
 * @param gmt Either the string "GMT" for GMT timezone, or not specified, for local timezone.
 * @returns True if between those times, including bounds, but the bounds are ordered.
 */
declare function timerange(
  hour1: Hour,
  minute1: MinuteOrSecond,
  second1: MinuteOrSecond,
  hour2: Hour,
  minute2: MinuteOrSecond,
  second2: MinuteOrSecond,
  gmt?: GMT
): boolean;
