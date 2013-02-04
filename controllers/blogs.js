var path = require('path'),
	fs = require('fs'),
	markdown = require('markdown').markdown

module.exports = {
	get: function(req, res, next){
		var urlPath = path.join('blogs/',req.params.title+'.md'),
			filePath = path.normalize('./'+urlPath)
				console.log(filePath)
		/*fs.exists(filePath, function(exists){
			console.log(exists)
			if(!exists){
				next()
			}else{
				res.render(urlPath, {
					layout:false
				})
			}
		})*/
		res.render(urlPath,{
			layout:false
		})
	}
}
