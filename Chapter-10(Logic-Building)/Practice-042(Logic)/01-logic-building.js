
//TODO: using function chacking duplicate
/* ------------------------------- Problem 01 ------------------------------- */

const names = ["sabbir", "ashik", "kazi", "rofik", "ashik", "kazi", "ashik"];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function duplicateRemove(arr) {
    const uniqueNames = [];
    for (const item of arr) {
        if (uniqueNames.includes(item) === false) {
            uniqueNames.push(item);
        }
    }
    return uniqueNames;
}
const uniqueNames = duplicateRemove(names);
console.log(uniqueNames);

const uniqueNumbers = duplicateRemove(numbers);
console.log(uniqueNumbers);

// Output: ['sabbir', 'ashik', 'kazi', 'rofik']
        // [1, 5, 61, 87, 7, 81]