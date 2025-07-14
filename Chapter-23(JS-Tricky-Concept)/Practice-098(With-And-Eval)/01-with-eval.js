
//TODO: what is "with"? Does this work?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: with is a statement that can use for creating object scope

// Example: 
const person = {name: "sabbir", age: 30};
with (person) {
    console.log(name);
}

// Output: sabbir

// N:B: "with" statement can conflict with global variable so we need to use "use strict"
// Notic: After ES6 version we don't need to write it it's come with in build 

//TODO: what is eval()? Why shouldn't you use this?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: eval() function has a super power that can get input as string

// Example: 
const num = 5;
eval("console.log(num + 5)");

// Output: 10

// N: B: when we use eval that can creat a loop for hacker 
//* thay can parform any task using eval function and inject malware