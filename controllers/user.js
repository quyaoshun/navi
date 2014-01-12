var User = require('../dao').User
module.exports = {
    index: function(req, res, next) {
        return res.render('index', {
            title: '主页',
            layout: 'layout'
        })
        next()
    },
    getSignUp: function(req, res, next) {
        return res.render('signup', {
            title: '注册',
            layout: 'layout'
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
    getLogin: function(req, res, next) {
        return res.render('login', {
            title: '登录',
            layout: 'layout'
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
