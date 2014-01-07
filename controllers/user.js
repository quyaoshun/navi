module.exports = {
    index: function(req, res, next) {
        res.render('index', {
            title: 'Reading List',
            layout: 'layout'
        })
    },
    signup: function(req, res, next) {

    },
    login: function(req, res, next) {},
    logout: function(req, res, next) {},
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
