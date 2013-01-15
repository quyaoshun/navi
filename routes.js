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
        app.get('/reg', user.account.regInit)
		app.get('/login', check.account.notlogged)
		app.get('/login', user.account.loginInit)

		
        app.post('/reg', check.account.notlogged)
        app.post('/reg', user.account.regPost)
		app.post('/login', check.account.notlogged)
		app.post('/login', user.account.loginPost)

        app.get('/new', check.account.logged)
        app.get('/new', blog.create.init)

        app.post('/new', check.account.notlogged)
        app.post('/new', blog.create.publish)
    }

