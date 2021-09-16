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


app.get("/:id", async(request, response) => {
	const { id } = request.params;
    let cart = await getCart(id)
    response.status(200).json(cart);
});

module.exports = app;
