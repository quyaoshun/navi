var User = require('../dao').User,
    validator = require('validator'),
    crypto = require('crypto')
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
            console.log(req.body.name)
            var md5 = crypto.createHash('md5'),
                name = req.body.name.toString().trim(),
                email = req.body.email.toString().trim(),
                passwd = req.body.password.toString().trim(),
                repeatPasswd = req.body.repeatPassword.toString().trim(),
                resJson = {
                    code: 400,
                    msg: 'example',
                    usrInfo: {
                        email: 'example@example.com',
                        name: 'example'
                    }
                }
            if (name === '' || email === '' || passwd === '' || repeatPasswd === '') {
                resJson.msg = '信息不完整'
                return res.json(resJson)
            }
            User.getUsersByQuery({
                '$or': [{ 'name': name }, { 'email': email }]
            }, {}, function(err, users) {
                if (err) {
                    return next(err)
                }
                if (user.length > 0) {
                    resJson.msg = '用户名或邮箱被占用'
                    return res.json(resJson)
                }

                passwd = md5.update(passwd).digest('base64')
                var user = new User({
                    name: name,
                    email: email,
                    password: passwd
                })
                User.saveNewUser(user, function(err) {
                    if (err) {
                        return next(err)
                    }

                    return res.json({
                        code: 200,
                        msg: '注册成功',
                        usrInfo: {
                            email: email,
                            name: name
                        }
                    })
                })
            })
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
                msg: 'success'
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
