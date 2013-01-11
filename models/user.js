var mongoose = require('mongoose'),
	db = require('./db'),

	Schema = mongoose.Schema,
	UserSchema = new Schema({
		name: String,
		password: String
	})

	db.model('User',UserSchema)

	var User = db.model('User')

exports.user = {
	save: function(user,callback){
			var newUser = new User()
				newUser.name = user.name
				newUser.password = user.password
				newUser.save(function(err){
					if(err){
						return callback(err)
					}
					callback(null)
				})
		  },
	find: function(username,callback){
			User.findOne({
				name: username
			},function(err, doc){
				if(err){
					return callback(err,null)
				}
				callback(null, doc)
			})
		  }
}
