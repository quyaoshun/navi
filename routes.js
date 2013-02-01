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
        app.get('/reg', check.account.logged)
        app.get('/reg', user.reg.get)
		app.get('/login', check.account.logged)
		app.get('/login', user.login.get)
		app.get('/logout', user.logout)
		app.get('/init', user.init)
		app.get('/users', user.find)
		app.get('/shows', check.account.unlogged)
		app.get('/shows', site.shows.get)

        app.post('/reg', check.account.logged)
        app.post('/reg', user.reg.post)
		app.post('/login', check.account.logged)
		app.post('/login', user.login.post)
		app.post('/shows', check.account.unlogged)
		app.post('/shows', site.shows.post)

		app.get('/markdown', site.markdown)
    }

