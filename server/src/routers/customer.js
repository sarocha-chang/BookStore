const express = require("express");
const cors = require("cors");
const app = express.Router();

const customerControllers = require("../controller/customer")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/add_cart",customerControllers.add_cart);
app.put("/change_quantity_in_cart/:id",customerControllers.change_quantity_in_cart);
app.delete("/delete_cart_item/:id",customerControllers.delete_cart_item);
app.get("/get_cart/:id",customerControllers.get_cart);
app.put("/payment/:id",customerControllers.payment);

module.exports = app;