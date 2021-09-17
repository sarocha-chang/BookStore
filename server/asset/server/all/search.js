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

app.get("/:keyword", async (request, response) => {
	const { keyword } = request.params
     let data = await Book.find()
     let find = data.filter(p =>(p.name.includes(keyword)))
     response.status(200).json(find);
});


module.exports = app;
