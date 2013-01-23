exports.account = {
	unlogged: function (req, res, next) {
        if (!req.session.user) {
           // req.flash('error', 'Î´µÇÂ¼')
            return res.redirect('/login')
        }
        next()
    },
    logged: function (req, res, next) {
        if (req.session.user) {
         //   req.flash('error', 'ÒÑµÇÂ¼')
            return res.redirect('/')
        }
        next()
    }
}

