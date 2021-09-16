const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/", async(request, response) => {
    let books = new Book(request.body)
    await books.save(async (err,data) =>{
		if (err) response.status(400).json("Bad Request");
		response.status(200).json(data);
	})
});

module.exports = app;