
//TODO: Find and log the minimum number from a set of integers
/* ------------------------------- Problem 01 ------------------------------- */

const minNumber = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(minNumber);


// Output: -56


//TODO: Find and log the maximum number from a set of integers
/* ------------------------------- Problem 02 ------------------------------- */

const maxNumber = Math.max(21, 35, 67);
console.log(maxNumber);


// Output: 67


//TODO: Round numbers to the nearest integer
/* ------------------------------- Problem 03 ------------------------------- */

const nearIn = Math.round(7.6);  //nearIn = Nearest integer
const nearIn2 = Math.round( 7.2);
console.log(nearIn);
console.log(nearIn2);


// Output: 8
// Output: 7


//TODO: Get the largest integer less than or equal to a given number
/* ------------------------------- Problem 04 ------------------------------- */

const nearSmIn = Math.floor(9.8);  //nearSmIn = Nearest small integer
const nearSmIn2 = Math.floor(5.3);
console.log(nearSmIn);
console.log(nearSmIn2);


// Output: 9
// Output: 5


//TODO: Get the smallest integer greater than or equal to a given number
/* ------------------------------- Problem 05 ------------------------------- */

const nearLaIn = Math.ceil(3.1);  //nearLaIn = Nearest large integer
const nearLaIn2 = Math.ceil(6.9);
console.log(nearLaIn);
console.log(nearLaIn2);


// Output: 4
// Output: 7


//TODO: Find the absolute (non-negative) value of a number
/* ------------------------------- Problem 06 ------------------------------- */

const abssolute = Math.abs(-34);
console.log(abssolute);


// Output: 34


//TODO: Demonstrate rounding a number using round, floor, and ceil methods
/* ------------------------------- Problem 07 ------------------------------- */

function integerNum(number) {
    console.log(Math.round(number));
    console.log(Math.floor(number));
    console.log(Math.ceil(number));
}
integerNum(20.78)


// Output: 21
// Output: 20
// Output: 21