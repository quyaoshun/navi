module.exports = {
    index: function(req, res) {
        res.render('index.html', {
            title: 'home',
            layout: 'layout'
        })
    },
    navigator: function(req, res) {
        res.render('navigator.html', {
            title: '商务前端导航页面',
            layout:'layout'
        })
    }
}
