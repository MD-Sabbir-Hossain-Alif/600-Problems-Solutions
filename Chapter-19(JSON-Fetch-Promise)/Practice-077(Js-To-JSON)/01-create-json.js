
//TODO: What are the differences between JavaScript objects and JSON strings?
/* ------------------------------- Problem 01 ------------------------------- */


/* Answer: JavaScript object vs JSON String
The main difference in syntax is that in a JSON object the keys must be a string written with double quotes.
In JavaScript, a key can be strings, numbers, or identifier names, and the strings can be written in single or double quotes.

I create a file (for more details) name //? js-vs-json.excalidraw.png

*/


//TODO: create a user date and convert it to JSON using stringify
/* ------------------------------- Problem 02 ------------------------------- */

const user = {
    name: "Sabbir Hossain",
    email: "sabbir.web.dp@gmail.com",
    address: {
        city: "Rangpur",
        strest: "LalBag Road"
    },
    orderHistory: [
        {
            product: "Awei T29Pro",
            id: "P1001"
        },
        {
            product: "Table Lamp",
            id: "P1002"
        },
        {
            product: "Table Clock",
            id: "P1003"
        }
    ],
};

const userJSON = JSON.stringify(user);
console.log(userJSON);


// Output: {"name":"Sabbir Hossain","email":"sabbir.web.dp@gmail.com",
// "address":{"city":"Rangpur","strest":"LalBag Road"},
// "orderHistory":[{"product":"Awei T29Pro","id":"P1001"},{"product":"Table Lamp","id":"P1002"},
// {"product":"Table Clock","id":"P1003"}]}


//TODO: create a shoopping cart date and convert it to JSON using stringify
/* ------------------------------- Problem 03 ------------------------------- */

const shoppingCart = {
    userDetails: {
        name: "Sabbir",
        id: 5212121,
        contact: "013003868**"
    },
    products: [
        {
            product: "Awei T29Pro",
            id: "P1001",
            price: 1190
        },
        {
            product: "Table Lamp",
            id: "P1002",
            price: 520
        },
        {
            product: "Table Clock",
            id: "P1003",
            price: 250
        }
    ],
};

shoppingCart.totalPrice = shoppingCart.products.reduce((sum, item) => sum + item.price, 0);

const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);

// Output: {"userDetails":{"name":"Sabbir","id":5212121,"contact":"013003868**"},
// "products":[{"product":"Awei T29Pro","id":"P1001","price":1190},{"product":"Table Lamp","id":"P1002","price":520},
// {"product":"Table Clock","id":"P1003","price":250}],"totalPrice":1960}


//TODO: create a weather date and convert it to JSON using stringify
/* ------------------------------- Problem 04 ------------------------------- */

const weather = {
    city: "Rangpur",
    temperature: "30C",
    humidity: "50%",
    forecast: [
    { day: "Day 1", temperature: "30C" },
    { day: "Day 2", temperature: "31C" },
    { day: "Day 3", temperature: "29C" },
    { day: "Day 4", temperature: "32C" },
    { day: "Day 5", temperature: "30C" },
    { day: "Day 6", temperature: "28C" },
    { day: "Day 7", temperature: "31C" }
    ]
};

const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);


// Output: {"city":"Rangpur","temperature":"30C","humidity":"50%",
// "forecast":[{"day":"Day 1","temperature":"30C"},{"day":"Day 2","temperature":"31C"},
// {"day":"Day 3","temperature":"29C"},{"day":"Day 4","temperature":"32C"},
// {"day":"Day 5","temperature":"30C"},{"day":"Day 6","temperature":"28C"},{"day":"Day 7","temperature":"31C"}]}


//TODO: create movie data & convert it to JSON using stringify
/* ------------------------------- Problem 05 ------------------------------- */

const movie = {
    title: "100% Halal",
    release_year: "2018 ",
    actors: ["A1", "B1", "C1", "D1"],
    rating: 7    
};

const movieJSON = JSON.stringify(movie);
console.log(movieJSON);


// Output: {"title":"100% Halal","release_year":"2018 ","actors":["A1","B1","C1","D1"],"rating":7}


//TODO: create a project management system data & convert it to JSON using stringify
/* ------------------------------- Problem 06 ------------------------------- */

const projectMtSm = [
    {
        name: "website Create",
        description: "Create a web site for new company name 'Juno'",
        teamMambers: ["Sabbir", "Yasir"],
        deadline: "15-06-2025",
        tasks: [
            {
                task_1: "create home page",
                assignee: "Sabbir",
                status: "In Progress"
            },
            {
                task_2: "create server site",
                assignee: "Yasir",
                status: "In Progress"
            }
        ]
    }
];
const jsonString = JSON.stringify(projectMtSm);

console.log(jsonString);


// Output: [{"name":"website Create","description":"Create a web site for new company name 'Juno'",
// "teamMambers":["Sabbir","Yasir"],"deadline":"15-06-2025","tasks":[{"task_1":"create home page","assignee":"Sabbir","status":"In Progress"},
// {"task_2":"create server site","assignee":"Yasir","status":"In Progress"}]}]


//TODO: create a courses data & convert it to JSON using stringify
/* ------------------------------- Problem 07 ------------------------------- */

const courses = [
    {
        courseTitle: "Front-End",
        instructorName: "Jhankar Mahbub",
        duration: "6 month",
        diffcultyLevel: "Beginner",
        lessons: [
            {
                lessonName: "What is HTML & CSS",
                duration: "1 hour",
                diffcultyLevel: "Easy"
            }
        ]
    },
    {
        courseTitle: "Back-End",
        instructorName: "Jhankar Mahbub",
        duration: "6 month",
        diffcultyLevel: "Intermediate",
        lessons: [
            {
                lessonName: "What is Server",
                duration: "1 hour",
                diffcultyLevel: "Easy"
            }
        ]
    },
    {
        courseTitle: "Full-Stack",
        instructorName: "Jhankar Mahbub",
        duration: "6 month",
        diffcultyLevel: "Advanced",
        lessons: [
            {
                lessonName: "What is MEAN Stack",
                duration: "1 hour",
                diffcultyLevel: "Easy"
            }
        ]
    }
];
const jsonCourses = JSON.stringify(courses);
console.log(jsonCourses);


// Output: [{"courseTitle":"Front-End","instructorName":"Jhankar Mahbub","duration":"6 month","diffcultyLevel":"Beginner",
// "lessons":[{"lessonName":"What is HTML & CSS","duration":"1 hour","diffcultyLevel":"Easy"}]},
// {"courseTitle":"Back-End","instructorName":"Jhankar Mahbub","duration":"6 month","diffcultyLevel":"Intermediate",
// "lessons":[{"lessonName":"What is Server","duration":"1 hour","diffcultyLevel":"Easy"}]},
// {"courseTitle":"Full-Stack","instructorName":"Jhankar Mahbub","duration":"6 month","diffcultyLevel":"Advanced",
// "lessons":[{"lessonName":"What is MEAN Stack","duration":"1 hour","diffcultyLevel":"Easy"}]}]


//TODO: Create a product review data convert that object with JSON.stringify and again convert to js array
/* ------------------------------- Problem 08 ------------------------------- */

const productReview = [{
    productName: "Awei T29Pro",
    reviewer: {
        name: "Sabbir",
        email: "sabbir.web.dp@gmail.com"
    },
    ratting: 4.5,
    reviweText: "Sound quality and battery life"
}];
const jsonProductReview = JSON.stringify(productReview);
console.log(jsonProductReview);

const productReviewArray = JSON.parse(jsonProductReview);
console.log(productReviewArray)


// Output: [{"productName":"Awei T29Pro","reviewer":{"name":"Sabbir",
// "email":"sabbir.web.dp@gmail.com"},"ratting":4.5,"reviweText":"Sound quality and battery life"}]

// Output:[
/*  {
    productName: 'Awei T29Pro',
    reviewer: { name: 'Sabbir', email: 'sabbir.web.dp@gmail.com' },
    ratting: 4.5,
    reviweText: 'Sound quality and battery life'
    }
]
  */