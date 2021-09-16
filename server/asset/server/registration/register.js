const express = require("express");
const cors = require("cors");
const app = express();

const Customer = require("../../../config/collection/Customer")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/", (request, response) => {
    let customer = new Customer({...request.body,type: "customer"})
    customer.save().then((data,err) =>{
		response.status(200).json(data);
	}).catch(err =>{
		if (err) response.status(400).json("Username that other User has already exist");
	})
});

module.exports = app;