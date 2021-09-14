const express = require("express")
const app = express()
const get = require("../asset/server/get")

app.use(express.json())
app.use("/get",get)

module.exports = app

