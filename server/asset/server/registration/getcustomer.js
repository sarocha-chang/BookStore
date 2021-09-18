const express = require("express");
const cors = require("cors");
const app = express();

const Customer = require("../../../config/collection/Customer")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/", async(request, response) => {
	response.status(200).json(await Customer.find());
});

module.exports = app;
