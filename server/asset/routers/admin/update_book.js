const express = require("express");
const cors = require("cors");
const app = express.Router();

const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "PUT",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.put("/:id", async (request, response) => {
	const { id } = request.params
	let book_update =await Book.findByIdAndUpdate(id , request.body, {new: true});
	// await Book.updateMany({id:2}, {quantity:0})

	response.status(200).json(book_update);
});

module.exports = app;
