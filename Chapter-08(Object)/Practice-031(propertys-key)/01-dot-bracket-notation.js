
//TODO: create an object named player with properties & print team name
/* ------------------------------- Problem 01 ------------------------------- */

const player = {
    name: "Sabbir",
    age: 22,
    sports: "Football",
    team: "Khalid"
};

console.log(player.team);


//TODO: create an object named laptop with properties & print screenSize
/* ------------------------------- Problem 02 ------------------------------- */

const laptop = {
    brand: "HP",
    price: 50000,
    hardDisc: "1TB",
    ram: "16GB",
    screenSize: '16"'
};

console.log(laptop.screenSize);


//TODO: create an object named favPlace with properties & print popularity
/* ------------------------------- Problem 03 ------------------------------- */

const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: "High"
};

console.log(favPlace['popularity']);


//TODO: create an object named phone with properties & print price
/* ------------------------------- Problem 04 ------------------------------- */

const phone = {
    brand: "Nokia",
    color: "black",
    price: 5000
};

console.log(phone['price']);


//TODO: create an object named library with properties & print location
/* ------------------------------- Problem 05 ------------------------------- */

const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
};

const libraryLocation = library.location;
console.log(libraryLocation);


//TODO: create an object named movie with properties & print rating
/* ------------------------------- Problem 06 ------------------------------- */

const movie = {
    title: "Inception",
    director: "Nolan",
    rating: 9
};

console.log(movie["rating"]);


//TODO: create an object named college with properties & print groups
/* ------------------------------- Problem 07 ------------------------------- */

const college = {
    name: "ndc",
    established: 1949,
    groups: ["Science", "Arts", "Commerce"]
};

console.log(college.groups[1]);

//TODO: create an object named family with properties, print father & mother age and sum
/* ------------------------------- Problem 08 ------------------------------- */

const family = {
    father: {
        name: "Monirul",
        age: 50,
        profession: "Teacher",

    },
    mother: {
        name: "Shahida",
        age: 40,
        profession: "Housewife"
    }
};

let obj1 = family.father.age;
let obj2 = family.mother.age;

console.log(obj1);
console.log(obj2);
console.log("sum:", obj1 + obj2);