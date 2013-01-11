exports.new = function (req, res) {
    res.render('blog', {
        title: 'Create',
		user: req.session.user,
		success: req.flash('success').toString(),
        error: req.flash('error').toString(),
        layout: 'layout'
    })
}

exports.publish = function (req, res) {

}

