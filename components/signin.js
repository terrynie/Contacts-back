var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function signin(req, res) {
	//获取注册用户信息
	var username    = req.body.username
	var password    = req.body.password   
	var phoneNumber = req.body.phoneNumber
	var email       = req.body.email
	//创建用户
	var user = new User({   
		username    : username,   
		password    : password,   
		phoneNumber : phoneNumber,
		email       : email      
	})

	User.count({username: username}, function (err, count) {
		//查询错误
		if (err) {
			res.send({signin: false, err: err})
			return
		}
		//用户存在
		if (count != 0) {
			res.send({signin: false, err: "user existed"})
			return
		}else {
			User.count(function (err, count) {
				//查询错误
				if (err) {
					res.send({signin: false})
					return
				}

				user.uid = count + 10001    //用户uid从10001开始
				user.signInDate = new Date()

				// 注册成功，写入数据库
				user.save(function(err){
					//写入数据库失败
					if (err) {
						res.send({signin: false, err: err})
						return
					}
					// 返回响应到客户端   
					res.send({signin: true})
				})
			})
		}
	})
	
}
