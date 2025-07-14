
//TODO: create variable named mobile and check brand country name using switch case
/* ------------------------------- Problem 01 ------------------------------- */

const mobile = "Samsung";
switch (mobile) {
    case "Apple":
        console.log("USA");
        break;
    case "Samsung":
        console.log("Korea");
        break;
    case "Xiaomi":
        console.log("China");
        break;
    default: 
        console.log("Unknown Source!");
}


// Output: Korea


//TODO: create variable named browser and check browser name using if...else and switch case
/* ------------------------------- Problem 02 ------------------------------- */

const browser = "Brave";

// if-else
if (browser === "Chrome") {
    console.log("Best for developers");
} else if (browser === "Brave") {
    console.log("Privacy focused");
} else if (browser === "Safari") {
    console.log("Apple user's choice");
} else {
    console.log("Unsupported browser");
}

// Output: Privacy focused

// switch case
switch (browser) {
    case "Chrome":
        console.log("Best for developers");
        break;
    case "Brave":
        console.log("Privacy focused");
        break;
    case "Safari":
        console.log("Apple user's choice");
        break;
    default:
        console.log("Unsupported browser");
}


// Output: Privacy focused


//TODO: create variable named paymentMethod and check method name using switch case
/* ------------------------------- Problem 03 ------------------------------- */

const paymentMethod = "cash";
switch (paymentMethod) {
    case "cash":
        console.log("Pay with cash");
        break;
    case "credit":
        console.log("Pay with credit card");
        break;
    case "debit":
        console.log("Pay with debit card");
        break;
    default:
        console.log("Invalid payment method");
}


// Output: Pay with cash


//TODO: create variable named membership and check access control using switch case
/* ------------------------------- Problem 04 ------------------------------- */

const membership = "free";
if (membership === "free") {
    console.log("Access limited content");
} else if (membership === "silver") {
    console.log("Access most content");
} else if (membership === "gold") {
    console.log("Access premium content");
} else if (membership === "platinum") {
    console.log("Full access");
} else {
    console.log("Just guest");
}


// Output: Access limited content


//TODO: create variable named orderStarus and check progress using switch case
/* ------------------------------- Problem 05 ------------------------------- */

const orderStatus = "pending"
switch (orderStatus) {
    case "pending":
        console.log("Your order is being processed");
        break;
    case "shipped":
        console.log("Your order is on the way");
        break;
    case "delivered":
        console.log("Your order has been delivered");
        break;
    case "eancelled":
        console.log("Your order has been cancelled");
        break;
    default: 
    console.log("Loading...")
}


// Output: Your order is being processed


//TODO: create variable named grade and check quality result using switch case
/* ------------------------------- Problem 06 ------------------------------- */

const grade = "C";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default: 
    console.log("Invalid Grade!");
}


// Output: Average