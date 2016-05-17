var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function signin(req, res) {
	//获取注册用户信息
	var username    = req.body.username
	var password    = req.body.password   
	//创建用户模型
	var user = new User({   
		username    : username,   
		password    : password,    
	})
	User.find({username : username, password : password}, function (err, count) {
		if (err) {
			res.send({login: false, err: err})
			return
		}

		if (count != 1) {
			res.send({login: false, err: '用户不存在'})
			return
		}else {
			// 返回响应到客户端   
			res.send({login: true})
		}
	})
}