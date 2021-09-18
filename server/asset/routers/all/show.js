const express = require("express");
const cors = require("cors");
const app = express.Router();

const Book = require("../../../config/collection/Book")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/", async(request, response) => {
	response.status(200).json(await Book.find());
});

module.exports = app;
