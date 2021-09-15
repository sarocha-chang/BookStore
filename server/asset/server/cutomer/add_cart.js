const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book")
const Customer = require("../../../config/collection/Customer")
const Buy = require("../../../config/collection/Buy")
const Receipt = require("../../../config/collection/Receipt")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/", async(request, response) => {
	let count = await Book.count()
    let books = new Book({id: count+1, ...request.body})

    await books.save(async (err) =>{
		if (err) response.status(400).json("Bad Request");
		response.status(200).json(await Book.find({id: count+1}));
	})
});

module.exports = app;