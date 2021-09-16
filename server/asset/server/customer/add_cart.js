const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book");
const Customer = require("../../../config/collection/Customer");
const Buy = require("../../../config/collection/Buy");
const Receipt = require("../../../config/collection/Receipt");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/", async (request, response) => {
	Book_id = request.body.Book_id;
	Customer_id = request.body.Customer_id;

	let book = await Book.findById(Book_id).catch((err) => {
		response.status(404).json("Not found!!");
	});

	if(book.quantity < request.body.quantity){
		response.status(400).json(`Stock not enough. there have this book = ${book.quantity}`)
	}else{
		let buy = new Buy({
			Book_id: book._id,
			quantity: request.body.quantity,
			total: request.body.quantity * book.price
		});
		let buy_success = await buy.save()
	
		let receipt = new Receipt({
			Customer_id : Customer_id,
			Buy_id : buy_success._id
		})
	
		await receipt.save().then((data) =>{
			response.status(200).json(data);
		})
	}
});

module.exports = app;
