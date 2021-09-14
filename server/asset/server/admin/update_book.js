const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.put("/:id", async (request, response) => {

	await Book.updateOne(request.params , request.body);
	// await Book.updateOne({id: request.body.id} , request.body);
	// await Book.updateMany({id:2}, {quantity:0})

	response.status(200).json(await Book.find());
});

module.exports = app;
