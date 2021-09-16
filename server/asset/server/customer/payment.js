const express = require("express");
const cors = require("cors");
const app = express();

const run = require("../../function/pay")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
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