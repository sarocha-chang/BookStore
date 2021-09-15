const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "DELETE",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.delete("/:id", async (request, response) => {
	// await Book.findOneAndDelete({ id: request.params });
	await Book.remove()
	response.status(200).json(await Book.find());
});

module.exports = app;
