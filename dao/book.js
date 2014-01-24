var models = require('../models'),
    Book = models.Book

module.exports = {
    getBooksByName: function() {
        getBooksByIds: function(ids, callback){
            if (ids.length === 0) {
                return callback(null, [])
            }
            Book.find({
                bookId: {
                    $in: ids
                } 
            }, callback)
        },
        getBookById: function(id, callback){
            Book.findOne({
                _id: id
            }, callback)
        },
        saveNewBook: function(book, callback){
            var newBook = new Book()
            newBook.name = book.name
            newBook.author = book.author
            newBook.publicTime = book.publicTime
            newBook.save(callBack)
        }
    }    
}
