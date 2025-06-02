
//TODO: copying array using spread operator.
/* ------------------------------- Problem 01 ------------------------------- */

const technologies = ["condition", "array", "loop"];
const newArr = ["variable", ...technologies];

console.log(newArr);

// Output: [ 'variable', 'condition', 'array', 'loop' ]


//TODO: adding value in array using spread operator
/* ------------------------------- Problem 02 ------------------------------- */

const fruits = ["Apple", "Banana", "Mango"];
const addFruits = [...fruits, "Papaya", "Orange"];

console.log(addFruits);

// Output: [ 'Apple', 'Banana', 'Mango', 'Papaya', 'Orange' ]


//TODO: add array using spread operator
/* ------------------------------- Problem 03 ------------------------------- */

const frontEnd = ["JavaScript"];
const backEnd = ['Node.js'];
const database = ["MangoDB"];

const MERN = [...frontEnd, ...backEnd, ...database];
console.log(MERN);

// Output: [ 'JavaScript', 'Node.js', 'MangoDB' ]


//TODO: adding proparty and value in object using spread operator
/* ------------------------------- Problem 04 ------------------------------- */

const website = {
    name: "MySite",
    type: "e-commerce",
    status: "active"
};
const newWebsite = {...website, theme: "dark"};
console.log(newWebsite);

// Output: {name: 'MySite', type: 'e-commerce', status: 'active', theme: 'dark'}


//TODO: obj property country remove using spread operator
/* ------------------------------- Problem 05 ------------------------------- */

const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
};
const {country, ...young2} = young;

console.log(young2);

// Output: { name: 'Arif', age: 30 }

//TODO: 
/* ------------------------------- Problem 06 ------------------------------- */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
const updateCar = {...car, year : "2032"};

console.log(updateCar);


// Output: { make: 'Toyota', model: 'Corolla', year: '2032' }