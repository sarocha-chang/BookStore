const mongoose = require("../database")
const Schema = mongoose.Schema

const cart = new Schema({
    Cart: Object,
    Address: Object
})

const Cart = mongoose.model("Carts", cart)

module.exports = Cart