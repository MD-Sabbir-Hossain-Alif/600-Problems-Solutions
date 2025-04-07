
//TODO: comparsion between amount
/* ------------------------------- Problem 01 ------------------------------- */
let iHave = 50,
    friendsHave = "50";

let compare = iHave == friendsHave;
console.log(compare);
// output: true

let compare2 = iHave === friendsHave;
console.log(compare2);
// output: false


//TODO: comparsion between identical string
/* ------------------------------- Problem 02 ------------------------------- */
let note1 = "JavaString",
    note2 = 'JavaString';

let chackingOutput = note1 == note2;
console.log(chackingOutput);
// output: true

let chackingOutput2 = note1 === note2;
console.log(chackingOutput2);
// output: true


//TODO: comparsion between a number and a string
/* ------------------------------- Problem 03 ------------------------------- */
let a = 25,
    b = "25";

let Compare3 = a == b;
console.log(Compare3);  //output well be true because of "==" oparator
// output: true

let Compare4 = a === b;
console.log(Compare4);  //output well be true because of "==" oparator
// output: false



//TODO: comparsion between identical string
/* ------------------------------- Problem 04 ------------------------------- */
let  firstString= "apple",
    secondString = "apple";

let chackingOutput1 = firstString == firstString;
console.log(chackingOutput1);
// output: true

let chackingOutput3 = firstString === firstString;
console.log(chackingOutput3);
// output: true


//TODO: comparsion between Case-Sensitive Strings
/* ------------------------------- Problem 05 ------------------------------- */
let  text1= "test",
    text2 = "TEST";

let result = text1 == text2;
console.log(result);
// output: false

let result2 = text1 === text2;
console.log(result2);
// output: false


//TODO: comparsion between Two Different Numbers
/* ------------------------------- Problem 06 ------------------------------- */

let  variableX = 15,
    variableY = 20;

let variableResult = variableX != variableY;
console.log(variableResult);
// output: true

let variableResult2 = variableX !== variableY;
console.log(variableResult2);
// output: true

//TODO: comparsion between Case-Sensitive Strings
/* ------------------------------- Problem 07 ------------------------------- */

let  variableA = "hello", //hello is a string datatype so i surrond it with quotes
    variableB = "Hello";

let result1 = variableA == variableB;
console.log(result1);
// output: false

let result3 = variableA === variableB;
console.log(result3);
// output: false