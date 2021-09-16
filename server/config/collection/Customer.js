const mongoose = require("../database")
const Schema = mongoose.Schema

const Customers = require("../../config/json/customer.json");

const customer = new Schema({
    firstname: String,
    lastname: String,
    username:{type: String , unique: true},
    password: String,
    phone: String,
    email: String
})

const Customer = mongoose.model("customers", customer)

const saveCustomer = async () => {
	if (0 == (await Customer.find())) await Customer.insertMany(Customers);
};
saveCustomer();

module.exports = Customer