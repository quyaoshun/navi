
exports.index = function(req,res){
	res.render('index',{
		title:'home',
		layout:'layout'
	})
	console.log('index page')
}
