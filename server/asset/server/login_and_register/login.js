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

app.post("/", async(request, response) => {
    const { username, password } = request.body
    console.log(username,password)

  const user = await Customer.findOne({
    username,
    password
  })
  if (user) {
    response.status(200).json(user);
  } else {
      let message = {message: 'Email or Password incorrect'}
    response.status(200).end(JSON.stringify(message));
  }
   
});

module.exports = app;