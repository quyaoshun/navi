var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookSchema = new Schema({
        _id: {
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
        releaseDate: {
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
