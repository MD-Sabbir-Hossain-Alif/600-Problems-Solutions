
//TODO: explaine DRY principle with example
/* ------------------------------- Problem 07 ------------------------------- */

//? DRY principle
//* Don't Repeat Yourself

// a software development principle that aims to reduce code duplication and redundancy

let car1 = {
    brand: "Toyota",
    model: "Corolla",
};

let car2 = {
    brand: "Honda",
    model: "Civic",
};
let car3 = {
    brand: "BMW",
    model: "XM"
}
//* hear we see 3 object repet brand and moderl proparty name 

// but we can do this with using class for unlimeted object

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
const carName1 = new Car("Toyota", "Corolla");
const carName2 = new Car("Honda", "Civic");
const carName3 = new Car("BMW", "XM");
console.log(carName1);
console.log(carName2);
console.log(carName3)

// Output: { brand: 'Toyota', model: 'Corolla' }
// Output: { brand: 'Honda', model: 'Civic' }
// Output: { brand: 'BMW', model: 'XM' }