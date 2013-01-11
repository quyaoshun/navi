/*
 * GET home page.
 */
var site = require('./controllers/site'),
    check = require('./controllers/check'),
    user = require('./controllers/user'),
    blog = require('./controllers/blog')

    module.exports = function (app) {
        app.get('/', site.index)

        app.get('/reg', check.account.notlogged)
        app.get('/reg', user.account.reg)
		app.get('/login', check.account.notlogged)
		app.get('/login', user.account.login)

        app.get('/new', check.account.logged)
        app.get('/new', blog.new)

        app.post('/new', check.account.notlogged)
        app.post('/new', blog.publish)
    }

