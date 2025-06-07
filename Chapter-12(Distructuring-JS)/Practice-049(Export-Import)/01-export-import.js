
//TODO: difference between export and import? how they work?
/* ------------------------------- Problem 01 ------------------------------- */
/*
জাভাস্ক্রিপ্টে export ব্যবহার করা হয় function, object, variable বড় কোন code, 
ছোট করে আলাদা ফাইল বা মডিউল এ রাখা;
> Modules with functions or variables can be stored in any external file. (w3school)

আর import কি ওয়ার্ড ব্যবহার করে main fill এ code নিয়ে আসা হয়;
> we can import modules into a file in two ways, based on if they are
named exports or default exports. (w3school)
*/

//Example:

// file name Math.js
export function add(a, b) {
    return a + b;
};

// file name main.js
import {add} from './Math.js';
console.log(4, 7);

// Output: 11


//TODO: what is a default export? what is the benefit of default export?
/* ------------------------------- Problem 02 ------------------------------- */
/*
the ragular named export with "default" key word called default export;
benefit:
1. we can change name when we import, and it dont need {};
2. default export means we have just one main thing to export;
*/

//Example:

// file name add.js
export default function add(a, b) {
    return a + b;
};

// file name main.js
import addFunction from './add.js';



//TODO: how does the as keyword help in changing names?
/* ------------------------------- Problem 03 ------------------------------- */

/* when we import any thing from export file and we need rename 
something here "as" keyword help in changing names */

//Example:

// file name Math.js
export function add(a, b) {
    return a + b;
};

// file name main.js
import {add as sum} from './Math.js';
console.log(sum(5, 2));

// Output: 7

//TODO: What is the difference between export and export default?
/* ------------------------------- Problem 04 ------------------------------- */

/*
1. export 
    > we need {} ;
    > multiple export can create;
    > export means Named export

2. default export
    > don't need {} ;
    > only one allowed
    > one fill
*/


//TODO: Is it possible to have more than one default export in the same file? How?
/* ------------------------------- Problem 05 ------------------------------- */

// Ans: No we can not use more than one default export;
// How: we can combine multiple values into an object and export that as default;

//Example:

// file name file.js
function A() {}
function B() {}

//! export default { A, B };
// file name main.js
import utils from './file.js';

utils.A();
utils.B();

// N.B: i collect this info using JS Book, google, w3school and chatGPT