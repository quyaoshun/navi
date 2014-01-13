var mongoose = require('mongoose'),
    config = require('../config')

mongoose.connect(config.db, function(err){
    if (err) {
        console.error('connect to %s error: ', config.db, err.message)
    }
    
    /* models */
    require('./user')
    
    exports.User = mongoose.model('User')
})
