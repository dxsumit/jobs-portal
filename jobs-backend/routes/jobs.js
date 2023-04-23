
const router = require("express").Router();
require("dotenv").config();
const {check, validationResult} = require('express-validator'); // middleware for validation of fields..
const mongoose = require("mongoose");


router.get('/', (req,res) => {
    res.status(400).json({status: "success", msg: "This is jobs api"}); 
});



module.exports = router



