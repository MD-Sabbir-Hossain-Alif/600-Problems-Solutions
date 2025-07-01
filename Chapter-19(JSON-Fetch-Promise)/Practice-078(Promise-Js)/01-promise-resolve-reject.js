
//TODO: create a promise and return user date using .than & .reject method
/* ------------------------------- Problem 01 ------------------------------- */

const userRequest = new Promise((resolve, reject) => {
    const arr = ["Sabbir", "Ashik", "Jobbar"];
    const userRequest = true;
    if (userRequest) {
        resolve (arr);
    } else {
        reject ("No User Data");
    }
});
userRequest
    .then((output) => {
        console.log(output);
    })
    .catch((error) => {
        console.log(error);
});


// Output: [ 'Sabbir', 'Ashik', 'Jobbar' ]


//TODO: 
/* ------------------------------- Problem 02 ------------------------------- */

const paymentProcess = new Promise((resolve, reject) => {
    const amount = 0;
    if (amount > 0) {
        resolve("Payment Processed");
    } else {
        reject ("Out of Balance");
    }
});
paymentProcess
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
});

// Output: Out of Balance


//TODO: 
/* ------------------------------- Problem 03 ------------------------------- */

function sendEmail(email) {
    const validEmail = ["sabbir.web.dp@gmail.com", "xyz@gmail.com", "mnopqrst@gmail.com"];
    return new Promise((resolve, reject) => {
            if (validEmail.includes(email)) {
                resolve("Email from Nigerian prince");
            } else {
                reject("Lets Dance in the spam folder");
        }
    });
};

sendEmail("xy@gmail.com")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
});


// Output: Lets Dance in the spam folder