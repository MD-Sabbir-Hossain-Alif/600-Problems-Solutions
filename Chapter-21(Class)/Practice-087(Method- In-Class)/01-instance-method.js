
//TODO: create a class name hotal and use getName method to print name from object
/* ------------------------------- Problem 01 ------------------------------- */

class Hotal {
    constructor(name, rooms, oneNightPrice) {
        this.name = name;
        this.rooms = rooms;
        this.oneNightPrice = oneNightPrice;
    }
    getName() {
        return this.name;
    }
};
const hotal = new Hotal('North View', 20, 2000);
console.log(hotal.getName());


// Output: North View


//TODO: create a class name employee and use getSalary method to print salary
/* ------------------------------- Problem 02 ------------------------------- */

class Employee {
    constructor(name, post, salary) {
        this.name = name;
        this.post = post;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
};
const employee = new Employee('Sabbir', 'Developer', 'unemployed😓');
console.log(employee.getSalary());


// Output: unemployed😓


//TODO: create a class named library and use addBooks, hasBooks method for object manipulation
/* ------------------------------- Problem 03 ------------------------------- */

class Library {
    constructor(books = []) {
        this.books = books;
    }
    addBooks(book) {
        this.books.push(book);
        return this.books;
    }
    hasBook(book) {
        if (this.books.includes(book)) {
            return true;
        } else {
            return false;
        }
    }
};
const library = new Library(['MP3']);
console.log(library.addBooks('English For Competitive Exams'));
console.log(library.hasBook('MP3'));


// Output: [ 'MP3', 'English For Competitive Exams' ]
// Output: true


//TODO: create a class named ShoppingCart and use addToCart, getTotalPrice method for get total price
/* ------------------------------- Problem 04 ------------------------------- */

class ShoppingCart {
    constructor(products = [], totalPrice = 0) {
        this.products =products;
        this.totalPrice = totalPrice;
    }
    addToCart(productName, productPrice) {
        this.products.push(productName);
        this.totalPrice += productPrice;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
}
const shoppingCart = new ShoppingCart(['Charger'], 500);
shoppingCart.addToCart('Pen-Drive', 950);
console.log(shoppingCart.getTotalPrice());


// Output: 1450