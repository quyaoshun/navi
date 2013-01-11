var crypto = require('crypto')

exports.account = {
    reg: function (req, res) {
        res.render('reg', {
            title: '用户注册',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        })
    },
    login: function (req, res) {
        res.render('login', {
            title: '用户登录',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        })
    }
}

