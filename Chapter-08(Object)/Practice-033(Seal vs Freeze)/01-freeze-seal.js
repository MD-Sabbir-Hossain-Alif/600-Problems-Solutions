
//TODO: create an object named headphone with properties & use freeze method
/* ------------------------------- Problem 01 ------------------------------- */

const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
};
Object.freeze(headphone);
headphone.style = "Heavy";  // Attempt to add property in the object
console.log(headphone);

// Output: {brand: 'Sony', price: 3000, color: 'red'}


//TODO: create an object named player with properties & use freeze method
/* ------------------------------- Problem 02 ------------------------------- */

const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
};
Object.freeze(player);
player.rating = "99";   // Attempt to add property in the object
console.log(player);

// Output: {name: 'Messi', goals: 800, club: 'Inter Miami'}


//TODO: create an object named books with properties & use seal method
/* ------------------------------- Problem 03 ------------------------------- */

const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
};
Object.seal(book);
book.rating = "9";  // Attempt to add property in the object
console.log(book);

// Output: {title: 'Harry Potter', author: 'JK Rowling', pages: 500}


//TODO: create an object named gadget with properties & use delete method
/* ------------------------------- Problem 04 ------------------------------- */

const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
};

delete gadget.price;    // Attempt to delete price property in the object
console.log(gadget);

// Output: {name: 'iPhone', color: 'Black'}


//TODO: create an object named animal with properties & use freeze method
/* ------------------------------- Problem 05 ------------------------------- */

const animal= {
    name: "Tiger",
    locations: "Sundarban"
};
Object.freeze(animal);
animal.locations = "Barisal";   // Attempt to add property in the object
console.log(animal);

// Output: {name: 'Tiger', locations: 'Sundarban'}


//TODO: create an object named food with properties & use seal method
/* ------------------------------- Problem 06 ------------------------------- */

const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
};
Object.seal(food);
food.weight = "1 pound";    // Attempt to add property in the object
food.price = 450;           // Attempt to change property in the object
console.log(food);

// Output: {name: 'Pizza', price: 450, size: 'Large'}