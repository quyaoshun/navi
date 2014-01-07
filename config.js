var path = require('path'),
    pkg = require('./package.json')
    module.exports = {
        name: 'Reading List',
        version: pkg.version,
        db: 'mongodb://127.0.0.1/record_dev',
        session_secret: 'book_list',
        auth_cookie_name: 'book_list'
    }