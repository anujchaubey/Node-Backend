const express = require('express');
const index = require("./api/routes/userRoutes");
const helmet = require("helmet"); //npm install helmet
require('dotenv').config() //npm install dotenv this is for env file
var app = express()
var cors = require("cors");
app.use(cors());
// -------------------------------
let jsonParser = express.json();
app.use(jsonParser)
// var bodyParser = require('body-parser'); //no need for body-parser
// var jsonParser = bodyParser.json()
// -------------------------------

//security purpose---------helmet
app.use(helmet());
app.use(
    helmet({
        referrerPolicy: { policy: "no-referrer" },
    })
);
//-----end helmet----------------

// -----------------Public access folde-------------
app.use('/api', express.static('foldername'));
// -----------------Public access folde-------------


let port = process.env.PORT




app.use("/api", jsonParser, index);
app.listen(port, () => {
    console.log("Server is Running on Port", port);
});