var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var User     = mongoose.model('User');

module.exports = function backup(req, res) {
	var username = req.body.username
	var contacts = req.body.contacts

	User.findOne({username: username}, function (err, user) {
		if (err) {
			res.send({backup: false, err: '请重新登录'})
			return
		}

		for (contact in contacts) {
			user.contacts.push(contact)
		}

		User.update({username: username}, user.contacts, function (err, raw) {
			if (err) {
				res.send({backup: false, err: err})
				return
			}

			res.send({backup: true})
		})
	})
}