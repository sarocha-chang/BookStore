const express = require("express");
const app = express();

const show = require("../asset/server/all/show");
const search = require("../asset/server/all/search");
const show_detail = require("../asset/server/all/show_detail");

const add_book = require("../asset/server/admin/add_book");
const delete_book = require("../asset/server/admin/delete_book");
const update_book = require("../asset/server/admin/update_book");

const add_cart = require("../asset/server/customer/add_cart")
const get_cart = require("../asset/server/customer/get_cart")
const payment = require("../asset/server/customer/payment")
const delete_cart_item = require("../asset/server/customer/delete_cart_item")
const change_quantity_in_cart = require("../asset/server/customer/change_quantity_in_cart")

const register = require("../asset/server/registration/register")
const login = require("../asset/server/registration/login")
const showCustomer = require("../asset/server/registration/getcustomer")


app.use(express.json());

app.use("/show", show);
app.use("/show_detail", show_detail);
app.use("/search", search);

app.use("/add_book", add_book);
app.use("/delete_book", delete_book);
app.use("/update_book", update_book);

app.use("/add_cart", add_cart);
app.use("/get_cart", get_cart);
app.use("/payment", payment);
app.use("/delete_cart_item",delete_cart_item)
app.use("/change_quantity_in_cart",change_quantity_in_cart)

app.use("/register",register)
app.use("/login",login)
app.use("/showCustomer",showCustomer)


module.exports = app;
