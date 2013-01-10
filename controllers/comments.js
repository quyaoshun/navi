var User = require('../models/user.js')
exports.comment = function(req, res, next){
	var currentUser = req.session.user
		/*
		post = new Post(currentUser.name, req.body.post)
	post.save(function(err){
		if(err){
			req.flash('error', err) 
			return res.redirect('/')
		}

		req.flash('success', 'success!')
		res.redirect('/u/' + currentUser.name)
	})
*/
	next()
}
