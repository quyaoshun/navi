var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    UserSchema = new Schema({
        name: {
            type: String,
            index: true
        },
        loginName: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        createTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date,
            default: Date.now
        }
    })

    mongoose.model('User', UserSchema)
