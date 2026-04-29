import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";


const myCart = []

console.log("Welcome to the your cart");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1)
const item2 = await createItem("Hotwheels Lamborhuini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, item1)

console.log("Cart Total is:");

await cartService.calculateTotal(myCart)