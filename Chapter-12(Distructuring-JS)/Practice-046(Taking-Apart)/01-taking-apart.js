
//TODO: taking apart from objcet
/* ------------------------------- Problem 01 ------------------------------- */

const product = {
    name: "Laptop",
    price: 32500,
    brand: "HP"
};
const x = product.brand;    // we can asign a new variable but 
const {brand} = product;    // destructuring obj value using this syntax;

console.log(brand);
console.log(x);


// Output: HP


//TODO: taking apart from objcet
/* ------------------------------- Problem 02 ------------------------------- */

const item = {
    name: "Mobile",
    price: 39999,
    phone: "Samsung"
};
const {name, price} = item;
console.log(name, price);


// Output: Mobile , 39999


//TODO: taking apart from array
/* ------------------------------- Problem 03 ------------------------------- */

const color = ["rad", "blue", "green", "yellow"];

const [first, second] = color;
console.log(first);
console.log(second);

// Output: red
// Output: blue


//TODO: taking apart from array
/* ------------------------------- Problem 04 ------------------------------- */

const nums = [30, 40, 50];
const [ , secondNum] = nums;
console.log(secondNum);

// Output: 40


//TODO: taking apart from array
/* ------------------------------- Problem 05 ------------------------------- */

const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two);
console.log(eight);


// Output: 2
// Output: 8


//TODO: taking apart function return value
/* ------------------------------- Problem 06 ------------------------------- */

function multiply(a, b) {
    return [a * 3, b * 3];
};
const [prothom, ditiyo] = multiply(20, 40);
console.log(prothom);
console.log(ditiyo);

// Output: 60, 120


//TODO: taking apart from objcet
/* ------------------------------- Problem 07 ------------------------------- */

const person = {
    personName: "Rahim",
    city: "Dhaka"
};
const {personName, city, phone = "N/A"} = person
console.log(personName, city, phone)

// Output: Rahim, Dhaka, N/A


//TODO: taking apart from objcet
/* ------------------------------- Problem 08 ------------------------------- */

const teacher = {
    tName: "Maria",
    profession: "Teacher"
};
const {tName, profession: job} = teacher;
console.log(tName, job);


// Output: Maria, Teacher