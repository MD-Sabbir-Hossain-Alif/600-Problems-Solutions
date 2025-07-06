
//TODO: printing address from array of object
/* ------------------------------- Problem 01 ------------------------------- */

const user = [{
    id: 1,
    name: 'mukta',
    address: 'mirpur'
}];
const address = user[0].address;
console.log(address);


// Output: mirpur


//TODO: accass price from id 2 in libaray object in books array
/* ------------------------------- Problem 02 ------------------------------- */

const library = {
    name: 'city library',
    books: [{
        id: 1,
        title: 'JavaScript Basics',
        price: 300
    },
    {
        id: 2,
        title: 'Python Essentials',
        price: 500
    }]
};
const idTwoPrice = library.books[1].price;
console.log(idTwoPrice);


// Output: 500


//TODO: accass name from students array of school object
/* ------------------------------- Problem 03 ------------------------------- */

const school = {
    name: 'Green High School',
    students: [{
        id: 1,
        name: 'Samiha'
    }, 
    {
        id: 2,
        name: 'Kamal'
    }]
};
const firstStudentName = school.students[0].name;
console.log(firstStudentName);


// Output: Samiha


//TODO: from items array in shop object print notebook stock
/* ------------------------------- Problem 04 ------------------------------- */

const shop = {
    items: [{
        name: 'pen',
        stock: 100
    },
    {
        name: 'notebook',
        stock: 50
    }]
};
const notebookStock = shop.items[1].stock;
console.log(notebookStock);


// Output: 50


//TODO: printing director name from movie object
/* ------------------------------- Problem 05 ------------------------------- */

const movie = {
    title: 'Inception',
    director: {
        name: 'Nolan',
        age: 50
    },
    rating: 8.8
};
const directorName = movie.director.name;
console.log(directorName);


// Output: Nolan


//TODO: print player name from game object
/* ------------------------------- Problem 06 ------------------------------- */

const game = {
    name: 'football', 
    players: [{
        id: 1,
        name: 'Lionel Messi'
    }, 
    {
        id: 2,
        name: 'Cristiano Ronaldo'
    }]
};
const firstPlayerName = game.players[0].name;
console.log(firstPlayerName);


// Output: Lionel Messi


//TODO: print brand name from vehicle object
/* ------------------------------- Problem 07 ------------------------------- */

const vehicle = {
    type: 'car',
    features: {
        color: 'red',
        brand: {
            name: 'Toyota',
            model: 'corolla'
        }
    }
};
const brandName = vehicle.features.brand.name;
console.log(brandName);


// Output: Toyota