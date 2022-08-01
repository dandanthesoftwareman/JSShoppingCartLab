let item1 = {
    price: 1.25,
    Name: "Tomato"
}
let item2 = {
    price: .75,
    Name: "Onion"
}
let item3 = {
    price: .50,
    Name: "Garlic"
}
let item4 = {
    price: 1,
    Name: "Red Pepper"
}
let item5 = {
    price: .25,
    Name: "Potato"
}

let store = [item1, item2, item3, item4, item5];
let cart = [];
let total = 0;

let text = "Your receipt <br>";
// document.getElementById("demo").innerHTML = text;


function addItem(item){
    cart.push(item);
    total += item.price;
}

function checkout(cart, total, text){
    cart.forEach(item => text += item.Name + ": $" + item.price + "<br>");
    text += "Total: $" + total;
    document.getElementById("receipt").innerHTML = text;
}