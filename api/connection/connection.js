const mysql = require('mysql');
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
pool.getConnection(function (err) {
    if (err) {
        return console.log(err.message);
    } else {
        console.log("Database is Working!")
    }
});
module.exports = pool