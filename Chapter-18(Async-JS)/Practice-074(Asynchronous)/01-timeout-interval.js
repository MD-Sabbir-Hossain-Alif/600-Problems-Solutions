
//TODO: Demonstrate use of setTimeout with a 3-second delay
/* ------------------------------- Problem 01 ------------------------------- */

setTimeout(() => {
    console.log("I wasted 3 seconds of my life by looking at screen and doing nothing");
},3000);


// Output: after 3 second -> I wasted 3 seconds of my life by looking at screen and doing nothing


//TODO: Demonstrate use of setInterval to increment and print a number every 2 seconds
/* ------------------------------- Problem 02 ------------------------------- */

let num = 129
setInterval(() => {
    num = num + 2;
    console.log(num);
}, 2000);


// Output: after 2 second
// 131
// 133
// 135
// 137
// 139
// 141
// so on


//TODO: Use setInterval with a condition to stop after 6 repetitions
/* ------------------------------- Problem 03 ------------------------------- */

let number = 0;
const timeOut = setInterval(() => {
    number++;
    console.log("I am learning javascript");
    if (number === 6) {
        clearInterval(timeOut);
    }
}, 2000);


// Output: after 2 second ((6)I am learning javascript)


//TODO: How many microseconds does setTimeout() assume by default if the seconds parameter is omitted?
/* ------------------------------- Problem 04 ------------------------------- */


// Answer: 0 microsecond 