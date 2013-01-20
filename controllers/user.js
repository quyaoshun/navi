var User = require('../models/user'),
	crypto = require('crypto'),
	initUser ={
		name: 'beforeload',
		password: 'wmdyd0318'
	}
module.exports = {
	reg: { 
		get:function (req, res) {
			res.render('reg.html', {
				title: '用户注册',
				user: req.session.user
			})
		},
		post: function(req,res){
			if(!req.body['username']){
				return res.redirect('/reg')	
			}
			if(!req.body['password']){
				return res.redirect('/reg')	
			}
			if(req.body['password']!=req.body['passwordconfirm']){
				return res.redirect('/reg')	
			}

			var md5 = crypto.createHash('md5'),
				password = md5.update(req.body.password).digest('base64')
				
				newUser = {
					name: req.body.username,
					password: password
				}

			User.find(newUser.name, function(err, user){
				if(user){
					console.log(user)
				}
				if(err){
					return res.redirect('/reg')	
				}

				User.save(newUser, function(err){
					if(err){
						return res.redirect('/reg')
					}
					req.session.user = newUser

					res.redirect('/')
				})
			})
		},
    },
    login:{
		get: function (req, res) {
			res.render('login.html', {
				title: '用户登录'
			})
		},
		post: function(req, res){
			return res.redirect('/')
		}
	},
	init: function(req, res){
		User.save(initUser, function(err){
			if(err){
				return res.redirect('/')
			}
			res.redirect('/')
		})
	},
	find: function(req,res){
		User.find(initUser.name, function(err,doc){
			res.json(doc)
		})
	}
}

