const express = require("express");
const app = express();

const all = require("../src/routers/all")
const admin = require("../src/routers/admin")
const customer = require("../src/routers/customer")
const registration = require("../src/routers/registration")

app.use(express.json());

app.use("/", all)
app.use("/", admin)
app.use("/", customer)
app.use("/", registration)

module.exports = app;
