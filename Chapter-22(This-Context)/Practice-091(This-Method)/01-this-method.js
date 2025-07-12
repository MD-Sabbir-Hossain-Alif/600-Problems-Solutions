
//TODO: create a object name laptop and access mobile object using getBrand method
/* ------------------------------- Problem 01 ------------------------------- */

const laptop = {
    brand: "dell",
    getBrand () {
        console.log(this);
    }
}
laptop.getBrand();

const mobile = {
    brand: "Samsung"
}
mobile.getBrand = laptop.getBrand;
mobile.getBrand();


// Output: {brand: 'dell', getBrand: ƒ}
// Output: {brand: 'Samsung', getBrand: ƒ}


//TODO: how is this determined? In what context does it change?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: the value of "this" in JavaScript is context-dependent, 
//? and it changes based on how a function is called, not where it’s defined.

/*
where did he call                           value of -this-

Global Context                              Window or global this
use strict- with global context             undefined
object methods                              that object
Condtructor Function                        new born object
class                                       new born object
Event Listener                              the element on which this event occurred
Object method Arrow function                Window or global this
*/


//TODO: creat a object and add assignWork method 
/* ------------------------------- Problem 03 ------------------------------- */

const manager = {
    newTasks: [],
    // here this means manager object
    assignWork(tasks) {
        this.newTasks.push(tasks);
        console.log(tasks)
    }
}
manager.assignWork("sleep");
manager.assignWork("wake up to realty");


// Output: sleep
// Output: wake up to realty