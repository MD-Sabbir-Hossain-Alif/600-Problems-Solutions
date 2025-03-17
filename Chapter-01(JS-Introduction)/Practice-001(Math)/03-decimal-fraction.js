
// if we solve this problem using number in array it shows 
// worng output, so i solve this problem in another way 

const arr = ["3.4", "7/8", "2.75", "1/3"];

let x = [];
let y = [];

arr.forEach(str => {

    if (str.includes('/')) {
        const [numerator, denominator] = str.split('/').map(Number);
        const number = numerator / denominator;
        y.push(number);
    } else {
        x.push(Number(str));
    }
});

console.log("decimalNum:", x);
console.log("fractionNum:", y);

// in this case output shows 7/8 = 0.875
// all number is decimal, based on 10. here 0.875 also decimal
// but 7/8 is look its a fraction
// i don't know this method is right or worng !
