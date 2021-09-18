const Book = require("../../config/model/Book")

module.exports = {
    show: async(request, response) => {
        response.status(200).json(await Book.find());
    },
    show_detail: async (request, response) => {
        const { id } = request.params
        response.status(200).json(await Book.findById(id).catch((err) =>{
            if (err) response.status(400).json("Bad Request");
        }));
    },
	search: async (request, response) => {
        const { keyword } = request.params
         let data = await Book.find()
         let find = data.filter(p =>(p.name.includes(keyword)))
         response.status(200).json(find);
    },
}