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
