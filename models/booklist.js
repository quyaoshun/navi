var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookSchema = new Schema({
        reader: {
            type: ObjectId 
        },
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
        addTime: {
            type: Date,
            default: Date.now
        }
    })

mongoose.model('Book', BookSchema)
