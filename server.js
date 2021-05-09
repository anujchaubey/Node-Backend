const express = require('express');
const index = require("./api/routes/userRoutes");

var app = express()
var cors = require("cors");
app.use(cors());

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use("/api", jsonParser, index);

app.listen(3000, () => {
    console.log("Server is Running");
});