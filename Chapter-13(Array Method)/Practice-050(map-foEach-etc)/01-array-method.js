
//TODO: using map increasing item price 
/* ------------------------------- Problem 01 ------------------------------- */

const itemPrice = [30, 45, 20, 60, 10];
const increasedPrice = itemPrice.map(price => price + 13);
console.log(increasedPrice);


// Output: [34, 58, 33, 73, 23]


//TODO: filter 5 charactor name from array
/* ------------------------------- Problem 02 ------------------------------- */

const bestPlayer = ["Messi", "Maradona", "Pele", "Zidane"];
const fiveChar = bestPlayer.filter(arr => arr.length > 5);
console.log(fiveChar);


// Output: ["Maradona", "Zidane"]


//TODO: use find keyword to search number
/* ------------------------------- Problem 03 ------------------------------- */

const number = [10, 15, 20, 25, 30, 35];
const searchNum = number.find(num => num > 20);
console.log(searchNum);


// Output: 25


//TODO: use filter to find 69+ height player
/* ------------------------------- Problem 04 ------------------------------- */

const playerheight = [65, 70, 68, 72, 68, 73];
const selected = playerheight.filter(element => element > 69);
console.log(selected);


// Output: [70, 72, 73]


//TODO: divide every arr element by 3 using map
/* ------------------------------- Problem 05 ------------------------------- */

const numbers = [7, 10, 15, 20, 25, 30];
const dividedbythree = numbers.map(num => num / 3);
console.log(dividedbythree);

// Output: [2.33, 3.33, 5, 6.66, 8.33, 10]


//TODO: printing third letter of string array using map
/* ------------------------------- Problem 06 ------------------------------- */

const friends = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"]
const thirdLetter = friends.map(index => index[2]);
console.log(thirdLetter);


// Output: ['o', 'a', 't', 'd', 'h']


//TODO: find a name start with "H" using find keyword
/* ------------------------------- Problem 07 ------------------------------- */

const names = ["Tom", "Harry", "Sam", "Jack"];
const firstLetterH = names.find(name => name.startsWith("H"));
console.log(firstLetterH);


// Output: "Harry"


//TODO: printing array using forEach keyword
/* ------------------------------- Problem 08 ------------------------------- */

const num = [1, 2, 3, 4, 5];
const printNum = num.forEach(n => console.log(n));

/* Output: 
1
2
3
4
5
*/


//TODO: printing string array using forEach keyword
/* ------------------------------- Problem 09 ------------------------------- */

const petName = ["cow", "goat", "sheep", "horse"];
const result = petName.forEach(name => console.log(name));


/* Output: 
"cow"
"goat"
"sheep"
"horse"
*/