var path = require('path')
module.exports = {
    cookieSecret: 'navi',
    db:'shows',
    host:'localhost',
	uploadDir: path.join(__dirname,'public','tmp')
}
