var user = require('./controllers/index').User

module.exports = function(app) {
    app.get('/', user.index)
}
