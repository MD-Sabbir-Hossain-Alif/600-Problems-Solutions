
//TODO: Check if any number is greater than 100
/* ------------------------------- Problem 01 ------------------------------- */

const numbers = [59, 67, 78, 83, 93, 103];
const checkingNum = numbers.some(num => num > 100);
console.log(checkingNum);

// Output: true


//TODO: Check if all numbers are divisible by 5
/* ------------------------------- Problem 02 ------------------------------- */

const number = [21, 42, 57, 63, 72];
const checkingDiv = number.every(num => num % 5 === 0);
console.log(checkingDiv)


// Output: false


//TODO: Check if "hello" exists in the array
/* ------------------------------- Problem 03 ------------------------------- */

const words = ["hi", "okay", "go", "hello"];
const checkingWord = words.some(char => char.startsWith("hello"));
console.log(checkingWord)


// Output: true


//TODO: Check if all ages are 18 or older
/* ------------------------------- Problem 04 ------------------------------- */

const ages = [23, 42, 54, 12, 56, 29];
const checkingAge = ages.every(age => age >= 18);
console.log(checkingAge);


// Output: false