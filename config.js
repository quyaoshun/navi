var path = require('path'),
    pkg = require('./package.json')
    module.exports = {
        name: 'Book List',
        version: pkg.version,
        db: 'mongodb://127.0.0.1/record_dev',
        session_secret: 'records',
        auth_cookie_name: 'records',
        host: 'localhost',
        port: app.get('port'),
        mail_conf: {
            host: 'smtp.163.com',
            port: 25,
            auth: {
                user: 'dongdong910728@163.com',
                pass: '939152381'
            }
        }
