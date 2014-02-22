var user = require('./controllers/index').User,
    book = require('./controllers/index').Book

    module.exports = function(app) {
        app.get('/', user.index)
        app.get('/user/signup', user.getSignUp)
        app.post('/user/signup', user.signUp)
        app.get('/user/login', user.getLogin)
        app.post('/user/login', user.login)
        app.get('/user/logout', user.logout)

        app.get('/account/active', user.accountActive)

        app.get('/books', book.bookIndex)
        app.get('/books/list', book.getBooks)
        app.get('/books/:bookid', book.bookIndex)
        app.post('/books', book.addBook)
        app.put('/books/:bookid', book.updateBook)
        app.delete('/books/:bookid', book.removeBook)
    }
