module.exports = {
    index: function(req, res) {
        res.render('index.html', {
            title: 'home',
            layout: 'layout'
        })
    },
    nav: function(req, res) {
        res.render('navigator.html', {
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
