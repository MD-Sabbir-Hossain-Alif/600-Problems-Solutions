
//TODO: How does the event loop work? Explain in detail
/* ------------------------------- Problem 01 ------------------------------- */


/* Answer: 
The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously
checks the call stack and task queues to determine what to execute next. Here's how it works:

1.Call Stack:
    Synchronous code executes immediately, stacking function calls in a LIFO (Last-In-First-Out) structure.
    When a function finishes, it’s popped off the stack.

2.Web APIs:
    Asynchronous operations (e.g., setTimeout, fetch, DOM events) are offloaded to browser/node.js APIs. 
    These run in parallel threads.

3.Callback Queue (Task Queue):
    Once an async operation completes, its callback function moves to the Callback Queue.
    This queue follows FIFO (First-In-First-Out) order.

4.Event Loop Process:
Step 1: Check if the call stack is empty.
Step 2: If empty, move the first callback from the Callback Queue to the Call Stack for execution.
Step 3: Repeat indefinitely.

Key Insight: The event loop only pushes callbacks to the stack when the stack is empty, ensuring non-blocking execution.

*/


//TODO: What is the difference between call stack and callback queue?
/* ------------------------------- Problem 02 ------------------------------- */


/* Answer: 
?       Call Stack	                            Callback Queue
1.Holds synchronous function calls.	    1.Holds async callbacks ready to run.
2.LIFO (Last-In-First-Out) structure.	2.FIFO (First-In-First-Out) structure.
3.Executes immediately.	                3.Waits for the call stack to be empty.
4.Blocking: Long tasks freeze the UI.	4.Non-blocking: Queues tasks for later.
Example: console.log() runs here.	    Example: setTimeout() callbacks.

Analogy:
Call Stack = A cook preparing one dish at a time.
Callback Queue = Finished dishes waiting to be served (only served when the cook is idle).

*/


//TODO: If JavaScript is single threaded, how does it handle asynchronous tasks?
/* ------------------------------- Problem 03 ------------------------------- */


/* Answer: 
JavaScript uses a concurrency model with three core components:

1.Single Thread:
    Only one operation executes at a time in the call stack.

2,Browser/Node.js APIs:
    Async operations (e.g., setTimeout, I/O, HTTP requests) are delegated to external APIs (browser/node.js).
    These run in separate threads.

3.Event Loop & Queues:
    When an async task completes, its callback enters the Callback Queue.
    The event loop checks the call stack. If empty, it moves callbacks from the queue to the stack.

Example:

console.log("Start"); // ? Sync: goes to call stack  
setTimeout(() => console.log("Timeout"), 0); // ? Async: offloaded to Web API  
console.log("End"); // ? Sync: runs next  

! Output:
Start  
End  
Timeout  

Why It Works:
    Async tasks run outside the main thread (via Web APIs).
    Their results are queued and processed only when the main thread is idle.

Key Takeaway: JavaScript’s single thread focuses on fast execution of synchronous code,
while async operations leverage external multi-threaded environments.

*/