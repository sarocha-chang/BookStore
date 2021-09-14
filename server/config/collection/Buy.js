const mongoose = require("../database")
const Schema = mongoose.Schema

const buy = new Schema({
    id: Number,
    Book_id: Number,
    quantity: Number,
    total: Number
})

const Buy = mongoose.model("buys", buy)

module.exports = Buy