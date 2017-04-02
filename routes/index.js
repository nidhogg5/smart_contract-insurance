var path = require('path');
var express = require('express');
var web3 = require('../web3.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public','index.html'));
});

router.get('/signin', function(req, res, next) {
  res.sendFile(path.resolve('public','sign_in.html'));
});

router.get('/signup', function(req, res, next) {
  res.sendFile(path.resolve('public','sign_up.html'));
});

router.get('/buy', function(req, res, next) {
  res.sendFile(path.resolve('public','buy.html'));
});

router.get('/agreement', function(req, res, next) {
  res.sendFile(path.resolve('public','agreement.html'));
});

router.get('/template', function(req, res, next) {
  res.sendFile(path.resolve('public','template.html'));
});

router.get('/newAccount', function(req, res, next) {
  res.sendFile(path.resolve('public','newAccount.html'));
  web3.personal.newAccount("123456");
  console.log("create a new account");
});
router.get('/deploy', function(req, res, next) {
  res.sendFile(path.resolve('public','deploy.html'));
  var contract = require('../contract.js');
  console.log("deploy the contract");
});
module.exports = router;
