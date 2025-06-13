
//TODO: Sorts an array of numbers in ascending order
/* ------------------------------- Problem 01 ------------------------------- */

const numbers = [50, 12, 25, 8, 15];
numbers.sort((a, b) => a - b);
console.log(numbers);


// Output: [8, 12, 15, 25, 50]


//TODO: Sorts an array of numbers in descending order
/* ------------------------------- Problem 02 ------------------------------- */

const numbers2 = [13, 2, 45, 9, 6];
numbers2.sort((a, b) => b - a);
console.log(numbers2);


// Output: [45, 13, 9, 6, 2]


//TODO: Sorts an array of objects by age (ascending order)
/* ------------------------------- Problem 03 ------------------------------- */

const friends = [
    {name: "Ali", age: 29},
    {name: "Sara", age: 22},
    {name: "Tarik", age: 35}
]
friends.sort((a, b) => a.age - b.age);
console.log(friends);


// Output: [ { name: 'Sara', age: 22 }, { name: 'Ali', age: 29 }, { name: 'Tarik', age: 35}]


//TODO: Sorts an array of strings alphabetically
/* ------------------------------- Problem 04 ------------------------------- */

const names = ["nabil", "zubayer", "surwar", "delwer"]
names.sort();
console.log(names);


// Output: [ 'delwer', 'nabil', 'surwar', 'zubayer' ]