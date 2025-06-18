
//TODO: Split a string of friend names into an array
/* ------------------------------- Problem 01 ------------------------------- */

const friendsName = "Raju,Rana,Hasan,Kabir,Mahi";
console.log(friendsName.split(","));



// Output: [ 'Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi' ]


//TODO: Join an array of names into a single comma-separated string
/* ------------------------------- Problem 02 ------------------------------- */

const friNamesArr = ['Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi'];
console.log(friNamesArr.join(", "));


// Output: 'Raju, Rana, Hasan, Kabir, Mahi'


//TODO: Convert a space-separated string into an array of keywords
/* ------------------------------- Problem 03 ------------------------------- */

const kyewords = "function if else while";
console.log(kyewords.split(" "))


// Output: [ 'function', 'if', 'else', 'while' ]


//TODO: Join an array of languages using ":" as a separator
/* ------------------------------- Problem 04 ------------------------------- */

const language = ["JavaScript", "Python", "Java"];
console.log(language.join(":"))


// Output: 'JavaScript:Python:Java'


//TODO: Split loop type names into an array
/* ------------------------------- Problem 05 ------------------------------- */

const loopNames = "for,while,for-in,for-of,do-while";
console.log(loopNames.split(","));


// Output: [ 'for', 'while', 'for-in', 'for-of', 'do-while' ]


//TODO: Remove leading and trailing spaces from a string
/* ------------------------------- Problem 06 ------------------------------- */

const strings = " console log debug ";
console.log(strings.trim());


// Output: 'console log debug'


//TODO: Combine multiple string variables into a single space-separated string
/* ------------------------------- Problem 07 ------------------------------- */

const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";
console.log(str1.concat(" ", str2, " ", str3, " ", str4));



// Output: 'push pop shift unshift'


//TODO: Extract the word "JavaScript" from a sentence using substring
/* ------------------------------- Problem 08 ------------------------------- */

const str = "Hello JavaScript Developers";
console.log(str.substring(6, 16));


// Output: 'JavaScript'


//TODO: Extract the word "learn" from a sentence using substring
/* ------------------------------- Problem 09 ------------------------------- */

const string = "Code more learn more";
console.log(string.substring(10, 15));


// Output: 'learn'