
//TODO: friend Marriage Ceremony Invitation condition
/* ------------------------------- Problem 01 ------------------------------- */
let friendInvitation = true;
let moneyIHave = 1500;

if (friendInvitation) {
    console.log("I will attend Marriage Ceremony");


    if (moneyIHave > 1000) {
        console.log("With Gift");
    } else {
        console.log("Free Hand (No Gift)");
    }
} else {
    console.log("I will removed him from friend list");
}
// output: I will attend Marriage Ceremony
// output: With Gift


//TODO: guest felicitation condition
/* ------------------------------- Problem 02 ------------------------------- */
let guestTea = true;
let guestBiscuit = false;

    // if they want to have tea.
if (guestTea) {

    // if they want biscuits.
    if (guestBiscuit) {
        console.log("Tea with Biscuit");
    } else {
        console.log("Tea is ready");
    }
} else {
    console.log("Sit and watch star jalsha");
}
// output: Tea is ready


//TODO: app subscription condition
/* ------------------------------- Problem 03 ------------------------------- */
let userActive = true;
let premiumUser = false;

if (userActive) {


    if (premiumUser) {
        console.log("watch premium feature");
    } else {
        console.log("watch free version");
    }
}
// output: watch free version


//TODO: condition for refrigerator
/* ------------------------------- Problem 04 ------------------------------- */
let fridgeFood = true;
let foodpanda = false;

// check fridge food
if (fridgeFood) {
    console.log("heat the food");

    // check food oder app working or not
} else if (foodpanda) {
    console.log("Order Food");
} else {
    console.log("I'm fasting today");
}
// output: Pass


//TODO: condition for party
/* ------------------------------- Problem 05 ------------------------------- */
let participent = 150;
let gift = true;

if (participent > 100) {


    if (gift) {
        console.log("Let's party all night");
    } else {
        console.log("I will party with myself");
    }
}
// output: Let's party all night