var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

    module.exports = {
        bookIndex: function(req, res, next) {
            Book.getBookList({}, null, function(err, books) {
                if (err) {
                    next(err)
                }
                return res.json({books: books})
                next()
            })
        },
        getBooks: function(req, res, next) {
            Book.getBookList({}, null, function(err, books) {
                if (err) {
                    next(err)
                }
                return res.json({
                    books: books
                })
                next()
            })
        },
        addBook: function(req, res, next) {
            var bookTitle = req.body.bookTitle.toString().trim(),
                bookDesc = req.body.bookDesc.toString().trim(),
                bookAuthor = req.body.bookAuthor.toString().trim(),
                bookPress = req.body.bookPress.toString().trim(),
                bookReleaseDate = req.body.bookReleaseDate.toString().trim(),
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
                var newBook = {
                    title: bookTitle,
                    desc: bookDesc,
                    author: bookAuthor,
                    press: bookPress,
                    releaseDate: bookReleaseDate
                }
                Book.saveNewBook(newBook, function(err) {
                    if (err) {
                        return next(err)
                    }
                    resJson.code = 200
                    resJson.msg = '添加成功!'
                    return res.json(resJson)
                })
            })
        },
        updateBook: function(req, res, next) {
            var bookId = req.params.bookid,
                bookTitle = req.body.bookTitle.toString().trim(),
                bookDesc = req.body.bookDesc.toString().trim(),
                bookAuthor = req.body.bookAuthor.toString().trim(),
                bookPress = req.body.bookPress.toString().trim(),
                bookReleaseDate = req.body.bookReleaseDate.toString().trim(),
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
                },
                updateBook = {
                    title: bookTitle,
                    desc: bookDesc,
                    author: bookAuthor,
                    press: bookPress,
                    releaseDate: bookReleaseDate
                }
            Book.getBookByTitle(bookTitle, function(err, books) {
                if (err) {
                    return next(err)
                }
                if (books.length > 0) {
                    resJson.msg = "同样书名已被添加！"
                    return res.json(resJson)
                }
                var newBook = {
                    title: bookTitle,
                    desc: bookDesc,
                    author: bookAuthor,
                    press: bookPress,
                    releaseDate: bookReleaseDate
                }
                Book.updateBookById(bookId, updateBook, function(err, book) {
                    if (err) {
                        return next(err)
                    }
                    resJson["bookInfo"] = book
                    return res.json(resJson)
                    next()
                })
            })
        },
        removeBook: function(req, res, next) {
            var bookId = req.params.bookid
            Book.removeBookById(bookId, function(err, book) {
                if (err) {
                    return next(err)
                }
                return res.json({
                    removeBook: book
                })
            })
        }
    }
