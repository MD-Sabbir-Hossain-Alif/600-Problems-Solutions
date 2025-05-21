
//TODO: 3 number sum parameter asign with default value = 0;
/* ------------------------------- Problem 01 ------------------------------- */

function numSum(num1 = 0, num2 = 0, num3 = 0) {
    const sum = num1 + num2 + num3;
    console.log(num1, num2, num3, sum);
    return sum;
}
const sum = numSum(60);
console.log(sum);

// Output: 60, 0, 0, 60
//         60


//TODO: money deposite function
/* ------------------------------- Problem 02 ------------------------------- */

function moneyDeposite(money = 50) {
    const totalMoney = money + 50;
    return totalMoney;
}
const depositeMoney = moneyDeposite(5000)
console.log(depositeMoney);

// Output: 5050


//TODO: function that show name & monthly income
/* ------------------------------- Problem 03 ------------------------------- */

function nameIncome(name = "anonymous", income = 0) {
    const arr = [];              // here i create a array for storing name & income, than i push there value
    arr.push(name, income);
    return arr;

}
const nameMonthlyIncome = nameIncome("Sabbir", 100000);
console.log(nameMonthlyIncome);

// Output: ['Sabbir', 100000]


//TODO: function that return squre, default value 1
/* ------------------------------- Problem 04 ------------------------------- */

function numSqure(namber = 1) {
    const squre = namber * namber;
    return squre;
}
const squre = numSqure(10);
console.log(squre);

// Output: 100


//TODO: function that show product name & product price
/* ------------------------------- Problem 05 ------------------------------- */

function nameAndPrice(name = "Unknown Product", price =  1) {
    const arr = [];
    arr.push(name, price);
    return arr;
}
const productNameAndPrice = nameAndPrice("Headphone", 3500);
console.log(productNameAndPrice);

// Output: [ 'Headphone', 3500 ]


//TODO: function that shows books array
/* ------------------------------- Problem 06 ------------------------------- */

function booksList(book = ["JS Book"]) {
    return book;
}
const booksArr = ["Quran", "JS Basic Concapete", "Logic"]
const books = booksList(booksArr);
console.log(books);

// Output: [ 'Quran', 'JS Basic Concapete', 'Logic' ]


//TODO: using function print total price obj
/* ------------------------------- Problem 07 ------------------------------- */

function totalPrice(obj = {price: 10, quantity: 1}) {
    const totalPrice = obj.price * obj.quantity;
    return totalPrice;
}
const priceAndQuantityObj = {price: 999, quantity: 10};
const productTotalPrice = totalPrice(priceAndQuantityObj);
console.log(productTotalPrice);

// Output: 9990


//TODO: create a function that print duble of arrays eliments
/* ------------------------------- Problem 08 ------------------------------- */

function eliments2x(arr = [5, 10, 15]) {
    let arr2x = [];
    for (const num of arr) {
        const duble = num * 2;
        arr2x.push(duble);
    }
    return arr2x;
}
const array = [2, 4, 6, 8, 10, 11, 13, 15];
const dubleNum = eliments2x(array);
console.log(dubleNum);

// Output: [2, 4, 6, 8, 10, 11, 13, 15]


//TODO: create a function that calculate riba [ its haram i can't do such as thing]
/* ------------------------------- Problem 09 ------------------------------- */

function riba(obj = {principal: 1000, rate: 5}) {
    const interest = (obj.principal * obj.rate) / 100;
    return interest;
}
const ribaIsHaram = {principal: 1000, rate: 10};
const ribaIsNotSimple = riba(ribaIsHaram);
console.log(ribaIsNotSimple);

// Output: 100


//TODO: creating a function that calculate tex on salary and return net salary
/* ------------------------------- Problem 10 ------------------------------- */

function netSalary(obj = {salary: 50000, tax: 10}) {
    const totalTax = obj.salary * (obj.tax / 100);
    const netSalary = obj.salary - totalTax;
    return netSalary;
}
const parsonsSalary = {salary: 100000, tax: 12};
const salary = netSalary(parsonsSalary);
console.log(salary);


// Output: 88000