
//TODO: Sum all numbers in the array using reduce
/* ------------------------------- Problem 01 ------------------------------- */

const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

// Output: 75


//TODO: Calculate the total price of all products in the array
/* ------------------------------- Problem 02 ------------------------------- */

const products = [
    {name: 'shampoo', price: 100},
    {name: 'soap', price: 50},
    {name: 'toothpaste', price: 75}
];
const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);


// Output: 255


//TODO: Calculate the total price of all products in the array
/* ------------------------------- Problem 03 ------------------------------- */

const productList = [
    {name: "Pen", price: 5},
    {name: "Book", price: 50},
    {name: "Bag", price: 100},
];
const productPrice = productList.reduce((acc, curr) => acc + curr.price, 0);
console.log(productPrice);


// Output: 155


//TODO: Find the product of all numbers in the array
/* ------------------------------- Problem 04 ------------------------------- */

const nums = [1, 2, 3, 4, 5];
const product = nums.reduce((acc, curr) => acc * curr, 1); // Start with 1 for multiplication
console.log(product);


// Output: 120


//TODO: Find the maximum value in an array using reduce
/* ------------------------------- Problem 05 ------------------------------- */

const numbers2 = [10, 20, 30, 40, 50];
const maxValue = numbers2.reduce((acc, curr) => acc > curr ? acc : curr)
console.log(maxValue)


// Output: 50


//TODO: Sum all numbers, starting with an initial value of 50
/* ------------------------------- Problem 06 ------------------------------- */

const numbers3 = [100, 200, 300, 400];
const totalValue = numbers3.reduce((acc, curr) => acc + curr, 50); // 50 is the initial value
console.log(totalValue)


// Output: 1050