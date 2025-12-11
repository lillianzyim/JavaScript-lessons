// Build the menu
let supreme = {
    name:"Supreme",
    toppings: ["mushrooms","pepperoni","sausage","red peppers"],
    cheese: "mozzarella",
    price: 22.95,
    size: "Large"
}
let margherita = {
    name:"Margherita",
    toppings: ["basil","crushed tomato"],
    cheese: "fresh mozzarella",
    price: 18.95,
    size: "Large"
}
let saltysailor = {
    name:"Salty Sailor",
    toppings: ["olives", "anchovies"],
    cheese: "mozzarella",
    price: 20.95,
    size: "Large"
}

function g(e) {
    return document.getElementById(e)
}

let menu = [supreme, margherita, saltysailor]
console.log(supreme.price)

g("pizza_name").innerHTML = menu[0].name
g("pizza_price").innerHTML = menu[0].price
g("pizza_toppings").innerHTML = menu[0].toppings
g("pizza_cheese").innerHTML = menu[0].cheese


function searchpizza() {
    let search = 
}