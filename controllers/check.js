exports.account = {
    logged: function (req, res, next) {
        /*if (!req.session.user) {
            req.flash('error', 'δ��¼')
            return res.redirect('/login')
        }*/
		console.log(logged)
        next()
    },
    notlogged: function (req, res, next) {
        /*if (req.session.user) {
            req.flash('error', '�ѵ�¼')
            return res.redirect('/')
        }*/ 
		console.log('notlogged')
        next()
    }
}

