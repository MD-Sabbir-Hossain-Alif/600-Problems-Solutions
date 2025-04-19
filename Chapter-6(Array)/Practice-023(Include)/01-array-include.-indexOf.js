
//TODO: fruits in array or not
/* ------------------------------- Problem 01 ------------------------------- */
const fruits = ["Apple", "Banana", "Mango", "Licy",];

if (fruits.indexOf("Mango")) {
    console.log("There are mangoes");
} else {
    console.log("There are no mangoes, Climb a tree.");
}

// Output: There are mangoes


//TODO: Babul name index in names array
/* ------------------------------- Problem 02 ------------------------------- */
const names = ["Babul", "Alif", "Choton"];
const index = names.indexOf("Babul");

console.log(index);

// Output: 0


//TODO: forgot friend name index in friends array
/* ------------------------------- Problem 03 ------------------------------- */
const friendnames = ["Rimon", "Rifat", "Rajib"];
const indexII = friendnames.indexOf("Rifat");

console.log(indexII);

// Output: 1


//TODO: checking city name in cities array
/* ------------------------------- Problem 04 ------------------------------- */
const cities = ["Dhaka", "Chittagong", "Syllet"];
cities.push("rajshahi");

const indexIII = cities.indexOf("RajShahi");

console.log(indexIII);

// Output: -1


//TODO: checking rain in eliments array
/* ------------------------------- Problem 05 ------------------------------- */
const eliments = ["Lake", "Cloud", "Rain", "Rainfall"];

if (eliments.indexOf("Rain")) {
    console.log("I need umberalla");
} else {
    console.log("No rain no pain.");
}

// Output: I need umberalla


//TODO: checking game in fevGame array
/* ------------------------------- Problem 0 ------------------------------- */
const fevGame = ["Foodball", "Cricket", "Vallyball"];
const gameCheck = fevGame.indexOf("Batminton");

console.log(gameCheck);

// Output: -1