$(function() {
    DS = {
        bookTitle: $('#booktitle'),
        bookDesc: $('#bookdesc'),
        bookAuthor: $('#bookauthor'),
        bookPress: $('#bookpress'),
        bookReleaseDate: $('#bookreleasedate'),
        bookSubmit: $('#booksubmit'),

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
})
