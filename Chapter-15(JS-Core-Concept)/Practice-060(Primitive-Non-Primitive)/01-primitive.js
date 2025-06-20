
//TODO: Demonstrate primitive value assignment (pass by value)
/* ------------------------------- Problem 01 ------------------------------- */

let num = 15;
let copy = num;
copy = 25;

console.log(num);
console.log(copy);


// Output: 15
// Output: 25


//TODO: Demonstrate array assignment (pass by reference)
/* ------------------------------- Problem 02 ------------------------------- */

let arr = [1, 2, 3];
let newArr = arr;
newArr.push(88);

console.log(arr);
console.log(newArr);


// Output: [ 1, 2, 3, 88 ]
// Output: [ 1, 2, 3, 88 ]


//TODO: Demonstrate object assignment (pass by reference)
/* ------------------------------- Problem 03 ------------------------------- */

let language = {
    name: "JS",
    age: 30
};

let newVersion = language;
newVersion.location = "Browser";

console.log(language);
console.log(newVersion);


// Output: { name: 'JS', age: 30, location: 'Browser' }
// Output: { name: 'JS', age: 30, location: 'Browser' }