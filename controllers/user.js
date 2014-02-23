var User = require('../dao').User,
    validator = require('validator'),
    Mail = require('../service/mail'),
    crypto = require('crypto')
    module.exports = {
        index: function(req, res, next) {
            return res.render('index.html', {
                title: '主页'
            })
            next()
        },
        getSignUp: function(req, res, next) {
            return res.render('user/signup.html', {
                title: '注册'
            })
            next()
        },
        signUp: function(req, res, next) {
            var md5 = crypto.createHash('md5'),
                name = req.body.name.toString().trim(),
                email = req.body.email.toString().trim(),
                passwd = req.body.password.toString().trim(),
                repeatPasswd = req.body.repeatPassword.toString().trim(),
                resJson = {
                    code: 400,
                    msg: 'example',
                    usrInfo: {
                        email: email,
                        name: name
                    }
                }
            if (!name || !email || !passwd || !repeatPasswd) {
                resJson.msg = '信息不完整!'
                return res.json(resJson)
            }
            if (!validator.isAlphanumeric(name)) {
                resJson.msg = '用户名只能为字母或数字!'
                return res.json(resJson)
            }
            if (!validator.isEmail(email)) {
                resJson.msg = '邮箱不正确!'
                return res.json(resJson)
            }
            if (passwd !== repeatPasswd) {
                resJson.msg = '两次输入密码不匹配!'
                return res.json(resJson)
            }
            User.getUsersByQuery({
                '$or': [{
                    'name': name
                }, {
                    'email': email
                }]
            }, {}, function(err, users) {
                if (err) {
                    return next(err)
                }
                if (users.length > 0) {
                    resJson.msg = '用户名或邮箱被占用!'
                    return res.json(resJson)
                }
                passwd = md5.update(passwd).digest('base64')
                var user = {
                    name: name,
                    email: email,
                    password: passwd
                }
                User.saveNewUser(user, function(err) {
                    if (err) {
                        return next(err)
                    }
                    Mail.sendActiveMail(email, md5(email + config.session_secret), name, email);
                    resJson.msg = '注册成功!'
                    return res.json(resJson)
                })
            })
        },
        getLogin: function(req, res, next) {
            return res.render('user/login.html', {
                title: '登录'
            })
            next()
        },
        login: function(req, res, next) {
            var md5 = crypto.createHash('md5'),
                loginUser = req.body.loginUser.toString().trim(),
                passwd = req.body.password.toString().trim(),
                email, name,
                resJson = {
                    code: 400,
                    msg: 'example'
                }

            if (!loginUser || !passwd) {
                resJson.msg = '信息不完整!'
                return res.json(resJson)
            }
            if (validator.isEmail(loginUser)) {
                email = loginUser
                User.getUserByEmail(email, login)
            } else {
                name = loginUser
                User.getUserByName(name, login)
            }

            function login(err, user) {
                if (err) {
                    return next(err)
                }
                if (!user) {
                    resJson.msg = '用户不存在!'
                    return res.json(resJson)
                }
                passwd = md5.update(passwd).digest('base64')
                if (passwd !== user.password) {
                    resJson.msg = '密码错误!'
                    return res.json(resJson)
                }
                resJson.code = 200
                resJson.msg = '登录成功!'
                return res.json(resJson)
            }
        },
        accountActive: function(req, res, next) {

        },
        logout: function(req, res, next) {
            req.session.user = null
            res.redirect('/')
        },
        authorize: function(req, res, next) {
            if (!req.session.user) {
                return res.redirect('/user/login')
            }
            next()
        }
    }
