const express = require("express");
const cors = require("cors");
const app = express.Router();

const adminControllers = require("../controller/admin")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST,DELETE,UPDATE",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/add_book",adminControllers.add_book);
app.delete("/delete_book/:id",adminControllers.delete_book);
app.put("/update_book/:id",adminControllers.add_book);

module.exports = app;