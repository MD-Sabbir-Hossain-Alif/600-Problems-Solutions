
//TODO: discount condition
/* ------------------------------- Problem 01 ------------------------------- */
let price = 4500;

if (price > 6000) {
    const discount = price / 100 * 15;
    const pay = price - discount;
    console.log(pay);
} else if (price > 3000) {
    const discount = price / 100 * 5;
    const pay = price - discount;
    console.log(pay);
}
// output: 4275


//TODO: resturent food service condition
/* ------------------------------- Problem 02 ------------------------------- */
let age = 50;
let foodPrice = 500;

if (age > 60) {
    const discount = foodPrice / 100 * 50;
    const pay = foodPrice - discount;
    console.log(pay);
} else if (age < 12) {
    console.log("Free Food!");
} else {
    console.log(foodPrice);
}
// output: 500


//TODO: bank balance condition
/* ------------------------------- Problem 03 ------------------------------- */
let bankBalance = 500;

if (bankBalance < 1000) {
    console.log("Make a deposit");
} else if (bankBalance > 5000) {
    console.log("You are Rich, Marry me");
} else {
    console.log("Enjoy your life");
}
// output: Make a deposit


//TODO: condition for marks
/* ------------------------------- Problem 04 ------------------------------- */
let marks = 51;

if (marks >= 50 && marks < 80) {
    console.log("Pass");
} else if (marks < 50) {
    console.log("Fail");
} else {               //here i don't us limit so "marks=600" print A+
    console.log("A+");
}
// output: Pass


//TODO: condition for book size
/* ------------------------------- Problem 05 ------------------------------- */
let bookPages = 446;

if (bookPages > 500) {
    console.log("heart-attack size book");
} else if (bookPages < 100) {
    console.log("small book");
} else {
    console.log("Mid-size book");
}
// output: Mid-size book

//TODO: condition for temperature
/* ------------------------------- Problem 06 ------------------------------- */
let temperature = 0;

if (temperature > 20) {
    console.log("Hot Hot!");
} else if (temperature <= 20  && temperature > 0) {
    console.log("Cool Cool");
} else {
    console.log("Ice");
}
// output: Pass


//TODO: condition for games
/* ------------------------------- Problem 07 ------------------------------- */
let playerLevel = 40;

if (playerLevel < 10) {
    console.log("novice");
} else if (playerLevel >= 10 && playerLevel <= 50) {
    console.log("Expert");
} else{
    console.log("Pro Gamer");
}
// output: Expert