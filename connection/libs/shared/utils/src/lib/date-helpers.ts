// https://date-fns.org/

/*

GUIDELINES FOR NAMING DATE FIELDS

When naming fields (or variables) for months, days, years, etc., clarity and context are essential. 

The name should be concise, self-explanatory, and adhere to any established coding conventions or guidelines.

Examples:

1. **Single Date Components:**
    - `year`
    - `month`
    - `day`
    - `hour`
    - `minute`
    - `second`

2. **Duration:**
    - `durationInDays`
    - `durationInMonths`
    - `durationInYears`
    - `hoursElapsed`
    - `minutesElapsed`

3. **Ranges or Intervals:**
    - `startDate` and `endDate`
    - `startMonth` and `endMonth`
    - `startYear` and `endYear`

4. **Specific Definitions:**
    - `birthYear`
    - `expirationMonth`
    - `dueDay`

5. **Arrays or Lists:**
    - `daysOfWeek` (e.g., ['Monday', 'Tuesday', ...])
    - `monthsOfYear`

6. **Boolean Checks:**
    - `isLeapYear`
    - `isValidDate`

7. **Formatted Dates:**
    - `formattedDate` (e.g., 'YYYY-MM-DD')
    - `displayMonth` (e.g., 'January')

*/

// export function formatDate(date: Date | string | number) {
//   return new Intl.DateTimeFormat('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   }).format(new Date(date));
// }

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-UK', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export const formatDateToLocal = (dateStr: string, locale = 'en-US') => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export function today() {
  return new Date(Date.now()).toISOString();
}

export function getWeekNumber(d: Date): number {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

  // Get first day of the year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  // Calculate full weeks to nearest Thursday
  const weekNumber = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );

  return weekNumber;
}

export function daysAheadToStr(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

export function daysAgoToStr(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export function sevenDaysAhead() {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
}

export function sevenDaysAgo() {
  return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
}

export function thirtyDaysAgo() {
  return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
}

export function fortyTwoDaysAgo() {
  return new Date(Date.now() - 42 * 24 * 60 * 60 * 1000).toISOString();
}

export function fortyEightDaysAgo() {
  return new Date(Date.now() - 48 * 24 * 60 * 60 * 1000).toISOString();
}

export function ninetyDaysAgo() {
  return new Date(Date.now() - 48 * 24 * 60 * 60 * 1000).toISOString();
}

export function OneYearAgo() {
  return new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();
}

export const [nextWeekMonday, nextWeekSunday] = getNextWeekDateRange();

function getNextWeekDateRange(): [Date, Date] {
  const now = new Date();
  const currentDay = now.getDay();
  const daysToNextMonday = (8 - currentDay) % 7;

  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysToNextMonday);
  nextMonday.setHours(0, 0, 0, 0);

  const nextSunday = new Date(nextMonday);
  nextSunday.setDate(nextMonday.getDate() + 6);

  return [nextMonday, nextSunday];
}

const getLastMonday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Subtract days to reach the last week's Monday
  const daysToSubtract = dayOfWeek + 6; // This will take us to the previous week's Monday

  today.setDate(today.getDate() - daysToSubtract);
  return today;
};

const getLastWednesday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysToSubtract = dayOfWeek >= 3 ? dayOfWeek - 3 : 4 + dayOfWeek;

  today.setDate(today.getDate() - daysToSubtract);
  return today;
};

export const lastMonday = getLastMonday().toISOString().split('T')[0];
export const lastWednesday = getLastWednesday().toISOString().split('T')[0];

export function threeMonthsAgo(): Date {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  date.setDate(1); // Set the day to the first of the month
  date.setHours(0, 0, 0, 0); // Set the time to midnight
  return date;
}

export function threeMonthsAgoStr(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  date.setDate(1); // Set the day to the first of the month
  date.setHours(0, 0, 0, 0); // Set the time to midnight

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  const day = '01';

  return `${year}-${month}-${day}`;
}

export function lastMonth(): Date {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  date.setDate(1); // Set the day to the first of the month
  date.setHours(0, 0, 0, 0); // Set the time to midnight
  return date;
}

export function lastMonthStr(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  date.setDate(1); // Set the day to the first of the month
  date.setHours(0, 0, 0, 0); // Set the time to midnight

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zeros if necessary
  const day = '01'; // Since we set the date to the first of the month

  return `${year}-${month}-${day}`;
}
