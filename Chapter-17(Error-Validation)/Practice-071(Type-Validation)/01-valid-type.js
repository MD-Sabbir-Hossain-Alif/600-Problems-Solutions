
//TODO: Return the first character of a string with error validation
/* ------------------------------- Problem 01 ------------------------------- */

function firstChar(input) {
    if(typeof input !== "string") {
        return "Input should be a string";
    }
    return input[0];
}
const names = "Sabbir";
console.log(firstChar(names));


// Output: S


//TODO: Return the last element of an array with error validation
/* ------------------------------- Problem 02 ------------------------------- */

function lastArray(input) {
    if(!Array.isArray(input)) {
        return "Warning: Input should be an array";
    }
    const last = input.length - 1;
    return input[last];
}
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(lastArray(arr));


// Output: 7


//TODO: Calculate the area of a rectangle with error validation
/* ------------------------------- Problem 03 ------------------------------- */

function getArea(length, width) {
    if(typeof length !== "number" || typeof width !== "number") {
        return "Input should be a Number";
    }
    return length * width;
}
console.log(getArea(5, "20"))


// Output: Input should be a Number