const express = require("express");
const cors = require("cors");
const app = express.Router();

const run = require("../../controller/pay")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "PUT",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.put("/:id", async(request, response) => {
	const { id } = request.params
	let x = await run(id)
	response.status(200).json(x);
});

module.exports = app;