const mongoose = require("../database")
const Schema = mongoose.Schema

const receipt = new Schema({
    Customer_id: Number,
    Buy_id: Number
})

const Receipt = mongoose.model("receipts", receipt)

module.exports = Receipt