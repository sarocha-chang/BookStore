const express = require("express");
const app = express();
const get = require("../asset/server/get");
const post = require("../asset/server/post");

app.use(express.json());
app.use("/get", get);
app.use("/post", post);

module.exports = app;
