$(function() {
    var DS = {
        login: $('#login'),
        loginInput: $('#login input'),
        inputUserName: $('#inputUserName'),
        inputEmail: $('#inputEmail'),
        loginUser: $('#loginUser'),
        inputPassword: $('#inputPassword'),
        repeatPassword: $('#repeatPassword'),
        btnLogin: $('.d-btn-login'),
        btnSignUp: $('.d-btn-signup')
    },
        regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/

    DS.loginInput.on('focus', function() {
        $(this).css({
            'opacity': 0.9,
            '-moz-opacity': 0.9
        })
    }).on('blur', function() {
        $(this).css({
            'opacity': 0.7,
            '-moz-opacity': 0.7
        })
    })
    DS.inputEmail.on('blur', function(e) {
        e.preventDefault()
        var _this = this
        inputCheck($(_this), regEmail)
    })

    DS.btnSignUp.on('click', function(e) {
        e.preventDefault()
        if (inputCheck(DS.inputEmail, regEmail)) {
            $.ajax({
                url: '/signup',
                type: 'post',
                data: {
                    name: DS.inputUserName.val(),
                    email: DS.inputEmail.val(),
                    password: DS.inputPassword.val(),
                    repeatPassword: DS.repeatPassword.val()
                },
                success: function(data) {
                    alert(data.msg)
                }
            })
        }
    })

    DS.btnLogin.on('click', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/login',
            type: 'post',
            data: {
                loginUser: DS.loginUser.val(),
                password: DS.inputPassword.val()
            },
            success: function(data) {
                alert(data.msg)
            }
        })
    })

    function inputCheck(input, reg) {
        var formControl = input.parents('div.form-group')
        if (reg.test(input.val())) {
            formControl.removeClass('has-error').addClass('has-success')
            return true
        }
        formControl.addClass('has-error').removeClass('has-success')
        return false
    }
})
