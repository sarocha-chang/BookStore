const Book = require("../../../config/model/Book");
const Customer = require("../../../config/model/Customer");
const Buy = require("../../../config/model/Buy");
const Receipt = require("../../../config/model/Receipt");

getReceipt = (id) => {
	return new Promise((resolve, reject) => {
		Receipt.find({ Customer_id: id }).then((list) => {
			if (list.length == 0) {
				reject("Not found Customer id");
			}
			list = list.map((data) => {
				return data.Buy_id;
			});
			resolve(list);
		});
	});
};

getBuy = (list) => {
	return new Promise((resolve, rejext) => {
		let buy = [];
		list.forEach((element, count) => {
			Buy.findById(element).then(({ id, Book_id, quantity, total }) => {
				buy.push({ Buy_id: id, Book_id, quantity, total });
				if (count + 1 == list.length) resolve(buy);
			});
		});
	});
};

getBooks = (list) => {
	return new Promise((resolve, reject) => {
		let book = [];
		list.forEach((element, count) => {
			Book.findById(element.Book_id).then(({ name, price, imageUrl }) => {
				book.push({
					Buy: {
						Buy_id: element._id,
						quantity: element.quantity,
						total: element.total,
					},
					Book: { name, price, imageUrl },
				});
				if (count + 1 == list.length) resolve(book);
			});
		});
	});
};

run = (id) => {
	return new Promise(async (resolve, reject) => {
		let list = await getReceipt(id);
		list = await getBuy(list);
		list = await getBooks(list);
		let Cart = {
			Customer: id,
			Order: list,
		};
		resolve(Cart);
	});
};

module.exports = run;
