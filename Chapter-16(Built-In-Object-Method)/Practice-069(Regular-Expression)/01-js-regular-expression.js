
//TODO: Replace the first occurrence of the word "orange" with "grape"
/* ------------------------------- Problem 01 ------------------------------- */

const orange = "I bought an orange";
console.log(orange.replace(/orange/s, "grape"));


// Output: I bought an grape



//TODO: Test if the string contains the pattern "ana"
/* ------------------------------- Problem 02 ------------------------------- */

const appleBanana = "I like to have apple and banana";
const pattern = /ana/;
console.log(pattern.test(appleBanana));


// Output: true


//TODO: Replace all occurrences of the word "apple" with "JavaScript"
/* ------------------------------- Problem 03 ------------------------------- */

const eatApple = "I am eating apple. apple is good. apple helps me a lot.";
console.log(eatApple.replace(/apple/g, "JavaScript"))


// Output: I am eating JavaScript. JavaScript is good. JavaScript helps me a lot.