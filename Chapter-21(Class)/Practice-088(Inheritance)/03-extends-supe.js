
//TODO: create a vehicle parent class with 3 child class name bus, truck, bike
/* ------------------------------- Problem 03 ------------------------------- */

/*  common
Bus = name, model, price, fueltype
Truck = name, model, price, fueltype
Bike = name, model, price, fueltype, 

    uncommon
seats, capcity and wheels

*/
class Vehicle {
    constructor(name, model, price, fueltype) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.fueltype = fueltype;
    }
}
class Bus extends Vehicle{
    constructor(name, model, price, fueltype, seats) {
        super(name, model, price, fueltype);
        this.seats = seats;
    }
}
class Truck extends Vehicle{
    constructor(name, model, price, fueltype, capcity) {
        super(name, model, price, fueltype);
        this.capcity = capcity;
    }
}
class Bike extends Vehicle{
    constructor(name, model, price, fueltype, wheels) {
        super(name, model, price, fueltype);
        this.wheels = wheels;
    }
}
const bus = new Bus("Hino", "AK1JMK-15404", 3450000, "Diesel", 40);
const truck = new Truck("Eicher ", "12", 4700000, "Diesel", "25tons");
const bike = new Bike("GPX", "Demon", 380000, "Petrol", 2);
console.log(bus);
console.log(truck);
console.log(bike);


/* Output: {
    name: 'Hino',
    model: 'AK1JMK-15404',
    price: 3450000,
    fueltype: 'Diesel',
    seats: 40
}
*/
/* Output: {
    name: 'Eicher ',
    model: '12',
    price: 4700000,
    fueltype: 'Diesel',
    capcity: '25tons'
}
*/
/* Output: {


    name: 'GPX',
    model: 'Demon',
    price: 380000,
    fueltype: 'Petrol',
    wheels: 2
}
*/