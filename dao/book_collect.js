var models = require('../models'),
    BookCollect = models.BookCollect

module.exports = {
    getBookCollect: function(userId, bookId, callback){
        BookCollect.findOne({
            userId: userId,
            bookId: bookId
        }, callback)
    },
    getBookCollectByUserId: function(userId, callback){
        BookCollect.find({
            userId: userId
        }, callback)
    },
    saveNewBookCollect: function(userId, bookId, callback){
        var bookCollect = new BookCollect()
        bookCollect.userId = userId
        bookCollect.bookId = bookId
        bookCollect.save(callback)
    },
    removeBookCollect: function(userId, bookId, callback){
        BookCollect.remove({
            userId: userId,
            bookId: bookId
        }, callback)
    }
}
