const express = require("express");
const app = express.Router();

const customerControllers = require("../controller/customer")

app.post("/add_cart",customerControllers.add_cart);
app.put("/change_quantity_in_cart/:id",customerControllers.change_quantity_in_cart);
app.delete("/delete_cart_item/:id",customerControllers.delete_cart_item);
app.get("/get_cart/:id",customerControllers.get_cart);
app.post("/payment",customerControllers.payment);

module.exports = app;