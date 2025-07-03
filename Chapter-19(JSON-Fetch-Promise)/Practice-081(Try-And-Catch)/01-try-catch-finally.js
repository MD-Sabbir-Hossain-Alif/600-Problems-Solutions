
//TODO: create JSON data and parse it using try...catch
/* ------------------------------- Problem 01 ------------------------------- */

const data = {product: 'Date', price: 450 };
const jsonData = JSON.stringify(data);
const jsonData2 = "Data corrupted";

try {
    const data = JSON.parse(jsonData);
    console.log("Data:", data);
} catch (error) {
    console.log("Invalid JSON format");
}


try {
    const data = JSON.parse(jsonData2);
    console.log("Data:", data);
} catch (error) {
    console.log("Invalid JSON format");
}


// Output: Data: {product: 'Date', price: 450}
// Output: Invalid JSON format


//TODO: use try...catch to check for valid email format
/* ------------------------------- Problem 02 ------------------------------- */

function valideteInput(email) {
    try {
        if (!email.includes('@')) {
            throw new Error("Invalid email format");
        }
        console.log("Valid email:", email);
    } catch (error) {
        console.log(error.message);
    }
}

valideteInput("test@example.com");
valideteInput("testexample.com");


// Output: Valid email: test@example.com
// Output: Invalid email format


//TODO: use try...catch to handle JSON parsing error
/* ------------------------------- Problem 03 ------------------------------- */

const jsonData3 = "{role: 'CEO', weeklyHours: 1000}";

try {
    const data = JSON.parse(jsonData3);
    console.log("Parsed", data);
} catch (error) {
    console.log("week is over");
}


// Output: week is over


//TODO: use try...catch to validate input and ensure it's a valid string
/* ------------------------------- Problem 04 ------------------------------- */

function stringOnlyParser(input) {
    try {
        if (input === null || input === "" || input === undefined) {
            throw new Error("Input must be a String.")
        }
        console.log("Valid input:", input);
    } catch (error) {
        console.log(error.message);
    }
}

stringOnlyParser("Hello");
stringOnlyParser("");
stringOnlyParser(null);
stringOnlyParser(undefined);


// Output: Valid input: Hello
// Output: Input must be a String.
// Output: Input must be a String.
// Output: Input must be a String.


//TODO: use try-catch-finally to simulate account deletion and handle both success and failure
/* ------------------------------- Problem 05 ------------------------------- */

function deleteUserAccount(ShouldFail) {
    try {
        console.log("Deleteing account");
        if (ShouldFail) {
            throw new Error("Something went wrong");
        }
        console.log("Account deleted successfully");
    } catch (error) {
        console.log("Faild to delete account");
    } finally {
        console.log("Account deletion attempt finished");
    }
}

deleteUserAccount(false);
deleteUserAccount(true);


// Output: Faild to delete account
// Output: Account deletion attempt finished