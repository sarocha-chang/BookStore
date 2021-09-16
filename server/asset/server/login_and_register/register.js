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

app.post("/", async(request, response) => {
    let customer = new Customer(request.body)
    await customer.save(async (err,data) =>{
		if (err) response.status(400).json("Username that other User has already exist");
		response.status(200).json(data);
	})
});

module.exports = app;