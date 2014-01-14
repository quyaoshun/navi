var models = require('../models'),
    User = models.User

    module.exports = {
        getUserByName: function(names, callback) {
            if (names.length === 0) {
                return callback(null, [])
            }
            User.find({
                name: {
                    $in: names
                }
            }, callback)
        },
        getUserById: function(id, callback) {
            User.findOne({
                _id: id
            }, callback)
        },
        getUserByIds: function(ids, callback) {
            if (ids.length === 0) {
                return callback(null, [])
            }
            User.find({
                _id: {
                    $in: ids
                }
            }, callback)
        },
        getUsersByQuery: function(query, opt, callback){
            User.find(query, null, opt, callback)
        },
        saveNewUser: function(user, callback) {
            var newUser = new User()
            newUser.name = user.name
            newUser.email = user.email
            newUser.password = user.password
            newUser.save(callback)
        }
    }
