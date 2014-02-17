var models = require('../models'),
    UserBook = models.UserBook

    module.exports = {
        getBooksByUserId: function(userId, callback) {
            UserBook.find({
                userId: userId
            }, callback)
        },
        addNewUserBook: function(uid, bid, callback) {
            var newUserBook = new UserBook()
            newUserBook.update({
                userId: uid
            }, {
                $push: {
                    bookId: [bid]
                }
            }, {
                upsert: true
            }, callback)
        },
        addNewUserBooks: function(uid, bids, callback) {
            var newUserBook = new UserBook()
            newUserBook.update({
                userId: uid
            }, {
                $pushall: {
                    bookId: bids
                }
            }, {
                upsert: true
            }, callback)
        }
    }
