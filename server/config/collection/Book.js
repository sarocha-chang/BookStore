const mongoose = require("../database")
const Schema = mongoose.Schema

const book = new Schema({
    id: Number,
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    Image: String
})

const Book = mongoose.model("books", book)

module.exports = Book