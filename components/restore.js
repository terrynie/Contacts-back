var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var User     = mongoose.model('User');

module.exports = function restore(req, res) {
	var username = req.body.username

	if (username == undefined) {
		res.send({restore: false, err: '用户不存在'})
		return
	}

	// 根据用户查询
	User.findOne({username: username}, function (err, user) {
		if (err) {
			res.send({restore: false, err: '账户异常，请重新登录或联系管理员'})
			return
		}

		if (user.contacts) {
			// 返回contacts
			if (user.contacts.length == 0) {
				res.send({restore: false, err: '云端联系人为空'})
			}else {
				res.send({restore: true})
			}
		}else {
			res.send({restore: false, err: '联系人不存在'})
		}

		
	})
}