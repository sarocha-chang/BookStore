const express = require("express");
const cors = require("cors");
const app = express.Router();

const registrationControllers = require("../controller/registration")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/showCustomer",registrationControllers.showCustomer);
app.get("/login",registrationControllers.login);
app.post("/register",registrationControllers.register);

module.exports = app;