
//TODO: Create a Set from an array with duplicate numbers to get unique values
/* ------------------------------- Problem 01 ------------------------------- */

const uniqueNum = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNum);


// Output: Set(5) {1, 2, 3, 4, 5}


//TODO: Add unique numbers to a Set and demonstrate that duplicates are ignored
/* ------------------------------- Problem 02 ------------------------------- */

const newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add(10);
newSet.add(30);
console.log(newSet);


// Output: Set(3) {10, 20, 30}


//TODO: Remove an element from the Set and log the updated Set
/* ------------------------------- Problem 03 ------------------------------- */

const set = newSet;
set.delete(10);
console.log(set);


// Output: Set(2) {20, 30}


//TODO: Convert an array with duplicates to a Set and log unique values by spreading
/* ------------------------------- Problem 04 ------------------------------- */

const arr = [1, 2, 3, 4, 2, 1, 5, 5];
const createSet = new Set(arr);
console.log([...createSet]);


// Output: [ 1, 2, 3, 4, 5 ]