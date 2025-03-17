// Variables

// 01: Birth Year
const birthYear = 2003;

// 02: How many brothers and sisters
const broSis = 2;

// 03: How many students in my class
const studentInClass = 50;

// 04: How many numbers i was got in my last exam
const marks = 800; // i don't remember but i got A+ in HSS exam

// 05: How many room in my house
const rooms = 5;

// 06: How many hour i spend for reading 
const hours = 2; //average 2 hours/week but now i spend lots of time

// 07: Sum of all phone number degit

let phoneNumber = [0, 1, 3, 0, 0, 3, 8, 6, 8, 3, 0]; // this is not my number !!warning
let total =  0 + 1 + 3 + 0 + 0 + 3 + 8 + 6 + 8 + 3 + 0;// this number is only for test

// or using for loop

let phoneNumber_2 = [0, 1, 3, 0, 0, 3, 8, 6, 8, 3, 0],
    total_2 = 0;

for (let i = 0; i < phoneNumber_2.length; i++) {
    total_2 += phoneNumber_2[i];
}


