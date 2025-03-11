const numbers = [-5, 12, -8, 0, 3.5];
let positive = [];
let negative = [];

for (let num of numbers) {
    if (num > 0) positive.push(num);
    if (num < 0) negative.push(num);
}

console.log(positive);
console.log(negative);