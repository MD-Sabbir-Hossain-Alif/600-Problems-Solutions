
//TODO: Food delivery
/* ------------------------------- Project 02 ------------------------------- */

const restaurants = [
    {id: 1, name: "Pizza Place", menu: [{name: "Pepperoni Pizza", price: 500}]}, // i change price 12 to 500 for real price
    {id: 2, name: "Sushi House", menu: [{name: "Salmon Sushi", price: 750}]}     // i change price 15 to 750 i don't khow this dishes just imagine
];

const orders = [];
const reviews = [];

// Discount in percentage
const discountCodes = {"SAVE10": 10, "WELCOME15": 15}; // i don't know object can write like this !

// task-1
function getFoodPrice(restName, dishes) {
    const isHaveRest = restaurants.find(para => para.name.toLowerCase() === restName.toLowerCase()) // here i add toLowerCase() i know that we don't search like in object
    if(isHaveRest) {
        const isHaveMenu = isHaveRest.menu.find(para => para.name.toLowerCase() === dishes.toLowerCase()); // also here i add toLowerCase()
        if(isHaveMenu) {
            // console.log(isHaveMenu.price)
            return isHaveMenu.price;
        } else {
            // console.log("Food Item not found");
            return "Food Item not found";
        }
    } else {
        // console.log("Restaurant not found");
        return "Restaurant not found"
    }
}

// console.log(getFoodPrice("pizza place", "Pepperoni Pizza"))
// task-2

function placeOrder(customer, restName, foodItem, discountCode) {
    const price = getFoodPrice(restName, foodItem); // we call getFoodPrice in here
    if (typeof price !== "number") {
        return price; 
    }
    const coupon = discountCodes[discountCode];
    let finalPrice = price;
    // console.log(finalPrice)
    if(coupon) {
        finalPrice = price - (price * coupon) / 100;
    }
    const newOrder = {
        customerName: customer,
        restaurantName: restName,
        foodName: foodItem,
        foodPrice: finalPrice,
        status: "Pending"
    }
    newOrder.id = orders.length + 1;

    // console.log(newOrder);

    orders.push(newOrder);
    return `Your Order is Successfully placed. Order Id: ${newOrder.id}`;
}

const x = placeOrder(1, "Pizza Place", "Pepperoni Pizza", "SAVE10")

// console.log(orders);
// console.log(x);


function totalSale(restName) {
    const totalSale = orders.filter(order => order.restaurantName.toLowerCase() === restName.toLowerCase())
    .reduce ((total, order) => total + order.foodPrice, 0);
    return totalSale;
}
// console.log(totalSale("Pizza Place"));

function submitReviews (orderId, restName, ratings, review) {
    const isValid = orders.some(order => order.id === orderId && order.restaurantName === restName);

    if (!isValid) {
        return "Bangla: না খেয়ে ভুয়া রিভিউ দিবেন না, প্লিজ English: Please don't give fake reviews without eating"
    };
    // console.log(isValid)
    if(ratings < 0 || ratings > 5) {
        return "Ratings must be between 0 and 5"
    };
    // console.log(ratings)
    if(review.length < 20) {
        return "Reviews must be longer than 20 characters"
    };

    const newReviews = {
        id: reviews.length +1,
        restName: restName,
        ratings: ratings,
        reviews: reviews
    };
    // console.log(review.length);
    // console.log(newReviews)
    reviews.push(newReviews);
    return `The review was successfully added and this is your review ID: ${newReviews.id}`;
}

const y = submitReviews(1, "Pizza Place", 3, "i don't like fastfood")
// console.log(y)