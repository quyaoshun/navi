var User = require('../dao').User
module.exports = {
    index: function(req, res, next) {
        res.render('index', {
            title: 'Reading List',
            layout: 'layout'
        })
    },
    showSignUp: function(req, res, next) {
        return res.json({
            code: 200,
            msg:'success'
        })
        next()
    },
    signUp: function(req, res, next) {
        return res.json({
            code: 200,
            msg:'success'
        })
        next()
    },
    showLogin: function(req, res, next) {
        return res.json({
            code: 200,
            msg:'success'
        })
        next()
    },
    login: function(req, res, next) {
        return res.json({
            code: 200,
            msg:'success'
        })
        next()
    },
    logout: function(req, res, next) {

    },
    checkLogin: function(req, res, next) {
        if (req.session.user) {
            req.flash('message', '未登录')
            return res.redirect('/login')
        }
        next()
    },
    checkNotLogin: function(req, res, next) {
        if (!req.session.user) {
            res.flash('message', '已登录')
            return res.redirect('/')
        }
        next()
    }
}
