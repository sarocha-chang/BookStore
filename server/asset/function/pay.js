const Book = require("../../config/collection/Book");
const Customer = require("../../config/collection/Customer");
const Buy = require("../../config/collection/Buy");
const Receipt = require("../../config/collection/Receipt");

getReceipt = (id) =>{
    return new Promise( async(resolve, reject) => {
        let receipt = Receipt.find({Customer_id: id})
        resolve(receipt)
	});
}

getBuy = (receipt) =>{
    return new Promise( async(resolve, reject) => {
        let buys = []
        receipt.forEach(async({Buy_id},count) => {
            let buy = await Buy.findById(Buy_id)
            buys.push(buy)
            if(count+1 == receipt.length) resolve(buys)
        });
	});
}

getBook = (buy) =>{
    return new Promise( async(resolve, reject) => {
        let books = []
        buy.forEach(async({Book_id},count) => {
            let book = await Book.findById(Book_id)
            books.push(book)
            if(count+1 == buy.length) resolve(book)
        });
	});
}

pay = () =>{
    return new Promise(async(resolve,reject) =>{

    })
}

run = (id) => {
	return new Promise(async(resolve, reject) => {
        let Receipt = await getReceipt(id)
        let Buy = await getBuy(Receipt)
        let Book = await getBook(Buy)
        let Pay = await pay([Receipt,Buy,Book])
        resolve({Receipt,Buy,Book})
	});
};

module.exports = run;