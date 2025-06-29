
//TODO: What happens after calling a function within synchronous code?
/* ------------------------------- Problem 01 ------------------------------- */


// Answer: In synchronous code, when a function is called, the program pauses at that line,
// enters the function, and executes all its code before continuing to the next line.
// Execution happens line by line in a blocking manner. it works in call stack LIFO(Last in, First Out)


//TODO: Is JavaScript single threaded?
/* ------------------------------- Problem 02 ------------------------------- */


//Answer: Yes, JavaScript is single-threaded. It uses a single call stack to execute code,
// meaning it can only run one task at a time. However, with the help of the event loop
// and asynchronous features like setTimeout, Promises, and async/await,
// it can handle non-blocking operations, giving the illusion of multi-threading.