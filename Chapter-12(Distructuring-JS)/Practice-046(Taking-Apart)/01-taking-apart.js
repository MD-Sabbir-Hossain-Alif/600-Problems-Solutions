
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


//TODO: 
/* ------------------------------- Problem 04 ------------------------------- */



// Output: 


//TODO: 
/* ------------------------------- Problem 05 ------------------------------- */



// Output: 

//TODO: 
/* ------------------------------- Problem 06 ------------------------------- */



// Output: 

//TODO: 
/* ------------------------------- Problem 07 ------------------------------- */



// Output: 

//TODO: 
/* ------------------------------- Problem 08 ------------------------------- */



// Output: 