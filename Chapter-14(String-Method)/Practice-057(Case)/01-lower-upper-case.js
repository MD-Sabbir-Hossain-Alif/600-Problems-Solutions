
//TODO: Convert the email to all lowercase letters
/* ------------------------------- Problem 01 ------------------------------- */

const email = "User@Example.Com";
const lower = email.toLowerCase();
console.log(lower);



// Output: 'user@example.com'


//TODO: Convert the greeting string to all uppercase letters
/* ------------------------------- Problem 02 ------------------------------- */

const greeting = "hELlo WoRLd";
const upper = greeting.toUpperCase();
console.log(upper);


// Output: 'HELLO WORLD'


//TODO: Convert the string to lowercase and check if it includes "script"
/* ------------------------------- Problem 03 ------------------------------- */

const language = "JavaScript";
const allLower = language.toLowerCase();
const check = allLower.includes("script");
console.log(check);


// Output: true


//TODO: Check if the first character of the string is an uppercase 'N'
/* ------------------------------- Problem 04 ------------------------------- */


const text = "Node.Js";
const firstChr = text[0];
if (firstChr === "N") {
    console.log("Upper Case");
} else {
    console.log("Lower Case");
};



// Output: 'Upper Case'