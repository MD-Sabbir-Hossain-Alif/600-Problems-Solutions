
//TODO: what is the window object in the browser?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
//* The window object in a browser is a global object that represents the
//*  window or tab in which a script is running. It’s the top-level object in the browser's JavaScript environment,
//*  and it acts as the global context for all JavaScript code executed in the browser.


//TODO: what will be the value of "this" when we run console.log(this) in the browser?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 
//* In a browser environment, when code is executed in the global context (outside any function or object),
//*  this refers to the global object, which is window

console.log(this);

// Output: Window { … }


//TODO: normal function this and arrow function this what will be output ?
/* ------------------------------- Problem 03 ------------------------------- */

//? Answer: 
//* output will be different becouse of they are not same.

// Example: 1
const person = {
    name: "John",
    greet: () => {
        return this; // here this is global this
    }
}
console.log(person.greet);

//Example: 2
const player = {
    name: "Sabbir",
    age: "23",
    score () {
        return this; //here this is player object
    }
}
console.log(player.score());


// Output: Window { … }
// Output: {name: 'Sabbir', age: '23', score: ƒ}