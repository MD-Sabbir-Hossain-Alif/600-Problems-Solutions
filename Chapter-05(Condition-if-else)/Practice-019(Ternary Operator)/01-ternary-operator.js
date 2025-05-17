
//TODO: cashback condition with ternary operator
/* ------------------------------- Problem 01 ------------------------------- */
let personPurchase = 5000;
let cashback;

personPurchase >= 3000 ? cashback = 500 : cashback = 0;

console.log(cashback);

// output: 500


//TODO: age type condition
/* ------------------------------- Problem 02 ------------------------------- */
let age = 17;
let ageType = age >= 15 ? "Teenager" : "Child";

console.log(ageType);

// output: Teenager


//TODO: log in condition
/* ------------------------------- Problem 03 ------------------------------- */
let isLoggedIn = true;
let message = isLoggedIn === true ? "Welcome Back" : "Please Login";

console.log(message);

// output: Welcome Back


//TODO: condition for bike tank refueling
/* ------------------------------- Problem 04 ------------------------------- */
let bikeTankFull = false;
let display = bikeTankFull === true ? "Ready for a long drive" : "Fill the tank";

console.log(display);

// output: Fill the tank


//TODO: condition for party
/* ------------------------------- Problem 05 ------------------------------- */
let pass = true;
let print = pass === true ? "Party time" : "Next Semester e serious study korbo";

console.log(print);

// output: Let's party all night


//TODO: condition for logical not operator
/* ------------------------------- Problem 06 ------------------------------- */
let sunny = false;

if (!sunny) {
    console.log("Stay home")
}

// output: Stay home


//TODO: condition for logical not operator
/* ------------------------------- Problem 07 ------------------------------- */
let expensive = false;

if (!expensive) {
    console.log("will buy this item")
}

// output: will buy this item