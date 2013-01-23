var mongoose = require('mongoose'),
	db.require('./db'),
	Schema = mongoose.Schema,
	ShowSchema = new Schema({
		picUrl: String,
		desc: String,
		userName:{
			type:String,
			index:true
		},
		time: {
			type:Date,
			default:Date.now()
		}
	})

db.model('Show',ShowSchema)

var Show = db.model('Show')

function Shows(username,show,time){
	this.username = username
	this.show = show
	this.time = time
}

module.exports = {
	save: function(){},
	find: function(){}
}
