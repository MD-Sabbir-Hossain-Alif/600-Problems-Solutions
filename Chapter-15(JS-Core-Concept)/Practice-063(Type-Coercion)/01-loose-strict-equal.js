
//TODO: checking true and 1 are same or defferent using double equal
/* ------------------------------- Problem 01 ------------------------------- */

if (true == 1) {
    console.log("same");
} else {
    console.log("defferent");
}


// Output: same


//TODO: Compare two different empty object literals using `===` (strict equality)
/* ------------------------------- Problem 02 ------------------------------- */

const x = {};
const y = {};

if (x === y) {
    console.log("equal");
} else {
    console.log("not-equal");
}


// Output: not-equal


//TODO: Compare two references to the same array using `===` (strict equality)
/* ------------------------------- Problem 03 ------------------------------- */

const arr = [];
const newArr = arr;

console.log(arr === newArr)


// Output: true


//TODO: Add two values only if loosely equal (`==`), e.g., `1` and `true`
/* ------------------------------- Problem 04 ------------------------------- */

function add(a, b) {
    if (a == b) {
        return a + b;
    } else {
        return false;
    }

}
const cheakFun = add(1, true);
console.log(cheakFun)


// Output: 2


//TODO: Check if an empty string `""` is loosely equal to `false`
/* ------------------------------- Problem 05 ------------------------------- */

const string = "";

console.log(string == false);


// Output: true


//TODO: Compare `null` and `undefined` using `===` (strict equality)
/* ------------------------------- Problem 06 ------------------------------- */

console.log(null === undefined);


// Output: false


//TODO: Check loose equality between number `1` and string `'1'`
/* ------------------------------- Problem 07 ------------------------------- */

console.log(1 == '1')


// Output: true


//? Explanation of js type conversion

// * js porothome type check kore and than daka j 1 number sa 
// * porar 1 ka pay string hisaba kintu sa string k a number 
// * a convert kora check kora ajjo == dila 1 ar '1' true dekkay

//? In English

// * In JS, it first checks the type, and then js see that 1 is a number.
// * On the other hand, js understand '1' is a string, then js convert that string to a number
// * and check using ==, so, 1 and '1' return true.