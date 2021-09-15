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

app.get("/:name", async (request, response) => {
     console.log(request.params.name)
     let x = await Book.find()
     let find = x.filter(p =>(p.name.includes(request.params.name)))
     console.log(find)
     response.status(200).json(find);
});


module.exports = app;
