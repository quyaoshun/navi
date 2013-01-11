
exports.index = function(req,res){
	res.render('index',{
		title:'home',
		user: req.session.user,
		success: req.flash('success').toString(),
        error: req.flash('error').toString(),	
		layout:'layout'
	})
}
