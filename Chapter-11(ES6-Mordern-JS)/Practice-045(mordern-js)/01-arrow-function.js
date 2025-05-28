
//TODO: using arrow function array first index
/* ------------------------------- Problem 01 ------------------------------- */

const fristIndex = num => num[0];
const frist = fristIndex ([40, 32, 34, 53, 63]);
console.log("First index value is:", frist);


// Output: First index value is: 40


//TODO: using arrow function return 3 number multiply
/* ------------------------------- Problem 02 ------------------------------- */

const multiply = (a, b, c) => a * b * c;
const result = multiply(5, 3, 8);
console.log(result);

// Output: 120


//TODO: using arrow function no para
/* ------------------------------- Problem 03 ------------------------------- */

const noPara = () => "unknown";
console.log(noPara());

// Output: unknown


//TODO: using arrow function oubject access
/* ------------------------------- Problem 04 ------------------------------- */

const student = {
    name: "Sabbir",
    moneyInPoket: 50
};
const devideMoney = (money) => money / 2;
const output = devideMoney(student.moneyInPoket);
console.log(output);

// Output: 15


//TODO: using arrow function printing arrays first and last number sum
/* ------------------------------- Problem 05 ------------------------------- */

const numbers = [30, 40, 50, 90, 20];
const fristNum = numbers[0];
const lastNum = numbers[numbers.length - 1];

const sum = (num1, num2) => num1 + num2;
const ans = sum(fristNum, lastNum);
console.log(ans);


// Output: 50

//TODO: using arrow function print two number sum
/* ------------------------------- Problem 06 ------------------------------- */

const twoNumSum = (num1 = 10, num2 = 5) => num1 + num2;
const answer = twoNumSum();
const answer2 = twoNumSum(50, 50);

console.log(answer);
console.log(answer2);


// Output: 15
// Output: 100