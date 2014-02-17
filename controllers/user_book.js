var User = require('../dao').User,
    UserBook = require('../dao').UserBook

module.exports = {
    getBooksByUserId: function(req, res, next){
        var uid
        UserBook.getBooksByUserId(uid, function(err, uBooks){
            if (err) {
                next(err)
            }
            return res.json(uBooks)
            next()
        })
    },
    addUserBook: function(req, res, next){
        var uid,
            bid
        UserBook.addUserBook(uid, bid, function(err, book){
            if (err) {
                next(err)
            }
            return res.json(book)
            next()
        })
    },
    addUserBooks: function(req, res, next){
        var uid,
            bids = []
        UserBook.addUserBooks(uid, bids, function(err, books){
            if (err) {
                next(err)
            }
            return res.json(books)
            next()
        })
    }
}
