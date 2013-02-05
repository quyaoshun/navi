$(function(){
	var ds = {
		navlist: $('.j-navlist li'),
		navlistlink:$('.j-navlist a'),
		tablelist: $('.j-tablelist tbody')

	}
	ds.navlistlink.each(function(index,el){
		$(this).on('click',function(e){
			e.preventDefault()
			ds.navlist.removeClass('active')
			$(this).parent().addClass('active')
			if($(this).attr('href')=="#all"){
				tbodylist.showall()
			}else{
			tbodylist.showOnetype($(this).attr('href')) 
			}
		})
	})

	var tbodylist = {
		init: function(){},
		showall: function(){
			ds.tablelist.removeClass('hide')	
		},
		showOnetype:function(type){
			ds.tablelist.addClass('hide')
			$(type).removeClass('hide')
		},
		render: function(){},
		setData: function(data){
				
		}
	}
})
