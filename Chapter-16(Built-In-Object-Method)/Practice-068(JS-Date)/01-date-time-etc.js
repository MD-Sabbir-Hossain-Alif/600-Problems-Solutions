
//TODO: Get the current date and time
/* ------------------------------- Problem 01 ------------------------------- */

const now = new Date();
console.log(now);


// Output: Fri Jun 27 2025 17:39:20 GMT+0600 (Bangladesh Standard Time)


//TODO: Create a specific date and time
/* ------------------------------- Problem 02 ------------------------------- */

const newDate = new Date(2035, 6, 15, 14, 45, 30);
console.log(newDate);


// Output: Sun Jul 15 2035 14:45:30 GMT+0600 (Bangladesh Standard Time)


//TODO: Extract the current year from today's date
/* ------------------------------- Problem 03 ------------------------------- */

const currentYear = new Date().getFullYear();
console.log(currentYear);


// Output: 2025


//TODO: Change the year of the current date object
/* ------------------------------- Problem 04 ------------------------------- */

const setYear = new Date();
setYear.setFullYear(2040);
console.log(setYear);


// Output: Wed Jun 27 2040 18:01:50 GMT+0600 (Bangladesh Standard Time)


//TODO: Find the day of the week for a given date
/* ------------------------------- Problem 05 ------------------------------- */

const day = new Date("2029-02-16").getDay();
console.log("Day of the week:", day);
const dateName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("The name of that day:", dateName[day]);


// Output: Day of the week: 5
// Output: The name of that day: Friday