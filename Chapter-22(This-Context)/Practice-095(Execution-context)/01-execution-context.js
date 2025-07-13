
//TODO: What is execution context? How does it work?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
//* An execution context is the environment in which JavaScript code is evaluated and executed

//? How its work
/*
Creation Phase:
    1. function parameter value set
    2. hoisting all
    3. variable initialized (in temporal dead zone)
    4. set undefined ver variable and initialize
    5. create scope chain
    6. this is determined
Execution Phase:
    Runs the actual code, assigns values, calls functions, calculating execute ,
    give output or return 
*/


//TODO: What is the function of global context? Why is it needed?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 
//* The Global Context is the default environment where any JavaScript 
//* code runs when it's not inside a function.
//* It is the first execution context created when a JavaScript program starts,
//* and it stays in memory until the program finishes or the page is closed.

//? Why need Global Context: 
/*
1. Creating the Global Object
    In browsers: window
    In Node.js: global
2. Storing Global Variables and Functions
3. Setting the Default this Value
*  The Global Execution Context  is like the foundation of a building:
    It must exist before any rooms (functions) can be created.
    Without the foundation (global context), you can’t build or organize anything.
*/