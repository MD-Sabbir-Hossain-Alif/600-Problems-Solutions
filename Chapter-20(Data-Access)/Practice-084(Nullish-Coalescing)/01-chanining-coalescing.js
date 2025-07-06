
//TODO: use of nullish coalescing
/* ------------------------------- Problem 01 ------------------------------- */

let x = null;
x ??= 75;
console.log(x);


// Output: 75


//TODO: use nullish coalescing to handle missing stocks property
/* ------------------------------- Problem 02 ------------------------------- */

const product = {
    id: 1,
    name: 'Awei T29 Pro',
    details: "best erarbads with in 1200 tk"
}
const stocks = product.stocks ?? 0;
console.log(stocks);


// Output: 0


//TODO: use nullish coalescing to handle missing discount property
/* ------------------------------- Problem 03 ------------------------------- */

const porductDetails = {
    name: 'Headphone',
    address: 'Rangpur',
    discount: null
};
const discount = porductDetails.discount ?? 10;
console.log(discount);


// Output: 10


//TODO: use optional chaining with nullish coalescing to handle missing engine property
/* ------------------------------- Problem 04 ------------------------------- */

const vehicle = {
    model: 'V16',
    condition: 'Fress'
};
const engine = vehicle?.engine ?? 'Engine info Missing';
console.log(engine);


// Output: Engine info Missing


//TODO: use optional chaining with nullish coalescing to handle missing menu
/* ------------------------------- Problem 05 ------------------------------- */

const restaurant = {
    foods: {
        no1: 'Meet',
        no2: 'Rice'
    }, 
    time: '30min'
};
const menu = restaurant?.menu ?? 'Menu not avaiable';
console.log(menu);


// Output: Menu not avaiable


//TODO: use optional chaining with nullish coalescing to handle missing social media
/* ------------------------------- Problem 06 ------------------------------- */

const profile = {
    website: true,
    social: {
        linkedin: true,
        facebook: true,
        github: true
    }
};
const twitter = profile?.social?.twitter ?? 'Twitter handle not available';
console.log(twitter);


// Output: Twitter handle not available