const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema

mongoose.connect(
	"mongodb://localhost:27017/Bookstore",
	{ useNewUrlParser: true },
	(err) => {
		if (err) throw err;
	}
);

const book = new Schema({
    id: Number,
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    Image: String
})
const Book = mongoose.model("Book", book)


app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/", async(request, response) => {
    let books = new Book({
        id: 2,
        name: "String",
        price: 60,
        quantity: 2,
        description: "String",
        Image: "String"
    })
    // await books.save()
    // await Book.findOneAndDelete({id:1})
    // await Book.remove({id:1})
    // await Book.updateOne({id:1}, {quantity:50})
    // await Book.updateMany({id:2}, {quantity:0})
    
	response.status(200).json(await Book.find());
});

module.exports = app;
