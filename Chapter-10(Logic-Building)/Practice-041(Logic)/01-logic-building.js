
//TODO: printing avarage from array using function
/* ------------------------------- Problem 01 ------------------------------- */

function evenAvarage(numArr) {
    const even = [];
    for (const number of numArr) {
        if (number % 2 === 0) {
            even.push(number);
        }
    }
    let sum = 0;
    for (const num of even) {
        sum += num;
    }
    const lengthOfArray = even.length;
    const avarage = sum / lengthOfArray;
    return avarage;
}
const array1 = [14, 16, 32, 35, 34, 28, 11, 15, 18, 26];
const evenAvg = evenAvarage(array1);
console.log(evenAvg);

// Output: 24


//TODO: printing 2x odd number array using function 
/* ------------------------------- Problem 02 ------------------------------- */

function oddNumArray(arr) {
    const odd = [];
    for (const number of arr) {
        if (number % 2 === 1) {
            const odd2x = number * 2;
            odd.push(odd2x);
        }
    }
    return odd;
}
const array2 = [1, 6, 3, 5, 4, 8, 11, 15, 18, 21];
const odd = oddNumArray(array2);
console.log("2x Odd", odd);

// Output: 2x Odd [2, 6, 10, 22, 30, 42]


//TODO: Chacking Odd number in array
/* ------------------------------- Problem 03 ------------------------------- */

function oddNumChack(arr) {
    for (const number of arr) {
        if (number % 2 === 1) {
            return "Odd Number found";
        }
    }
    return "No Odd Number found";
}
const array3 = [2, 1, 2, 7, 10];
const oddChack = oddNumChack(array3);
console.log(oddChack);

// Output: Odd Number found 


//TODO: odd numbers avarage using function
/* ------------------------------- Problem 04 ------------------------------- */

function oddNumAvarage(arr) {
    const odd = [];
    for (const number of arr) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }
    let sum = 0;
    for (const number of odd) {
        sum += number;
    }
    const oddAvg = sum / odd.length;
    const oddAvg2Block = oddAvg.toFixed(2);
    return oddAvg2Block;
}
const array4 = [3, 6, 9, 5, 4, 8, 11, 15, 18, 21];
const oddAvg = oddNumAvarage(array4);
console.log(oddAvg);

// Output: 10.67


//TODO: 
/* ------------------------------- Problem 05 ------------------------------- */

function OddNumber(arr) {
    const odd = [];
    for (const number of arr) {
        if (number % 2 === 1) {
            const num = number - 1;
            odd.push(num);
        }
    }
    return odd;
}
const array5 = [9, 10, 11, 14, 15, 28, 31, 35, 48, 52];
const oddNumber = OddNumber(array5);
console.log(oddNumber)


// Output: [8, 10, 14, 30, 34]