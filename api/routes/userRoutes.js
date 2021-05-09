const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const checkAuth = require("../middleware/auth");//jwt file 


router.get('/testapi', (req, res) => { res.send('Welcome Ji!') });
router.get('/testauth', checkAuth, (req, res) => { res.send('Auth is working!') });

router.post("/c1", userController.login);
router.post("/c2", userController.signup);

module.exports = router