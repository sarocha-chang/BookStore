const express = require("express");
const cors = require("cors");
const app = express.Router();

const allControllers = require("../controller/all")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/show",allControllers.show);
app.get("/show_detail/:id",allControllers.show_detail);
app.get("/search/:keyword",allControllers.search);

module.exports = app;