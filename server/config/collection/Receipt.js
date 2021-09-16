const mongoose = require("../database")
const Schema = mongoose.Schema

const receipt = new Schema({
    Customer_id: String,
    Buy_id: String
})

const Receipt = mongoose.model("receipts", receipt)

module.exports = Receipt