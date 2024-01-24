/* Date Objects
    - Objects that contain values that represent dates and times
    - These date objects can be changed and formatted
*/
// ( year, 0-11, 1-31, 0-23, 0-59, 0-59, 0-999)
// Date(year, month, day, hour, min, sec, ms)
// no args = current date
const date = new Date();
console.log(date);
//                      (year, month, day, T=time Z=UTC time)
const dateStr = new Date("2024-01-02T12:00:00Z");
console.log(dateStr);

// Time since epoch
const fromEpoch = new Date(1700000000000);
console.log(fromEpoch);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const today = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const sec = date.getSeconds();
const ms = date.getMilliseconds();
console.log(year); // 2024
console.log(month); // 0 (0 = january)
console.log(day); // 2 (day of the week, 0-indexed)
console.log(today); // 1-31 day of the month
console.log(hour); // 19 24h format
console.log(minutes);
console.log(sec);
console.log(ms);

// set custom value for date
date.setFullYear(2035);
date.setMonth(15); // if > 12, month %12, year + 1
date.setDate(3); // set day of the month
date.setHours(3);
date.setMinutes(45);
date.setSeconds(3);
console.log(date);

// compare two dates
// these are utc values, browser will adjust accordingly
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

// date values can be compared
if (date2 > date1) {
    console.log("Happy New Year");
}
