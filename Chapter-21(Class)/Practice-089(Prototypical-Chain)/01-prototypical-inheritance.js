
//TODO: how does inheritance work in JavaScript?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
// avaScript is primarily implemented through prototypal inheritance, which differs 
// from the class-based inheritance found in languages like Java. While ES6 introduced the class syntax,
// it is largely syntactic sugar over JavaScript's existing prototypal inheritance model.

//? Prototype chain:
/* 
1.   Every JavaScript object has a private internal property called [[Prototype]], 
    which links to another object called its prototype.
2.   When you try to access a property or method on an object, JavaScript first looks for it directly on that object.
3.   If not found, it then looks up the [[Prototype]] chain, searching on the object's prototype, 
    then that prototype's prototype, and so on, until it finds the property or reaches null (the end of the chain)
*/


//TODO: what is prototypical inheritance?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 
/*
    Prototypal inheritance is a core mechanism in JavaScript where objects inherit
    properties and methods directly from other objects. Unlike class-based inheritance found
    in languages like Java or C++, JavaScript does not use classes as blueprints for creating 
    objects in the same way. Instead, objects are linked together through a "prototype chain
*/

//? Prototypal inheritance:
/* 
1. Prototypes
2. Prototype Chain
3. Inheritance
4. Object-to-object inheritance
5. Dynamic
6. Efficiency
*/


//TODO: create a object and name it person and check there 
/* ------------------------------- Problem 03 ------------------------------- */

const person = {
    name: "Sabbir"
};
console.log(Object.getPrototypeOf(person));
console.log(person.toString());

/* Output: {
    __proto__: null,
λ: [
    constructor: λ Object {...},
    __defineGetter__: λ {...},
    __defineSetter__: λ {...},
    hasOwnProperty: λ {...},
    __lookupGetter__: λ {...},
    __lookupSetter__: λ {...},
    isPrototypeOf: λ {...},
    propertyIsEnumerable: λ {...},
    toString: λ {...},
    valueOf: λ {...},
    toLocaleString: λ {...}
    ]
}
*/
// Output: [object Object]


//TODO: create a object and use toString method to check student object
/* ------------------------------- Problem 04 ------------------------------- */

//? Answer: Yes\

const student = {
    name: "Sabbir"
}
console.log(student.toString());

//? Why:
// In JavaScript, every object is ultimately created from the built-in Object class.
// This Object class already has a method called toString().
// So, your student object inherits that method automatically.


// Output: [object Object]