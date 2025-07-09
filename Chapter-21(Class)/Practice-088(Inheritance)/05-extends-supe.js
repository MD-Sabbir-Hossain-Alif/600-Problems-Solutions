
//TODO: create a furniture parent class with 2 child class name table, chiar
/* ------------------------------- Problem 05 ------------------------------- */

class Furniture {
    constructor(wood, price, color) {
        this.wood = wood;
        this.price = price;
        this.color = color;
    }
}
class Table extends Furniture{
    constructor(wood, price, color, height) {
        super(wood, price, color);
        this.height = height;
    }
}
class Chair extends Furniture{
    constructor(wood, price, color, shape) {
        super(wood, price, color);
        this.shape = shape;
    }
}
const table = new Table('Oak', '300fit/fit', 'red brown', '2fit');
const chair = new Chair('Teak', '280tk/fit', 'Brown', 'circle');
console.log(table);
console.log(chair);


/* Output: 
{
    wood: 'Oak',
    price: '300fit/fit',
    color: 'red brown',
    height: '2fit'
}
{
    wood: 'Teak',
    price: '280tk/fit',
    color: 'Brown',
    shape: 'circle'
}
*/