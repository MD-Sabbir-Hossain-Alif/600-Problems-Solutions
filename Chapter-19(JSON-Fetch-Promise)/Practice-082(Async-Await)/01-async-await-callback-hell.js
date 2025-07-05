
//TODO: why is async -await used?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer:
//* async/await in JavaScript is used to handle asynchronous operations more cleanly
//* async makes a function return a promise, and await pauses execution until the promise resolves,
//* allowing for easier-to-read and more manageable asynchronous code.


//TODO: create async function and await the response from fetch url
/* ------------------------------- Problem 02 ------------------------------- */

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
fetchUser();


// Output: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}


//TODO: what is callback hell or Pyramid of Doom? when does it occur and what is the solution?
/* ------------------------------- Problem 03 ------------------------------- */

//? Answer:
//* When performing asynchronous tasks one by one, we often need to nest one callback inside another.
//* This creates a pyramid-like structure in the code, making it difficult to read, understand, edit, and manage. This pattern is commonly referred to as 'callback hell.'
// Example:
/*
getUser(function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            console.log(comments);
        });
    });
});
*/
//? Solution: async/await
//* cleaner, readable, and easier to manage
// Example:
/*
async function showComments() {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
}
*/


//TODO: load posts using both callback and async/await 
/* ------------------------------- Problem 04 ------------------------------- */

//? Method 1: (Callback)
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
;

//? Method 2: (async/await)
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
fetchData();

// Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


//TODO: use async/await to fetch comments
/* ------------------------------- Problem 05 ------------------------------- */

async function fetchComments() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Request completed!.");
    }
}

fetchComments();

// Output: (500) [{…}, {…}, {…},...]




//TODO: use async/await with try catch . dynamically change id using templete string
/* ------------------------------- Problem 06 ------------------------------- */

async function fetchUsers(ID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchUsers(1);

// Output: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}