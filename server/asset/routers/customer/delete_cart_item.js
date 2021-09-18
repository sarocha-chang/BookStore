const express = require("express");
const cors = require("cors");
const app = express.Router();

const Buy = require("../../../config/collection/Buy");
const Receipt = require("../../../config/collection/Receipt");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "DELETE",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.delete("/:id", (request, response) => {
	const { id } = request.params;
	Buy.findByIdAndDelete(id).then((buy) => {
		Receipt.findOneAndDelete({ Buy_id: id }).then((receipt) => {
			response.status(200).json({ buy, receipt });
		});
	});
});

module.exports = app;
