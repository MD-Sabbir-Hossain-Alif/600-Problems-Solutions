
//TODO: post-increment and pre-increment
/* ------------------------------- Problem 01 ------------------------------- */

let a = 59;
a++;
++a;
console.log(a);


// Output: 61


//TODO: shortcut division operator
/* ------------------------------- Problem 02 ------------------------------- */

let oranges = 100;
oranges /= 15;
console.log(oranges.toFixed(2));


// Output: 6.67


//TODO: shortcut logical AND assignment (&&=)
/* ------------------------------- Problem 03 ------------------------------- */

let mango = 20;
mango &&= 10;
console.log(mango); //if variable is truthy output will be change


// Output: 10


//TODO: multiplication assignment (*=)
/* ------------------------------- Problem 04 ------------------------------- */

let bananas = 50;
bananas *= 4;
console.log(bananas);


// Output: 200


//TODO: logical OR assignment (||=)
/* ------------------------------- Problem 05 ------------------------------- */

let grapes = 19;
grapes ||= 100;
console.log(grapes); // if value is falsy 'or operator' change value otherwise not


// Output: 19


//TODO: subtraction assignment (-=)
/* ------------------------------- Problem 06 ------------------------------- */

let apples = 100;
apples -= 10;
console.log(apples);


// Output: 90


//TODO: default value assignment using ||= with undefined
/* ------------------------------- Problem 07 ------------------------------- */

let price = undefined;
price ||= 90;
console.log(price); // price is falsy (undefined) so output will be 90


// Output: 90


//TODO: logical AND assignment (&&=) with falsy value
/* ------------------------------- Problem 08 ------------------------------- */

let tomato = 0;
tomato &&= 5;
console.log(tomato); // 0 can be a value so output is 0


// Output: 0


//TODO: modulus assignment (%=)
/* ------------------------------- Problem 09 ------------------------------- */

let apple = 15;
apple %= 6;
console.log(apple);


// Output: 3