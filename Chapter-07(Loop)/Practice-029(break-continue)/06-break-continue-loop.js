
//TODO: printing 91 to 120 but stop when comes divisible with 10 using for loop
/* ------------------------------- Problem 06 ------------------------------- */
for(let i = 91; i <= 120; i++){
    console.log(i);
    if (i % 10 == 0) {
        break;
    }
}

/* Output:

91
92
93
94
95
96
97
98
99
100

*/