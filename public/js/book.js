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
    
    DS.bookTable.delegate('.book-remove', function(){
        var bookid = $(this).data("bookid")
        $.ajax({
            url: '/book/removebook',
            type: 'post',
            data:{
                bookid: bookid
            },
            success: function(data){
                alert(data)
            }
        })
    }).delegate('.book-update', function(){
        var bookid = $(this).data("bookid")
        $.ajax({
            url: 'book/updatebook',
            type: 'post',
            data: {
                bookid: bookid
            },
            success: function(data){
                alert(data)
            }
        })
    })
})
