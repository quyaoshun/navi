var path = require('path'),
	markdown = require('markdown').markdown

module.exports = {
	get: function(req, res, next){
		console.log(req.params.title)
		var blogpath = path.join('blogs/',req.params.title+'.md')
		console.log(blogpath)
		res.render(blogpath,{
			layout:false
		})
	}
}
