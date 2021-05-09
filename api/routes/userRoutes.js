const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController')
router.post("/p1", userController.addProduct);

module.exports = router