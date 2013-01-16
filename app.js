
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	partials = require('express-partials'),
	settings = require('./settings'),
	app = express()
app.engine('html', require('ejs').renderFile)
app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'ejs')
  app.use(partials())
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.cookieParser())
  app.use(app.router)
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.session({
	secret: settings.cookieSecret
  }))
})

app.configure('development', function(){
  app.use(express.errorHandler())
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
routes(app)
