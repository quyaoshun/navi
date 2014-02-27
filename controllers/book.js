var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

    module.exports = {
        bookIndex: function(req, res, next) {
            Book.getBookList({}, null, function(err, books) {
                if (err) {
                    next(err)
                }
                return res.json(books)
                next()
            })
        },
        getBooks: function(req, res, next) {
            Book.getBookList({}, null, function(err, books) {
                if (err) {
                    next(err)
                }
                return res.json(books)
                next()
            })
        },
        getBook: function(req, res, next) {
            Book.getBookByBookId(req.params.bookId, function(err, book) {
                if (err) {
                    next(err)
                }
                return res.json(book)
            })
        },
        add: function(req, res, next) {
            console.log(req.body)
            var title = req.body.title.toString().trim(),
                desc = req.body.desc.toString().trim(),
                author = req.body.author.toString().trim(),
                press = req.body.press.toString().trim(),
                releaseDate = req.body.releaseDate.toString().trim(),
                resJson = {
                    code: 400,
                    msg: 'example',
                    book: {
                        title: title,
                        desc: desc,
                        author: author,
                        press: press,
                        releaseDate: releaseDate
                    }
                }

            Book.getBookByTitle(title, function(err, books) {
                if (err) {
                    return next(err)
                }
                if (books.length > 0) {
                    resJson.msg = "同样书名已被添加！"
                    return res.json(resJson)
                }
                var newBook = {
                    title: title,
                    desc: desc,
                    author: author,
                    press: press,
                    releaseDate: releaseDate
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
        update: function(req, res, next) {
            var bookId = req.params.bookId,
                title = req.body.title.toString().trim(),
                desc = req.body.desc.toString().trim(),
                imgUrl = req.body.imgUrl.toString().trim(),
                author = req.body.author.toString().trim(),
                press = req.body.press.toString().trim(),
                releaseDate = req.body.releaseDate.toString().trim(),
                resJson = {
                    code: 400,
                    msg: 'example',
                    book: {
                        title: title,
                        desc: desc,
                        imgUrl: imgUrl,
                        author: author,
                        press: press,
                        releaseDate: releaseDate
                    }
                },
                updateBook = {
                    title: title,
                    desc: desc,
                    author: author,
                    imgUrl: imgUrl,
                    press: press,
                    releaseDate: releaseDate
                }
            Book.getBookByTitle(title, function(err, books) {
                if (err) {
                    return next(err)
                }
                if (books.length > 0) {
                    resJson.msg = "同样书名已被添加！"
                    return res.json(resJson)
                }
                Book.updateBookById(bookId, updateBook, function(err, book) {
                    if (err) {
                        return next(err)
                    }
                    resJson["book"] = book
                    return res.json(resJson)
                    next()
                })
            })
        },
        remove: function(req, res, next) {
            var bookId = req.params.bookId
            console.log(bookId)
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
