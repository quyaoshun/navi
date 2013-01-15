var User = require('../models/user'),
	newUser ={
		email:'fe.daniel91@gmail.com',
		name: 'beforeload',
		password: 'wmdyd0318'
	}
module.exports = {
	reg: { 
		get:function (req, res) {
			res.render('reg', {
				title: '用户注册'
			})
		},
		post:  function(req,res){
			console.log(req.session)
			return res.redirect('/')
		},
    },
    login:{
		get: function (req, res) {
			res.render('login', {
				title: '用户登录'
			})
		},
		post: function(req, res){
			console.log(req.session)
			return res.redirect('/')
		}
	},
	init: function(req, res){
		User.save(newUser, function(err){
			if(err){
				return res.redirect('/')
			}
			res.redirect('/')
		})
	},
	find: function(req,res){
		User.find(newUser.name, function(err,doc){
			res.json(doc)
		})
	}
}

