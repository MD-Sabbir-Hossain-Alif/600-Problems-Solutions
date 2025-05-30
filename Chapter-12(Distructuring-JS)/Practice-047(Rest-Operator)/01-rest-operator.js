
//TODO: using rest operator
/* ------------------------------- Problem 01 ------------------------------- */

const product = {
    name: "Laptop",
    price: 50000,
    brand: "Hp"
};
const {name, ...details} = product;
console.log(name);
console.log(details);


// Output: Laptop
// Output: { price: 35000, brand: 'Hp' }


//TODO: using rest operator
/* ------------------------------- Problem 02 ------------------------------- */

const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Crop"
};
const {title, ...rest} = product;
console.log(rest);


// Output: { name: 'Laptop', price: 50000, brand: 'Hp' }


//TODO: using rest operator
/* ------------------------------- Problem 03 ------------------------------- */

const programmer = {
    pName: "Sophia",
    language: "JavaScript",
    exprience: 5,
    specialty: "Frontend",
    tools: "React"
};
const {language, specialty, ...pDetails} = programmer;
console.log(pDetails);


// Output: { pName: 'Sophia', exprience: 5, tools: 'React' }



//TODO: using rest operator
/* ------------------------------- Problem 04 ------------------------------- */

const numbers = [10, 20, 3, 30, 300, 3000];
const [first, second, ...arrRest] = numbers;
console.log(arrRest);


// Output: [ 3, 30, 300, 3000 ]


//TODO: using rest operator
/* ------------------------------- Problem 05 ------------------------------- */

function sum(a, b, ...number) {
    console.log(number);
    return a + b;
};
console.log(sum(10, 30, 23, 45));


// Output: [ 23, 45 ]
// Output: 40


//TODO: using rest operator
/* ------------------------------- Problem 06 ------------------------------- */

function avg(...aRest) {
    const sum = aRest.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    const average = sum / aRest.length;
    return average;
}
console.log(avg(35, 50, 80, 75, 65));


// Output: 61