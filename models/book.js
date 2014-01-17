var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookSchema = new Schema({
        bookId: {
            type: ObjectId
        },
        bookName: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        addTime: {
            type: Date
        },
        press: {
            type: String,
            default: ''
        }
    })

mongoose.model('Book', BookSchema)
