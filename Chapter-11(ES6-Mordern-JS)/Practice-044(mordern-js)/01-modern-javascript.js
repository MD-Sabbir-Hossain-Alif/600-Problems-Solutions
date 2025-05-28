
//TODO: Using template string 
/* ------------------------------- Problem 01 ------------------------------- */

const num1 = 100;
const num2 = 20;

const subtract = `The difference between ${num1} and ${num2} is ${num1 - num2}`;

console.log(subtract);


// Output: The defference between 100 and 20 is 80


//TODO: Using template string 
/* ------------------------------- Problem 02 ------------------------------- */

const employee = {
    name: "Sabbir",
    age: 21,
    salary: 150000
};
const info = `Name: ${employee.name} Age: ${employee.age} Salary: ${employee.salary}`;

console.log(info);


// Output: Name: Sabbir Age: 21 Salary: 150000


//TODO: Using template string 
/* ------------------------------- Problem 03 ------------------------------- */

const fruits  = ["Banana", "Dates", "Mango"];

const favFruts = `My Three favorite fruits is ${fruits [0]}, ${fruits [1]}, ${fruits [2]}`
console.log(favFruts);


// Output: My Three favorite frots is Banana, Dates, Mango


//TODO: Using template string 
/* ------------------------------- Problem 04 ------------------------------- */

const a = 50 ;
const b = 10;

const division = `The division of ${a} and ${b} is ${a / b}`;
console.log(division);

// Output: The division of 50 and 10 is 5


//TODO: Using template string 
/* ------------------------------- Problem 05 ------------------------------- */

const person = {
    firstName: "Amit",
    lastName: "Kumar"
};
const fullName = `Full Name: ${person.firstName} ${person.lastName}`;
console.log(fullName);


// Output: Full Name: Amit Kumar

//TODO: Using template string 
/* ------------------------------- Problem 06 ------------------------------- */

const animals = ["Cat", "Dog", "Elephant"];
const favAnimals = `My favorite animals are ${animals[0]}, ${animals[1]}, ${animals[2]}`;
console.log(favAnimals);


// Output: My favorite animals are Cat, Dog, Elephant

//TODO: Using template string 
/* ------------------------------- Problem 07 ------------------------------- */

const student = {
    name: "Sabbir",
    age: 21,
    results: [80, 85, 95]
}
const avg = (student.results[0] + student.results[1] + student.results[2]) / 3;
const avg2 = avg.toFixed(2);
const nameAndAvg = `Student Name: ${student.name} and Average Marks is ${avg2}`;
console.log(nameAndAvg);


// Output: Student Name: Sabbir and Avarage Marks is 86.67