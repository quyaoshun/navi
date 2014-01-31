var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

    module.exports = {
        getBooks: function(req, res, next) {
            Book.getBookList({}, [], function() {

            })
            return res.render('book/book', {
                title: '书单',
                books: books,
                layout: 'layout'
            })
            next()
        },
        addBook: function(req, res, next) {
            var bookTitle = req.body.bookTitle.toString().trim(),
                bookDesc = req.body.bookDesc.toString().trim(),
                bookAuthor = req.body.bookAuthor.toString().trim(),
                bookPress = req.body.bookPress.toString().trim(),
                bookReleaseDate = req.body.bookReleaseDate.toString().trim()
                resJson = {
                    code: 400,
                    msg: 'example',
                    bookInfo: {
                        title: bookTitle,
                        desc: bookDesc,
                        author: bookAuthor,
                        press: bookPress,
                        releaseDate: bookReleaseDate
                    }
                }

            Book.getBookByTitle(bookTitle, function(err, books) {
                if (err) {
                    return next(err)
                }
                if (books.length > 0) {
                    resJson.msg = "同样书名已被添加！"
                    return res.json(resJson)
                }
                var book = {
                    title: bookTitle,
                    desc: bookDesc,
                    author: bookAuthor,
                    press: bookPress,
                    releaseDate: bookReleaseDate
                }
                Book.saveNewBook(book, function(err) {
                    if (err) {
                        return next(err)
                    }
                    resJson.code = 200
                    resJson.msg = '添加成功!'
                    return res.json(resJson)
                })
            })

        },
        editBook: function(req, res, next) {

        },
        removeBook: function(req, res, next) {

        }
    }
