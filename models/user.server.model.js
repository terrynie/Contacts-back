var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	uid: Number,
	username: String,
	password: String,
	phoneNumber: String,
	email: String,
	signInDate: Date,
	contacts: Array
})

mongoose.model('User', UserSchema);