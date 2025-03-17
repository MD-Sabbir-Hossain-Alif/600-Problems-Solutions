const numbers = [-5, 12, -8, 0, 3.5];
let positive = [];
let negative = [];

for (let x of numbers) {
    if (x > 0) positive.push(x);
    if (x < 0) negative.push(x);
}

console.log(positive);
console.log(negative);