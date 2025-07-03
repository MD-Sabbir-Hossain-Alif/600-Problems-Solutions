
//TODO: why is data conversion done by calling response.json() through the promise returned from the fetch function?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 

//* The fetch() function returns a Promise.
//* When the promise resolves, it gives us a Response object, not the actual data yet

// fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => {      //? this is a Response object
    // });

//* he Response object contains the data as a raw stream (not directly usable).
//* So, we need to convert or parse it — usually to JSON, text, or some other format.

// fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())    //? converting the raw data to JSON
  // .then(data => console.log(data));    //? now we have the actual usable data

//? .json()
// when a server sends data, it’s often in JSON format like:
// "{"name": "Alice"}" — but that’s just a string.

// .json() parses that string and turns it into a JavaScript object, like:
// { name: "Alice" }


//TODO: Why is fetch used?
/* ------------------------------- Problem 02 ------------------------------- */

//? Answer: 

//* the Fetch API in JavaScript provides a modern, powerful, and flexible
//*  way to make HTTP requests from web browsers or Node. js environments to server
//* it's the standard replacement for the older XMLHttpRequest

//* 1. fatch is use for retriving data from a server
// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then(data => console.log(data));

//* 2. fatch is use for sending data to a server we can send POST, PUT, DELETE requests etc, with data

//* 3. fatch is cleaner, returns promises and avoid callback hell

//* 4. fetch is used to communicate with servers in a clean, asynchronous way - 
//* making it essential for modern web development


//TODO: What is the difference between fetch and promise?
/* ------------------------------- Problem 03 ------------------------------- */

//? Answer: 

//* fetch is a function that makes HTTP requests and returns a Promise
//* Promise is a JavaScript object used to handle asynchronous operations

//? fetch returns a Promise
// const promise = fetch('https://jsonplaceholder.typicode.com/users');

//? Using the Promise
// promise
  // .then(response => response.json())
  // .then(data => console.log(data));

//? i creat a priview in this // fetch.excladraw.png flie


//TODO: write an API call that will load the user list from 'https://jsonplaceholder.typicode.com/users'
/* ------------------------------- Problem 04 ------------------------------- */


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.log(error))


// Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


//TODO: 
/* ------------------------------- Problem 05 ------------------------------- */

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => console.log("This is id 1's data:", user))
    .catch(error => console.log(error))

// Output: This is id 1's data: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}