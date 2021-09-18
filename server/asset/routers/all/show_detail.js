const express = require("express");
const cors = require("cors");
const app = express.Router();

const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/:id", async (request, response) => {
	const { id } = request.params
	response.status(200).json(await Book.findById(id).catch((err) =>{
        if (err) response.status(400).json("Bad Request");
    }));
});

module.exports = app
