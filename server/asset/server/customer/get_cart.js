const express = require("express");
const cors = require("cors");
const app = express();

const getCart = require("../../function/getCart")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);


app.get("/:id", (request, response) => {
	const { id } = request.params;
    getCart(id).then((cart) =>{
        response.status(200).json(cart);
    }).catch(err =>{
        response.status(404).json(err);
    })
});

module.exports = app;
