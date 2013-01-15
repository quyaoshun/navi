var crypto = require('crypto')

exports.account = {
    regInit: function (req, res) {
        res.render('reg', {
            title: '用户注册'
        })
    },
	regPost: function(req,res){
		console.log(req.session)
		return res.redirect('/')
	},
    loginInit: function (req, res) {
        res.render('login', {
            title: '用户登录'
        })
    },
	loginPost: function(req,res){
		console.log(req.session)
		return res.redirect('/')
	}
}

