
//TODO: A string with value 'false' is truthy, but the boolean false is falsy
/* ------------------------------- Problem 01 ------------------------------- */

let x = 'false'; // This is a non-empty string, so it's truthy.
if (x) {
    console.log(x); // this output as string
}


let y = false; // This is the boolean false, so it's falsy.
if (!y) {
    console.log(y) // this output as boolean
}


// Output: false
// Output: false



//TODO: check an empty object in JavaScript is truthy or falsy
/* ------------------------------- Problem 02 ------------------------------- */

const obj = {};

if (obj) {
    console.log("Empty object is truthy");
} else {
    console.log("Empty object is falsy");
}


// Output: Empty object is truthy


//TODO: An empty array is also truthy in JavaScript
/* ------------------------------- Problem 03 ------------------------------- */

const arr = [];
if (arr) {
    console.log("Empty array is truthy");
} else {
    console.log("Empty array is falsy");
}


// Output: Empty array is truthy


//TODO: Using double negation (!!) confirms the truthiness of a value
/* ------------------------------- Problem 04 ------------------------------- */

const arr2 = [];

if (!!arr2) {
    console.log("Empty array is truthy");
} else {
    console.log("Empty array is falsy");
}


// Output: Empty array is truthy