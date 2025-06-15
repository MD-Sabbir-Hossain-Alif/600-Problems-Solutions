
//TODO: Use slice to extract elements from index 1 to index 3
/* ------------------------------- Problem 01 ------------------------------- */

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const selectedSlices =fruits.slice(1, 3);
console.log(fruits);
console.log(selectedSlices);


// Output: [ 'Apple', 'Banana', 'Cherry', 'Date' ]
// [ 'Banana', 'Cherry' ]


//TODO: Use slice to extract the first two elements (from index 0 to 2, excluding 2)
/* ------------------------------- Problem 02 ------------------------------- */

const cars = ["Tesla", "BMW", "Toyota", "Ford"];
const selectedCars = cars.slice(0, 2);
console.log(selectedCars);


// Output: [ 'Tesla', 'BMW' ]


//TODO: Use splice to remove 2 elements starting replace them
/* ------------------------------- Problem 03 ------------------------------- */

const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
const deleted = movieList.splice(2, 2, "Batman", "Superman");
console.log(movieList);


// Output: [ 'Inception', 'Titanic', 'Batman', 'Superman', 'Interstellar' ]


//TODO: Use splice to remove 'Neymar' Replace it with 'Halland'
/* ------------------------------- Problem 04 ------------------------------- */

const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
const removed = players.splice(2, 1, "Halland");
console.log(players);


// Output: [ 'Messi', 'Ronaldo', 'Halland', 'Mbappe' ]