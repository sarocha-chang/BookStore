/*const Book = require("../../config/collection/Book");
const Customer = require("../../config/collection/Customer");
const Buy = require("../../config/collection/Buy");
const Receipt = require("../../config/collection/Receipt");

getBuy = (list) => {
	return new Promise((resolve) => {
		let buy = [];
		list.forEach((element, count) => {
			Buy.findById(element).then(({ id, Book_id, quantity, total }) => {
				buy.push({ Buy_id: id, Book_id, quantity, total });
				if (count + 1 == list.length) resolve(buy);
			});
		});
	});
};

getBook = (list) =>{
    return new Promise((resolve) => {
		let book = [];
		list.forEach((element, count) => {
			Book.findById(element.Book_id).then(({name ,price ,description, Image}) => {
				book.push({...element,Book :{name ,price ,description, Image}});
				if (count + 1 == list.length) resolve(book);
			});
		});
	})
}

run = (id) =>{
    return new Promise((resolve,reject) =>{
        Receipt.find({ Customer_id: id })
        .then((list) => {
            list = list.map((data) => {
                return data.Buy_id;
            });
            return list;
        })
        .then(async (list) => {
            list = await getBuy(list);
            list = await getBook(list);
            let Cart = {
                Customer : id,
                Order : list
            }
            resolve(Cart)
        });
    })
}

module.exports = run
