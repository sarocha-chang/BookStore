const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost:27017/Bookstore",
	{ useNewUrlParser: true },
	(err) => {
		if (err) throw err;
	},
);

module.exports = mongoose
