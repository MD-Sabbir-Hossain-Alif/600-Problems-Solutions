
//TODO: change string to number
/* ------------------------------- Problem 01 ------------------------------- */
const aString = "20";
const aStringNumber = parseInt("20") + 10;
console.log(aStringNumber);
// output: 30


//TODO: variable name case-sensitive or not
/* ------------------------------- Problem 02 ------------------------------- */
const Pi = 3.14159;
const piInt = parseInt(Pi);
console.log(piInt);
// output: 3


//TODO: chack variable name case-sensitive or not
/* ------------------------------- Problem 03 ------------------------------- */
let userName = "premikboy";
let userNameNum = parseInt(userName);
console.log(userNameNum);
// output: NaN



//TODO: fractional naumber rounding
/* ------------------------------- Problem 04 ------------------------------- */
let number1 = 3.456,
    number2 = 2.789;
let sum = number1 + number2;
let sumNum = parseFloat(sum.toFixed(2));
console.log(sumNum);
// output: 6.25


//TODO: fractional naumber sumation
/* ------------------------------- Problem 05 ------------------------------- */
let string1 = "56.78",
    string2 = "12.34";

let strToNum1 = parseFloat(string1),
    strToNum2 = parseFloat(string2);

let sum2 = strToNum1 + strToNum2;
console.log(sum2);
// output: 69.12


//TODO: fractional naumber rounding
/* ------------------------------- Problem 06 ------------------------------- */

let number3 = 10.5678,
    number4 = 5.4321;
let sum3 = number3 + number4;
let sumNum2 = parseFloat(sum3.toFixed(1));
console.log(sumNum2);
// output: 16


//TODO: fractional naumber rounding
/* ------------------------------- Problem 06 ------------------------------- */

let number5 = 42.45689754;

let floatNum = parseFloat(number5.toFixed(3));
console.log(floatNum);
// output: 42.457