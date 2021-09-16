/*const Book = require("../../config/collection/Book");
const Customer = require("../../config/collection/Customer");
const Buy = require("../../config/collection/Buy");
const Receipt = require("../../config/collection/Receipt");
array = [];

async function getCart(cus_id) {
	let receipt = await Receipt.find({ Customer_id: cus_id });
	receipt.forEach((data) => {
		let buy = await Buy.findById(data.Buy_id);
		let book = await Book.findById(buy.Book_id);
	});
	return receipt;
}

module.exports = getCart;*/
