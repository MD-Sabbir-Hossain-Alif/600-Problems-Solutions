
//TODO: Calculate the total tax from a given income and tax rate
/* ------------------------------- Problem 01 ------------------------------- */

const taxRate = 15;  // Global variable
const income = 1500000;  // Global variable

function totalTax(rate, income) {
    const tax = income * (rate / 100);
    return tax;
}
console.log(totalTax(taxRate, income));


// Output: 225000


//TODO: Demonstrate function scope with `let` inside a function
/* ------------------------------- Problem 02 ------------------------------- */

function secret() {
    let insideSecret = "internal secret hiding place"; // Block Scope variable
}
console.log(insideSecret); 


// Output: isdideSecret is not defined


//TODO: Demonstrate block scope with `let` inside an if-statement
/* ------------------------------- Problem 03 ------------------------------- */

if (true) {
    let temperature = "38C";  // Block Scope variable
}
console.log(temperature);


// Output: temperature is not defined


//TODO:  Demonstrate lexical scoping and closures in nested functions
/* ------------------------------- Problem 04 ------------------------------- */

function schooldetails() {
    const schoolName = "Carmichael College Governemt Primary School"; // Lexical Scope variable
    function displaySchoolName() {
        return schoolName;
    }
    return displaySchoolName();
}

console.log(schooldetails());


// Output: Carmichael College Governemt Primary School