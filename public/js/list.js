$(function(){
	var ds = {
		searchform: $('.navbar-search'),
		search: $('.search-query')
	}
	ds.search.on('submit',function(e){
		e.preventDefault()
		$.ajax({
			url: "/js/test.json",
			data:{
				search:ds.search.val().trim()
			},
			success: function(data){
				console.log(data)
			}
		})		
	})

})
