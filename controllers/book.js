var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

    module.exports = {
        getBooks: function(req, res, next) {
            Book.getBookList({}, null, function(err, books) {
                if (err) {
                    next(err)
                }
                /* return res.render('book/book', {
                    title: '书单',
                    booklist: books,
                    layout: 'layout'
                }) */
                return res.json({
                    booklist: books
                })
                next()
            })
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
            var bookId = req.body.bookId.toString().trim()
                bookTitle = req.body.bookTitle.toString().trim(),
                bookDesc = req.body.bookDesc.toString().trim(),
                bookAuthor = req.body.bookAuthor.toString().trim(),
                bookPress = req.body.bookPress.toString().trim(),
                bookReleaseDate = req.body.bookReleaseDate.toString().trim()
                updateBook = {
                    title: bookTitle,
                    desc: bookDesc,
                    author: bookAuthor,
                    press: bookPress,
                    releaseDate: bookReleaseDate
                }
            Book.findByIdAndUpdate(bookId, updateBook, function(err, book){
                if (err) {
                    return next(err)
                }
                return res.json({
                    updateBook: book
                })
                next()
            })
        },
        removeBook: function(req, res, next) {
            var bookId = req.body.bookId.toString().trim()
            Book.findByIdAndRemove(bookId, function(err, book){
                if (err) {
                    return next(err)
                }
                return res.json({
                    removeBook: book
                })
            })
        }
    }
