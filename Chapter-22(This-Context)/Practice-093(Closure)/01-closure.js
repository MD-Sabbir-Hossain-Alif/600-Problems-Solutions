
//TODO: What is closure?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: A closure in JavaScript is a function that remembers and can access variables
//? from outside its own scope, even after the outer function has finished executing.

//* A closure happens when a function is defined inside another function, and it captures
//* (or "closes over") variables from the outer function’s scope.


//TODO: create a fridgeTracker() for tracking fridge open counting
/* ------------------------------- Problem 02 ------------------------------- */

function fridgeTracker() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
};
const sabbir = fridgeTracker();
console.log(sabbir());
const ashikVai = fridgeTracker();
console.log(ashikVai());
const kaziVai = fridgeTracker();
console.log(kaziVai());


// Output: 1
// Output: 1
// Output: 1


//TODO: creating a taskTracker() functon that track can our task
/* ------------------------------- Problem 03 ------------------------------- */

function taskTracker() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
};
const teaIEat = taskTracker();
console.log(teaIEat());
console.log(teaIEat());
const teaMyFriendEat = taskTracker();
console.log(teaMyFriendEat());


// Output: 2
// Output: 1