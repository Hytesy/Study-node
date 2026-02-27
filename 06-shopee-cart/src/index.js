import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";


const myCart = []

console.log("Welcome to the your cart");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1)
const item2 = await createItem("Hotwheels lamborhuini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

console.log("Cart Totoal is:");

await cartService.calculateTotal(myCart)