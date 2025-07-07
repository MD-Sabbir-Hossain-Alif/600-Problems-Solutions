
//TODO: difference between class and object
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
//* Class:

//* A class is a template, not an object. A class is a structure, common shape,
//* form, or mold that can be used to create an object.
//Example:
class Player {
    constructor() {
    }
};
const mushi = new Player();

//* Object:
//* an object is a fundamental data type used to store collections of related data and functionality.
//* It is a standalone entity with properties and, optionally, methods
//Example:
const obj = {
    name: 'Tom',
    color: 'Blue',
    class: 'Cat'
};


//TODO: what is class instance?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 
//* a class instance is an individual object created from a class blueprint.
//* A class defines the structure and behavior (properties and methods) 
//* that its instances will possess. When you create an instance, 
//* you are essentially creating a concrete realization of that class,
//*  with its own unique state (values for its properties). 


//TODO: create a class name Vehicle and in constructor set 3 property
/* ------------------------------- Problem 03 ------------------------------- */

class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
};
const bmwX5 = new Vehicle('BMW', 'X5', '19.19 million');
const tesla = new Vehicle('Tesla', 'Model 3', '40000');
console.log(bmwX5);
console.log(tesla);


// Output: { brand: 'BMW', model: 'X5', price: '19.19 million' }
// Output: { brand: 'Tesla', model: 'Model 3', price: '40000' }


//TODO: create a class name worker and in constructo set 3 porperty
/* ------------------------------- Problem 04 ------------------------------- */

class Worker{
    constructor(id, name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
};
const worker = new Worker(101, 'Tom Cruise', 40);
console.log(worker);


// Output: { id: 101, name: 'Tom Cruise', hoursWorked: 40 }


//TODO: create libaray class and check livaray instance
/* ------------------------------- Problem 05 ------------------------------- */

class Libaray {
    constructor(name, books, location) {
        this.name = name;
        this.books = books;
        this.location = location;
    }
};
const libaray = new Libaray('Central Libaray', 10000, 'Dhaka');
console.log(libaray instanceof Libaray);


// Output: true


//TODO: create classroom class and set default students value []
/* ------------------------------- Problem 06 ------------------------------- */
    
class Classroom {
    constructor(section, teacher) {
        this.students = [];
        this.section = section;
        this.teacher = teacher;
    }
};
const instance1 = new Classroom('A', 'Mr. Plumber');
console.log(instance1);


// Output: { students: [], section: 'A', teacher: 'Mr. Plumber' }


//TODO: create product class and set 3 constructor property
/* ------------------------------- Problem 07 ------------------------------- */

class Product {
    constructor(name, category, stock) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
};
const product1 = new Product('Mobile', 'Electronics', 50);
console.log(product1);


// Output: { name: 'Mobile', category: 'Electronics', stock: 50 }


//TODO: creat a class and set stock default value is 0
/* ------------------------------- Problem 08 ------------------------------- */

class Product2 {
    constructor(name, category, stock = 0) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
};
const product3 = new Product2('Mobile', 'Electronics');
console.log(product3);


// Output: { name: 'Mobile', category: 'Electronics', stock: 0 }