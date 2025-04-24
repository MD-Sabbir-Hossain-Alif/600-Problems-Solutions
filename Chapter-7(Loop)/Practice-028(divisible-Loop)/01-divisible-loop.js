
//TODO: printing 20 to 50 numbers that divisible with 7 using for loop
/* ------------------------------- Problem 01 ------------------------------- */

for (let i = 20; i <= 50; i++) {
    if(i % 7 == 0){
        console.log(i);
    }
}


/* Output:

21
28
35
42
49

*/


//TODO: printing 40 to 80 numbers that divisible with 5 or 7 using for loop
/* ------------------------------- Problem 02 ------------------------------- */
for (let i = 40; i <= 80; i++) {
    if (i % 5 == 0 || i % 7 == 0 ) {
        console.log(i);
    }
}

/* Output:

40
42
45
49
50
55
56
60
63
65
70
75
77
80

*/


//TODO: printing divisible with 13 within 1 to 40 numbers sum using for loop
/* ------------------------------- Problem 03 ------------------------------- */
let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        sum += i;
    }
}
console.log('sum:', sum);

// Output: sum: 78


//TODO: printing 1 to 50 that everytime increase 4 using for loop
/* ------------------------------- Problem 04 ------------------------------- */
for (let i = 1; i <= 50; i += 4) {
    console.log(i);
}

/* Output:

1
5
9
13
17
21
25
29
33
37
41
45
49

*/


//TODO: printing 0 to 100 numbers that divisible with 9 or 6 using for loop
/* ------------------------------- Problem 05 ------------------------------- */
for (let i = 0; i <= 100; i++) {
    if (i % 6 == 0 && i % 9 == 0) {
        console.log(i);
    }
}

/* Output:

0
18
36
54
72
90

*/


//TODO: printing 1 to 50 numbers that divisible with 3 or 4 using for loop
/* ------------------------------- Problem 06 ------------------------------- */
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        console.log(i);
    }
}

/* Output:

12
24
36
48

*/