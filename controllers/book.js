var Book = require('../dao').Book,
    validator = require('validator'),
    crypto = require('crypto')

module.exports = {
    getBooks: function(req, res, next){
        return res.render('book', {
            title: '书单',
            layout: 'layout'
        })
        next()
    },
    addBook: function(req, res, next) {

    },
    editBook: function(req, res, next) {

    },
    removeBook: function(req, res, next){

    }
}
