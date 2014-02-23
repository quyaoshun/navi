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

        app.get('/api/books', book.bookIndex)
        app.get('/api/books/list', book.getBooks)
        app.get('/api/books/:bookid', book.bookIndex)
        app.post('/api/books', book.addBook)
        app.put('/api/books/:bookid', book.updateBook)
        app.delete('/api/books/:bookid', book.removeBook)
    }
