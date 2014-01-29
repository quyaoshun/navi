var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

module.exports = {
    getBooks: function(req, res, next){
        return res.render('book/book', {
            title: '书单',
            layout: 'layout'
        })
        next()
    },
    addBook: function(req, res, next) {
        var bookTitle = req.body.booktitle.toString().trim(),
            bookDesc = req.body.bookdesc.toString().trim(),
            bookAuthor = req.body.bookauthor.toString().trim(),
            bookPress = req.body.bookpress.toString().trim(),
            bookReleaseDate = req.body.bookreleasedate.toString().trim()


    },
    editBook: function(req, res, next) {

    },
    removeBook: function(req, res, next){

    }
}
