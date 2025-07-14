
//TODO: what is IIFE? Why is this used?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: Immediately Invoked Function Expression
// Usage: it's for when we need to creat a instance function for just one time

(function() {
    console.log("Application initializing");
})();


// Output: Application initializing


//TODO: create a IIFE function
/* ------------------------------- Problem 02 ------------------------------- */

(function() {
    console.log("I am isolated from outer scope!");
})();


// Output: I am isolated from outer scope!


//TODO: create a IIFE arrow function
/* ------------------------------- Problem 03 ------------------------------- */

(() => {
    console.log("borrow from arrow");
})();


// Output: borrow from arrow


//TODO: 
/* ------------------------------- Problem 04 ------------------------------- */

(function() {
    const tempInCelsius = 38;
    const CelsiusToKelvin = tempInCelsius + 298.15;
    console.log(CelsiusToKelvin);
})();


// Output: 336.15