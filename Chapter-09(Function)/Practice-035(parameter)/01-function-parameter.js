
//TODO: declare a function named addition with parameter and print sum
/* ------------------------------- Problem 01 ------------------------------- */

function addition(age1, age2) {
    const sum = age1 + age2;
    console.log(sum);
}
const fatherage = 55;
const sonage = 23;
addition(fatherage, sonage);

// Output: 78


// //TODO: declare a function named calculator with parameter and print sum, subtract & multiply
// /* ------------------------------- Problem 02 ------------------------------- */

function calculator (a, b, x) {
    if (x === 'add') {
        return a + b;
    }else if (x === 'sub') {
        return a - b;
    }else if (x === 'multi') {
        return a * b;
    }else {
        return "Invalid";
    }
}

const sum = calculator(10, 40, 'add');
console.log(sum);
const subtract = calculator(60, 40, 'sub');
console.log(subtract);
const multiply = calculator(20, 15, 'multi')
console.log(multiply)

/* Output: 
50
20
300
*/


//TODO: declare a function named subjectSum with parameter and print sum
/* ------------------------------- Problem 03 ------------------------------- */

function subjectSum(sub1, sub2, sub3) {
    return sub1 + sub2 + sub3;
}
const summation = subjectSum(70, 89, 90);
console.log("Total Marks:", summation);


// Output: Total Marks: 249


//TODO: declare a function named findAge with parameter and print age
/* ------------------------------- Problem 04 ------------------------------- */

function findAge(bornYear, currentYear) {
    return currentYear - bornYear;
}
const age = findAge(2005, 2025);
console.log("My Age:", age);

// Output: My Age: 20


//TODO: declare a function named gourdNumber with parameter and print gourd
/* ------------------------------- Problem 05 ------------------------------- */

function calculateGourts(budget) {
    const perGourdPrice = 35;
    return budget / perGourdPrice;
}
const result = calculateGourts(150);
console.log("Gourds:", parseInt(result));

// Output: Gourd: 4


//TODO: declare a function named calculateAverage with parameter and print average
/* ------------------------------- Problem 06 ------------------------------- */

function calculateAverage(num1, num2, num3, num4) {
    const sum = num1 + num2 + num3 + num4;
    const average = sum / 4;
    console.log("Average:", average);
}
calculateAverage(100, 400, 350, 180);

// Output: Average: 257.5


//TODO: declare a function named finalPrice with parameter and print selling price
/* ------------------------------- Problem 07 ------------------------------- */

function finalPrice(buyingPrice) {
    const profit = 250;
    const total = buyingPrice + profit;
    console.log("Selling Price:", total);
}
finalPrice(500);
finalPrice(900);
finalPrice(850);

/* Output: 
Selling Price: 750
Selling Price: 1150
Selling Price: 1100
*/


//TODO: declare a function named century with parameter and print century year
/* ------------------------------- Problem 08 ------------------------------- */

function century(myBirthYear) {
    const exactYear = myBirthYear + 100;
    console.log(exactYear);
}
century(2005);
century(2025);

/* Output: 
2105
2125
*/


//TODO: declare a function named mobileUseTime with parameter and print 30 days use time
/* ------------------------------- Problem 08 ------------------------------- */

function mobileUseTime(perDayUse) {
    const totalUse = perDayUse * 30;
    console.log("Monthly Uses", totalUse, "Hours");
}
mobileUseTime(1);

// Output: Monthly Uses 30 Hours