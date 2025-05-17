
//TODO: using function name evenOrOdd and print arrays number even or odd
/* ------------------------------- Problem 01 ------------------------------- */

function evenOrOdd(nums) {
    for (const num of nums) {
        if (num % 2 === 0) {
            console.log("Even Number: ", num);
        } else {
            console.log("Odd Number: ", num);

        }
    }
}
const number = [20, 30, 40, 75, 95, 99];
evenOrOdd(number);


/* Output:
Even Number:  20
Even Number:  30
Even Number:  40
Odd Number:  75
Odd Number:  95
Odd Number:  99
*/

//TODO: using function name theName and print names first letter
/* ------------------------------- Problem 02 ------------------------------- */

function theName(names) {
    let firstLetter = [];
    for (const name of names) {
        firstLetter.push(name[0]);
    }
    return firstLetter;
}
const names = ['Sabbir', 'Emon', 'Utso'];
console.log(theName(names));


// Output: ['S', 'E', 'U']


//TODO: using function checking number and multiply and divide
/* ------------------------------- Problem 03 ------------------------------- */

function numberCheck(numb) {
    if (numb > 10) {
        return numb / 10;

    }
    return numb * 10;

}

console.log(numberCheck(100));

// Output: 10 


//TODO: sum array 1st & 2nd number using function
/* ------------------------------- Problem 04 ------------------------------- */

function arrayElements(arr) {
    return arr[0] + arr[1];
}
const arr = [500, 600];
console.log(arrayElements(arr));

// Output: 1100


//TODO: returning 2* and 3* using function
/* ------------------------------- Problem 05 ------------------------------- */

function numberGet(n) {
    if (n >= 0) {
        return n * 2;
    }
    return n * 3;
}

const oP = numberGet(3050);
console.log(oP);

// Output: 6100


//TODO: returning true/fasle from name2 array using function
/* ------------------------------- Problem 06 ------------------------------- */

function nameLength(name2) {
    // if (name2[0].length > name2[1].length) {
    //     return true;
    // }
    // return false;
    
    return name2[0].length > name2[1].length;
}

const name2 = ['Sabbir', 'Emon'];
console.log(nameLength(name2));


// Output: true

//TODO: returning multiply calculation using function
/* ------------------------------- Problem 07 ------------------------------- */

function multiplication(num1, num2) {
    const multiply = num1 * num2;
    if (multiply > 100) {
        return multiply /2;
    }
    return multiply;
}
const Output = multiplication(100, 10);
console.log(Output);

// Output: 500