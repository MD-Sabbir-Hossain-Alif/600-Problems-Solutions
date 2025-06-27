
//TODO: Convert a string to a number
/* ------------------------------- Problem 01 ------------------------------- */

const start = "786";
const number = +start; //plus operator
console.log(number);


// Output: 786


//TODO: Convert a number to a boolean
/* ------------------------------- Problem 02 ------------------------------- */

const willAttend = 0;
const typeChange = Boolean(willAttend);  //Boolean constructor
console.log(typeChange);


// Output: false


//TODO: Create and populate an object
/* ------------------------------- Problem 03 ------------------------------- */

const person = new Object(); //Object constructor
person.name = "Sabbir";
person.age = 30;
person.status = "Available"
person.skill = "Front-End"

console.log(person);


/* Output: 
{
    name: 'Sabbir',
    age: 30,
    status: 'Available',
    skill: 'Front-End'
}
*/


//TODO: Convert a number to a string
/* ------------------------------- Problem 04 ------------------------------- */

const total = 1970;
const str = total + ""; //string concatenation
console.log(str);


// Output: '1970'