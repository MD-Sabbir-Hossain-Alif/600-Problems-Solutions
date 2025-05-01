
//TODO: create an object named book with properties & print all keys
/* ------------------------------- Problem 01 ------------------------------- */

const book = {
    name: "JavaScript",
    writer: "Jankker Mahabub",
    price: 650,
};
const book1 = Object.keys(book);
console.log(book1);


// Output: ["name", "writer", "price"]


//TODO: create an object named article with properties & find "auther" keys
/* ------------------------------- Problem 02 ------------------------------- */

const article = {
    title: "Learning Js",
    category: "Programing"
};

if (article.hasOwnProperty("author")) {
    console.log("True");
} else {
    console.log("False");
};

// Output: False


//TODO: create an object named laptop with properties & print all key name & key value
/* ------------------------------- Problem 03 ------------------------------- */

const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000,
};

for (const key in laptop) {
    const value = laptop[key];
    console.log(key, value);
};


/* Output: 
    brand Dell
    model Inspiron
    priec 45000
*/


//TODO: create an object named phone with properties & print all key & value
/* ------------------------------- Problem 04 ------------------------------- */

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
};

const keys = Object.keys(phone);
for (const key of keys) {
console.log(key, phone[key]);
};


/* Output: 
    brand Samsung
    model Galaxy S21
    price 85000
*/


//TODO: create an object named bike with properties & print key value
/* ------------------------------- Problem 05 ------------------------------- */

const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splender"
};

const value = Object.values(bike);
console.log(value);

// Output: ['Hero', 120000, 'Splender']


//TODO: create an object named books with properties & print all book name
/* ------------------------------- Problem 06 ------------------------------- */

const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
};

const key =  Object.keys(books);
console.log(key);

// Output: ['book1', 'book2', 'book3']


//TODO: create an object named numbers with properties & print all key values sum
/* ------------------------------- Problem 07 ------------------------------- */

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

let sum = 0;
for ( const value2 of Object.values(numbers)) {
    sum += value2;
};
console.log(sum);

// Output: 100


//TODO: create an object named player with properties, print key values
/* ------------------------------- Problem 08 ------------------------------- */

const player = {
    name: "CR7",
    team: "Purtugal",
    goals: 100
};
const value3 = Object.values(player);
console.log(value3);

// Output: ['CR7', 'Purtugal', 100]


//TODO: create an object named building with properties, print all values
/* ------------------------------- Problem 09 ------------------------------- */

const building = {
    floors: 10,
    address : {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
};
for (const key in building) {
    const value4 = building[key];
    console.log(value4);
}

// Output: [10, {"city": "Dhaka", "street": "Main Road"}, "Commercial"]