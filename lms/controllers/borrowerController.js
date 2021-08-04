var routes = require('express').Router();
var db = require('../dao/db');
var borrowerdao = require('../dao/borrowerDao');

routes.get('/borrower',function (req,res) {
    borrowerdao.getAllBorrowers(function (error,result) {
        if(error)throw error
        res.setHeader('Content-Type','application/json');
        res.send(result);

    })
});

module.exports = routes;
