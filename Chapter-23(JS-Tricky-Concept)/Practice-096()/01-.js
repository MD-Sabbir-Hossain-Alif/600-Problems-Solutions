
//TODO: create a variable named items and check using do...while loop
/* ------------------------------- Problem 01 ------------------------------- */

let items = 3;
do {
    console.log(items);
    items++;
} while(items <= 5);


// Output: 3, 4, 5


//TODO: create a variable named attempts and check using do...while loop
/* ------------------------------- Problem 02 ------------------------------- */

let attempts = 2;
do {
    console.log(attempts);
    attempts++;
} while (attempts < 10);


// Output: 2, 3, 4, 5, 6, 7, 8, 9


//TODO: create a variable named name and check using do...while loop
/* ------------------------------- Problem 03 ------------------------------- */

let name = "John";
do {
    console.log(name);
    name += "n";
} while (name.length < 10)


// Output: 
/*
John
Johnn
Johnnn
Johnnnn
Johnnnnn
Johnnnnnn
*/