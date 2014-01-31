var models = require('../models'),
    Book = models.Book

module.exports = {
    getBookList: function(query, opt, callback){
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
    getBookById: function(id, callback) {
        Book.findOne({
            _id: id
        }, callback)
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
    }
}
