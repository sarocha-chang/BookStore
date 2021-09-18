const express = require("express");
const cors = require("cors");
const app = express();

const all = require("../src/routers/all")
const admin = require("../src/routers/admin")
const customer = require("../src/routers/customer")
const registration = require("../src/routers/registration")

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,DELETE,PUT",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.use("/", all)
app.use("/", admin)
app.use("/", customer)
app.use("/", registration)

module.exports = app;
