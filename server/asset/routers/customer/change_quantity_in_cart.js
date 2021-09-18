const express = require("express");
const cors = require("cors");
const app = express.Router();

const Buy = require("../../../config/collection/Buy");
const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "PUT",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.put("/:id", (request, response) => {
	const { id } = request.params;
	Buy.findById(id).then((buy =>{
		Book.findById(buy.Book_id).then((book) =>{
			if(book.quantity >= request.body.quantity){
				Buy.findByIdAndUpdate(id, {quantity : request.body.quantity},{new: true}).then((data =>{
					response.status(200).json(data);
				})).catch(err =>{
					if (err) response.status(400).json("Bad Request");
				})
			}else{
				response.status(400).json(`Stock not enough. there have this book = ${book.quantity}`)
			}
		}).catch((err) =>{
			if (err) response.status(400).json("Bad Request");
		})
	})).catch((err) =>{
        if (err) response.status(400).json("Bad Request");
    })
	// Buy.findByIdAndUpdate(id).then((buy) => {
	// 	response.status(200).json(buy);
	// });
});

module.exports = app;