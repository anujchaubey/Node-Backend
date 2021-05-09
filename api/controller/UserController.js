const modelUser = require("../model/UserModel");
const base64 = require("../base64image/base64") //for image
const foldername = "foldername"; //storeimgfolderpath
const jwt = require('jsonwebtoken'); //npm i jsonwebtoken

module.exports = {
    signup: async (req, res) => {
        try {
            let resultinsert = await modelUser.signUpuser(req.body);
            if (resultinsert.affectedRows == 1) {
                return res.status(200).send({ success: true, responseMessage: "User Added Successfully" })
            } else {
                return res.status(400).send({ success: false, responseMessage: "User Added Failed" })
            }
        } catch (error) {
            return res.status(500).send({ success: false, response: error.message })
        }
    },
    login: async (req, res) => {
        try {
            let resultinsert = await modelUser.loginUser(req.body);
            if (resultinsert.affectedRows == 1) {
                jwt.sign({ resultinsert }, 'anujchaubey', { expiresIn: '1h' }, (error, token) => {
                    res.json({
                        responseMessage: "Login Successfully :)",
                        responseCode: "200",
                        token,
                        resultinsert
                    });
                });
                // return res.status(200).send({ success: true, responseMessage: "Login Successfully", response: resultinsert })
            } else {
                return res.status(400).send({ success: false, responseMessage: "Login Failed" })
            }
        } catch (error) {
            return res.status(500).send({ success: false, response: error.message })
        }
    },

}