var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookSchema = new Schema({
        bookId: {
            type: ObjectId
        },
        name: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        publicTime: {
            type: Date
        },
        addTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date
            default: Date.now
        },
        press: {
            type: String,
            default: ''
        }
    })

mongoose.model('Book', BookSchema)
