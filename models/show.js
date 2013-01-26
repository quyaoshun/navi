var mongoose = require('mongoose'),
	db = require('./db'),
	Schema = mongoose.Schema,
	ShowSchema = new Schema({
		username:{
			type:String,
			index:true
		},
		url: String,
		picture: String,
		desc: String,
		time: {
			type:Date,
			default:Date.now()
		}
	})

db.model('Show',ShowSchema)

var Show = db.model('Show')

function Shows(username,url,picture,desc,time){
	this.username = username
	this.url = url
	this.picture= picture 
	this.desc = desc
	this.time = time
}

module.exports = {
	save: function(show,callback){
		var newShow= new Show()
		newShow.username = show.user.name
		newShow.url = show.url
		newShow.picture = show.picture
		newShow.desc = show.desc
		console.log(newShow)
		newShow.save(function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
	},
	allShowsFind: function(callback){
		Show.find().sort('-_id').exec(function(err,docs){
			if(err){
				return callback(err,null)
			}
			var shows = []
			docs.forEach(function(doc){
				var show = new Shows(doc.username,doc.url,doc.picture,doc.desc,doc.time)
				shows.push(show)
			})
			callback(null,shows)
		})
	},
	userShowsFind: function(callback){
		Post.find({userName:userName}).sort('-_id').exec(function(err,docs){
			if(err){
				return callback(err,null);
			}
			var shows=[]
			docs.forEach(function(doc){
				var show = new Shows(doc.username,doc.url,doc.picture,doc.desc,doc.time)
				shows.push(show)
			})
			callback(null,shows)
		})
	}
}
