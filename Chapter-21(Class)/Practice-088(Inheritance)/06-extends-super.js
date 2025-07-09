
//TODO: create a pet parent class with 3 child class name dog, cat, parrot
/* ------------------------------- Problem 06 ------------------------------- */

class Pet {
    constructor(name, food, chaos) {
        this.name = name;
        this.food = food;
        this.chaos = chaos;
    }
}
class Dog extends Pet {
    constructor(name, food, chaos) {
        super(name, food, chaos);
    }
}
class Cat extends Pet {
    constructor(name, food, chaos) {
        super(name, food, chaos);
    }
}
class Parrot extends Pet {
    constructor(name, food, chaos){
        super(name, food, chaos);
    }
}
const dog = new Dog('Bullet', 'meat', 'No');
const cat = new Cat('Tom', 'Fish', 'No');
const parrot = new Parrot('Mithu', 'insects', 'Yes');
console.log(dog);
console.log(cat);
console.log(parrot);


/* Output: 
{ name: 'Bullet', food: 'meat', chaos: 'No' }
*/
/* Output: 
{ name: 'Tom', food: 'Fish', chaos: 'No' }
*
/* Output: 
{ name: 'Mithu', food: 'insects', chaos: 'Yes' }
*/