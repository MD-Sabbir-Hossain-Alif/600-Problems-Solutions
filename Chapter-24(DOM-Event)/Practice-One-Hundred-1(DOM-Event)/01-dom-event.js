
//TODO: What is the difference between local storage and session storage?
/* ------------------------------- Problem 01 ------------------------------- */

//? Answer: 
/*
?       localStorage	                                    sessionStorage

1. Persists even after the browser is closed        1. Only lasts for the duration of the tab/session
2. Shared across all tabs/windows of same origin    2. Unique to each tab/window
3. 	~5–10MB (varies by browser)                     3. ~5–10MB (same as localStorage)
4. Store user settings, tokens, cached data         4. Temporary data like form state, navigation data
5. User manually clears it or via code              5. Tab is closed or page is reloaded
6. localStorage.getItem(), setItem()                6. sessionStorage.getItem(), setItem()

*/


//TODO: dark mode and light mode localStorage save and get
/* ------------------------------- Problem 02 ------------------------------- */
// saving 
localStorage.setItem('mode', 'dark');

let on = localStorage.getItem('mode');
console.log(on);

localStorage.setItem('mode', 'light');

let off = localStorage.getItem('mode');
console.log(off)

// Output: dark
// Output: light


//TODO: user Token and value save to the sessionStorage and log it
/* ------------------------------- Problem 03 ------------------------------- */

//saving
sessionStorage.setItem('authToken', 'abcd1234');

let token = sessionStorage.getItem('authToken');
console.log(token);


// Output: abcd1234


//TODO: save a user name check and remove it from sessionStorage
/* ------------------------------- Problem 04 ------------------------------- */

// saving
localStorage.setItem('userName', 'Alex');

let geting = localStorage.getItem('userName');
console.log(geting);

let checking = sessionStorage.removeItem('userName');
console.log(checking);


// Output: Alax
// Output: undefiend


//TODO: using history api back two step in browser 
/* ------------------------------- Problem 05 ------------------------------- */

// Go to step back in the browsing history
history.back(-2);