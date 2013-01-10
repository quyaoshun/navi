var User = require('../models/user.js'),
	Post = require('../models/post.js')
exports.index = function(req,res,next){
	Post.get(null, function(err, posts){
		if(err){
			posts = []
		}
		res.render('index',{
			title:'home',
			user: req.session.user,
			posts:posts,
			success:req.flash('success').toString(),
			layout:'layout'
		})
	})
	next()
}
