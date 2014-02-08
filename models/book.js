var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,

    BookSchema = new Schema({
        title: {
            type: String
        },
        desc: {
            type: String
        },
        author: {
            type: String
        },
        press: {
            type: String
        },
        releaseDate: {
            type: Date
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

    mongoose.model('Book', BookSchema)
