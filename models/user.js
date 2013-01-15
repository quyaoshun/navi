var mongoose = require('mongoose'),
	db = require('./db'),
	Schema = mongoose.Schema,
	UserSchema = new Schema({
		email: String,
		name: String,
		password: String
	}),
	User = db.model('User',UserSchema)
module.exports = {
	save: function(user,callback){
		var newUser = new User()		  
		newUser.email = user.email
		newUser.name = user.name
		newUser.password = user.password

		newUser.save(function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
	},
	find: function(userName, callback){
		User.find({name: userName}, function(err, doc){
			if(err){
				return callback(err, null)	
			}
			callback(null, doc)
		})
	}
}
