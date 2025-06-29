
//TODO: How does JavaScript run code?
/* ------------------------------- Problem 01 ------------------------------- */


/*  Answer: 
JavaScript executes code through a multi-step process involving parsing, interpretation, JIT compilation, and execution:

1. Parsing
    Source code is read and transformed into an Abstract Syntax Tree (AST).
    Syntax errors are caught during this phase.

2. Compilation
    Interpreter (Ignition in V8):
        Converts AST into bytecode.
        Begins execution immediately.

    JIT Compiler (TurboFan in V8):
        Monitors "hot" code (frequently executed).
        Optimizes it into machine code for faster execution.
        Replaces existing bytecode with machine code.
        Can deoptimize if assumptions fail (e.g., type mismatch).

3. Execution
    Optimized machine code is run directly on the CPU.
    Fallback to bytecode if needed due to unexpected behavior.

4. Memory Management
    Memory is allocated for variables, objects, etc.
    Garbage Collection (V8’s Orinoco):
        Frees memory no longer in use.
*/


//TODO: What is javascript?
/* ------------------------------- Problem 02 ------------------------------- */


/* Answer: 
JavaScript is a high-level, dynamically typed, and Just-In-Time compiled language with wide 
application both in the browser and on the server (Node.js).

Feature	            Description
Paradigms	        Multi-paradigm: Object-Oriented, Functional, Event-Driven
Typing	            Dynamic: types resolved at runtime
Concurrency	        Single-threaded, non-blocking I/O via event loop
Environment	        Runs in browsers and Node.js
Standardization	    Based on ECMAScript (e.g., ES6/ES2015 introduced major updates)
Key Strengths	    Asynchronous handling, prototype-based inheritance, first-class functions

*/


//TODO: Write a flowchart code of one step to explain the JIT compiled process
/* ------------------------------- Problem 03 ------------------------------- */


/* Answer: 

graph TD
    A[Source Code] --> B[Parser]
    B --> C[AST Abstract Syntax Tree]
    C --> D[Interpreter Generates Bytecode]
    D --> E[Execute Bytecode]
    E --> F{Is function frequently executed?}
    F -->|Yes| G[JIT Compiler Optimizes to Machine Code]
    F -->|No| E
    G --> H[Execute Optimized Machine Code]
    H --> I{Assumptions valid? e.g., consistent types}
    I -->|Yes| H
    I -->|No| J[Deoptimize to Bytecode]
    J --> E

*/


//TODO: How does JavaScript memory management and garbage collection process work?
/* ------------------------------- Problem 04 ------------------------------- */


/* Answer: 
JavaScript automatically manages memory using garbage collection (GC):

1.Memory Allocation:
    Values/objects allocated when created (e.g., const obj = {}).

2.Garbage Collection Strategies:
    Mark-and-Sweep (Primary):
        1.Mark: Start from "roots" (global variables, active functions), traverse and mark all reachable objects.
        2.Sweep: Delete unmarked objects.

Handles circular references:

let obj1 = {}; 
let obj2 = { ref: obj1 };
obj1.ref = obj2;  // Circular reference
? GC collects if both unreachable

    Generational Collection:
        Young Generation (Scavenger): New objects. Frequent, fast GC. Surviving objects move to old generation.
        Old Generation: Long-lived objects. Less frequent Mark-and-Sweep.

3.Memory Leak Prevention:
    Avoid global variables.
    Remove unused event listeners.
    Release references to DOM elements.
    Use WeakMap/WeakSet for ephemeral data.

Key Insight: GC pauses execution briefly ("stop-the-world"). Modern engines (V8) minimize pauses via incremental/concurrent collection.

*/