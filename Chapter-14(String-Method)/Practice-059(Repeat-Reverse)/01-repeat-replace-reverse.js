
//TODO: Repeat the greeting string 10 times and display it
/* ------------------------------- Problem 01 ------------------------------- */

const greeting = "Hi ";
console.log(greeting.repeat(10));


// Output: 'Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi '


//TODO: Replace only the first occurrence of 'JavaScript' with 'JS'
/* ------------------------------- Problem 02 ------------------------------- */

const jsString = "I am learning JavaScript, JavaScript is amazing";
console.log(jsString.replace("JavaScript", "JS"));


// Output: 'I am learning JS, JavaScript is amazing'


//TODO: Replace all occurrences of the word 'apples' with 'mango'
/* ------------------------------- Problem 03 ------------------------------- */

const fruits = "I love apples and apples are tasty!";
console.log(fruits.replaceAll("apples", "mango"));


// Output: 'I love mango and mango are tasty!'


//TODO: Reverse the given sentence character by character
/* ------------------------------- Problem 04 ------------------------------- */

const sentence = "I am learning Web Dev since  2024";
let reverse = "";
for(const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse)


// Output: '4202 ecnis veD beW gninrael ma I'