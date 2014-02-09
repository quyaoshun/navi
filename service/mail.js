var nodemailer = require('nodemailer'),
    config = require('../config')

    smtpTransport = nodemailer.createTransport("SMTP", config.mail_conf)

    funciton sendMail(data) {
        return smtpTransport.sendMail(data, function(err) {
            if (err) {
                return console.error(err)
            }
        })
    }

    /*
     *
     */
module.exports = {
    sendActiveMail: function(email, name, token) {
        var from = config.mail_conf.auth.user,
            to = email,
            subject = config.name + '账号激活',
            SITE_ROOT_URL = 'http://' + config.host + (config.port !== 80 ? ':' + config.port : ''),
            html = '<p>' + name + '，您好：</p>' +
                '<p>我们收到您在 ' + config.name + ' 的注册申请，请点击下面的链接激活帐户：</p>' +
                '<a href=' + SITE_ROOT_URL + '/account/active?token=#' + token + '&email=' + email + '>' +
                '请点击本链接激活帐号 </a>'

        sendMail({
            from: from,
            to: to,
            subject: subject,
            html: html
        })
    }
}
