
//TODO: helloWorld is declared but not assigned a value
/* ------------------------------- Problem 01 ------------------------------- */

let helloWorld;

console.log(helloWorld);


// Output: undefined


//TODO: function 'add' calculates the sum but does not return it
/* ------------------------------- Problem 02 ------------------------------- */

function add(a, b) {
    const add = a + b;
}
const check = add(30, 10);
console.log(check)


// Output: undefined


//TODO: Using 'delete' removes the element at index 2,
/* ------------------------------- Problem 03 ------------------------------- */

const arr = [10, 20, 30, 40, 50];

delete arr[2];

console.log(arr[2]);


// Output: undifined


//TODO: The function expects 3 arguments, but only 2 are passed.
/* ------------------------------- Problem 04 ------------------------------- */

function sum(a, b, c) {
    console.log(c);  // because no third argument was passed
}

sum(5, 10);


// Output: undifined


//TODO: Trying to access 'marks', but the object only has 'masks'.
/* ------------------------------- Problem 05 ------------------------------- */

const student = {
    name: "serious sojib",
    roll: 1,
    masks: 90
};

console.log(student.marks)
// this situation marks is not in student object that's why output is undefined


// Output: undefined