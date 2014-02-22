function BookListCtrl($scope, $http) {
    /* $scope.books = [{
        "releaseDate": "2014-03-08T13:16:26.000Z",
        "press": "test0",
        "author": "test0",
        "desc": "test0",
        "title": "test0",
        "_id": "5308bae92b065f4316c91688",
        "__v": 0,
        "updateTime": "2014-02-22T14:57:45.052Z",
        "createTime": "2014-02-22T14:57:45.051Z",
        "comments": [],
        "categories": "Uncategorized",
        "tags": []
    }, {
        "releaseDate": "2014-02-22T14:57:19.000Z",
        "press": "test2",
        "author": "test2",
        "desc": "test2",
        "title": "test2",
        "_id": "5308bafe2b065f4316c91689",
        "__v": 0,
        "updateTime": "2014-02-22T14:58:06.238Z",
        "createTime": "2014-02-22T14:58:06.238Z",
        "comments": [],
        "categories": "Uncategorized",
        "tags": []
    }] */
    $http.get('books/list').success(function(data) {
        $scope.books = data.books
    })
    $scope.orderProp = 'title'
}

BookListCtrl.$inject = ['$scope', '$http']

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
            url: '/book/add',
            type: 'post',
            data: {
                bookTitle: DS.bookTitle.val().trim(),
                bookDesc: DS.bookDesc.val().trim(),
                bookAuthor: DS.bookAuthor.val().trim(),
                bookPress: DS.bookPress.val().trim(),
                bookReleaseDate: DS.bookReleaseDate.val().trim()
            },
            success: function(data) {
                alert(data)
                if (data.code === 200) {
                    $('#addBook').modal('toggle')
                }
            }
        })
    })

    DS.bookTable.delegate('.book-remove', 'click', function() {
        var bookId = $(this).data("bookid")
        $.ajax({
            url: '/book/remove',
            type: 'post',
            data: {
                bookId: bookId
            },
            success: function(data) {
                alert(data)
            }
        })
    }).delegate('.book-update', 'click', function() {
        var bookId = $(this).data("bookid"),
            bookTitle = 'test0',
            bookDesc = 'test0',
            bookAuthor = 'test0',
            bookPress = 'test0',
            bookReleaseDate = '2014-02-08 21:16:26'
        $.ajax({
            url: 'book/bookid',
            type: 'put',
            data: {
                bookId: bookId,
                bookTitle: bookTitle,
                bookDesc: bookDesc,
                bookAuthor: bookAuthor,
                bookPress: bookPress,
                bookReleaseDate: bookReleaseDate
            },
            success: function(data) {
                alert(data)
            }
        })
    })
})
