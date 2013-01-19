/*
 * GET home page.
 */
var site = require('./controllers/site'),
    check = require('./controllers/check'),
    user = require('./controllers/user')

    module.exports = function (app) {
        app.get('/', site.index)
        app.get('/navi', site.navi)
		app.get('/list', site.list)
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
    }

