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

        app.get('/book', book.bookIndex)
        app.get('/book/all', book.getBooks)
        app.post('/book/addbook', book.addBook)
        app.post('/book/updatebook', book.updateBook)
        app.post('/book/removebook', book.removeBook)
    }
