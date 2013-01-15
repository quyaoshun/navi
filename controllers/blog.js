exports.create ={
	init: function (req, res) {
		res.render('blog', {
			title: 'Create',
			layout: 'layout'
		})
		console.log(req.session)
	},
	publish: function(req,res, next){
		console.log(req.body.title)
		console.log(req.body.content)
		return res.redirect('/')
		next()
	}
}
