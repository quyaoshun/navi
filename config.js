var path = require('path'),
    pkg = require('./package.json')

    module.exports = {
        name: pkg.name,
        version: pkg.version,
        // db: 'mongodb://127.0.0.1/navi',
        db: 'mongodb://navi:navi@troup.mongohq.com:10005/navi',
        session_secret: 'navi',
        auth_cookie_name: 'navi',
        host: 'localhost',
        mail_conf: {
            host: 'smtp.163.com',
            port: 25,
            auth: {
                user: '**@*.com',
                pass: '**'
            }
        }
    }
