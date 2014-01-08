$(function(){
    var DS = {
        login: $('#login'),
        loginInput: $('#login input'),
        inputEmail: $('#inputEmail'),
        inputPassword: $('inputPassword'),
        btnLogin: $('.d-btn-login')
    }
    
    DS.loginInput.on('focus', function(){
        $(this).css({
            'opacity': 0.9,
            '-moz-opacity': 0.9
        })
    }).on('blur', function(){
        $(this).css({
            'opacity': 0.7,
            '-moz-opacity': 0.7
        })
    })
})
