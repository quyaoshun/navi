module.exports = {
    index: function(req, res) {
		console.log(req.session)
		return res.redirect('/navi')
    },
    navi: function(req, res) {
        res.render('navi.html', {
            title: '商务前端导航页面',
            layout:'layout'
        })
    },
	show:{
		post: function(req, res){
			var show = {
					user: req.session.user,
					picture: req.body.picture,
					desc: req.body.desc
				}
		}
	},	
	list: function(req, res){
		res.render('list.html',{
			title:'list',
			layout:false
		})
	}
}
