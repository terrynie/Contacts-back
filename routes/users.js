var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log('post');
  var headers = req.headers
  var username = req.body.username
  console.log(username)
  res.send(username)
});

router.post('/signin', function(req, res, next) {
	var signin = require('../components/signin.js')
	signin(req,res)
})

router.post('/login', function(req, res, next) {
  var login = require('../components/login.js')
  login(req, res)
});

router.get('/test', function(req, res, next) {
  User.update({username: 'terry'}, {password: '456'}, function (err, raw) {
    if (err) {
      res.send(err)
      return
    }
    console.log(raw);
  })

});

module.exports = router;
