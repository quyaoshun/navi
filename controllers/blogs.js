var path = require('path'),
	fs = require('fs'),
	markdown = require('markdown').markdown

module.exports = {
	getContent: function(req, res, next){
		var urlPath = path.join('blogs/',req.params.title+'.md'),
			filePath = path.normalize('views/'+urlPath)
				console.log(filePath)
		fs.exists(filePath, function(exists){
			if(!exists){
				next()
			}else{
				res.render(urlPath,{
					layout:false
				})
			}
		})
	},
	getList: function(req,res,next){
		res.render('bloglist.html',{
			title:"blog list",
			layout: 'layoutnew'
		})
	}
}
