const express = require("express");
const app = express.Router();

const adminControllers = require("../controller/admin")

app.post("/add_book",adminControllers.add_book);
app.delete("/delete_book/:id",adminControllers.delete_book);
app.put("/update_book/:id",adminControllers.add_book);

module.exports = app;