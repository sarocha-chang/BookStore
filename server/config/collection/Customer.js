const mongoose = require("../database")
const Schema = mongoose.Schema

const customer = new Schema({
    id: Number,
    firstname: String,
    lastname: String,
    address: String,
    phone: String,
    email: String
})

const Customer = mongoose.model("customers", customer)

module.exports = Customer