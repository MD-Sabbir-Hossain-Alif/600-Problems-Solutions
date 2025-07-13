
//TODO: create a variable name comments and try to plus value before declear
/* ------------------------------- Problem 01 ------------------------------- */

comments++;
let comments = 14;
console.log(comments);


// Output: Cannot access 'comments' before initialization


//TODO: create a variable name views and try to devide value before declear
/* ------------------------------- Problem 02 ------------------------------- */

views /= views;
const views = 100;
console.log(views);


// Output: Cannot access 'comments' before initialization


//TODO: What is the Temporal Dead Zone and Why it's important?
/* ------------------------------- Problem 03 ------------------------------- */

//? Answer: 
/*
    The Temporal Dead Zone (TDZ) is a period in JavaScript where variables declared
    with let and const exist but are not yet accessible. It begins when the code enters
    the variable's scope and ends when the variable is declared and initialized. During this time,
    accessing the variable results in a ReferenceError
*/

//? Why it's important
/*
1. Helps avoid bugs
    Prevents access to variables before they are properly initialized.
    Forces developers to write clearer and more predictable code.
2. Enforces Block Scoping
    Encourages better variable scoping compared to var, which is function-scoped and can
    be accessed even before the declaration due to hoisting.
3. Supports const Behavio
    const must be initialized at the time of declaration.
    The TDZ ensures we can’t sneak around that by accessing it early
*/


//TODO: Why can't a function written with a function expression be called before initialization when hoisting it?
/* ------------------------------- Problem 04 ------------------------------- */

//? Answer: 
/*
A function written as a function expression can't be called before it's initialized because
only the variable is hoisted, not the function body. So until that assignment happens, 
there's no function to call — just undefined or a ReferenceError (depending on how we declared it
*/
//Example: 

hello();
const hello = function() {
    console.log('hello');
}
//? Key Idea: The variable is hoisted, but the function assignment is not.


// Output: Cannot access 'hello' before initialization


//TODO: What is the hoisting behavior of a variable declared with var? explain with example
/* ------------------------------- Problem 05 ------------------------------- */

//? Answer: 
/*
When we declare a variable with var, JavaScript hoists (lifts) the declaration to
the top of its function scope (or global scope if not in a function).
But importantly:
    The declaration is hoisted.
    The initialization (assignment) is not hoisted.
This means the variable exists from the top of the scope, but it is initialized as undefined until the assignment line is reached
*/

// Example:
console.log(name);  // here var value set as undefined
var name = "Sabbir";
console.log(name);

//* var is function scoped not block scoped

// Output: undefined
// Output: Sabbir


//TODO: let and var of hoisting behavior is same ?
/* ------------------------------- Problem 06 ------------------------------- */

//? Answer: 
/* 
No, the hoisting behaveior of let and var is not same
they are both hoisted, but they behave differently because of when and how they are initialized
*/

//Example: 
console.log(myLet); // Output: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); //Output: 10

console.log(myVar); //Output: undefined
var myVar = 50;
console.log(myVar) //Output: 50


//TODO: create a function and call it before in it's declear and check output
/* ------------------------------- Problem 07 ------------------------------- */

//? when we declear a function it hoisted both the name and the function body
//? so it exists in memory before code runs

bigNumber(50, 100);

function bigNumber(num1, num2) {
    if(num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2); // Output: 100 so calling it before the line where it's defined works fine
    }
}