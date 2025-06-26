
//TODO: Pass a function as an argument and return it from another function
/* ------------------------------- Problem 01 ------------------------------- */

function calculator (addNum) {
    return addNum;
}
function add() {
    return 10 + 10;
}
console.log(calculator(add));


/* Output: ƒ add() {
    return 10 + 10;
}
*/


//TODO: Pass an object to a function and use callback to handle its keys
/* ------------------------------- Problem 02 ------------------------------- */

function objKeys(obj, callback) {
    const keys = Object.keys(obj);
    callback(keys);
}
const obj = {
    name: "Sabbir",
    age: 23,
    height: "5fit 6inch",
    exprience: "0.5year"
};

function printkeys(keys) {
    console.log(keys)
}
objKeys(obj, printkeys);


// Output: [ 'name', 'age', 'height', 'exprience' ]


//TODO: Use a callback to process a number after dividing it
/* ------------------------------- Problem 03 ------------------------------- */

function numberProcessor(num, callback) {
    const dividedNum = num / 5;
    callback(dividedNum);
}

function number(output) {
    console.log(output);
}
const a = 100;
numberProcessor(a, number);


// Output: 20


//TODO: Call a function passed as a callback to print the current date
/* ------------------------------- Problem 04 ------------------------------- */

function calender(okay) {
    okay();
}
function date() {
    console.log("Today is 26 june 2025")
}
calender(date)

// Output: Today is 2 june 2025