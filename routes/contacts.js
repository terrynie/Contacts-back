var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

// 备份添加联系人
router.post('/backupByAdd', function(req, res, next) {
	var backupByAdd = require('../components/backupByAdd.js')
	backupByAdd(req,res)
})

// 备份所有联系人
router.post('/backupAll', function(req, res, next) {
	var backupAll = require('../components/backupAll.js')
	backupAll(req,res)
})

//恢复联系人
router.post('/restore', function(req, res, next) {
	var restore = require('../components/restore.js')
	restore(req,res)
})

module.exports = router