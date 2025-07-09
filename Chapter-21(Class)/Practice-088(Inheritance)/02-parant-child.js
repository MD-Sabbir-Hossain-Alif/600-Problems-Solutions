
//TODO: how is the relationship between parent and child classes created?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 
// In JavaScript, the relationship between parent and child classes,
// known as inheritance, is primarily established using the extends keyword in class declarations

//? Example:

// Parent class
class Parent {
    constructor(name) {
    this.name = name;
    }
}
// in child class we use super for parent property
class Child extends Parent {
    constructor(name, age) {
    super(name); 
    this.age = age;
    }
}
const childInstance = new Child("Sabbir", 23);
console.log(childInstance);

//Output: {name: 'Sabbir', age: '23'}