var crypto = require('crypto')

exports.account = {
    reg: function (req, res) {
        res.render('reg', {
            title: '用户注册'
        })
    },
    login: function (req, res) {
        res.render('login', {
            title: '用户登录'
        })
    }
}

