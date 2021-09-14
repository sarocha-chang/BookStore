const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../config/collection/Book")

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
    await books.save((err) =>{
        if(err) throw err
    })
    // await Book.findOneAndDelete({id:1})
    // await Book.remove({id:1})
    // await Book.updateOne({id:1}, {quantity:50})
    // await Book.updateMany({id:2}, {quantity:0})
    
	response.status(200).json(await Book.find());
});

module.exports = app;