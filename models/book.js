var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookSchema = new Schema({
        bookId: {
            type: ObjectId
        },
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
        publicTime: {
            type: Date
        },
        addTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date,
            default: Date.now
        }
    })

    mongoose.model('Book', BookSchema)
