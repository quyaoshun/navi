/**
 * Module dependencies.
 */
var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	fs = require('fs'),
	markdown = require('markdown').markdown,
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
  app.use(express.bodyParser({
	uploadDir: settings.uploadDir 
  }))
  app.use(express.methodOverride())
  app.use(express.cookieParser())
  app.use(express.session({
	secret: settings.cookieSecret
  }))
  app.use(app.router)
  app.use(express.static(path.join(__dirname, 'public')))
})

app.engine('md', function(path, options, fn){
	fs.readFile(path, 'utf8', function(err,str){
		if(err){
			return fn(err)
		}
		str = markdown.toHTML(str)
		fn(null,str)
	})
})
app.configure('development', function(){
  app.use(express.errorHandler())
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
routes(app)
