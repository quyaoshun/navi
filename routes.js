/*
 * GET home page.
 */
var site = require('./controllers/site.js'),
	comments = require('./controllers/comments.js')
module.exports = function(app){
    app.get('/', site.index)
}