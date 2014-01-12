var user = require('./controllers/index').User

module.exports = function(app) {
    app.get('/', user.index)
    app.get('/signup', user.getSignUp)
    app.post('/signup', user.signUp)
    app.get('/login', user.getLogin)
    app.post('/login', user.login)
    app.get('/logout', user.logout)
}
