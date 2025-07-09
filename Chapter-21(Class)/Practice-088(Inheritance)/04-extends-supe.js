
//TODO: create a animals parent class with 3 child class name animal, bird, fish
/* ------------------------------- Problem 04 ------------------------------- */

class Animals {
    constructor(head, leg, food, habitaion) {
        this.head = head;
        this.leg = leg;
        this.food =food;
        this.habitaion = habitaion;
    }
}
class Animal extends Animals{
    constructor(head, leg, food, habitaion, movement) {
        super(head, leg, food, habitaion);
        this.movement = movement;
    }
}
class Bird extends Animals {
    constructor(head, leg, food, habitaion, reproduction) {
        super(head, leg, food, habitaion);
        this.reproduction = reproduction;
    }
}
class Fish extends Animals {
    constructor(head, leg, food, habitaion, breath) {
        super(head, leg, food, habitaion);
        this.breath = breath;
    }
}
const animal = new Animal ('Yes', '2 to 400+', 'mostly grass and meat', 'Land', 'walking');
const bird = new Bird ('Yes', '2', 'mostly insects', 'Nest', 'laying eag');
const fish = new Fish ('Yes', 'None', 'mostly plankton and small fish', 'Water', 'gills');
console.log(animal);
console.log(bird);
console.log(fish);


/* Output: 
{
    head: 'Yes',
    leg: '2 to 400+',
    food: 'mostly grass and meat',
    habitaion: 'Land',
    movement: 'walking'
}
{
    head: 'Yes',
    leg: '2',
    food: 'mostly insects',
    habitaion: 'Nest',
    reproduction: 'laying eag'
}
{
    head: 'Yes',
    leg: 'None',
    food: 'mostly plankton and small fish',
    habitaion: 'Water',
    breath: 'gills'
}
*/