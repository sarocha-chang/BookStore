const mongoose = require("../database")
const Schema = mongoose.Schema

const buy = new Schema({
    Book_id: String,
    quantity: Number,
    total: Number
})

const Buy = mongoose.model("buys", buy)

module.exports = Buy