var mongoose = require('mongoose'),
    config = require('../config')

mongoose.connect(config.db, function(err){
    if (err) {
        console.error('connect to %s error: ', config.db, err.message)
        
        process.exit(1)
    }
})


require('./user')

exports.User = mongoose.model('User')
