$(function() {
    DS = {
        bookTitle: $('#book-title'),
        bookDesc: $('#book-desc'),
        bookAuthor: $('#book-author'),
        bookPress: $('#book-press'),
        bookReleaseDate: $('#book-releasedate'),
        bookSubmit: $('#book-submit'),
        bookTable: $('#book-table')
    }
    DS.bookSubmit.on('click', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/book/addbook',
            type: 'post',
            data: {
                bookTitle: DS.bookTitle.val().trim(),
                bookDesc: DS.bookDesc.val().trim(),
                bookAuthor: DS.bookAuthor.val().trim(),
                bookPress: DS.bookPress.val().trim(),
                bookReleaseDate: DS.bookReleaseDate.val().trim()
            },
            success: function(data){
                alert(data)
                if (data.code === 200) {
                    $('#addBook').modal('toggle')
                }
            }
        })
    })
    
    DS.bookTable.delegate('.book-remove', 'click', function(){
        var bookId = $(this).data("bookid")
        $.ajax({
            url: '/book/removebook',
            type: 'post',
            data:{
                bookId: bookId
            },
            success: function(data){
                alert(data)
            }
        })
    }).delegate('.book-update', 'click', function(){
        var bookId = $(this).data("bookid"),
            bookTitle = 'test1',
            bookDesc = 'test1',
            bookAuthor = 'test1',
            bookPress = 'test1',
            bookReleaseDate = '2014-02-08 21:16:26'
        $.ajax({
            url: 'book/updatebook',
            type: 'post',
            data: {
                bookId: bookId,
                bookTitle: bookTitle,
                bookDesc: bookDesc,
                bookAuthor: bookAuthor,
                bookPress: bookPress,
                bookReleaseDate: bookReleaseDate
            },
            success: function(data){
                alert(data)
            }
        })
    })
})
;$(function() {
    var DS = {
        navBarList: $('.navbar-nav'),
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

    DS.navBarList.delegate('li', 'click', function(){
        var _this = this
        $(_this).siblings().removeClass('active')
        $(_this).addClass('active')
    })
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
                url: '/user/signup',
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
            url: '/user/login',
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
