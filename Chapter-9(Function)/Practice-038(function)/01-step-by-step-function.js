
//TODO: extract & sum Odd numbers from array using function
/* ------------------------------- Problem 01 ------------------------------- */

function oddNumbersSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            sum += number;
        }
    }
    return sum;
}
const nums = [5, 15, 8, 7];
const oddsTotal = oddNumbersSum(nums);
console.log(oddsTotal);

// Output: 27


//TODO: returning small number from array using using function
/* ------------------------------- Problem 02 ------------------------------- */

function smallElement(arr) {
    if (arr[0] < arr[1]) {
        return arr[0];
    }
    return arr[1];
}
const array = [20, 45, 78]
const smallNumber = smallElement(array);
console.log(smallNumber);

// Output: 20


//TODO: printing age using function
/* ------------------------------- Problem 03 ------------------------------- */

function ageDefine(age){
    if (age > 45) return 45;
    if(age < 18) return 18;
    return age;
}
const output = ageDefine(100);
console.log(output);

// Output: 45 


//TODO: printing arrays numbers that divisible with 4 using function
/* ------------------------------- Problem 04 ------------------------------- */

function divisibleWith4(num) {
    const output = [];
    for (const number of num) {
        if(number % 4 === 0) {
            output.push(number);
        };
    }
    return output;
}
const array2 = [2, 4, 5, 7, 8, 32, 45];
const result = divisibleWith4(array2);
console.log(result);

// Output: [4, 8, 32]


//TODO: using function returning multiplication and divide useing condition 
/* ------------------------------- Problem 05 ------------------------------- */

function numberDefine(number) {
    if (number >= 20) return number / 20;
    return number * 2;
}
const numberCheck = numberDefine(100);
console.log(numberCheck);


// Output: 5


//TODO: using function retuning negative numbers sum
/* ------------------------------- Problem 06 ------------------------------- */

function negativeNumberSum(number) {
    let sum = 0;
    for (let num of number) {
        if (num < 0) {
            sum += num;
        }
    }
    return sum;
}
const newArray = [-2, -4, -45, -39, 4, 66, 43, 30];
const negativeSum = negativeNumberSum(newArray);
console.log(negativeSum);

// Output: -90

//TODO: printing arrays numbers multiplication that divisible with 3 using function
/* ------------------------------- Problem 07 ------------------------------- */

function divisibleWith3(arr) {
    let product = 1;
    for (const number of arr) {
        if (number % 3 == 0) {
            product *= number;
        }
    }
    return product;

}
const newArray2 = [10, 18, 15, 6, 12];
const resultP7 = divisibleWith3(newArray2);
console.log(resultP7);

// Output: 19440