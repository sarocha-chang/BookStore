const Book = require("../../config/model/Book")

module.exports = {
	add_book: async(request, response, next) => {
		let books = new Book(request.body)
		await books.save(async (err,data) =>{
			if (err) response.status(400).json("Bad Request");
			response.status(200).json(data);
		})
	},
    delete_book: async (request, response, next) => {
        const { id } = request.params
        await Book.findByIdAndDelete(id);
        // await Book.remove()
        
        response.status(200).json(await Book.find());
    },
    update_book: async (request, response, next) => {
        const { id } = request.params
        let book_update =await Book.findByIdAndUpdate(id , request.body, {new: true});
        // await Book.updateMany({id:2}, {quantity:0})
    
        response.status(200).json(book_update);
    }
}