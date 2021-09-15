const express = require("express");
const app = express();

const show = require("../asset/server/all/show");
const search = require("../asset/server/all/search");
const show_detail = require("../asset/server/all/show_detail");
const add_book = require("../asset/server/admin/add_book");
const delete_book = require("../asset/server/admin/delete_book");
const update_book = require("../asset/server/admin/update_book");

app.use(express.json());

app.use("/show", show);
app.use("/add_book", add_book);
app.use("/delete_book", delete_book);
app.use("/update_book", update_book);
app.use("/show_detail", show_detail);
app.use("/search", search);

module.exports = app;
