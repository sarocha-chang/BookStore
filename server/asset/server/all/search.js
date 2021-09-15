const express = require("express");
const cors = require("cors");
const app = express();

const Book = require("../../../config/collection/Book");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.get("/:name", async (request, response) => {
    let data = await Book.find()
    let array = [...request.params.name]
    let name = ""
    let store = []
    array.forEach((intel,count) =>{
        name += intel
        for(let obj of data){
            for(let index = 1;index<=obj.name.length;index++){
                let name_obj = obj.name.substring(0,index)
                if(name_obj == name){
                    store.push(obj)
                    break;
                }
            }
        }
    })
    store.map((data) =>{
        
    })
	response.status(200).json();
});

// search = (item) => {
// 	if (item) {
//         let array = []
//         let x = stock.entries();
//         stock.forEach(() =>{
//             let y = x.next().value
//             array.push(y)
//         })
//         array = array.filter((data) =>{
//             length = item.length
//             let y = data[0].substring(0,length)
//             return item == y
//         })
//         if(array.length > 0) array = [`found ${array.length} item`,array]
//         else if(array.length === 0) array = ['Not found','Not found']
//         console.log(array);
// 		return array
// 	} else {
// 		text = "Please input item.";
// 		return text;
// 	}
// };

module.exports = app;
