
//TODO: using function name condition print true or false
/* ------------------------------- Problem 01 ------------------------------- */

function condition(num) {
    if (num > 10) {
        return true;
    }
    return false;
}
const output = condition(50);
console.log(output);

// Output: true


//TODO: using function name condition2 print true or false
/* ------------------------------- Problem 02 ------------------------------- */

function condition2(if13) {
    if (if13 % 13 === 0) {
        return true;
    }
    return false;
}
const output2 = condition2(26);
console.log(output2);

// Output: true


//TODO: printing totalBill using function
/* ------------------------------- Problem 03 ------------------------------- */

function totalBill(rice, curry, drinks) {
    return rice + curry + drinks;
}
const bill = totalBill(500, 40, 250);
console.log(bill);

// Output: 790


//TODO: checking age using function
/* ------------------------------- Problem 04 ------------------------------- */

function ageValidation(age) {
    if (age >= 18) {
        return "Eligible for Voting";
    }
    return "Not Eligible"
}
const ageCheck = ageValidation(25);
console.log(ageCheck);

// Output: Eligible for Voting


//TODO: returning string length using function
/* ------------------------------- Problem 05 ------------------------------- */

function stringLengths(str) {
    return str.length
}

const len = stringLengths("Sabbir");
console.log("String Length:", len);

// Output: String Length: 6


//TODO: returning 3 numbers average using function
/* ------------------------------- Problem 06 ------------------------------- */

function average(n1, n2, n3) {
    const sum = n1 + n2 + n3;
    return sum / 3;
}
const average2 = average(100, 300, 500);
console.log(average2);


// Output: 300

//TODO: returning negative number to positive with multiply -1
/* ------------------------------- Problem 07 ------------------------------- */

function numberCheck(num) {
    if (num < 0) {
        return num * -1;
    }
    return "Positive Number"
}
const result = numberCheck(-1100);
console.log(result);

// Output: 1100