var Show = require('../models/show')
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
	show:{
		post: function(req, res){
			var show = {
				user: req.session.user,
				picture: req.body.picture,
				desc: req.body.desc
			}
		}
	},	
	list: function(req, res){
		res.render('list.html',{
			title:'list',
			layout:false
		})
	}
}
