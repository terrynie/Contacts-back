var mongoose = require('mongoose')

var ContactSchema = new mongoose.Schema({
	namePrefix: String,
	givenName : String,
	middleName: String,
	familyName: String,
	previousFamilyName: String,
	nameSuffix: String,
	nickName  : String,
	phoneticGivenName : String,
	phoneticMiddleName: String,
	phoneticFamilyName: String,
	orgamizationName  : String,
	departmentName    : String,
	jobTitle  : String,

	birthday  : Date,
	nonGregorianBirthday: Date,
	dates     : Date,
	
	phoneNumbers   : Array,
	urlAdresses    : Array,
	postalAdresses : Array,
	emailAddresses : Array,
	socialProfiles : Array

})

mongoose.model('User', UserSchema);