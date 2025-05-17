
//TODO: using function calculate Tex
/* ------------------------------- Problem 01 ------------------------------- */

function texCalculater(incomeAmount) {
    if (incomeAmount <= 50000) {
        return 10;
    } else if (incomeAmount <= 100000) {
        return 20;
    } else if (incomeAmount <= 200000) {
        return 30;
    } else if(incomeAmount > 200000) {
        return 40;
    }
};
const texRate = texCalculater(300000);
console.log(texRate);

// Output: 40


//TODO: using function package dalivary charge
/* ------------------------------- Problem 02 ------------------------------- */

function packageCharge(weight) {
    if (weight < 10) {
        return 100;
    } else if(weight < 20) {
        return 300;
    }else if(weight < 50) {
        return 1000;
    }else if(weight >= 50) {
        const a = weight - 50;
        const b = a * 100;
        return 1000 + b;
    }
};
const deliveryCharge = packageCharge(50);
console.log(deliveryCharge);

// Output: 1000


/* ---- Problem 02 ---- senario 2 ---- */

function packageCharge2(weight) {
    if (weight <= 10) {
        return 100;
    } else if(weight <= 20) {
        return 300;
    }else if(weight <= 50) {
        return 1000;
    }else if(weight > 50) {
        return weight * 100;
    }
};
const deliveryCharge2 = packageCharge2(60);
console.log(deliveryCharge2);

// Output: 1000


//TODO: using function result grade calculate
/* ------------------------------- Problem 03 ------------------------------- */

function gradeCalculate(marks) {
    if (marks >= 0 && marks <= 100) {
        if (marks >= 80) {
            return "A";
        }else if (marks >= 70) {
            return "B";
        }else if (marks >= 60) {
            return "C";
        }else if (marks >= 50) {
            return "D";
        }
        return "F";
    }
    return "! Please type within 0 to 100";
};
const inputMarks = gradeCalculate(80);
console.log(inputMarks);


// Output: A 