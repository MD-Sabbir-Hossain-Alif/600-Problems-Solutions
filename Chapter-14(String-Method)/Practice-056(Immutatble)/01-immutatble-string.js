
//TODO: Find the index of a specific character in the string
/* ------------------------------- Problem 01 ------------------------------- */

const city = "Chattogram";
console.log(city.indexOf("g"));


// Output: 6


//TODO: Check if a specific character exists in the string
/* ------------------------------- Problem 02 ------------------------------- */

const division = "Sylhet";
console.log(division.includes("y"));


// Output: true


//TODO: Get the last character of a string using length - 1
/* ------------------------------- Problem 03 ------------------------------- */

const name = "Rifat";
console.log(name[name.length - 1]);


// Output: 't'


//TODO: Find the index of a substring in a string
/* ------------------------------- Problem 04 ------------------------------- */

const language = "javascript";
console.log(language.indexOf("rip"));


// Output: 6


//TODO: Demonstrate string immutability in JavaScript
/* ------------------------------- Problem 05 ------------------------------- */

const text = "Immutable";
console.log(text.length);

text[0] = "S";
console.log(text); // in this situation we can see text cann't be change so string is immutable


// Output: 9
// Output: 'Immutable'