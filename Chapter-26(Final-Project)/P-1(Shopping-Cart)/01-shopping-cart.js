
//TODO: Shopping Cart
/* ------------------------------- Project-1 ------------------------------- */

let products = [
    { id: 1, name: "Smartphone", price: 200, stock: 10},
    { id: 2, name: "Laptop", price: 800, stock: 5}
];
let cart = [];
let orders = [];

function addToCart (id, quantity) {
    const product = products.find( para => para.id === id);
    if(product) {
        
        if(product.stock >= quantity) {
            product.stock = product.stock - quantity;

            const object = {
                id: product.id,
                quantity: quantity,
                price: product.price
            };
            cart.push(object);
            return `${product.name} added to cart. Quantity: ${quantity}`;
        } else {
            return "out of stock";
        }
    } else {
        return "Product not found";
    }
}
// addToCart(2, 2);
console.log(addToCart(2, 2))

function viewCart () {
    console.log(cart);
}
viewCart();

function placeOrder() {
    if(cart.length > 0) {
        let total = 0;
        for(let item of cart) {
            total += (item.price * item.quantity);
        }
        const newObj = {
            totalPrice: total
        }
        orders.push(newObj);
        cart.length = 0;
        return "Order placed";
        
    } else {
    return "Your cart is empty";
    }


}
const placeOrders = placeOrder();
console.log(placeOrders);
console.log(orders)


// Output: Laptop added to cart. Quantity: 2
// Output: [{id: 2, quantity: 2, price: 800}]
// Output: Order placed
// Output: [{toralPrice: 1600}]