var settings = require('../settings'),
	mongoose = require('mongoose')

module.exports = mongoose.createConnection(settings.host, settings.db)
