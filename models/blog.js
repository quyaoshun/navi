var mongoose = require('mongoose'),
	Comments = new Schema({
		title: String,
		body: String,
		data: Date
	}),
	BlogPost = new Schema({
		author: ObjectId,
		title: String,
		body: String,
		date: Date,
		comments: [Comments],
		meta: {
			votes: Number,
			favs: Number
		}
	})

mongoose.model('BlogPost',BlogPost)
