var Show = require('../models/show'),
	fs = require('fs')
module.exports = {
    index: function(req, res) {
		return res.redirect('/navi')
    },
    navi: function(req, res) {
		Show.allShowsFind(function(err,shows){
			if(err){
				shows = []	
			}
			console.log(req.session)
			res.render('navi.html', {
				title: '商务前端导航页面',
				user: req.session.user,
				shows: shows,
				layout:'layout'
			})
		})
    },
	shows:{
		post: function(req, res,next){
			var tmpPath = req.files.picture.path
				targetPath = './public/images/'+ req.files.picture.name.toLocaleLowerCase() + Date.now()
			fs.rename(tmpPath, targetPath, function(err){
				if(err){
					throw err
				}
				fs.unlink(tmpPath,function(){
					if(err){
						throw err
					}
				})
			})
			var show = {
				user: req.session.user,
				picture: targetPath,
				desc: req.body.description
			}
			Show.save(show,function(err){
				if(err){
					return res.redirect('/shows')
				}
				res.redirect('/')
			})
		},
		get: function(req, res){
			res.render('shows.html',{
				title:'picture upload',
				layout:'layout'
			})
		}
	},
	list: function(req, res){
		res.render('list.html',{
			title:'list',
			layout:false
		})
	}
}
