const express = require("express");
const cors = require("cors");
const app = express();

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
	response.status(200).json(await Book.find({ id: parseInt(request.params.id) }).catch((err) =>{
        if (err) response.status(400).json("Bad Request");
    }));
});

module.exports = app
