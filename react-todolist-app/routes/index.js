var express = require('express');
var router = express.Router();
var userModel = require('../models/usermodel');
var todolistModel = require('../models/todolistmodel');

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

router.get('/', function (req, res, next) {
    if (req) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        userModel.find({}, function (err, result) {
            res.send({ 'data': data.username });
        })
    }
    next();
});

router.post('/getAllItems', function (req, res, next) {
    console.log(req.body.username);
    if(req.body.username){
        todolistModel.find({owns:req.body.username},function(err,result){
            res.send(result);            
        })
    }
});

module.exports = router; 
