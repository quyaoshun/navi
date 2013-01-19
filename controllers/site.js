module.exports = {
    index: function(req, res) {
		return res.redirect('/navi')
    },
    navi: function(req, res) {
        res.render('navi.html', {
            title: '商务前端导航页面',
            layout:'layout'
        })
    },
	list: function(req, res){
		res.render('list.html',{
			title:'list',
			layout:false
		})
	}
}
