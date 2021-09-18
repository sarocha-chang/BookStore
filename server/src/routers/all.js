const express = require("express");
const app = express.Router();

const allControllers = require("../controller/all")

app.get("/show",allControllers.show);
app.get("/show_detail/:id",allControllers.show_detail);
app.get("/search/:keyword",allControllers.search);

module.exports = app;