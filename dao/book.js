var models = require('../models'),
    User = models.User,
    Book = models.Book,
    UserBook = models.UserBook

    module.exports = {
        getBookList: function(query, opt, callback) {
            Book.find(query, opt, callback)
        },
        getBooksByIds: function(ids, callback) {
            if (ids.length === 0) {
                return callback(null, [])
            }
            Book.find({
                _id: {
                    $in: ids
                }
            }, callback)
        },
        getBookByBookId: function(id, callback) {
            Book.findById(id).exec(callback)
        },
        getBookByTitle: function(title, callback) {
            Book.find({
                title: title
            }, callback)
        },
        saveNewBook: function(book, callback) {
            var newBook = new Book()
            newBook.title = book.title
            newBook.desc = book.desc
            newBook.author = book.author
            newBook.press = book.press
            newBook.releaseDate = book.releaseDate
            newBook.save(callback)
        },
        updateBookById: function(bookId, updateBook, callback) {
            Book.findByIdAndUpdate(bookId, updateBook, callback)
        },
        removeBookById: function(bookId, callback) {
            Book.findByIdAndRemove(bookId, callback)
        }
    }
