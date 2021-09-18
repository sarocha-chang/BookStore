const express = require("express");
const cors = require("cors");
const app = express();


const Customer = require("../../../config/collection/Customer")

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "POST",
		optionsSuccessStatus: 200,
		allowedHeaders: "Content-type",
	}),
);

app.post("/", (request, response) => {
	let {firstname, lastname,username, password,phone,email} = request.body
    if(firstname == "" || lastname == "" || username == "" || password == "" || phone == "" || email == ""){
		response.status(400).json({
			status: "FAILED",
			message: "Empty inputs fields"
		})

	}else if(!/^[a-zA-Z ]*$/.test(firstname) || !/^[a-zA-Z ]*$/.test(lastname)){
		response.status(400).json({
			status: "FAILED",
			message: "Invalid firstname or lastname  entered"
		})
	}else if(password.length < 8){
		response.status(400).json({
			status: "FAILED",
			message: "Password is short"
		})

	}else if(!/^[0][689]\d{8}/.test(phone)){
		response.status(400).json({
			status: "FAILED",
			message: "tel incorrect"
		})

	}else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
		response.status(400).json({
			status: "FAILED",
			message: "Invalid email entered"
		})
	}else{
		let customer = new Customer({...request.body,type: "customer"})
		customer.save().then((data,err) =>{
			response.status(200).json(data);
		}).catch(err =>{
			if (err) response.status(400).json("Username that other User has already exist");
		})
	}
   
});

module.exports = app;