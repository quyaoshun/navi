var models = require('../models'),
    User = models.User

    module.exports = {
        getUserByName: fucntion(names, callback) {
            if (names.length === 0) {
                return callback(null, [])
            }
            User.find({
                name: {
                    $in: names
                }
            }, callback)
        },
        getUserByLoginName: function(loginName, callback) {
            User.findOne({
                loginName: loginName
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
        saveNewUser: function(user, callback){
            var newUser = new User()
            newUser.name = user.name
            newUser.email = user.email
            newuser.loginName = user.loginName
            newuser.save(callback)
        }
    }
