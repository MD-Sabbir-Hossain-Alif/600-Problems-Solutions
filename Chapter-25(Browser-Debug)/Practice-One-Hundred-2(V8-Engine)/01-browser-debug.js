
//TODO: How does JavaScript code work?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
/*
Step1: We write a js code(Ex: console.log("Hello World! (:"))
Step2: Lodad the js code (using browser of node.js)
Step3: Handle js code using JasaScript Engine(like V8, SpiderMonkey, JavaSciptCore)
Step4: engine interprets and executes the js code
step5: engine parsed and compiled (using AST and JIT)
step6: call stack and web apis, callback queue and event loop
step7: give output using browser console or node terminal and using DOM give output in page
*/


//TODO: What is the function of a V8 engine?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: JavaScript engine developed by Google, and it’s used in Google Chrome and Node.js, among other platforms.
//?  Its primary function is to execute JavaScript code
/*
Steps:
1. Parses and Compiles JavaScript Code
2. Optimizes Performance(V8 includes a Just-In-Time (JIT) compiler)
3. Memory Management
4. Runs JavaScript Outside the Browser (Node.js)
*/


//TODO: How does the JIT compiler work?
/* ------------------------------- Problem 03 ------------------------------- */

//? Answer: JIT comiler is Smart real-time code translator and optimizer
/*
*How it's works:
1. Parse & Interpret: Code is first quickly interpreted and executed.
2. Monitor: V8 watches which functions run often (hot code).
3. Compile: Hot code is compiled into optimized machine code.
4. Optimize: JIT makes smart assumptions (e.g. types).
5. Deoptimize (if needed): If assumptions break, V8 reverts to slower code.
*/