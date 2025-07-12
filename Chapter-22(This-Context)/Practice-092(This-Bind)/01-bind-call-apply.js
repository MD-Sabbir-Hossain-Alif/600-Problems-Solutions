
//TODO: creating a object name team and another object name tournament and bind 
/* ------------------------------- Problem 01 ------------------------------- */

const team = {
    name: "Halal",
    players: 25,
    play () {
        console.log(`${this.name} has ${this.players} players`)
    }
};
team.play();

const tournament = {
    name: "UFLI",
    players: 22
};

const tournamentInfo = team.play.bind(tournament);
tournamentInfo();


// Output: Halal has 25 players
// Output: UFLI has 22 players


//TODO: use call keyword for using object method like magic
/* ------------------------------- Problem 02 ------------------------------- */

const car = {
    speed: 300,
    price: 5000000,
    drive () {
        console.log(`vheicle speed ${this.speed}km/h & it's Price ${this.price}Tk`);
    }
};
car.drive();

const bike = {
    speed: 150,
    price: 500000
};
car.drive.call(bike);

const truck = {
    speed: 70,
    price: 3500000
};
car.drive.call(truck);

// Output: vheicle speed 300km/h & it's Price 5000000Tk
// Output: vheicle speed 150km/h & it's Price 500000Tk
// Output: vheicle speed 70km/h & it's Price 3500000Tk


//TODO: use apply keyword for applying object method in every object
/* ------------------------------- Problem 03 ------------------------------- */

const employee = {
    name: "Sabbir",
    role: "Front-end Developer",
    details () {
        console.log(`Name: ${this.name} Role: ${this.role}`)
    }
};
employee.details();

const manager = {
    name: "Jankkar Mahabub",
    role: "CEO"
}
employee.details.apply(manager);

// Output: Name: Sabbir Role: Front-end Developer
// Output: Name: Jankkar Mahabub Role: CEO


//TODO: creating a object name classroom and another object name lab and bind 
/* ------------------------------- Problem 04 ------------------------------- */

const classroom = {
    name: "Class 10",
    students: ["sabbir", "emon", "shohag", "rabbi", "anik", "najmul"],
    attendance () {
        console.log(`${this.name} students are ${this.students.join(", ")}`);
    }
}
classroom.attendance();

const lab = {
    name: "Science Lab",
    students: ["sabbir", "dinar", "tommoy", 'utso', "rafi", "turjo"]
}
const labInfo = classroom.attendance.bind(lab);
labInfo();


// Output: Class 10 students are sabbir, emon, shohag, rabbi, anik, najmul
// Output: Science Lab students are sabbir, dinar, tommoy, utso, rafi, turjo