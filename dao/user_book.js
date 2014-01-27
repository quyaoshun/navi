var models = require('../models'),
    UserBook = models.UserBook

module.exports = {
    getUserBook: function(userId, bookId, callback){
        UserBook.findOne({
            userId: userId,
            bookId: bookId
        }, callback)
    },
    getUserBookByUserId: function(userId, callback){
        UserBook.find({
            userId: userId
        }, callback)
    },
    saveNewUserBook: function(userId, bookId, callback){
        var UserBook = new UserBook()
        UserBook.userId = userId
        UserBook.bookId = bookId
        UserBook.save(callback)
    },
    removeUserBook: function(userId, bookId, callback){
        UserBook.remove({
            userId: userId,
            bookId: bookId
        }, callback)
    }
}
