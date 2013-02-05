$(function(){
	function test(){
		var producturl = $('#producturl').val().trim(),
			picture = $("#picture").val().trim(),
			description = $('#description').val().trim()
			isValid = true
		if(producturl ===''||picture ===''||description === ''){
			isValid = false
		}
		return isValid
	}
	$('#shows-submit').on('click',function(){
		if(!test()){
			return false
		}
		return true
	})
})
