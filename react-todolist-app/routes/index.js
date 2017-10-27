var express = require('express');
var router = express.Router();
var userModel = require('../models/usermodel');
var todolistModel = require('../models/todolistmodel');

router.get('/', function (req, res, next) {
    if (req) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        userModel.find({}, function (err, result) {
            res.send(result);
        })
    }
});

router.get('/getAllItems', function (req, res, next) {
    const doc = {
        username : req.body.username
    };
    console.log(req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","GET");
    res.send("callback("+JSON.stringify()+")");
});

module.exports = router; 
