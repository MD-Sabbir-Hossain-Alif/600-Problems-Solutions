
// Separation of Integer,Even,Odd

const numbers = [23, 56, 19.69, 101, 42, 89, 11.37];
let integer = [], 
    even = [],
    odd = [];


for (let x of numbers) {
    
    if (Number .isInteger(x)) {
        integer.push(x);

        if (x % 2 === 0) {
            even.push(x);
        } 
        else {
            odd.push(x);
        }
    }
}

console.log(integer);
console.log(even);
console.log(odd);

