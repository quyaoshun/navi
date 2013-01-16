/*
 * GET home page.
 */
var site = require('./controllers/site'),
    check = require('./controllers/check'),
    user = require('./controllers/user'),
    blog = require('./controllers/blog')

    module.exports = function (app) {
        app.get('/', site.index)
        app.get('/navigator', site.navigator)

        app.get('/reg', check.account.notlogged)
        app.get('/reg', user.reg.get)
		app.get('/login', check.account.notlogged)
		app.get('/login', user.login.get)

		app.get('/init', user.init)
		app.get('/users', user.find)
		
        app.post('/reg', check.account.notlogged)
        app.post('/reg', user.reg.post)
		app.post('/login', check.account.notlogged)
		app.post('/login', user.login.post)

        app.get('/new', check.account.logged)
        app.get('/new', blog.create.init)

        app.post('/new', check.account.notlogged)
        app.post('/new', blog.create.publish)
    }

