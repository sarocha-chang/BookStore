const express = require("express");
const app = express.Router();

const registrationControllers = require("../controller/registration")

app.get("/showCustomer",registrationControllers.showCustomer);
app.get("/login",registrationControllers.login);
app.post("/register",registrationControllers.register);

module.exports = app;