
// Separation of Integer,Even,Odd

const numbers = [23, 56, 19.69, 101, 42, 89, 11.37];
let integer = [];
let even = [];
let odd = [];


for (let num of numbers) {
    
    if (Number .isInteger(num)) {
        integer.push(num);

        if (num % 2 === 0) {
            even.push(num);
        } 
        else {
            odd.push(num);
        }
    }
}

console.log(integer);
console.log(even);
console.log(odd);

